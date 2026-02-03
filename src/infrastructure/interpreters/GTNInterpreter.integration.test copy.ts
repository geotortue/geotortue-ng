import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
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
    // 1. Clean the Container
    const container = GTNContainer.getInstance();
    container.clear();

    // --- MOCKS SETUP (Logger, MathEvaluator, LanguageService) ---
    // (Same as before)
    const mockLogger = { info: vi.fn(), warn: vi.fn(), error: vi.fn(), debug: vi.fn() };
    container.registerInstance(GTN_TYPES.Logger, mockLogger);

    const mockMathEvaluator = {
      evaluate: vi.fn((expr: string) => {
        const num = parseFloat(expr);
        return isNaN(num) ? expr : num;
      })
    };
    container.registerInstance(GTN_TYPES.MathEvaluator, mockMathEvaluator);

    mockLangService = {
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
      getCssColor: vi.fn((color) => {
        const colors: Record<string, string> = { ROUGE: 'red', BLEU: 'blue' };
        return colors[color.toUpperCase()];
      }),
      getCanonicalId: vi.fn()
    } as unknown as IGTNLanguageService;
    container.registerInstance(GTN_TYPES.LanguageService, mockLangService);

    // --- MOCK DOMAIN OBJECTS ---
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

    // *** FIX IS HERE ***
    mockRepo = {
      getAll: vi.fn().mockReturnValue([mockTurtle]),
      getTurtle: vi.fn().mockReturnValue(mockTurtle),
      addTurtle: vi.fn(),
      clear: vi.fn(),

      // ADD THESE METHODS needed by GTNExecutionVisitor.visitProgram / visitClearGraphics
      reset: vi.fn(),
      clearAllLines: vi.fn()
    } as unknown as IGTNTurtleRepository;

    interpreter = new GTNInterpreter(mockRepo, mockLangService);
  });

  afterEach(() => {
    // Optional cleanup
  });

  // ... (Rest of your tests remain unchanged)

  it('should execute a simple localized command (AVANCE -> GT_FORWARD)', async () => {
    await interpreter.execute('AVANCE 100;');
    expect(mockTurtle.forward).toHaveBeenCalledWith(100);
  });

  it('should handle alias commands (TD -> GT_RIGHT)', async () => {
    await interpreter.execute('TD 90;');
    expect(mockTurtle.right).toHaveBeenCalledWith(90);
  });

  it('should execute a loop structure (REP -> GT_REP)', async () => {
    const script = `
      REP 2 [
        AV 50;
      ]
    `;
    await interpreter.execute(script);
    expect(mockTurtle.forward).toHaveBeenCalledTimes(2);
    expect(mockTurtle.forward).toHaveBeenCalledWith(50);
  });

  it('should resolve localized colors (CRAYON "ROUGE" -> red)', async () => {
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
    const invalidScript = 'AVANCE 100 [';
    await expect(interpreter.execute(invalidScript)).rejects.toThrow(/Syntax Error/);
  });
});
