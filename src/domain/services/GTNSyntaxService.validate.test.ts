import { GTNContainer } from '@infrastructure/di/GTNContainer';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';
import { GTNExpressionAdapter } from '@infrastructure/math/GTNExpressionAdapter';

import { GTNSyntaxService } from './GTNSyntaxService';

describe('GTNSyntaxService.validate', () => {
  let service: GTNSyntaxService;
  let validateSpy: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    const container = GTNContainer.getInstance();
    container.clear();

    validateSpy = vi.fn((expression: string) => {
      if (expression.includes('^^')) {
        throw new Error('Value expected (char 4)');
      }
    });

    container.registerSingleton(
      GTN_TYPES.LanguageService,
      () =>
        ({
          canonicalizeScriptSync: (code: string) => code,
          translate: (key: string, params?: { tokenText?: string }) =>
            `${key}:${params?.tokenText ?? ''}`
        }) as any
    );

    container.registerSingleton(
      GTN_TYPES.ProcedureRegistry,
      () =>
        ({
          getAllNames: () => [],
          clear: () => {}
        }) as any
    );

    container.registerSingleton(GTN_TYPES.ExpressionAdapter, () => new GTNExpressionAdapter());
    container.registerSingleton(GTN_TYPES.MathExpressionValidator, () => ({
      validate: validateSpy
    }));

    service = new GTNSyntaxService();
  });

  it('runs math precheck right after ANTLR parse success', () => {
    const errors = service.validate('GT_FORWARD :x + 1;');

    expect(errors).toHaveLength(0);
    expect(validateSpy).toHaveBeenCalled();
    expect(validateSpy).toHaveBeenCalledWith('x+1');
  });

  it('does not run math precheck when ANTLR parse fails', () => {
    service.validate('GT_FORWARD :x + ;');

    expect(validateSpy).not.toHaveBeenCalled();
  });

  it('supports S-expression style math syntax', () => {
    const errors = service.validate('GT_FORWARD (+ 1 2);');

    expect(errors).toHaveLength(0);
  });

  it('supports both infix and functional prefix math syntax', () => {
    const infixErrors = service.validate('GT_FORWARD 1 + 2;');
    const prefixErrors = service.validate('GT_FORWARD add(1, 2);');

    expect(infixErrors).toHaveLength(0);
    expect(prefixErrors).toHaveLength(0);
  });

  it('reports math precheck errors after ANTLR parse succeeds', () => {
    const errors = service.validate('GT_FORWARD 1 ^^ 2;');

    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0]?.message).toContain('syntax.unexpected_token');
    expect(errors[0]?.technicalDetails).toBeTruthy();
  });
});
