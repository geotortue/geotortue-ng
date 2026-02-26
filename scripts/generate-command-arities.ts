import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

type Arity = {
  min: number;
  max?: number;
};

const __dirname = dirname(fileURLToPath(import.meta.url));
const PARSER_GRAMMAR_PATH = resolve(
  __dirname,
  '../src/infrastructure/antlr/grammar/GeoTortueParser.g4'
);
const OUTPUT_PATH = resolve(__dirname, '../src/domain/types/GTNCommandArity.ts');

const grammar = readFileSync(PARSER_GRAMMAR_PATH, 'utf-8');

// const primitiveMatch = grammar.match(/\bprimitive\s*\n\s*:\s*([\s\S]*?)\n\s*;/m);
// if (!primitiveMatch?.[1]) {
//   throw new Error('Unable to locate the primitive rule in GeoTortueParser.g4.');
// }
const getRuleBody = (ruleName: string): string | undefined => {
  return grammar.match(new RegExp(`\\b${ruleName}\\s*\\n\\s*:\\s*([\\s\\S]*?)\\n\\s*;`, 'm'))?.[1];
};

const cleanAlternative = (raw: string): string => {
  return raw
    .replace(/\/\/.*$/gm, '')
    .replace(/#\w+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
};

// const alternatives = primitiveMatch[1]
//   .split(/\n\s*\|/)
//   .map((part, index) => {
//     if (index === 0) {
//       return part;
//     }
//
//     return `| ${part}`;
//   })
//   .map((part) => part.replace(/^\s*\|\s*/, ''))
//   .map(cleanAlternative)
//   .filter(Boolean);

const getAlternatives = (ruleBody: string): string[] =>
  ruleBody
    .split(/\n\s*\|/)
    .map((part, index) => {
      if (index === 0) {
        return part;
      }

      return `| ${part}`;
    })
    .map((part) => part.replace(/^\s*\|\s*/, ''))
    .map(cleanAlternative)
    .filter(Boolean);

const getKeywordTokens = (ruleName: string): string[] => {
  const body = getRuleBody(ruleName);
  if (!body) return [];

  return getAlternatives(body)
    .map((alternative) => alternative.match(/^(GT_[A-Z0-9_]+)/)?.[1])
    .filter((token): token is string => Boolean(token));
};

const addArity = (arity: Arity, quantifier: string | undefined): Arity => {
  switch (quantifier) {
    case '*':
      return {
        min: arity.min
      };
    case '+':
      return {
        min: arity.min + 1
      };
    case '?':
      return {
        min: arity.min,
        max: arity.max === undefined ? undefined : arity.max + 1
      };
    default:
      return {
        min: arity.min + 1,
        max: arity.max === undefined ? undefined : arity.max + 1
      };
  }
};

const getArity = (ruleBody: string): Arity => {
  const argumentPattern = /\b(expr|block)\b([*+?])?/g;
  let arity: Arity = { min: 0, max: 0 };

  for (const match of ruleBody.matchAll(argumentPattern)) {
    arity = addArity(arity, match[2]);
  }

  return arity;
};

const entries: string[] = [];

// for (const alternative of alternatives) {
//   const commandToken = alternative.match(/^(GT_[A-Z0-9_]+)/)?.[1];
//   if (!commandToken) {
//     continue;
//   }
const getStatementCommandTokens = (ruleName: string): string[] => {
  const body = getRuleBody(ruleName);
  if (!body) return [];

  return getAlternatives(body)
    .map((alternative) => alternative.match(/^(GT_[A-Z0-9_]+)/)?.[1])
    .filter((token): token is string => Boolean(token));
};

// New grammar format (v3): command tokens are expanded directly in statement rules.
// v2 kept keyword sub-rules, we keep compatibility below.
const fixedArityZeroCommands = getStatementCommandTokens('fixedArityZeroCommandStatement');
const fixedArityOneCommands = getStatementCommandTokens('fixedArityOneCommandStatement');
const fixedArityTwoCommands = getStatementCommandTokens('fixedArityTwoCommandStatement');
const variadicCommands = getStatementCommandTokens('variableArityMarkerCommandStatement');

if (
  fixedArityZeroCommands.length > 0 ||
  fixedArityOneCommands.length > 0 ||
  fixedArityTwoCommands.length > 0 ||
  variadicCommands.length > 0
) {
  fixedArityZeroCommands.forEach((token) => entries.push(`  ${token}: { min: 0, max: 0 }`));
  fixedArityOneCommands.forEach((token) => entries.push(`  ${token}: { min: 1, max: 1 }`));
  fixedArityTwoCommands.forEach((token) => entries.push(`  ${token}: { min: 2, max: 2 }`));
  variadicCommands.forEach((token) => entries.push(`  ${token}: { min: 0 }`));
} else if (
  getKeywordTokens('fixedArityZeroCommandKeyword').length > 0 ||
  getKeywordTokens('fixedArityOneCommandKeyword').length > 0 ||
  getKeywordTokens('fixedArityTwoCommandKeyword').length > 0 ||
  getKeywordTokens('variableArityMarkerCommandKeyword').length > 0
) {
  // New grammar format (v2): command keywords are declared in dedicated sub-rules.
  getKeywordTokens('fixedArityZeroCommandKeyword').forEach((token) =>
    entries.push(`  ${token}: { min: 0, max: 0 }`)
  );
  getKeywordTokens('fixedArityOneCommandKeyword').forEach((token) =>
    entries.push(`  ${token}: { min: 1, max: 1 }`)
  );
  getKeywordTokens('fixedArityTwoCommandKeyword').forEach((token) =>
    entries.push(`  ${token}: { min: 2, max: 2 }`)
  );
  getKeywordTokens('variableArityMarkerCommandKeyword').forEach((token) =>
    entries.push(`  ${token}: { min: 0 }`)
  );
} else {
  // Legacy grammar format (v1): primitive rule with per-command alternatives.
  const primitiveBody = getRuleBody('primitive');
  if (!primitiveBody) {
    throw new Error('Unable to locate command keyword rules in GeoTortueParser.g4.');
  }
  // const ruleBody = alternative.replace(new RegExp(`^${commandToken}\\b`), '').trim();
  // const arity = getArity(ruleBody);
  // const maxPart = arity.max === undefined ? '' : `, max: ${arity.max}`;
  const alternatives = getAlternatives(primitiveBody);
  for (const alternative of alternatives) {
    const commandToken = alternative.match(/^(GT_[A-Z0-9_]+)/)?.[1];
    if (!commandToken) {
      continue;
    }
    // entries.push(`  ${commandToken}: { min: ${arity.min}${maxPart} }`);
    const ruleBody = alternative.replace(new RegExp(`^${commandToken}\\b`), '').trim();
    const arity = getArity(ruleBody);
    const maxPart = arity.max === undefined ? '' : `, max: ${arity.max}`;

    entries.push(`  ${commandToken}: { min: ${arity.min}${maxPart} }`);
  }
}

const output = `/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated by scripts/generate-command-arities.ts using GeoTortueParser.g4
 *
 * Note: This auto-generated file is intentionally tracked by Git. Do not add it to .gitignore.
 */

/**
 * Arity metadata for a DSL command.
 * - min: minimal number of arguments.
 * - max: maximal number of arguments. If omitted, the command is variadic.
 */
export type GTNCommandArity = {
  min: number;
  max?: number;
};

/**
 * Command arities for primitive DSL commands.
 */
export const GTN_COMMAND_ARITIES: Readonly<Record<string, GTNCommandArity>> = {
${entries.join(',\n')}
};
`;

writeFileSync(OUTPUT_PATH, output, 'utf-8');

console.log('✅ Generated command arities table at:');
console.log(`   ${OUTPUT_PATH}`);
