import { CharStream, Token, Vocabulary } from 'antlr4ng';

import { GeoTortueLexer } from '@infrastructure/antlr/generated/GeoTortueLexer';

import type { DslLanguage } from '@domain/types';
import { NAMED_CSS_COLOR, toNamedCssColor, type NamedCssColor } from '@domain/value-objects';
import type { IGTNLogger } from '@app/interfaces/IGTNLogger';
import { GTNContainer } from '@infrastructure/di/GTNContainer';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';

const GEOTORTUE_GRAMMAR_PREFIX = 'GT_';

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
  colorForwardCss: Map<string, NamedCssColor>;
};

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
  public getCssColor(localizedColorName: string, lang: DslLanguage): NamedCssColor | undefined {
    const cache = this.cache.get(lang);
    if (!cache) {
      return undefined;
    }

    const search = localizedColorName.toLowerCase();
    const canonicalKeyword = cache.colorReverse.get(search);
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
  public getInternalKey(word: string, lang: DslLanguage): string | undefined {
    // Check if the dictionary for this language is currently in memory
    const cache = this.cache.get(lang);
    if (!cache) {
      // NOTE: Highlighters are synchronous, so we cannot await here.
      // The dictionary must be pre-loaded via 'loadDictionary' during app startup.
      return undefined;
    }

    const search = word.toLowerCase();

    // Look up in all the reverse maps
    // Order matters if there are overlaps, but usually keys are distinct.
    return (
      cache.commandReverse.get(search) ||
      cache.keywordReverse.get(search) ||
      cache.colorReverse.get(search)
    );
  }

  /**
   * Explicitly load a dictionary to ensure synchronous lookups will work later.
   */
  public async loadDictionary(lang: DslLanguage): Promise<void> {
    await this.getOrLoadDictionary(lang);
  }

  /**
   * Translates a script from one language to another using ANTLR tokens.
   */
  public async translateScript(
    script: string,
    fromLang: DslLanguage,
    targetLang: DslLanguage
  ): Promise<string> {
    if (!script.trim()) return '';

    // 1. Ensure dictionaries are loaded
    const [sourceDict, targetDict] = await Promise.all([
      this.getOrLoadDictionary(fromLang),
      this.getOrLoadDictionary(targetLang)
    ]);

    // 2. Tokenize script
    const chars = CharStream.fromString(script);
    const lexer = new GeoTortueLexer(chars);

    // Get all tokens (including those on hidden channels if any, though getAllTokens usually fetches channel 0.
    // We strictly use start/stop indices to preserve whitespace, so we just need the "significant" tokens to translate).
    const tokens = lexer.getAllTokens();
    const vocabulary = lexer.vocabulary;

    const replacements: ReplacementType[] = [];

    // 3. Iterate on tokens
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

  private doTranslate(
    token: Token,
    vocabulary: Vocabulary,
    sourceDict: LangCache,
    targetDict: LangCache
  ) {
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
    // C. No translation found, return the original
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
      const response = await fetch(`/locales/${lang}/dsl.json`);
      if (!response.ok) throw new Error(`Failed to load DSL for ${lang}`);

      const json: DSLDefinition = await response.json();

      const { forward: commandForward, reverse: commandReverse } = createMapping(json.commands);
      const { forward: keywordForward, reverse: keywordReverse } = createMapping(json.keywords);
      const { forward: colorForward, reverse: colorReverse } = createMapping(json.colors);

      const cache: LangCache = {
        commandReverse,
        keywordReverse,
        colorReverse,
        commandForward,
        keywordForward,
        colorForward,
        colorForwardCss: createColorMap()
      };

      this.cache.set(lang, cache);
      return cache;
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
  const forward = new Map<string, NamedCssColor>();
  for (const color of NAMED_CSS_COLOR) {
    // Forward: Canonical Keyword ---> CSS color name
    const key = GEOTORTUE_GRAMMAR_PREFIX + color.toUpperCase();
    forward.set(key, toNamedCssColor(color));
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
