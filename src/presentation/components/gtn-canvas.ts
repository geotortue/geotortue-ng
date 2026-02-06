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

  private readonly renderer2D: IGTNRenderer;
  private readonly renderer3D: IGTNRenderer;
  private currentRenderer: IGTNRenderer | null = null;

  // Store the cleanup function
  private unsubscribeLoop: (() => void) | null = null;
  // private animationId: number = 0;

  constructor() {
    super();
    const container = GTNContainer.getInstance();
    this.turtleRepo = container.resolve<IGTNTurtleRepository>(GTN_TYPES.TurtleRepository);
    this.appState = container.resolve<GTNApplicationState>(GTN_TYPES.ApplicationState);
    this.renderLoop = container.resolve<IGTNRenderLoop>(GTN_TYPES.RenderLoop);

    // Inject Renderers
    this.renderer2D = container.resolve<IGTNRenderer>(GTN_TYPES.Renderer2D);
    this.renderer3D = container.resolve<IGTNRenderer>(GTN_TYPES.Renderer3D);
  }

  protected firstUpdated(): void {
    // Initial setup
    this.syncRenderer();

    // Listen for mode changes (2D <-> 3D)
    this.appState.subscribe(() => {
      this.syncRenderer();
    });

    // Handle Window Resize
    window.addEventListener('resize', () => this.handleResize());

    // // Start Loop
    // this.loop();

    // 1. Subscribe (Multiple listeners now allowed)
    this.unsubscribeLoop = this.renderLoop.subscribe(() => {
      if (this.currentRenderer) {
        this.currentRenderer.render(this.turtleRepo);
      }
    });

    // 2. Ensure Loop is running
    // (If another component already started it, this is safe/idempotent)
    this.renderLoop.start();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // cancelAnimationFrame(this.animationId);

    // 1. Unsubscribe OUR listener
    if (this.unsubscribeLoop) {
      this.unsubscribeLoop();
      this.unsubscribeLoop = null;
    }

    // Optional: Stop loop if no one else is listening?
    // For now, manually stop it to be safe, assuming Canvas is the main driver.
    // In a pure multi-subscriber system, might count subscribers or let it run.
    this.renderLoop.stop();

    window.removeEventListener('resize', () => this.handleResize());
    // We detach the current renderer when the component is removed
    if (this.currentRenderer) {
      this.currentRenderer.dispose();
    }
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
      }
    }

    // If 3D, ensure correct camera is active
    if (isTarget3D && this.currentRenderer instanceof GTNRenderer3D) {
      this.currentRenderer.setCameraType(cameraType);
    }
  }

  private handleResize() {
    if (!this.currentRenderer || !this.container) return;
    const rect = this.container.getBoundingClientRect();
    this.currentRenderer.resize(rect.width, rect.height);
  }
  //
  //   private loop() {
  //     if (this.currentRenderer) {
  //       this.currentRenderer.render(this.turtleRepo);
  //     }
  //     this.animationId = requestAnimationFrame(() => this.loop());
  //   }

  protected render() {
    return html`<div id="render-container"></div>`;
  }
}
