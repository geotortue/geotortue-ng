import { CharStream, CommonTokenStream, type ParserRuleContext, type ParseTree } from 'antlr4ng';

import { GeoTortueParser } from '@infrastructure/antlr/generated/GeoTortueParser';
import { GeoTortueLexer } from '@infrastructure/antlr/generated/GeoTortueLexer';

import { GrammarReflector } from '@infrastructure/antlr/GrammarReflector';
import { GTNErrorListener, type GTNError } from '@infrastructure/antlr/GTNErrorListener';
import type { IGTNProcedureRegistry } from '@domain/interfaces/IGTNProcedureRegistry';
import { GTNContainer } from '@infrastructure/di/GTNContainer';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';
import { GTNProcedureExtractorVisitor } from './GTNProcedureExtractorVisitor';
import { GTNExpressionAdapter } from '@infrastructure/math/GTNExpressionAdapter';
import type { IGTNMathExpressionValidator } from '@domain/interfaces/IGTNMathExpressionValidator';
import type { IGTNLanguageService } from '@domain/interfaces/IGTNLanguageService';

export class GTNSyntaxService {
  private readonly langService: IGTNLanguageService;
  private readonly procedureRegistry: IGTNProcedureRegistry;
  private readonly reflector: GrammarReflector;
  private readonly expressionAdapter: GTNExpressionAdapter;
  private readonly mathExpressionValidator: IGTNMathExpressionValidator;
  private cachedStyleMap: Map<number, string> | null = null;

  constructor() {
    const container = GTNContainer.getInstance();
    this.langService = container.resolve<IGTNLanguageService>(GTN_TYPES.LanguageService);
    this.procedureRegistry = container.resolve<IGTNProcedureRegistry>(GTN_TYPES.ProcedureRegistry);
    this.reflector = new GrammarReflector(GeoTortueParser);
    this.expressionAdapter = container.resolve<GTNExpressionAdapter>(GTN_TYPES.ExpressionAdapter);
    this.mathExpressionValidator = container.resolve<IGTNMathExpressionValidator>(
      GTN_TYPES.MathExpressionValidator
    );
  }

  /**
   * Instantiates the ANTLR Lexer and Parser for a given script.
   * Handles the conversion from localized DSL to Canonical tokens.
   */
  private createParser(rawCode: string): { lexer: GeoTortueLexer; parser: GeoTortueParser } {
    // Convert localized keywords (pour/fin, to/end) into canonical tokens (GT_PROCEDURE_START)
    const canonicalCode = this.langService.canonicalizeScriptSync(rawCode);
    const charStream = CharStream.fromString(canonicalCode);
    const lexer = new GeoTortueLexer(charStream);
    lexer.removeErrorListeners();
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new GeoTortueParser(tokenStream);
    parser.removeErrorListeners();

    const errorListener = new GTNErrorListener();
    parser.addErrorListener(errorListener);

    return { lexer, parser };
  }

  /**
   * Parses the procedures code purely to extract definitions.
   * Returns an array of procedure names for the editor to use.
   */
  public extractProcedures(proceduresCode: string): string[] {
    // 1. Clear the old memory
    // this.procedureRegistry.clear();
    if (!proceduresCode?.trim()) {
      return [];
    }

    try {
      // 2. Run the Lexer and Parser
      // If you don't have a helper, instantiate your GeoTortueLexer and GeoTortueParser here
      const { parser } = this.createParser(proceduresCode);

      // 3. Generate the AST for the procedures script
      const tree = parser.program();

      // 4. Run the fast extractor visitor
      const extractor = new GTNProcedureExtractorVisitor(this.procedureRegistry);
      extractor.visit(tree);
    } catch (e) {
      // If still loading, ignore extraction failures
      return [];
    }

    // 5. Return the clean list of names
    return this.procedureRegistry.getAllNames();
  }

  /**
   * Returns the list of currently valid user procedure names.
   */
  public getExtractedProcedures(): string[] {
    return this.procedureRegistry.getAllNames();
  }

  /**
   * Validates the code and returns a list of friendly errors.
   * Returns an empty array if the code is valid.
   */
  public validate(code: string): GTNError[] {
    const canonicalCode = this.langService.canonicalizeScriptSync(code);

    const chars = CharStream.fromString(canonicalCode);
    const lexer = new GeoTortueLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new GeoTortueParser(tokens);

    // 1. Remove default listeners (stops console.error noise)
    lexer.removeErrorListeners();
    parser.removeErrorListeners();

    // 2. Attach our custom friendly listener
    const errorListener = new GTNErrorListener();
    lexer.addErrorListener(errorListener); // Catch "Unknown character" errors
    parser.addErrorListener(errorListener); // Catch "Unexpected token" errors

    // 3. Parse (Walks the tree to find errors)
    const tree = parser.program();

    if (errorListener.errors.length > 0) {
      return errorListener.errors;
    }

    return [...errorListener.errors, ...this.validateMathExpressions(tree)];
  }

