
import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'vi' | 'en';
  setLanguage: (lang: 'vi' | 'en') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'vi'>('en');

  const translations = {
    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.features': 'Features',
      'nav.caseStudies': 'Case Studies',
      'nav.pricing': 'Pricing',
      'nav.contact': 'Contact',
      'nav.getDemo': 'Get a Demo',
      'nav.contactUs': 'Contact Us',
      
      // Home Hero
      'home.hero.title': 'Transform Your Business',
      'home.hero.subtitle': 'with AI-Powered',
      'home.hero.subtitle2': 'Chatbots that',
      'home.hero.subtitle3': 'Actually Work',
      'home.hero.description': 'Automate customer support, boost sales, and enhance user experience with our cutting-edge AI chatbot solutions. Join 1000+ businesses already transforming their customer conversations.',
      'home.hero.getDemo': 'Get Free Demo',
      'home.hero.learnMore': 'Learn More',
      
      // Home Why Section
      'home.why.title': 'Why Choose',
      'home.why.subtitle': 'Leading businesses trust D2 Group to deliver exceptional AI chatbot experiences that drive real results.',
      'home.why.ai.title': 'Advanced AI Technology',
      'home.why.ai.desc': 'Our chatbots use cutting-edge natural language processing to understand and respond like humans.',
      'home.why.security.title': 'Enterprise Security',
      'home.why.security.desc': 'Bank-grade security with end-to-end encryption and GDPR compliance for your peace of mind.',
      'home.why.results.title': 'Proven Results',
      'home.why.results.desc': 'Our clients see average 40% increase in conversions and 60% reduction in support costs.',
      'home.why.learnMore': 'Learn More About Us',
      
      // Home Features
      'home.features.title': 'Powerful Features',
      'home.features.subtitle': 'Everything you need to create exceptional customer experiences',
      'home.features.smart.title': 'Smart Conversations',
      'home.features.smart.desc': 'AI that understands context and provides relevant responses',
      'home.features.instant.title': 'Instant Response',
      'home.features.instant.desc': 'Lightning-fast responses under 2 seconds',
      'home.features.analytics.title': 'Advanced Analytics',
      'home.features.analytics.desc': 'Detailed insights into customer interactions and behavior',
      'home.features.multichannel.title': 'Multi-Channel Support',
      'home.features.multichannel.desc': 'Deploy across website, WhatsApp, Facebook and more',
      'home.features.viewAll': 'View All Features',
      
      // Home How It Works
      'home.howItWorks.title': 'How It Works',
      'home.howItWorks.subtitle': 'Get started in minutes with our simple 3-step process',
      'home.howItWorks.step1.title': 'Design Your Chatbot',
      'home.howItWorks.step1.desc': 'Use our intuitive drag-and-drop builder to create conversation flows that match your business needs.',
      'home.howItWorks.step2.title': 'Train & Customize',
      'home.howItWorks.step2.desc': 'Upload your data and customize responses to match your brand voice and business requirements.',
      'home.howItWorks.step3.title': 'Deploy & Monitor',
      'home.howItWorks.step3.desc': 'Launch across multiple channels and monitor performance with real-time analytics and insights.',
      
      // Home Use Cases
      'home.useCases.title': 'Industry Solutions',
      'home.useCases.subtitle': 'Proven results across multiple industries',
      'home.useCases.ecommerce': 'E-commerce',
      'home.useCases.healthcare': 'Healthcare',
      'home.useCases.education': 'Education',
      'home.useCases.banking': 'Banking',
      'home.useCases.realestate': 'Real Estate',
      'home.useCases.travel': 'Travel',
      'home.useCases.viewCaseStudies': 'View Case Studies',
      
      // Home Testimonials
      'home.testimonials.title': 'Customer Success Stories',
      'home.testimonials.subtitle': 'See what our clients say about their experience with D2 Group',
      'home.testimonials.1.content': 'D2 Group\'s AI chatbot increased our customer satisfaction by 45% and reduced response time to under 1 minute. Exceptional results!',
      'home.testimonials.2.content': 'The implementation was seamless and the ROI was immediate. Our conversion rate improved by 35% in the first month.',
      'home.testimonials.3.content': 'Outstanding support and technology. The chatbot handles 80% of our student inquiries automatically with high accuracy.',
      
      // Home Partners
      'home.partners.title': 'Trusted Partners',
      'home.partners.subtitle': 'Working with leading companies across Vietnam',
      
      // Home Pricing
      'home.pricing.title': 'Simple Pricing',
      'home.pricing.subtitle': 'Choose the plan that fits your business needs',
      'home.pricing.seeFullPricing': 'See Full Pricing Details',
      
      // Home FAQ
      'home.faq.title': 'Frequently Asked Questions',
      'home.faq.subtitle': 'Everything you need to know about our AI chatbot solutions',
      'home.faq.q1': 'How quickly can I deploy a chatbot?',
      'home.faq.a1': 'Most businesses can have a basic chatbot live within 24-48 hours. Complex customizations may take 1-2 weeks.',
      'home.faq.q2': 'Do you provide training and support?',
      'home.faq.a2': 'Yes, we provide comprehensive training, 24/7 support, and dedicated account management for all our clients.',
      'home.faq.q3': 'Can the chatbot integrate with our existing systems?',
      'home.faq.a3': 'Absolutely! Our chatbots can integrate with CRM, helpdesk, e-commerce platforms, and most business applications.',
      'home.faq.viewFullFaq': 'View Full FAQ',
      
      // Home Final CTA
      'home.finalCta.title': 'Ready to Transform',
      'home.finalCta.title2': 'Your Business',
      'home.finalCta.title3': 'Today?',
      'home.finalCta.description': 'Join thousands of businesses already using D2 Group\'s AI chatbots to improve customer experience and drive growth.',
      'home.finalCta.startTrial': 'Start Free Trial',
      'home.finalCta.bookDemo': 'Book a Demo',
      'home.finalCta.freeTrial': '14-day free trial',
      'home.finalCta.noCreditCard': 'No credit card required',
      'home.finalCta.setupIn5': 'Setup in 5 minutes',
      
      // Pricing
      'pricing.starter': 'Starter',
      'pricing.growth': 'Growth',
      'pricing.business': 'Business',
      'pricing.enterprise': 'Enterprise',
      'pricing.month': '/month',
      'pricing.contactPricing': 'Contact',
      'pricing.mostPopular': 'Most Popular',
      'pricing.getStarted': 'Get Started',
      'pricing.contactForPricing': 'Contact Sales',
      'pricing.starter.desc': 'Perfect for small businesses starting with AI chatbots',
      'pricing.growth.desc': 'Ideal for growing businesses that need more features',
      'pricing.business.desc': 'Suitable for large businesses with high customization needs',
      'pricing.enterprise.desc': 'Enterprise solution with fully customizable features',
      
      // Features
      'feature.conversations': 'conversations/month',
      'feature.basicTemplates': 'Basic chatbot templates',
      'feature.advancedTemplates': 'Advanced chatbot templates',
      'feature.websiteIntegration': 'Website integration',
      'feature.multiChannel': 'Multi-channel (Website, Facebook, WhatsApp)',
      'feature.emailSupport': 'Email support',
      'feature.prioritySupport': 'Priority support',
      'feature.phoneSupport': '24/7 phone support',
      'feature.basicAnalytics': 'Basic analytics',
      'feature.advancedAnalytics': 'Advanced analytics',
      'feature.advancedReporting': 'Advanced reporting',
      'feature.workflows': 'automated workflows',
      'feature.unlimitedWorkflows': 'Unlimited workflows',
      'feature.standardResponse': 'Standard response time',
      'feature.crmIntegration': 'CRM integration',
      'feature.abTesting': 'A/B testing',
      'feature.leadQualification': 'Lead qualification',
      'feature.customDesign': 'Custom chatbot design',
      'feature.customBranding': 'Custom branding',
      'feature.customAI': 'Fully custom AI',
      'feature.unlimited': 'Unlimited',
      'feature.onPremise': 'On-premise deployment',
      'feature.dedicatedManager': 'Dedicated account manager',
      'feature.security': 'Enterprise-grade security',
      'feature.customIntegrations': 'Custom integrations',
      'feature.slaGuarantees': 'SLA commitment',
      'feature.whiteLabel': 'White label',
    },
    vi: {
      // Navigation
      'nav.home': 'Trang chủ',
      'nav.about': 'Về chúng tôi',
      'nav.features': 'Tính năng',
      'nav.caseStudies': 'Nghiên cứu điển hình',
      'nav.pricing': 'Bảng giá',
      'nav.contact': 'Liên hệ',
      'nav.getDemo': 'Nhận bản Demo',
      'nav.contactUs': 'Liên hệ với chúng tôi',
      
      // Home Hero
      'home.hero.title': 'Chuyển đổi doanh nghiệp',
      'home.hero.subtitle': 'với Chatbot AI',
      'home.hero.subtitle2': 'thực sự',
      'home.hero.subtitle3': 'hiệu quả',
      'home.hero.description': 'Tự động hóa hỗ trợ khách hàng, tăng doanh số và nâng cao trải nghiệm người dùng với giải pháp chatbot AI tiên tiến. Tham gia cùng 1000+ doanh nghiệp đã chuyển đổi cuộc trò chuyện khách hàng.',
      'home.hero.getDemo': 'Nhận Demo miễn phí',
      'home.hero.learnMore': 'Tìm hiểu thêm',
      
      // Home Why Section
      'home.why.title': 'Tại sao chọn',
      'home.why.subtitle': 'Các doanh nghiệp hàng đầu tin tưởng D2 Group để mang lại trải nghiệm chatbot AI đặc biệt tạo ra kết quả thực tế.',
      'home.why.ai.title': 'Công nghệ AI tiên tiến',
      'home.why.ai.desc': 'Chatbot của chúng tôi sử dụng xử lý ngôn ngữ tự nhiên tiên tiến để hiểu và phản hồi như con người.',
      'home.why.security.title': 'Bảo mật doanh nghiệp',
      'home.why.security.desc': 'Bảo mật cấp ngân hàng với mã hóa đầu cuối và tuân thủ GDPR để bạn an tâm.',
      'home.why.results.title': 'Kết quả đã được chứng minh',
      'home.why.results.desc': 'Khách hàng của chúng tôi thấy tăng trung bình 40% chuyển đổi và giảm 60% chi phí hỗ trợ.',
      'home.why.learnMore': 'Tìm hiểu thêm về chúng tôi',
      
      // Continue with other Vietnamese translations...
      'home.features.title': 'Tính năng mạnh mẽ',
      'home.features.subtitle': 'Mọi thứ bạn cần để tạo ra trải nghiệm khách hàng đặc biệt',
      'home.features.smart.title': 'Cuộc trò chuyện thông minh',
      'home.features.smart.desc': 'AI hiểu ngữ cảnh và cung cấp phản hồi phù hợp',
      'home.features.instant.title': 'Phản hồi tức thì',
      'home.features.instant.desc': 'Phản hồi siêu nhanh dưới 2 giây',
      'home.features.analytics.title': 'Phân tích nâng cao',
      'home.features.analytics.desc': 'Thông tin chi tiết về tương tác và hành vi khách hàng',
      'home.features.multichannel.title': 'Hỗ trợ đa kênh',
      'home.features.multichannel.desc': 'Triển khai trên website, WhatsApp, Facebook và nhiều hơn nữa',
      'home.features.viewAll': 'Xem tất cả tính năng',
      
      // Add other Vietnamese translations as needed...
      'pricing.starter': 'Khởi đầu',
      'pricing.growth': 'Phát triển',
      'pricing.business': 'Doanh nghiệp',
      'pricing.enterprise': 'Tập đoàn',
      'pricing.month': '/tháng',
      'pricing.contactPricing': 'Liên hệ',
      'pricing.mostPopular': 'Phổ biến nhất',
      'pricing.getStarted': 'Bắt đầu',
      'pricing.contactForPricing': 'Liên hệ bán hàng',
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
