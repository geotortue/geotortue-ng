import { GTNMathJsExpressionValidator } from './GTNMathJsExpressionValidator';

describe('GTNMathJsExpressionValidator', () => {
  it('accepts valid math expressions', () => {
    const validator = new GTNMathJsExpressionValidator();

    expect(() => validator.validate('2 + 3 * 4')).not.toThrow();
  });

  it('throws on invalid math expressions', () => {
    const validator = new GTNMathJsExpressionValidator();

    expect(() => validator.validate('1 ^^ 2')).toThrow();
  });
});
