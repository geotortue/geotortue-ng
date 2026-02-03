/**
 * Représente un triplet mathématique (x, y, z).
 * Sert de fondation pour les Points et les Vecteurs dans l'espace 3D.
 * C'est un "Value Object" immuable : toute opération renvoie une nouvelle instance.
 */
export class GTNVector3 {
  constructor(
    public readonly x: number,
    public readonly y: number,
    public readonly z: number
  ) {}

  // --- Constantes Utiles ---
  static get ZERO() {
    return new GTNVector3(0, 0, 0);
  }
  static get ONE() {
    return new GTNVector3(1, 1, 1);
  }

  // Convention GeoTortue/Logo : Z est la hauteur, Y est devant.
  static get UP() {
    return new GTNVector3(0, 0, 1);
  } // Axe Z
  static get FORWARD() {
    return new GTNVector3(0, 1, 0);
  } // Axe Y
  static get RIGHT() {
    return new GTNVector3(1, 0, 0);
  } // Axe X

  // --- Opérations Mathématiques ---
  add(v: GTNVector3): GTNVector3 {
    return new GTNVector3(this.x + v.x, this.y + v.y, this.z + v.z);
  }

  subtract(v: GTNVector3): GTNVector3 {
    return new GTNVector3(this.x - v.x, this.y - v.y, this.z - v.z);
  }

  scale(scalar: number): GTNVector3 {
    return new GTNVector3(this.x * scalar, this.y * scalar, this.z * scalar);
  }

  /**
   * Produit Scalaire (Dot Product)
   * Utile pour calculer des angles ou des projections.
   */
  dot(v: GTNVector3): number {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  /**
   * Produit Vectoriel (Cross Product)
   * Utile pour trouver un vecteur perpendiculaire à deux autres.
   */
  cross(v: GTNVector3): GTNVector3 {
    return new GTNVector3(
      this.y * v.z - this.z * v.y,
      this.z * v.x - this.x * v.z,
      this.x * v.y - this.y * v.x
    );
  }

  /**
   * Longueur du vecteur (Magnitude)
   */
  length(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  /**
   * Distance euclidienne vers un autre point
   */
  distanceTo(v: GTNVector3): number {
    return Math.sqrt(
      Math.pow(this.x - v.x, 2) + Math.pow(this.y - v.y, 2) + Math.pow(this.z - v.z, 2)
    );
  }

  /**
   * Retourne le vecteur unitaire (longueur = 1)
   */
  normalize(): GTNVector3 {
    const len = this.length();
    if (len === 0) return GTNVector3.ZERO;
    return this.scale(1 / len);
  }

  /**
   * Égalité structurelle (Value Object)
   */
  equals(v: GTNVector3): boolean {
    // On utilise une petite tolérance pour les erreurs de virgule flottante (Epsilon)
    const EPSILON = 0.000001;
    return (
      Math.abs(this.x - v.x) < EPSILON &&
      Math.abs(this.y - v.y) < EPSILON &&
      Math.abs(this.z - v.z) < EPSILON
    );
  }

  toString(): string {
    return `(${this.x.toFixed(2)}, ${this.y.toFixed(2)}, ${this.z.toFixed(2)})`;
  }

  /**
   * Conversion pour sérialisation JSON
   */
  toJSON() {
    return { x: this.x, y: this.y, z: this.z };
  }
}

// --- ALIAS SÉMANTIQUES (DDD) ---
// Alias pour la sémantique : Un Point est structurellement identique à un Vecteur

// 1. Alias pour "Vecteur" générique
export type GTNVector = GTNVector3;
// Helper pour instancier sémantiquement un Vector
export const GTNVector = GTNVector3;

// 2. Alias explicite "Vecteur 3D" (si on veut être précis)
export type GTNVector3D = GTNVector3;
// Helper pour instancier sémantiquement un Vector3D
export const GTNVector3D = GTNVector3;

// 3. Alias pour "Point" (Position)
export type GTNPoint = GTNVector3;
// Helper pour instancier sémantiquement un Point
export const GTNPoint = GTNVector3;

// 4. Alias explicite "Point 3D"
export type GTNPoint3D = GTNVector3;
// Helper pour instancier sémantiquement un Point3D
export const GTNPoint3D = GTNVector3;
