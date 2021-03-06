import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import translationAR from './locales/ar/translationAR.json';
import translationEN from './locales/en/translationEN.json';

const resources ={
    en:{
        translation: translationEN
    },
    ar:{
        translation: translationAR
    },
};

i18n
.use(initReactI18next) //passes i18n down to react-i18next
.init({
    resources,
    lng:localStorage.getItem('lang') ,


    keySeparator: false,
    interpolation: {
        escapeValue: false
    }

});
export default i18n;