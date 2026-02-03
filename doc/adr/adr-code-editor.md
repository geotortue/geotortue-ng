# ADR Code Editor

Integrate a code editor as "CodeMirror" means replacing a basic, dumb text box (like \<textarea>) with a professional-grade code editor embedded directly in the web page.

In the context of GeoTortue Next, we don't want the student to just "type text". We want them to feel like they are programming.

## The Rational

For an educational tool, the feedback loop is vital:

- If a student makes a mistake, we need to point to a line number.
- If they write a complex loop, the editor visually helps them see the structure (indentation).

By integrating a real code editor, we instantly upgrade the user experience from "Web Form" to "Development Environment" (IDE).

## The Competition

Monaco versus CodeMirror

CodeMirror 6 is often preferred because:

- Mobile Support: CodeMirror handles mobile keyboards and touch inputs significantly better than Monaco.
- Bundle Size: CodeMirror is modular and tree-shakable, resulting in much smaller initial downloads.
- Architecture: It fits naturally into the modern "state-driven" mindset (like React/Lit) rather than Monaco's older imperative model.

## The Difference

| Feature    | Standard \<textarea>            | CodeMirror Integration                                     |
| ---------- | ------------------------------- | ---------------------------------------------------------- |
| Visuals    | Black text on white background. | Syntax Highlighting (Colors for commands, numbers).        |
| Navigation | Basic cursor.                   | Line Numbers (Essential for debugging "Error on line 10"). |
| Assistance | None.                           | Auto-closing brackets, Indentation, Undo/Redo (Ctrl+Z).    |
| Feel       | Like writing an email.          | Like using VS Code or IntelliJ.                            |

## The Features

- lineNumbers(): Shows the gutter with 1, 2, 3...

- history(): Enables Ctrl+Z / Ctrl+Y.

- keymap: We listened for Mod-Enter (Ctrl+Enter) to trigger the "Run" command directly from the keyboard.

- oneDark: We applied a dark theme (like modern IDEs).

## The constrains

Must work with:

- Antlr4 and a dynamic DSL, i.e. the keywords changes with the user language, e.g. english, french, german...
