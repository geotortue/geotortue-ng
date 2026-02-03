import type { IGTNExecutionContext } from '@domain/interfaces/IGTNExecutionContext';

export class GTNSimpleExecutionContext implements IGTNExecutionContext {
  private isRunning: boolean = true;
  public delay: number = 0; // ms

  shouldContinue(): boolean {
    return this.isRunning;
  }

  stop(): void {
    this.isRunning = false;
  }

  reset(): void {
    this.isRunning = true;
  }
}
