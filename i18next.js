// module.exports = {
//   i18n: {
//     defaultLocale: "ru",
//     locales: ["en", "ru"],
//     localeDetection: false,
//     detection: {
//       order: ["localStorage", "cookie"],
//       caches: ["localStorage", "cookie"],
//     },
//   },
// };

import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    fallbackLng: "en",
    whitelist: ["en"],
    preload: ["en"],
    ns: ["header"],
    debug: false,
    detection: {
      order: ["localStorage", "cookie"],
      caches: ["localStorage", "cookie"],
    },
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    react: {
      wait: true,
      useSuspense: false,
    },
  });

export default i18n;
