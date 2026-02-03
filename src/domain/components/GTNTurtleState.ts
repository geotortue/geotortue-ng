import { GTNVector3, GTNQuaternion } from '@domain/value-objects';

/**
 * Represents the spatial state of a turtle (Position + Orientation).
 * It acts as a component held by the Turtle entity.
 * Mutable by nature (Turtle state changes).
 */
export class GTNTurtleState {
  constructor(
    public position: GTNVector3 = GTNVector3.ZERO,
    public rotation: GTNQuaternion = GTNQuaternion.IDENTITY
  ) {}

  /**
   * Creates a deep copy of the state (useful for History/Undo features).
   */
  clone(): GTNTurtleState {
    return new GTNTurtleState(this.position, this.rotation);
  }
}
