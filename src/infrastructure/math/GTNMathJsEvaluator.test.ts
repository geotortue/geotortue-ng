import { MathEvaluatorMode } from '@domain/interfaces/IGTNMathEvaluator';

import { GTNMathJsEvaluator } from './GTNMathJsEvaluator';

describe('GTNMathJsEvaluator', () => {
  describe('evaluate', () => {
    it('evaluates plain arithmetic expressions', () => {
      const evaluator = new GTNMathJsEvaluator();

      expect(evaluator.evaluate('2 + 3 * 4', {})).toBe(14);
    });

    it('supports math.js functional prefix syntax', () => {
      const evaluator = new GTNMathJsEvaluator();

      expect(evaluator.evaluate('add(2, 3)', {})).toBe(5);
    });

    it('supports advanced math.js functions (trigo/arithmetic/probability/complex)', () => {
      const evaluator = new GTNMathJsEvaluator();

      expect(evaluator.evaluate('asin(0.5)', {})).toBeCloseTo(Math.PI / 6, 6);
      expect(evaluator.evaluate('factorial(5)', {})).toBe(120);
      expect(evaluator.evaluate('gcd(12, 18)', {})).toBe(6);
      expect(evaluator.evaluate('randomInt(1, 2)', {})).toBe(1);
      expect(evaluator.evaluate('re(complex(2, 3))', {})).toBe(2);
    });

    it('supports prefix syntax (S-expression style)', () => {
      const evaluator = new GTNMathJsEvaluator();

      expect(evaluator.evaluate('(+ 1 2 3)', {})).toBe(6);
      expect(evaluator.evaluate('(* :x (+ :y 2))', { x: 3, y: 4 })).toBe(18);
    });

    it('evaluates expressions using scope variables', () => {
      const evaluator = new GTNMathJsEvaluator();

      expect(evaluator.evaluate('taille + 8', { taille: 12 })).toBe(20);
    });

    it('converts variable names prefixed by colon (in Logo style) before evaluation', () => {
      const evaluator = new GTNMathJsEvaluator();

      expect(evaluator.evaluate('50 + :taille', { taille: 2 })).toBe(52);
    });

    it('converts multiple variable names "in the Logo style" in one expression', () => {
      const evaluator = new GTNMathJsEvaluator();

      expect(evaluator.evaluate(':x + :y + :z', { x: 1, y: 2, z: 3 })).toBe(6);
    });

    it('evaluates expressions using array-like access after normalization', () => {
      const evaluator = new GTNMathJsEvaluator();

      expect(evaluator.evaluate(':arr[2] + :x', { arr: [10, 20, 30], x: 1 })).toBe(21);
    });

    it('supports accented variable names in the Logo style', () => {
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

    it('returns true for strings starting with variable name "in the Logo style"', () => {
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
