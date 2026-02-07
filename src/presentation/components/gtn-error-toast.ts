import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { type GTNError } from '@infrastructure/antlr/GTNErrorListener';

import styles from './gtn-error-toast.scss?inline';

/**
 * Error toaster
 */
@customElement('gtn-error-toast')
export class GTNErrorToast extends LitElement {
  static override readonly styles = css`
    ${unsafeCSS(styles)}
  `;

  @property({ type: Array })
  accessor errors: GTNError[] = [];

  render() {
    return html`
      ${this.errors.map(
        (error) => html`
          <div class="toast">
            <div class="header">
              <span>Syntax Error (Line ${error.line})</span>
            </div>
            <div class="msg">${error.message}</div>
          </div>
        `
      )}
    `;
  }
}
