import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

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
import { materialIconsStyle } from '@ui/styles/shared-styles';

import { UiLanguageController } from '@ui/controllers/UiLanguageController';
import {
  DEFAULT_TURTLE_BOUNDARY_MODE,
  GTN_TURTLE_BOUNDARY_MODES,
  toDslLanguage,
  toUiLanguage,
  type DslLanguage,
  type GTNTurtleBoundaryMode,
  type UiLanguage
} from '@domain/types';

import logoUrl from '../../assets/icons/icon-128.png';
import styles from './gtn-toolbar.scss?inline';

// Define the View Type
export type ViewMode = 'EDITOR' | 'SANDBOX';

const DEFAULT_VIEW_MODE: ViewMode = 'SANDBOX';

@customElement('gtn-toolbar')
export class GTNToolbar extends LitElement {
  static override readonly styles = [
    materialIconsStyle,
    css`
      ${unsafeCSS(styles)}

      // .view-switcher button.active {
      //   background-color: #e3f2fd; /* Light Blue highlight */
      //   color: #1565c0;
      //   border-bottom: 2px solid #1565c0;
      // }

      .view-switcher button {
        // background: var(--gtn-btn-bg, #eee);
        // color: var(--gtn-text, #333);
        // border: 1px solid #ccc;
        transition: all 0.1s ease;
      }

      .view-switcher button[aria-pressed='true'],
      .view-switcher button.active {
        background: #1a252f;
        color: #3498db;
        border-color: #0f171e;
        box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.6);
        transform: translateY(1px);
      }

      .language {
        gap: 2px;
      }

      .icon {
        // margin-right: 8px;
        // width: 20px;
        // width: 18px;
        text-align: center;
        display: inline-block;

        gtn-icon {
          // font-size: 16px;
        }
      }
    `
  ];

  private readonly langService: IGTNLanguageService;
  private readonly appState: GTNApplicationState;

  // Controller to listen for UI language changes and trigger re-render
  // unused controller kept for reactivity
  private readonly langController = new UiLanguageController(this);

  @property({ type: String })
  accessor currentUiLang: UiLanguage = toUiLanguage(DEFAULT_LANGUAGE);

  @property({ type: String })
  accessor currentDslLang: DslLanguage = toDslLanguage(DEFAULT_LANGUAGE);

  @property({ type: String })
  accessor currentMode: AppMode = DEFAULT_MODE;

  @property({ type: String })
  accessor currentCamera: CameraType = DEFAULT_CAMERA_TYPE;

  // New Property for View Mode
  @property({ type: String })
  accessor currentView: ViewMode = DEFAULT_VIEW_MODE;

  @property({ type: String })
  accessor currentBoundaryMode: GTNTurtleBoundaryMode = DEFAULT_TURTLE_BOUNDARY_MODE;

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

    // Ensure the DSL language is switched first so editor services
    // (autocomplete/highlighting) read the correct dictionary immediately.
    await this.langService.setDslLanguage(newLang);
    this.currentDslLang = newLang;

