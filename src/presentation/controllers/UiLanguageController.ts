import type { ReactiveController, ReactiveControllerHost } from 'lit';
import type { IGTNLanguageService } from '@domain/interfaces/IGTNLanguageService';
import { GTNContainer } from '@infrastructure/di/GTNContainer';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';

export class UiLanguageController implements ReactiveController {
  private readonly host: ReactiveControllerHost;
  private readonly languageService: IGTNLanguageService;
  private unsubscribe?: () => void;

  constructor(host: ReactiveControllerHost) {
    this.host = host;
    this.languageService = GTNContainer.getInstance().resolve<IGTNLanguageService>(
      GTN_TYPES.LanguageService
    );
    // Register this controller with the host component
    host.addController(this);
  }

  hostConnected() {
    // Subscribe when component is added to DOM
    this.unsubscribe = this.languageService.subscribe(() => {
      // Force the host component to re-render
      this.host.requestUpdate();
    });
  }

  hostDisconnected() {
    // Clean up when component is removed
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
}
