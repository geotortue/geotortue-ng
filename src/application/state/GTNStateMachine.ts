import type { GTNContext } from './GTNContext';

export type GTNState = 'IDLE' | 'RUNNING' | 'PAUSED' | 'ERROR';

export class GTNStateMachine {
  private currentState: GTNState = 'IDLE';

  constructor(private readonly context: GTNContext) {}

  transition(event: string) {
    switch (this.currentState) {
      case 'IDLE':
        if (event === 'EXECUTE') {
          this.currentState = 'RUNNING';
          this.context.processor.run();
        }
        break;
      case 'RUNNING':
        if (event === 'PAUSE') {
          this.currentState = 'PAUSED';
          this.context.processor.suspend();
        }
        // ...
        break;
    }
    // Notification des composants UI via CustomEvent
    document.dispatchEvent(new CustomEvent('gtn-state-change', { detail: this.currentState }));
  }
}
