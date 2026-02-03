import { describe, it, expect, vi } from 'vitest';
import { TokenRefiner } from './TokenRefiner';
import { GeoTortueLexer } from '@infrastructure/antlr/generated/GeoTortueLexer';
import type { IGTNLanguageService } from '@domain/interfaces/IGTNLanguageService';
import { Token } from 'antlr4ng';

describe('TokenRefiner', () => {
  const mockLangService = {
    getCanonicalId: vi.fn((word: string) => {
      // Simulation: "AVANCE" maps to GT_FORWARD (ID 10 for example)
      // "DROITE" maps to GT_RIGHT (ID 11)
      if (word === 'AVANCE') return GeoTortueLexer.GT_FORWARD;
      if (word === 'DROITE') return GeoTortueLexer.GT_RIGHT;
      return undefined;
    })
  } as unknown as IGTNLanguageService;

  const tokenRefiner = new TokenRefiner(mockLangService);

  const createToken = (text: string, type: number): Token => {
    return {
      text,
      type,
      // Add other required Token properties as minimal mocks if needed
      channel: 0,
      tokenIndex: -1,
      line: 1,
      column: 0,
      start: 0,
      stop: 0,
      getInputStream: () => null
    } as unknown as Token;
  };

  it('should refine generic tokens into canonical command IDs', () => {
    // Input: [GT_WORD("AVANCE"), GT_WS, GT_WORD("DROITE")]
    const inputTokens = [
      createToken('AVANCE', GeoTortueLexer.GT_WORD),
      createToken(' ', GeoTortueLexer.GT_WS),
      createToken('DROITE', GeoTortueLexer.GT_WORD)
    ];

    // Act
    const refined = tokenRefiner.getRefinedTokens(() => inputTokens);

    // Assert
    // "AVANCE" should become GT_FORWARD
    expect(refined[0]!.type).toBe(GeoTortueLexer.GT_FORWARD);
    expect(mockLangService.getCanonicalId).toHaveBeenCalledWith('AVANCE');

    // Whitespace should remain unchanged
    expect(refined[1]!.type).toBe(GeoTortueLexer.GT_WS);

    // "DROITE" should become GT_RIGHT
    expect(refined[2]!.type).toBe(GeoTortueLexer.GT_RIGHT);
  });

  it('should leave unknown generic words unchanged', () => {
    // Input: [GT_WORD("UNKNOWN_FUNC")]
    const inputTokens = [createToken('UNKNOWN_FUNC', GeoTortueLexer.GT_WORD)];

    const refined = tokenRefiner.getRefinedTokens(() => inputTokens);

    // Should remain GT_WORD because getCanonicalId returns undefined
    expect(refined[0]!.type).toBe(GeoTortueLexer.GT_WORD);
    expect(mockLangService.getCanonicalId).toHaveBeenCalledWith('UNKNOWN_FUNC');
  });

  it('should ignore non-generic tokens (optimization)', () => {
    // Input: [GT_NUMBER("100")]
    const inputTokens = [createToken('100', GeoTortueLexer.GT_NUMBER)];

    const refined = tokenRefiner.getRefinedTokens(() => inputTokens);

    // Should NOT call the dictionary because GT_NUMBER is not "generic"
    expect(refined[0]!.type).toBe(GeoTortueLexer.GT_NUMBER);

    // Ensure we didn't waste resources checking the dictionary for a number
    expect(mockLangService.getCanonicalId).not.toHaveBeenCalledWith('100');
  });
});
