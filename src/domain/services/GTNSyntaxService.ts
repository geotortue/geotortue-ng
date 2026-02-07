import { CharStream, CommonTokenStream } from 'antlr4ng';

import { GrammarReflector } from '@infrastructure/antlr/GrammarReflector';
import { GeoTortueParser } from '@infrastructure/antlr/generated/GeoTortueParser';
import { GeoTortueLexer } from '@infrastructure/antlr/generated/GeoTortueLexer';
import { GTNErrorListener, type GTNError } from '@infrastructure/antlr/GTNErrorListener';

export class GTNSyntaxService {
  private readonly reflector: GrammarReflector;
  private cachedStyleMap: Map<number, string> | null = null;

  constructor() {
    this.reflector = new GrammarReflector(GeoTortueParser);
  }

  /**
   * Validates the code and returns a list of friendly errors.
   * Returns an empty array if the code is valid.
   */
  public validate(code: string): GTNError[] {
    const chars = CharStream.fromString(code);
    const lexer = new GeoTortueLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new GeoTortueParser(tokens);

    // 1. Remove default listeners (stops console.error noise)
    lexer.removeErrorListeners();
    parser.removeErrorListeners();

    // 2. Attach our custom friendly listener
    const errorListener = new GTNErrorListener();
    parser.addErrorListener(errorListener);

    // 3. Parse (Walks the tree to find errors)
    parser.program();

    return errorListener.errors;
  }

  /**
   * Returns a complete map of TokenID -> CSS Class Suffix
   * e.g. 17 -> 'command' (so the editor uses .cm-gt-command)
   *
   * Note. Must be updated after any add or suppression of rules in g4 grammar parser.
   */
  public getTokenStyleMap(): ReadonlyMap<number, string> {
    if (this.cachedStyleMap) {
      return this.cachedStyleMap;
    }

    const entries: [number, string][] = [];

    // Extract from Structure (The ATN Traversal)
    entries.push(...this.mapRuleToStyle(GeoTortueParser.RULE_primitive, 'command'));
    entries.push(...this.mapRuleToStyle(GeoTortueParser.RULE_structure, 'keyword'));
    entries.push(...this.mapRuleToStyle(GeoTortueParser.RULE_expr, 'operator'));

    // Keywords (Map specific sub-rules instead of the parent 'structure')
    // Inspect your generated Parser to see the rule names. usually:
    entries.push(...this.mapRuleToStyle(GeoTortueParser.RULE_repeatBlock, 'keyword')); // GT_REP
    entries.push(...this.mapRuleToStyle(GeoTortueParser.RULE_whileBlock, 'keyword')); // GT_WHILE
    entries.push(...this.mapRuleToStyle(GeoTortueParser.RULE_ifBlock, 'keyword')); // GT_IF, GT_THEN, GT_ELSE
    entries.push(...this.mapRuleToStyle(GeoTortueParser.RULE_forEachBlock, 'keyword')); // GT_FOR_EACH, GT_FROM, GT_TO
    entries.push(...this.mapRuleToStyle(GeoTortueParser.RULE_functionDef, 'keyword')); // GT_FUN

    // Extract from Lexical Definition (Manual mapping)
    entries.push(this.addManualToken(GeoTortueLexer.GT_NUMBER, 'number'));
    entries.push(this.addManualToken(GeoTortueLexer.GT_STRING, 'string'));
    entries.push(this.addManualToken(GeoTortueLexer.GT_WORD, 'string'));
    entries.push(this.addManualToken(GeoTortueLexer.GT_ID, 'variable'));

    // Comments are special: usually hidden from parser channel, so we map them manually
    entries.push(this.addManualToken(GeoTortueLexer.GT_COMMENT, 'comment'));
    entries.push(this.addManualToken(GeoTortueLexer.GT_BLOCK_COMMENT, 'comment'));

    const map = new Map<number, string>(entries);

    this.cachedStyleMap = map;
    return map;
  }

  private mapRuleToStyle(ruleIndex: number, style: string): [number, string][] {
    const ids = this.reflector.getTokenIdsForRule(ruleIndex);

    return [...ids]
      .filter((id) => id > 0)
      .reduce(
        (acc, id) => {
          acc.push([id, style]);
          return acc;
        },
        [] as [number, string][]
      );
  }

  private addManualToken(tokenId: number, style: string): [number, string] {
    return [tokenId, style];
  }
}
