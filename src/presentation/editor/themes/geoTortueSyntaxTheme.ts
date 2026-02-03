import { EditorView } from '@codemirror/view';

/**
 * Defines the colors for the custom syntax classes applied by the ANTLR highlighter.
 * Selectors must match the class names generated in 'createLocalizedAntlrHighlighter.ts'
 * (e.g. .cm-gt-command, .cm-gt-keyword).
 * FUTURE: move the color choices in a centralized configuration file
 */
export const geoTortueSyntaxTheme = EditorView.baseTheme({
  // Structure & Control Flow
  '.cm-gt-keyword': { color: '#c678dd', fontWeight: 'bold' }, // Purple (IF, WHILE)

  // Domain Commands (Turtle Actions)
  '.cm-gt-command': { color: '#61afef' }, // Blue (FORWARD, RIGHT)

  // Values
  '.cm-gt-number': { color: '#d19a66' }, // Orange
  '.cm-gt-string': { color: '#98c379' }, // Green

  // Identifiers
  '.cm-gt-variable': { color: '#e06c75' }, // Red

  // Comments & Operators
  '.cm-gt-comment': { color: '#5c6370', fontStyle: 'italic' }, // Grey
  '.cm-gt-operator': { color: '#56b6c2' } // Cyan
});
