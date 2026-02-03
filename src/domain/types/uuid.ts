import { type Branded } from './branded';

// Declare the unique symbol for the brand
declare const __uuid: unique symbol;

// Define the branded UUID type
export type Uuid = Branded<string, typeof __uuid>;

// --- Utilities ---

/**
 * Regex for UUID v4 validation.
 *
 * Breakdown:
 * ^ : Start of string
 * [0-9a-f]{8} : 8 hex digits
 * - : hyphen separator
 * [0-9a-f]{4} : 4 hex digits
 * - : hyphen separator
 * 4[0-9a-f]{3} : 4 followed by 3 hex digits (Version 4)
 * - : hyphen separator
 * [89ab][0-9a-f]{3} : Variant identifier 8, 9, a, or b followed by 3 hex digits (Variant 1)
 * - : hyphen separator
 * [0-9a-f]{12} : 12 hex digits
 * $ : End of string
 */
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

/**
 * Predicate to check if a string is a valid UUID v4.
 * @param value The value to check.
 * @returns True if the value is a Uuid V4, false otherwise.
 */
export function isUuid(value: unknown): value is Uuid {
  return typeof value === 'string' && UUID_REGEX.test(value);
}

/**
 * Assertion function to ensure a value is a UUID.
 * @param value The value to check.
 * @param context A string for error reporting (e.g., variable name).
 * @throws Error if validation fails.
 */
export function assertIsUuid(value: unknown): asserts value is Uuid {
  if (!isUuid(value)) {
    throw new Error(`Value '${value}' is not a valid UUID v4`);
  }
}

/**
 * Fallback generator using Math.random
 * if crypto.randomUUID is not available, using Math.random.
 * @returns A string in UUID v4 format.
 */
function generateUuidFallback(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Generates a new UUID v4 string.
 * Uses Web Crypto API if available, otherwise a Math.random fallback.
 * @returns A Uuid V4 string.
 */
export function generateUuid(callback = (uuid: string) => {}): string {
  let uuid: string;
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    uuid = crypto.randomUUID();
  } else {
    uuid = generateUuidFallback();
  }
  callback(uuid);
  return uuid;
}

/**
 * Casts a string to Uuid if valid, otherwise throws.
 * @param uuidString The string to convert.
 * @returns The branded Uuid.
 */
export function toUuid(value: string): Uuid {
  assertIsUuid(value);
  return value;
}
