import { type Degree, fromDegreeToRadian } from '@domain/types';
import type { GTNVector3 } from './GTNVector3';

/**
 * Represents a rotation in 3D space as a quaternion (x, y, z, w).
 * This avoids the "gimbal lock" inherent in Euler angles.
 * Value Object immuable.
 */
export class GTNQuaternion {
  constructor(
    public readonly x: number,
    public readonly y: number,
    public readonly z: number,
    public readonly w: number
  ) {}

  // --- Constantes ---

  static get IDENTITY() {
    return new GTNQuaternion(0, 0, 0, 1);
  }

  // --- Factories ---

  /**
   * Crée un quaternion représentant une rotation autour d'un axe donné.
   * @param axis L'axe de rotation (doit être normalisé idéalement, mais la méthode le gère)
   * @param angle Angle in degrees
   */
  static fromAxisAngle(axis: GTNVector3, angle: Degree): GTNQuaternion {
    // Conversion Degrees -> Radians
    const angleRad = fromDegreeToRadian(angle);
    const halfAngle = angleRad / 2;

    const s = Math.sin(halfAngle);

    // On s'assure que l'axe est unitaire pour que les maths fonctionnent
    const unitAxis = axis.normalize();

    return new GTNQuaternion(unitAxis.x * s, unitAxis.y * s, unitAxis.z * s, Math.cos(halfAngle));
  }

  // --- Opérations ---

  /**
   * Combine deux rotations.
   * Attention : La multiplication de quaternions n'est pas commutative.
   * this.multiply(q) équivaut mathématiquement à this * q
   * Cela signifie généralement appliquer la rotation 'q' APRES 'this' (selon convention locale).
   */
  multiply(q: GTNQuaternion): GTNQuaternion {
    const x = this.x * q.w + this.w * q.x + this.y * q.z - this.z * q.y;
    const y = this.y * q.w + this.w * q.y + this.z * q.x - this.x * q.z;
    const z = this.z * q.w + this.w * q.z + this.x * q.y - this.y * q.x;
    const w = this.w * q.w - this.x * q.x - this.y * q.y - this.z * q.z;

    return new GTNQuaternion(x, y, z, w);
  }

  /**
   * Normalise le quaternion (nécessaire pour éviter la dérive numérique après plusieurs multiplications).
   * Un quaternion de rotation doit toujours avoir une magnitude de 1.
   */
  normalize(): GTNQuaternion {
    let len = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);

    if (len === 0) {
      return GTNQuaternion.IDENTITY;
    }

    len = 1 / len;
    return new GTNQuaternion(this.x * len, this.y * len, this.z * len, this.w * len);
  }

  /**
   * Inverse la rotation (utile pour "Undo").
   */
  inverse(): GTNQuaternion {
    // Pour un quaternion unitaire (rotation), l'inverse est le conjugué.
    return new GTNQuaternion(-this.x, -this.y, -this.z, this.w);
  }

  /**
   * Vérifie l'égalité structurelle
   */
  equals(q: GTNQuaternion): boolean {
    const EPSILON = 0.000001;
    return (
      Math.abs(this.x - q.x) < EPSILON &&
      Math.abs(this.y - q.y) < EPSILON &&
      Math.abs(this.z - q.z) < EPSILON &&
      Math.abs(this.w - q.w) < EPSILON
    );
  }

  toString(): string {
    return `Q(${this.x.toFixed(3)}, ${this.y.toFixed(3)}, ${this.z.toFixed(3)}, ${this.w.toFixed(3)})`;
  }
}
