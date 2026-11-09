import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import ar from './ar.json';

const savedLang = (typeof window !== 'undefined' && localStorage.getItem('koora_lang')) || 'ar';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: savedLang,
  fallbackLng: 'ar',
  interpolation: {
    escapeValue: false,
  },
});

export function setLanguage(lang: 'en' | 'ar') {
  i18n.changeLanguage(lang);
  if (typeof window !== 'undefined') {
    localStorage.setItem('koora_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    if (lang === 'ar') {
      document.body.classList.add('font-arabic');
      document.body.classList.remove('font-sans');
    } else {
      document.body.classList.add('font-sans');
      document.body.classList.remove('font-arabic');
    }
  }
}

// Initial sync with document
if (typeof window !== 'undefined') {
  document.documentElement.lang = i18n.language;
  document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  if (i18n.language === 'ar') {
    document.body.classList.add('font-arabic');
  } else {
    document.body.classList.add('font-sans');
  }
}

export default i18n;

