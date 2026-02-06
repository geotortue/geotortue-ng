import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { GTNContainer } from '@infrastructure/di/GTNContainer';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';
import { DEFAULT_LANGUAGE } from '@infrastructure/i18n';
import { type IGTNLanguageService } from '@domain/interfaces/IGTNLanguageService';
import {
  DEFAULT_CAMERA_TYPE,
  DEFAULT_MODE,
  GTNApplicationState,
  type AppMode,
  type CameraType
} from '@app/state/GTNApplicationState';
import { materialIconsStyle } from '../styles/shared-styles';

import { UiLanguageController } from '../controllers/UiLanguageController';
import { toDslLanguage, toUiLanguage, type DslLanguage, type UiLanguage } from '@domain/types';

import styles from './gtn-toolbar.scss?inline';

@customElement('gtn-toolbar')
export class GTNToolbar extends LitElement {
  static override readonly styles = [
    materialIconsStyle,
    css`
      ${unsafeCSS(styles)}
    `
  ];

  private readonly langService: IGTNLanguageService;
  private readonly appState: GTNApplicationState;
  private readonly langController = new UiLanguageController(this);

  @property({ type: String })
  accessor currentUiLang: UiLanguage = toUiLanguage(DEFAULT_LANGUAGE);

  @property({ type: String })
  accessor currentDslLang: DslLanguage = toDslLanguage(DEFAULT_LANGUAGE);

  @property({ type: String })
  accessor currentMode: AppMode = DEFAULT_MODE;

  @property({ type: String })
  accessor currentCamera: CameraType = DEFAULT_CAMERA_TYPE;

  constructor() {
    super();
    const container = GTNContainer.getInstance();
    this.langService = container.resolve<IGTNLanguageService>(GTN_TYPES.LanguageService);
    this.appState = container.resolve<GTNApplicationState>(GTN_TYPES.ApplicationState);

    this.currentUiLang = this.langService.getUiLanguage();
    this.currentDslLang = this.langService.getDslLanguage();

    // Subscribe to App State
    this.appState.subscribe(() => {
      this.currentMode = this.appState.mode;
      this.currentCamera = this.appState.cameraType;
    });
  }

  private handleRun() {
    this.dispatchEvent(new CustomEvent('run'));
  }
  private handleClear() {
    this.dispatchEvent(new CustomEvent('clear'));
  }
  private handleSave() {
    this.dispatchEvent(new CustomEvent('save-project'));
  }
  private handleOpen() {
    this.dispatchEvent(new CustomEvent('open-project'));
  }

  private async handleUiLangChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    const newLang = toUiLanguage(target.value);
    await this.langService.setUiLanguage(newLang);
    // The Controller will automatically trigger render()
    this.currentUiLang = newLang;
  }

  private async handleDslLangChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    const oldLang = this.currentDslLang;
    const newLang = toDslLanguage(target.value);

    // Dispatch event BEFORE updating local service?
    // Usually better to let parent orchestrate, but we can emit "request-change"

    // Notify Parent to translate code
    this.dispatchEvent(
      new CustomEvent('dsl-lang-change', {
        detail: { oldLang, newLang },
        bubbles: true,
        composed: true
      })
    );

    // Update local state to reflect UI immediately
    await this.langService.setDslLanguage(newLang);
    this.currentDslLang = newLang;

    // // Notify Parent to translate code
    // this.dispatchEvent(new CustomEvent('dsl-lang-change', {
    //     detail: { oldLang, newLang }
    // }));
  }

  private handleToggleMode() {
    this.appState.toggleMode();
  }

  private handleToggleCamera() {
    this.appState.toggleCameraType();
  }

  protected override render() {
    // Helper for brevity
    const t = (k: string) => this.langService.translate(k);

    // Ensure properties are in sync with service if changed externally
    this.currentUiLang = this.langService.getUiLanguage();
    this.currentDslLang = this.langService.getDslLanguage();

    return html`
      <div class="group">
        <span class="material-icons">school</span>
        <span class="title">${t('app.title')}</span>
      </div>

      <div class="group">
        <button @click=${this.handleOpen} title="${t('toolbar.open_project')}">
          <span class="material-icons">folder_open</span>
        </button>
        <button @click=${this.handleSave} title="${t('toolbar.save_project')}">
          <span class="material-icons">save</span>
        </button>

        <div class="separator"></div>

        <button class="mode-badge" @click=${this.handleToggleMode} title="Toggle 2D/3D">
          ${this.currentMode}
        </button>

        ${this.currentMode === '3D'
          ? html`
              <button
                @click=${this.handleToggleCamera}
                title="Switch Camera"
                style="font-size:0.8rem"
              >
                <span class="material-icons" style="font-size:1.1rem">videocam</span>
                ${this.currentCamera === 'PERSPECTIVE' ? 'PERSP' : 'ORTHO'}
              </button>
            `
          : ''}

        <div class="separator"></div>

        <button class="primary" @click=${this.handleRun} title="Ctrl+Enter">
          <span class="material-icons">play_arrow</span> ${t('toolbar.run')}
        </button>
        <button class="danger" @click=${this.handleClear}>
          <span class="material-icons">delete</span> ${t('toolbar.clear')}
        </button>
      </div>

      <div class="group">
        <span class="material-icons">translate</span>

        <span class="label">${t('toolbar.language')}</span>

        <div class="selector-wrapper">
          <label for="select-ui" class="label">${t('toolbar.selector.ui')}</label>
          <select id="select-ui" @change=${this.handleUiLangChange} .value=${this.currentUiLang}>
            <option value="fr">${t('languages.fr')}</option>
            <option value="en">${t('languages.en')}</option>
          </select>
        </div>

        <div class="selector-wrapper">
          <label for="select-dsl" class="label">${t('toolbar.selector.dsl')}</label>
          <select id="select-dsl" @change=${this.handleDslLangChange} .value=${this.currentDslLang}>
            <option value="fr">${t('languages.fr')}</option>
            <option value="en">${t('languages.en')}</option>
          </select>
        </div>
      </div>
    `;
  }
}
