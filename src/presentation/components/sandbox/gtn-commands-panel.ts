import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { GTNContainer } from '@infrastructure/di/GTNContainer';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';
import type { IGTNLanguageService } from '@domain/interfaces/IGTNLanguageService';
import { GTNToken } from '@domain/types';

import { GtnIcon } from '@ui/components/utils/gtn-icon';

@customElement('gtn-commands-panel')
export class GTNCommandsPanel extends LitElement {
  static override readonly styles = css`
    :host {
      display: block;
      margin-bottom: 1rem;
    }
    // .grid {
    //   display: flex;
    //   flex-direction: column;
    //   gap: 5px;
    // }
    button {
      padding: 8px;
      font-size: 0.85rem;
      cursor: pointer;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
      text-align: center;
    }
    button:hover {
      background: #f0f0f0;
    }
    .icon {
      margin-right: 8px;
      width: 20px;
      text-align: center;
      display: inline-block;

      gtn-icon {
        font-size: 16px;
      }
    }
    /* Direct Cmds */
    .cmd-row {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-bottom: 6px;
    }
    .cmd-row button {
      flex: 1;
      padding: 6px 2px;
      font-size: 0.75rem;
      background: white;
      border: 1px solid #ced4da;
      border-radius: 4px;
      cursor: pointer;
    }
    .cmd-row button:hover {
      background: #f1f3f5;
    }
    .separator {
      height: 1px;
      background: #e9ecef;
      margin: 8px 0;
    }
    /* Tools */
    .tools-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
    }
    .tools-grid button {
      padding: 6px;
      font-size: 0.75rem;
      background: white;
      border: 1px solid #ced4da;
      border-radius: 4px;
      cursor: pointer;
    }
  `;

  private readonly langService: IGTNLanguageService;

  private unsubscribeUiLang: (() => void) | null = null;

  constructor() {
    super();

    // does nothing but preventing tree shaking issues (see `treeshake.moduleSideEffects: false` in Vite configuration)
    [GtnIcon];
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

  private emit(action: GTNToken, value?: number) {
    const detail = { action, value };
    this.dispatchEvent(new CustomEvent('command', { detail }));
  }

  render() {
    const t = (k: string) => this.langService.translate(k);
    const fd = t('commands.GT_FORWARD');
    const bk = t('commands.GT_BACKWARD');
    const lt = t('commands.GT_LEFT');
    const rt = t('commands.GT_RIGHT');
    const da = t('unit.degree');

    return html`
      <div class="cmd-row">
        <button @click=${() => this.emit(GTNToken.GT_FORWARD, 10)}>${fd} 10</button>
        <button @click=${() => this.emit(GTNToken.GT_FORWARD, 25)}>${fd} 25</button>
        <button @click=${() => this.emit(GTNToken.GT_FORWARD, 100)}>${fd} 100</button>
      </div>

      <div class="cmd-row">
        <button @click=${() => this.emit(GTNToken.GT_BACKWARD, 10)}>${bk} 10</button>
        <button @click=${() => this.emit(GTNToken.GT_BACKWARD, 25)}>${bk} 25</button>
        <button @click=${() => this.emit(GTNToken.GT_BACKWARD, 100)}>${bk} 100</button>
      </div>

      <div class="separator"></div>

      <div class="cmd-row">
        <button @click=${() => this.emit(GTNToken.GT_LEFT, 30)}>${lt} 30${da}</button>
        <button @click=${() => this.emit(GTNToken.GT_LEFT, 45)}>${lt} 45${da}</button>
        <button @click=${() => this.emit(GTNToken.GT_LEFT, 90)}>${lt} 90${da}</button>
      </div>

      <div class="cmd-row">
        <button @click=${() => this.emit(GTNToken.GT_RIGHT, 30)}>${rt} 30${da}</button>
        <button @click=${() => this.emit(GTNToken.GT_RIGHT, 45)}>${rt} 45${da}</button>
        <button @click=${() => this.emit(GTNToken.GT_RIGHT, 90)}>${rt} 90${da}</button>
      </div>

      <div class="separator"></div>

      <div class="tools-grid">
        <button @click=${() => this.emit(GTNToken.GT_PEN_DOWN)}>
          <span class="icon"><gtn-icon icon="draw"></gtn-icon></span>${t('sandbox.btn.pendown')}
        </button>
        <button @click=${() => this.emit(GTNToken.GT_PEN_UP)}>
          <span class="icon"><gtn-icon icon="editOff"></gtn-icon></span>${t('sandbox.btn.penup')}
        </button>
        <button @click=${() => this.emit(GTNToken.GT_SHOW_TURTLE)}>
          <span class="icon"><gtn-icon icon="visibility"></gtn-icon></span>${t(
            'sandbox.btn.showturtle'
          )}
        </button>
        <button @click=${() => this.emit(GTNToken.GT_HIDE_TURTLE)}>
          <span class="icon"><gtn-icon icon="visibilityOff"></gtn-icon></span>${t(
            'sandbox.btn.hideturtle'
          )}
        </button>
      </div>
    `;
  }
}
