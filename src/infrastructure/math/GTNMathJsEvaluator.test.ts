import { MathEvaluatorMode } from '@domain/interfaces/IGTNMathEvaluator';

import { GTNMathJsEvaluator } from './GTNMathJsEvaluator';

describe('GTNMathJsEvaluator', () => {
  describe('evaluate', () => {
    it('evaluates plain arithmetic expressions', () => {
      const evaluator = new GTNMathJsEvaluator();

      expect(evaluator.evaluate('2 + 3 * 4', {})).toBe(14);
    });

    it('evaluates expressions using scope variables', () => {
      const evaluator = new GTNMathJsEvaluator();

      expect(evaluator.evaluate('taille + 8', { taille: 12 })).toBe(20);
    });

    it('converts Logo variables prefixed by colon before evaluation', () => {
      const evaluator = new GTNMathJsEvaluator();

      expect(evaluator.evaluate('50 + :taille', { taille: 2 })).toBe(52);
    });

    it('converts multiple Logo variables in one expression', () => {
      const evaluator = new GTNMathJsEvaluator();

      expect(evaluator.evaluate(':x + :y + :z', { x: 1, y: 2, z: 3 })).toBe(6);
    });

    it('supports accented variable names in Logo syntax', () => {
      const evaluator = new GTNMathJsEvaluator();

      expect(evaluator.evaluate(':tâille + 1', { tâille: 41 })).toBe(42);
    });

    it('returns 0 in silent mode when expression is invalid', () => {
      const evaluator = new GTNMathJsEvaluator();

      expect(evaluator.evaluate('2 + (')).toBe(0);
    });

    it('logs a warning in log mode when expression is invalid', () => {
      const evaluator = new GTNMathJsEvaluator();
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => undefined);

      const value = evaluator.evaluate('2 + (', {}, MathEvaluatorMode.log);

      expect(value).toBe(0);
      expect(warnSpy).toHaveBeenCalledTimes(1);
      expect(warnSpy.mock.calls[0]?.[0]).toContain('Mathematical evaluation error');

      warnSpy.mockRestore();
    });

    it('rethrows errors in error mode when expression is invalid', () => {
      const evaluator = new GTNMathJsEvaluator();

      expect(() => evaluator.evaluate('2 + (', {}, MathEvaluatorMode.error)).toThrow();
    });
  });

  describe('isExpression', () => {
    it('returns true for strings containing arithmetic operators', () => {
      const evaluator = new GTNMathJsEvaluator();

      expect(evaluator.isExpression('3+4')).toBe(true);
      expect(evaluator.isExpression('a*b')).toBe(true);
      expect(evaluator.isExpression('1^2')).toBe(true);
    });

    it('returns true for strings starting with a Logo variable', () => {
      const evaluator = new GTNMathJsEvaluator();

      expect(evaluator.isExpression(':x')).toBe(true);
      expect(evaluator.isExpression('   :taille')).toBe(true);
    });

    it('returns false for plain words without math operators', () => {
      const evaluator = new GTNMathJsEvaluator();

      expect(evaluator.isExpression('avance')).toBe(false);
      expect(evaluator.isExpression('rouge')).toBe(false);
    });
  });
});
