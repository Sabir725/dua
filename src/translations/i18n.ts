import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          appName: 'Nur Al-Dua',
          searchPlaceholder: 'Search for a dua...',
          categories: 'Categories',
          allDuas: 'All Duas',
          settings: 'Settings',
          language: 'Language',
          theme: 'Theme',
          noResults: 'No duas found.',
          arabic: 'Arabic',
          transliteration: 'Transliteration',
          duaFor: 'Dua for',
          source: 'Source',
        }
      },
      ur: {
        translation: {
          appName: 'نورِ دعا',
          searchPlaceholder: 'دعا تلاش کریں...',
          categories: 'اقسام',
          allDuas: 'تمام دعائیں',
          settings: 'ترتیبات',
          language: 'زبان',
          theme: 'تھیم',
          noResults: 'کوئی دعا نہیں ملی۔',
          arabic: 'عربی',
          transliteration: 'اردو ترجمہ/تلفظ',
          duaFor: 'دعا برائے',
          source: 'حوالہ',
        }
      },
      tr: {
        translation: {
          appName: 'Dua Nuru',
          searchPlaceholder: 'Dua ara...',
          categories: 'Kategoriler',
          allDuas: 'Tüm Dualar',
          settings: 'Ayarlar',
          language: 'Dil',
          theme: 'Tema',
          noResults: 'Dua bulunamadı.',
          arabic: 'Arapça',
          transliteration: 'Okunuş',
          duaFor: 'Dua için',
          source: 'Kaynak',
        }
      }
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
