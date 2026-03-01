import { CharStream, Token, Vocabulary } from 'antlr4ng';

import { GeoTortueLexer } from '@infrastructure/antlr/generated/GeoTortueLexer';

import type { DslLanguage } from '@domain/types';
import { NamedCssColor, type NamedCssColorType } from '@domain/value-objects';
import type { IGTNLogger } from '@app/interfaces/IGTNLogger';
import { GTNContainer } from '@infrastructure/di/GTNContainer';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';

type ReplacementType = { start: number; stop: number; newText: string };

// Types representing the JSON structure
type DSLDefinition = {
  commands: Record<string, string | string[]>;
  keywords: Record<string, string | string[]>;
  colors: Record<string, string>;
};

// Internal cache structure
type LangCache = {
  // Reverse Maps: "av" in french ---> "GT_FORWARD"
  commandReverse: Map<string, string>;
  keywordReverse: Map<string, string>;
  // "rouge" in french ---> "GT_RED"
  colorReverse: Map<string, string>;

  // Forward Maps: "GT_FORWARD" ---> "forward" (primary alias)
  commandForward: Map<string, string>;
  keywordForward: Map<string, string>;
  // "GT_RED" ---> "rouge" in french
  colorForward: Map<string, string>;

  // "GT_RED" ---> "red" as CSS named color
  colorForwardCss: Map<string, NamedCssColorType>;
};

export const CANONICAL_LANGUAGE = '--' as DslLanguage;
export type CanonicalLanguage = '--';

/** * Type Guard to check if it is the canonical language
 */
export const isCanonicalLanguage = (lang: unknown): lang is CanonicalLanguage => {
  return typeof lang === 'string' && CANONICAL_LANGUAGE === lang;
};

const GEOTORTUE_GRAMMAR_PREFIX = 'GT_';
export class GTNReverseDictionaryService {
  private readonly cache: Map<string, LangCache> = new Map();
  private readonly loaders: Map<string, Promise<LangCache>> = new Map();
  private readonly logger: IGTNLogger;

  constructor() {
    const container = GTNContainer.getInstance();
    this.logger = container.resolve<IGTNLogger>(GTN_TYPES.Logger);
  }

  /**
   * Translates a localized color name (e.g. "rouge" in french) to a CSS-valid name ("red").
   * Returns undefined if unknown.
   *
   * @param localizedColorName
   * @param lang
   * @returns
   */
  public getCssColor(
    localizedColorName: string,
    fromLang: DslLanguage
  ): NamedCssColorType | undefined {
    const cache = this.cache.get(fromLang);
    if (!cache) {
      return undefined;
    }

    const canonicalKeyword = isCanonicalLanguage(fromLang)
      ? localizedColorName
      : cache.colorReverse.get(localizedColorName.toLowerCase());

    if (!canonicalKeyword) {
      return undefined;
    }

    const csscolor = cache.colorForwardCss.get(canonicalKeyword);
    return csscolor;
  }

  /**
   * Synchronous lookup for the internal string key (e.g. "GT_FORWARD")
   * corresponding to a localized word (e.g. "avance" in french).
   * Used by the Syntax Highlighter.
   * Returns undefined if the dictionary is not yet loaded or the word is unknown.
   */
  public getCanonicalKey(word: string, fromLang: DslLanguage): string | undefined {
    // Check if the dictionary for this language is currently in memory
    const cache = this.cache.get(fromLang);
    if (!cache) {
      // NOTE: Highlighters are synchronous, so we cannot await here.
      // The dictionary must be pre-loaded via 'loadDictionary' during app startup.
      return undefined;
    }

    const search = word.toLowerCase();

    // Look up in all the reverse maps
    // Order matters if there are overlaps, but usually keys are distinct.
    // Special case of colors: we don't want a key as defined in section "colors" of a dsl.json file
    // but directly a valid css color as defined in enum NamedCssColor
    // FUTURE sharing code with {@link GTNReverseDictionaryService.doCanonicalize}
    const key =
      cache.commandReverse.get(search) ||
      cache.keywordReverse.get(search) ||
      (() => {
        const canonicalKey = cache.colorReverse.get(search);
        if (!canonicalKey) {
          return word;
        }
        const cssColor = cache.colorForwardCss.get(canonicalKey);
        return cssColor ?? word;
      })();
    return key;
  }

