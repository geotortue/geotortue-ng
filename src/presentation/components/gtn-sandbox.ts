import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import { GTNContainer } from '@infrastructure/di/GTNContainer';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';
import type { IGTNInterpreter } from '@domain/interfaces/IGTNInterpreter';
import type { IGTNLanguageService } from '@domain/interfaces/IGTNLanguageService';
import { getLiteralName, GTNToken, toDslLanguage } from '@domain/types';
import type { NamedCssColorType } from '@domain/value-objects';

// Import sub-components
import { GTNNavigationPanel } from './sandbox/gtn-navigation-panel';
import { GTNCompassPanel } from './sandbox/gtn-compass-panel';
import {
  DEFAULT_ANGLE_STEP,
  DEFAULT_DISTANCE_STEP,
  DEFAULT_KEYBOARD_STATUS,
  GTNSettingsPanel
} from './sandbox/gtn-settings-panel';
import { GTNCommandsPanel } from './sandbox/gtn-commands-panel';
import { GTNColorPanel } from './sandbox/gtn-color-panel';
import { GTNControlsPanel } from './sandbox/gtn-controls-panel';
import { DpadCode } from './utils/gtn-keyboard';

import styles from './gtn-sandbox.scss?inline';

const cmdSep = getLiteralName(GTNToken.GT_SEMICOLON);
const ARROW_NAV_KEYS: DpadCode[] = [
  DpadCode.ArrowUp,
  DpadCode.ArrowDown,
  DpadCode.ArrowLeft,
  DpadCode.ArrowRight
];

@customElement('gtn-sandbox')
export class GtnSandbox extends LitElement {
  static override readonly styles = css`
    ${unsafeCSS(styles)}
  `;

  private readonly interpreter: IGTNInterpreter;
  private readonly langService: IGTNLanguageService;
  private unsubscribeUiLang: (() => void) | null = null;

  // --- Configuration State (Inputs) ---
  @state() private accessor step = DEFAULT_DISTANCE_STEP;
  @state() private accessor angle = DEFAULT_ANGLE_STEP;

  // --- Runtime State ---
  @state() private accessor consoleLogs: [string, string, string][] = []; //[timestamp, rawCommand, localizedCommand]
  @state() private accessor currentHeading = 0; // Track heading locally for UI
  @state() private accessor isKeyboardActive = DEFAULT_KEYBOARD_STATUS;

  constructor() {
    super();
    // does nothing but preventing tree shaking issues
    [
      GTNColorPanel,
      GTNCommandsPanel,
      GTNCompassPanel,
      GTNControlsPanel,
      GTNNavigationPanel,
      GTNSettingsPanel
    ];

    const container = GTNContainer.getInstance();
    this.interpreter = container.resolve<IGTNInterpreter>(GTN_TYPES.Interpreter);
    this.langService = container.resolve<IGTNLanguageService>(GTN_TYPES.LanguageService);
  }

  override connectedCallback() {
    super.connectedCallback();
    window.addEventListener('keydown', this.handleKeyDown);
    /* In the sandbox mode, the console log language is the ui one, not the dsl one, to stay consistent
     * with the button labels.
     */
    this.unsubscribeUiLang = this.langService.subscribeUiListeners(() => {
      this.handleConsoleLogLanguageChange();
      this.requestUpdate();
    });
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('keydown', this.handleKeyDown);
    if (this.unsubscribeUiLang) {
      this.unsubscribeUiLang();
      this.unsubscribeUiLang = null;
    }
  }

  // --- Logic (Command Execution) ---
  private async execute(command: string) {
    try {
      const timestamp = new Date().toLocaleTimeString().split(' ')[0] ?? '';

      const targetLang = toDslLanguage(this.langService.getUiLanguage());
      const localizedCommand = await this.langService.localizeScript(command, targetLang);
      this.consoleLogs = [[timestamp, command, localizedCommand], ...this.consoleLogs];
      await this.interpreter.doExecute(command);
    } catch (e) {
      console.error(e);
    }
  }

  private readonly handleConsoleLogLanguageChange = async () => {
    await this.retranslateLogs();
  };

  private retranslateLogs = async () => {
    if (this.consoleLogs.length === 0) return;

    const targetLang = toDslLanguage(this.langService.getUiLanguage());

    // Process all translations in parallel for performance
    const updatedLogs = await Promise.all(
      this.consoleLogs.map(async ([timestamp, rawCommand, _oldLocalized]) => {
        const newLocalized = await this.langService.localizeScript(rawCommand, targetLang);
        return [timestamp, rawCommand, newLocalized] as [string, string, string];
      })
    );

    // Reassign the state to trigger a Lit re-render
    this.consoleLogs = updatedLogs;
  };

  // Handles Relative Movement (Navigation Panel)
  private handleMove(e: CustomEvent<{ action: GTNToken }>) {
    const { action } = e.detail;
    this.doHandleMove(action);
  }

  private doHandleMove(action: GTNToken) {
    let cmd;
    switch (action) {
      case GTNToken.GT_FORWARD:
        cmd = `${GTNToken[action]} ${this.step}` + cmdSep;
        break;
      case GTNToken.GT_BACKWARD:
        cmd = `${GTNToken[action]} ${this.step}` + cmdSep;
        break;
      case GTNToken.GT_LEFT:
        cmd = `${GTNToken[action]} ${this.angle}` + cmdSep;
        this.currentHeading = (this.currentHeading - this.angle + 360) % 360;
        break;
      case GTNToken.GT_RIGHT:
        cmd = `${GTNToken[action]} ${this.angle}` + cmdSep;
        this.currentHeading = (this.currentHeading + this.angle) % 360;
        break;
      default:
        return;
    }
    this.execute(cmd);
  }

