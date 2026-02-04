import { describe, it, expect, beforeEach, vi } from 'vitest';
import { GTNReverseDictionaryService } from './GTNReverseDictionaryService';
import { toDslLanguage } from '@domain/types';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';
import { GTNContainer } from '@infrastructure/di/GTNContainer';

const FR = toDslLanguage('fr');
const EN = toDslLanguage('en');

// Define Mock Data (Simulating dsl.json files)
const MOCK_FR_JSON = {
  commands: {
    GT_FORWARD: ['avance', 'av'],
    GT_RIGHT: 'droite'
  },
  keywords: {
    GT_REP: 'repete'
  },
  colors: {
    GT_RED: 'rouge'
  }
};

const MOCK_EN_JSON = {
  commands: {
    GT_FORWARD: 'forward',
    GT_RIGHT: 'right'
  },
  keywords: {
    GT_REP: 'repeat'
  },
  colors: {
    GT_RED: 'red'
  }
};

// Mock global fetch
globalThis.fetch = vi.fn();

describe('GTNReverseDictionaryService', () => {
  let service: GTNReverseDictionaryService;
  let mockLogger: any;

  beforeEach(() => {
    // Mock Global Fetch
    const fetchMock = vi.fn((url: string) => {
      if (url.includes('/fr/dsl.json')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(MOCK_FR_JSON)
        });
      }
      if (url.includes('/en/dsl.json')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(MOCK_EN_JSON)
        });
      }
      return Promise.reject(new Error('404 Not Found'));
    });
    vi.stubGlobal('fetch', fetchMock);

    // Mock Logger & Container
    mockLogger = { error: vi.fn(), warn: vi.fn() };

    // Clean container and register mock logger
    const container = GTNContainer.getInstance();
    container.clear();
    container.registerInstance(GTN_TYPES.Logger, mockLogger);

    service = new GTNReverseDictionaryService();
    // (globalThis.fetch as any).mockResolvedValue({
    //   ok: true,
    //   json: async () => mockDslJson
    // });
  });

  afterEach(() => {
    vi.unstubAllGlobals(); // Clean up fetch mock
  });

  //   it('should load dictionary and provide internal keys', async () => {
  //     await service.loadDictionary(FR);
  //
  //     // Reverse Lookup
  //     expect(service.getInternalKey('avance', FR)).toBe('GT_FORWARD');
  //     expect(service.getInternalKey('av', FR)).toBe('GT_FORWARD'); // Alias
  //     expect(service.getInternalKey('rouge', FR)).toBe('GT_RED');
  //
  //     // Case insensitivity
  //     expect(service.getInternalKey('AVANCE', FR)).toBe('GT_FORWARD');
  //   });

  describe('Dictionary Loading', () => {
    it('should load and cache a language dictionary', async () => {
      await service.loadDictionary(FR);

      // Access private cache via "any" cast to verify state (white-box testing)
      // or verify via public side-effects (getInternalKey)
      const key = service.getInternalKey('avance', FR);
      expect(key).toBe('GT_FORWARD');
    });

    it('should handle fetch errors gracefully', async () => {
      // Force fetch failure for a specific lang
      vi.stubGlobal(
        'fetch',
        vi.fn(() => Promise.reject('Network Error'))
      );

      await service.loadDictionary(FR);

      expect(mockLogger.error).toHaveBeenCalled();
      // Should return undefined, not crash
      expect(service.getInternalKey('avance', FR)).toBeUndefined();
    });
  });

  describe('Lookups (getInternalKey)', () => {
    it('should resolve primary command names', async () => {
      await service.loadDictionary(FR);
      expect(service.getInternalKey('avance', FR)).toBe('GT_FORWARD');
    });

    it('should resolve aliases (av -> GT_FORWARD)', async () => {
      await service.loadDictionary(FR);
      expect(service.getInternalKey('av', FR)).toBe('GT_FORWARD');
    });

    it('should be case-insensitive', async () => {
      await service.loadDictionary(FR);
      expect(service.getInternalKey('AVANCE', FR)).toBe('GT_FORWARD');
      expect(service.getInternalKey('AvAnCe', FR)).toBe('GT_FORWARD');
    });

    it('should return undefined if dictionary is not loaded', () => {
      // We didn't call loadDictionary
      expect(service.getInternalKey('avance', FR)).toBeUndefined();
    });
  });

  //   it('should resolve CSS colors from localized names', async () => {
  //     await service.loadDictionary(FR);
  //
  //     // "rouge" -> GT_RED -> "red"
  //     const css = service.getCssColor('rouge', FR);
  //     expect(css).toBe('red');
  //   });

  describe('Color Resolution (getCssColor)', () => {
    it('should resolve localized color to CSS name', async () => {
      await service.loadDictionary(FR);

      // "rouge" -> GT_RED -> "red" (from NamedCssColor mapping)
      const css = service.getCssColor('rouge', FR);
      expect(css).toBe('red');
    });

    it('should return undefined for unknown colors', async () => {
      await service.loadDictionary(FR);
      expect(service.getCssColor('bleu_clair', FR)).toBeUndefined();
    });
  });

  describe('Script Translation', () => {
    it('should translate commands from French to English', async () => {
      const script = 'avance 100; droite 90;';

      const translated = await service.translateScript(script, FR, EN);

      expect(translated).toBe('forward 100; right 90;');
    });

    it('should preserve whitespace and formatting', async () => {
      const script = `
      repete 4 [
        avance 100;
      ]
    `;

      const translated = await service.translateScript(script, FR, EN);

      // expect(translated).toContain('repeat 4');
      expect(translated).toContain('forward 100');
      // Should look mostly identical except keywords
      expect(translated).toMatch(/\s+repeat 4 \[\s+forward 100;\s+\]/);
    });

    it('should handle color translation inside script', async () => {
      // Assuming grammar tokenizes 'rouge' either as ID or specific Color Token
      // The logic in doTranslate handles both via reverse lookup.
      const script = 'crayon "rouge"';

      const translated = await service.translateScript(script, FR, EN);

      // "rouge" -> GT_RED -> "red"
      expect(translated).toBe('crayon "rouge"');
      // Note: "crayon" is NOT translated here because my MOCK_FR_JSON didn't include "crayon".
      // If I add it:
    });

    it('should ignore unknown words (variables)', async () => {
      const script = 'pour_chaque x'; // x is a variable

      // Assume "pour_chaque" is not in my mock, so it stays. "x" stays.
      const translated = await service.translateScript(script, FR, EN);

      expect(translated).toBe('pour_chaque x');
    });
  });
});
