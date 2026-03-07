import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import type { GTNProjectService } from '@app/services/GTNProjectService';
import { GTNApplicationState } from '@app/state/GTNApplicationState';
import type { IGTNInterpreter } from '@domain/interfaces/IGTNInterpreter';
import type { IGTNTurtleRepository } from '@domain/interfaces/IGTNTurtleRepository';
import type { IGTNLanguageService } from '@domain/interfaces/IGTNLanguageService';
import type { GTNSyntaxService } from '@domain/services/GTNSyntaxService';
import { GTNTurtle } from '@domain/entities/GTNTurtle';
import { GTNGeometryService } from '@domain/services/GTNGeometryService';
import { GTNContainer } from '@infrastructure/di/GTNContainer';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';
import type { GTNInMemoryTurtleRepository } from '@infrastructure/store/GTNInMemoryTurtleRepository';
import type { GTNError } from '@infrastructure/antlr/GTNErrorListener';
import { type GTNTurtleBoundaryMode, type UiLanguage } from '@domain/types';

import { srOnlyStyles } from '@ui/styles/shared-styles';
import styles from './gtn-app.scss?inline';

// Components
import { GTNToolbar } from './components/gtn-toolbar';
import { GTNEditor } from './components/gtn-editor';
import { GTNCanvas } from './components/gtn-canvas';
import { DevResetButton } from './components/dev-reset-button';
import { GTNErrorToast } from './components/gtn-error-toast';
import { GtnSandbox } from './components/gtn-sandbox';
import { GTNWorkbench } from './components/gtn-workbench';
import { GTNProceduresPanel } from './components/workbench/gtn-procedures-panel';

// Import the Type from toolbar
import type { ViewMode } from './components/gtn-toolbar';
import type { IGTNProcedureRegistry } from '@domain/interfaces/IGTNProcedureRegistry';

const isDev = import.meta.env.DEV;

const SCRIPT_EXAMPLES: Record<string, string> = {
  fr: `
crayon rouge;
pas := 36;
rot := 360 / pas;
rep 36 [
  av rot;
  td rot;
]
crayon "vert"
petitcarre
`,
  en: `
color red;
step := 36;
rot := 360 / pas;
repeat 36 [
  fd rot;
  rt rot;
]
color green
littlesquare
`
};

const PROCEDURE_EXAMPLES: Record<string, string> = {
  fr: `pour petitcarre\n  rep 4 [\n    av 50\n    td 90\n  ]\nfin`,
  en: `def littlesquare\n  repeat 4 [\n    fd 50\n    rt 90\n  ]\nend`
};

@customElement('gtn-app')
export class GTNApp extends LitElement {
  static override readonly styles = [
    srOnlyStyles,
    css`
      ${unsafeCSS(styles)}
    `
  ];

  @state()
  private accessor code = '';

  @state()
  private accessor proceduresCode = '';

  @state()
  private accessor errors: GTNError[] = [];

  @state()
  private accessor viewMode: ViewMode = 'SANDBOX';

  @state()
  private accessor userProcedures: string[] = [];

  @state()
  private accessor currentBoundaryMode: GTNTurtleBoundaryMode = 'WRAP';

  private readonly interpreter: IGTNInterpreter;
  private readonly langService: IGTNLanguageService;
  private readonly turtleRepo: IGTNTurtleRepository;
  private readonly projectService: GTNProjectService;
  private readonly syntaxService: GTNSyntaxService;
  private readonly appState: GTNApplicationState;
  private uiUnsubscribe?: () => void;
  private appStateUnsubscribe?: () => void;

  constructor() {
    super();
    // Prevent tree shaking issues
    /* eslint-disable @typescript-eslint/S905 */
    [
      DevResetButton,
      GTNCanvas,
      GTNEditor,
      GTNErrorToast,
      GtnSandbox,
      GTNToolbar,
      GTNWorkbench,
      GTNProceduresPanel
    ];

    const container = GTNContainer.getInstance();
    this.interpreter = container.resolve<IGTNInterpreter>(GTN_TYPES.Interpreter);
    this.langService = container.resolve<IGTNLanguageService>(GTN_TYPES.LanguageService);
    this.turtleRepo = container.resolve<IGTNTurtleRepository>(GTN_TYPES.TurtleRepository);
    this.projectService = container.resolve<GTNProjectService>(GTN_TYPES.ProjectService);
    this.syntaxService = container.resolve<GTNSyntaxService>(GTN_TYPES.SyntaxService);
    this.appState = container.resolve<GTNApplicationState>(GTN_TYPES.ApplicationState);
    this.currentBoundaryMode = this.appState.boundaryMode;
    this.turtleRepo.setBoundaryMode(this.currentBoundaryMode);

    const detectedLang = this.langService.getDslLanguage();
    const initialScriptCode = SCRIPT_EXAMPLES[detectedLang] || '';
    const initialProcedure = PROCEDURE_EXAMPLES[detectedLang] || '';
    this.code = initialScriptCode;
    this.proceduresCode = initialProcedure;
  }

  override connectedCallback() {
    super.connectedCallback();
    this.uiUnsubscribe = this.langService.subscribeUiListeners(
      this.handleLanguageChange.bind(this)
    );
    this.appStateUnsubscribe = this.appState.subscribe(() => {
      const mode = this.appState.boundaryMode;
      this.currentBoundaryMode = mode;
      this.turtleRepo.setBoundaryMode(mode);
    });
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    if (this.uiUnsubscribe) {
      this.uiUnsubscribe();
    }
    if (this.appStateUnsubscribe) {
      this.appStateUnsubscribe();
    }
  }

