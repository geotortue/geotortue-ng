import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { initI18n } from './infrastructure/i18n';
import { configureDependencyInjection } from './main/config/di.config';

import { GTNContainer } from '@infrastructure/di/GTNContainer';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';
import type { IGTNLanguageService } from '@domain/interfaces/IGTNLanguageService';
import type { Ms } from '@domain/types';

// Configuration FontAwesome
library.add(faGithub, faCheckCircle);
dom.watch();

const bootstrap = async () => {
  console.log('[App] Bootstrapping GéoTortue NG...');

  // Assume splash is INSIDE <gtn-app> or sibling in body
  const splash = document.getElementById('splash');

  try {
    // 1. Configure DI Container (Register all services)
    configureDependencyInjection();

    // 2. Initialize i18n (Network/Local loading)
    // Wait for languages to load before "revealing" the app
    const i18n = await initI18n();

    // 3. Load the App Component Dynamically
    // AFTER DI configuration and I18N initialization
    // This imports the Lit component class.
    // Since <gtn-app> is in index.html, the browser will upgrade it immediately here.
    // The constructor/render will run, but now DI AND i18n are ready.
    await import('./presentation/gtn-app');

    // 4. Apply i18n on the static DOM (index.html)
    // Doesn't really work. Splash is translated too late:
    // it's done just before 'splash' is removed and 'gtn-app' is displayed.
    const t = i18n.t;
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n');
      if (key) {
        element.textContent = t(key);
      }
    });

    // 5. Initialize i18n
    const container = GTNContainer.getInstance();
    const langService = container.resolve<IGTNLanguageService>(GTN_TYPES.LanguageService);
    await langService.initialize();

    // 6. Update Splash Text (Optional polish)
    // If you want to translate the "Loading..." text right before removing it
    if (splash) {
      const loadingText = splash.querySelector('.loading');
      if (loadingText) loadingText.textContent = i18n.t('ui:app.loaded');
    }

    // 7. Reveal the App (Remove Splash)
    if (splash) {
      splash.style.transition = 'opacity 0.5s ease';
      splash.style.opacity = '0';

      setTimeout(() => {
        splash.remove();
        // Force a requestUpdate on the app if needed, though usually automatic
        const app = document.querySelector('gtn-app');
        if (app) (app as any).requestUpdate();
      }, 500 as Ms);
    }

    console.log('[App] GéoTortue NG Started...');
  } catch (error) {
    console.error('[App] Failed to bootstrap application: ', error);
    if (splash) {
      splash.innerHTML = `<p style="color:red; text-align:center; padding:20px;">
            Error loading application.<br>
            <small>${(error as Error).message}</small>
        </p>`;
    }
  }
};

bootstrap();
