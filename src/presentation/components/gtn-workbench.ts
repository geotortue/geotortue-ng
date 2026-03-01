import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import type { IGTNLanguageService } from '@domain/interfaces/IGTNLanguageService';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';
import { GTNContainer } from '@infrastructure/di/GTNContainer';

import { srOnlyStyles } from '@ui/styles/shared-styles';
import styles from './gtn-workbench.scss?inline';
@customElement('gtn-workbench')
export class GTNWorkbench extends LitElement {
  static override readonly styles = [
    srOnlyStyles,
    css`
      ${unsafeCSS(styles)}
    `
  ];

  private readonly langService: IGTNLanguageService;

  constructor() {
    super();
    const container = GTNContainer.getInstance();
    this.langService = container.resolve<IGTNLanguageService>(GTN_TYPES.LanguageService);
  }

  protected override render() {
    const t = (k: string) => this.langService.translate(k);

    return html`
      <div class="workbench-layout">
        <h2 class="sr-only">${t('mode.workbench')}</h2>
        <aside class="sidebar left-sidebar" aria-label="Command Editor">
          <div class="editor-area">
            <slot name="editor"></slot>
          </div>
          <div class="toast-area">
            <slot name="toast"></slot>
          </div>
        </aside>

        <section class="main-content" aria-label="Turtle Graphics Canvas">
          <slot name="canvas"></slot>
        </section>

        <aside class="sidebar right-sidebar" aria-label="Named Procedures Library">
          <div class="procedures-area">
            <slot name="procedures"></slot>
          </div>
        </aside>
      </div>
    `;
  }
}
