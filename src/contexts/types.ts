
export interface LanguageContextType {
  language: 'vi' | 'en';
  setLanguage: (lang: 'vi' | 'en') => void;
  t: (key: string) => string;
}

export interface Translations {
  [key: string]: string;
}
