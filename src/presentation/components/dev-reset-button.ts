import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styles from './dev-reset-button.scss?inline';

@customElement('dev-reset-button')
export class DevResetButton extends LitElement {
  static override readonly styles = css`
    ${unsafeCSS(styles)}
  `;

  private resetApp() {
    // 1. Clear all storage types
    localStorage.clear();
    sessionStorage.clear();

    // 2. Optional: Clear specific cookies if necessary
    // document.cookie.split(";").forEach((c) => { ... });

    // 3. Hard reload from server
    window.location.reload();
  }

  protected render() {
    return html` <button @click="${this.resetApp}">Reset Local Data & Reload</button> `;
  }
}
