import type { IGTNRenderLoop, RenderCallback } from '@app/interfaces/IGTNRenderLoop';
import { toMs, type Ms } from '@domain/types';

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