  // Handles Absolute Orientation (Compass Panel)
  private handleHeadingChange(e: CustomEvent) {
    const oldHeading = this.currentHeading;
    const newHeading = e.detail.heading;
    this.currentHeading = newHeading;

    const angle = newHeading - oldHeading;
    this.execute(`${GTNToken[GTNToken.GT_RIGHT]} ${angle}` + cmdSep);
  }

  private handleSettingChange(e: CustomEvent) {
    const { type, value } = e.detail;
    if (type === 'step') this.step = value;
    if (type === 'angle') this.angle = value;
  }

  private handleColorChange(e: CustomEvent<{ color: NamedCssColorType }>) {
    // here the color is always a CSS named color
    const cssColorName = e.detail.color;
    this.execute(`${GTNToken[GTNToken.GT_PEN_COLOR]} "${cssColorName}"` + cmdSep);
  }

  private handleCommand(e: CustomEvent<{ action: GTNToken; value?: number }>) {
    const { action, value } = e.detail;
    if (
      ![
        GTNToken.GT_FORWARD,
        GTNToken.GT_BACKWARD,
        GTNToken.GT_LEFT,
        GTNToken.GT_RIGHT,
        GTNToken.GT_PEN_UP,
        GTNToken.GT_PEN_DOWN,
        GTNToken.GT_SHOW_TURTLE,
        GTNToken.GT_HIDE_TURTLE
      ].includes(action)
    ) {
      return;
    }

    const cmd = `${GTNToken[action]} ${value || ''}` + cmdSep;
    this.execute(cmd);
  }

  private handleReset() {
    const cmd = GTNToken[GTNToken.GT_VG] + cmdSep + GTNToken[GTNToken.GT_RZ] + cmdSep;
    this.execute(cmd);
    this.currentHeading = 0; // Reset Compass
  }

  private handleClear() {
    const cmd = GTNToken[GTNToken.GT_VG] + cmdSep;
    this.execute(cmd);
  }

  private readonly handleKeyDown = (e: KeyboardEvent) => {
    if (!this.isKeyboardActive) {
      return;
    }

    const code = e.code as DpadCode;

    // Prevent default scrolling for arrow keys
    if (ARROW_NAV_KEYS.includes(code)) {
      e.preventDefault();
    }

    switch (code) {
      case DpadCode.ArrowUp:
      case DpadCode.KeyUp:
        return this.doHandleMove(GTNToken.GT_FORWARD);
      case DpadCode.ArrowDown:
      case DpadCode.KeyDown:
        return this.doHandleMove(GTNToken.GT_BACKWARD);
      case DpadCode.ArrowLeft:
      case DpadCode.KeyLeft:
        return this.doHandleMove(GTNToken.GT_LEFT);
      case DpadCode.ArrowRight:
      case DpadCode.KeyRight:
        return this.doHandleMove(GTNToken.GT_RIGHT);
      case DpadCode.Backspace:
      case DpadCode.Delete:
        return this.handleClear();
      case DpadCode.Escape:
        return this.handleReset();
    }
  };

  private handleKeyboardStatus(e: CustomEvent) {
    this.isKeyboardActive = e.detail.value;
  }

  override render() {
    const t = (k: string) => this.langService.translate(k);

    return html`
      <div class="sandbox-container">
        <aside class="side-panel left-panel">
          <div class="panel-section">
            <h3>${t('sandbox.compass.title')}</h3>
            <gtn-compass-panel
              .heading=${this.currentHeading}
              @heading-change=${this.handleHeadingChange}
            ></gtn-compass-panel>
          </div>

          <div class="panel-section">
            <h3>${t('sandbox.navigation.title')}</h3>
            <gtn-navigation-panel
              .keyboardActive=${this.isKeyboardActive}
              @move=${this.handleMove}
            ></gtn-navigation-panel>
          </div>

          <div class="panel-section">
            <h3>${t('sandbox.settings.title')}</h3>
            <gtn-settings-panel
              .step=${this.step}
              .rotation=${this.angle}
              .keyboardActive=${this.isKeyboardActive}
              @setting-change=${this.handleSettingChange}
              @keyboard-status=${this.handleKeyboardStatus}
            ></gtn-settings-panel>
          </div>
        </aside>

        <main class="center-panel">
          <div class="canvas-area">
            <slot></slot>
          </div>
          <div class="panel-section console">
            <h3>${t('sandbox.history_title')}</h3>
            <div class="console-output">
              ${this.consoleLogs.length === 0
                ? html`<span class="empty">${t('sandbox.history_empty')}</span>`
                : this.consoleLogs.map(
                    (log) => html`<div class="log-line">[${log[0]}] ${log[2]}</div>`
                  )}
            </div>
          </div>
        </main>

        <aside class="side-panel right-panel">
          <div class="panel-section">
            <h3>${t('sandbox.commands.title')}</h3>
            <gtn-commands-panel @command=${this.handleCommand}></gtn-commands-panel>
          </div>

          <div class="panel-section">
            <h3>${t('sandbox.color.title')}</h3>
            <gtn-color-panel @color-change=${this.handleColorChange}></gtn-color-panel>
          </div>

          <div class="panel-section">
            <h3>${t('sandbox.controls.title')}</h3>
            <gtn-controls-panel
              @home=${this.handleReset}
              @clear=${this.handleClear}
            ></gtn-controls-panel>
          </div>
        </aside>
      </div>
    `;
  }
}
