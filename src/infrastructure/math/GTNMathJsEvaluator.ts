import { create, all, type MathJsInstance } from 'mathjs';

import { type IGTNMathEvaluator, MathEvaluatorMode } from '@domain/interfaces/IGTNMathEvaluator';
import { GTNExpressionAdapter } from './GTNExpressionAdapter';

export class GTNMathJsEvaluator implements IGTNMathEvaluator {
  private readonly math: MathJsInstance;
  private readonly expressionAdapter: GTNExpressionAdapter;

  constructor() {
    // Initialization of mathjs with all the functions
    this.math = create(all!, {
      number: 'number', // Native JavaScript numbers are preferred over BigNumbers for graphical performance.
      precision: 14
    });

    // GeoTortue-specific configuration (optional)
    // For example, if we wanted sin/cos to take degrees instead of the default radians
    // This would be configured here via custom function imports.
    this.expressionAdapter = new GTNExpressionAdapter();
  }

  public evaluate(
    expression: string,
    scope?: Record<string, any>,
    silent = MathEvaluatorMode.silent
  ): any {
    try {
      // 1. Pré-traitement : Conversion Syntaxe Logo -> MathJS
      // ":variable" becomes "variable"
      const cleanExpr = this.expressionAdapter.normalize(expression);

      // 2. Secure execution
      return this.math.evaluate(cleanExpr, scope);
    } catch (error) {
      if (silent === MathEvaluatorMode.log) {
        console.warn(`Mathematical evaluation error for"${expression}":`, error);
      }
      if (silent === MathEvaluatorMode.error) {
        throw error;
      }
      return 0; // Ou relancer l'erreur selon la stratégie de gestion d'erreur choisie
    }
  }

  public isExpression(text: string): boolean {
    // Heuristique simple : contient des opérateurs mathématiques ou commence par une variable
    // return /[\+\-\*\/\^=<>!]|^\s*:[a-zA-Z]/.test(text);
    return /[+\-*/^=<>!]|^\s*:[a-zA-Z]/.test(text);
  }
}
