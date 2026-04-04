import { en } from './en';
import { es } from './es';

export type Language = 'en' | 'es';
export type Translations = typeof en;

const translations: Record<Language, Translations> = { en, es };

export function useTranslations(lang: Language): Translations {
  return translations[lang];
}

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as Language;
  return 'en';
}

export const languages: Record<Language, string> = {
  en: 'EN',
  es: 'ES',
};
