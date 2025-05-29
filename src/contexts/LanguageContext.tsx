
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
    
    // Home Page
    'home.hero.title': 'Supercharge',
    'home.hero.subtitle': 'Customer Conversations',
    'home.hero.subtitle2': 'with',
    'home.hero.subtitle3': 'AI-Driven Chatbots',
    'home.hero.description': 'Chuyển đổi hỗ trợ khách hàng thành động lực tăng doanh thu.\nTriển khai chatbot thông minh tương tác, chuyển đổi và làm hài lòng khách hàng 24/7.',
    'home.hero.getDemo': 'Xem Demo Miễn Phí',
    'home.hero.learnMore': 'Tìm hiểu thêm',
    
    // Why D2 Group
    'home.why.title': 'Tại sao chọn',
    'home.why.subtitle': 'Chúng tôi kết hợp công nghệ AI tiên tiến với chuyên môn kinh doanh sâu rộng để cung cấp chatbot thực sự hiểu khách hàng của bạn',
    'home.why.ai.title': 'Trí tuệ AI',
    'home.why.ai.desc': 'Xử lý ngôn ngữ tự nhiên tiên tiến hiểu ngữ cảnh và ý định',
    'home.why.security.title': 'Bảo mật Doanh nghiệp',
    'home.why.security.desc': 'Mã hóa cấp ngân hàng và tuân thủ các tiêu chuẩn bảo mật toàn cầu',
    'home.why.results.title': 'Kết quả Đã được Chứng minh',
    'home.why.results.desc': 'Trung bình tăng 40% chuyển đổi và giảm 60% chi phí hỗ trợ',
    'home.why.learnMore': 'Tìm hiểu thêm về chúng tôi',
    
    // Key Features
    'home.features.title': 'Tính năng',
    'home.features.subtitle': 'Mọi thứ bạn cần để tự động hóa và nâng cao cuộc trò chuyện với khách hàng',
    'home.features.smart.title': 'Cuộc trò chuyện thông minh',
    'home.features.smart.desc': 'Đối thoại tự nhiên như con người',
    'home.features.instant.title': 'Thiết lập tức thì',
    'home.features.instant.desc': 'Triển khai trong vòng 5 phút',
    'home.features.analytics.title': 'Phân tích thời gian thực',
    'home.features.analytics.desc': 'Theo dõi hiệu suất và tối ưu hóa',
    'home.features.multichannel.title': 'Đa kênh',
    'home.features.multichannel.desc': 'Website, WhatsApp, Facebook',
    'home.features.viewAll': 'Xem tất cả tính năng',
    
    // How It Works
    'home.howItWorks.title': 'Cách thức',
    'home.howItWorks.subtitle': 'Khởi động và vận hành trong 3 bước đơn giản',
    'home.howItWorks.step1.title': 'Kết nối dữ liệu của bạn',
    'home.howItWorks.step1.desc': 'Tải lên FAQ, thông tin sản phẩm và cơ sở kiến thức của bạn',
    'home.howItWorks.step2.title': 'Đào tạo Bot của bạn',
    'home.howItWorks.step2.desc': 'AI học hỏi doanh nghiệp và mô hình khách hàng của bạn',
    'home.howItWorks.step3.title': 'Triển khai & Mở rộng',
    'home.howItWorks.step3.desc': 'Khởi chạy trên các kênh và xem chuyển đổi tăng trưởng',
    
    // Use Cases
    'home.useCases.title': 'Kết quả',
    'home.useCases.subtitle': 'Xem cách các doanh nghiệp như bạn đang thắng lợi với chatbot AI',
    'home.useCases.ecommerce': 'Thương mại điện tử',
    'home.useCases.healthcare': 'Chăm sóc sức khỏe',
    'home.useCases.education': 'Giáo dục',
    'home.useCases.banking': 'Ngân hàng',
    'home.useCases.realestate': 'Bất động sản',
    'home.useCases.travel': 'Du lịch',
    'home.useCases.viewCaseStudies': 'Xem nghiên cứu trường hợp',
    
    // Testimonials
    'home.testimonials.title': 'Khách hàng',
    'home.testimonials.subtitle': 'Tham gia cùng 500+ doanh nghiệp đã chuyển đổi trải nghiệm khách hàng',
    'home.testimonials.1.content': 'Chatbot của D2 Group đã tăng chuyển đổi khách hàng tiềm năng của chúng tôi 45% chỉ trong 3 tháng. AI thực sự hiểu khách hàng của chúng tôi.',
    'home.testimonials.2.content': 'Tự động hóa hỗ trợ khách hàng 24/7 đã cách mạng hóa chất lượng dịch vụ của chúng tôi. Khách hàng yêu thích phản hồi tức thì.',
    'home.testimonials.3.content': 'Việc triển khai diễn ra suôn sẻ và ROI có thể thấy được trong vài tuần. Điểm hài lòng của sinh viên đạt mức cao nhất từ trước đến nay.',
    
    // Partners
    'home.partners.title': 'Được tin tưởng bởi',
    'home.partners.subtitle': 'Tham gia cùng những nhà lãnh đạo ngành này đã triển khai giải pháp của chúng tôi',
    
    // Home Pricing
    'home.pricing.title': 'Bảng giá',
    'home.pricing.subtitle': 'Chọn gói phù hợp với nhu cầu doanh nghiệp của bạn',
    'home.pricing.seeFullPricing': 'Xem bảng giá đầy đủ',
    
    // FAQ
    'home.faq.title': 'Câu hỏi',
    'home.faq.subtitle': 'Câu trả lời nhanh cho những câu hỏi thường gặp',
    'home.faq.q1': 'Chúng tôi có thể triển khai chatbot nhanh như thế nào?',
    'home.faq.a1': 'Hầu hết khách hàng đều hoạt động trong vòng 24-48 giờ. Thiết lập cơ bản chỉ mất 5 phút.',
    'home.faq.q2': 'Có tích hợp với CRM hiện tại của chúng tôi không?',
    'home.faq.a2': 'Có, chúng tôi tích hợp với hơn 50 nền tảng bao gồm Salesforce, HubSpot và API tùy chỉnh.',
    'home.faq.q3': 'ROI dự kiến là bao nhiêu?',
    'home.faq.a3': 'Khách hàng thường thấy ROI 3-5 lần trong vòng 6 tháng thông qua tăng chuyển đổi và giảm chi phí hỗ trợ.',
    'home.faq.viewFullFaq': 'Xem FAQ đầy đủ',
    
    // Final CTA
    'home.finalCta.title': 'Sẵn sàng',
    'home.finalCta.title2': 'Tự động hóa',
    'home.finalCta.title3': 'Cuộc trò chuyện khách hàng của bạn?',
    'home.finalCta.description': 'Tham gia cùng hàng trăm doanh nghiệp đã chuyển đổi trải nghiệm khách hàng với chatbot AI của D2 Group. Bắt đầu dùng thử miễn phí ngay hôm nay và xem kết quả trong vòng 48 giờ.',
    'home.finalCta.startTrial': 'Bắt đầu dùng thử miễn phí',
    'home.finalCta.bookDemo': 'Đặt lịch Demo',
    'home.finalCta.freeTrial': 'Dùng thử 14 ngày miễn phí',
    'home.finalCta.noCreditCard': 'Không cần thẻ tín dụng',
    'home.finalCta.setupIn5': 'Thiết lập trong 5 phút',
    
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
    
    // Common terms
    'common.worksWith': 'Hoạt động với',
    'common.includes': 'Bao gồm',
    'common.plus': 'Cộng',
    'common.per': 'mỗi',
    'common.up': 'Lên đến',
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
    
    // Home Page
    'home.hero.title': 'Supercharge',
    'home.hero.subtitle': 'Customer Conversations',
    'home.hero.subtitle2': 'with',
    'home.hero.subtitle3': 'AI-Driven Chatbots',
    'home.hero.description': 'Transform customer support into a revenue driver.\nDeploy intelligent chatbots that engage, convert, and delight customers 24/7.',
    'home.hero.getDemo': 'Get Free Demo',
    'home.hero.learnMore': 'Learn More',
    
    // Why D2 Group
    'home.why.title': 'Why Choose',
    'home.why.subtitle': 'We combine cutting-edge AI technology with deep business expertise to deliver chatbots that truly understand your customers',
    'home.why.ai.title': 'AI-Powered Intelligence',
    'home.why.ai.desc': 'Advanced natural language processing that understands context and intent',
    'home.why.security.title': 'Enterprise Security',
    'home.why.security.desc': 'Bank-grade encryption and compliance with global security standards',
    'home.why.results.title': 'Proven Results',
    'home.why.results.desc': 'Average 40% increase in conversions and 60% reduction in support costs',
    'home.why.learnMore': 'Learn More About Us',
    
    // Key Features
    'home.features.title': 'Key Features',
    'home.features.subtitle': 'Everything you need to automate and enhance customer conversations',
    'home.features.smart.title': 'Smart Conversations',
    'home.features.smart.desc': 'Natural dialogue that feels human',
    'home.features.instant.title': 'Instant Setup',
    'home.features.instant.desc': 'Deploy in under 5 minutes',
    'home.features.analytics.title': 'Real-time Analytics',
    'home.features.analytics.desc': 'Track performance and optimize',
    'home.features.multichannel.title': 'Multi-channel',
    'home.features.multichannel.desc': 'Website, WhatsApp, Facebook',
    'home.features.viewAll': 'View All Features',
    
    // How It Works
    'home.howItWorks.title': 'How It Works',
    'home.howItWorks.subtitle': 'Get up and running in 3 simple steps',
    'home.howItWorks.step1.title': 'Connect Your Data',
    'home.howItWorks.step1.desc': 'Upload your FAQs, product info, and knowledge base',
    'home.howItWorks.step2.title': 'Train Your Bot',
    'home.howItWorks.step2.desc': 'AI learns your business and customer patterns',
    'home.howItWorks.step3.title': 'Deploy & Scale',
    'home.howItWorks.step3.desc': 'Launch across channels and watch conversions grow',
    
    // Use Cases
    'home.useCases.title': 'Proven Results',
    'home.useCases.subtitle': 'See how businesses like yours are winning with AI chatbots',
    'home.useCases.ecommerce': 'E-commerce',
    'home.useCases.healthcare': 'Healthcare',
    'home.useCases.education': 'Education',
    'home.useCases.banking': 'Banking',
    'home.useCases.realestate': 'Real Estate',
    'home.useCases.travel': 'Travel',
    'home.useCases.viewCaseStudies': 'View Case Studies',
    
    // Testimonials
    'home.testimonials.title': 'What Our Customers Say',
    'home.testimonials.subtitle': 'Join 500+ businesses already transforming their customer experience',
    'home.testimonials.1.content': 'D2 Group\'s chatbot increased our lead conversion by 45% in just 3 months. The AI truly understands our customers.',
    'home.testimonials.2.content': 'The 24/7 customer support automation has revolutionized our service quality. Customers love the instant responses.',
    'home.testimonials.3.content': 'Implementation was seamless and ROI was visible within weeks. Our student satisfaction scores hit an all-time high.',
    
    // Partners
    'home.partners.title': 'Trusted by Leading Organizations',
    'home.partners.subtitle': 'Join these industry leaders who have deployed our solutions',
    
    // Home Pricing
    'home.pricing.title': 'Simple, Transparent Pricing',
    'home.pricing.subtitle': 'Choose the plan that fits your business needs',
    'home.pricing.seeFullPricing': 'See Full Pricing',
    
    // FAQ
    'home.faq.title': 'Frequently Asked Questions',
    'home.faq.subtitle': 'Quick answers to common questions',
    'home.faq.q1': 'How quickly can we deploy the chatbot?',
    'home.faq.a1': 'Most clients are live within 24-48 hours. Basic setup takes just 5 minutes.',
    'home.faq.q2': 'Does it integrate with our existing CRM?',
    'home.faq.a2': 'Yes, we integrate with 50+ platforms including Salesforce, HubSpot, and custom APIs.',
    'home.faq.q3': 'What\'s the expected ROI?',
    'home.faq.a3': 'Clients typically see 3-5x ROI within 6 months through increased conversions and reduced support costs.',
    'home.faq.viewFullFaq': 'View Full FAQ',
    
    // Final CTA
    'home.finalCta.title': 'Ready to',
    'home.finalCta.title2': 'Automate',
    'home.finalCta.title3': 'Your Customer Conversations?',
    'home.finalCta.description': 'Join hundreds of businesses that have already transformed their customer experience with D2 Group\'s AI chatbots. Start your free trial today and see results within 48 hours.',
    'home.finalCta.startTrial': 'Start Free Trial',
    'home.finalCta.bookDemo': 'Book a Demo',
    'home.finalCta.freeTrial': 'Free 14-day trial',
    'home.finalCta.noCreditCard': 'No credit card required',
    'home.finalCta.setupIn5': 'Setup in 5 minutes',
    
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
    
    // Common terms
    'common.worksWith': 'Works with',
    'common.includes': 'Includes',
    'common.plus': 'Plus',
    'common.per': 'per',
    'common.up': 'Up to',
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
