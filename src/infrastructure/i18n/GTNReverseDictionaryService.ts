import { CharStream, Token, Vocabulary } from 'antlr4ng';

import type { DslLanguage } from '@domain/types';
import { GeoTortueLexer } from '@infrastructure/antlr/generated/GeoTortueLexer';

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
  colorForwardCss: Map<string, string>;
};

export class GTNReverseDictionaryService {
  private readonly cache: Map<string, LangCache> = new Map();
  private readonly loaders: Map<string, Promise<LangCache>> = new Map();

  /**
   * Translates a localized color name (e.g. "rouge" in french) to a CSS-valid name ("red").
   * Returns undefined if unknown.
   *
   * @param localizedColorName
   * @param lang
   * @returns
   */
  public getCssColor(localizedColorName: string, lang: DslLanguage): string | undefined {
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
    // 1. Check if the dictionary for this language is currently in memory
    const cache = this.cache.get(lang);
    if (!cache) {
      // NOTE: Highlighters are synchronous, so we cannot await here.
      // The dictionary must be pre-loaded via 'loadDictionary' during app startup.
      return undefined;
    }

    const search = word.toLowerCase();

    // 2. Look up in the reverse maps
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
      if (translatedText === token.text) {
        continue;
      }

      replacements.push({ start: token.start, stop: token.stop, newText: translatedText! });
    }

    // 4. Apply replacements in reverse order, i.e. from end to start
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

    const originalText = token.text;
    const tokenType = token.type;
    const symbolicName = vocabulary.getSymbolicName(tokenType); // e.g., "GT_FORWARD" or null

    // A. If token type matches a known Command/Keyword key directly (e.g. token is GT_FORWARD)
    if (symbolicName && targetDict.commandForward.has(symbolicName)) {
      return targetDict.commandForward.get(symbolicName)!;
    } else if (symbolicName && targetDict.keywordForward.has(symbolicName)) {
      return targetDict.keywordForward.get(symbolicName)!;
    }
    // B. Special handling for Colors or Identifiers that might be colors
    // Colors might be tokenized as specific tokens (GT_RED) or generic identifiers depending on grammar.
    // We check the text against the source color reverse map.
    else if (sourceDict.colorReverse.has(originalText.toLowerCase())) {
      const key = sourceDict.colorReverse.get(originalText.toLowerCase())!;
      if (targetDict.colorForward.has(key)) {
        return targetDict.colorForward.get(key)!;
      }
    }
    // C. Fallback: Check if the text matches a command in reverse map (for cases where Lexer might yield generic ID)
    else if (sourceDict.commandReverse.has(originalText.toLowerCase())) {
      const key = sourceDict.commandReverse.get(originalText.toLowerCase())!;
      return targetDict.commandForward.get(key) || originalText;
    }
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
        colorForwardCss: createColorMap(json.colors)
      };

      this.cache.set(lang, cache);
      return cache;
    } catch (e) {
      console.error(`[ReverseDictionary] Error loading ${lang}`, e);
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

/* The keywords used in the section 'colors' of the i18n json files must be
 * of the form <grammar prefix, here 'GT_'><CSS color>
 *
 * @param source
 * @returns
 */
function createColorMap(source: Record<string, string | string[]>) {
  const forward = new Map();
  for (const key of Object.keys(source)) {
    // Forward: Canonical Keyword ---> CSS color name
    const cssColor = key.slice(GEOTORTUE_GRAMMAR_PREFIX.length).toLowerCase();
    forward.set(key, cssColor);
  }
  return forward;
}

function createMapping(source: Record<string, string | string[]>) {
  const forward = new Map();
  const reverse = new Map();
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
