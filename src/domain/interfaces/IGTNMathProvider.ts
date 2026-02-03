import { GTNQuaternion, GTNVector3 } from '@domain/value-objects';
import type { Degree } from '@domain/types';

/**
 * Contrat pour les opérations mathématiques complexes 3D.
 * Permet au domaine d'effectuer des rotations sans connaître Three.js ou Matrix math.
 * Allows the domain to calculate moves and rotations without knowing which framework
 * is used (Three.js, Matrix math, ...)
 */
export interface IGTNMathProvider {
  /**
   * Calculates a new position moving 'distance' along the 'rotation' orientation.
   * Assumes "Forward" is +Y (standard 2D/Turtle).
   */
  calculateForwardMove(position: GTNVector3, rotation: GTNQuaternion, distance: number): GTNVector3;

  /**
   * Calculates a new rotation by rotating 'angle' degrees around the Z axis.
   */
  calculateRotationZ(currentRotation: GTNQuaternion, angle: Degree): GTNQuaternion;
}
