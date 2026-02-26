import { AbstractParseTreeVisitor } from 'antlr4ng';
import type { ParseTree } from 'antlr4ng';

import { GeoTortueLexer } from '@infrastructure/antlr/generated/GeoTortueLexer';
import * as GTNParser from '@infrastructure/antlr/generated/GeoTortueParser';
import { GeoTortueParserVisitor } from '@infrastructure/antlr/generated/GeoTortueParserVisitor';

import type { IGTNLogger } from '@app/interfaces/IGTNLogger';
import { MathEvaluatorMode, type IGTNMathEvaluator } from '@domain/interfaces/IGTNMathEvaluator';
import type { IGTNTurtleRepository } from '@domain/interfaces/IGTNTurtleRepository';
import {
  GTNQuaternion,
  GTNVector3,
  isCssColor,
  isCssHexColor,
  toCssColor
} from '@domain/value-objects';
import { toDegree, toMs } from '@domain/types';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';
import { GTNContainer } from '@infrastructure/di/GTNContainer';
import type { IGTNLanguageService } from '@domain/interfaces/IGTNLanguageService';

const DEFAULT_STEP_DELAY = toMs(50); // 50ms per step = 20 steps per second

export class GTNExecutionVisitor
  extends AbstractParseTreeVisitor<Promise<any>>
  implements GeoTortueParserVisitor<Promise<any>>
{
  private readonly stepDelayMs = DEFAULT_STEP_DELAY;

  private readonly mathEvaluator: IGTNMathEvaluator;
  private readonly languageService: IGTNLanguageService;
  private readonly logger: IGTNLogger;

  private returnSignal: { value: unknown } | null = null;
  private readonly userFunctions: Map<string, GTNParser.FunctionDefContext> = new Map();
  private scopes: Record<string, any>[] = [{}];
  private readonly memory: Map<string, any> = new Map();
  private readonly userProcedures: Map<string, GTNParser.ProcedureDefinitionContext> = new Map();

  constructor(private readonly turtleRepo: IGTNTurtleRepository) {
    super();
    const container = GTNContainer.getInstance();
    this.mathEvaluator = container.resolve<IGTNMathEvaluator>(GTN_TYPES.MathEvaluator);
    this.languageService = container.resolve<IGTNLanguageService>(GTN_TYPES.LanguageService);
    this.logger = container.resolve<IGTNLogger>(GTN_TYPES.Logger);
  }

  protected defaultResult(): Promise<any> {
    return Promise.resolve(null);
  }

  // --- Helpers for Generator Traversal ---

  /**
   * Helper to execute a child node which might return a generator (statement)
   * or a value (expression).
   */
  private async visitChild(node: ParseTree | null) {
    if (!node) {
      return;
    }

    return await node.accept(this);
  }

  // --- Program Structure ---

  // Helper to wait
  private async tick(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, this.stepDelayMs));
  }

  /**
   * Core dispatcher override.
   * This ensures every time 'accept' is called, we properly await the result.
   */
  public override async visit(tree: ParseTree): Promise<any> {
    return await tree.accept(this);
  }

  /**
   * Ensure children are visited sequentially and awaited.
   */
  public override async visitChildren(node: ParseTree): Promise<any> {
    let result = await this.defaultResult();
    const n = node.getChildCount();
    for (let i = 0; i < n; i++) {
      const child = node.getChild(i);
      if (!child) {
        continue;
      }

      const childResult = this.visitChild(child); //await child.accept(this);
      result = await this.aggregateResult(result, childResult);
    }
    return result;
  }

  /** 1. Entry point
   * {@link GeoTortueParserVisitor#visitProgram}
   */
  public async visitProgram(ctx: GTNParser.ProgramContext): Promise<void> {
    if (!ctx.children) {
      return;
    }

    for (const child of ctx.children) {
      await (child.accept(this) as unknown as Promise<void>);
    }
  }

  /**
   * {@link GeoTortueParserVisitor#visitStatement}
   */
  public async visitStatement(ctx: GTNParser.StatementContext): Promise<void> {
    if (this.returnSignal) {
      return;
    }

    // A statement usually has 1 child (Command or Structure)
    for (const child of ctx.children) {
      await (child.accept(this) as unknown as Promise<void>);
    }
  }

  /**
   * {@link GeoTortueParserVisitor#visitCommandStatement}
   */
  public async visitCommandStatement(ctx: GTNParser.CommandStatementContext): Promise<void> {
    await this.visitChildren(ctx);
  }

  /**
   * {@link GeoTortueParserVisitor#visitCommandBlock}
   */
  public async visitCommandBlock(ctx: GTNParser.CommandBlockContext): Promise<void> {
    // Skip brackets, visit statements
    for (const statement of ctx.statement()) {
      if (this.returnSignal) {
        break;
      }

      await statement.accept(this);
    }
  }

  // --- Structures (Control Flow) ---

  /**
   * {@link GeoTortueParserVisitor#visitRepeatBlock}
   */
  public async visitRepeatBlock(ctx: GTNParser.RepeatBlockContext): Promise<void> {
    const count = Math.floor(this.evaluateNumber(ctx.expression()));
    const block = ctx.commandBlock();
    if (!block) {
      return;
    }

    for (let i = 0; i < count; i++) {
      if (this.returnSignal) {
        break;
      }

      console.debug(`Repeat loop iteration: ${i + 1}/${count}`);
      await this.visitCommandBlock(block);
    }
  }

  /**
   * {@link GeoTortueParserVisitor#visitIfBlock}
   */
  public async visitIfBlock(ctx: GTNParser.IfBlockContext): Promise<void> {
    const condition = this.evaluateBoolean(ctx.expression());
    const blocks = ctx.commandBlock();
    if (condition && blocks[0]) {
      await this.visitCommandBlock(blocks[0]);
      return;
    }

    if (!condition && blocks[1]) {
      await this.visitCommandBlock(blocks[1]);
    }
  }

  /**
   * {@link GeoTortueParserVisitor#visitWhileBlock}
   */
  public async visitWhileBlock(ctx: GTNParser.WhileBlockContext): Promise<void> {
    while (this.evaluateBoolean(ctx.expression())) {
      if (this.returnSignal) {
        break;
      }

      await this.visitCommandBlock(ctx.commandBlock());
    }
  }

  /**
   * {@link GeoTortueParserVisitor#visitForEachBlock}
   */
  public async visitForEachBlock(ctx: GTNParser.ForEachBlockContext): Promise<void> {
    const loopVar = ctx.GT_IDENTIFIER()?.getText();
    if (!loopVar) {
      return;
    }

    if (ctx.GT_IN_LIST()) {
      await this.doVisitForEachBlockInCollection(ctx, loopVar);
    } else {
      await this.doVisitForEachBlockInRange(ctx, loopVar);
    }
  }

  private async doVisitForEachBlockInCollection(
    ctx: GTNParser.ForEachBlockContext,
    loopVar: string
  ) {
    const list = this.evaluate(ctx.expression(0)!);
    if (!Array.isArray(list)) {
      return;
    }

    for (const item of list) {
      if (this.returnSignal) {
        break;
      }

      this.currentScope[loopVar] = item;
      await this.visitCommandBlock(ctx.commandBlock());
    }
  }

  private async doVisitForEachBlockInRange(ctx: GTNParser.ForEachBlockContext, loopVar: string) {
    const from = this.evaluateNumber(ctx.expression(0)!);
    const to = this.evaluateNumber(ctx.expression(1)!);

    // Handle both ascending and descending ranges
    const step = from <= to ? 1 : -1;

    for (let i = from; step > 0 ? i <= to : i >= to; i += step) {
      if (this.returnSignal) {
        break;
      }

      this.currentScope[loopVar] = i;
      await this.visitCommandBlock(ctx.commandBlock());
    }
  }

  /**
   * {@link GeoTortueParserVisitor#visitFunctionDef}
   */
  public async visitFunctionDef(ctx: GTNParser.FunctionDefContext): Promise<void> {
    // Defining a function is instantaneous, no yield needed.
    const name = ctx.GT_IDENTIFIER(0)!.getText();
    this.userFunctions.set(name, ctx);
  }

  /**
   * {@link GeoTortueParserVisitor#visitProcedureDef}
   */
  public async visitProcedureDef(ctx: GTNParser.ProcedureDefContext): Promise<void> {
    const procDef = ctx.procedureDefinition();
    const name = procDef.GT_IDENTIFIER().getText();
    this.userProcedures.set(name, procDef);
  }

  /**
   * {@link GeoTortueParserVisitor#visitProcedureCallStatement}
   */
  public async visitProcedureCallStatement(
    ctx: GTNParser.ProcedureCallStatementContext
  ): Promise<any> {
    const name = ctx.GT_IDENTIFIER().getText();
    const args = ctx.commandArgument().map((arg) => this.evaluate(arg.expression()));
    const localScope: Record<string, unknown> = {};

    // 1. Try Multi-line Procedure (pour ... fin)
    const procDef = this.userProcedures.get(name);
    if (procDef) {
      const params = procDef.procedureParameter();
      params.forEach((param, index) => {
        if (index < args.length) {
          // In GéoTortue, parameters usually have a ':' prefix, but the Lexer might absorb it
          // depending on how variable matching is implemented. We use getText() strictly.
          const paramName = param.GT_IDENTIFIER().getText();
          localScope[paramName] = args[index];
        }
      });

      this.scopes.push(localScope);

      // Execute the procedure body
      await this.visit(procDef.procedureBody());

      this.scopes.pop();

      // Handle 'retourne' (return) signal if triggered inside the procedure
      let result = null;
      if (this.returnSignal) {
        result = this.returnSignal.value;
        this.returnSignal = null; // Consume the signal so it doesn't break the outer flow
      }

      await this.tick();
      return result;
    }

    // 2. Try Single-line Function (function f(x) = expr)
    const funcDef = this.userFunctions.get(name);
    if (funcDef) {
      const paramIds = funcDef.GT_IDENTIFIER().slice(1);
      paramIds.forEach((paramId, index) => {
        if (index < args.length) {
          localScope[paramId.getText()] = args[index];
        }
      });

      this.scopes.push(localScope);
      const result = this.evaluate(funcDef.expression());
      this.scopes.pop();

      await this.tick();
      return result;
    }

    this.logger.warn(`Unknown procedure or function: ${name}`);
    return null;
  }

  //   /**
  //    * {@link GeoTortueParserVisitor#visitProcedureCallStatement}
  //    */
  //   public async visitFunctionCallStatement(
  //     ctx: GTNParser.ProcedureCallStatementContext
  //   ): Promise<any> {
  //     const name = ctx.GT_IDENTIFIER().getText();
  //     const funcDef = this.userFunctions.get(name);
  //
  //     if (!funcDef) {
  //       this.logger.warn(`Unknown procedure: ${name}`);
  //       return;
  //     }
  //
  //     const args = ctx.commandArgument().map((arg) => this.evaluate(arg.expression()));
  //     const paramIds = funcDef.GT_IDENTIFIER().slice(1); // First ID is func name
  //     const localScope: Record<string, unknown> = {};
  //
  //     paramIds.forEach((paramId, index) => {
  //       if (index < args.length) {
  //         localScope[paramId.getText()] = this.evaluate(args[index]!);
  //       }
  //     });
  //
  //     this.scopes.push(localScope);
  //
  //     // Evaluate function body (which might contain statements)
  //     // Note: If function is purely expression-based in grammar, this might need check.
  //     // But usually procedure calls execute a body (expression or block).
  //     // Assuming funcDef.expression() is the body here based on previous code?
  //     // Wait, previous code was: `this.evaluate(funcDef.expression())`.
  //     // If procedures only return values, they are synchronous.
  //     // If procedures do drawing, they must be visited.
  //
  //     // CHECK: Your grammar says: functionDef : ... = expression
  //     // This implies functions are pure calculations in this specific grammar version?
  //     // If yes, we don't synch. If you change grammar to support Blocks in functions, use synch..
  //
  //     // Preserving logic: It seems functions are expressions here.
  //     const result = this.evaluate(funcDef.expression());
  //
  //     this.scopes.pop();
  //     // ProcedureCall is a command in the grammar, so we ignore result,
  //     // but if it was called as expression, evaluate() handles it.
  //     await this.tick();
  //     return result;
  //   }

  // --- Primitive Commands (Turtle Actions) ---

  private extractOneArgAsExpr(ctx: { commandArgument: () => GTNParser.CommandArgumentContext }) {
    // const args = [ctx.commandArgument?.() ?? null]
    // const arg0 = args[0] ?? null;
    const arg = ctx.commandArgument?.() ?? null;
    const expr0 = arg?.expression() ?? null;
    return expr0;
  }

  private extractOneArgAsNumber(ctx: { commandArgument: () => GTNParser.CommandArgumentContext }) {
    const expr0 = this.extractOneArgAsExpr(ctx);
    const value = this.evaluateNumber(expr0);
    return value;
  }

  private extractVariadicArgAsNumbers(ctx: {
    commandArgument: () => GTNParser.CommandArgumentContext[];
  }) {
    const args = ctx.commandArgument();
    return args.map((a) => this.evaluateNumber(a.expression()));
  }

  /**
   * {@link GeoTortueParserVisitor#visitMoveForward}
   */
  public async visitMoveForward(ctx: GTNParser.MoveForwardContext): Promise<void> {
    const distance = this.extractOneArgAsNumber(ctx);
    this.turtleRepo.getAll().forEach((t) => t.forward(distance));
    await this.tick();
  }

  /**
   * {@link GeoTortueParserVisitor#visitMoveBackward}
   */
  public async visitMoveBackward(ctx: GTNParser.MoveBackwardContext): Promise<void> {
    const distance = this.extractOneArgAsNumber(ctx);
    this.turtleRepo.getAll().forEach((t) => t.backward(distance));
    await this.tick();
  }

  /**
   * {@link GeoTortueParserVisitor#visitTurnRight}
   */
  public async visitTurnRight(ctx: GTNParser.TurnRightContext): Promise<void> {
    const angle = toDegree(this.extractOneArgAsNumber(ctx));
    this.turtleRepo.getAll().forEach((t) => t.right(angle));
    await this.tick();
  }

  /**
   * {@link GeoTortueParserVisitor#visitTurnLeft}
   */
  public async visitTurnLeft(ctx: GTNParser.TurnLeftContext): Promise<void> {
    const angle = toDegree(this.extractOneArgAsNumber(ctx));
    this.turtleRepo.getAll().forEach((t) => t.left(angle));
    await this.tick();
  }

  // --- Pen & Visibility ---

  /**
   * {@link GeoTortueParserVisitor#visitPenUp}
   */
  public async visitPenUp(ctx: GTNParser.PenUpContext): Promise<void> {
    this.turtleRepo.getAll().forEach((t) => t.penUp());
    await this.tick();
  }

  /**
   * {@link GeoTortueParserVisitor#visitPenDown}
   */
  public async visitPenDown(ctx: GTNParser.PenDownContext): Promise<void> {
    this.turtleRepo.getAll().forEach((t) => t.penDown());
    await this.tick();
  }

  /*
   * Only known named css colors and hex colors are allowed.
   * FUTURE deal with number as hexadecimal number.
   * See [GéoTortue - crayon](http://geotortue.free.fr/index.php?page=aide_index#crayon)
   *
   * Note: For RGB and C°, see Palette
   *
   * Un autre soucis ici est de distinguer entre les variables et les litéraux de couleur
   * En effet le DSL de GéoTortue ne fait pas précéder du préfixe ':' le nom d'une variable
   * lorsqu'il lui y est fait référence.
   * Il faut donc filtrer les noms de couleur afin de les différencier de noms de variable.
   * En clair les noms de couleur deviennent des mots réservés ne pouvant servir à nommer une variable
   * Ce qui soulève le point de la traduction des scripts, les noms de couleur changeant alors.
   * Proposition : réintroduire le préfix ':' pour indiquer un nom de variable.
   * Il ne serait requis que pour lever une ambiquité. On aurait alors trois cas de figure :
   * - mot entre guillemets : toujours un nom de couleur
   * - mot précéder d'un ":" et sans guillemets: toujours une variable
   * - mot sans guillemets ni préfix : si c'est un nom de couleur alors le traiter comme tel.
   *   sinon le traiter comme nom de variable
   */
  /**
   * {@link GeoTortueParserVisitor#visitPenColor}
   */
  public async visitPenColor(ctx: GTNParser.PenColorContext): Promise<void> {
    const expression = this.extractOneArgAsExpr(ctx);
    const rawColor = this.resolveRawColor(expression);
    const cssColor = this.resolveCssColor(rawColor);
    if (isCssColor(cssColor)) {
      this.turtleRepo.getAll().forEach((t) => t.setPenColor(toCssColor(cssColor)));
    }
    await this.tick();
  }

  private resolveRawColor(expression: GTNParser.ExpressionContext | null): string {
    if (!expression) {
      return '';
    }

    const text = expression.getText();

    // ---------------------------------------------------------
    // STRATEGY 1: Direct String Literal (Fast Path)
    // ---------------------------------------------------------
    // If the user typed: `crayon "rouge"` (`expression` starts with GT_STRING_LITERAL)
    // We skip the math evaluator entirely to avoid parsing issues with quotes.
    if (expression.start?.type === GeoTortueLexer.GT_STRING_LITERAL) {
      return text;
    }

    // ---------------------------------------------------------
    // STRATEGY 2: Evaluate Expression (Variable or Math)
    // ---------------------------------------------------------
    try {
      // Try to evaluate as a variable or formula
      // Example: crayon myColorVar  OR  crayon rgb(255,0,0)
      const result = this.mathEvaluator.evaluate(
        text,
        this.getFlattenedScope(),
        MathEvaluatorMode.error
      );
      return String(result);
    } catch (e: any) {
      // ---------------------------------------------------------
      // STRATEGY 3: Loose Syntax Fallback (Auto-Quote)
      // ---------------------------------------------------------
      // If evaluation failed because `ROUGE` is undefined,
      // AND the text looks like a valid identifier, treat it as a string literal.
      // This allows: `crayon rouge` (without quotes around `rouge`) to work.
      const msg = e.message || '';
      // Check if error is "Undefined symbol" and text is a simple word
      if (msg.includes('Undefined symbol') || msg.includes('Undefined variable')) {
        this.logger.warn(`[Color] Variable '${text}' not found. Treating as color literal.`);
        return text;
      }

      this.logger.error(`[Math] Evaluation error: ${text}`, e);
      return '';
    }
  }

  private resolveCssColor(rawColor: string): string {
    const color = rawColor.replace(/['"]/g, '').toLowerCase();
    const cssColor = isCssHexColor(color)
      ? color
      : this.languageService.getCssColor(color) || color;
    return cssColor;
  }

  /**
   * {@link GeoTortueParserVisitor#visitPenThickness}
   */
  public async visitPenThickness(ctx: GTNParser.PenThicknessContext): Promise<void> {
    const size = this.extractOneArgAsNumber(ctx);
    if (!isNaN(size)) {
      this.turtleRepo.getAll().forEach((t) => t.setPenSize(size));
    }
    await this.tick();
  }

  // --- System Commands ---

  /** Remove all drawings but keep the turtles as it
   *
   * @see GeoTortueParserVisitor.visitClearGraphics
   * @param ctx the parse tree
   * @return the visitor result
   */
  public async visitClearGraphics(_ctx: GTNParser.ClearGraphicsContext): Promise<void> {
    this.turtleRepo.clearAllLines();
    await this.tick();
  }

  /** Remove all drawings and **reset** all the turtles.
   *
   * @see GeoTortueParserVisitor.visitReset
   * @param ctx the parse tree
   * @return the visitor result
   */
  public async visitReset(_ctx: GTNParser.ResetContext): Promise<void> {
    this.turtleRepo.reset();
    this.scopes = [{}];
    this.userFunctions.clear();
    await this.tick();
  }

  public async visitHideTurtle(_ctx: GTNParser.HideTurtleContext): Promise<void> {
    this.turtleRepo.getAll().forEach((t) => (t.isVisible = false));
    await this.tick();
  }

  public async visitShowTurtle(_ctx: GTNParser.ShowTurtleContext): Promise<void> {
    this.turtleRepo.getAll().forEach((t) => (t.isVisible = true));
    await this.tick();
  }

  // --- Assignments & Variables ---

  public async visitVarAssignment(ctx: GTNParser.VarAssignmentContext): Promise<void> {
    const assignmentCtx = ctx.assignExpression();
    const name = assignmentCtx.lValue().getText();
    const value = this.evaluate(assignmentCtx.expression());
    this.currentScope[name] = value;
    await this.tick();
  }

  // --- Expressions (Math & Logic) ---

  //  / / Expressions remain SYNCHRONOUS. They return values, not Promises.
  //   public visitAtomExpr = (ctx: GTNParser.AtomExprContext) => this.evaluate(ctx);
  //   public visitParenExpr = (ctx: GTNParser.ParenExprContext) => this.evaluate(ctx);
  //   public visitUnaryMinusExpr = (ctx: GTNParser.UnaryMinusExprContext) => this.evaluate(ctx);
  //   public visitPowerExpr = (ctx: GTNParser.PowerExprContext) => this.evaluate(ctx);
  //   public visitMultDivModExpr = (ctx: GTNParser.MultDivModExprContext) => this.evaluate(ctx);
  //   public visitAddSubExpr = (ctx: GTNParser.AddSubExprContext) => this.evaluate(ctx);
  //   public visitRelationalExpr = (ctx: GTNParser.RelationalExprContext) => this.evaluate(ctx);
  //   public visitEqualityExpr = (ctx: GTNParser.EqualityExprContext) => this.evaluate(ctx);
  //   public visitBinomExpr = (ctx: GTNParser.BinomExprContext) => this.evaluate(ctx);
  //   public visitRandomExpr = (ctx: GTNParser.RandomExprContext) => this.evaluate(ctx);
  //
  //   public visitAtom(ctx: GTNParser.AtomContext): any {
  //     if (ctx.GT_NUMBER()) return parseFloat(ctx.getText());
  //     if (ctx.GT_STRING()) return ctx.getText().replace(/(^['"])|(['"]$)/g, '');
  //     if (ctx.identifier()) {
  //       // return this.memory.get(ctx.getText()) ?? 0;
  //       const name = ctx.getText();
  //       return this.currentScope[name];
  //     }
  //     return 0;
  //   }

  // --- Misc Commands ---

  public async visitSnapshot(ctx: GTNParser.SnapshotContext): Promise<void> {
    this.logger.info('Snapshot');
    await this.tick();
  }

  public async visitPause(ctx: GTNParser.PauseContext): Promise<void> {
    this.logger.info('Pause');
    await this.tick(); // Actually pauses execution flow in the runner
  }

  public async visitReturn(ctx: GTNParser.ReturnContext): Promise<void> {
    const arg = ctx.commandArgument?.();
    const value = this.evaluateNumber(arg.expression());
    this.returnSignal = { value };
    await this.tick();
  }

  public async visitStop(_ctx: GTNParser.StopContext): Promise<void> {
    this.returnSignal = { value: null };
    await this.tick();
  }

  public async visitWait(_ctx: GTNParser.WaitContext): Promise<void> {
    // In a real implementation, you might yield a specific "WaitCommand" object
    // that the runner interprets as "setTimeout(..., 1000)".
    // For now, we just yield to pause one tick.
    this.logger.info('Wait');
    await this.tick();
  }

  public async visitWrite(ctx: GTNParser.WriteContext): Promise<void> {
    const args = ctx.commandArgument?.();
    const words = args.map((arg) => String(this.evaluate(arg?.expression())));
    alert(`Turtle writes: ${words.join(' ')}`);
    await this.tick();
  }

  public async visitSay(ctx: GTNParser.SayContext): Promise<void> {
    const args = ctx.commandArgument?.();
    const words = args.map((arg) => String(this.evaluate(arg?.expression())));
    alert(`Turtle says: ${words.join(' ')}`);
    await this.tick();
  }

  /**
   * {@link GeoTortueParserVisitor#visitTeleport}
   */
  public async visitTeleport(ctx: GTNParser.TeleportContext): Promise<void> {
    const args = this.extractVariadicArgAsNumbers(ctx);
    if (args.length < 1) {
      return;
    }

    const x = args[0]!;
    const y = args.length > 1 ? args[1]! : 0;
    const z = args.length > 2 ? args[2]! : 0;

    this.turtleRepo.getAll().forEach((t) => {
      t.state.position = new GTNVector3(x, y, z);
    });
    await this.tick();
  }

  /**
   * {@link GeoTortueParserVisitor#visitSelect}
   */
  public async visitSelect(ctx: GTNParser.SelectContext): Promise<void> {
    this.warn('SELECT');
    const args = this.extractVariadicArgAsNumbers(ctx);
    if (args.length < 1) {
      return;
    }

    // TBD
  }

  /**
   * {@link GeoTortueParserVisitor#visitGlobal}
   */
  public async visitGlobal(ctx: GTNParser.GlobalContext): Promise<void> {
    this.warn('GLOBAL');
    const args = ctx.commandArgument();
    if (args.length < 1) {
      return;
    }

    // TBD
    // args.forEach((e) => (this.scopes[0]![e.getText()] = 0));
    // await this.tick();
  }

  public async visitDelete(ctx: GTNParser.DeleteContext): Promise<void> {
    ctx.commandArgument().forEach((e) => {
      const name = e.getText();
      delete this.currentScope[name];
      delete this.scopes[0]![name];
    });
    await this.tick();
  }

  /**
   * {@link GeoTortueParserVisitor#visitCompass}
   */
  public async visitCompass(ctx: GTNParser.CompassContext): Promise<any> {
    this.turtleRepo.getAll().forEach((t) => {
      t.state.position = new GTNVector3(0, 0, 0);
      t.state.rotation = new GTNQuaternion(0, 0, 0, 1);
    });
    return this.tick();
  }

  /**
   * {@link GeoTortueParserVisitor#visitInit}
   */
  public async visitInit(ctx: GTNParser.InitContext): Promise<any> {
    // Resetting state doesn't necessarily need animation, but safe to yield.
    this.scopes = [{}];
    this.turtleRepo.clear();
    this.userFunctions.clear();
    return null;
  }

  // --- Unimplemented (Warnings) ---

  private async warn(cmd: string) {
    this.logger.warn(`${cmd} not implemented yet`);
    await this.tick();
  }

  private async warn3D(cmd: string) {
    this.logger.warn(`${cmd} is 3D (unsupported)`);
    await this.tick();
  }

  private async warnAudio(cmd: string) {
    this.logger.warn(`${cmd} is Audio (unsupported)`);
    await this.tick();
  }

  public async visitRollUp(ctx: GTNParser.RollUpContext) {
    await this.warn3D('ROLL_UP');
  }
  public async visitRollDown(ctx: GTNParser.RollDownContext) {
    await this.warn3D('ROLL_DOWN');
  }
  public async visitRollLeft(ctx: GTNParser.RollLeftContext) {
    await this.warn3D('ROLL_LEFT');
  }
  public async visitRollRight(ctx: GTNParser.RollRightContext) {
    await this.warn3D('ROLL_RIGHT');
  }
  public async visitAim(ctx: GTNParser.AimContext) {
    await this.warn3D('AIM');
  }
  public async visitMimic(ctx: GTNParser.MimicContext) {
    await this.warn3D('MIMIC');
  }
  public async visitMirror(ctx: GTNParser.MirrorContext) {
    await this.warn3D('MIRROR');
  }
  public async visitRotateXY(ctx: GTNParser.RotateXYContext) {
    await this.warn3D('ROTATE_XY');
  }
  public async visitRotateXZ(ctx: GTNParser.RotateXZContext) {
    await this.warn3D('ROTATE_XZ');
  }
  public async visitRotateYZ(ctx: GTNParser.RotateYZContext) {
    await this.warn3D('ROTATE_YZ');
  }
  // Only one arg, the radius
  public async visitDrawCircle(ctx: GTNParser.DrawCircleContext): Promise<void> {
    const arg = this.extractOneArgAsNumber(ctx);
    this.logger.info(`Draw circle with radius: ${arg}`);
    this.warn('DRAW_CIRCLE');

    // TBD
  }
  // Whatever is the arc model, at least 2 points are required
  public async visitDrawArc(ctx: GTNParser.DrawArcContext): Promise<void> {
    const args = this.extractVariadicArgAsNumbers(ctx);
    this.logger.info(`Draw arc with points: ${args}`);
    this.warn('DRAW_ARC');
    if (args.length < 2) {
      return;
    }

    // TBD
  }

  // Display the var value in the command console?
  public async visitDisplay(ctx: GTNParser.DisplayContext) {
    await this.warn('DISPLAY');
  }
  public async visitManipulateGraph(ctx: GTNParser.ManipulateGraphContext) {
    await this.warn3D('MANIPULATE_GRAPH');
  }
  public async visitPlayMusic(ctx: GTNParser.PlayMusicContext) {
    await this.warnAudio('PLAY_MUSIC');
  }
  public async visitScore(ctx: GTNParser.ScoreContext) {
    await this.warnAudio('SCORE');
  }
  public async visitConcert(ctx: GTNParser.ConcertContext) {
    await this.warnAudio('CONCERT');
  }
  public async visitExecute(ctx: GTNParser.ExecuteContext) {
    await this.warn('EXECUTE');
  }
  public async visitUndoDrawing(ctx: GTNParser.UndoDrawingContext) {
    await this.warn('UNDO_DRAWING');
  }
  public async visitAskForValue(ctx: GTNParser.AskForValueContext) {
    await this.warn('ASK_FOR_VALUE');
  }
  public async visitFill(ctx: GTNParser.FillContext) {
    this.warn('FILL');
  }

  // --- Helpers ---

  private getFlattenedScope(): Record<string, unknown> {
    return this.scopes.reduce((acc, scope) => ({ ...acc, ...scope }), {});
  }

  private get currentScope(): Record<string, unknown> {
    return this.scopes[this.scopes.length - 1]!;
  }

  private evaluate(ctx: GTNParser.ExpressionContext | null | undefined): any {
    if (!ctx) return null;
    try {
      return this.mathEvaluator.evaluate(ctx.getText(), this.getFlattenedScope());
    } catch (e) {
      this.logger.error(`Math evaluation error: ${ctx.getText()}`, e);
      return 0;
    }
  }

  private evaluateNumber(ctx: GTNParser.ExpressionContext | null | undefined): number {
    const val = this.evaluate(ctx);
    return typeof val === 'number' ? val : parseFloat(val) || 0;
  }

  private evaluateBoolean(ctx: GTNParser.ExpressionContext | null | undefined): boolean {
    return !!this.evaluate(ctx);
  }
}
