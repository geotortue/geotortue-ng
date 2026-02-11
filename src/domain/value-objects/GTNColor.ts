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

/**
 * Named CSS colors **known** from GéoTortue
 *
 * See:
 * - colors section inside the dsl files src/assets/locales/<language code>/dsl.json
 * - sandbox.btn.colors inside the ui files src/assets/locales/<language code>/ui.json
 *
 */
export enum NamedCssColor {
  RED = 'red',
  GREEN = 'green',
  BLUE = 'blue',
  YELLOW = 'yellow',
  BLACK = 'black',
  WHITE = 'white',
  ORANGE = 'orange',
  PINK = 'pink',
  GREY = 'grey',
  CYAN = 'cyan',
  MAGENTA = 'magenta'
}

export type NamedCssColorType = `${NamedCssColor}`;

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

export const isNamedCssColor = (value: unknown): value is NamedCssColor => {
  return typeof value === 'string' && Object.values(NamedCssColor).includes(value as NamedCssColor);
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
