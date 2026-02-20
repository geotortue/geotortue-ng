import { LitElement, html, css, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { getIconFromName } from './registered-icons';

@customElement('gtn-icon')
export class GtnIcon extends LitElement {
  static override styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
      width: 1em;
      height: 1em;
      color: currentColor;
      font-size: 24px; /* Base size if not inherited */
    }
    svg {
      display: block;
      width: 100%;
      height: 100%;
      pointer-events: none; /* Let clicks pass through to parent button */
      stroke: currentColor;
      fill: none;
      // stroke: none;
    }

    /* If the icon has a stroke-width attribute, we adjust */
    // svg[stroke-width] {
    //   stroke: currentColor;
    // }
  `;

  /**
   * The name of the icon to display (must exist in icons.ts)
   */
  @property({ type: String })
  accessor icon: string | undefined;

  /**
   * Optional: Overwrite viewBox if different icons have different sizes
   * (Standard Material Icons are 24x24)
   */
  @property({ type: String })
  accessor viewBox: string | undefined;

  override render() {
    const icon = getIconFromName(this.icon);
    if (!icon) {
      return html``;
    }

    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="${icon.viewBox}"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        focusable="false"
      >
        ${icon.content}
      </svg>
    `;
  }
}
