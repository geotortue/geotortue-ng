import { GTNExpressionAdapter } from './GTNExpressionAdapter';

describe('GTNExpressionAdapter', () => {
  it('normalizes plain and accented Logo variables', () => {
    const adapter = new GTNExpressionAdapter();

    expect(adapter.normalize(':x + :élève')).toBe('x + élève');
  });

  it('keeps non variable colon usages untouched', () => {
    const adapter = new GTNExpressionAdapter();

    expect(adapter.normalize('a := 1; : + 2')).toBe('a := 1; : + 2');
  });

  it('normalizes S-expression style operators to infix syntax', () => {
    const adapter = new GTNExpressionAdapter();

    expect(adapter.normalize('(+ 1 2 3)')).toBe('(1 + 2 + 3)');
    expect(adapter.normalize('(* :x (+ :y 2))')).toBe('(x * (y + 2))');
  });

  it('normalizes S-expression style named functions to math.js calls', () => {
    const adapter = new GTNExpressionAdapter();

    expect(adapter.normalize('(max 1 2 3)')).toBe('max(1, 2, 3)');
    expect(adapter.normalize('(add 1 (pow 2 3))')).toBe('add(1, pow(2, 3))');
  });
});
