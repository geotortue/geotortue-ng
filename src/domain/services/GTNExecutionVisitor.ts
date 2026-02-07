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

const DEFAULT_STEP_DELAY = toMs(5); // 50ms per step = 20 steps per second

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
   * Helper to execute a child node which might return a Generator (statement)
   * or a value (expression).
   */
  private async visitChild(node: ParseTree | undefined): Promise<void> {
    if (!node) return;
    // accept(this) will now return a Promise because of our class definition
    await node.accept(this);

    // const result = node.accept(this);
    // // If the result is an iterator (Generator), delegate to it.
    // if (result && typeof result.next === 'function') {
    //   await result;
    // }
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
      if (child) {
        const childResult = await child.accept(this);
        result = await this.aggregateResult(result, childResult);
      }
    }
    return result;
  }

  // 1. Entry point
  public async visitProgram(ctx: GTNParser.ProgramContext): Promise<void> {
    this.turtleRepo.reset();
    this.scopes = [{}];
    this.userFunctions.clear();

    if (ctx.children) {
      for (const child of ctx.children) {
        await (child.accept(this) as unknown as Promise<void>);
      }
    }
  }

  public async visitStatement(ctx: GTNParser.StatementContext): Promise<void> {
    if (this.returnSignal) return;

    // A statement usually has 1 child (Command or Structure)
    if (ctx.children) {
      for (const child of ctx.children) {
        await (child.accept(this) as unknown as Promise<void>);
      }
    }
  }

  public async visitBlock(ctx: GTNParser.BlockContext): Promise<void> {
    if (ctx.children) {
      for (const child of ctx.children) {
        if (this.returnSignal) break;
        console.debug('Entering statement:', child.getText());
        // Skip brackets, visit statements
        if (child instanceof GTNParser.StatementContext) {
          await (child.accept(this) as unknown as Promise<void>);
        }
      }
    }
  }

  // --- Structures (Control Flow) ---

  public async visitRepeatBlock(ctx: GTNParser.RepeatBlockContext): Promise<void> {
    const count = Math.floor(this.evaluateNumber(ctx.expr()));
    const block = ctx.block();

    if (block) {
      for (let i = 0; i < count; i++) {
        if (this.returnSignal) break;
        console.debug(`Repeat loop iteration: ${i + 1}/${count}`);
        await this.visitBlock(block);
      }
    }
  }

  public async visitIfBlock(ctx: GTNParser.IfBlockContext): Promise<void> {
    const condition = this.evaluateBoolean(ctx.expr());
    const blocks = ctx.block();

    if (condition) {
      await this.visitBlock(blocks[0]!);
    } else if (ctx.GT_ELSE() && blocks.length > 1) {
      await this.visitBlock(blocks[1]!);
    }
  }

  public async visitWhileBlock(ctx: GTNParser.WhileBlockContext): Promise<void> {
    while (this.evaluateBoolean(ctx.expr())) {
      if (this.returnSignal) break;
      await this.visitBlock(ctx.block());
    }
  }

  public async visitForEachBlock(ctx: GTNParser.ForEachBlockContext): Promise<void> {
    const loopVar = ctx.identifier()?.getText();
    if (loopVar) {
      if (ctx.GT_IN_LIST()) {
        await this.doVisitForEachBlockWithList(ctx, loopVar);
      } else {
        await this.doVisitForEachBlockWithRange(ctx, loopVar);
      }
    }
  }

  private async doVisitForEachBlockWithList(ctx: GTNParser.ForEachBlockContext, loopVar: string) {
    const list = this.evaluate(ctx.expr(0)!);
    if (!Array.isArray(list)) return;

    for (const item of list) {
      if (this.returnSignal) break;
      this.currentScope[loopVar] = item;
      await this.visitBlock(ctx.block());
    }
  }

  private async doVisitForEachBlockWithRange(ctx: GTNParser.ForEachBlockContext, loopVar: string) {
    const from = this.evaluateNumber(ctx.expr(0)!);
    const to = this.evaluateNumber(ctx.expr(1)!);

    // Handle both ascending and descending ranges
    const step = from <= to ? 1 : -1;

    for (let i = from; step > 0 ? i <= to : i >= to; i += step) {
      if (this.returnSignal) break;
      this.currentScope[loopVar] = i;
      await this.visitBlock(ctx.block());
    }
  }

  public async visitFunctionDef(ctx: GTNParser.FunctionDefContext): Promise<any> {
    // Defining a function is instantaneous, no yield needed.
    const name = ctx.identifier(0)!.getText();
    this.userFunctions.set(name, ctx);
    return null;
  }

  public async visitProcedureCall(ctx: GTNParser.ProcedureCallContext): Promise<any> {
    const name = ctx.identifier().getText();
    const funcDef = this.userFunctions.get(name);

    if (!funcDef) {
      this.logger.warn(`Unknown procedure: ${name}`);
      return;
    }

    const argsExprs = ctx.expr();
    const paramIds = funcDef.identifier().slice(1); // First ID is func name
    const localScope: Record<string, unknown> = {};

    paramIds.forEach((paramId, index) => {
      if (index < argsExprs.length) {
        localScope[paramId.getText()] = this.evaluate(argsExprs[index]!);
      }
    });

    this.scopes.push(localScope);

    // Evaluate function body (which might contain statements)
    // Note: If function is purely expression-based in grammar, this might need check.
    // But usually procedure calls execute a body (expr or block).
    // Assuming funcDef.expr() is the body here based on previous code?
    // Wait, previous code was: `this.evaluate(funcDef.expr())`.
    // If procedures only return values, they are synchronous.
    // If procedures do drawing, they must be visited.

    // CHECK: Your grammar says: functionDef : ... = expr
    // This implies functions are pure calculations in this specific grammar version?
    // If yes, we don't yield. If you change grammar to support Blocks in functions, use yield*.

    // Preserving logic: It seems functions are expressions here.
    const result = this.evaluate(funcDef.expr());

    this.scopes.pop();
    // ProcedureCall is a command in the grammar, so we ignore result,
    // but if it was called as expression, evaluate() handles it.
    await this.tick();
    return result;
  }

  // --- Primitive Commands (Turtle Actions) ---

  public async visitMoveForward(ctx: GTNParser.MoveForwardContext): Promise<void> {
    const distance = this.evaluateNumber(ctx.expr());
    this.turtleRepo.getAll().forEach((t) => t.forward(distance));
    await this.tick();
  }

  public async visitMoveBackward(ctx: GTNParser.MoveBackwardContext): Promise<void> {
    const distance = this.evaluateNumber(ctx.expr());
    this.turtleRepo.getAll().forEach((t) => t.backward(distance));
    await this.tick();
  }

  public async visitTurnRight(ctx: GTNParser.TurnRightContext): Promise<void> {
    const angle = toDegree(this.evaluateNumber(ctx.expr()));
    this.turtleRepo.getAll().forEach((t) => t.right(angle));
    await this.tick();
  }

  public async visitTurnLeft(ctx: GTNParser.TurnLeftContext): Promise<void> {
    const angle = toDegree(this.evaluateNumber(ctx.expr()));
    this.turtleRepo.getAll().forEach((t) => t.left(angle));
    await this.tick();
  }

  // --- Pen & Visibility ---

  public async visitPenUp(ctx: GTNParser.PenUpContext): Promise<void> {
    this.turtleRepo.getAll().forEach((t) => t.penUp());
    await this.tick();
  }

  public async visitPenDown(ctx: GTNParser.PenDownContext): Promise<void> {
    this.turtleRepo.getAll().forEach((t) => t.penDown());
    await this.tick();
  }

  /*
   * Only known named css colors and hex colors are allowed.
   * FUTURE deal with number as hexadecimal number.
   * See [GéoTortue - crayon](http://geotortue.free.fr/index.php?page=aide_index#crayon)
   *
   * Note. RGB and
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
  public async visitSetColor(ctx: GTNParser.SetColorContext): Promise<void> {
    const exprCtx = ctx.expr();
    if (!exprCtx) return;

    const text = exprCtx.getText();
    let rawColor: string;

    // ---------------------------------------------------------
    // STRATEGY 1: Direct String Literal (Fast Path)
    // ---------------------------------------------------------
    // If the user typed: `crayon "rouge"` (expr starts with GT_STRING)
    // We skip the math evaluator entirely to avoid parsing issues with quotes.
    if (exprCtx.start?.type === GeoTortueLexer.GT_STRING) {
      rawColor = text;
    }
    // ---------------------------------------------------------
    // STRATEGY 2: Evaluate Expression (Variable or Math)
    // ---------------------------------------------------------
    else {
      try {
        // Try to evaluate as a variable or formula
        // Example: crayon myColorVar  OR  crayon rgb(255,0,0)
        const result = this.mathEvaluator.evaluate(
          text,
          this.getFlattenedScope(),
          MathEvaluatorMode.error
        );
        rawColor = String(result);
      } catch (e: any) {
        // ---------------------------------------------------------
        // STRATEGY 3: Loose Syntax Fallback (Auto-Quote)
        // ---------------------------------------------------------
        // If evaluation failed because 'ROUGE' is undefined,
        // AND the text looks like a valid identifier, treat it as a string literal.
        // This allows: `crayon rouge` (without quotes around 'rouge') to work.
        const msg = e.message || '';
        // Check if error is "Undefined symbol" and text is a simple word
        if (msg.includes('Undefined symbol') || msg.includes('Undefined variable')) {
          this.logger.warn(`[Color] Variable '${text}' not found. Treating as color literal.`);
          rawColor = text;
        } else {
          this.logger.error(`[Math] Evaluation error: ${text}`, e); // re-throw e?
          return;
        }
      }
    }

    if (!rawColor || rawColor === '0') {
      return;
    }

    const cssColor = this.resolveCssColor(rawColor);
    if (isCssColor(cssColor)) {
      this.turtleRepo.getAll().forEach((t) => t.setPenColor(toCssColor(cssColor)));
    }
    await this.tick();
  }

  private resolveCssColor(input: string): string {
    const cleanInput = input.replace(/['"]/g, '').toLowerCase();
    if (isCssHexColor(cleanInput)) return cleanInput;
    return this.languageService.getCssColor(cleanInput) || cleanInput;
  }

  public async visitSetThickness(ctx: GTNParser.SetThicknessContext): Promise<void> {
    const size = this.evaluateNumber(ctx.expr());
    if (!isNaN(size)) {
      this.turtleRepo.getAll().forEach((t) => t.setPenSize(size));
    }
    await this.tick();
  }

  // --- System Commands ---

  public async visitClearGraphics(_ctx: GTNParser.ClearGraphicsContext): Promise<void> {
    this.turtleRepo.clearAllLines();
    await this.tick();
  }

  public async visitClearScreen(_ctx: GTNParser.ClearScreenContext): Promise<void> {
    this.turtleRepo.reset();
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

  public async visitAssignment(ctx: GTNParser.AssignmentContext): Promise<void> {
    const name = ctx.identifier().getText();
    const value = this.evaluate(ctx.expr());
    this.currentScope[name] = value;
    await this.tick();
  }

  public async visitVarAssignment(ctx: GTNParser.VarAssignmentContext): Promise<void> {
    const assignmentCtx = ctx.assignment();
    const name = assignmentCtx.identifier().getText();
    const value = this.evaluate(assignmentCtx.expr());
    this.currentScope[name] = value;
    await this.tick();
  }

  // --- Expressions (Math & Logic) ---
  // Expressions remain SYNCHRONOUS. They return values, not Promises.

  public visitAtomExpr = (ctx: GTNParser.AtomExprContext) => this.evaluate(ctx);
  public visitParenExpr = (ctx: GTNParser.ParenExprContext) => this.evaluate(ctx);
  public visitUnaryMinusExpr = (ctx: GTNParser.UnaryMinusExprContext) => this.evaluate(ctx);
  public visitPowerExpr = (ctx: GTNParser.PowerExprContext) => this.evaluate(ctx);
  public visitMultDivModExpr = (ctx: GTNParser.MultDivModExprContext) => this.evaluate(ctx);
  public visitAddSubExpr = (ctx: GTNParser.AddSubExprContext) => this.evaluate(ctx);
  public visitRelationalExpr = (ctx: GTNParser.RelationalExprContext) => this.evaluate(ctx);
  public visitEqualityExpr = (ctx: GTNParser.EqualityExprContext) => this.evaluate(ctx);
  public visitBinomExpr = (ctx: GTNParser.BinomExprContext) => this.evaluate(ctx);
  public visitRandomExpr = (ctx: GTNParser.RandomExprContext) => this.evaluate(ctx);

  public visitAtom(ctx: GTNParser.AtomContext): any {
    if (ctx.GT_NUMBER()) return parseFloat(ctx.getText());
    if (ctx.GT_STRING()) return ctx.getText().replace(/(^['"])|(['"]$)/g, '');
    if (ctx.identifier()) {
      return this.memory.get(ctx.getText()) ?? 0;
    }
    return 0;
  }

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
    this.returnSignal = { value: this.evaluate(ctx.expr()) };
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
    const msgparts = ctx.expr().map((e) => String(this.evaluate(e)));
    alert(`Turtle writes: ${msgparts.join(' ')}`);
    await this.tick();
  }

  public async visitSay(ctx: GTNParser.SayContext): Promise<void> {
    const msgparts = ctx.expr().map((e) => String(this.evaluate(e)));
    alert(msgparts.join(' '));
    await this.tick();
  }

  public async visitHome(ctx: GTNParser.HomeContext): Promise<void> {
    this.turtleRepo.getAll().forEach((t) => {
      t.state.position = new GTNVector3(0, 0, 0);
      t.state.rotation = new GTNQuaternion(0, 0, 0, 1);
    });
    await this.tick();
  }

  public async visitTeleport(ctx: GTNParser.TeleportContext): Promise<void> {
    const args = ctx.expr();
    if (args.length === 0) return;

    const x = this.evaluateNumber(args[0]!);
    const y = args.length > 1 ? this.evaluateNumber(args[1]!) : 0;
    const z = args.length > 2 ? this.evaluateNumber(args[2]!) : 0;

    this.turtleRepo.getAll().forEach((t) => {
      t.state.position = new GTNVector3(x, y, z);
    });
    await this.tick();
  }

  public async visitDeclareGlobal(ctx: GTNParser.DeclareGlobalContext): Promise<void> {
    ctx.expr().forEach((e) => (this.scopes[0]![e.getText()] = 0));
    await this.tick();
  }

  public async visitEraseVar(ctx: GTNParser.EraseVarContext): Promise<void> {
    ctx.expr().forEach((e) => {
      const name = e.getText();
      delete this.currentScope[name];
      delete this.scopes[0]![name];
    });
    await this.tick();
  }

  public async visitInit(ctx: GTNParser.InitContext): Promise<any> {
    // Resetting state doesn't necessarily need animation, but safe to yield.
    this.scopes = [{}];
    this.turtleRepo.clear();
    this.userFunctions.clear();
    return null;
  }

  public visitIdentifier(ctx: GTNParser.IdentifierContext): any {
    return ctx.getText();
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

  public async visitPitchUp(ctx: GTNParser.PitchUpContext) {
    await this.warn3D('PVH');
  }
  public async visitPitchDown(ctx: GTNParser.PitchDownContext) {
    await this.warn3D('PVB');
  }
  public async visitRollLeft(ctx: GTNParser.RollLeftContext) {
    await this.warn3D('PVG');
  }
  public async visitRollRight(ctx: GTNParser.RollRightContext) {
    await this.warn3D('PVD');
  }
  public async visitAim(ctx: GTNParser.AimContext) {
    await this.warn3D('VISE');
  }
  public async visitMimic(ctx: GTNParser.MimicContext) {
    await this.warn3D('IMITE');
  }
  public async visitMirror(ctx: GTNParser.MirrorContext) {
    await this.warn3D('MIRROR');
  }
  public async visitRotateXY(ctx: GTNParser.RotateXYContext) {
    await this.warn3D('PVXY');
  }
  public async visitRotateXZ(ctx: GTNParser.RotateXZContext) {
    await this.warn3D('PVXZ');
  }
  public async visitRotateYZ(ctx: GTNParser.RotateYZContext) {
    await this.warn3D('PVYZ');
  }

  public async visitCircle(ctx: GTNParser.CircleContext): Promise<void> {
    this.logger.info(`Draw Circle r=${this.evaluateNumber(ctx.expr())}`);
    await this.tick();
  }
  public async visitArc(ctx: GTNParser.ArcContext): Promise<void> {
    this.logger.info(`Draw Arc`);
    await this.tick();
  }

  public async visitShowVar(ctx: GTNParser.ShowVarContext) {
    await this.tick();
  }
  public async visitManipulateGraph(ctx: GTNParser.ManipulateGraphContext) {
    await this.warn3D('MG');
  }
  public async visitPlayMusic(ctx: GTNParser.PlayMusicContext) {
    await this.warnAudio('PLAY');
  }
  public async visitScore(ctx: GTNParser.ScoreContext) {
    await this.warnAudio('SCORE');
  }
  public async visitConcert(ctx: GTNParser.ConcertContext) {
    await this.warnAudio('CONCERT');
  }
  public async visitExecute(ctx: GTNParser.ExecuteContext) {
    await this.warn('EXEC');
  }
  public async visitUndo(ctx: GTNParser.UndoContext) {
    await this.warn('UNDO');
  }
  public async visitAskFor(ctx: GTNParser.AskForContext) {
    await this.tick();
  }
  public async visitFill(ctx: GTNParser.FillContext) {
    this.logger.warn('Fill not implemented');
    await this.visitBlock(ctx.block());
  }

  // --- Helpers ---

  private getFlattenedScope(): Record<string, unknown> {
    return this.scopes.reduce((acc, scope) => ({ ...acc, ...scope }), {});
  }

  private get currentScope(): Record<string, unknown> {
    return this.scopes[this.scopes.length - 1]!;
  }

  private evaluate(ctx: GTNParser.ExprContext): any {
    if (!ctx) return null;
    try {
      return this.mathEvaluator.evaluate(ctx.getText(), this.getFlattenedScope());
    } catch (e) {
      this.logger.error(`Math evaluation error: ${ctx.getText()}`, e);
      return 0;
    }
  }

  private evaluateNumber(ctx: GTNParser.ExprContext): number {
    const val = this.evaluate(ctx);
    return typeof val === 'number' ? val : parseFloat(val) || 0;
  }

  private evaluateBoolean(ctx: GTNParser.ExprContext): boolean {
    return !!this.evaluate(ctx);
  }
}
