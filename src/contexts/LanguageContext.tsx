
import React, { createContext, useContext, useState } from 'react';
import { LanguageContextType } from './types';
import { enTranslations } from './translations/en';
import { viTranslations } from './translations/vi';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'vi'>('vi'); // Default to Vietnamese

  const translations = {
    en: enTranslations,
    vi: viTranslations,
  };

  const t = (key: string) => {
    const translation = translations[language][key];
    if (!translation) {
      console.warn(`Missing translation for key: ${key} in language: ${language}`);
      // Fallback to Vietnamese if English translation is missing
      return translations['vi'][key] || key;
    }
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
