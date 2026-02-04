import { AbstractParseTreeVisitor } from 'antlr4ng';

import { GeoTortueLexer } from '@infrastructure/antlr/generated/GeoTortueLexer';
import * as GTNParser from '@infrastructure/antlr/generated/GeoTortueParser';
import { GeoTortueParserVisitor } from '@infrastructure/antlr/generated/GeoTortueParserVisitor';

import type { IGTNTurtleRepository } from '@domain/interfaces/IGTNTurtleRepository';
import {
  GTNQuaternion,
  GTNVector3,
  isCssColor,
  isCssHexColor,
  toCssColor,
  type GTNColor
} from '@domain/value-objects';
import { toDegree } from '@domain/types'; // Assuming we created this in previous steps
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';
import { MathEvaluatorMode, type IGTNMathEvaluator } from '@domain/interfaces/IGTNMathEvaluator';
import { GTNContainer } from '@infrastructure/di/GTNContainer';
import type { IGTNLogger } from '@app/interfaces/IGTNLogger';
import type { IGTNLanguageService } from '@domain/interfaces/IGTNLanguageService';

/**
 * The runtime interpreter for GeoTortue.
 * It traverses the Parse Tree and executes commands against the Turtle Repository.
 * Use 'any' as the result type because expressions return values (number/string),
 * while statements return void/undefined.
 */
