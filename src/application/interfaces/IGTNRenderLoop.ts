import type { Ms } from '@domain/types';

export type RenderCallback = (time: Ms) => void;

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
