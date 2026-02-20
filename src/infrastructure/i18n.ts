import i18next from 'i18next';
import Backend from 'i18next-http-backend';

import { isSupportedLanguage, SUPPORTED_LANGUAGES } from '@domain/types/language';

// FUTURE: put DEFAULT_LANGUAGE & C° in a configuration file:
export const DEFAULT_LANGUAGE = 'fr';

export enum NameSpace {
  UI = 'ui',
  DSL = 'dsl'
}
type NameSpaceKey = keyof typeof NameSpace;
export type NameSpaceType = `${NameSpace}`;

const DEFAULT_NS: string = NameSpace.UI; // Only load UI by default for the main bundle

// Initialisation asynchrone
export const initI18n = async () => {
  const savedLang = localStorage.getItem('gtn_ui_lang');
  const baseUrl = import.meta.env.BASE_URL;
  const localesUrl = `${baseUrl}locales/`;

  await i18next.use(Backend).init({
    supportedLngs: SUPPORTED_LANGUAGES,
    lng: isSupportedLanguage(savedLang) ? savedLang : DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    ns: Object.values(NameSpace),
    defaultNS: DEFAULT_NS,
    backend: {
      //Path to fetch files from /src/assets/locales
      loadPath: `${localesUrl}{{lng}}/{{ns}}.json`
    },
    interpolation: {
      escapeValue: false
    },
    // Lazy Loading configuration
    preload: [] // We intentionally do NOT preload other languages
  });

  return i18next;
};