  /**
   * Explicitly load a dictionary to ensure synchronous lookups will work later.
   */
  public async loadDictionary(lang: DslLanguage): Promise<void> {
    await this.getOrLoadDictionary(lang);
  }

  public canonicalizeScriptSync(script: string, fromLang: DslLanguage): string {
    if (!script.trim()) {
      return script;
    }
    const sourceDict = this.cache.get(fromLang);
    if (!sourceDict) {
      this.logger.warn(`[ReverseDictionary] Sync localization failed: ${fromLang} not loaded`);
      return script;
    }

    const chars = CharStream.fromString(script);
    const lexer = new GeoTortueLexer(chars);
    const tokens = lexer.getAllTokens();

    const replacements: ReplacementType[] = [];

    for (const token of tokens) {
      if (token.text == null) {
        continue;
      }

      const canonicalizedText = this.doCanonicalize(token, sourceDict);

      if (canonicalizedText === undefined || canonicalizedText === token.text) {
        continue;
      }

      replacements.push({
        start: token.start,
        stop: token.stop,
        newText: canonicalizedText
      });
    }
    const canonicalizedCode = replacements.toReversed().reduce((acc, rep) => {
      const before = acc.substring(0, rep.start);
      const after = acc.substring(rep.stop + 1);
      const result = before + rep.newText + after;
      return result;
    }, script);
    return canonicalizedCode;
  }

  public async canonicalizeScript(script: string, fromLang: DslLanguage): Promise<string> {
    if (!script.trim()) {
      return script;
    }

    // Ensure dictionary is loaded asynchronously
    // as it will be used below in `canonicalizeScriptSync`
    await this.getOrLoadDictionary(fromLang);

    // Delegate to the synchronous core logic
    return this.canonicalizeScriptSync(script, fromLang);
  }

  private doCanonicalize(token: Token, sourceDict: LangCache): string | undefined {
    const originalText = token.text!;
    const lowerText = originalText.toLowerCase();

    // Strategy: Just perform the Reverse Lookup!
    // This IS the canonical key.
    // Look up in all the reverse maps
    // Order matters if there are overlaps, but usually keys are distinct.
    // Special case of colors: we don't want a key as defined in section "colors" of a dsl.json file
    // but directly a valid css color as defined in enum NamedCssColor
    // FUTURE sharing code with {@link GTNReverseDictionaryService.getCanonicalKey}
    const key =
      sourceDict.commandReverse.get(lowerText) ||
      sourceDict.keywordReverse.get(lowerText) ||
      (() => {
        const canonicalKey = sourceDict.colorReverse.get(lowerText);
        if (!canonicalKey) {
          return originalText;
        }
        const cssColor = sourceDict.colorForwardCss.get(canonicalKey);
        return cssColor ?? originalText;
      })();
    return key;
  }

