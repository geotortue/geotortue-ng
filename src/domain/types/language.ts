/**
 * At the moment supported languages for presentation (ui) and GéoTortue DSL are the same.
 */
export const SUPPORTED_LANGUAGES = ['fr', 'en'] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

/** * Type Guard to check if a string is a valid SupportedLanguage
 */
export const isSupportedLanguage = (lang: unknown): lang is SupportedLanguage => {
  return typeof lang === 'string' && SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage);
};
