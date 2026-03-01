import { CharStream, CommonTokenStream } from 'antlr4ng';

import { GeoTortueLexer } from '@infrastructure/antlr/generated/GeoTortueLexer';
import { GeoTortueParser } from '@infrastructure/antlr/generated/GeoTortueParser';

import type { IGTNInterpreter } from '@domain/interfaces/IGTNInterpreter';
import type { IGTNTurtleRepository } from '@domain/interfaces/IGTNTurtleRepository';
import type { IGTNLanguageService } from '@domain/interfaces/IGTNLanguageService';
import { GTNExecutionVisitor } from '@domain/services/GTNExecutionVisitor';
import { TokenRefiner } from '@ui/editor/syntax/TokenRefiner';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';
import { GTNContainer } from '@infrastructure/di/GTNContainer';

export class GTNInterpreter implements IGTNInterpreter {
  private readonly tokenRefiner;
  private readonly createVisitor: (repo: IGTNTurtleRepository) => GTNExecutionVisitor;

  constructor(
    private readonly turtleRepo: IGTNTurtleRepository,
    private readonly languageService: IGTNLanguageService
  ) {
    const container = GTNContainer.getInstance();

    this.tokenRefiner = new TokenRefiner(languageService);
    this.createVisitor = container.resolve(GTN_TYPES.ExecutionVisitorFactory);
  }

  /**
   * Executes a script, optionally prepending named procedures.
   * @param script The main commands to execute.
   * @param proceduresScript The background procedures defined in the DSL panel.
   */
  public async execute(script: string, proceduresScript: string = ''): Promise<void> {
    // 1. The Prepend Strategy: Merge procedures and commands
    // We add a newline to ensure we don't accidentally merge the last line of the
    // procedures with the first line of the command.
    const fullScript = proceduresScript.trim() ? `${proceduresScript}\n${script}` : script;

    if (!fullScript.trim()) {
      return;
    }

    // 2. Canonicalize (i.e. localized ---> internal)
    // By passing the fullScript, localized keywords inside the procedures panel
    // (like 'pour' or 'fin') will be properly translated before execution!
    const canonicalScript = await this.languageService.canonicalizeScript(fullScript);
    return this.canonicalExecute(canonicalScript);
  }

  /**
   * Here even the color are canonicalized in the script ?!
   */
  public async canonicalExecute(canonicalScript: string): Promise<void> {
    if (!canonicalScript.trim()) {
      return;
    }

    // Setup ANTLR Pipeline
    const inputStream = CharStream.fromString(canonicalScript);
    const lexer = new GeoTortueLexer(inputStream);

    const tokenStream = new CommonTokenStream(lexer);
    tokenStream.fill(); // FORCE load all tokens immediately
    this.tokenRefiner.getRefinedTokens(() => tokenStream.getTokens());

    const parser = new GeoTortueParser(tokenStream);

    // Error Handling
    parser.removeErrorListeners();
    // FUTURE see GTNErrorListener and GTNError
    parser.addErrorListener({
      syntaxError: (_recognizer, _offendingSymbol, line, charPositionInLine, msg, _e) => {
        console.error(`Parser Error at ${line}:${charPositionInLine} - ${msg}`);
        throw new Error(`Syntax Error line ${line}: ${msg}`);
      },
      reportAmbiguity: () => {},
      reportAttemptingFullContext: () => {},
      reportContextSensitivity: () => {}
    });

    // Parse (Create Tree)
    const tree = parser.program();

    // Execute with Animation (The Runner Loop)
    const visitor = this.createVisitor(this.turtleRepo);

    try {
      // We don't need a while(isRunning) loop here.
      // The execution 'stays' on this line, pausing and resuming
      // automatically every time the visitor calls 'await this.tick()'.
      await visitor.visitProgram(tree);

      console.log('✅ Execution finished successfully.');
    } catch (e) {
      console.error('❌ Execution error:', e);
      throw e;
    }
  }
}
