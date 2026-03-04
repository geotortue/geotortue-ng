import { describe, expect, it } from 'vitest';

import { NamedCssColor } from './GTNColor';

type DslDefinition = {
  colors: Record<string, string | string[]>;
};

const dslModules = import.meta.glob<{ default: DslDefinition }>('../../assets/locales/*/dsl.json', {
  eager: true
});

const dslByLanguage = Object.entries(dslModules).reduce<Record<string, DslDefinition>>(
  (acc, [modulePath, module]) => {
    const match = modulePath.match(/\/locales\/([^/]+)\/dsl\.json$/);
    if (match?.[1]) {
      acc[match[1]] = module.default;
    }
    return acc;
  },
  {}
);

const expectedCanonicalColorKeys = new Set(
  Object.keys(NamedCssColor).map((enumKey) => `GT_${enumKey}`)
);
const expectedCssColorValuesByCanonical = new Map(
  Object.entries(NamedCssColor).map(([enumKey, cssValue]) => [`GT_${enumKey}`, cssValue])
);

describe('GTNColor <-> dsl.json color consistency', () => {
  it('should have matching canonical color keys between NamedCssColor and every locales/*/dsl.json', () => {
    const languages = Object.keys(dslByLanguage);

    expect(languages.length).toBeGreaterThan(0);

    for (const lang of languages) {
      const dslColorKeys = new Set(Object.keys(dslByLanguage[lang]?.colors ?? {}));
      expect(dslColorKeys).toEqual(expectedCanonicalColorKeys);
    }
  });
});
