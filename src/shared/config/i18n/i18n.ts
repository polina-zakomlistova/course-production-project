import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

// translations are already at
// '../public/locales/en/translation.json'
// which is the default for the xhr backend to load from

i18n.use(detector)
    .use(backend)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru',
        debug: __IS_DEV__,
        keySeparator: false,
        interpolation: {
            escapeValue: false, // react already safes from xss
        },

        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
    });

export default i18n;
