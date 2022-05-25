
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './translations/en.json';
import pt from './translations/pt.json'
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)


i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        fallbackLng: 'pt',
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        },
        resources: {
            en,
            pt
        }
    });

export default i18n;