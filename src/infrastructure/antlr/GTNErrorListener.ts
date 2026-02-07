import { BaseErrorListener, RecognitionException, Recognizer, Token } from 'antlr4ng';

import type { IGTNLanguageService } from '@domain/interfaces/IGTNLanguageService';
import { GTNContainer } from '@infrastructure/di/GTNContainer';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';

const NO_ERROR_MESSAGE = '';
const DEFAULT_EMPTY_TEXT = '';

export interface GTNError {
  line: number;
  column: number;
  message: string;
  technicalDetails?: string;
}

export class GTNErrorListener extends BaseErrorListener {
  public readonly errors: GTNError[] = [];
  private readonly languageService: IGTNLanguageService;
  private readonly t;

  constructor() {
    super();
    const container = GTNContainer.getInstance();
    this.languageService = container.resolve<IGTNLanguageService>(GTN_TYPES.LanguageService);
    const languageService = container.resolve<IGTNLanguageService>(GTN_TYPES.LanguageService);
    this.t = languageService.translate;
  }

  public override syntaxError(
    _recognizer: Recognizer<any>,
    offendingSymbol: any,
    line: number,
    charPositionInLine: number,
    msg: string,
    _e: RecognitionException | null
  ): void {
    // Attempt to get the text of the token that caused the error
    const token = offendingSymbol as Token;
    const tokenText = token?.text || DEFAULT_EMPTY_TEXT;

    const friendlyMsg = this.getFriendlyMessage(msg, tokenText);

    // If the message is empty, we deliberately ignore it (e.g. cascading errors)
    if (!friendlyMsg) {
      return;
    }

    this.errors.push({
      line,
      column: charPositionInLine,
      message: friendlyMsg,
      technicalDetails: msg
    });
  }

  /*
   * Translates ANTLR jargon into human-friendly hints.
   */
  private getFriendlyMessage(rawMsg: string, tokenText: string): string {
    // PRIORITY 1: Unclosed Block (Missing ']')
    // This often appears as "mismatched input '<EOF>' expecting ']'"
    // OR "extraneous input '<EOF>' expecting ']'"
    if (rawMsg.includes(`expecting ']'`)) {
      return this.t('syntax.unclosed_block');
    }

    // PRIORITY 2: Handle End Of File (The catch-all for unclosed blocks)
    // If the parser hits EOF unexpectedly, and it's not asking for a semicolon,
    // it's usually because a block wasn't closed.
    if (tokenText === '<EOF>') {
      if (rawMsg.includes(`missing ';'`) || rawMsg.includes(`expecting ';'`)) {
        return this.t('syntax.missing_semicolon_eof');
      }

      // Fallback for EOF: Assume unclosed block
      return this.t('syntax.unexpected_eof');
    }

    // PRIORITY 3: Missing Semicolon (mid-file)
    if (rawMsg.includes(`missing ';'`) || rawMsg.includes(`expecting ';'`)) {
      if (tokenText === '[') {
        // Often caused by "REP 10 [", ignoring helps avoid confusion if the real error is inside
        return NO_ERROR_MESSAGE;
      }

      // A mismatch often means the previous statement wasn't terminated
      return this.t('syntax.missing_semicolon', { tokenText });
    }

    // PRIORITY 4: Unknown Command (Typo)
    // "no viable alternative at input 'GT_FORWAR'"
    if (rawMsg.includes(`no viable alternative`)) {
      return this.t('syntax.unknown_command', { tokenText });
    }

    // PRIORITY 5: Unexpected Token (Context error)
    // Check 'mismatched input' to catch cases like 'GT_FORWARD GT_LEFT'
    // where GT_LEFT is a valid token but not allowed in an expression.
    if (rawMsg.includes(`extraneous input`) || rawMsg.includes(`mismatched input`)) {
      if (tokenText === ']') {
        return NO_ERROR_MESSAGE;
      }
      return this.t('syntax.unexpected_token', { tokenText });
    }

    // PRIORITY 6: Wrong Type (Specific primitive types)
    if (rawMsg.includes(`expecting INT`) || rawMsg.includes(`expecting FLOAT`)) {
      return this.t('syntax.expected_number', { tokenText });
    }

    // Fallback: Return a cleaner version of the raw message if possible, or a generic one
    return this.t('syntax.generic', { tokenText });
  }
}
