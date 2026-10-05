import type { Ms } from '@domain/types';

export type RenderCallback = (time: Ms) => void;

/**
 * @description Defines a contract for a continuous execution loop, synchronizing rendering callbacks with the display's refresh rate.
 *
 * @why Centralizes the animation heartbeat (typically `requestAnimationFrame`), preventing multiple overlapping, unmanaged loops.
 * It decouples the visual update cycle from the UI components, allowing multiple independent renderers or animations to sync to a single, optimized frame update.
 *
 * @how Components register a `RenderCallback` via the `subscribe` method. The implementation iterates through all active subscriptions
 * on every frame, invoking them with the current elapsed time.
 *
 * @rule Symmetrical lifecycle management is mandatory. Always pair a `subscribe()` call with its corresponding cleanup. Store the returned
 * dispose function and invoke it during the component's teardown phase (e.g., `disconnectedCallback`).
 *
 * @warning Callbacks must be strictly limited to UI painting and visual updates. Executing heavy domain logic, complex state mutations,
 * or synchronous I/O inside this loop will block the main thread and drop the frame rate.
 *
 * @example
 * export class GTNCanvas extends LitElement {
 *   private renderLoop = new GTNBrowserRenderLoop();
 *   private unsubscribeLoop: (() => void) | null = null;
 *
 *   override connectedCallback(): void {
 *     super.connectedCallback();
 *     this.renderLoop.start();
 *     this.unsubscribeLoop = this.renderLoop.subscribe((time) => {
 *       this.currentRenderer.render(this.turtleRepo);
 *     });
 *   }
 *
 *   override disconnectedCallback(): void {
 *     super.disconnectedCallback();
 *     if (this.unsubscribeLoop) this.unsubscribeLoop();
 *     this.renderLoop.stop();
 *   }
 * }
 */
export interface IGTNRenderLoop {
  /**
   * Subscribes a callback to the render loop.
   * @returns A function to unsubscribe this specific callback.
   */
  subscribe(callback: RenderCallback): () => void;

  /**
   * Explicitly removes a callback from the loop.
   */
  unsubscribe(callback: RenderCallback): void;

  start(): void;
  stop(): void;
  isRunning(): boolean;
}