  override firstUpdated() {
    super.firstUpdated(new Map());
    this.initializeLanguageAndProcedures();
  }

  // Move the async logic here to please Sonar with async/await
  private async initializeLanguageAndProcedures() {
    try {
      await this.langService.initialize();

      this.userProcedures = this.syntaxService.extractProcedures(this.proceduresCode);
      this.validateCombinedCode();

      this.requestUpdate();
    } catch (error) {
      console.error('Failed to initialize DSL resources:', error);
    }
  }

  // --- Handlers ---

  private handleLanguageChange(lang: UiLanguage) {
    this.validateCombinedCode();
  }

  private handleCodeChange(event: CustomEvent) {
    this.code = event.detail.code;
    this.validateCombinedCode();
  }

  private handleProceduresChange(event: CustomEvent) {
    this.proceduresCode = event.detail.code;
    this.userProcedures = this.syntaxService.extractProcedures(this.proceduresCode);
    this.validateCombinedCode();
  }

  private validateCombinedCode() {
    const fullCode = `${this.proceduresCode}\n${this.code}`;
    this.errors = this.syntaxService.validate(fullCode);
  }

  private handleViewChange(event: CustomEvent) {
    this.viewMode = event.detail.view;
  }

  private handleBoundaryModeChange(event: CustomEvent<{ mode: GTNTurtleBoundaryMode }>) {
    // const { mode } = event.detail;
    // this.currentBoundaryMode = mode;
    // this.turtleRepo.setBoundaryMode(mode);

    const { mode } = event.detail;
    this.appState.setBoundaryMode(mode);
  }

  private async handleRun() {
    this.validateCombinedCode();

    if (this.errors.length > 0) {
      console.warn('Cannot run code with syntax errors: ', this.errors);
      return;
    }

    try {
      await this.interpreter.execute(this.code, this.proceduresCode);
    } catch (error) {
      console.error('[GéoTortue NG] Execution error:', error);
      alert('Error executing GéoTortue commands');
    }
  }

  private handleClear() {
    this.turtleRepo.clear();
    const container = GTNContainer.getInstance();
    const geoService = container.resolve<GTNGeometryService>(GTN_TYPES.GeometryService);
    const repository = container.resolve<IGTNTurtleRepository>(GTN_TYPES.TurtleRepository);
    const turtleId = (repository as GTNInMemoryTurtleRepository).getNextId();
    const registry = container.resolve<IGTNProcedureRegistry>(GTN_TYPES.ProcedureRegistry);
    registry.clear();
    const t1 = new GTNTurtle(turtleId, geoService);
    this.turtleRepo.save(t1);
  }

  // --- Event Handlers ---

  private async handleSaveProject() {
    try {
      // FUTURE: Update saveProject to accept "true" proceduresCode,i.e. GTNProcedureDTO[]
      // ATM, all the procedures as a single string are put in the first item of an list
      await this.projectService.saveProject({ code: this.code, procedures: [this.proceduresCode] });
      alert('Project saved!');
    } catch (e) {
      console.error(e);
      alert('Failed to save project');
    }
  }

  private async handleOpenProject() {
    try {
      const { code, procedures } = await this.projectService.loadProject();
      if (code) {
        this.code = code;
        this.proceduresCode = procedures?.[0] ?? '';
      }
      alert('Project loaded!');
    } catch (e) {
      console.error(e);
    }
  }

  private async handleDslChange(e: CustomEvent) {
    const { oldLang, newLang } = e.detail;
    try {
      const translatedCode = await this.langService.translateScript(this.code, oldLang, newLang);
      this.code = translatedCode;

      const translatedProcedures = await this.langService.translateScript(
        this.proceduresCode,
        oldLang,
        newLang
      );
      this.proceduresCode = translatedProcedures;
    } catch (err) {
      console.error('Failed to translate DSL:', err);
    }
  }

  override render() {
    const t = (k: string) => this.langService.translate(k);

    return html`
      <header class="header">
        <h1 class="sr-only">${t('app.title')}</h1>
        <gtn-toolbar
          .currentView=${this.viewMode}
          .currentBoundaryMode=${this.currentBoundaryMode}
          @view-change=${this.handleViewChange}
          @run=${this.handleRun}
          @clear=${this.handleClear}
          @save-project=${this.handleSaveProject}
          @open-project=${this.handleOpenProject}
          @dsl-lang-change=${this.handleDslChange}
          @boundary-mode-change=${this.handleBoundaryModeChange}
        ></gtn-toolbar>
      </header>

      <main>
        ${this.viewMode === 'EDITOR'
          ? html`
              <gtn-workbench>
                <gtn-editor
                  slot="editor"
                  .code=${this.code}
                  @code-change=${this.handleCodeChange}
                ></gtn-editor>

                <gtn-error-toast slot="toast" .errors=${this.errors}></gtn-error-toast>

                <gtn-canvas slot="canvas"></gtn-canvas>

                <gtn-procedures-panel
                  slot="procedures"
                  .code=${this.proceduresCode}
                  @procedures-change=${this.handleProceduresChange}
                ></gtn-procedures-panel>
              </gtn-workbench>
            `
          : html`
              <gtn-sandbox>
                <gtn-canvas></gtn-canvas>
              </gtn-sandbox>
            `}
      </main>

      ${isDev ? html`<dev-reset-button></dev-reset-button>` : ''}
    `;
  }
}
