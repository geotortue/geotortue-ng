export enum MathEvaluatorMode {
  silent,
  log,
  error
}

/**
 * Contrat pour le moteur d'évaluation d'expressions mathématiques.
 * Remplace l'ancien JEP (Java Expression Parser).
 */
export interface IGTNMathEvaluator {
  /**
   * Évalue une expression mathématique (ex: "50 + :x * 2").
   * @param expression La chaîne à évaluer.
   * @param scope (Optionnel) Un dictionnaire de variables { x: 10, taille: 50 }.
   * @returns Le résultat numérique (ou booléen/string selon le cas).
   */
  evaluate(expression: string, scope?: Record<string, any>, silent?: MathEvaluatorMode): any;

  /**
   * Vérifie si une chaîne semble être une expression mathématique
   * (Utile pour savoir si l'interpréteur doit l'évaluer ou la traiter comme un mot).
   */
  isExpression(text: string): boolean;
}
