import { GTNContainer } from '@infrastructure/di/GTNContainer';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';
import { GTNExpressionAdapter } from '@infrastructure/math/GTNExpressionAdapter';
import { GTNSyntaxService } from './GTNSyntaxService';

describe('GTNSyntaxService.validate', () => {
  let service: GTNSyntaxService;

  beforeEach(() => {
    const container = GTNContainer.getInstance();
    container.clear();

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
      validate: (expression: string) => {
        if (expression.includes('^^')) {
          throw new Error('Value expected (char 4)');
        }
      }
    }));

    service = new GTNSyntaxService();
  });

  it('accepts Logo-style variables in syntax validation', () => {
    const errors = service.validate('GT_FORWARD :x;');

    expect(errors).toHaveLength(0);
  });

  it('reports math precheck errors after ANTLR parse succeeds', () => {
    const errors = service.validate('GT_FORWARD 1 ^^ 2;');

    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0]?.message).toContain('syntax.unexpected_token');
    expect(errors[0]?.technicalDetails).toBeTruthy();
  });
});
