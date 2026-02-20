import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { GTNContainer } from '@infrastructure/di/GTNContainer';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';
import type { IGTNLanguageService } from '@domain/interfaces/IGTNLanguageService';
import { GTNToken } from '@domain/types';

@customElement('gtn-navigation-panel')
export class GTNNavigationPanel extends LitElement {
  static override readonly styles = css`
    :host {
      display: block;
      margin-bottom: 1rem;
    }
    .d-pad {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 5px;
      // max-width: 120px;
      margin: 0 auto;

      button {
        padding: 10px;
        cursor: pointer;
        background: #e9ecef;
        border: 1px solid #dee2e6;
        border-radius: 4px;
        font-size: 1.2rem;
        color: #495057;
      }

      button:hover {
        background: #dee2e6;
      }

      button:active {
        background: #ced4da;
        transform: translateY(1px);
      }
    }

    .center {
      visibility: hidden;
    }
  `;

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

  private emit(action: GTNToken) {
    const detail = { action };
    this.dispatchEvent(new CustomEvent('move', { detail }));
  }

  render() {
    const t = (k: string) => this.langService.translate(k);

    return html`
      <div class="d-pad">
        <button class="center"></button>
        <button
          @click=${() => this.emit(GTNToken.GT_FORWARD)}
          title="${t('sandbox.tooltip.forward')}"
        >
          ▲
        </button>
        <button class="center"></button>

        <button @click=${() => this.emit(GTNToken.GT_LEFT)} title="${t('sandbox.tooltip.left')}">
          ◀
        </button>
        <button
          @click=${() => this.emit(GTNToken.GT_BACKWARD)}
          title="${t('sandbox.tooltip.backward')}"
        >
          ▼
        </button>
        <button @click=${() => this.emit(GTNToken.GT_RIGHT)} title="${t('sandbox.tooltip.right')}">
          ▶
        </button>
      </div>
    `;
  }
}
