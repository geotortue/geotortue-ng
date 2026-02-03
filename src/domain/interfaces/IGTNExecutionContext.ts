/**
 * Holds the runtime state of the script execution.
 * Allows handling "Stop" or "Pause" commands from the UI.
 */
export interface IGTNExecutionContext {
  /**
   * Checks if the script should continue running.
   * If false, the interpreter loop should break immediately.
   */
  shouldContinue(): boolean;

  /**
   * Signal to stop execution.
   */
  stop(): void;

  /**
   * Reset state to running.
   */
  reset(): void;

  /**
   * Optional: Speed of execution (delay between lines).
   */
  delay: number;
}
