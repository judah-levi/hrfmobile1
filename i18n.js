import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
// import {getLocales} from 'react-native-localize';
import transEN from './translations/en.json';
import transES from './translations/es.json';

i18n.use(initReactI18next).init({
  lng: 'en',
  interpolation: {escapeValue: false},
  resources: {
    en: {
      common: transEN, // 'common' is our custom namespace
    },
    es: {
      common: transES,
    },
  },
});

export default i18n;
