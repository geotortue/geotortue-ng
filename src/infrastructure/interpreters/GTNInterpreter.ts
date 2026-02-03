import { CharStream, CommonTokenStream } from 'antlr4ng';
import type { IGTNInterpreter } from '@domain/interfaces/IGTNInterpreter';
import type { IGTNTurtleRepository } from '@domain/interfaces/IGTNTurtleRepository';
import type { IGTNLanguageService } from '@domain/interfaces/IGTNLanguageService';
import { GTNExecutionVisitor } from '@domain/services/GTNExecutionVisitor';

import { GeoTortueLexer } from '@infrastructure/antlr/generated/GeoTortueLexer';
import { GeoTortueParser } from '@infrastructure/antlr/generated/GeoTortueParser';
import { TokenRefiner } from '@ui/editor/syntax/TokenRefiner';

export class GTNInterpreter implements IGTNInterpreter {
  private readonly tokenRefiner;

  constructor(
    private readonly turtleRepo: IGTNTurtleRepository,
    private readonly languageService: IGTNLanguageService
  ) {
    this.tokenRefiner = new TokenRefiner(languageService);
  }

  public async execute(script: string): Promise<void> {
    if (!script.trim()) {
      return;
    }

    // 1. Canonicalize (i.e. localized ---> internal)
    const canonicalScript = this.canonicalize(script);

    // 2. Setup ANTLR Pipeline
    const inputStream = CharStream.fromString(canonicalScript);
    const lexer = new GeoTortueLexer(inputStream);

    const tokenStream = new CommonTokenStream(lexer);
    tokenStream.fill(); // FORCE load all tokens immediately
    this.tokenRefiner.getRefinedTokens(() => tokenStream.getTokens());

    const parser = new GeoTortueParser(tokenStream);

    // 3. Error Handling
    parser.removeErrorListeners();
    parser.addErrorListener({
      syntaxError: (_recognizer, _offendingSymbol, line, charPositionInLine, msg, _e) => {
        console.error(`Parser Error at ${line}:${charPositionInLine} - ${msg}`);
        throw new Error(`Syntax Error line ${line}: ${msg}`);
      },
      reportAmbiguity: () => {},
      reportAttemptingFullContext: () => {},
      reportContextSensitivity: () => {}
    });

    // 4. Parse (Create Tree)
    const tree = parser.program();

    // 5. Execute
    const visitor = new GTNExecutionVisitor(this.turtleRepo);
    visitor.visit(tree);
  }

  /**
   * Translates localized keywords ('avance') to canonical keywords ('GT_FORWARD')
   */
  private canonicalize(script: string): string {
    // This is a naive implementation.
    // In a real compiler, the Lexer should handle this or we use TokenStream rewriting.
    // But for MVP, string replacement works if keywords are unique enough.

    const processed = script.toUpperCase(); // Grammar expects UPPERCASE currently

    // We iterate over all known commands in the current language
    // and replace them with "canonical" equivalents.
    // Note: This relies on the LanguageService exposing the mapping.
    // Since getInternalKeyword exists:

    // Better approach for MVP:
    // Split by non-word characters, try to translate each word, join back.
    // This preserves numbers and structure.

    return processed.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]+/g, (word) => {
      // [A-ZÀ-ÖØ-Þ]
      const canonicalKeyword = this.languageService.getInternalKeyword(word);
      return canonicalKeyword ? canonicalKeyword.toUpperCase() : word;
    });
  }
}
