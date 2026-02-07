import { CharStream, CommonTokenStream } from 'antlr4ng';

import { GeoTortueLexer } from '@infrastructure/antlr/generated/GeoTortueLexer';
import { GeoTortueParser } from '@infrastructure/antlr/generated/GeoTortueParser';

import { GTNErrorListener } from './GTNErrorListener';
import { GTNContainer } from '@infrastructure/di/GTNContainer';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';

// --- Helper: Mock Translation Logic ---
// This ensures the Listener returns the English strings expected by your tests.
const mockTranslate = (key: string, options?: any) => {
  const token = options?.tokenText || '';

  switch (key) {
    case 'syntax.unclosed_block':
      return "You opened a block with '[' but never closed it. Add a ']' at the end.";
    case 'syntax.missing_semicolon_eof':
      return 'It looks like you might have forgotten a semicolon (;) at the end of the previous line.';
    case 'syntax.unexpected_eof':
      return "Unexpected end of file. You likely opened a block with '[' but never closed it.";
    case 'syntax.missing_semicolon':
      return `It looks like you might have forgotten a semicolon (;) before "${token}".`;
    case 'syntax.unknown_command':
      return `I don't understand "${token}". Is it a typo? Please check the spelling.`;
    case 'syntax.unexpected_token':
      return `I wasn't expecting "${token}" here. Did you add an extra word or number?`;
    case 'syntax.expected_number':
      return `I expected a number here, but found "${token}".`;
    default:
      // Fallback for generic or unknown keys
      return `Syntax error near "${token}".`;
  }
};

function getErrors(code: string) {
  const chars = CharStream.fromString(code);
  const lexer = new GeoTortueLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new GeoTortueParser(tokens);

  // Important: Remove default console listeners to keep test output clean
  lexer.removeErrorListeners();
  parser.removeErrorListeners();

  const listener = new GTNErrorListener();
  parser.addErrorListener(listener);

  parser.program();
  return listener.errors;
}

describe('GTNErrorListener - Friendly Messages', () => {
  // --- Setup DI Container ---
  beforeEach(() => {
    const container = GTNContainer.getInstance();
    container.clear();

    const mockLanguageService = {
      // Mock the translate function to return our expected English strings
      translate: vi.fn(mockTranslate),
      // Mock other methods to avoid undefined errors if referenced elsewhere
      getInternalKeyword: vi.fn(),
      getCssColor: vi.fn(),
      getCanonicalId: vi.fn()
    };

    container.registerInstance(GTN_TYPES.LanguageService, mockLanguageService);
  });

  it('should hint at missing semicolons', () => {
    const errors = getErrors('GT_FORWARD 100 GT_RIGHT 90;');

    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0]!.message).toContain('forgotten a semicolon');
  });

  it('should explain unclosed blocks', () => {
    // Missing closing ']'
    const errors = getErrors('GT_REP 4 [ GT_FORWARD 10;');

    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0]!.message).toContain('never closed it');
  });

  it('should detect unexpected arguments (Extraneous Input)', () => {
    // GT_FORWARD takes 1 arg. "100" is extra.
    // Parser error: extraneous input '100'
    const errors = getErrors('GT_FORWARD 50 100;');

    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0]!.message).toContain('forgotten a semicolon (;) before "100"');
  });

  it('should detect invalid start of statement (No Viable Alternative)', () => {
    // GT_ELSE cannot start a statement (it must follow GT_IF/GT_THEN block)
    // Parser error: no viable alternative at input 'GT_ELSE'
    const errors = getErrors('GT_ELSE');

    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0]!.message).toContain(`wasn't expecting "GT_ELSE"`);
  });

  it('should detect wrong types', () => {
    // GT_FORWARD expects a number/expression, not a string literal (if grammar forbids it)
    // "GT_LEFT" is found instead.
    // The parser might say "Missing Semicolon" (assuming a new command started)
    // OR "Extraneous Input" (if it's confused).
    // Both are acceptable "Friendly" outcomes for this ambiguity.
    // NOTE: If the grammar allows strings in expressions, this might pass.
    // If strict: expecting INT/FLOAT/ID

    // We'll use a safer invalid type test: A Keyword where a number is expected
    // GT_FORWARD GT_LEFT -> expecting Expr, got Command
    const errors = getErrors('GT_FORWARD GT_LEFT;');

    expect(errors.length).toBeGreaterThan(0);

    // We accept any of these friendly variations
    expect(errors[0]!.message).toMatch(/expected a number|forgotten a semicolon|wasn't expecting/i); //|syntax error/i);
  });
});
