export interface IGTNMathExpressionValidator {
  /**
   * Validates expression syntax and throws when invalid.
   */
  validate(expression: string): void;
}
