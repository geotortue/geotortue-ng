import { CommonTokenStream, Token } from 'antlr4ng';

import { GeoTortueLexer } from '@infrastructure/antlr/generated/GeoTortueLexer';

import type { IGTNLanguageService } from '@domain/interfaces/IGTNLanguageService';

export class TokenRefiner {
  constructor(private readonly languageService: IGTNLanguageService) {}

  public getRefinedTokens(retrieveTokens: () => Token[]): Token[] {
    const tokens = retrieveTokens();
    for (const token of tokens) {
      // Only check generic words to improve performance
      if (this.isGenericWord(token.type)) {
        if (token.text) {
          // Ask the dictionary: "Is 'pour_chaque' a keyword?"
          const canonicalId = this.languageService.getCanonicalId(token.text);

          // If yes (e.g. returns GT_FOR_EACH ID), update the token in-place
          if (canonicalId !== undefined) {
            token.type = canonicalId;
          }
        }
      }
    }
    return tokens;
  }

  public getRefinedTokens1(lexer: GeoTortueLexer): Token[] {
    // 1. Create the stream
    const tokenStream = new CommonTokenStream(lexer);

    // 2. FORCE load all tokens immediately
    tokenStream.fill();
    const tokens = tokenStream.getTokens();

    // 3. REFINE tokens (The "Missing Link")
    // Loop through all tokens and update their Type if they match a known keyword
    for (const token of tokens) {
      // Only check generic words to improve performance
      if (this.isGenericWord(token.type)) {
        if (token.text) {
          // Ask the dictionary: "Is 'pour_chaque' a keyword?"
          const canonicalId = this.languageService.getCanonicalId(token.text);

          // If yes (e.g. returns GT_FOR_EACH ID), update the token in-place
          if (canonicalId !== undefined) {
            token.type = canonicalId;
          }
        }
      }
    }

    return tokens;
  }

  /**
   * Consumes a Lexer, runs it, and returns a list of tokens where
   * localized words (e.g. "avance" in french) are promoted to their Canonical IDs (e.g. here GT_FORWARD).
   */
  public getRefinedTokens0(lexer: GeoTortueLexer): Token[] {
    // 1. Get raw tokens (mostly GT_WORD / GT_ID)
    const rawTokens = lexer.getAllTokens();

    // 2. Iterate and mutate type if a semantic match is found
    for (const token of rawTokens) {
      if (this.isGenericWord(token.type)) {
        if (token.text) {
          // 3. Ask the Reverse Dictionary
          const canonicalId = this.languageService.getCanonicalId(token.text);

          if (canonicalId !== undefined) {
            // 4. Upgrade the token type
            token.type = canonicalId;
          }
        }
      }
    }

    return rawTokens;
  }

  private isGenericWord(type: number): boolean {
    return type === GeoTortueLexer.GT_WORD || type === GeoTortueLexer.GT_ID;
  }
}
