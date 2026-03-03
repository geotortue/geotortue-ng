import { LitElement, html, css, type PropertyValues } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

// CodeMirror Imports
import { Compartment, EditorState } from '@codemirror/state';
import { EditorView, basicSetup } from 'codemirror';
import { autocompletion, type CompletionContext } from '@codemirror/autocomplete';
import { oneDark } from '@codemirror/theme-one-dark';
import { indentWithTab } from '@codemirror/commands';
import { keymap } from '@codemirror/view';

import type { IGTNLanguageService } from '@domain/interfaces/IGTNLanguageService';
import { GTNContainer } from '@infrastructure/di/GTNContainer';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';
import { geoTortueSyntaxTheme } from '@ui/editor/themes/geoTortueSyntaxTheme';
import { createAntlrHighlighter } from '@ui/editor/syntax/createAntlrHighlighter';
import type { GTNSyntaxService } from '@domain/services/GTNSyntaxService';
import { UiLanguageController } from '@ui/controllers/UiLanguageController';

@customElement('gtn-procedures-panel')
export class GTNProceduresPanel extends LitElement {
  static override readonly styles = css`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      border-left: 1px solid var(--gtn-border-color, #ccc);
      // border: 1px solid var(--gtn-border-color, #ccc);
      // border-radius: 8px;
      overflow: hidden;
      background: var(--gtn-bg-color, #fff);
    }
    .header {
      background: var(--gtn-panel-bg, #f8f9fa);
      color: #333;
      padding: 8px 12px;
      font-size: 0.85rem;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border-bottom: 1px solid var(--gtn-border-color, #ccc);
      display: flex;
      justify-content: space-between;
      flex: 0 0 auto;
    }
    .editor-container {
      flex: 1;
      overflow: hidden;
      /* Ensure CodeMirror stretches to fill the container */
      display: flex;
      flex-direction: column;
      min-height: 0; // flexbox must allow CodeMirror to scroll
    }
    /* Deep selector to force CodeMirror to take full height inside the Shadow DOM */
    .editor-container > .cm-editor {
      height: 100%;
      flex: 1;
    }
  `;

  @property({ type: String })
  public accessor code; // ex.: `pour carre :taille\n  rep 4 [\n    av :taille\n    td 90\n  ]\nfin`;

  @query('.editor-container')
  private accessor editorContainer!: HTMLElement;

  private editorView?: EditorView;

  private readonly langService: IGTNLanguageService;
  // Controller to listen for UI language changes and trigger re-render
  // unused but kept for reactivity
  private readonly langController = new UiLanguageController(this);
  // Compartment to allow dynamic reconfiguration of language features
  private readonly languageCompartment = new Compartment();
  private readonly syntaxService: GTNSyntaxService;

  constructor() {
    super();
    const container = GTNContainer.getInstance();
    this.langService = container.resolve<IGTNLanguageService>(GTN_TYPES.LanguageService);
    this.syntaxService = container.resolve<GTNSyntaxService>(GTN_TYPES.SyntaxService);
    this.code = '';
  }

  protected override firstUpdated() {
    this.initEditor();
  }

  // ✅ Clean up the editor to prevent memory leaks when the component is destroyed
  public disconnectedCallback() {
    super.disconnectedCallback();
    this.editorView?.destroy();
  }

  private initEditor() {
    if (!this.editorContainer) {
      return;
    }
    const highlighterExtension = createAntlrHighlighter(this.syntaxService, this.langService);

    // 1. Create the CodeMirror State
    const state = EditorState.create({
      doc: this.code,
      extensions: [
        basicSetup, // See https://codemirror.net/docs/ref/#codemirror.basicSetup
        keymap.of([indentWithTab]),
        oneDark,
        geoTortueSyntaxTheme,
        highlighterExtension,
        // Register the compartment for dynamic extensions
        this.languageCompartment.of([highlighterExtension]),
        // 2. Listen for user typing
        EditorView.updateListener.of((update) => {
          if (!update.docChanged) {
            return;
          }
          // Extract the raw string from CodeMirror's document model
          const newCode = update.state.doc.toString();
          this.code = newCode;
          this.onEditorChange(newCode);
        })
      ]
    });

    // 3. Mount the Editor View to the DOM
    this.editorView = new EditorView({
      state,
      parent: this.editorContainer
    });

    // Initial configuration
    this.updateLanguageFeatures();
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

  // Called whenever properties change OR when UiLanguageController requests update
  /**
   * LIFECYCLE HOOK: Called when properties change.
   * This is where we catch the "Data Down" update from GTNApp.
   */
  protected override updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    // If the DSL language changed (we can check service vs internal state,
    // but reconfiguring the compartment is cheap enough to do on update)
    this.updateLanguageFeatures();
    this.translateCodeInEditor(changedProperties);
  }

  private translateCodeInEditor(changedProperties: PropertyValues): void {
    // Check if 'code' prop changed and we have an editor view...
    if (!changedProperties.has('code') || !this.editorView) {
      return;
    }

    const editorContent = this.editorView.state.doc.toString();

    // If the new prop value is different from what's in the editor
    // (This happens when translation occurs, or file is opened)
    if (editorContent === this.code) {
      return;
    }

    this.editorView.dispatch({
      changes: {
        from: 0,
        to: editorContent.length,
        insert: this.code
      }
    });
  }

  private updateLanguageFeatures() {
    if (!this.editorView) {
      return;
    }

    // 1. Get current keywords from service
    const keywords = this.langService.getAllKeywords();

    // 2. Define Autocomplete Extension
    const completionExtension = autocompletion({
      override: [
        (context: CompletionContext) => {
          const word = context.matchBefore(/\w*/);
          if (!word || (word.from === word.to && !context.explicit)) return null;

          return {
            from: word.from,
            options: keywords.map((kw) => ({ label: kw, type: 'keyword' }))
          };
        }
      ]
    });

    // 3. Dispatch effect to update the compartment
    this.editorView.dispatch({
      effects: this.languageCompartment.reconfigure([
        completionExtension,
        createAntlrHighlighter(this.syntaxService, this.langService)
      ])
    });
  }

  protected override render() {
    const t = (k: string) => this.langService.translate(k);

    return html`
      <div class="header">
        <span>${t('workbench.procedures.title')}</span>
      </div>
      <div class="editor-container"></div>
    `;
  }
}
