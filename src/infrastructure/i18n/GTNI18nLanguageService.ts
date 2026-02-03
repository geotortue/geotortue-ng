import i18next from 'i18next';

import type { IGTNLanguageService } from '@domain/interfaces/IGTNLanguageService';
import {
  isDslLanguage,
  toDslLanguage,
  toUiLanguage,
  type DslLanguage,
  type UiLanguage
} from '@domain/types';
import { DEFAULT_LANGUAGE, DSL_NS, UI_NS } from '@infrastructure/i18n';
import type { GTNReverseDictionaryService } from './GTNReverseDictionaryService';
import { GTNContainer } from '@infrastructure/di/GTNContainer';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';
import { GeoTortueLexer } from '@infrastructure/antlr/generated/GeoTortueLexer';

type DslResourceBundle = Record<string, string | string[]>;

// Must match the regex used to define commands in the grammar G4.
const LOCALIZED_KEY_PATTERN = /([a-zA-Z\u00C0-\u00FF]+)/g;

export class GTNI18nLanguageService implements IGTNLanguageService {
  private readonly reverseDictionary: GTNReverseDictionaryService;
  // We keep track of the DSL language locally.
  // Initialize with i18next's default or fallback.
  private dslLanguage = toDslLanguage(DEFAULT_LANGUAGE);
  // Store listeners
  // For Global View State (UI Language, App Mode, 3D/2D).
  private readonly listeners: Set<(lang: UiLanguage) => void> = new Set();
  // Store initialization promise to prevent race conditions
  private initPromise: Promise<void> | null = null;

  constructor() {
    const container = GTNContainer.getInstance();
    this.reverseDictionary = container.resolve(GTN_TYPES.DslTranslationHelper);

    const savedLang = localStorage.getItem('gtn_dsl_lang');
    const lang = isDslLanguage(savedLang) ? savedLang : DEFAULT_LANGUAGE;
    this.dslLanguage = toDslLanguage(lang);
  }

  /**
   * Must be called after app startup to load necessary resources.
   */
  async initialize(): Promise<void> {
    if (this.initPromise) {
      return this.initPromise;
    }

    this.initPromise = (async () => {
      await Promise.all([
        // Check if we need to load extra resources for the DSL
        // (e.g. if UI is EN but DSL is FR)
        this.ensureDslResources(this.dslLanguage),
        // Pre-load the Reverse Dictionary for the current DSL language.
        // This ensures that getCanonicalId() (used by the editor) works immediately.
        this.reverseDictionary.loadDictionary(this.dslLanguage)
      ]);
    })();

    return this.initPromise;
  }

  private async ensureDslResources(lang: DslLanguage) {
    if (!i18next.hasResourceBundle(lang, DSL_NS)) {
      await i18next.loadLanguages(lang);
    }
  }

  public getUiLanguage(): UiLanguage {
    return toUiLanguage(i18next.language);
  }

  public getDslLanguage(): DslLanguage {
    return this.dslLanguage;
  }

  /**
   * Changing UI Language
   */
  public async setUiLanguage(lang: UiLanguage): Promise<void> {
    // 1. Persist to LocalStorage
    localStorage.setItem('gtn_ui_lang', lang);

    // 2. Change Runtime Language
    await i18next.changeLanguage(lang);

    // Notify all listeners
    this.notifyListeners(lang);
  }

  /**
   * Changing DSL Language -> Independent.
   * We must ensure the resources are loaded because i18next only auto-loads the active UI language.
   */
  public async setDslLanguage(lang: DslLanguage): Promise<void> {
    if (lang === this.dslLanguage) {
      return;
    }

    // Ensure DSL resources & dictionaries are loaded when switching languages
    await Promise.all([this.ensureDslResources(lang), this.reverseDictionary.loadDictionary(lang)]);

    this.dslLanguage = lang;
    localStorage.setItem('gtn_dsl_lang', lang); // Save DSL pref
    // this.notifyListeners(lang);
  }

  public subscribe(callback: (lang: UiLanguage) => void): () => void {
    this.listeners.add(callback);
    // Return an unsubscribe function
    return () => {
      this.listeners.delete(callback);
    };
  }

  private notifyListeners(lang: UiLanguage) {
    this.listeners.forEach((callback) => callback(lang));
  }

  public getCanonicalId(word: string): number | undefined {
    // 1. Get the internal canonical keyword (string) from the dictionary service (e.g. "GT_FORWARD")
    const internalKey = this.reverseDictionary.getInternalKey(word, this.dslLanguage);

    if (!internalKey) {
      return undefined;
    }

    // 2. Map the String Key ("GT_FORWARD") to the Integer ID (17)
    // We access the static property on the Lexer class.
    // We use a cast to 'any' or 'Record<string, any>' because TypeScript doesn't know
    // we are accessing static members dynamically.
    // FUTURE to move in reverse dictionary
    const tokenId = (GeoTortueLexer as any)[internalKey];

    return typeof tokenId === 'number' ? tokenId : undefined;
  }

  public getLocalizedKeyword(internalKey: string): string {
    // We explicitly use getFixedT or getResourceBundle with the specific DSL language
    const bundle = i18next.getResourceBundle(this.dslLanguage, DSL_NS);

    if (bundle?.commands) {
      const val = bundle.commands[internalKey];
      // Return first alias if it's an array, or the string itself
      return Array.isArray(val) ? val[0] : val;
    }

    return internalKey; // Fallback
  }

  public getInternalKeyword(localizedKeyword: string): string | undefined {
    const search = localizedKeyword.toUpperCase();

    // Use the bundle of the configured DSL language, not the UI language
    const bundle = i18next.getResourceBundle(this.dslLanguage, DSL_NS);
    if (!bundle!.commands) {
      return undefined;
    }

    const commands = bundle.commands;

    // Reverse Lookup
    for (const [key, value] of Object.entries(commands)) {
      if (typeof value === 'string' && value.toUpperCase() === search) {
        return key;
      } else if (Array.isArray(value)) {
        if (value.some((v) => String(v).toUpperCase() === search)) {
          return key;
        }
      }
    }

    return undefined;
  }

  public getAllKeywords(): string[] {
    const lang = this.dslLanguage;
    const bundle = i18next.getResourceBundle(lang, DSL_NS);
    if (!bundle?.commands) {
      return [];
    }

    const commands = bundle.commands as DslResourceBundle;
    const localizedKeys = Object.values(commands);
    const keywords = localizedKeys.reduce((acc: string[], l) => {
      if (typeof l === 'string') {
        acc.push(l);
      } else if (Array.isArray(l)) {
        acc.push(...l);
      }
      return acc;
    }, []);
    return keywords;
  }

  public getCssColor(localizedColorName: string): string | undefined {
    return this.reverseDictionary.getCssColor(localizedColorName, this.dslLanguage);
  }

  public translate(key: string, options?: any): string {
    const fullkey = key.includes(':') ? key : `${UI_NS}:${key}`;
    const result = i18next.t(fullkey, options);

    return result as string;
  }

  public async translateScript(
    script: string,
    targetLang: DslLanguage,
    fromLang?: DslLanguage
  ): Promise<string> {
    const sourceLang = fromLang || this.getDslLanguage();
    if (sourceLang === targetLang) {
      return script;
    }

    return this.reverseDictionary.translateScript(script, sourceLang, targetLang);
  }
}
