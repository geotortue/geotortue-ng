/**
 * @fileoverview GTN Icon Registry
 * This file serves as the centralized repository for SVG icon paths used across the system.
 *
 * ## Attribution & Licensing
 * This project incorporates icons from several sources. By using this file,
 * you agree to maintain the following license and attribution requirements:
 *
 * @license GPL-3.0-or-later (Registry logic)
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software Foundation.
 *
 * ### Third-Party Asset Licenses:
 *
 * * @see {@link https://fonts.google.com/icons|Google Material Symbols}
 * License: Apache-2.0
 * * @see {@link https://opensource.org/licenses/BSD-3-Clause|The Polymer Project}
 * License: BSD-3-Clause
 * * @see {@link https://www.svgrepo.com/|Dazzle UI via SVG Repo}
 * License: CC-BY-4.0 (Requires attribution in CREDITS.md)
 * * @see {@link https://github.com/Banno/jha-design|Jackhenry Design}
 * License: Apache-2.0
 */

import { svg, type SVGTemplateResult } from 'lit';

export interface IconDefinition {
  content: SVGTemplateResult;
  viewBox?: string;
}

export const STANDARD_ICON_VIEWBOX = '0 0 24 24';
export const GOOGLE_SYMBOLS_VIEWBOX = '0 -960 960 960';

