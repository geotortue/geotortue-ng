import { all, create, type MathJsInstance } from 'mathjs';

import type { IGTNMathExpressionValidator } from '@domain/interfaces/IGTNMathExpressionValidator';

export class GTNMathJsExpressionValidator implements IGTNMathExpressionValidator {
  private readonly math: MathJsInstance;

  constructor() {
    this.math = create(all!, { number: 'number', precision: 14 });
  }

  public validate(expression: string): void {
    this.math.parse(expression);
  }
}
