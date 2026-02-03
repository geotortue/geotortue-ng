import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { initI18n } from './infrastructure/i18n';
import { configureDependencyInjection } from './main/config/di.config';

// Import Main Component (Registers it as <gtn-app>)
import './presentation/gtn-app';
import { GTNContainer } from '@infrastructure/di/GTNContainer';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';
import type { IGTNLanguageService } from '@domain/interfaces/IGTNLanguageService';
import type { Ms } from '@domain/types';

// Configuration FontAwesome
library.add(faGithub, faCheckCircle);
dom.watch();

const bootstrap = async () => {
  console.log('[App] Bootstrapping GéoTortue NG...');
  const splash = document.getElementById('splash');

  try {
    // 1. Configure DI Container (Register all services)
    configureDependencyInjection();

    // 2. Initialize i18n (Network/Local loading)
    const i18n = await initI18n();

    // 3. Apply i18n on the static DOM (index.html)
    // Doesn't really work. Splash is translated too late:
    // it's done just before 'splash' is removed and 'gtn-app' is displayed.
    const t = i18n.t;
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n');
      if (key) {
        element.textContent = t(key);
      }
    });

    // 4. Resolve Language Service
    const container = GTNContainer.getInstance();
    const langService = container.resolve<IGTNLanguageService>(GTN_TYPES.LanguageService);

    // 5. Initialize DSL specific resources (Async safety fix)
    await langService.initialize();

    // 6. Start App (Remove Splash)
    if (splash) {
      splash.style.opacity = '0';
      setTimeout(() => {
        splash.remove();
      }, 500 as Ms);
    }

    // 6. Mount Application
    const appContainer = document.getElementById('app');
    if (appContainer && !appContainer.querySelector('gtn-app')) {
      appContainer.appendChild(document.createElement('gtn-app'));
    }

    console.log('[App] GéoTortue NG Started...');
  } catch (error) {
    console.error('[App] Failed to bootstrap application: ', error);
    if (splash) splash.innerHTML = `<p style="color:red">Error loading application.</p>`;
  }
};

bootstrap();
