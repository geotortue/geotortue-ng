export class GTNExpressionAdapter {
  /**
   * Normalizes a GéoTortue expression into a math.js-friendly expression:
   * - Logo-style variables prefixed with ':' become plain identifiers.
   *   Ex.: "50 + :taille" -> "50 + taille"
   * - prefix syntax (S-expression style, e.g. "operator arg1 arg2 ...") is converted to infix/function syntax.
   */
  public normalize(expression: string): string {
    const withoutLogoPrefix = expression.replace(/:([a-zA-Z0-9_\u00C0-\u00FF]+)/g, '$1');
    return this.tryNormalizeSExpression(withoutLogoPrefix);
  }

  private tryNormalizeSExpression(expression: string): string {
    const trimmed = expression.trim();
    if (!trimmed.startsWith('(')) {
      return withoutOuterWhitespace(expression, trimmed);
    }

    const tokens = this.tokenize(trimmed);
    if (tokens.length < 1) {
      return withoutOuterWhitespace(expression, trimmed);
    }

    const parsed = this.parseSExpression(tokens);
    if (!parsed || parsed.nextIndex !== tokens.length) {
      return withoutOuterWhitespace(expression, trimmed);
    }

    return parsed.value;
  }

  private parseSExpression(
    tokens: string[],
    index: number = 0
  ): { value: string; nextIndex: number } | null {
    if (tokens[index] !== '(') {
      return { value: tokens[index]!, nextIndex: index + 1 };
    }

    const operatorToken = tokens[index + 1];
    if (!operatorToken || operatorToken === '(' || operatorToken === ')') {
      return null;
    }

    const args: string[] = [];
    let cursor = index + 2;

    while (cursor < tokens.length && tokens[cursor] !== ')') {
      const parsedArg = this.parseSExpression(tokens, cursor);
      if (!parsedArg) {
        return null;
      }
      args.push(parsedArg.value);
      cursor = parsedArg.nextIndex;
    }

    if (tokens[cursor] !== ')') {
      return null;
    }

    if (args.length === 0) {
      return null;
    }

    const value = this.toMathJs(operatorToken, args);
    return { value, nextIndex: cursor + 1 };
  }

  private toMathJs(operatorToken: string, args: string[]): string {
    const infixOperator =
      INFIX_OPERATORS[operatorToken] ?? INFIX_OPERATORS[operatorToken.toLowerCase()];

    if (infixOperator) {
      if (args.length === 1) {
        return `(${infixOperator}${args[0]})`;
      }
      return `(${args.join(` ${infixOperator} `)})`;
    }

    const fn = CANONICAL_FUNCTIONS[operatorToken.toLowerCase()] ?? operatorToken;
    return `${fn}(${args.join(', ')})`;
  }

  private tokenize(input: string): string[] {
    const matches = input.match(/\(|\)|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|[^\s()]+/g);
    return matches ?? [];
  }
}

const INFIX_OPERATORS: Record<string, string> = {
  '+': '+',
  '-': '-',
  '*': '*',
  '/': '/',
  '^': '^',
  '%': '%',
  mod: '%',
  '==': '==',
  '=': '==',
  '!=': '!=',
  '<': '<',
  '<=': '<=',
  '>': '>',
  '>=': '>=',
  '&&': '&&',
  '||': '||',
  '!': '!',
  and: '&&',
  or: '||',
  not: '!'
};

const CANONICAL_FUNCTIONS: Record<string, string> = {
  add: 'add',
  subtract: 'subtract',
  multiply: 'multiply',
  divide: 'divide',
  pow: 'pow'
};

function withoutOuterWhitespace(original: string, trimmed: string): string {
  return original === trimmed ? original : trimmed;
}
