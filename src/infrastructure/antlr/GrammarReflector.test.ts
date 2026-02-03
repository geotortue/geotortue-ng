import { describe, it, expect } from 'vitest';
import { GrammarReflector } from './GrammarReflector';
import { GeoTortueParser } from './generated/GeoTortueParser';
import { GeoTortueLexer } from './generated/GeoTortueLexer';

describe('GrammarReflector', () => {
  const reflector = new GrammarReflector(GeoTortueParser);

  it('should extract command tokens from RULE_primitive', () => {
    const tokens = reflector.getTokenIdsForRule(GeoTortueParser.RULE_primitive);

    // Check for a few known commands
    expect(tokens.has(GeoTortueLexer.GT_FORWARD)).toBe(true);
    expect(tokens.has(GeoTortueLexer.GT_RIGHT)).toBe(true);
    expect(tokens.has(GeoTortueLexer.GT_PEN_UP)).toBe(true);

    // Ensure it does NOT contain tokens from other rules (like operators)
    expect(tokens.has(GeoTortueLexer.GT_PLUS)).toBe(false);
  });

  it('should extract operator tokens from RULE_expr', () => {
    const tokens = reflector.getTokenIdsForRule(GeoTortueParser.RULE_expr);

    expect(tokens.has(GeoTortueLexer.GT_PLUS)).toBe(true);
    expect(tokens.has(GeoTortueLexer.GT_MULT)).toBe(true);

    // Should not contain commands
    expect(tokens.has(GeoTortueLexer.GT_FORWARD)).toBe(false);
  });
});
