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
});