  /**
   * Localizes a script from canonical tokens to destination language
   *
   * REQUIRED for CodeMirror syntax highlighting and ANTLR parsing in the UI thread.
   * Assumes the dictionary has been pre-loaded via loadDictionary().
   */
  public localizeScriptSync(canonicalScript: string, targetLang: DslLanguage): string {
    if (!canonicalScript.trim()) {
      return canonicalScript;
    }

    const targetDict = this.cache.get(targetLang);
    if (!targetDict) {
      this.logger.warn(`[ReverseDictionary] Sync localization failed: ${targetLang} not loaded.`);
      return canonicalScript; // Fallback to raw script if not loaded
    }

    // Tokenize script
    const chars = CharStream.fromString(canonicalScript);
    const lexer = new GeoTortueLexer(chars);

    // Get all tokens (including those on hidden channels if any, though getAllTokens usually fetches channel 0.
    // We strictly use start/stop indices to preserve whitespace, so we just need the "significant" tokens to translate).
    const tokens = lexer.getAllTokens();
    const vocabulary = lexer.vocabulary;

    const replacements: ReplacementType[] = [];

    // Iterate on tokens
    // Identify tokens that need translation
    for (const token of tokens) {
      if (token.text == null) {
        continue;
      }

      const translatedText = this.doLocalize(token, vocabulary, targetDict);
      // Only verify against text to avoid unnecessary string ops if identical
      if (translatedText === token.text) {
        continue;
      }

      replacements.push({
        start: token.start,
        stop: token.stop,
        newText: translatedText!
      });
    }

    // Apply replacements in reverse order, i.e. from end to start, to maintain index integrity
    const localizedCode = replacements.toReversed().reduce((acc, rep) => {
      const before = acc.substring(0, rep.start);
      const after = acc.substring(rep.stop + 1);
      const result = before + rep.newText + after;
      return result;
    }, canonicalScript);
    return localizedCode;
  }

  /**
   * Localizes a script from canonical tokens to destination language
   *
   * Asynchronous wrapper of localizeScriptSynch
   *
   */
  public async localizeScript(canonicalScript: string, targetLang: DslLanguage) {
    if (!canonicalScript.trim()) {
      return canonicalScript;
    }
    // Ensure dictionary is loaded asynchronously
    // as it will be used below in `localizeScriptSync`
    await this.getOrLoadDictionary(targetLang);

    // Delegate to the synchronous core logic
    return this.localizeScriptSync(canonicalScript, targetLang);
  }

  private doLocalize(
    token: Token,
    vocabulary: Vocabulary,
    targetDict: LangCache
  ): string | undefined {
    if (token.text == null) {
      return token.text;
    }

    const tokenType = token.type;
    const symbolicName = vocabulary.getSymbolicName(tokenType); // e.g., "GT_FORWARD" or null

    // ---------------------------------------------------------
    // STRATEGY A: Direct Token Type Match
    // ---------------------------------------------------------
    // If the Lexer explicitly recognized the token (e.g. it was a hardcoded keyword in grammar),
    // we map the Token Type directly to the Target Language word.
    if (symbolicName && targetDict.commandForward.has(symbolicName)) {
      return targetDict.commandForward.get(symbolicName)!;
    }
    if (symbolicName && targetDict.keywordForward.has(symbolicName)) {
      return targetDict.keywordForward.get(symbolicName)!;
    }

    // ---------------------------------------------------------
    // STRATEGY B: Reverse Text Lookup (Fallback)
    // ---------------------------------------------------------
    // If the Lexer treated the word as a generic 'GT_WORD' or 'GT_ID',
    // we look up the text in the SOURCE dictionary to find its canonical ID,
    // then map that ID to the TARGET language.

    const originalText = token.text;
    const key = originalText.toUpperCase();
    // 1. Check Commands (e.g. GT_FORWARD ---> "forward")
    if (targetDict.commandForward.has(key)) {
      return targetDict.commandForward.get(key) || originalText;
    }

    // 2. Check Keywords (e.g. GT_REP ---> "repeat") -> THIS WAS MISSING
    if (targetDict.keywordForward.has(key)) {
      return targetDict.keywordForward.get(key) || originalText;
    }

    // 3. Check Colors (e.g. "red")
    const stripped = key.replace(/^'(.*)'$/, '$1').replace(/^"(.*)"$/, '$1');
    const canonicalColor = GEOTORTUE_GRAMMAR_PREFIX + stripped.toUpperCase();
    if (targetDict.colorForward.has(canonicalColor)) {
      const del = stripped === key ? '' : key.charAt(0);
      const color = del + (targetDict.colorForward.get(canonicalColor) ?? '') + del;
      return color || originalText;
    }

    // 4. No translation found, return the original
    return originalText;
  }

