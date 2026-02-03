import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('dev-reset-button')
export class DevResetButton extends LitElement {
  static readonly styles = css`
    button {
      background-color: #ff4444;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      font-family: sans-serif;
      font-weight: bold;
    }
    button:hover {
      background-color: #cc0000;
    }
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

  render() {
    return html` <button @click="${this.resetApp}">Reset Local Data & Reload</button> `;
  }
}
