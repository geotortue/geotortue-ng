import type { Branded } from './branded';
import { isSupportedLanguage } from './language';

declare const __dslLanguage: unique symbol;

export type DslLanguage = Branded<string, typeof __dslLanguage>;

export function isDslLanguage(value: unknown): value is DslLanguage {
  return isSupportedLanguage(value);
}

export function assertIsDslLanguage(value: string): asserts value is DslLanguage {
  if (!isDslLanguage(value)) {
    throw new Error(`Invalid DSL Language code: ${value}`);
  }
}

export function toDslLanguage(value: string): DslLanguage {
  assertIsDslLanguage(value);
  return value;
}
