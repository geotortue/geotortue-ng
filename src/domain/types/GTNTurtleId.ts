import { type Branded } from './branded';

// Declare unique symbol for Turtle ID
declare const __turtleId: unique symbol;

// Define Branded Type
export type GTNTurtleId = Branded<string, typeof __turtleId>;

// --- Utilities ---

/**
 * Type predicate to check if a value is a TurtleI, i.e. a valid positive integer starting at 1.):
 * "1" -> true
 * "1.5" -> false
 * "abc" -> false
 * "-5" -> false
 *
 * Here TurtleId is a business Id which can be exposed ti the user.
 *
 * @param value The value to check.
 * @returns True if the value is a TurtleId, false otherwise.
 */
export function isGTNTurtleId(value: unknown): value is GTNTurtleId {
  return typeof value === 'string' && /^[1-9]\d*$/.test(value);
}

/**
 * Type assertion to validate a TurtleId.
 * @param value The value to check.
 */
export function assertIsGTNTurtleId(value: unknown): asserts value is GTNTurtleId {
  if (!isGTNTurtleId(value)) {
    throw new Error(`Value '${value}' is not a valid GTNTurtleId (must be positive integer).`);
  }
}

/**
 * Generates the next available ID based on a list of existing IDs.
 * Returns (Max + 1) as a string.
 * Defaults to "1" if list is empty.
 * * @param existingIds Array of current IDs to check against.
 */
export function generateGTNTurtleId(existingIds: string[]): GTNTurtleId {
  if (!existingIds || existingIds.length === 0) {
    return '1' as GTNTurtleId;
  }

  let max = 0;
  for (const id of existingIds) {
    const num = parseInt(id, 10);
    if (!isNaN(num) && num > max) {
      max = num;
    }
  }

  return (max + 1).toString() as GTNTurtleId;
}

/**
 * Casts a string as a TurtleId
 * @param value The value to check.
 * @returns A new TurtleId.
 * @see assertIsGTNTurtleId
 */
export function toGTNTurtleId(value: string): GTNTurtleId {
  assertIsGTNTurtleId(value);
  return value;
}
