import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, query } from 'lit/decorators.js';

import { GTNContainer } from '@infrastructure/di/GTNContainer';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';
import type { IGTNTurtleRepository } from '@domain/interfaces/IGTNTurtleRepository';
import { GTNApplicationState } from '@app/state/GTNApplicationState';
import type { IGTNRenderer } from '@ui/renderers/IGTNRenderer';
import { GTNRenderer2D } from '@ui/renderers/GTNRenderer2D';
import { GTNRenderer3D } from '@ui/renderers/GTNRenderer3D';
import type { IGTNRenderLoop } from '@app/interfaces/IGTNRenderLoop';

import styles from './gtn-canvas.scss?inline';
import { GTNBrowserRenderLoop } from '@infrastructure/services/GTNBrowserRenderLoop';

/**
 * - Coordinate System: HTML Canvas has (0,0) at the Top-Left.
 *   Logo/Turtles expect (0,0) at the Center, with Y pointing Up. We must apply a transform.
 * - Animation Loop: use requestAnimationFrame to constantly redraw
 *   the canvas (simple game loop approach).
 */
@customElement('gtn-canvas')
export class GTNCanvas extends LitElement {
  static override readonly styles = css`
    ${unsafeCSS(styles)}
  `;

  @query('#render-container')
  private accessor container!: HTMLElement;

  private readonly turtleRepo: IGTNTurtleRepository;
  private readonly appState: GTNApplicationState;
  private readonly renderLoop: IGTNRenderLoop;

  private currentRenderer: IGTNRenderer | null = null;
  private lastRenderedVersion: number = -1;
  // After any environment change: window size, 2D/3D mode, background color, etc.
  private forceNextRender: boolean = true;

  // Store the cleanup function
  private unsubscribeLoop: (() => void) | null = null;
  private unsubscribeAppState: (() => void) | null = null;
  // private animationId: number = 0;

  constructor() {
    super();
    const diContainer = GTNContainer.getInstance();
    this.turtleRepo = diContainer.resolve<IGTNTurtleRepository>(GTN_TYPES.TurtleRepository);
    this.appState = diContainer.resolve<GTNApplicationState>(GTN_TYPES.ApplicationState);

    this.renderLoop = new GTNBrowserRenderLoop();
  }

  protected override firstUpdated(): void {
    // Initial setup: The DOM has just been created
    this.syncRenderer();
    this.setupSubscriptions();
  }

  override connectedCallback(): void {
    super.connectedCallback();

    // Upon the very first insertion into the page, the DOM is not yet ready.
    // We wait for firstUpdated.
    // However, if the component is unmounted and then remounted (e.g., tab switch),
    // the DOM is already ready (hasUpdated = true), so we can restart directly.
    if (!this.hasUpdated) {
      return;
    }

    this.syncRenderer();
    this.setupSubscriptions();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.teardownSubscriptions();
  }

  private setupSubscriptions(): void {
    // Re-attach window resize listener
    window.addEventListener('resize', this.handleResize);

    // Re-subscribe to app state: Listen for mode changes (2D <-> 3D)
    this.unsubscribeAppState = this.appState.subscribe(() => {
      this.forceNextRender = true;
      this.syncRenderer();
    });

    // Start loop and subscribe
    this.renderLoop.start();
    this.unsubscribeLoop = this.renderLoop.subscribe(() => {
      // Ensure that the renderer is properly initialized before drawing.
      if (!this.currentRenderer || !this.turtleRepo) {
        return;
      }

      const currentRepoVersion = this.turtleRepo.globalVersion;
      if (!this.forceNextRender && currentRepoVersion === this.lastRenderedVersion) {
        return;
      }

      this.currentRenderer.render(this.turtleRepo);
      this.lastRenderedVersion = currentRepoVersion;
      this.forceNextRender = false;
    });
  }

  private teardownSubscriptions(): void {
    window.removeEventListener('resize', this.handleResize);
    // Detach the current renderer when the component is removed
    if (this.currentRenderer) {
      this.currentRenderer.dispose();
      this.currentRenderer = null;
    }

    if (this.unsubscribeAppState) {
      this.unsubscribeAppState();
      this.unsubscribeAppState = null;
    }

    if (this.unsubscribeLoop) {
      this.unsubscribeLoop();
      this.unsubscribeLoop = null;
    }

    // Optional: Stop loop if no one else is listening?
    // For now, manually stop it to be safe, assuming Canvas is the main driver.
    // In a pure multi-subscriber system, might count subscribers or let it run.
    this.renderLoop.stop();
  }

  private syncRenderer() {
    const mode = this.appState.mode;
    const cameraType = this.appState.cameraType;

    // Check if we need to switch the Renderer Class (2D <-> 3D)
    const isTarget3D = mode === '3D';
    const isCurrent3D = this.currentRenderer instanceof GTNRenderer3D;

    if (isTarget3D !== isCurrent3D || !this.currentRenderer) {
      // Swap Renderer
      if (this.currentRenderer) {
        this.currentRenderer.dispose();
      }

      if (mode === '3D') {
        this.currentRenderer = new GTNRenderer3D();
      } else {
        this.currentRenderer = new GTNRenderer2D();
      }

      if (this.container) {
        this.currentRenderer.attach(this.container);
        const rect = this.container.getBoundingClientRect();
        this.turtleRepo.setViewportSize(rect.width, rect.height);
      }
    }

    // If 3D, ensure correct camera is active
    if (isTarget3D && this.currentRenderer instanceof GTNRenderer3D) {
      this.currentRenderer.setCameraType(cameraType);
    }
  }

  // use arrow function to ensure this is available.
  private readonly handleResize = () => {
    if (!this.currentRenderer || !this.container) {
      return;
    }

    const rect = this.container.getBoundingClientRect();
    this.currentRenderer.resize(rect.width, rect.height);
    this.turtleRepo.setViewportSize(rect.width, rect.height);
    this.forceNextRender = true;
  };

  protected render() {
    return html`<div id="render-container"></div>`;
  }
}
