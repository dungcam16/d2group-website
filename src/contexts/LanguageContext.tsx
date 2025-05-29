
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  vi: {
    // Navigation
    'nav.home': 'Trang chủ',
    'nav.about': 'Về chúng tôi',
    'nav.features': 'Tính năng',
    'nav.caseStudies': 'Nghiên cứu trường hợp',
    'nav.pricing': 'Bảng giá',
    'nav.contact': 'Liên hệ',
    'nav.getDemo': 'Xem Demo',
    'nav.contactUs': 'Liên hệ với chúng tôi',
    
    // Pricing
    'pricing.title': 'Bảng giá đơn giản và minh bạch',
    'pricing.subtitle': 'Chọn gói phù hợp với nhu cầu doanh nghiệp của bạn. Tất cả các gói đều bao gồm thiết lập miễn phí, đào tạo và dùng thử 14 ngày không cam kết.',
    'pricing.starter': 'Starter',
    'pricing.growth': 'Growth', 
    'pricing.business': 'Business',
    'pricing.enterprise': 'Enterprise',
    'pricing.month': '/tháng',
    'pricing.contactPricing': 'Liên hệ để báo giá',
    'pricing.getStarted': 'Bắt đầu',
    'pricing.contactForPricing': 'Liên hệ để báo giá',
    'pricing.freeTrial': 'Dùng thử 14 ngày miễn phí',
    'pricing.noSetupFees': 'Không phí thiết lập',
    'pricing.cancelAnytime': 'Hủy bất cứ lúc nào',
    'pricing.mostPopular': 'Phổ biến nhất',
    
    // Plan descriptions
    'pricing.starter.desc': 'Hoàn hảo cho các doanh nghiệp nhỏ mới bắt đầu với chatbot AI',
    'pricing.growth.desc': 'Lý tưởng cho các công ty đang phát triển với nhu cầu tương tác cao hơn',
    'pricing.business.desc': 'Giải pháp toàn diện cho các doanh nghiệp có yêu cầu chuyên nghiệp',
    'pricing.enterprise.desc': 'Giải pháp tùy chỉnh cho các tổ chức lớn với yêu cầu cụ thể',
    
    // Features
    'feature.conversations': 'cuộc hội thoại/tháng',
    'feature.unlimited': 'Không giới hạn',
    'feature.basicTemplates': 'Mẫu chatbot cơ bản',
    'feature.advancedTemplates': 'Mẫu chatbot nâng cao',
    'feature.customDesign': 'Thiết kế tùy chỉnh',
    'feature.customAI': 'Đào tạo AI tùy chỉnh',
    'feature.websiteIntegration': 'Tích hợp website',
    'feature.multiChannel': 'Triển khai đa kênh',
    'feature.onPremise': 'Tùy chọn triển khai tại chỗ',
    'feature.emailSupport': 'Hỗ trợ email',
    'feature.prioritySupport': 'Hỗ trợ ưu tiên',
    'feature.phoneSupport': 'Hỗ trợ điện thoại 24/7',
    'feature.basicAnalytics': 'Bảng điều khiển phân tích cơ bản',
    'feature.advancedAnalytics': 'Phân tích nâng cao',
    'feature.advancedReporting': 'Bộ báo cáo nâng cao',
    'feature.workflows': 'quy trình làm việc được định sẵn',
    'feature.unlimitedWorkflows': 'Quy trình làm việc không giới hạn',
    'feature.customWorkflows': 'Quy trình làm việc tùy chỉnh',
    'feature.standardResponse': 'Thời gian phản hồi tiêu chuẩn',
    'feature.priorityResponse': 'Thời gian phản hồi ưu tiên',
    'feature.instantResponse': 'Phản hồi tức thì',
    'feature.crmIntegration': 'Tích hợp CRM',
    'feature.abTesting': 'Khả năng A/B testing',
    'feature.leadQualification': 'Đánh giá khách hàng tiềm năng',
    'feature.customBranding': 'Thương hiệu tùy chỉnh',
    'feature.dedicatedManager': 'Quản lý tài khoản chuyên dụng',
    'feature.security': 'Bảo mật & tuân thủ nâng cao',
    'feature.customIntegrations': 'Tích hợp tùy chỉnh',
    'feature.slaGuarantees': 'Đảm bảo SLA',
    'feature.whiteLabel': 'Giải pháp nhãn trắng',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.features': 'Features', 
    'nav.caseStudies': 'Case Studies',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.getDemo': 'Get Demo',
    'nav.contactUs': 'Contact Us',
    
    // Pricing
    'pricing.title': 'Simple, Transparent Pricing',
    'pricing.subtitle': 'Choose the plan that fits your business needs. All plans include free setup, training, and a 14-day free trial with no commitments.',
    'pricing.starter': 'Starter',
    'pricing.growth': 'Growth',
    'pricing.business': 'Business', 
    'pricing.enterprise': 'Enterprise',
    'pricing.month': '/month',
    'pricing.contactPricing': 'Contact for pricing',
    'pricing.getStarted': 'Get Started',
    'pricing.contactForPricing': 'Contact for Pricing',
    'pricing.freeTrial': 'Free 14-day trial',
    'pricing.noSetupFees': 'No setup fees',
    'pricing.cancelAnytime': 'Cancel anytime',
    'pricing.mostPopular': 'Most Popular',
    
    // Plan descriptions
    'pricing.starter.desc': 'Perfect for small businesses getting started with AI chatbots',
    'pricing.growth.desc': 'Ideal for growing companies with higher volume needs',
    'pricing.business.desc': 'Comprehensive solution for businesses with professional requirements',
    'pricing.enterprise.desc': 'Tailored solutions for large organizations with specific requirements',
    
    // Features
    'feature.conversations': 'conversations/month',
    'feature.unlimited': 'Unlimited',
    'feature.basicTemplates': 'Basic chatbot templates',
    'feature.advancedTemplates': 'Advanced chatbot templates',
    'feature.customDesign': 'Custom chatbot design',
    'feature.customAI': 'Custom AI model training',
    'feature.websiteIntegration': 'Website integration',
    'feature.multiChannel': 'Multi-channel deployment',
    'feature.onPremise': 'On-premise deployment option',
    'feature.emailSupport': 'Email support',
    'feature.prioritySupport': 'Priority support',
    'feature.phoneSupport': '24/7 phone support',
    'feature.basicAnalytics': 'Basic analytics dashboard',
    'feature.advancedAnalytics': 'Advanced analytics',
    'feature.advancedReporting': 'Advanced reporting suite',
    'feature.workflows': 'predefined workflows',
    'feature.unlimitedWorkflows': 'Unlimited workflows',
    'feature.customWorkflows': 'Custom workflows',
    'feature.standardResponse': 'Standard response time',
    'feature.priorityResponse': 'Priority response time',
    'feature.instantResponse': 'Instant response',
    'feature.crmIntegration': 'CRM integrations',
    'feature.abTesting': 'A/B testing capabilities',
    'feature.leadQualification': 'Lead qualification',
    'feature.customBranding': 'Custom branding',
    'feature.dedicatedManager': 'Dedicated account manager',
    'feature.security': 'Advanced security & compliance',
    'feature.customIntegrations': 'Custom integrations',
    'feature.slaGuarantees': 'SLA guarantees',
    'feature.whiteLabel': 'White-label solution',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('vi');

  const t = (key: string): string => {
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
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
