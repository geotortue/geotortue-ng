export interface IGTNInterpreter {
  /**
   * Executes a script, optionally prepending named procedures.
   * @param script The main commands to execute.
   * @param proceduresScript The background procedures defined in the DSL panel.
   */
  execute(script: string, proceduresScript?: string): Promise<void>;

  /**
   * Parses and executes a script in canonical DSL
   * Returns a Promise because execution takes time (animations/waits).
   */
  doExecute(canonicalScript: string): Promise<void>;
}
