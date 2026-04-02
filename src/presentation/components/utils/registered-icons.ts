/**
 * @fileoverview GTN Icon Registry
 * This file serves as the centralized repository for SVG icon definitions used across the system.
 * It should be referenced only by ./icon-tools.ts.
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
 * * @see {@link https://www.svgrepo.com/|Dazzle UI via SVG Repo}
 * License: CC-BY-4.0 (Requires attribution in CREDITS.md)
 */

export const STANDARD_ICON_VIEWBOX = '0 0 24 24'; // default viewBox
export const GOOGLE_SYMBOLS_VIEWBOX = '0 -960 960 960';

export interface IconRawDefinition {
  content: string;
  viewBox?: string;
}

export const icons = {
  /**
   * Action: Undo / Erase Last Line
   * Metaphor: Skeuomorphic School Eraser
   * Note: A classic "Pelikan" style red and blue eraser.
   * Features white highlights for a "shiny" rubber look and
   * small "eraser crumbs" to indicate the act of rubbing something out.
   */
  'edit-undo-eraser-vibrant': {
    // /!\ WIP /!\
    content: `
      <path d="M 6 18 L 18 11 L 20 7 L 16 4 L 4 11 L 2 15 Z"
            fill="#FFFFFF"
            stroke="#FFFFFF"
            stroke-width="2"
            stroke-linejoin="round" />

      <g stroke-linejoin="round">

        <path d="M 6 18 L 2 15 L 4 11 L 8 14 Z"
              fill="#D32F2F" stroke="#D32F2F" stroke-width="0.5" />


        <path d="M 6 18 L 11.5 14.8 L 13.5 10.8 L 8 14 Z"
              fill="#F44336" stroke="#F44336" stroke-width="0.5" />

        <path d="M 11.5 14.8 L 12.5 14.2 L 14.5 10.2 L 13.5 10.8 Z"
              fill="#F5F5F5" stroke="#F5F5F5" stroke-width="0.5" />

        <path d="M 12.5 14.2 L 18 11 L 20 7 L 14.5 10.2 Z"
              fill="#2196F3" stroke="#2196F3" stroke-width="0.5" />


        <path d="M 8 14 L 13.5 10.8 L 9.5 7.8 L 4 11 Z"
              fill="#FF8A80" stroke="#FF8A80" stroke-width="0.5" />

        <path d="M 13.5 10.8 L 14.5 10.2 L 10.5 7.2 L 9.5 7.8 Z"
              fill="#FFFFFF" stroke="#FFFFFF" stroke-width="0.5" />

        <path d="M 14.5 10.2 L 20 7 L 16 4 L 10.5 7.2 Z"
              fill="#64B5F6" stroke="#64B5F6" stroke-width="0.5" />
      </g>

      <path d="M 4 11.2 L 8.2 14.2 L 19.8 7.2"
            stroke="#FFFFFF" stroke-width="0.8" stroke-linecap="round" opacity="0.5" fill="none" />
    `
  },
  /**
   * Action: Show Keyboard / Manual Input
   * Metaphor: Skeuomorphic Mechanical Keyboard
   * Note: Optimized for high contrast (Yellow keys on Dark Grey casing).
   * Features a 3D isometric tilt, a vibrant Cyan 'Enter' key, and
   * thick 1.2px rounded strokes for a toy-like feel.
   */
  'input-keyboard-vibrant': {
    content: `
      <rect x="1" y="8" width="22" height="11" rx="2" fill="#37474F" />
      <rect x="1" y="8" width="22" height="9" rx="2" fill="#546E7A" />

      <g fill="#FFEB3B">
        <rect x="2.5" y="10" width="2.5" height="2.5" rx="0.5" />
        <rect x="6" y="10" width="2.5" height="2.5" rx="0.5" />
        <rect x="9.5" y="10" width="2.5" height="2.5" rx="0.5" />
        <rect x="13" y="10" width="2.5" height="2.5" rx="0.5" />
        <rect x="16.5" y="10" width="5" height="2.5" rx="0.5" fill="#00BCD4" />
      </g>

      <g fill="#FFEB3B">
        <rect x="4.25" y="13.5" width="2.5" height="2.5" rx="0.5" />
        <rect x="7.75" y="13.5" width="2.5" height="2.5" rx="0.5" />
        <rect x="11.25" y="13.5" width="2.5" height="2.5" rx="0.5" />
        <rect x="14.75" y="13.5" width="2.5" height="2.5" rx="0.5" />
        <rect x="18.25" y="13.5" width="2.5" height="2.5" rx="0.5" />
      </g>

      <rect x="7" y="17" width="10" height="1.5" rx="0.75" fill="#00BCD4" />

      <path d="M 2.5 12.5 H 21.5 M 4.25 16 H 20.75 M 7 18.5 H 17"
            stroke="#263238" stroke-width="0.5" opacity="0.4" fill="none" />
    `
  },
  /**
   * Action: d-Pad Navigation
   * Metaphor: Directional Arrows
   * Note: Skeuomorphic/Tactile set
   * High-Contrast colors, optimized for WCAG AA compliance on a blue background (#3498db)
   */
  'go-up-vibrant': {
    content: `
    <path d="M 12 3 L 3 13 Q 12 11 21 13 Z" fill="#F57F17" />
    <path d="M 12 4.5 L 5 12 Q 12 10.5 19 12 Z" fill="#FFEB3B" />
    <path d="M 12 4.5 L 5 12 Q 12 10.5 19 12 Z" stroke="#FFFFFF" stroke-width="0.5" fill="none" />
  `
  },
  'go-down-vibrant': {
    content: `
    <path d="M 12 21 L 3 11 Q 12 13 21 11 Z" fill="#F57F17" />
    <path d="M 12 19.5 L 5 12 Q 12 13.5 19 12 Z" fill="#FFEB3B" />
    <path d="M 12 19.5 L 5 12 Q 12 13.5 19 12 Z" stroke="#FFFFFF" stroke-width="0.5" fill="none" />
  `
  },
  'go-left-vibrant': {
    content: `
    <path d="M 3 12 L 13 3 Q 11 12 13 21 Z" fill="#F57F17" />
    <path d="M 4.5 12 L 12 5 Q 10.5 12 12 19 Z" fill="#FFEB3B" />
    <path d="M 4.5 12 L 12 5 Q 10.5 12 12 19 Z" stroke="#FFFFFF" stroke-width="0.5" fill="none" />
  `
  },
  'go-right-vibrant': {
    content: `
    <path d="M 21 12 L 11 3 Q 13 12 11 21 Z" fill="#F57F17" />
    <path d="M 19.5 12 L 12 5 Q 13.5 12 12 19 Z" fill="#FFEB3B" />
    <path d="M 19.5 12 L 12 5 Q 13.5 12 12 19 Z" stroke="#FFFFFF" stroke-width="0.5" fill="none" />
  `
  },
  /**
   * Action: Run Code / Execute
   * Metaphor: Vibrant Running Bicycle
   * Note: Replaces the abstract play triangle with a skeuomorphic bicycle
   * to represent "going" or "moving forward."
   * High-Contrast colors, optimized for WCAG AA compliance on a dark green background (#1B5E20).
   * Uses White and bright Cyan for maximum visibility.
   */
  'media-playback-run-vibrant': {
    content: `
      <g stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round">
        <line x1="1" y1="8" x2="5" y2="8" />
        <line x1="0" y1="12" x2="6" y2="12" />
      </g>

      <g stroke="#FFFFFF" stroke-width="1.8" fill="none" stroke-linejoin="round" stroke-linecap="round">
        <path d="M 12 17 L 8 10 L 16 10 L 12 17 Z" />
        <path d="M 16 10 L 18 6 L 20 6" />
        <path d="M 8 10 L 7 7 L 9 7" />
      </g>

      <g stroke="#80DEEA" stroke-width="2.2" fill="none">
        <circle cx="7" cy="17" r="4" />
        <circle cx="17" cy="17" r="4" />
      </g>

      <circle cx="12" cy="17" r="1.5" fill="#FFEB3B" />
  `
  },
  /**
   * Action: Clear Screen / Clear All
   * Metaphor: Vibrant Classic Broom
   * Note: This version strictly maps to the original Elementary OS symbolic
   * broom's silhouette (45-degree handle, curved bottom-left bristles)
   * to maximize recognition.
   * High-Contrast colors, optimized for WCAG AA compliance on a Red background (#c0392b).
   * Uses White for the handle and Cyan/Yellow for the bristles to ensure
   * the icon doesn't disappear into the red button.
   */
  'edit-clear-all-vibrant': {
    content: `
      <path d="M 3 15 A 7.5 7.5 0 0 0 10 22" fill="none" stroke="#80DEEA" stroke-width="2" stroke-linecap="round" />

      <line x1="19" y1="5" x2="13" y2="11" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" />

      <path d="M 11.5 10.5 L 14.5 13.5" stroke="#00BCD4" stroke-width="2.5" stroke-linecap="round" />

      <path d="M 12 12 L 6 16.5 C 4.5 18.5 6 21 9 21 C 12 21 16 17.5 13.5 13.5 Z" fill="#FFEB3B" stroke="#FFFFFF" stroke-width="1" stroke-linejoin="round" />

      <path d="M 10.5 13.5 L 7 17 M 12.5 15 L 9 18.5" stroke="#F57F17" stroke-width="1.2" stroke-linecap="round" />
    `
  },
  /**
   * Action: Language Change
   * Metaphor: Wireframe Globe with Speaking Lips
   * Note: The entire globe (outer circle and inner grid) now uses fine lines
   * for a clean, delicate appearance. The vibrant red lips
   * and green sound waves use a slightly thicker width to ensure
   * the "speaking" action stands out clearly in the bottom-right.
   */
  'preferences-workbench-locale-vibrant': {
    content: `
      <g stroke="#2979FF" stroke-width="1.2" fill="none" stroke-linecap="round">
        <circle cx="8.5" cy="8.5" r="7.5" />
        <ellipse cx="8.5" cy="8.5" rx="3.5" ry="7.5" />
        <path d="M 1.5 5 L 15.5 5" />
        <path d="M 1.5 12 L 15.5 12" />
      </g>

      <path d="M 10.5 17 Q 13.5 15 16.5 17 Q 13.5 19 10.5 17 Z" stroke="#FF5252" stroke-width="1.2" fill="none" stroke-linejoin="round" />

      <g stroke="#00E676" stroke-width="1.2" fill="none" stroke-linecap="round">
        <path d="M 17.5 15 A 2 2 0 0 1 17.5 19" />
        <path d="M 19.5 13.5 A 3.5 3.5 0 0 1 19.5 20.5" />
      </g>
    `
  },
  /**
   * Action: Playful Coding / Vibe Coding
   * Metaphor: A cyan magic wand with an orange tip casting a single magic sparkle.
   * Note: The wand spans the diagonal from bottom-left to top-right.
   * The composition balances the rigid syntax of coding with the a fluid, relaxed nature of "vibe coding"
   */
  'coding-wand-vibrant': {
    content: `
      <line x1="4" y1="20" x2="17" y2="7" stroke="#00BCD4" stroke-width="4.5" stroke-linecap="round" />

      <circle cx="17" cy="7" r="3.5" fill="#FF9800" />

      <path fill="#FFEB3B" d="M 8 3 Q 8 6.5 11.5 6.5 Q 8 6.5 8 10 Q 8 6.5 4.5 6.5 Q 8 6.5 8 3 Z" />

      <path stroke="#00E676" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" d="M 15 15 L 18 17.5 L 15 20" />
      <line x1="19" y1="20" x2="23" y2="20" stroke="#00E676" stroke-width="2.5" stroke-linecap="round" />
    `
  },
  /**
   * Action: Sandbox Mode
   * Metaphor: Colorful Beach Ball
   * Note: Uses hardcoded hex colors instead of currentColor for a child-friendly aesthetic.
   */
  'sandbox-beach-ball-vibrant': {
    content: `
    <defs>
      <clipPath id="beach-ball-clip">
        <circle cx="12" cy="12" r="10" />
      </clipPath>
    </defs>

    <circle cx="12" cy="12" r="10" fill="#FFFFFF" />

    <g clip-path="url(#beach-ball-clip)">
      <path fill="#FF5252" d="M 9 9 Q 10 0 12 -2 L 26 -2 L 26 6 Q 18 2 9 9 Z" />
      <path fill="#FFEB3B" d="M 9 9 Q 18 14 20 26 L 8 26 Q 10 16 9 9 Z" />
      <path fill="#448AFF" d="M 9 9 Q 4 14 -2 16 L -2 0 Q 4 4 9 9 Z" />
    </g>

    <circle cx="9" cy="9" r="2.5" fill="#E0E0E0" />
    `
  },
  /**
   * Action: Run Code / Execute
   * Replacement for 'play_arrow'
   */
  'media-playback-start-symbolic': {
    content: `
      <path
        fill="currentColor"
        stroke="none"
        d="M 7 4 L 7 20 L 20 12 L 7 4 z"
      />
    `
  },
  /**
   * Action: Clear Screen / Reset Canvas
   * Visual: A broom
   * Replacement for 'delete'
   */
  'edit-clear-all-symbolic': {
    content: `
      <path
        fill="currentColor"
        stroke="none"
        d="M18.5 2.5a1.4 1.4 0 0 0-2 .2L10.2 10.8c-1.1-.6-2.3-1-3.6-1.4-1-.3-2 .3-2.1 1.3l8.5 5.5c.5-.3 1.2-.5 1.5-1 .5-.8-.2-1.8-1-2.2l-2-.9 5.2-7.5c.5-.8-.1-1.9-1.2-1.9zM6.5 13c-1.8.6-3 2.8-2.5 4.6.5 1.8 2.5 3 4.5 3.5 2.5.5 5 .3 7.5.4h1.2c-1.2-.3-2.8-.8-3.2-2-.4-.9.3-2 1.2-2.3l-8.7-4.2z"
      />
    `
  },
  /**
   * Mode: Editor (Full Code Editor)
   * Visual: A sheet of paper with lines of code and a technical symbol.
   * Substitute for 'code'
   */
  'text-x-script-symbolic': {
    content: `
      <path
        fill="currentColor"
        stroke="none"
        d="M13 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9l-7-7zM6 4h6v6h6v10H6V4zm2 7v2h8v-2H8zm0 4v2h5v-2H8z"
      />
    `
  },
  /**
   * Mode: Sandbox/Playground
   * Visual: A puzzle piece (Standard Elementary for games/activities).
   * Replaces 'touch_app'
   */
  'applications-games-symbolic': {
    content: `
      <path
        fill="currentColor"
        stroke="none"
        d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5c0-1.4-1.1-2.5-2.5-2.5S8 2.1 8 3.5V5H4c-1.1 0-2 .9-2 2v4h1.5c1.4 0 2.5 1.1 2.5 2.5S4.9 16 3.5 16H2v4c0 1.1.9 2 2 2h4v-1.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5V22h4c1.1 0 2-.9 2-2v-4h1.5c1.4 0 2.5-1.1 2.5-2.5S21.9 11 20.5 11z"
      />
    `
  },
  /**
   * Action: Translate / Change language
   * Visual: A wireframe globe (Standard Elementary/Freedesktop for "Locale")
   */
  'preferences-desktop-locale-symbolic': {
    content: `
      <path
        fill="currentColor"
        stroke="none"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A8.03 8.03 0 0 1 5.08 16zm2.95-8H5.08a8.03 8.03 0 0 1 3.84-3.56A15.65 15.65 0 0 0 7.54 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.34.16-2h4.68c.09.66.16 1.32.16 2 0 .68-.07 1.34-.16 2zm1.18 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"
      />
    `
  },
  /**
   * Action : Show Turtle
   * Visual : A wide open eye (Standard Elementary/Freedesktop)
   */
  'view-reveal-symbolic': {
    content: `
    <path
      fill="currentColor"
      stroke="none"
      d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
    />
  `
  },
  /**
   * Action : Hide Turtle
   * Visual : A closed eye with downward-pointing eyelashes (No slash)
   */
  'view-conceal-symbolic': {
    content: `
    <path
      fill="currentColor"
      stroke="none"
      d="M12 16.5c-3.4 0-6.6-1.5-8.8-4.2-.4-.5-.3-1.2.2-1.6.5-.4 1.2-.3 1.6.2 1.8 2.2 4.3 3.4 7 3.4 2.7 0 5.2-1.2 7-3.4.4-.5 1.1-.6 1.6-.2.5.4.6 1.1.2 1.6-2.2 2.7-5.4 4.2-8.8 4.2z"
    />
    <path
      fill="currentColor"
      stroke="none"
      d="M12 17v2.5c0 .6.4 1 1 1s1-.4 1-1V17c0-.6-.4-1-1-1s-1 .4-1 1zm-5.7-1.4l-1.8 1.8c-.4.4-.4 1 0 1.4s1 .4 1.4 0l1.8-1.8c.4-.4.4-1 0-1.4s-1-.4-1.4 0zm11.4 0c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.8 1.8c.4.4 1 .4 1.4 0s.4-1 0-1.4l-1.8-1.8z"
    />
  `
  },
  penDown: {
    // Elementary document-edit-symbolic with go-down-symbolic
    content: `
    <defs>
      <mask id="halo-down">
        <rect width="24" height="24" fill="white" stroke="none" />
        <path d="M 18 23 L 12 16 H 16 V 11 H 20 V 16 H 24 Z" fill="black" stroke="black" stroke-width="2" stroke-linejoin="round"/>
      </mask>
    </defs>

    <path mask="url(#halo-down)"
          fill="currentColor"
          stroke="none"
          d="M19.06 3.53a1.5 1.5 0 0 0-2.12 0l-1.54 1.54 5.53 5.53 1.54-1.54a1.5 1.5 0 0 0 0-2.12l-3.41-3.41zM13.98 6.48l-9.5 9.5-.47 3.55a.5.5 0 0 0 .58.58l3.55-.47 9.5-9.5-3.66-3.66z"/>

    <path d="M 18 23 L 12 16 H 16 V 11 H 20 V 16 H 24 Z" />
    `
  },
  penUp: {
    // Elementary document-edit-symbolic with go-up-symbolic
    content: `
    <defs>
      <mask id="halo-up">
        <rect width="24" height="24" fill="white" stroke="none" />
        <path d="M 18 11 L 12 18 H 16 V 23 H 20 V 18 H 24 Z" fill="black" stroke="black" stroke-width="2" stroke-linejoin="round"/>
      </mask>
    </defs>

    <path mask="url(#halo-up)"
          fill="currentColor"
          stroke="none"
          d="M19.06 3.53a1.5 1.5 0 0 0-2.12 0l-1.54 1.54 5.53 5.53 1.54-1.54a1.5 1.5 0 0 0 0-2.12l-3.41-3.41zM13.98 6.48l-9.5 9.5-.47 3.55a.5.5 0 0 0 .58.58l3.55-.47 9.5-9.5-3.66-3.66z"/>

    <path d="M 18 11 L 12 18 H 16 V 23 H 20 V 18 H 24 Z" />
    `
  },

  // /!\ Legacy /!\ \\

  check: {
    // Google Material Design Icons
    content: `<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>`
  },
  close: {
    // Google Material Design Icons
    content: `<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>`
  },
  menu: {
    // Google Material Design Icons
    content: `<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>`
  },
  settings: {
    // Google Material Design Icons
    content: `<path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.58 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>`
  },
  home: {
    // Google Material Design Icons
    content: `<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>`
  },
  user: {
    // Google Material Design Icons
    content: `<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>`
  },
  eye: {
    // Dazzle Line Icons
    content: `
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
    content: `
    <path d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    </path>`
  },
  pen: {
    // Dazzle Line Icons, https://www.svgrepo.com/svg/532979/pen
    content: `
    <path d="M15.4998 5.49994L18.3282 8.32837M3 20.9997L3.04745 20.6675C3.21536 19.4922 3.29932 18.9045 3.49029 18.3558C3.65975 17.8689 3.89124 17.4059 4.17906 16.9783C4.50341 16.4963 4.92319 16.0765 5.76274 15.237L17.4107 3.58896C18.1918 2.80791 19.4581 2.80791 20.2392 3.58896C21.0202 4.37001 21.0202 5.63634 20.2392 6.41739L8.37744 18.2791C7.61579 19.0408 7.23497 19.4216 6.8012 19.7244C6.41618 19.9932 6.00093 20.2159 5.56398 20.3879C5.07171 20.5817 4.54375 20.6882 3.48793 20.9012L3 20.9997Z"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
  },
  penSlash: {
    // Dazzle Line Icons, https://www.svgrepo.com/svg/532990/pen-slash
    content: `
    <path d="M15.4998 5.50067L18.3282 8.3291M13.3254 7.67502L17.4107 3.58969C18.1918 2.80865 19.4581 2.80864 20.2392 3.58969C21.0202 4.37074 21.0202 5.63707 20.2392 6.41812L16.1538 10.5034M3 3L10.5002 10.5002M21 21L13.3286 13.3286M13.3286 13.3286L8.37744 18.2798C7.61579 19.0415 7.23497 19.4223 6.8012 19.7252C6.41618 19.994 6.00093 20.2167 5.56398 20.3887C5.07171 20.5824 4.54375 20.6889 3.48793 20.902L3 21.0004L3.04745 20.6683C3.21536 19.4929 3.29932 18.9052 3.49029 18.3565C3.65975 17.8697 3.89124 17.4067 4.17906 16.979C4.50341 16.497 4.92319 16.0772 5.76274 15.2377L10.5002 10.5002M13.3286 13.3286L10.5002 10.5002"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
  },
  draw: {
    // Google Material Symbols: https://fonts.google.com/icons?icon.category=Text&selected=Material+Symbols+Outlined:draw
    content: `
    <path d="M160-120v-170l527-526q12-12 27-18t30-6q16 0 30.5 6t25.5 18l56 56q12 11 18 25.5t6 30.5q0 15-6 30t-18 27L330-120H160Zm80-80h56l393-392-28-29-29-28-392 393v56Zm560-503-57-57 57 57Zm-139 82-29-28 57 57-28-29ZM560-120q74 0 137-37t63-103q0-36-19-62t-51-45l-59 59q23 10 36 22t13 26q0 23-36.5 41.5T560-200q-17 0-28.5 11.5T520-160q0 17 11.5 28.5T560-120ZM183-426l60-60q-20-8-31.5-16.5T200-520q0-12 18-24t76-37q88-38 117-69t29-70q0-55-44-87.5T280-840q-45 0-80.5 16T145-785q-11 13-9 29t15 26q13 11 29 9t27-13q14-14 31-20t42-6q41 0 60.5 12t19.5 28q0 14-17.5 25.5T262-654q-80 35-111 63.5T120-520q0 32 17 54.5t46 39.5Z"
          fill="currentColor"
    />`,
    viewBox: GOOGLE_SYMBOLS_VIEWBOX
  },
  editOff: {
    // Google Material Symbols: https://fonts.google.com/icons?icon.category=Text&selected=Material+Symbols+Outlined:edit_off
    content: `
    <path d="m622-453-56-56 82-82-57-57-82 82-56-56 195-195q12-12 26.5-17.5T705-840q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L622-453ZM200-200h57l195-195-28-29-29-28-195 195v57ZM792-56 509-338 290-120H120v-169l219-219L56-792l57-57 736 736-57 57Zm-32-648-56-56 56 56Zm-169 56 57 57-57-57ZM424-424l-29-28 57 57-28-29Z"
          fill="currentColor"
    />`,
    viewBox: GOOGLE_SYMBOLS_VIEWBOX
  },
  visibility: {
    // Google Material Symbols': https://fonts.google.com/icons?icon.category=Text&selected=Material+Symbols+Outlined:visibility
    content: `
    <path d="M607.5-372.5Q660-425 660-500t-52.5-127.5Q555-680 480-680t-127.5 52.5Q300-575 300-500t52.5 127.5Q405-320 480-320t127.5-52.5Zm-204-51Q372-455 372-500t31.5-76.5Q435-608 480-608t76.5 31.5Q588-545 588-500t-31.5 76.5Q525-392 480-392t-76.5-31.5ZM214-281.5Q94-363 40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200q-146 0-266-81.5ZM480-500Zm207.5 160.5Q782-399 832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q113 0 207.5-59.5Z"
          fill="currentColor"
    />`,
    viewBox: GOOGLE_SYMBOLS_VIEWBOX
  },
  visibilityOff: {
    // Google Material Symbols: https://fonts.google.com/icons?icon.category=Text&selected=Material+Symbols+Outlined:visibility_off
    content: `
    <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"
          fill="currentColor"
    />`,
    viewBox: GOOGLE_SYMBOLS_VIEWBOX
  }
} as const satisfies Record<string, IconRawDefinition>;
