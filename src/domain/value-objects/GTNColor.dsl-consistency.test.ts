import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { cwd } from 'node:process';

import { NamedCssColor } from './GTNColor';

type DslDefinition = {
  colors: Record<string, string | string[]>;
};

const localesDir = join(cwd(), 'src/assets/locales');

const expectedCanonicalColorKeys = new Set(
  Object.keys(NamedCssColor).map((enumKey) => `GT_${enumKey}`)
);
const expectedCssColorValuesByCanonical = new Map(
  Object.entries(NamedCssColor).map(([enumKey, cssValue]) => [`GT_${enumKey}`, cssValue])
);

function readDslJson(language: string): DslDefinition {
  const dslPath = join(localesDir, language, 'dsl.json');
  const raw = readFileSync(dslPath, 'utf-8');
  return JSON.parse(raw) as DslDefinition;
}

describe('GTNColor <-> dsl.json color consistency', () => {
  it('should have matching canonical color keys between NamedCssColor and every locales/*/dsl.json', () => {
    const languages = readdirSync(localesDir, { withFileTypes: true })
      .filter((entry: { isDirectory: () => any }) => entry.isDirectory())
      .map((entry: { name: any }) => entry.name)
      .filter((lang: any) => existsSync(join(localesDir, lang, 'dsl.json')));

    expect(languages.length).toBeGreaterThan(0);

    for (const lang of languages) {
      const dsl = readDslJson(lang);
      const dslColorKeys = new Set(Object.keys(dsl.colors ?? {}));

      expect(dslColorKeys).toEqual(expectedCanonicalColorKeys);
    }
  });
});
