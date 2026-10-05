import type { IGTNRenderLoop, RenderCallback } from '@app/interfaces/IGTNRenderLoop';
import { toMs, type Ms } from '@domain/types';

/**
 * @description Browser-specific implementation of the `IGTNRenderLoop` utilizing `window.requestAnimationFrame`.
 *
 * @why Synchronizes visual updates with the browser's native paint cycle. This guarantees the smoothest possible
 * animations, eliminates screen tearing, and automatically pauses execution when the browser tab is inactive to conserve CPU and battery.
 *
 * @how Maintains a deduplicated `Set` of subscribed callbacks. When `start()` is invoked, it initiates a recursive
 * `requestAnimationFrame` loop that iterates through and executes all active callbacks every frame, passing the elapsed time in milliseconds.
 *
 * @rule This class is tightly coupled to the browser environment. It must strictly be instantiated and managed
 * within the Presentation or Infrastructure layers (e.g., inside UI components like `GTNCanvas`), never within the Domain or Application core.
 *
 * @warning Individual callback executions are intentionally wrapped in a `try...catch` block. If a specific UI component's
 * render method throws an error, it is logged to the console, but the loop itself remains alive for all other subscribers.
 */
export class GTNBrowserRenderLoop implements IGTNRenderLoop {
  private readonly callbacks: Set<(time: Ms) => void> = new Set();

  private animationId: number | null = null;

  public subscribe(callback: RenderCallback): () => void {
    this.callbacks.add(callback);

    // Return Disposable
    return () => {
      this.callbacks.delete(callback);
    };
  }

  public unsubscribe(callback: RenderCallback): void {
    this.callbacks.delete(callback);
  }

  public start(): void {
    if (this.isRunning()) {
      return;
    }

    this.loop();
  }

  private readonly loop = (): void => {
    const loop = (time: number /* ms */) => {
      this.callbacks.forEach((cb) => {
        try {
          cb(toMs(time));
        } catch (e) {
          console.error('Error in render loop callback:', e);
        }
      });

      this.animationId = requestAnimationFrame(loop);
    };

    this.animationId = requestAnimationFrame(loop);
  };

  public stop(): void {
    if (this.animationId != null) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  public isRunning(): boolean {
    return this.animationId != null;
  }
}
