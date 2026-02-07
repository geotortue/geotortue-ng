import { GTNInterpreter } from './GTNInterpreter';
import type { IGTNTurtleRepository } from '@domain/interfaces/IGTNTurtleRepository';
import type { IGTNLanguageService } from '@domain/interfaces/IGTNLanguageService';
import type { GTNTurtle } from '@domain/entities/GTNTurtle';

// DI Imports
import { GTNContainer } from '@infrastructure/di/GTNContainer';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';

describe('GTNInterpreter Integration', () => {
  let interpreter: GTNInterpreter;
  let mockTurtle: GTNTurtle;
  let mockRepo: IGTNTurtleRepository;
  let mockLangService: IGTNLanguageService;

  beforeEach(() => {
    // --- 1. Setup DI Container for the Visitor ---
    // The Visitor creates itself inside the Interpreter and asks the Container for MathEvaluator.
    // A mock must be provided to prevent the "No service registered" error.
    const container = GTNContainer.getInstance();

    // Reset/Clear container to ensure clean state
    container.clear();

    // 1-1. Logger (Required by GTNExecutionVisitor) ---
    // [NEW] Added this block to fix your specific error
    const mockLogger = {
      info: vi.fn(),
      warn: vi.fn(),
      error: vi.fn(),
      debug: vi.fn()
    };
    container.registerInstance(GTN_TYPES.Logger, mockLogger);

    // 1-2. Mock the MathEvaluator (Required by GTNExecutionVisitor)
    const mockMathEvaluator = {
      evaluate: vi.fn((expr: string) => {
        // Simple mock: if expr is "100", return 100.
        // For localized colors like "rouge", it returns string "rouge" (as handled in previous steps)
        const num = parseFloat(expr);
        return isNaN(num) ? expr : num;
      })
    };

    container.registerSingleton(GTN_TYPES.MathEvaluator, () => mockMathEvaluator);

    // 1-3. Mock the Language Service (Simulating Localization)
    mockLangService = {
      // Used by TokenRefiner / Interpreter.canonicalize
      getInternalKeyword: vi.fn((word: string) => {
        const map: Record<string, string> = {
          AVANCE: 'GT_FORWARD',
          AV: 'GT_FORWARD',
          DROITE: 'GT_RIGHT',
          TD: 'GT_RIGHT',
          REP: 'GT_REP',
          CRAYON: 'GT_PEN_COLOR'
        };
        return map[word.toUpperCase()];
      }),
      // Used by Visitor.visitSetColor
      getCssColor: vi.fn((color) => {
        // Visitor needs this to convert "ROUGE" -> "red"
        const colors: Record<string, string> = { ROUGE: 'red', BLEU: 'blue' };
        return colors[color.toUpperCase()];
      }),
      // Used by TokenRefiner if present
      getCanonicalId: vi.fn()
    } as unknown as IGTNLanguageService;

    container.registerSingleton(GTN_TYPES.LanguageService, () => mockLangService);

    // --- 2. Mock Domain Objects ---
    // Mock the GTNTurtle (Target of execution)
    // Create a mock object that matches the public API of GTNTurtle used by the visitor.
    mockTurtle = {
      forward: vi.fn(),
      backward: vi.fn(),
      right: vi.fn(),
      left: vi.fn(),
      setPenColor: vi.fn(),
      setPenSize: vi.fn(),
      penUp: vi.fn(),
      penDown: vi.fn(),
      state: {},
      penState: {}
    } as unknown as GTNTurtle;

    // 3. Mock the Repository
    mockRepo = {
      // The visitor retrieves turtles via getAll() to broadcast commands
      getAll: vi.fn().mockReturnValue([mockTurtle]),
      getTurtle: vi.fn().mockReturnValue(mockTurtle),
      addTurtle: vi.fn(),
      clear: vi.fn(),
      reset: vi.fn(), // Required by visitProgram
      clearAllLines: vi.fn() // Required by visitClearGraphics
    } as unknown as IGTNTurtleRepository;

    // 4. Instantiate Interpreter
    // Even though we pass mockLangService here, the Visitor created INSIDE will look in the Container.
    interpreter = new GTNInterpreter(mockRepo, mockLangService);
  });

  // Cleanup
  afterEach(() => {
    // Optional: Clear container logic
  });

  it('should execute a simple localized command (AVANCE -> GT_FORWARD)', async () => {
    // Input is French "AVANCE"
    await interpreter.execute('AVANCE 100;');

    // The interpreter refines/canonicalizes "AVANCE" to "GT_FORWARD"
    // The Visitor invokes turtle.forward(100)
    expect(mockTurtle.forward).toHaveBeenCalledWith(100);
  });

  it('should handle alias commands (TD -> GT_RIGHT)', async () => {
    await interpreter.execute('TD 90;');
    expect(mockTurtle.right).toHaveBeenCalledWith(90);
  });

  it('should execute a loop structure (REP -> GT_REP)', async () => {
    // REP 2 [ AV 50 ]
    const script = `
      REP 2 [
        AV 50;
      ]
    `;

    await interpreter.execute(script);

    // Should call forward(50) twice
    expect(mockTurtle.forward).toHaveBeenCalledTimes(2);
    expect(mockTurtle.forward).toHaveBeenCalledWith(50);
  });

  /* ATM, the only named colors taken in account are those defined here:
   * [GéoTortue - Crayon : choisir la couleur du crayon](http://geotortue.free.fr/index.php?page=aide_index#crayon)
   */
  it('should resolve localized colors (CRAYON "ROUGE" -> red)', async () => {
    // 1. Interpreter sees "CRAYON", maps to GT_PEN_COLOR token/keyword
    // 2. Visitor executes SetColor
    // 3. Visitor calls languageService.getCssColor("ROUGE") -> "red"
    // 4. Visitor calls turtle.setPenColor("red")

    // Note: known colors should be allowed with or without quotes
    await interpreter.execute('CRAYON "ROUGE";');
    expect(mockTurtle.setPenColor).toHaveBeenCalledWith('red');

    await interpreter.execute('CRAYON ROUGE;');
    expect(mockTurtle.setPenColor).toHaveBeenCalledWith('red');
  });

  it('should ignore empty scripts', async () => {
    await interpreter.execute('   ');
    expect(mockTurtle.forward).not.toHaveBeenCalled();
  });

  it('should throw syntax errors for invalid code', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    const invalidScript = 'AVANCE 100 ['; // Missing closing bracket

    await expect(interpreter.execute(invalidScript)).rejects.toThrow(/Syntax Error/);

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('mismatched input'));

    consoleSpy.mockRestore();
  });
});
