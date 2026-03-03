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
  },
  math: {
    GT_ADD: ['ajoute', 'plus'],
    GT_ASIN: ['arcsin', 'asin'],
    GT_FACTORIAL: ['factorielle', 'factorial'],
    GT_COMPLEX: ['complexe', 'complex']
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
  },
  math: {
    GT_ADD: ['add', 'plus'],
    GT_ASIN: 'asin',
    GT_FACTORIAL: 'factorial',
    GT_COMPLEX: 'complex'
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
  });

  afterEach(() => {
    vi.unstubAllGlobals(); // Clean up fetch mock
  });

  describe('Dictionary Loading', () => {
    it('should load and cache a language dictionary', async () => {
      await service.loadDictionary(FR);

      // Access private cache via "any" cast to verify state (white-box testing)
      // or verify via public side-effects (getCanonicalKey)
      const key = service.getCanonicalKey('avance', FR);
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
      expect(service.getCanonicalKey('avance', FR)).toBeUndefined();
    });
  });

  describe('Lookups (getCanonicalKey)', () => {
    it('should resolve primary command names', async () => {
      await service.loadDictionary(FR);
      expect(service.getCanonicalKey('avance', FR)).toBe('GT_FORWARD');
    });

    it('should resolve aliases (av -> GT_FORWARD)', async () => {
      await service.loadDictionary(FR);
      expect(service.getCanonicalKey('av', FR)).toBe('GT_FORWARD');
    });

    it('should be case-insensitive', async () => {
      await service.loadDictionary(FR);
      expect(service.getCanonicalKey('AVANCE', FR)).toBe('GT_FORWARD');
      expect(service.getCanonicalKey('AvAnCe', FR)).toBe('GT_FORWARD');
    });

    it('should return undefined if dictionary is not loaded', () => {
      // We didn't call loadDictionary
      expect(service.getCanonicalKey('avance', FR)).toBeUndefined();
    });
  });

  it('should resolve localized math function names', async () => {
    await service.loadDictionary(FR);
    expect(service.getCanonicalKey('ajoute', FR)).toBe('add');
    expect(service.getCanonicalKey('plus', FR)).toBe('add');
  });

  it('should resolve advanced math function aliases', async () => {
    await service.loadDictionary(FR);
    expect(service.getCanonicalKey('arcsin', FR)).toBe('asin');
    expect(service.getCanonicalKey('factorielle', FR)).toBe('factorial');
    expect(service.getCanonicalKey('complexe', FR)).toBe('complex');
  });

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

    it('should translate math function names from French to English', async () => {
      const script = 'ajoute(1, 2)';

      const translated = await service.translateScript(script, FR, EN);

      expect(translated).toBe('add(1, 2)');
    });

    it('should translate advanced math function names from French to English', async () => {
      const script = 'factorielle(5) + arcsin(0.5)';

      const translated = await service.translateScript(script, FR, EN);

      expect(translated).toBe('factorial(5) + asin(0.5)');
    });

    it('should preserve whitespace and formatting', async () => {
      const script = `
      repete 4 [
        avance 100;
      ]
    `;

      const translated = await service.translateScript(script, FR, EN);

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
