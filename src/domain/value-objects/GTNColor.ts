/*
 * Representation of a color in the domain.
 * Can be a hexadecimal value (0xFF0000) or a CSS named color ('red', '#F00').
 * Only the named color as known in the section 'colors' of the i18n json files are allowed.
 * See:
 * - [CSS - color](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/color)
 * - [GéoTortue - crayon](http://geotortue.free.fr/index.php?page=aide_index#crayon)
 *   for named colors known from GéoTortue, cf. section 'colors' of DSL Language json files.
 * - [GéoTortue - palette](http://geotortue.free.fr/index.php?page=aide_index#palette)
 *   for [RGB](https://en.wikipedia.org/wiki/RGB_color_model) ([RVB](https://fr.wikipedia.org/wiki/Rouge-vert-bleu) in french)
 *   and [HSV](https://en.wikipedia.org/wiki/HSL_and_HSV) ([TSV](https://fr.wikipedia.org/wiki/Teinte_Saturation_Valeur) in french)
 *
 */

import type { Branded } from '@domain/types';

export const CSS_COLOR_HEX_PATTERN = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
export const NAMED_CSS_COLOR = [
  'red',
  'green',
  'blue',
  'yellow',
  'black',
  'white',
  'orange',
  'pink',
  'grey',
  'cyan',
  'magenta'
];

declare const __csshexcolor: unique symbol;
export type CssHexColor = Branded<string, typeof __csshexcolor>;
export function isCssHexColor(value: unknown): value is CssHexColor {
  return typeof value === 'string' && CSS_COLOR_HEX_PATTERN.test(value);
}
export function assertIsCssHexColor(value: unknown): asserts value is CssHexColor {
  if (!isCssHexColor(value)) {
    throw new Error(`Value '${value}' is not a valid CSS Color string`);
  }
}
export function toCssHexColor(value: string): CssHexColor {
  assertIsCssHexColor(value);
  return value;
}

declare const __cssnamedcolor: unique symbol;
export type NamedCssColor = Branded<string, typeof __cssnamedcolor>;
export const isNamedCssColor = (value: unknown): value is NamedCssColor => {
  return typeof value === 'string' && NAMED_CSS_COLOR.includes(value);
};
export function assertIsNamedCssColor(value: unknown): asserts value is NamedCssColor {
  if (!isNamedCssColor(value)) {
    throw new Error(`Value '${value}' is not a valid CSS Named Color string`);
  }
}
export function toNamedCssColor(value: string): NamedCssColor {
  assertIsNamedCssColor(value);
  return value;
}

export type GTNColor = NamedCssColor | CssHexColor | number;
export function isCssColor(value: unknown) {
  return (
    isCssHexColor(value) || isNamedCssColor(value) || (typeof value === 'number' && !isNaN(value))
  );
}
export function assertIsCssColor(value: unknown): asserts value is GTNColor {
  if (!isCssColor(value)) {
    throw new Error(`Value '${value}' is not a valid CSS color`);
  }
}
export function toCssColor(value: string | number): GTNColor {
  assertIsCssColor(value);
  return value;
}
