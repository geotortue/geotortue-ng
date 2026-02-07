import { type IGTNLogger, LogLevel } from '@app/interfaces/IGTNLogger';

export class GTNConsoleLogger implements IGTNLogger {
  private currentLevel: LogLevel = LogLevel.INFO;

  constructor(initialLevel: LogLevel = LogLevel.INFO) {
    this.currentLevel = initialLevel;
  }

  setLevel(level: LogLevel): void {
    this.currentLevel = level;
  }

  debug(message: string, ...args: any[]): void {
    if (this.currentLevel <= LogLevel.DEBUG) {
      console.debug(`%c[DEBUG] ${message}`, 'color: #7f8c8d', ...args);
    }
  }

  info(message: string, ...args: any[]): void {
    if (this.currentLevel <= LogLevel.INFO) {
      console.info(`%c[INFO] ${message}`, 'color: #2980b9', ...args);
    }
  }

  warn(message: string, ...args: any[]): void {
    if (this.currentLevel <= LogLevel.WARN) {
      console.warn(`%c[WARN] ${message}`, 'color: #f39c12', ...args);
    }
  }

  error(message: string, ...args: any[]): void {
    if (this.currentLevel <= LogLevel.ERROR) {
      console.error(`%c[ERROR] ${message}`, 'color: #c0392b', ...args);
    }
  }
}