    // Then notify parent so it can translate existing code content.
    this.dispatchEvent(
      new CustomEvent('dsl-lang-change', {
        detail: { oldLang, newLang },
        bubbles: true,
        composed: true
      })
    );
  }

  private handleToggleMode() {
    this.appState.toggleMode();
  }

  private handleToggleCamera() {
    this.appState.toggleCameraType();
  }

  private handleViewChange(view: ViewMode) {
    this.currentView = view;
    this.dispatchEvent(
      new CustomEvent('view-change', {
        detail: { view },
        bubbles: true,
        composed: true
      })
    );
  }

  private handleBoundaryModeChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    const mode = target.value as GTNTurtleBoundaryMode;
    this.currentBoundaryMode = mode;
    this.dispatchEvent(
      new CustomEvent('boundary-mode-change', {
        detail: { mode },
        bubbles: true,
        composed: true
      })
    );
  }

  protected override render() {
    // Helper for brevity
    const t = (k: string) => this.langService.translate(k);

    const isEditor = this.currentView === 'EDITOR';
    const isSandbox = this.currentView === 'SANDBOX';

    // Ensure properties are in sync with service if changed externally
    this.currentUiLang = this.langService.getUiLanguage();
    this.currentDslLang = this.langService.getDslLanguage();

    return html`
      <div class="toolbar-wrapper" role="toolbar" aria-label="Workspace Controls">
        <div class="group" aria-hidden="true" data-tooltip="${t('app.subtitle')}">
          <img src="${logoUrl}" alt="GéoTortue Logo" class="toolbar-icon" />
          <span class="title">${t('app.title')}</span>
        </div>

        <div
          class="group view-switcher"
          role="group"
          aria-label="View Modes"
          style="margin-left: 1rem; border-right: 1px solid #ccc; padding-right: 1rem;"
        >
          <button
            class=${classMap({ active: isEditor })}
            aria-pressed=${isEditor}
            @click=${() => this.handleViewChange('EDITOR')}
            title="${t('mode.editor')}"
          >
            <gtn-icon icon="coding-wand-vibrant"></gtn-icon>
            ${t('mode.editor')}
          </button>
          <button
            class=${classMap({ active: isSandbox })}
            aria-pressed=${isSandbox}
            @click=${() => this.handleViewChange('SANDBOX')}
            title="${t('mode.sandbox')}"
          >
            <gtn-icon icon="sandbox-beach-ball-vibrant"></gtn-icon>
            ${t('mode.sandbox')}
          </button>
        </div>

        ${isEditor
          ? html`
              <div class="group">
                <button @click=${this.handleOpen} title="${t('toolbar.open_project')}">
                  <span class="material-icons">folder_open</span>
                </button>
                <button @click=${this.handleSave} title="${t('toolbar.save_project')}">
                  <span class="material-icons">save</span>
                </button>

                <div class="separator"></div>

                <button class="primary" @click=${this.handleRun} title="Ctrl+Enter">
                  <gtn-icon icon="media-playback-run-vibrant"></gtn-icon> ${t('toolbar.run')}
                </button>
                <button class="danger" @click=${this.handleClear}>
                  <gtn-icon icon="edit-clear-all-vibrant"></gtn-icon> ${t('toolbar.clear')}
                </button>
                <span style="font-size: 0.8rem; color: #666; font-style:italic;"
                  >${t('mode.editor.description')}</span
                >
              </div>
            `
          : html`
              <div class="group">
                <span style="font-size: 0.8rem; color: #666; font-style:italic;"
                  >${t('mode.sandbox.description')}</span
                >
              </div>
            `}

        <div class="group" style="margin-left: auto;">
          <button
            class="mode-badge"
            @click=${this.handleToggleMode}
            title="${t('toolbar.toggle.dim')}"
          >
            ${this.currentMode === '3D' ? t('toolbar.toggle.dim.3d') : t('toolbar.toggle.dim.2d')}
          </button>
          ${this.currentMode === '3D'
            ? html`
                <button
                  @click=${this.handleToggleCamera}
                  title="${t('toolbar.toggle.cam')}"
                  style="font-size:0.8rem"
                >
                  <span class="material-icons" style="font-size:1.1rem">videocam</span>
                  ${this.currentCamera === 'PERSPECTIVE'
                    ? t('toolbar.toggle.cam.perspective')
                    : t('toolbar.toggle.cam.orthographic')}
                </button>
              `
            : ''}

          <div class="separator"></div>

          <span class="language">
            <span class="icon"
              ><gtn-icon icon="preferences-workbench-locale-vibrant"></gtn-icon
            ></span>
            <span class="label">${t('toolbar.language')}</span>
          </span>

          <div class="selector-wrapper">
            <label for="select-ui" class="label">${t('toolbar.selector.ui')}</label>
            <select id="select-ui" @change=${this.handleUiLangChange} .value=${this.currentUiLang}>
              <option value="fr">${t('languages.fr')}</option>
              <option value="en">${t('languages.en')}</option>
            </select>
          </div>
          ${isEditor
            ? html`
                <div class="selector-wrapper">
                  <label for="select-dsl" class="label">${t('toolbar.selector.dsl')}</label>
                  <select
                    id="select-dsl"
                    @change=${this.handleDslLangChange}
                    .value=${this.currentDslLang}
                  >
                    <option value="fr">${t('languages.fr')}</option>
                    <option value="en">${t('languages.en')}</option>
                  </select>
                </div>
              `
            : ''}
          <div class="separator"></div>

          <div class="selector-wrapper">
            <label for="select-boundary" class="label">${t('boundary.mode')}</label>
            <select
              id="select-boundary"
              @change=${this.handleBoundaryModeChange}
              .value=${this.currentBoundaryMode}
            >
              ${GTN_TURTLE_BOUNDARY_MODES.map(
                (mode) =>
                  html`<option value=${mode}>${t(`boundary.${mode.toLowerCase()}`)}</option>`
              )}
            </select>
          </div>
        </div>
      </div>
    `;
  }
}
