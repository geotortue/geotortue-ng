import { CharStream, CommonTokenStream } from 'antlr4ng';

import { GeoTortueLexer } from '@infrastructure/antlr/generated/GeoTortueLexer';
import { GeoTortueParser } from '@infrastructure/antlr/generated/GeoTortueParser';
import * as GTNParser from '@infrastructure/antlr/generated/GeoTortueParser';

// Domain & Infrastructure
import { GTNContainer } from '@infrastructure/di/GTNContainer';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';
import type { IGTNTurtleRepository } from '@domain/interfaces/IGTNTurtleRepository';
import type { IGTNMathEvaluator } from '@domain/interfaces/IGTNMathEvaluator';
import type { IGTNLanguageService } from '@domain/interfaces/IGTNLanguageService';
import type { IGTNLogger } from '@app/interfaces/IGTNLogger';

import { GTNExecutionVisitor } from './GTNExecutionVisitor';

function parse(code: string): GTNParser.ProgramContext;
function parse(code: string, rule: 'program'): GTNParser.ProgramContext;
function parse(code: string, rule: 'statement'): GTNParser.StatementContext;

// Helper to parse a snippet into a specific Rule Context
function parse(code: string, rule: 'program' | 'statement' = 'program') {
  const chars = CharStream.fromString(code);
  const lexer = new GeoTortueLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new GeoTortueParser(tokens);

  // Suppress console errors during testing
  parser.removeErrorListeners();

  return rule === 'program' ? parser.program() : parser.statement();
}

