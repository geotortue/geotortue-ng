import { CharStream } from 'antlr4ng';
import { RangeSetBuilder } from '@codemirror/state';
import {
  ViewPlugin,
  Decoration,
  type DecorationSet,
  ViewUpdate,
  EditorView
} from '@codemirror/view';

import { GeoTortueLexer } from '@infrastructure/antlr/generated/GeoTortueLexer';

import type { GeoTortueSyntaxService } from '@domain/services/GeoTortueSyntaxService';
import type { IGTNLanguageService } from '@domain/interfaces/IGTNLanguageService';
import { TokenRefiner } from './TokenRefiner';

export function createAntlrHighlighter(
  syntaxService: GeoTortueSyntaxService,
  languageService: IGTNLanguageService
) {
  // Pre-fetch the map.
  // Since the grammar structure doesn't change at runtime, we can fetch this once.
  const tokenStyleMap = syntaxService.getTokenStyleMap();
  const tokenRefiner = new TokenRefiner(languageService);

  return ViewPlugin.fromClass(
    class {
      decorations: DecorationSet;

      constructor(view: EditorView) {
        this.decorations = this.buildDecorations(view);
      }

      update(update: ViewUpdate) {
        if (update.docChanged || update.viewportChanged) {
          this.decorations = this.buildDecorations(update.view);
        }
      }

      buildDecorations(view: EditorView) {
        const builder = new RangeSetBuilder<Decoration>();
        const text = view.state.doc.toString();

        // Lex the document content
        const chars = CharStream.fromString(text);
        const lexer = new GeoTortueLexer(chars);
        lexer.removeErrorListeners();

        // Use the Refiner instead of lexer.getAllTokens()
        // This returns tokens with IDs like GT_FORWARD instead of GT_WORD
        const tokens = tokenRefiner.getRefinedTokens(() => lexer.getAllTokens());

        for (const token of tokens) {
          // Look up the style from our reflected map
          const styleName = tokenStyleMap.get(token.type);
          if (!styleName) {
            continue;
          }

          builder.add(
            token.start,
            token.stop + 1,
            Decoration.mark({ class: `cm-gt-${styleName}` })
          );
        }

        return builder.finish();
      }
    },
    {
      decorations: (v) => v.decorations
    }
  );
}
