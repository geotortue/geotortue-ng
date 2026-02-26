import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

import type { IGTNLanguageService } from '@domain/interfaces/IGTNLanguageService';
import { GTNContainer } from '@infrastructure/di/GTNContainer';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';

@customElement('gtn-procedures-panel')
export class GTNProceduresPanel extends LitElement {
  static readonly styles = css`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      border: 1px solid var(--gtn-border-color, #ccc);
      border-radius: 8px;
      overflow: hidden;
      background: var(--gtn-bg-color, #fff);
    }
    .header {
      background: var(--gtn-primary-color, #f0f0f0);
      color: black;
      padding: 8px 12px;
      font-weight: bold;
      border-bottom: 1px solid var(--gtn-border-color, #ccc);
      display: flex;
      justify-content: space-between;
    }
    .editor-container {
      flex: 1;
      overflow: hidden;
      /* CodeMirror will inject itself here */
    }
  `;

  @property({ type: String })
  public accessor code = `pour carre :taille\n  rep 4 [\n    av :taille\n    td 90\n  ]\nfin`;

  @query('.editor-container')
  private accessor editorContainer!: HTMLElement;

  // Assume you have a CodeMirror wrapper or initialization logic
  private editorInstance: any;

  private readonly langService: IGTNLanguageService;

  constructor() {
    super();
    const container = GTNContainer.getInstance();
    this.langService = container.resolve<IGTNLanguageService>(GTN_TYPES.LanguageService);
  }

  firstUpdated() {
    this.initEditor();
  }

  private initEditor() {
    // Initialize CodeMirror here and bind it to this.editorContainer
    // Set up a change listener to update 'this.code' or dispatch a global state event
    // e.g., GTNStore.dispatch(updateProcedures(newCode));
  }

  private onEditorChange(newCode: string) {
    this.dispatchEvent(
      new CustomEvent('procedures-change', {
        detail: { code: newCode },
        bubbles: true,
        composed: true
      })
    );
  }

  render() {
    const t = (k: string) => this.langService.translate(k);

    return html`
      <div class="header">
        <span>${t('workbench.procedures.title')}</span>
      </div>
      <div class="editor-container"></div>
    `;
  }
}
