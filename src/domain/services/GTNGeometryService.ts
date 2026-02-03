import type { Degree } from '@domain/types';
import type { IGTNMathProvider } from '../interfaces/IGTNMathProvider';
import { GTNVector3, GTNQuaternion } from '@domain/value-objects';

/**
 * Pure Domain Service.
 * Contains the logic for moving the turtle (Forward, Turn).
 * Decoupled from any rendering technology.
 */
export class GTNGeometryService {
  constructor(private readonly mathProvider: IGTNMathProvider) {}

  /**
   * Calculates the new position after moving forward 'distance' units
   * along the current 'rotation' vector.
   */
  public calculateNewPosition(
    currentPos: GTNVector3,
    currentRot: GTNQuaternion,
    distance: number
  ): GTNVector3 {
    return this.mathProvider.calculateForwardMove(currentPos, currentRot, distance);
  }

  /**
   * Calculates the new rotation after turning around a local axis.
   * @param axis 'Z' (Left/Right), 'X' (Up/Down - Pitch), 'Y' (Roll)
   */
  rotateZ(currentRot: GTNQuaternion, angle: Degree): GTNQuaternion {
    return this.mathProvider.calculateRotationZ(currentRot, angle);
  }
}
