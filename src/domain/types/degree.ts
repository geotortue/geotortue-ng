import type { Branded } from './branded';

// Declare unique symbol
declare const __degree: unique symbol;

// Define Branded Type
export type Degree = Branded<number, typeof __degree>;

// --- Utilities ---

/**
 * Checks if value is a valid number (not NaN, finite).
 */
export function isDegree(value: number): value is Degree {
  return typeof value === 'number' && !isNaN(value) && isFinite(value);
}

export function assertIsDegree(value: number): asserts value is Degree {
  if (!isDegree(value)) {
    throw new Error(`Value '${value}' is not a valid Degree number`);
  }
}

/**
 * Brands a number as Degree.
 */
export function toDegree(value: number): Degree {
  assertIsDegree(value);
  return value;
}