  /**
   * Returns a complete map of TokenID -> CSS Class Suffix
   * e.g. 17 -> 'command' (so the editor uses .cm-gt-command)
   *
   * Note. Must be updated after any add or suppression of **rules** in g4 grammar parser.
   */
  public getTokenStyleMap(): ReadonlyMap<number, string> {
    if (this.cachedStyleMap) {
      return this.cachedStyleMap;
    }

    const entries: [number, string][] = [];

    // Extract from Structure (The ATN Traversal)
    entries.push(
      ...this.mapRuleToStyle(GeoTortueParser.RULE_fixedArityZeroCommandStatement, 'command')
    );
    entries.push(
      ...this.mapRuleToStyle(GeoTortueParser.RULE_fixedArityOneCommandStatement, 'command')
    );
    entries.push(
      ...this.mapRuleToStyle(GeoTortueParser.RULE_fixedArityTwoCommandStatement, 'command')
    );
    entries.push(
      ...this.mapRuleToStyle(GeoTortueParser.RULE_variableArityMarkerCommandStatement, 'command')
    );
    entries.push(...this.mapRuleToStyle(GeoTortueParser.RULE_structureStatement, 'keyword'));
    entries.push(...this.mapRuleToStyle(GeoTortueParser.RULE_expression, 'operator'));

    // Keywords (Map specific sub-rules instead of the parent 'structure')
    // Inspect your generated Parser to see the rule names. usually:
    entries.push(...this.mapRuleToStyle(GeoTortueParser.RULE_repeatBlock, 'keyword')); // GT_REP
    entries.push(...this.mapRuleToStyle(GeoTortueParser.RULE_whileBlock, 'keyword')); // GT_WHILE
    entries.push(...this.mapRuleToStyle(GeoTortueParser.RULE_ifBlock, 'keyword')); // GT_IF, GT_THEN, GT_ELSE
    entries.push(...this.mapRuleToStyle(GeoTortueParser.RULE_forEachBlock, 'keyword')); // GT_FOR_EACH, GT_FROM, GT_TO
    entries.push(...this.mapRuleToStyle(GeoTortueParser.RULE_functionDef, 'keyword')); // GT_FUNCTION_DEF

    // Extract from Lexical Definition (Manual mapping)
    entries.push(this.addManualToken(GeoTortueLexer.GT_INTEGER_LITERAL, 'number'));
    entries.push(this.addManualToken(GeoTortueLexer.GT_FLOATING_POINT_LITERAL, 'number'));
    entries.push(this.addManualToken(GeoTortueLexer.GT_STRING_LITERAL, 'string'));
    entries.push(this.addManualToken(GeoTortueLexer.GT_WORD, 'string'));
    entries.push(this.addManualToken(GeoTortueLexer.GT_IDENTIFIER, 'variable'));

    // Comments are special: usually hidden from parser channel, so we map them manually
    entries.push(this.addManualToken(GeoTortueLexer.GT_LINE_COMMENT_HASH, 'comment'));
    entries.push(this.addManualToken(GeoTortueLexer.GT_LINE_COMMENT_SLASH, 'comment'));
    entries.push(this.addManualToken(GeoTortueLexer.GT_BLOCK_COMMENT, 'comment'));

    const map = new Map<number, string>(entries);

    this.cachedStyleMap = map;
    return map;
  }

  private validateMathExpressions(tree: ParseTree): GTNError[] {
    const errors: GTNError[] = [];

    for (const ctx of this.collectTopLevelRightExpressions(tree)) {
      const rawExpr = ctx.getText();
      const normalizedExpr = this.expressionAdapter.normalize(rawExpr);

      try {
        this.mathExpressionValidator.validate(normalizedExpr);
      } catch (e) {
        errors.push({
          line: ctx.start?.line ?? 0,
          column: ctx.start?.column ?? 0,
          message: this.langService.translate('syntax.unexpected_token', { tokenText: rawExpr }),
          technicalDetails: e instanceof Error ? e.message : String(e)
        });
      }
    }

    return errors;
  }

  private collectTopLevelRightExpressions(tree: ParseTree): ParserRuleContext[] {
    const result: ParserRuleContext[] = [];

    const asContext = (node: ParseTree | null): ParserRuleContext | null => {
      if (typeof node === 'object' && node !== null && 'ruleIndex' in node) {
        return node as ParserRuleContext;
      }
      return null;
    };

    const walk = (node: ParseTree) => {
      const context = asContext(node);

      if (
        context &&
        context.ruleIndex === GeoTortueParser.RULE_rightExpression &&
        asContext(context.parent)?.ruleIndex !== GeoTortueParser.RULE_rightExpression
      ) {
        result.push(context);
      }

      const childCount = node.getChildCount?.() ?? 0;
      for (let i = 0; i < childCount; i++) {
        const child = node.getChild(i);
        if (child) {
          walk(child);
        }
      }
    };

    walk(tree);
    return result;
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
