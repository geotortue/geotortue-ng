import { type Branded } from './branded';

// Declare unique symbol
declare const __radian: unique symbol;

// Define Branded Type
export type Radian = Branded<number, typeof __radian>;

// --- Utilities ---

export function isRadian(value: number): value is Radian {
  return typeof value === 'number' && !isNaN(value) && isFinite(value);
}

export function assertIsRadian(value: number): asserts value is Radian {
  if (!isRadian(value)) {
    throw new Error(`Value '${value}' is not a valid Radian number`);
  }
}

/**
 * Brands a number as Radian.
 */
export function toRadian(value: number): Radian {
  assertIsRadian(value);
  return value;
}
