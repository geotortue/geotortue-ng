import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styles from './gtn-workbench.scss?inline';

@customElement('gtn-workbench')
export class GTNWorkbench extends LitElement {
  static override readonly styles = css`
    ${unsafeCSS(styles)}
  `;

  protected override render() {
    return html`
      <div class="workbench-layout">
        <aside class="sidebar">
          <div class="editor-area">
            <slot name="editor"></slot>
          </div>
          <div class="toast-area">
            <slot name="toast"></slot>
          </div>
        </aside>

        <section class="main-content">
          <slot name="canvas"></slot>
        </section>
      </div>
    `;
  }
}
