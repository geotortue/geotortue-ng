import { describe, it, expect, beforeEach, vi } from 'vitest';
import { GTNReverseDictionaryService } from './GTNReverseDictionaryService';
import { toDslLanguage } from '@domain/types';

const FR = toDslLanguage('fr');

// Mock global fetch
globalThis.fetch = vi.fn();

describe('GTNReverseDictionaryService', () => {
  let service: GTNReverseDictionaryService;

  const mockDslJson = {
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

  beforeEach(() => {
    service = new GTNReverseDictionaryService();
    (globalThis.fetch as any).mockResolvedValue({
      ok: true,
      json: async () => mockDslJson
    });
  });

  it('should load dictionary and provide internal keys', async () => {
    await service.loadDictionary(FR);

    // Reverse Lookup
    expect(service.getInternalKey('avance', FR)).toBe('GT_FORWARD');
    expect(service.getInternalKey('av', FR)).toBe('GT_FORWARD'); // Alias
    expect(service.getInternalKey('rouge', FR)).toBe('GT_RED');

    // Case insensitivity
    expect(service.getInternalKey('AVANCE', FR)).toBe('GT_FORWARD');
  });

  it('should resolve CSS colors from localized names', async () => {
    await service.loadDictionary(FR);

    // "rouge" -> GT_RED -> "red" (derived from suffix)
    const css = service.getCssColor('rouge', FR);
    expect(css).toBe('red');
  });
});
