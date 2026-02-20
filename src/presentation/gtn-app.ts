import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import type { GTNProjectService } from '@app/services/GTNProjectService';
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
import type { UiLanguage } from '@domain/types';

import styles from './gtn-app.scss?inline';

// Components
import { GTNToolbar } from './components/gtn-toolbar';
import { GTNEditor } from './components/gtn-editor';
import { GTNCanvas } from './components/gtn-canvas';
import { DevResetButton } from './components/dev-reset-button';
import { GTNErrorToast } from './components/gtn-error-toast';
import { GtnSandbox } from './components/gtn-sandbox';
import { GTNWorkbench } from './components/gtn-workbench'; // ✅ New Import

// Import the Type from toolbar
import type { ViewMode } from './components/gtn-toolbar';

const isDev = import.meta.env.DEV;

const EXAMPLES: Record<string, string> = {
  fr: `
crayon rouge;
pas := 36;
rot := 360 / pas;
rep 36 [
  av rot;
  td rot;
]
`,
  en: `
color red;
step := 36;
rot := 360 / pas;
repeat 36 [
  fd rot;
  rt rot;
]
`
};

@customElement('gtn-app')
export class GTNApp extends LitElement {
  static override readonly styles = css`
    ${unsafeCSS(styles)}
  `;

  @state()
  private accessor code = '';
  @state()
  private accessor errors: GTNError[] = [];
  @state()
  private accessor viewMode: ViewMode = 'SANDBOX';

  private readonly interpreter: IGTNInterpreter;
  private readonly langService: IGTNLanguageService;
  private readonly turtleRepo: IGTNTurtleRepository;
  private readonly projectService: GTNProjectService;
  private readonly syntaxService: GTNSyntaxService;
  private uiUnsubscribe?: () => void;

  constructor() {
    super();
    // does nothing but preventing tree shaking issues (see `treeshake.moduleSideEffects: false` in Vite configuration)
    [DevResetButton, GTNCanvas, GTNEditor, GTNErrorToast, GtnSandbox, GTNToolbar, GTNWorkbench];

    const container = GTNContainer.getInstance();
    this.interpreter = container.resolve<IGTNInterpreter>(GTN_TYPES.Interpreter);
    this.langService = container.resolve<IGTNLanguageService>(GTN_TYPES.LanguageService);
    this.turtleRepo = container.resolve<IGTNTurtleRepository>(GTN_TYPES.TurtleRepository);
    this.projectService = container.resolve<GTNProjectService>(GTN_TYPES.ProjectService);
    this.syntaxService = container.resolve<GTNSyntaxService>(GTN_TYPES.SyntaxService);

    const detectedLang = this.langService.getDslLanguage();
    const initialCode = EXAMPLES[detectedLang] || '';
    this.code = initialCode;
  }

  override connectedCallback() {
    super.connectedCallback();
    this.uiUnsubscribe = this.langService.subscribeUiListeners(
      this.handleLanguageChange.bind(this)
    );
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    if (this.uiUnsubscribe) {
      this.uiUnsubscribe();
    }
  }

  private handleLanguageChange(lang: UiLanguage) {
    const errors = this.syntaxService.validate(this.code);
    this.errors = [...errors];
  }

  private handleCodeChange(event: CustomEvent) {
    this.code = event.detail.code;
    this.errors = this.syntaxService.validate(this.code);
  }

  private handleViewChange(event: CustomEvent) {
    this.viewMode = event.detail.view;
  }

  private async handleRun() {
    this.errors = this.syntaxService.validate(this.code);
    if (this.errors.length > 0) {
      console.warn('Cannot run code with syntax errors: ', this.errors);
      return;
    }

    try {
      await this.interpreter.execute(this.code);
    } catch (error) {
      console.error('Execution error:', error);
      alert('Error executing GéoTortue commands');
    }
  }

  private handleClear() {
    this.turtleRepo.clear();
    const container = GTNContainer.getInstance();
    const geoService = container.resolve<GTNGeometryService>(GTN_TYPES.GeometryService);
    const repository = container.resolve<IGTNTurtleRepository>(GTN_TYPES.TurtleRepository);
    const turtleId = (repository as GTNInMemoryTurtleRepository).getNextId();
    const t1 = new GTNTurtle(turtleId, geoService);
    this.turtleRepo.save(t1);
  }

  // --- Event Handlers ---

  private async handleSaveProject() {
    try {
      await this.projectService.saveProject(this.code);
      alert('Project saved!');
    } catch (e) {
      console.error(e);
      alert('Failed to save project');
    }
  }

  private async handleOpenProject() {
    try {
      const code = await this.projectService.loadProject();
      if (code) {
        this.code = code;
      }
      alert('Project loaded!');
    } catch (e) {
      console.error(e);
    }
  }

  private async handleDslChange(e: CustomEvent) {
    const { oldLang, newLang } = e.detail;
    try {
      const translatedCode = await this.langService.translateScript(this.code, newLang, oldLang);
      this.code = translatedCode;
    } catch (err) {
      console.error('Failed to translate DSL:', err);
    }
  }

  override render() {
    return html`
      <div class="header">
        <gtn-toolbar
          .currentView=${this.viewMode}
          @view-change=${this.handleViewChange}
          @run=${this.handleRun}
          @clear=${this.handleClear}
          @save-project=${this.handleSaveProject}
          @open-project=${this.handleOpenProject}
          @dsl-lang-change=${this.handleDslChange}
        ></gtn-toolbar>
      </div>

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
