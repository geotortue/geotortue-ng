import { type Branded } from './branded';

const MS_PER_MIN = 60 * 1000;

// Declare unique symbol for the brand
declare const __ms: unique symbol;

// Define Branded Type "Ms"
export type Ms = Branded<number, typeof __ms>;

// --- Utilities ---

/**
 * Checks if the value is a valid duration number (finite number).
 * Note: Negative durations might be valid in some contexts (relative time),
 * but usually time is positive. We allow negative for delta calculations.
 */
export function isMs(value: unknown): value is Ms {
  return typeof value === 'number' && !isNaN(value) && isFinite(value);
}

/**
 * Asserts the value is a valid millisecond number.
 */
export function assertIsMs(value: unknown): asserts value is Ms {
  if (!isMs(value)) {
    throw new Error(`Value '${value}' is not a valid Ms number`);
  }
}

/**
 * Brands a number as Ms.
 */
export function toMs(value: number): Ms {
  assertIsMs(value);
  return value;
}

/**
 * Converts Seconds to Milliseconds.
 * Formula: ms = seconds * 1000
 */
export function fromSeconds(seconds: number): Ms {
  return toMs(seconds * 1000);
}

/**
 * Converts Minutes to Milliseconds.
 * Formula: ms = minutes * 60 * 1000
 */
export function fromMinutes(minutes: number): Ms {
  return toMs(minutes * MS_PER_MIN);
}
