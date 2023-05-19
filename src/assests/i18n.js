import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import az from './az.json';
import tr from './tr.json';
import {getLanguageStorage} from '../utils/storage/languageHelper'

let current = getLanguageStorage();

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: current,
    fallbackLng: current,
    resources: {
        en: en,
        az: az,
        tr: tr
    },
    interpolation: {
        escapeValue: false // react already safes from xss
    },

});

export default i18n;