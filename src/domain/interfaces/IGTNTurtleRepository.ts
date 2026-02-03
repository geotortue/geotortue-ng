import type { GTNTurtle } from '@domain/entities/GTNTurtle';
import type { GTNTurtleId } from '@domain/types';

export interface IGTNTurtleRepository {
  /**
   * Retrieves a turtle by its unique ID.
   */
  getById(id: GTNTurtleId): GTNTurtle | undefined;

  /**
   * Retrieves all existing turtles.
   */
  getAll(): GTNTurtle[];

  /**
   * Returns the currently active turtle (the one receiving commands).
   */
  getActiveTurtle(): GTNTurtle | undefined;

  /**
   * Saves a turtle (new or updated) to the repository.
   */
  save(turtle: GTNTurtle): void;

  /**
   * Sets which turtle is currently active.
   */
  setActiveTurtle(id: GTNTurtleId): void;

  /**
   * Checks if a turtle exists.
   */
  exists(id: GTNTurtleId): boolean;

  /**
   * Hard reset: clears the repository (RESET command).
   * Remove all existing turtles.
   */
  clear(): void;

  /**
   * Soft reset: clears the history of lines (trails) for all turtles.
   * The turtles stay in place.
   * Note. The screen should then be cleared by the renderer.
   */
  clearAllLines(): void;

  /**
   * Soft reset: keep the turtles but reinitialize them (position, direction and trails)
   */
  reset(): void;
}
