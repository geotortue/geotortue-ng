import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { GTNContainer } from '@infrastructure/di/GTNContainer';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';
import type { IGTNLanguageService } from '@domain/interfaces/IGTNLanguageService';
import { NamedCssColor, type NamedCssColorType } from '@domain/value-objects';

// named colors displayed on sandbox
const CSS_COLORS = [
  NamedCssColor.BLACK,
  NamedCssColor.RED,
  NamedCssColor.BLUE,
  NamedCssColor.GREEN,
  NamedCssColor.YELLOW,
  NamedCssColor.ORANGE
];

@customElement('gtn-color-panel')
export class GTNColorPanel extends LitElement {
  static override readonly styles = css`
    :host {
      display: block;
    }
    .palette {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5px;
    }
    .swatch {
      height: 30px;
      border-radius: 4px;
      cursor: pointer;
      border: 1px solid rgba(0, 0, 0, 0.1);
      transition: transform 0.1s;
    }
    .swatch:hover {
      transform: scale(1.05);
      border-color: #000;
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

  private emit(color: NamedCssColorType) {
    const detail = { color };
    this.dispatchEvent(new CustomEvent('color-change', { detail }));
  }

  render() {
    const t = (k: string) => this.langService.translate(k);
    // const color = (c: string) => this.doColor(toNamedCssColor(c));

    return html`
      <div class="palette">
        ${CSS_COLORS.map(
          (c) => html`
            <div
              class="swatch"
              style="background-color: ${c}"
              @click=${() => this.emit(c)}
              title="${t('sandbox.btn.colors.' + c)}"
            ></div>
          `
        )}
      </div>
    `;
  }
}
