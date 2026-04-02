import { svg, type SVGTemplateResult } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';

import { icons, STANDARD_ICON_VIEWBOX, type IconRawDefinition } from './registered-icons';

export { GOOGLE_SYMBOLS_VIEWBOX, STANDARD_ICON_VIEWBOX } from './registered-icons';

export interface IconDefinition {
  content: SVGTemplateResult;
  viewBox?: string;
}

export type IconName = keyof typeof icons;

/**
 * Type Guard
 * Checks if a string is a valid IconName key.
 * Uses hasOwnProperty to avoid prototype pollution issues.
 */
export function isIconName(value: unknown): value is IconName {
  return typeof value === 'string' && Object.hasOwn(icons, value);
}

/**
 * Assertion
 * Throws an Error if the value is not a valid icon name.
 * Useful for catching dev mistakes or invalid config early.
 */
export function assertIconName(value: unknown): asserts value is IconName {
  if (!isIconName(value)) {
    throw new Error(
      `Invalid IconName: "${String(value)}". Expected one of: ${Object.keys(icons).join(', ')}`
    );
  }
}

/**
 * Safe Converter (Strict)
 * Returns the typed IconName or throws.
 */
export function toIconName(value: string): IconName {
  assertIconName(value);
  return value;
}

/**
 * Try Converter (Soft)
 * Returns the typed IconName if valid, otherwise undefined.
 * Useful for rendering: "Show icon if valid, otherwise show nothing".
 */
export function tryToIconName(value: unknown): IconName | undefined {
  if (!isIconName(value)) {
    return undefined;
  }
  return value;
}

export function getIconFromName(iconName: string | null | undefined): IconDefinition | undefined {
  const iconKey = tryToIconName(iconName);
  if (!iconKey) {
    console.warn(`[GtnIcon] Icon not found: "${iconName}"`);
    return undefined;
  }

  const rawIcon = icons[iconKey] as IconRawDefinition;
  // console.log(`getIconFromName, '${iconKey}', rawIcon.content: `, rawIcon.content)

  const icon: IconDefinition = {
    content: svg`${unsafeSVG(rawIcon.content)}`,
    viewBox: rawIcon.viewBox ?? STANDARD_ICON_VIEWBOX
  };
  console.log(`getIconFromName, '${iconKey}', icon.content: `, icon.content);

  return icon;
}
