import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'vi' | 'en';
  setLanguage: (lang: 'vi' | 'en') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'vi'>('en'); // Changed default to 'en'

  const translations = {
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.features': 'Features',
      'nav.caseStudies': 'Case Studies',
      'nav.pricing': 'Pricing',
      'nav.contact': 'Contact',
      'nav.getDemo': 'Get a Demo',
      'nav.contactUs': 'Contact Us',
    },
    vi: {
      'nav.home': 'Trang chủ',
      'nav.about': 'Về chúng tôi',
      'nav.features': 'Tính năng',
      'nav.caseStudies': 'Nghiên cứu điển hình',
      'nav.pricing': 'Bảng giá',
      'nav.contact': 'Liên hệ',
      'nav.getDemo': 'Nhận bản Demo',
      'nav.contactUs': 'Liên hệ với chúng tôi',
    },
  };

  const t = (key: string) => {
    return translations[language][key] || key;
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
