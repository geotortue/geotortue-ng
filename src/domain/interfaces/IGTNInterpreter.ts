export interface IGTNInterpreter {
  /**
   * Parses and executes a script in localized DSL
   * Returns a Promise because execution takes time (animations/waits).
   */
  execute(script: string): Promise<void>;

  /**
   * Parses and executes a script in canonical DSL
   * Returns a Promise because execution takes time (animations/waits).
   */
  doExecute(canonicalScript: string): Promise<void>;
}
