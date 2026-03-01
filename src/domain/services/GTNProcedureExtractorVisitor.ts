import { AbstractParseTreeVisitor } from 'antlr4ng';
import * as GTNParser from '@infrastructure/antlr/generated/GeoTortueParser';
import { GeoTortueParserVisitor } from '@infrastructure/antlr/generated/GeoTortueParserVisitor';
import type { IGTNProcedureRegistry } from '@domain/interfaces/IGTNProcedureRegistry';

export class GTNProcedureExtractorVisitor
  extends AbstractParseTreeVisitor<void>
  implements GeoTortueParserVisitor<void>
{
  constructor(private readonly registry: IGTNProcedureRegistry) {
    super();
  }

  protected defaultResult(): void {
    return undefined;
  }

  /**
   * Intercept procedure definitions, save them to the registry,
   * and deliberately DO NOT visit their children. This saves processing time.
   */
  public visitProcedureDef(ctx: GTNParser.ProcedureDefContext): void {
    const procDef = ctx.procedureDefinition();
    const name = procDef.GT_IDENTIFIER().getText();

    this.registry.register(name, procDef);
  }

  /**
   * Same for single-line functions.
   */
  public visitFunctionDef(ctx: GTNParser.FunctionDefContext): void {
    const name = ctx.GT_IDENTIFIER(0)!.getText();

    this.registry.registerFunction(name, ctx);
  }
}
