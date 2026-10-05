import { GTNQuaternion, GTNVector3 } from '@domain/value-objects';
import type { Degree } from '@domain/types';

/**
 * Allows the domain to calculate moves and rotations without knowing which framework
 * is used (Three.js, Matrix math, ...)
 */
export interface IGTNMathProvider {
  /**
   * Calculates a new position moving 'distance' along the orientation.
   * Assumes "Forward" is +Y (standard 2D/Turtle).
   */
  calculateForwardMove(
    position: GTNVector3,
    orientation: GTNQuaternion,
    distance: number
  ): GTNVector3;

  /**
   * Calculates a new orientation by rotating 'angle' degrees around the Z axis.
   */
  calculateRotationZ(currentRotation: GTNQuaternion, angle: Degree): GTNQuaternion;
}
