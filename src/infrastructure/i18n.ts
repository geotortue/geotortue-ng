import i18next from 'i18next';
import Backend from 'i18next-http-backend';

import { isSupportedLanguage, SUPPORTED_LANGUAGES } from '@domain/types/language';

// FUTURE: put the next three constants in a configuration file:
export const DEFAULT_LANGUAGE = 'fr';

export const DSL_NS = 'dsl';
export const UI_NS = 'ui';
const DEFAULT_NS = UI_NS; // Only load UI by default for the main bundle

// Initialisation asynchrone
export const initI18n = async () => {
  const savedLang = localStorage.getItem('gtn_ui_lang');

  await i18next.use(Backend).init({
    supportedLngs: SUPPORTED_LANGUAGES,
    lng: isSupportedLanguage(savedLang) ? savedLang : DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    ns: [UI_NS, DSL_NS],
    defaultNS: DEFAULT_NS,
    backend: {
      //Path to fetch files from /src/assets/locales (provided by Vite)
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    interpolation: {
      escapeValue: false
    },
    // Lazy Loading configuration
    preload: [] // We intentionally do NOT preload other languages
  });

  return i18next;
};
