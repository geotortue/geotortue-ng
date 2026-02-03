import type { IGTNTurtleRepository } from '@domain/interfaces/IGTNTurtleRepository';

export interface IGTNRenderer {
  /**
   * Called once when the renderer is attached to the DOM.
   */
  attach(container: HTMLElement): void;

  /**
   * Called every frame to render the scene.
   */
  render(repo: IGTNTurtleRepository): void;

  /**
   * Called when the container resizes.
   */
  resize(width: number, height: number): void;

  /**
   * Called when switching away from this renderer (cleanup).
   */
  dispose(): void;
}