  /**
   * Translates a script from one language to another using ANTLR tokens.
   *
   * Use ATN and ANTLR canonical tokens to links both sides
   *
   * Assumes the dictionary has been pre-loaded via loadDictionary().
   */
  public translateScriptSync(
    script: string,
    fromLang: DslLanguage,
    targetLang: DslLanguage
  ): string {
    if (!script.trim()) {
      return script;
    }

    const sourceDict = this.cache.get(fromLang);
    const targetDict = this.cache.get(targetLang);
    if (!sourceDict || !targetDict) {
      this.logger.warn(`[ReverseDictionary] Sync localization failed:
        ${!sourceDict ? fromLang : ''}
        ${!sourceDict && !targetDict ? '&' : ''}
        ${!targetDict ? targetLang : ''}
        not loaded.`);
      return script; // Fallback to raw script if not loaded
    }

    // Tokenize script
    const chars = CharStream.fromString(script);
    const lexer = new GeoTortueLexer(chars);

    // Get all tokens (including those on hidden channels if any, though getAllTokens usually fetches channel 0.
    // We strictly use start/stop indices to preserve whitespace, so we just need the "significant" tokens to translate).
    const tokens = lexer.getAllTokens();
    const vocabulary = lexer.vocabulary;

    const replacements: ReplacementType[] = [];

    // Iterate on tokens
    for (const token of tokens) {
      if (token.text == null) {
        continue;
      }

      const translatedText = this.doTranslate(token, vocabulary, sourceDict, targetDict);
      // Only verify against text to avoid unnecessary string ops if identical
      if (translatedText === token.text) {
        continue;
      }

      replacements.push({ start: token.start, stop: token.stop, newText: translatedText! });
    }

    // Apply replacements in reverse order, i.e. from end to start
    const translatedCode = replacements.toReversed().reduce((acc, rep) => {
      const before = acc.substring(0, rep.start);
      const after = acc.substring(rep.stop + 1);
      const result = before + rep.newText + after;
      return result;
    }, script);

    return translatedCode;
  }

  /**
   * Translates a script from one natural language to another one
   *
   * Asynchronous version of translateScriptSync.
   *
   */
  public async translateScript(
    script: string,
    fromLang: DslLanguage,
    targetLang: DslLanguage
  ): Promise<string> {
    if (!script.trim()) {
      return script;
    }

    // Ensure dictionaries are loaded
    await Promise.all([this.getOrLoadDictionary(fromLang), this.getOrLoadDictionary(targetLang)]);

    // Delegate to the synchronous core logic
    return this.translateScriptSync(script, fromLang, targetLang);
  }

  private doTranslate(
    token: Token,
    vocabulary: Vocabulary,
    sourceDict: LangCache,
    targetDict: LangCache
  ): string | undefined {
    if (token.text == null) {
      return token.text;
    }

    const tokenType = token.type;
    const symbolicName = vocabulary.getSymbolicName(tokenType); // e.g., "GT_FORWARD" or null

    // ---------------------------------------------------------
    // STRATEGY A: Direct Token Type Match
    // ---------------------------------------------------------
    // If the Lexer explicitly recognized the token (e.g. it was a hardcoded keyword in grammar),
    // we map the Token Type directly to the Target Language word.
    if (symbolicName && targetDict.commandForward.has(symbolicName)) {
      return targetDict.commandForward.get(symbolicName)!;
    }
    if (symbolicName && targetDict.keywordForward.has(symbolicName)) {
      return targetDict.keywordForward.get(symbolicName)!;
    }

    // ---------------------------------------------------------
    // STRATEGY B: Reverse Text Lookup (Fallback)
    // ---------------------------------------------------------
    // If the Lexer treated the word as a generic 'GT_WORD' or 'GT_ID',
    // we look up the text in the SOURCE dictionary to find its canonical ID,
    // then map that ID to the TARGET language.

    const originalText = token.text;
    const lowerText = originalText.toLowerCase();
    // 1. Check Commands (e.g. "avance")
    if (sourceDict.commandReverse.has(lowerText)) {
      const key = sourceDict.commandReverse.get(lowerText)!;
      return targetDict.commandForward.get(key) || originalText;
    }

    // 2. Check Keywords (e.g. "repete") -> THIS WAS MISSING
    if (sourceDict.keywordReverse.has(lowerText)) {
      const key = sourceDict.keywordReverse.get(lowerText)!;
      return targetDict.keywordForward.get(key) || originalText;
    }

    // 3. Check Colors (e.g. "rouge")
    if (sourceDict.colorReverse.has(lowerText)) {
      const key = sourceDict.colorReverse.get(lowerText)!;
      return targetDict.colorForward.get(key) || originalText;
    }

    // 4. No translation found, return the original
    return originalText;
  }

