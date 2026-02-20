import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { GTNContainer } from '@infrastructure/di/GTNContainer';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';
import type { IGTNLanguageService } from '@domain/interfaces/IGTNLanguageService';
import { materialIconsStyle } from '@ui/styles/shared-styles';

@customElement('gtn-controls-panel')
export class GTNControlsPanel extends LitElement {
  static override readonly styles = [
    materialIconsStyle,
    css`
      :host {
        display: block;
        margin-top: auto;
        padding-top: 1rem; /* border-top: 1px solid #eee;*/
      }

      .actions {
        display: flex;
        flex-direction: row;
        gap: 8px;
      }

      button {
        padding: 8px;
        cursor: pointer;
        width: 100%;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
      }

      button:hover {
        background-color: #f8f9fa;
      }
      .danger {
        color: #d32f2f;
        border-color: #d32f2f;
      }
      .danger:hover {
        background-color: #ffebee;
      }
    `
  ];

  private readonly langService: IGTNLanguageService;

  private unsubscribeUiLang: (() => void) | null = null;

  constructor() {
    super();
    this.langService = GTNContainer.getInstance().resolve(GTN_TYPES.LanguageService);
  }

  override connectedCallback() {
    super.connectedCallback();
    this.unsubscribeUiLang = this.langService.subscribeUiListeners(() => {
      this.requestUpdate();
    });
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    if (this.unsubscribeUiLang) {
      this.unsubscribeUiLang();
      this.unsubscribeUiLang = null;
    }
  }

  render() {
    const t = (k: string) => this.langService.translate(k);

    return html`
      <div class="actions">
        <button class="danger" @click=${() => this.dispatchEvent(new CustomEvent('home'))}>
          <span class="material-icons" style="font-size:16px; vertical-align:text-bottom"
            >home</span
          >
          ${t('sandbox.btn.reset')}
        </button>
        <button class="danger" @click=${() => this.dispatchEvent(new CustomEvent('clear'))}>
          <span class="material-icons" style="font-size:16px; vertical-align:text-bottom"
            >delete</span
          >
          ${t('sandbox.btn.clear_graph')}
        </button>
      </div>
    `;
  }
}