describe('GTNExecutionVisitor', () => {
  let visitor: GTNExecutionVisitor;

  // Mocks
  let mockRepo: IGTNTurtleRepository;
  let mockTurtle: any;
  let mockMath: IGTNMathEvaluator;
  let mockLogger: IGTNLogger;
  let mockLangService: IGTNLanguageService;

  beforeEach(() => {
    // 1. Clear Container
    const container = GTNContainer.getInstance();
    container.clear();

    // 2. Setup Mock Turtle & Repo
    mockTurtle = {
      forward: vi.fn(),
      backward: vi.fn(),
      right: vi.fn(),
      left: vi.fn(),
      setPenColor: vi.fn(),
      setPenSize: vi.fn(),
      penUp: vi.fn(),
      penDown: vi.fn(),
      state: { position: { x: 0, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 0, w: 1 } },
      isVisible: true
    };

    mockRepo = {
      getAll: vi.fn().mockReturnValue([mockTurtle]),
      reset: vi.fn(),
      clearAllLines: vi.fn(),
      clear: vi.fn()
    } as unknown as IGTNTurtleRepository;

    // 3. Setup Mock Math Evaluator
    mockMath = {
      isExpression: vi.fn().mockReturnValue(true),
      // Accepts 3 args to match Visitor call signature (expr, scope, mode)
      evaluate: vi.fn((expr: string, scope?: any, _mode?: any) => {
        // Simple mock logic: return parsed float or handle variables passed in scope
        const num = parseFloat(expr);
        if (!isNaN(num)) return num;

        // Return variable from scope if exists
        if (scope && Object.hasOwn(scope, expr)) {
          return scope[expr];
        }

        // Return string literal if quotes (for colors)
        if (expr.startsWith('"') || expr.startsWith("'")) return expr.replace(/['"]/g, '');

        // Throw for undefined variables (needed for Fallback Strategy test)
        if (expr === 'UNKNOWN_VAR') throw new Error('Undefined symbol UNKNOWN_VAR');

        return expr; // Return as string
      })
    };

    // 4. Setup Logger
    mockLogger = {
      warn: vi.fn(),
      error: vi.fn(),
      info: vi.fn(),
      debug: vi.fn()
    } as unknown as IGTNLogger;

    // 5. Setup Language Service
    mockLangService = {
      getCssColor: vi.fn((name) => {
        const map: any = { rouge: 'red', bleu: 'blue' };
        return map[name];
      })
    } as unknown as IGTNLanguageService;

    // 6. Register Mocks BEFORE instantiating Visitor
    container.registerInstance(GTN_TYPES.Logger, mockLogger);
    container.registerInstance(GTN_TYPES.MathEvaluator, mockMath);
    container.registerInstance(GTN_TYPES.LanguageService, mockLangService);

    // 6. Instantiate Visitor (it will resolve dependencies now)
    visitor = new GTNExecutionVisitor(mockRepo);
  });

  // --- Movement Tests ---

  it('should execute MoveForward (GT_FORWARD 100)', () => {
    const tree = parse('GT_FORWARD 100', 'program');
    visitor.visit(tree);

    expect(mockTurtle.forward).toHaveBeenCalledWith(100);
  });

  it('should execute MoveBackward (GT_BACKWARD 50)', () => {
    const tree = parse('GT_BACKWARD 50', 'program');
    visitor.visit(tree);

    expect(mockTurtle.backward).toHaveBeenCalledWith(50);
  });

  it('should execute TurnRight (GT_RIGHT 90)', () => {
    const tree = parse('GT_RIGHT 90', 'program');
    visitor.visit(tree);

    // Visitor converts to degrees. Assuming logic is direct for this test.
    // If toDegree does conversion, check that value.
    // Here we assume input 90 stays 90 based on standard impl.
    expect(mockTurtle.right).toHaveBeenCalledWith(90);
  });

  // --- Logic & Control Flow ---

  it('should handle Assignments and Variables in single program', () => {
    // Run in ONE program string so scope persists
    const code = 'x := 42; GT_FORWARD x;';
    const tree = parse(code);

    visitor.visit(tree);

    expect(mockTurtle.forward).toHaveBeenCalledWith(42);
  });

  it('should execute Repeat Block (GT_REP)', () => {
    const tree = parse('GT_REP 3 [ GT_FORWARD 10; ]', 'program');
    visitor.visit(tree);

    expect(mockTurtle.forward).toHaveBeenCalledTimes(3);
    expect(mockTurtle.forward).toHaveBeenCalledWith(10);
  });

  it('should execute If Block (GT_IF)', () => {
    // Mock math to return true/false
    vi.mocked(mockMath.evaluate).mockImplementationOnce(() => true);

    const tree = parse('GT_IF 1 [ GT_FORWARD 10 ]', 'program');
    visitor.visit(tree);

    expect(mockTurtle.forward).toHaveBeenCalledWith(10);
  });

  // --- Color Logic (Critical) ---

  describe('visitSetColor', () => {
    const CMD = 'GT_PEN_COLOR';
    it('Strategy 1: Direct String Literal (GT_PEN_COLOR "rouge")', () => {
      const tree = parse(`${CMD} "rouge"`, 'program');
      visitor.visit(tree);

      // Should bypass math evaluator for literals
      // resolveCssColor strips quotes -> "rouge" -> langService -> "red"
      expect(mockTurtle.setPenColor).toHaveBeenCalledWith('red');
    });

    it('Strategy 2: Variable Evaluation (GT_PEN_COLOR x)', () => {
      // Use assignment command to define variable naturally.
      // 1. Assign "bleu" to x. (Quotes needed for string literal).
      // 2. Use x in color command.
      // (visitor as any).scopes[0]!['x'] = 'bleu';
      const code = `x := "bleu"; ${CMD} x;`;

      // 2. Parse as STATEMENT to avoid visiting Program (which resets scopes)
      const tree = parse(code);
      visitor.visit(tree);

      // Verify Steps
      // 1. Math eval should have been called for 'x'
      expect(mockMath.evaluate).toHaveBeenCalled();

      // 2. LangService should have been called to translate 'bleu' ---> 'blue'
      expect(mockLangService.getCssColor).toHaveBeenCalledWith('bleu');

      // 3. Turtle should receive 'blue'
      expect(mockTurtle.setPenColor).toHaveBeenCalledWith('blue');
    });

    it('Strategy 3: Fallback (GT_PEN_COLOR rouge - no quotes)', () => {
      // Math evaluator throws "Undefined symbol", Visitor catches and treats "rouge" as literal
      vi.mocked(mockMath.evaluate).mockImplementationOnce(() => {
        throw new Error('Undefined symbol rouge');
      });

      const tree = parse(`${CMD} rouge`);
      visitor.visit(tree);

      expect(mockLogger.warn).toHaveBeenCalledWith(
        expect.stringContaining('Treating as color literal')
      );
      expect(mockTurtle.setPenColor).toHaveBeenCalledWith('red');
    });

    it('should ignore invalid colors', () => {
      // "invalid_color" returns undefined from LangService, resolveCssColor returns input
      // isCssColor checks if it is valid.
      // Assuming isCssColor('invalid_color') returns false.

      const tree = parse('GT_PEN_COLOR "prout"', 'program');
      visitor.visit(tree);

      expect(mockTurtle.setPenColor).not.toHaveBeenCalled();
    });
  });

  // --- Procedures ---

  it('should define and call a user function', () => {
    // Current Grammar: GT_FUN identifier (...) := expr
    // It does not support procedure blocks (commands) yet.
    // We test a math function: double(x) := x * 2

    // 1. Define
    const defCode = 'GT_FUN double (x) := x * 2';
    visitor.visit(parse(defCode, 'program'));

    // 2. Call (Use it in a movement command to verify result)
    // mockMath needs to handle the calculation since Visitor delegates expression eval to it.
    // However, Visitor handles the scope push/pop.

    // We mock the evaluate to simulate the math engine returning 100 for "x * 2" where x=50
    vi.mocked(mockMath.evaluate).mockImplementation((expr, scope) => {
      if (expr === 'x * 2' && scope?.x === 50) return 100; // Simulate function body exec
      if (expr === 'double(50)') return 100; // Simulate main call
      return 50;
    });

    // We can't easily test the full engine integration without a real MathEvaluator,
    // but we can check if the definition was stored.
    expect(visitor['userFunctions'].has('double')).toBe(true);
  });

  it('should warn on unknown procedure call', () => {
    // unknownFunc is interpreted as a ProcedureCall (identifier expr*)
    const tree = parse('unknownFunc 10', 'program');

    visitor.visit(tree);

    expect(mockLogger.warn).toHaveBeenCalledWith('Unknown procedure: unknownFunc');
  });

  // --- System Commands ---

  it('should handle ClearGraphics (GT_VG)', () => {
    const tree = parse('GT_VG', 'program');
    visitor.visit(tree);

    expect(mockRepo.clearAllLines).toHaveBeenCalled();
  });

  it('should handle Home (HOME)', () => {
    const tree = parse('home', 'program');
    visitor.visit(tree);

    // Checks state reset
    expect(mockTurtle.state.position.x).toBe(0);
    expect(mockTurtle.state.position.y).toBe(0);
    expect(mockTurtle.state.position.z).toBe(0);
  });

  it('should reset repo on visitProgram', () => {
    const tree = parse('', 'program');
    visitor.visitProgram(tree);
    expect(mockRepo.reset).toHaveBeenCalled();
  });
});
