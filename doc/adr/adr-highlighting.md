# Highlighting

/!\ On trouve ci-dessous des références à Monaco !!! /!\

TODO : créer un script ts pour générer les regroupements de tokens du Lexer à partir des regroupements définis dans le parser
et les mettre dans un fichier json qui sera lu par GTNSemanticTokensProvider

This is an architectural question that touches on how **Compilers** work versus how **Code Editors** (like Monaco) work.

Here is the breakdown of why to map specific Lexer tokens (like `GT_FORWARD`) to generic semantic types (like `'function'`) instead of using Parser rules.

### 1. Why map to "function" and not keep the command name?

Monaco Editor (and VS Code) does not know what "GT_FORWARD" means. It relies on a **Standard Semantic Legend**.

- **The Problem:** If telling Monaco: _"This token is type `GT_FORWARD`"_, Monaco will ask: _"Okay, but what color is that?"_.
- It would be necessary then to write a custom theme that defines a color specifically for `GT_FORWARD`, `GT_BACKWARD`, `GT_LEFT`, etc.
- **The Solution (Mapping):** We map `GT_FORWARD` **`function`**.
- Standard themes (Dark/Light/High Contrast) already know that **`function`** should be **Blue** (or Yellow).
- We map `GT_IF` **`keyword`**. Themes know **`keyword`** should be **Purple**.

This acts as an **Adapter Pattern**:
`ANTLR Token (Specific)` `Semantic Type (Generic)` `Monaco Theme (Color)`

### 2. Why use explicit tokens and not `GeoTortueParser.RULE_command`?

This is the difference between **Lexing** (Fast) and **Parsing** (Slow/Strict).

#### A. The Data Source: `lexer.getAllTokens()`

In the Semantic Tokens Provider, we are asking the **Lexer** to chop the text into pieces. The Lexer returns a **Token Stream**.

- A `Token` object only knows its **Type ID** (e.g., `17` for `GT_FORWARD`).
- A `Token` does **not** know about Parser Rules.

#### B. The Hierarchy

1. **Lexer (Tokenizer):** Input: `AV 10` Output: `[GT_FORWARD, GT_WS, GT_NUMBER]`.

- _This is what we use for Highlighting._ It is extremely fast and works even if the code has syntax errors.

2. **Parser (Structure):** Input: `[GT_FORWARD, ...]` Output: `CommandContext -> PrimitiveContext -> MoveForwardContext`.

- To use `RULE_command`, we would have to **Parse** the code (build a Tree).
- If the user types an incomplete command like `AV 10 +`, the Parser might crash or return an error node, breaking the highlighting for the rest of the file.

### 3. Refactoring: A Cleaner Implementation

You are right that a giant `switch` statement is ugly. Since we have access to the **Generated Lexer Classes**, we can group the tokens logically in arrays and build a lookup map.

Here is the professional way to implement `GTNSemanticTokensProvider.ts` using the file you provided.

