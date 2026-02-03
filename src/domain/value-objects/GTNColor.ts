/**
 * Representation of a color in the domain.
 * Can be a hexadecimal value (0xFF0000) or a CSS string ('red', '#F00').
 * See:
 * - [CSS - color](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/color)
 * - [GéoTortue - crayon](http://geotortue.free.fr/index.php?page=aide_index#crayon)
 *   for named colors known from GéoTortue, cf. section 'colors' of DSL Language json files.
 * - [GéoTortue - palette](http://geotortue.free.fr/index.php?page=aide_index#palette)
 *   for [RGB](https://en.wikipedia.org/wiki/RGB_color_model) ([RVB](https://fr.wikipedia.org/wiki/Rouge-vert-bleu) in french) and [HSV](https://en.wikipedia.org/wiki/HSL_and_HSV) ([TSV](https://fr.wikipedia.org/wiki/Teinte_Saturation_Valeur) in french)
 *
 */
export type GTNColor = string | number;