export class GTNExecutionVisitor
  extends AbstractParseTreeVisitor<any>
  implements GeoTortueParserVisitor<any>
{
  private readonly mathEvaluator: IGTNMathEvaluator;
  private readonly languageService: IGTNLanguageService;
  private readonly logger: IGTNLogger;

  private returnSignal: { value: unknown } | null = null;
  private readonly userFunctions: Map<string, GTNParser.FunctionDefContext> = new Map();
  private scopes: Record<string, any>[] = [{}];
  // Simple memory for variables (Global scope for MVP)
  private readonly memory: Map<string, any> = new Map();

  constructor(private readonly turtleRepo: IGTNTurtleRepository) {
    super();
    const container = GTNContainer.getInstance();
    this.mathEvaluator = container.resolve<IGTNMathEvaluator>(GTN_TYPES.MathEvaluator);
    this.languageService = container.resolve<IGTNLanguageService>(GTN_TYPES.LanguageService);
    this.logger = container.resolve<IGTNLogger>(GTN_TYPES.Logger);
  }

  protected defaultResult(): any {
    return null;
  }

  // --- Program Structure ---

  public visitProgram = (ctx: GTNParser.ProgramContext): void => {
    // keep the existing turtles but reinitialize their statuts (position, direction, trails)
    this.turtleRepo.reset();
    this.scopes = [{}];
    this.userFunctions.clear();
    // Visit all children (statements) in order
    return this.visitChildren(ctx);
  };

  public visitStatement = (ctx: GTNParser.StatementContext): any => {
    // vu voir POC 9
    if (this.returnSignal) {
      return null;
    }

    return this.visitChildren(ctx);
  };

  public visitBlock = (ctx: GTNParser.BlockContext): any => {
    // vu 0
    this.visitChildren(ctx);
  };

  // --- Structures (Control Flow) ---

  public visitRepeatBlock = (ctx: GTNParser.RepeatBlockContext): any => {
    const count = Math.floor(this.evaluateNumber(ctx.expr()));
    const block = ctx.block(); // Get the [...] block
    if (block) {
      for (let i = 0; i < count; i++) {
        if (this.returnSignal) {
          break;
        }

        this.visit(block);
      }
    }
    return null;
  };

  public visitIfBlock = (ctx: GTNParser.IfBlockContext): any => {
    const condition = this.evaluateBoolean(ctx.expr());
    const blocks = ctx.block();
    if (condition) {
      this.visit(blocks[0]!); // Then block
    } else if (ctx.GT_ELSE() && blocks.length > 1) {
      this.visit(blocks[1]!);
    }
    return null;
  };

  public visitWhileBlock = (ctx: GTNParser.WhileBlockContext): any => {
    while (this.evaluateBoolean(ctx.expr())) {
      if (this.returnSignal) {
        break;
      }

      this.visit(ctx.block());
    }
    return null;
  };

  public visitForEachBlock = (ctx: GTNParser.ForEachBlockContext): any => {
    const loopVar = ctx.identifier()?.getText();
    if (loopVar) {
      this.doVisitForEachBlock(ctx, loopVar);
    }
    return null;
  };

  private doVisitForEachBlock(ctx: GTNParser.ForEachBlockContext, loopVar: string) {
    const action = ctx.GT_IN_LIST()
      ? this.doVisitForEachBlockWithList
      : this.doVisitForEachBlockWithRange;
    action.bind(this)(ctx, loopVar);
  }

  private doVisitForEachBlockWithList(ctx: GTNParser.ForEachBlockContext, loopVar: string) {
    const list = this.evaluate(ctx.expr(0)!);
    if (!Array.isArray(list)) {
      return;
    }

    for (const item of list) {
      if (this.returnSignal) break;

      this.currentScope[loopVar] = item;
      this.visit(ctx.block());
    }
  }

  private doVisitForEachBlockWithRange(ctx: GTNParser.ForEachBlockContext, loopVar: string) {
    const from = this.evaluateNumber(ctx.expr(0)!);
    const to = this.evaluateNumber(ctx.expr(1)!);
    for (let i = from; i <= to; i++) {
      if (this.returnSignal) break;

      this.currentScope[loopVar] = i;
      this.visit(ctx.block());
    }
  }

  public visitFunctionDef = (ctx: GTNParser.FunctionDefContext): any => {
    const name = ctx.identifier(0)!.getText();
    this.userFunctions.set(name, ctx);
    return null;
  };

  public visitProcedureCall = (ctx: GTNParser.ProcedureCallContext): any => {
    const name = ctx.identifier().getText();
    const funcDef = this.userFunctions.get(name);
    if (!funcDef) {
      this.logger.warn(`Unknown procedure: ${name}`);
      return null;
    }
    const argsExprs = ctx.expr();
    const paramIds = funcDef.identifier().slice(1);
    const localScope: Record<string, unknown> = {};
    paramIds.forEach((paramId, index) => {
      if (index < argsExprs.length) {
        localScope[paramId.getText()] = this.evaluate(argsExprs[index]!);
      }
    });
    this.scopes.push(localScope);
    const result = this.evaluate(funcDef.expr());
    this.scopes.pop();
    return result;
  };

  // --- Primitive Commands (Turtle Actions) ---

  public visitMoveForward = (ctx: GTNParser.MoveForwardContext): any => {
    const distance = this.evaluateNumber(ctx.expr());
    this.turtleRepo.getAll().forEach((t) => t.forward(distance));
  };

  public visitMoveBackward = (ctx: GTNParser.MoveBackwardContext): any => {
    const distance = this.evaluateNumber(ctx.expr());
    this.turtleRepo.getAll().forEach((t) => t.backward(distance));
  };

  public visitTurnRight = (ctx: GTNParser.TurnRightContext): any => {
    const angle = toDegree(this.evaluateNumber(ctx.expr()));
    this.turtleRepo.getAll().forEach((t) => t.right(angle));
  };

  public visitTurnLeft = (ctx: GTNParser.TurnLeftContext): any => {
    const angle = toDegree(this.evaluateNumber(ctx.expr()));
    this.turtleRepo.getAll().forEach((t) => t.left(angle));
  };

  // --- Pen & Visibility ---

  public visitPenUp = (ctx: GTNParser.PenUpContext): any => {
    this.turtleRepo.getAll().forEach((t) => t.penUp());
  };

  public visitPenDown = (ctx: GTNParser.PenDownContext): any => {
    this.turtleRepo.getAll().forEach((t) => t.penDown());
  };

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
  visitSetColor = (ctx: GTNParser.SetColorContext): void => {
    const exprCtx = ctx.expr();
    if (!exprCtx) {
      return;
    }

    let rawColor: string;

    // ---------------------------------------------------------
    // STRATEGY 1: Direct String Literal (Fast Path)
    // ---------------------------------------------------------
    // If the user typed: `crayon "rouge"` (expr starts with GT_STRING)
    // We skip the math evaluator entirely to avoid parsing issues with quotes.
    if (exprCtx.start?.type === GeoTortueLexer.GT_STRING) {
      rawColor = exprCtx.getText();
    }
    // ---------------------------------------------------------
    // STRATEGY 2: Evaluate Expression (Variable or Math)
    // ---------------------------------------------------------
    else {
      try {
        // Try to evaluate as a variable or formula
        // Example: crayon myColorVar  OR  crayon rgb(255,0,0)
        const result = this.mathEvaluator.evaluate(
          exprCtx.getText(),
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
        const text = exprCtx.getText();
        const msg = e.message || '';
        // Check if error is "Undefined symbol" and text is a simple word
        if (msg.includes('Undefined symbol') || msg.includes('Undefined variable')) {
          this.logger.warn(`[Color] Variable '${text}' not found. Treating as color literal.`);
          rawColor = text;
        } else {
          // Genuine math error
          this.logger.error(`[Math] Evaluation error in SetColor: ${text}`, e);
          return;
        }
      }
    }

    // ---------------------------------------------------------
    // Resolution
    // ---------------------------------------------------------
    if (!rawColor || rawColor === '0') {
      return; // invalid or failed evaluation
    }
    // Resolve to CSS (handles localized names, stripping quotes, etc.)
    const cssColor = this.resolveCssColor(rawColor);
    if (!isCssColor(cssColor)) {
      return; // here a string which is not a known GéoTortue color will be ignored.
    }

    // Apply
    this.turtleRepo.getAll().forEach((t) => t.setPenColor(toCssColor(cssColor)));
  };

  /**
   * Helper to resolve localized names to CSS values
   *
   * Only known named css colors are allowed.
   */
  private resolveCssColor(input: string): string {
    // Strip quotes if they exist (e.g. "'rouge'" -> "rouge")
    const cleanInput = input.replace(/['"]/g, '').toLowerCase();

    if (isCssHexColor(cleanInput)) {
      return cleanInput;
    }

    const csscolor = this.languageService.getCssColor(cleanInput);

    if (csscolor) {
      return csscolor;
    }

    // C. Fallback: Return input.
    // If it was already "red" or "blue", the browser will understand it.
    // If it was garbage (e.g. "bleurg"), the browser will ignore it (safe failure).
    return cleanInput;
  }

  public visitSetThickness = (ctx: GTNParser.SetThicknessContext): void => {
    const size = this.evaluateNumber(ctx.expr());
    if (isNaN(size)) {
      return;
    }

    // 0.0 to 1.0 (or 0-100 depending on preference, sticking to 0.0-1.0 for now)
    this.turtleRepo.getAll().forEach((t) => t.setPenSize(size));
  };

  // --- System Commands ---

  public visitClearGraphics = (_ctx: GTNParser.ClearGraphicsContext): any => {
    // Clear screen only (keep turtles) - implementation depends on repo capability
    // For now we map it to reset or implement specific logic
    this.turtleRepo.clearAllLines();
    this.logger.debug("Command: VG - Cleared all turtles' trails");
  };

  public visitClearScreen = (_ctx: GTNParser.ClearScreenContext): any => {
    // Clear screen + Reset Turtles
    this.turtleRepo.reset();
  };

  public visitHideTurtle = (_ctx: GTNParser.HideTurtleContext): any => {
    this.turtleRepo.getAll().forEach((t) => (t.isVisible = false));
  };

  public visitShowTurtle = (_ctx: GTNParser.ShowTurtleContext): any => {
    this.turtleRepo.getAll().forEach((t) => (t.isVisible = true));
  };

  // --- Assignments & Variables ---

  public visitAssignment = (ctx: GTNParser.AssignmentContext): any => {
    // vu ; rien dans POC9...
    const name = ctx.identifier().getText();
    const value = this.evaluate(ctx.expr());
    this.currentScope[name] = value;
    return null;
  };

  public visitVarAssignment = (ctx: GTNParser.VarAssignmentContext): any => {
    const assignmentCtx = ctx.assignment();
    const name = assignmentCtx.identifier().getText();
    const value = this.evaluate(assignmentCtx.expr());
    this.currentScope[name] = value;
    return null;
  };

  // --- Expressions (Math & Logic) ---
  //
  // Calculus are delegated to Math.js.

  // public visitAtomExpr = (ctx: GTNParser.AtomExprContext): any => {
  //   return this.visit(ctx.atom());
  // };

  // public visitParenExpr = (ctx: GTNParser.ParenExprContext): any => {
  //   return this.visit(ctx.expr());
  // };

  // public visitMultDivModExpr = (ctx: GTNParser.MultDivModExprContext): any => {
  //   const left = this.visit(ctx.expr(0)!);
  //   const right = this.visit(ctx.expr(1)!);
  //   if (ctx.GT_MULT()) return left * right;
  //   if (ctx.GT_DIV()) return left / right;
  //   if (ctx.GT_RESTE()) return left % right;
  //   return 0;
  // };

  // public visitAddSubExpr = (ctx: GTNParser.AddSubExprContext): any => {
  //   const left = this.visit(ctx.expr(0)!);
  //   const right = this.visit(ctx.expr(1)!);
  //   if (ctx.GT_PLUS()) return left + right;
  //   if (ctx.GT_MINUS()) return left - right;
  //   return 0;
  // };

  // public visitPowerExpr = (ctx: GTNParser.PowerExprContext): any => {
  //   const base = this.visit(ctx.expr(0)!);
  //   const exp = this.visit(ctx.expr(1)!);
  //   return Math.pow(base, exp);
  // };

  // public visitUnaryMinusExpr = (ctx: GTNParser.UnaryMinusExprContext): any => {
  //   return -this.visit(ctx.expr());
  // };

  //   // dummy evaluation FUTURE to be managed by math evaluator
  //   public visitBinomExpr = (ctx: GTNParser.BinomExprContext): any => 0;
  //
  //   // dummy evaluation FUTURE to be managed by math evaluator
  //   public visitRandomExpr = (ctx: GTNParser.RandomExprContext): any =>
  //     Math.random() * this.evaluate(ctx.expr());

  // public visitRelationalExpr = (ctx: GTNParser.RelationalExprContext): any => {
  //   const left = this.visit(ctx.expr(0)!);
  //   const right = this.visit(ctx.expr(1)!);
  //   if (ctx.GT_LT()) return left < right;
  //   if (ctx.GT_LTE()) return left <= right;
  //   if (ctx.GT_GT()) return left > right;
  //   if (ctx.GT_GTE()) return left >= right;
  //   return false;
  // };

  // public visitEqualityExpr = (ctx: GTNParser.EqualityExprContext): any => {
  //   const left = this.visit(ctx.expr(0)!);
  //   const right = this.visit(ctx.expr(1)!);
  //   if (ctx.GT_EQ()) return left == right;
  //   if (ctx.GT_NEQ()) return left != right;
  //   return false;
  // };

  /**
   * Visit a parse tree produced by the `AtomExpr`
   * labeled alternative in `GeoTortueParser.expr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  public visitAtomExpr = (ctx: GTNParser.AtomExprContext) => this.evaluate(ctx); // vu

  public visitParenExpr = (ctx: GTNParser.ParenExprContext) => this.evaluate(ctx); // vu
  public visitUnaryMinusExpr = (ctx: GTNParser.UnaryMinusExprContext) => this.evaluate(ctx); // vu
  public visitPowerExpr = (ctx: GTNParser.PowerExprContext) => this.evaluate(ctx); // vu
  public visitMultDivModExpr = (ctx: GTNParser.MultDivModExprContext) => this.evaluate(ctx); // vu
  public visitAddSubExpr = (ctx: GTNParser.AddSubExprContext) => this.evaluate(ctx); // vu

  public visitRelationalExpr = (ctx: GTNParser.RelationalExprContext) => this.evaluate(ctx); // vu
  public visitEqualityExpr = (ctx: GTNParser.EqualityExprContext) => this.evaluate(ctx); // vu
  public visitBinomExpr = (ctx: GTNParser.BinomExprContext) => this.evaluate(ctx); // vu
  public visitRandomExpr = (ctx: GTNParser.RandomExprContext) => this.evaluate(ctx); // vu

  //  misc

  /**
   * Visit a parse tree produced by `GeoTortueParser.atom`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  public visitAtom = (ctx: GTNParser.AtomContext): any => {
    // vu, rien dans POC9
    if (ctx.GT_NUMBER()) return parseFloat(ctx.getText());

    if (ctx.GT_STRING()) return ctx.getText().replace(/(^['"])|(['"]$)/g, ''); // Strip quotes

    if (ctx.identifier()) {
      const name = ctx.getText();
      return this.memory.get(name) ?? 0; // Default to 0 if undefined
    }

    return 0;
  };

  public visitSnapshot = (ctx: GTNParser.SnapshotContext): any => {
    // vu cf. POC9
    this.logger.info('Snapshot');
    return null;
  };

  public visitPause = (ctx: GTNParser.PauseContext): any => {
    // vu cf. POC9
    this.logger.info('Pause');
    return null;
  };

  public visitReturn = (ctx: GTNParser.ReturnContext): any => {
    // vu cf. POC9
    this.returnSignal = { value: this.evaluate(ctx.expr()) };
    return null;
  };

  public visitStop = (_ctx: GTNParser.StopContext): any => {
    // vu cf. POC9
    this.returnSignal = { value: null };
    return null;
  };

  public visitWait = (_ctx: GTNParser.WaitContext): any => {
    // vu FUTURE add an effective wait
    this.logger.info('Wait');
    return null;
  };

  // FUTURE to write sth on the canvas... it's not a message to the user
  public visitWrite = (ctx: GTNParser.WriteContext): any => {
    const msgparts = ctx.expr().map((e) => String(this.evaluate(e)));
    alert(`Turtle writes: ${msgparts.join(' ')}`);
    return null;
  };

  public visitSay = (ctx: GTNParser.SayContext): any => {
    const msgparts = ctx.expr().map((e) => String(this.evaluate(e)));
    alert(msgparts.join(' '));
    return null;
  };

  public visitFill = (ctx: GTNParser.FillContext): any => {
    this.logger.warn('Fill not implemented');
    this.visit(ctx.block());
    return null;
  };

  public visitHome = (ctx: GTNParser.HomeContext): any => {
    // Keep drawing
    this.turtleRepo.getAll().forEach((t) => {
      // 1. Reset Position to (0,0,0)
      // By modifying state directly, we bypass the line recording logic in .forward()
      t.state.position = new GTNVector3(0, 0, 0);

      // 2. Reset Rotation (Standard "Home" behavior points North/Up)
      // Assuming Identity Quaternion (0,0,0,1) aligns with your default "Up" vector (Y-axis)
      t.state.rotation = new GTNQuaternion(0, 0, 0, 1);
    });
  };

  public visitTeleport = (ctx: GTNParser.TeleportContext): any => {
    const args = ctx.expr();

    // Safety check: ensure we have at least one coordinate
    if (args.length === 0) return;

    const x = this.evaluateNumber(args[0]!);
    // If Y is missing, default to 0 (unlikely with valid grammar, but safe)
    const y = args.length > 1 ? this.evaluateNumber(args[1]!) : 0;
    // If Z is provided use it, otherwise snap to Z=0 (Standard 2D plane)
    const z = args.length > 2 ? this.evaluateNumber(args[2]!) : 0;

    this.turtleRepo.getAll().forEach((t) => {
      // Direct assignment bypasses line drawing (Teleportation)
      t.state.position = new GTNVector3(x, y, z);
    });
  };

  public visitDeclareGlobal = (ctx: GTNParser.DeclareGlobalContext): any => {
    ctx.expr().forEach((e) => (this.scopes[0]![e.getText()] = 0));
    return null;
  };

  public visitEraseVar = (ctx: GTNParser.EraseVarContext): any => {
    ctx.expr().forEach((e) => {
      const name = e.getText();
      delete this.currentScope[name];
      delete this.scopes[0]![name];
    });
    return null;
  };

  public visitInit = (ctx: GTNParser.InitContext): any => {
    this.scopes = [{}];
    this.turtleRepo.clear();
    this.userFunctions.clear();
    return null;
  };

  public visitIdentifier = (ctx: GTNParser.IdentifierContext): any => {
    return ctx.getText();
  };

  // --- Helper ---

  /**
   * Helpers to evaluate an expression context safely.
   */
  // private evaluate(ctx: GTNParser.ExprContext): any {
  //   return this.visit(ctx);
  // }

  private getFlattenedScope(): Record<string, unknown> {
    return this.scopes.reduce((acc, scope) => ({ ...acc, ...scope }), {});
  }

  private get currentScope(): Record<string, unknown> {
    return this.scopes[this.scopes.length - 1]!;
  }

  /**
   *
   * @param ctx Evaluate an expression using Math.js
   * @returns
   */
  private evaluate(ctx: GTNParser.ExprContext): any {
    if (!ctx) {
      return null;
    }

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

  private warn(cmd: string) {
    this.logger.warn(`${cmd} not implemented yet`);
    return null;
  }

  private warn3D(cmd: string) {
    this.logger.warn(`${cmd} is 3D (unsupported)`);
    return null;
  }

  private warnAudio(cmd: string) {
    this.logger.warn(`${cmd} is Audio (unsupported)`);
    return null;
  }

  // --- Unimplemented ---

  public visitPitchUp = (ctx: GTNParser.PitchUpContext): any => this.warn3D('PVH'); // vu
  public visitPitchDown = (ctx: GTNParser.PitchDownContext): any => this.warn3D('PVB'); // vu
  public visitRollLeft = (ctx: GTNParser.RollLeftContext): any => this.warn3D('PVG'); // vu
  public visitRollRight = (ctx: GTNParser.RollRightContext): any => this.warn3D('PVD'); // vu
  public visitAim = (ctx: GTNParser.AimContext): any => this.warn3D('VISE'); // vu

  public visitMimic = (ctx: GTNParser.MimicContext): any => this.warn3D('IMITE'); // vu
  public visitMirror = (ctx: GTNParser.MirrorContext): any => this.warn3D('MIRROR'); // vu
  public visitRotateXY = (ctx: GTNParser.RotateXYContext): any => this.warn3D('PVXY'); // vu
  public visitRotateXZ = (ctx: GTNParser.RotateXZContext): any => this.warn3D('PVXZ'); // vu
  public visitRotateYZ = (ctx: GTNParser.RotateYZContext): any => this.warn3D('PVYZ'); // vu

  public visitCircle = (ctx: GTNParser.CircleContext): any => {
    this.logger.info(`Draw Circle r=${this.evaluateNumber(ctx.expr())}`);
    return null;
  };
  public visitArc = (ctx: GTNParser.ArcContext): any => {
    this.logger.info(
      `Draw Arc r=${this.evaluateNumber(ctx.expr(0)!)} a=${this.evaluateNumber(ctx.expr(1)!)}`
    );
    return null;
  };
  // public visitPoint = (ctx: GTNParser.PointContext): any => {
  //   this.renderer.drawLine(this.turtle.state, this.turtle.state.x, this.turtle.state.y);
  //   return null;
  // };

  public visitShowVar = (ctx: GTNParser.ShowVarContext): any => {};
  public visitManipulateGraph = (ctx: GTNParser.ManipulateGraphContext): any => this.warn3D('MG');

  public visitPlayMusic = (ctx: GTNParser.PlayMusicContext): any => this.warnAudio('PLAY');
  public visitScore = (ctx: GTNParser.ScoreContext): any => this.warnAudio('SCORE');
  public visitConcert = (ctx: GTNParser.ConcertContext): any => this.warnAudio('CONCERT');

  public visitExecute = (ctx: GTNParser.ExecuteContext): any => this.warn('EXEC');
  public visitUndo = (ctx: GTNParser.UndoContext): any => this.warn('UNDO');

  public visitAskFor = (ctx: GTNParser.AskForContext): any => {};
}
function toColor(cssColor: string): GTNColor {
  throw new Error('Function not implemented.');
}
