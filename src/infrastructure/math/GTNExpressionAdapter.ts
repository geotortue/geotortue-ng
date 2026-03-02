export class GTNExpressionAdapter {
  /**
   * Normalizes a GeoTortue expression into a math.js-friendly expression.
   * Current rule: Logo-style variables prefixed with ':' become plain identifiers.
   *  Ex.: "50 + :taille" -> "50 + taille"
   */
  public normalize(expression: string): string {
    return expression.replace(/:([a-zA-Z0-9_\u00C0-\u00FF]+)/g, '$1');
  }
}
