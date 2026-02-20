import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { IGTNLanguageService } from '@domain/interfaces/IGTNLanguageService';
import { GTNContainer } from '@infrastructure/di/GTNContainer';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';

const COMPASS_ROUNDING = 5; // degree

@customElement('gtn-compass-panel')
export class GTNCompassPanel extends LitElement {
  static override readonly styles = css`
    :host {
      display: block;
      margin-bottom: 1rem;
      text-align: center;
    }
    .compass-container {
      position: relative;
      width: 100px;
      height: 100px;
      margin: 0 auto;
      cursor: pointer;
    }
    .compass-container:hover circle {
      stroke: #1976d2;
    }
    text {
      font-family: sans-serif;
      font-size: 10px;
      fill: #666;
      user-select: none;
    }
  `;

  // We can pass the current turtle heading here to rotate the needle visually
  @property({ type: Number }) accessor heading = 0;

  private readonly langService: IGTNLanguageService;

  private unsubscribeUiLang: (() => void) | null = null;

  constructor() {
    super();
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

  private handleClick(e: MouseEvent) {
    // Calculate angle based on click position relative to center
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const x = e.clientX - rect.left - centerX;
    const y = e.clientY - rect.top - centerY;

    // Convert Cartesian (x,y) to Polar angle (degrees)
    // Math.atan2(y, x) returns radians from -PI to PI
    // Logo 0° is North (Up), JS 0° is East (Right). We need to shift.
    let angle = Math.atan2(y, x) * (180 / Math.PI);

    // Convert to Logo coordinates (0 is North, clockwise)
    angle = (angle + 90 + 360) % 360;

    // Round to nearest COMPASS_ROUNDING degrees for easier control
    const rounded = Math.round(angle / COMPASS_ROUNDING) * COMPASS_ROUNDING;

    this.dispatchEvent(
      new CustomEvent('heading-change', {
        detail: { heading: rounded }
      })
    );
  }

  render() {
    // Needle Rotation: Logo 0 is Up. SVG rotation is clockwise.
    const transform = `rotate(${this.heading}, 50, 50)`;
    const t = (k: string) => this.langService.translate(k);
    const da = t('unit.degree');

    return html`
      <div class="compass-container" @click=${this.handleClick} title="${t('compass.set.heading')}">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="#f8f9fa" stroke="#ccc" stroke-width="2" />

          <text x="50" y="15" text-anchor="middle">${t('compass.n')}</text>
          <text x="85" y="54" text-anchor="middle">${t('compass.e')}</text>
          <text x="50" y="92" text-anchor="middle">${t('compass.s')}</text>
          <text x="15" y="54" text-anchor="middle">${t('compass.w')}</text>

          <line x1="50" y1="5" x2="50" y2="10" stroke="#ccc" />
          <line x1="50" y1="90" x2="50" y2="95" stroke="#ccc" />
          <line x1="5" y1="50" x2="10" y2="50" stroke="#ccc" />
          <line x1="90" y1="50" x2="95" y2="50" stroke="#ccc" />

          <g transform="${transform}">
            <path d="M50 20 L55 50 L45 50 Z" fill="red" />
            <!--                <path d="M50 80 L55 50 L45 50 Z" fill="#666" /> -->
            <!--                <circle cx="50" cy="50" r="3" fill="#333" /> -->
          </g>
        </svg>
      </div>
      <div style="font-size:0.8rem; color:#666; margin-top:5px">
        ${Math.round(this.heading)}${da}
      </div>
    `;
  }
}
