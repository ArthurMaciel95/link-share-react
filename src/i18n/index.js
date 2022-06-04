
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './translations/en.json';
import pt from './translations/pt.json'

// import {{idioma}} from './translations/{{idioma}}.json'


i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'pt',
        interpolation: {
            escapeValue: false
        },
        resources: {
            en,
            pt,
            // adicionar variável com idioma importada.
        }
    });

export default i18n;