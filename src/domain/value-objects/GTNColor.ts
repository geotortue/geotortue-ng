/*
 * Representation of a color in the domain.
 * Can be a hexadecimal value (0xFF0000) or a CSS named color ('red', '#F00').
 * To be used, the css named color known from GéoTortue must be referenced:
 * - just below with the enum NamedCssColor
 * - in the section 'colors' of each of the i18n json file (i.e. the src/assets/locales/{{lang code}}/ui.json)
 *
 * See:
 * - [W3C - CSS Color Module Level 3 - 4.1. Basic color keywords](https://www.w3.org/TR/css-color-3/#html4)
 * - [W3C - CSS Color Module Level 4 (Draft) - 6.1. Named Colors](https://drafts.csswg.org/css-color/#named-colors)
 * - [MDN - CSS - color](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/color)
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
 * - Basic color keywords (level 3) + some extended ones
 * - colors section inside the dsl files src/assets/locales/<language code>/dsl.json, for the colors known from GéoTortue
 * - sandbox.btn.colors inside the ui files src/assets/locales/<language code>/ui.json, for the color displayed on the sandbox
 * -
 *
 */
export enum NamedCssColor {
  BLACK = 'black', // #000000  0,0,0
  SILVER = 'silver', // #C0C0C0  192,192,192, argent
  GREY = 'grey', // #808080  128,128,128, alias GRAY
  GRAY = 'gray', // #808080  128,128,128, alias GREY
  WHITE = 'white', // #ffffff  255,255,255
  MAROON = 'maroon', // #800000  128,0,0, bordeaux
  RED = 'red', // #ff0000  255,0,0
  PURPLE = 'purple', // #800080  128,0,128, violet
  FUCHSIA = 'fuchsia', // #FF00FF  255,0,255, alias MAGENTA
  GREEN = 'green', // #008000  0,128,0
  LIME = 'lime', // #00FF00  0,255,0, citron vert
  OLIVE = 'olive', // #808000  128,128,0
  YELLOW = 'yellow', // #ffff00  255,255,0
  NAVY = 'navy', // #000080  0,0,128
  BLUE = 'blue', // #0000ff  0,0,255, bleu marine
  TEAL = 'teal', // #008080  0,128,128, sarcelle
  AQUA = 'aqua', // #00FFFF  0,255,255, alias CYAN
  ORANGE = 'orange', // #ffa500  255,165,0
  PINK = 'pink', // #ffc0cb  255,192,203
  CYAN = 'cyan', // #00ffff  0,255,255, alias AQUA
  MAGENTA = 'magenta' // #ff00ff  255,0,255, alias FUCHSIA
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
