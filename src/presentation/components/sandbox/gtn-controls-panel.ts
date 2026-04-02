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
        padding-top: 1rem;
      }

      .actions {
        display: flex;
        flex-direction: row;
        gap: 12px; /* Increased gap for better touch targets */
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 10px 16px;
        cursor: pointer;
        width: 100%;
        font-weight: 600;
        border-radius: 8px; /* Softer, more child-friendly corners */
        transition: all 0.1s ease;
        border: none;
      }

      /* High-Contrast Danger Style (Optimized for Vibrant Icons) */
      .danger {
        background-color: #b71c1c; /* Deep Red for WCAG AA background contrast */
        color: #ffffff; /* White text for 11.4:1 contrast ratio */
        border-bottom: 4px solid #7f0000; /* Skeuomorphic 3D depth */
      }

      .danger:hover {
        background-color: #c62828;
        transform: translateY(-1px);
        border-bottom-width: 5px;
      }

      .danger:active {
        background-color: #8e0000;
        transform: translateY(3px);
        border-bottom-width: 1px;
        margin-bottom: 3px; /* Prevents layout shift during the 3D press */
      }

      /* Ensure icons inside buttons scale appropriately */
      gtn-icon {
        display: flex;
        align-items: center;
        width: 20px;
        height: 20px;
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
        <button
          class="danger"
          @click=${() => this.dispatchEvent(new CustomEvent('home'))}
          aria-label="${t('sandbox.btn.reset')}"
        >
          <gtn-icon icon="edit-clear-all-vibrant"></gtn-icon>
          ${t('sandbox.btn.reset')}
        </button>
        <button
          class="danger"
          @click=${() => this.dispatchEvent(new CustomEvent('clear'))}
          aria-label="${t('sandbox.btn.clear_graph')}"
        >
          <gtn-icon icon="edit-undo-eraser-vibrant"></gtn-icon>
          ${t('sandbox.btn.clear_graph')}
        </button>
      </div>
    `;
  }
}