export const icons = {
  check: {
    // Google Fonts
    content: svg`<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>`
  },
  close: {
    // Google Fonts
    content: svg`<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>`
  },
  menu: {
    // The Polymer Project Authors
    content: svg`<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>`
  },
  settings: {
    // Google Fonts
    content: svg`<path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.58 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>`
  },
  home: {
    // jha-design
    content: svg`<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>`
  },
  user: {
    // jha-design
    content: svg`<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>`
  },
  eye: {
    // Dazzle Line Icons
    content: svg`
    <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    </path>
    <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    </path>
  `
  },
  eyeSlash: {
    // Dazzle Line Icons, https://www.svgrepo.com/svg/532465/eye-slash
    content: svg`
    <path d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    </path>`
  },
  pen: {
    // Dazzle Line Icons, https://www.svgrepo.com/svg/532979/pen
    content: svg`
    <path d="M15.4998 5.49994L18.3282 8.32837M3 20.9997L3.04745 20.6675C3.21536 19.4922 3.29932 18.9045 3.49029 18.3558C3.65975 17.8689 3.89124 17.4059 4.17906 16.9783C4.50341 16.4963 4.92319 16.0765 5.76274 15.237L17.4107 3.58896C18.1918 2.80791 19.4581 2.80791 20.2392 3.58896C21.0202 4.37001 21.0202 5.63634 20.2392 6.41739L8.37744 18.2791C7.61579 19.0408 7.23497 19.4216 6.8012 19.7244C6.41618 19.9932 6.00093 20.2159 5.56398 20.3879C5.07171 20.5817 4.54375 20.6882 3.48793 20.9012L3 20.9997Z"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
  },
  penSlash: {
    // Dazzle Line Icons, https://www.svgrepo.com/svg/532990/pen-slash
    content: svg`
    <path d="M15.4998 5.50067L18.3282 8.3291M13.3254 7.67502L17.4107 3.58969C18.1918 2.80865 19.4581 2.80864 20.2392 3.58969C21.0202 4.37074 21.0202 5.63707 20.2392 6.41812L16.1538 10.5034M3 3L10.5002 10.5002M21 21L13.3286 13.3286M13.3286 13.3286L8.37744 18.2798C7.61579 19.0415 7.23497 19.4223 6.8012 19.7252C6.41618 19.994 6.00093 20.2167 5.56398 20.3887C5.07171 20.5824 4.54375 20.6889 3.48793 20.902L3 21.0004L3.04745 20.6683C3.21536 19.4929 3.29932 18.9052 3.49029 18.3565C3.65975 17.8697 3.89124 17.4067 4.17906 16.979C4.50341 16.497 4.92319 16.0772 5.76274 15.2377L10.5002 10.5002M13.3286 13.3286L10.5002 10.5002"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
  },
  draw: {
    // Google Fonts Icons: https://fonts.google.com/icons?icon.category=Text&selected=Material+Symbols+Outlined:draw
    content: svg`
    <path d="M160-120v-170l527-526q12-12 27-18t30-6q16 0 30.5 6t25.5 18l56 56q12 11 18 25.5t6 30.5q0 15-6 30t-18 27L330-120H160Zm80-80h56l393-392-28-29-29-28-392 393v56Zm560-503-57-57 57 57Zm-139 82-29-28 57 57-28-29ZM560-120q74 0 137-37t63-103q0-36-19-62t-51-45l-59 59q23 10 36 22t13 26q0 23-36.5 41.5T560-200q-17 0-28.5 11.5T520-160q0 17 11.5 28.5T560-120ZM183-426l60-60q-20-8-31.5-16.5T200-520q0-12 18-24t76-37q88-38 117-69t29-70q0-55-44-87.5T280-840q-45 0-80.5 16T145-785q-11 13-9 29t15 26q13 11 29 9t27-13q14-14 31-20t42-6q41 0 60.5 12t19.5 28q0 14-17.5 25.5T262-654q-80 35-111 63.5T120-520q0 32 17 54.5t46 39.5Z"
          fill="currentColor"
    />`,
    viewBox: GOOGLE_SYMBOLS_VIEWBOX
  },
  editOff: {
    // Google Fonts Icons: https://fonts.google.com/icons?icon.category=Text&selected=Material+Symbols+Outlined:edit_off
    content: svg`
    <path d="m622-453-56-56 82-82-57-57-82 82-56-56 195-195q12-12 26.5-17.5T705-840q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L622-453ZM200-200h57l195-195-28-29-29-28-195 195v57ZM792-56 509-338 290-120H120v-169l219-219L56-792l57-57 736 736-57 57Zm-32-648-56-56 56 56Zm-169 56 57 57-57-57ZM424-424l-29-28 57 57-28-29Z"
          fill="currentColor"
    />`,
    viewBox: GOOGLE_SYMBOLS_VIEWBOX
  },
  visibility: {
    // Google Fonts Icons': https://fonts.google.com/icons?icon.category=Text&selected=Material+Symbols+Outlined:visibility
    content: svg`
    <path d="M607.5-372.5Q660-425 660-500t-52.5-127.5Q555-680 480-680t-127.5 52.5Q300-575 300-500t52.5 127.5Q405-320 480-320t127.5-52.5Zm-204-51Q372-455 372-500t31.5-76.5Q435-608 480-608t76.5 31.5Q588-545 588-500t-31.5 76.5Q525-392 480-392t-76.5-31.5ZM214-281.5Q94-363 40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200q-146 0-266-81.5ZM480-500Zm207.5 160.5Q782-399 832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q113 0 207.5-59.5Z"
          fill="currentColor"
    />`,
    viewBox: GOOGLE_SYMBOLS_VIEWBOX
  },
  visibilityOff: {
    // Google Fonts Icons: https://fonts.google.com/icons?icon.category=Text&selected=Material+Symbols+Outlined:visibility_off
    content: svg`
    <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"
          fill="currentColor"
    />`,
    viewBox: GOOGLE_SYMBOLS_VIEWBOX
  }
} as const satisfies Record<string, IconDefinition>;

export type IconName = keyof typeof icons;

/**
 * Type Guard
 * Checks if a string is a valid IconName key.
 * Uses hasOwnProperty to avoid prototype pollution issues.
 */
export function isIconName(value: unknown): value is IconName {
  return typeof value === 'string' && Object.prototype.hasOwnProperty.call(icons, value);
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

  const icon = icons[iconKey] as IconDefinition;

  return { ...icon, viewBox: icon.viewBox ?? STANDARD_ICON_VIEWBOX };
}
