
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enUS from './translations/en.json';
import ptBR from './translations/pt.json'

// import {{idioma}} from './translations/{{idioma}}.json'


i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'ptBR',
        interpolation: {
            escapeValue: false
        },
        resources: {
            enUS,
            ptBR,
            // adicionar variável com idioma importada.
        }
    });

export default i18n;