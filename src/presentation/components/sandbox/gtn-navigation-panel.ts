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
      grid-template-columns: repeat(3, 48px); /* Fixed size for circular/square alignment */
      grid-template-rows: repeat(2, 48px);
      gap: 8px;
      margin: 10px auto;
      justify-content: center;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        cursor: pointer;
        background: #3498db; /* Vibrant Blue */
        border: none;
        border-bottom: 4px solid #2980b9; /* 3D "Depth" shadow */
        border-radius: 12px;
        transition: all 0.1s ease;
        padding: 0;
      }

      button:hover {
        background: #5dade2;
        transform: translateY(-1px);
        border-bottom-width: 5px;
      }

      /* Tactile "Pressed" state */
      button:active {
        background: #2980b9;
        transform: translateY(3px);
        border-bottom-width: 1px;
        margin-bottom: 3px;
      }

      .center {
        visibility: hidden;
      }
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
        <div class="center"></div>
        <button
          @click=${() => this.emit(GTNToken.GT_FORWARD)}
          title="${t('sandbox.tooltip.forward')}"
          aria-label="${t('sandbox.tooltip.forward')}"
        >
          <gtn-icon icon="go-up-vibrant"></gtn-icon>
        </button>
        <div class="center"></div>

        <button
          @click=${() => this.emit(GTNToken.GT_TURN_LEFT)}
          title="${t('sandbox.tooltip.left')}"
          aria-label="${t('sandbox.tooltip.left')}"
        >
          <gtn-icon icon="go-left-vibrant"></gtn-icon>
        </button>
        <button
          @click=${() => this.emit(GTNToken.GT_BACKWARD)}
          title="${t('sandbox.tooltip.backward')}"
          aria-label="${t('sandbox.tooltip.backward')}"
        >
          <gtn-icon icon="go-down-vibrant"></gtn-icon>
        </button>
        <button
          @click=${() => this.emit(GTNToken.GT_TURN_RIGHT)}
          title="${t('sandbox.tooltip.right')}"
          aria-label="${t('sandbox.tooltip.right')}"
        >
          <gtn-icon icon="go-right-vibrant"></gtn-icon>
        </button>
      </div>
    `;
  }
}
