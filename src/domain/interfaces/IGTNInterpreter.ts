export interface IGTNInterpreter {
  /**
   * Parses and executes a script.
   * Returns a Promise because execution takes time (animations/waits).
   */
  execute(script: string): Promise<void>;
}
