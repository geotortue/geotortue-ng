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

import './components/gtn-toolbar';
import './components/gtn-editor';
import './components/gtn-canvas';
import './components/dev-reset-button';
import './components/gtn-error-toast';

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

  private readonly interpreter: IGTNInterpreter;
  private readonly langService: IGTNLanguageService;
  private readonly turtleRepo: IGTNTurtleRepository;
  private readonly projectService: GTNProjectService;
  private readonly syntaxService: GTNSyntaxService;
  private uiUnsubscribe?: () => void;

  constructor(/*host: ReactiveControllerHost*/) {
    super();
    const container = GTNContainer.getInstance();
    this.interpreter = container.resolve<IGTNInterpreter>(GTN_TYPES.Interpreter);
    this.langService = container.resolve<IGTNLanguageService>(GTN_TYPES.LanguageService);
    this.turtleRepo = container.resolve<IGTNTurtleRepository>(GTN_TYPES.TurtleRepository);
    this.projectService = container.resolve<GTNProjectService>(GTN_TYPES.ProjectService);
    this.syntaxService = container.resolve<GTNSyntaxService>(GTN_TYPES.SyntaxService);

    // Detect language (handle regional codes like 'fr-FR' -> 'fr')
    // const detectedLang = i18next.language.split('-')[0] || 'fr';
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
    // This connects the Editor component to the App state
    this.code = event.detail.code;
    // Validate on the fly (or could be done on "Run" click)
    this.errors = this.syntaxService.validate(this.code);
    // Optional: Auto-save to localStorage could go here
  }

  private async handleRun() {
    this.errors = this.syntaxService.validate(this.code);
    if (this.errors.length > 0) {
      console.warn('Cannot run code with syntax errors: ', this.errors);
      // FUTURE keep active the button 'Run'
      // But display a popup with the errors
      return;
    }

    try {
      // Optional: Clear before run?
      // Usually Logo keeps drawing on top unless explicit CLEAR command is used.
      // But for a "Run Button", users often expect a fresh start.
      // Let's stick to strict Logo behavior: Only clear if code says CLEAR.
      await this.interpreter.execute(this.code);
    } catch (error) {
      console.error('Execution error:', error);
      alert('Error executing GéoTortue commands');
      // Future: Show error toast/notification here
    }
  }

  private handleClear() {
    // Clear 3D Scene
    // this.renderer.clear();

    // Re-initialize turtle (Reset position)
    this.turtleRepo.clear();

    // Recreate a fresh turtle
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
      // save code AND turtles state in a json file
      await this.projectService.saveProject(this.code);
      alert('Project saved!');
    } catch (e) {
      console.error(e);
      alert('Failed to save project');
    }
  }

  private async handleOpenProject() {
    try {
      // Charge les données et récupère le code
      const code = await this.projectService.loadProject();
      if (code) {
        this.code = code;
      }

      alert('Project loaded!');
    } catch (e) {
      console.error(e);
      // Future: Show error toast
    }
  }

  private async handleDslChange(e: CustomEvent) {
    const { oldLang, newLang } = e.detail;

    try {
      // Perform translation
      const translatedCode = await this.langService.translateScript(this.code, newLang, oldLang);

      // Update State (which updates Editor)
      this.code = translatedCode;
    } catch (err) {
      console.error('Failed to translate DSL:', err);
    }
  }

  override render() {
    return html`
      <div class="header">
        <gtn-toolbar
          @run=${this.handleRun}
          @clear=${this.handleClear}
          @save-project=${this.handleSaveProject}
          @open-project=${this.handleOpenProject}
          @dsl-lang-change=${this.handleDslChange}
        ></gtn-toolbar>
      </div>

      <main>
        <div class="editor-pane">
          <gtn-editor .code=${this.code} @code-change=${this.handleCodeChange}>
            <!-- previously this.handleRun -->
          </gtn-editor>
        </div>
        <gtn-error-toast .errors=${this.errors}></gtn-error-toast>
        <div class="canvas">
          <gtn-canvas></gtn-canvas>
        </div>
      </main>

      ${isDev ? html`<dev-reset-button></dev-reset-button>` : ''}
    `;
  }
}
