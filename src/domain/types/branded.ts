/**
 * Generic Branded Type.
 * Creates a type that is assignable to T but nominally distinct.
 *
 * @template T The base primitive type (e.g., string, number).
 * @template S The unique symbol type acting as the brand.
 */
export type Branded<T, S extends symbol> = T & { [K in S]: S };