```typescript
// src/presentation/editor/syntax/GTNSemanticTokensProvider.ts
import * as monaco from 'monaco-editor';
import { CharStream } from 'antlr4ng';
import { GeoTortueLexer } from '../../../infrastructure/antlr/generated/GeoTortueLexer';

// 1. Define Standard Monaco Legends
const LEGEND_TYPES = [
  'keyword', // 0
  'function', // 1
  'variable', // 2
  'number', // 3
  'string', // 4
  'comment', // 5
  'operator' // 6
];

// 2. Group ANTLR Tokens by Semantic Category
// We use the static constants from your generated GeoTortueLexer class
const GROUPS = {
  keyword: [
    GeoTortueLexer.GT_REP,
    GeoTortueLexer.GT_WHILE,
    GeoTortueLexer.GT_IF,
    GeoTortueLexer.GT_THEN,
    GeoTortueLexer.GT_ELSE,
    GeoTortueLexer.GT_FOR_EACH,
    GeoTortueLexer.GT_FROM,
    GeoTortueLexer.GT_TO,
    GeoTortueLexer.GT_IN_LIST,
    GeoTortueLexer.GT_FUN,
    GeoTortueLexer.GT_RETURN,
    GeoTortueLexer.GT_STOP
  ],
  function: [
    // Movement
    GeoTortueLexer.GT_FORWARD,
    GeoTortueLexer.GT_BACKWARD,
    GeoTortueLexer.GT_RIGHT,
    GeoTortueLexer.GT_LEFT,
    GeoTortueLexer.GT_TLP,
    GeoTortueLexer.GT_BOUSSOLE,
    GeoTortueLexer.GT_VISE,
    // Pen & Graphics
    GeoTortueLexer.GT_PEN_UP,
    GeoTortueLexer.GT_PEN_DOWN,
    GeoTortueLexer.GT_PEN_COLOR,
    GeoTortueLexer.GT_THICKNESS,
    GeoTortueLexer.GT_FILL,
    GeoTortueLexer.GT_VG,
    GeoTortueLexer.GT_RZ,
    GeoTortueLexer.GT_CT,
    GeoTortueLexer.GT_MT,
    GeoTortueLexer.GT_CIRCLE,
    GeoTortueLexer.GT_ARC,
    // Utils
    GeoTortueLexer.GT_WRITE,
    GeoTortueLexer.GT_SAY,
    GeoTortueLexer.GT_PLAY,
    GeoTortueLexer.GT_WAIT
  ],
  operator: [
    GeoTortueLexer.GT_PLUS,
    GeoTortueLexer.GT_MINUS,
    GeoTortueLexer.GT_MULT,
    GeoTortueLexer.GT_DIV,
    GeoTortueLexer.GT_POW,
    GeoTortueLexer.GT_EQ,
    GeoTortueLexer.GT_NEQ,
    GeoTortueLexer.GT_LT,
    GeoTortueLexer.GT_GT,
    GeoTortueLexer.GT_ASSIGN,
    GeoTortueLexer.GT_ASSIGN_KEY
  ],
  number: [GeoTortueLexer.GT_NUMBER],
  string: [GeoTortueLexer.GT_STRING, GeoTortueLexer.GT_WORD], // GT_WORD might be a string identifier
  variable: [GeoTortueLexer.GT_ID], // Identifiers are usually variables
  comment: [GeoTortueLexer.GT_COMMENT, GeoTortueLexer.GT_BLOCK_COMMENT]
};

export class GTNSemanticTokensProvider implements monaco.languages.DocumentSemanticTokensProvider {
  // Fast Lookup Map: TokenID (Int) -> LegendIndex (Int)
  private readonly tokenToLegendMap: Map<number, number>;

  constructor() {
    this.tokenToLegendMap = new Map();
    this.initializeMap();
  }

  private initializeMap() {
    // Helper to map a list of tokens to a legend type index
    const mapList = (tokens: number[], typeName: string) => {
      const legendIndex = LEGEND_TYPES.indexOf(typeName);
      tokens.forEach((tokenId) => this.tokenToLegendMap.set(tokenId, legendIndex));
    };

    mapList(GROUPS.keyword, 'keyword');
    mapList(GROUPS.function, 'function');
    mapList(GROUPS.operator, 'operator');
    mapList(GROUPS.number, 'number');
    mapList(GROUPS.string, 'string');
    mapList(GROUPS.variable, 'variable');
    mapList(GROUPS.comment, 'comment');
  }

  public static getLegend(): monaco.languages.SemanticTokensLegend {
    return {
      tokenTypes: LEGEND_TYPES,
      tokenModifiers: []
    };
  }

  public provideDocumentSemanticTokens(
    model: monaco.editor.ITextModel
  ): monaco.languages.ProviderResult<monaco.languages.SemanticTokens> {
    // 1. Lexing (Fast)
    const chars = CharStream.fromString(model.getValue());
    const lexer = new GeoTortueLexer(chars);
    lexer.removeErrorListeners(); // Don't console.error on invalid syntax, just highlight what we can
    const allTokens = lexer.getAllTokens();

    // 2. Building Response
    const builder = new monaco.languages.SemanticTokensBuilder();

    for (const token of allTokens) {
      // O(1) Lookup
      const legendIndex = this.tokenToLegendMap.get(token.type);

      if (legendIndex !== undefined) {
        builder.push(
          token.line - 1,
          token.column,
          token.text ? token.text.length : 0,
          legendIndex,
          0
        );
      }
    }

    return builder.build();
  }
}
```

### Why this architecture is better

1. **Performance:** The lookup `this.tokenToLegendMap.get(token.type)` is O(1) (instant), regardless of how many rules you have.
2. **Maintenance:** You don't have a giant `switch` statement. You just add the new token ID to the appropriate array in `GROUPS`.
3. **Robustness:** Because we only use the Lexer, the highlighting will appear instantly as the user types, even if the code logic is currently broken/incomplete (e.g., they typed `IF` but haven't typed `THEN` yet).
