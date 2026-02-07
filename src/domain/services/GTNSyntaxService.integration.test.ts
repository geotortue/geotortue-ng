import { describe, it, expect } from 'vitest';
import { GTNSyntaxService } from './GTNSyntaxService';
import { GeoTortueLexer } from '@infrastructure/antlr/generated/GeoTortueLexer';

describe('GTNSyntaxService Integration', () => {
  const service = new GTNSyntaxService();

  it('should generate a token style map from real grammar', () => {
    const map = service.getTokenStyleMap();
    expect(map).toBeInstanceOf(Map);
    expect(map.size).toBeGreaterThan(0);
  });

  it('should map primitive commands to "command" style', () => {
    const map = service.getTokenStyleMap();

    // Check known commands from the grammar
    expect(map.get(GeoTortueLexer.GT_FORWARD)).toBe('command');
    expect(map.get(GeoTortueLexer.GT_RIGHT)).toBe('command');
    expect(map.get(GeoTortueLexer.GT_PEN_UP)).toBe('command');
  });

  it('should map structure keywords to "keyword" style', () => {
    const map = service.getTokenStyleMap();

    expect(map.get(GeoTortueLexer.GT_WHILE)).toBe('keyword');
    expect(map.get(GeoTortueLexer.GT_IF)).toBe('keyword');
    expect(map.get(GeoTortueLexer.GT_REP)).toBe('keyword');
  });

  it('should map math operators to "operator" style', () => {
    const map = service.getTokenStyleMap();

    expect(map.get(GeoTortueLexer.GT_PLUS)).toBe('operator');
    expect(map.get(GeoTortueLexer.GT_MULT)).toBe('operator');
    expect(map.get(GeoTortueLexer.GT_EQ)).toBe('operator');
  });

  it('should include manually mapped tokens (numbers, strings, comments)', () => {
    const map = service.getTokenStyleMap();

    expect(map.get(GeoTortueLexer.GT_NUMBER)).toBe('number');
    expect(map.get(GeoTortueLexer.GT_STRING)).toBe('string');
    expect(map.get(GeoTortueLexer.GT_COMMENT)).toBe('comment');
    expect(map.get(GeoTortueLexer.GT_ID)).toBe('variable');
  });

  it('should cache the map after first generation', () => {
    // Call twice
    const map1 = service.getTokenStyleMap();
    const map2 = service.getTokenStyleMap();

    // Should be exactly the same object reference
    expect(map1).toBe(map2);
  });
});
