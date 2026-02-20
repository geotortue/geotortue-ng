import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { GTNContainer } from '@infrastructure/di/GTNContainer';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';
import type { IGTNLanguageService } from '@domain/interfaces/IGTNLanguageService';

export const DEFAULT_DISTANCE_STEP = 50; // pixel
export const DEFAULT_ANGLE_STEP = 90; // degree
export const DEFAULT_KEYBOARD_STATUS = true;

@customElement('gtn-settings-panel')
export class GTNSettingsPanel extends LitElement {
  static override readonly styles = css`
    :host {
      display: block;
      margin-bottom: 1rem;
    }
    .field {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }
    input {
      width: 50px;
      padding: 4px;
      text-align: center;
    }
    label {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      font-size: 0.9rem;
      color: #555;

      .label-icon {
        font-size: 24px;
      }
    }
    /* Container for the whole switch + text */
    .toggle-switch {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      font-size: 0.85rem;
      user-select: none;
    }
    /* The structural wrapper for the pill */
    .switch-track {
      position: relative;
      width: 36px;
      height: 20px;
      display: inline-block;
    }
    /* Hide the default HTML checkbox */
    .switch-track input {
      opacity: 0;
      width: 0;
      height: 0;
      position: absolute;
    }
    /* The pill background */
    .slider {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      border-radius: 20px;
      transition: background-color 0.3s ease;
    }
    /* The sliding circle */
    .slider::before {
      content: '';
      position: absolute;
      height: 16px;
      width: 16px;
      left: 2px;
      bottom: 2px;
      background-color: white;
      border-radius: 50%;
      transition: transform 0.3s ease;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    /* --- ACTIVE STATE --- */
    .switch-track input:checked + .slider {
      background-color: #007bff; /* Change this to your primary theme color */
    }
    .switch-track input:checked + .slider::before {
      transform: translateX(16px);
    }
    /* --- ACCESSIBILITY / FOCUS --- */
    .switch-track input:focus-visible + .slider {
      outline: 2px solid #007bff;
      outline-offset: 2px;
    }
  `;

  @property({ type: Number }) accessor step = DEFAULT_DISTANCE_STEP;
  @property({ type: Number }) accessor rotation = DEFAULT_ANGLE_STEP;
  @property({ type: Boolean }) accessor keyboardActive = DEFAULT_KEYBOARD_STATUS;

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

  private handleInput(e: Event, type: 'step' | 'angle') {
    const val = parseInt((e.target as HTMLInputElement).value, 10) || 0;
    this.dispatchEvent(
      new CustomEvent('setting-change', {
        detail: { type, value: val }
      })
    );
  }

  private readonly toggleKeyboard = () => {
    this.keyboardActive = !this.keyboardActive;
    const detail = { value: this.keyboardActive };
    this.dispatchEvent(new CustomEvent('keyboard-status', { detail }));
  };

  render() {
    const t = (k: string) => this.langService.translate(k);

    return html`
      <div class="field">
        <label>${t('sandbox.step')}</label>
        <input
          type="number"
          .value=${String(this.step)}
          @change=${(e: Event) => this.handleInput(e, 'step')}
        />
      </div>
      <div class="field">
        <label>${t('sandbox.angle')}</label>
        <input
          type="number"
          .value=${String(this.rotation)}
          @change=${(e: Event) => this.handleInput(e, 'angle')}
        />
      </div>
      <label class="toggle-switch">
        <div>
          <span class="label-icon">⌨️</span>
          <span class="label-text">
            ${this.keyboardActive ? t('sandbox.keyboard_on') : t('sandbox.keyboard_off')}
          </span>
        </div>
        <div class="switch-track">
          <input
            type="checkbox"
            role="switch"
            .checked=${this.keyboardActive}
            @change=${this.toggleKeyboard}
            aria-checked=${this.keyboardActive ? 'true' : 'false'}
          />
          <span class="slider"></span>
        </div>
      </label>
    `;
  }
}