  private async getOrLoadDictionary(lang: DslLanguage): Promise<LangCache> {
    if (this.cache.has(lang)) return this.cache.get(lang)!;
    if (this.loaders.has(lang)) return this.loaders.get(lang)!;

    const promise = this.loadAndProcess(lang);
    this.loaders.set(lang, promise);
    return promise;
  }

  private async loadAndProcess(lang: DslLanguage): Promise<LangCache> {
    try {
      // Bypass i18next cache, fetch raw JSON
      const baseUrl = import.meta.env.BASE_URL;
      const fullUrl = `${baseUrl}locales/${lang}/dsl.json`;
      const response = await fetch(fullUrl);
      if (!response.ok) {
        throw new Error(`Failed to load DSL for ${lang}`);
      }

      const json: DSLDefinition = await response.json();

      const { forward: commandForward, reverse: commandReverse } = createMapping(json.commands);
      const { forward: keywordForward, reverse: keywordReverse } = createMapping(json.keywords);
      const { forward: colorForward, reverse: colorReverse } = createMapping(json.colors);

      const langCache: LangCache = {
        commandReverse,
        keywordReverse,
        colorReverse,
        commandForward,
        keywordForward,
        colorForward,
        colorForwardCss: createColorMap()
      };

      this.cache.set(lang, langCache);
      return langCache;
    } catch (e) {
      this.logger.error(`[ReverseDictionary] Error loading ${lang}`, e);
      // Return empty structures to prevent crash
      return {
        commandReverse: new Map(),
        keywordReverse: new Map(),
        colorReverse: new Map(),
        commandForward: new Map(),
        keywordForward: new Map(),
        colorForward: new Map(),
        colorForwardCss: new Map()
      };
    }
  }
}

/* Provide a map between canonical color keyword and css color known of GéoTortue.
 *
 * The keywords used in the section 'colors' of the i18n json files must be
 * of the form <grammar prefix, here 'GT_'><CSS color>
 *
 * @param source map between canonical keyword of a color and its css name
 * @returns
 */
function createColorMap() {
  const forward = new Map<string, NamedCssColorType>();

  // ✅ Use Object.entries to get both the Key (RED) and Value ('red')
  for (const [enumKey, enumValue] of Object.entries(NamedCssColor)) {
    // Skip numeric reverse-mappings if NamedCssColor is a numeric enum
    if (isNaN(Number(enumKey))) {
      // Construct key from the Enum Key: "RED" -> "GT_RED"
      const key = GEOTORTUE_GRAMMAR_PREFIX + enumKey.toUpperCase();

      // Map "GT_RED" -> "red"
      forward.set(key, enumValue as NamedCssColorType);
    }
  }
  return forward;
}

function createMapping(source: Record<string, string | string[]>) {
  const forward = new Map<string, string>();
  const reverse = new Map<string, string>();
  for (const [key, value] of Object.entries(source)) {
    // Forward: Canonical Keyword ---> Localized Word (first one if array)
    const primary = Array.isArray(value) ? value[0] : value;
    forward.set(key, primary!);

    // Reverse: Localized Word(s) ---> Canonical Keyword
    const allWords = Array.isArray(value) ? value : [value];
    for (const word of allWords) {
      reverse.set(word.toLowerCase(), key);
    }
  }
  return { forward, reverse };
}
