import { type Branded } from './branded';
import { isSupportedLanguage } from './language';

declare const __uiLanguage: unique symbol;

export type UiLanguage = Branded<string, typeof __uiLanguage>;

export function isUiLanguage(value: unknown): value is UiLanguage {
  return isSupportedLanguage(value);
}

export function assertIsUiLanguage(value: string): asserts value is UiLanguage {
  if (!isUiLanguage(value)) {
    throw new Error(`Invalid UI Language code: ${value}`);
  }
}

export function toUiLanguage(value: string): UiLanguage {
  assertIsUiLanguage(value);
  return value;
}
