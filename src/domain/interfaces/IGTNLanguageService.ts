import type { DslLanguage, UiLanguage } from '@domain/types';
import type { NamedCssColorType } from '@domain/value-objects';

export interface IGTNLanguageService {
  initialize(): Promise<void>;

  // DSL ------------------------------------------------------------------------------------

  /**
   * Returns the current language code for the Turtle Commands (DSL).
   */
  getDslLanguage(): DslLanguage;

  /**
   * Changes ONLY the DSL language.
   * Allows "Hybrid Mode" (ex: UI in French, Commands in English).
   */
  setDslLanguage(lang: DslLanguage): Promise<void>;

  /**
   * Looks up a localized word (e.g. "avance" if in french or "forward" if in english)
   * and returns the Canonical Token ID (e.g. 17 for GT_FORWARD).
   * Returns undefined if the word is just a generic identifier.
   */
  getCanonicalId(word: string): number | undefined;

  /**
   * Returns a localized keyword for a given internal canonical keyword (e.g. in french 'GT_FORWARD' ---> 'av')
   * Uses the DSL Language.
   */
  getLocalizedKeyword(
    internalKeyword: string,
    selector?: (values: string[]) => string | undefined
  ): string;

  /**
   * Finds the internal canonical keyword corresponding to a localized keyword (e.g. in french, 'av' or 'avancer' ---> 'GT_FORWARD')
   * Uses the DSL Language.
   */
  getCanonicalKeyword(localizedKeyword: string): string | undefined;

  /**
   * Get all valid localized keywords for the current DSL (for Editor)
   * Useful for syntax highlighting or validation.
   */
  getAllKeywords(): string[];

  /**
   * Translates a localized color name (e.g. "rouge" in french) to a CSS-valid name ("red").
   * Returns undefined if unknown.
   */
  getCssColor(localizedName: string, dslLang?: DslLanguage): NamedCssColorType | undefined;

  /**
   * Localize a full script from canonical tokens to a natural language.
   * Used in explicit Events/Actions, not through Listeners/Observables.
   * Synch as only called when sure that has been done the fetching of the DSL definitions for the language
   * @param script The code to localize.
   * @param targetLang The target language code (e.g. 'fr').
   */
  localizeScriptSync(script: string, targetLang?: DslLanguage): string;

  /**
   * Localize a full script from canonical tokens to a natural language.
   * Used in explicit Events/Actions, not through Listeners/Observables.
   * Async because it may need to fetch the DSL definitions for the language.
   * @param script The code to localize.
   * @param targetLang The target language code (e.g. 'fr').
   */
  localizeScript(script: string, targetLang?: DslLanguage): Promise<string>;

  /**
   * Translates a full script from one natural language to another.
   * Used in explicit Events/Actions, not through Listeners/Observables.
   * Synch as only called when sure that has been done the fetching of the DSL definitions for the language
   * @param script The code to translate.
   * @param sourceLang The source language code (e.g. 'en').
   * @param targetLang The target language code (e.g. 'fr').
   */
  translateScriptSync(script: string, sourceLang: DslLanguage, targetLang: DslLanguage): string;

  /**
   * Translates a full script from one natural language to another.
   * Used in explicit Events/Actions, not through Listeners/Observables.
   * Async because it may need to fetch the DSL definitions for the languages.
   * @param script The code to translate.
   * @param sourceLang The source language code (e.g. 'en').
   * @param targetLang The target language code (e.g. 'fr').
   */
  translateScript(
    script: string,
    sourceLang: DslLanguage,
    targetLang: DslLanguage
  ): Promise<string>;

  /**
   * Transforms a full script from a natural language to the canonical format.
   * Used in explicit Events/Actions, not through Listeners/Observables.
   * Synch as only called when sure that has been done the fetching of the DSL definitions for the language
   * @param script The code to canonicalize.
   * @param sourceLang The source language code (e.g. 'en').
   */
  canonicalizeScriptSync(script: string, sourceLang?: DslLanguage): string;

  /**
   * Transforms a full script from a natural language to the canonical format.
   * Used in explicit Events/Actions, not through Listeners/Observables.
   * Async because it may need to fetch the DSL definitions for the languages.
   * @param script The code to canonicalize.
   * @param sourceLang The source language code (e.g. 'en').
   */
  canonicalizeScript(script: string, sourceLang?: DslLanguage): Promise<string>;

  /**
   * Notify listeners when a change occurs on **DSL language**.
   * @param callback
   */
  subscribeDslListeners(callback: (lang: DslLanguage) => void): () => void;

  // UI -------------------------------------------------------------------------------------

  /**
   * Returns the current language code for the User Interface (Menus, Buttons).
   */
  getUiLanguage(): UiLanguage;

  /**
   * Changes the UI language.
   * By default, this ALSO changes the DSL language to match (reset behavior).
   */
  setUiLanguage(lang: UiLanguage): Promise<void>;

  /**
   * Notify listeners when a change occurs on **UI language**.
   * @param callback
   */
  subscribeUiListeners(callback: (lang: UiLanguage) => void): () => void;

  /**
   * Translates a UI key (e.g. "toolbar.run" -> "Exécuter")
   */
  translate(key: string, options?: any): string;
}
