
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
      
      // About Page
      'about.hero.title': 'About D2 Group',
      'about.hero.subtitle': 'Leading the AI revolution in customer engagement.',
      'about.hero.description': 'Founded in 2019, D2 Group has been at the forefront of AI chatbot technology, helping businesses across Southeast Asia transform their customer interactions.',
      'about.stats.clients': 'Happy Clients',
      'about.stats.countries': 'Countries Served',
      'about.stats.uptime': 'Service Uptime',
      'about.mission.title': 'Our Mission & Values',
      'about.mission.description': 'We believe in democratizing AI technology to help businesses of all sizes create meaningful connections with their customers through intelligent automation.',
      'about.mission.global.title': 'Global Reach',
      'about.mission.global.desc': 'Serving businesses across 12 countries with localized solutions',
      'about.mission.innovation.title': 'Innovation First',
      'about.mission.innovation.desc': 'Continuously pushing the boundaries of conversational AI technology',
      'about.mission.security.title': 'Security & Privacy',
      'about.mission.security.desc': 'Enterprise-grade security with complete data protection and compliance',
      'about.vision.title': 'Our Vision',
      'about.vision.description': 'To become the leading AI chatbot platform in Southeast Asia, empowering every business to deliver exceptional customer experiences.',
      'about.team.title': 'Meet Our Team',
      'about.team.subtitle': 'Passionate experts dedicated to revolutionizing customer engagement through AI innovation.',
      'about.journey.title': 'Our Journey',
      'about.journey.subtitle': 'From startup to industry leader - the milestones that shaped our story',
      'about.awards.title': 'Recognition & Awards',
      'about.awards.subtitle': 'Industry recognition for our innovation and excellence',
      'about.cta.title': 'Ready to Join Our Success Story?',
      'about.cta.description': 'Let us help you transform your customer engagement with our proven AI chatbot solutions.',
      'about.cta.getStarted': 'Get Started Today',
      'about.cta.scheduleCall': 'Schedule a Call',

      // Features Page
      'features.hero.title': 'Powerful',
      'features.hero.titleHighlight': 'AI Features',
      'features.hero.titleEnd': 'for Modern Businesses',
      'features.hero.description': 'Discover the comprehensive suite of AI-powered features that make our chatbots the smartest choice for your business.',
      'features.hero.cta': 'Start Free Trial',
      
      'features.core.title': 'Core',
      'features.core.titleHighlight': 'Features',
      'features.core.subtitle': 'Everything you need to create exceptional customer experiences',
      
      'features.core.nlp.title': 'Advanced Natural Language Processing',
      'features.core.nlp.desc': 'Our AI understands context, intent, and nuance in customer conversations',
      'features.core.nlp.detail1': 'Multi-language support including English, Vietnamese, Thai',
      'features.core.nlp.detail2': 'Context-aware responses that maintain conversation flow',
      'features.core.nlp.detail3': 'Intent recognition with 95% accuracy',
      'features.core.nlp.detail4': 'Sentiment analysis for emotional intelligence',
      
      'features.core.multiChannel.title': 'Multi-Channel Deployment',
      'features.core.multiChannel.desc': 'Deploy across all major communication platforms seamlessly',
      'features.core.multiChannel.detail1': 'Website chat widget with customizable design',
      'features.core.multiChannel.detail2': 'WhatsApp Business API integration',
      'features.core.multiChannel.detail3': 'Facebook Messenger and Instagram support',
      'features.core.multiChannel.detail4': 'Telegram and Viber connectivity',
      
      'features.core.realTime.title': 'Real-Time Analytics & Insights',
      'features.core.realTime.desc': 'Comprehensive analytics to optimize your chatbot performance',
      'features.core.realTime.detail1': 'Live conversation monitoring dashboard',
      'features.core.realTime.detail2': 'Customer satisfaction scoring',
      'features.core.realTime.detail3': 'Conversion tracking and ROI metrics',
      'features.core.realTime.detail4': 'Custom reporting and data export',
      
      'features.core.security.title': 'Enterprise-Grade Security',
      'features.core.security.desc': 'Bank-level security to protect your business and customer data',
      'features.core.security.detail1': 'End-to-end encryption for all conversations',
      'features.core.security.detail2': 'GDPR and PDPA compliance',
      'features.core.security.detail3': 'SOC 2 Type II certified infrastructure',
      'features.core.security.detail4': 'Regular security audits and penetration testing',
      
      'features.core.deployment.title': 'Rapid Deployment',
      'features.core.deployment.desc': 'Get your chatbot live in minutes, not weeks',
      'features.core.deployment.detail1': 'No-code chatbot builder with drag-and-drop interface',
      'features.core.deployment.detail2': 'Pre-built templates for common use cases',
      'features.core.deployment.detail3': 'One-click deployment across channels',
      'features.core.deployment.detail4': 'Automated testing and quality assurance',
      
      'features.core.conversations.title': 'Intelligent Conversations',
      'features.core.conversations.desc': 'Human-like interactions that actually help your customers',
      'features.core.conversations.detail1': 'Dynamic conversation flows based on user behavior',
      'features.core.conversations.detail2': 'Seamless handoff to human agents when needed',
      'features.core.conversations.detail3': 'Personalized responses using customer data',
      'features.core.conversations.detail4': 'Smart suggestions and quick replies',

      // Features Comparison
      'features.comparison.title': 'AI Chatbots vs',
      'features.comparison.titleHighlight': 'Traditional Support',
      'features.comparison.subtitle': 'See how AI chatbots outperform traditional customer support methods',
      'features.comparison.tableHeader.feature': 'Feature',
      'features.comparison.tableHeader.traditional': 'Traditional Support',
      'features.comparison.tableHeader.aiChatbot': 'AI Chatbot',
      'features.comparison.tableHeader.improvement': 'Improvement',
      
      'features.comparison.responseTime': 'Response Time',
      'features.comparison.traditional.responseTime': '2-24 hours',
      'features.comparison.ai.responseTime': '< 2 seconds',
      'features.comparison.improvement.responseTime': '99% faster',
      
      'features.comparison.availability': 'Availability',
      'features.comparison.traditional.availability': 'Business hours only',
      'features.comparison.ai.availability': '24/7/365',
      'features.comparison.improvement.availability': 'Always on',
      
      'features.comparison.scalability': 'Scalability',
      'features.comparison.traditional.scalability': 'Limited by staff',
      'features.comparison.ai.scalability': 'Unlimited concurrent chats',
      'features.comparison.improvement.scalability': 'Infinite scale',
      
      'features.comparison.consistency': 'Consistency',
      'features.comparison.traditional.consistency': 'Varies by agent',
      'features.comparison.ai.consistency': 'Always consistent',
      'features.comparison.improvement.consistency': '100% reliable',
      
      'features.comparison.costPerInteraction': 'Cost per Interaction',
      'features.comparison.traditional.costPerInteraction': '$5-15',
      'features.comparison.ai.costPerInteraction': '$0.10-0.50',
      'features.comparison.improvement.costPerInteraction': '95% cheaper',
      
      'features.comparison.languageSupport': 'Language Support',
      'features.comparison.traditional.languageSupport': '1-2 languages',
      'features.comparison.ai.languageSupport': '50+ languages',
      'features.comparison.improvement.languageSupport': '25x more',

      // Advanced Features
      'features.advanced.title': 'Advanced',
      'features.advanced.titleHighlight': 'Capabilities',
      'features.advanced.subtitle': 'Powerful features for sophisticated business requirements',
      
      'features.advanced.ai.category': 'AI & Machine Learning',
      'features.advanced.ai.conversationFlow.name': 'Dynamic Conversation Flow',
      'features.advanced.ai.conversationFlow.desc': 'AI adapts conversation paths based on user responses and behavior',
      'features.advanced.ai.intentTraining.name': 'Custom Intent Training',
      'features.advanced.ai.intentTraining.desc': 'Train the AI to understand your specific business terminology',
      'features.advanced.ai.autoLearning.name': 'Continuous Learning',
      'features.advanced.ai.autoLearning.desc': 'AI improves over time by learning from interactions',
      'features.advanced.ai.fallbackHandling.name': 'Smart Fallback Handling',
      'features.advanced.ai.fallbackHandling.desc': 'Graceful handling of complex queries with human handoff',
      
      'features.advanced.integration.category': 'Integrations & APIs',
      'features.advanced.integration.crm.name': 'CRM Integration',
      'features.advanced.integration.crm.desc': 'Seamless integration with Salesforce, HubSpot, and more',
      'features.advanced.integration.ecommerce.name': 'E-commerce Platforms',
      'features.advanced.integration.ecommerce.desc': 'Connect with Shopify, WooCommerce, Magento',
      'features.advanced.integration.customApi.name': 'Custom API Connections',
      'features.advanced.integration.customApi.desc': 'Connect to any external system via REST APIs',
      'features.advanced.integration.webhook.name': 'Webhook Support',
      'features.advanced.integration.webhook.desc': 'Real-time data sync with external applications',
      
      'features.advanced.analytics.category': 'Analytics & Reporting',
      'features.advanced.analytics.conversation.name': 'Conversation Analytics',
      'features.advanced.analytics.conversation.desc': 'Deep insights into customer conversation patterns',
      'features.advanced.analytics.performance.name': 'Performance Metrics',
      'features.advanced.analytics.performance.desc': 'Track KPIs like resolution rate, satisfaction scores',
      'features.advanced.analytics.dashboard.name': 'Custom Dashboards',
      'features.advanced.analytics.dashboard.desc': 'Build personalized analytics dashboards',
      'features.advanced.analytics.abTesting.name': 'A/B Testing',
      'features.advanced.analytics.abTesting.desc': 'Test different conversation flows and optimize performance',

      // Features Demo
      'features.demo.title': 'See It in',
      'features.demo.titleHighlight': 'Action',
      'features.demo.description': 'Experience our AI chatbot features with an interactive demonstration',
      'features.demo.interactive.title': 'Interactive Demo Available',
      'features.demo.interactive.description': 'Try our chatbot in a live environment',
      'features.demo.feature1': 'Real-time responses',
      'features.demo.feature2': 'Multi-language support',
      'features.demo.feature3': 'Smart recommendations',
      'features.demo.bookDemo': 'Book Personal Demo',
      'features.demo.viewCaseStudies': 'View Case Studies',

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
      
      // About Page (Vietnamese translations)
      'about.hero.title': 'Về D2 Group',
      'about.hero.subtitle': 'Dẫn đầu cuộc cách mạng AI trong tương tác khách hàng.',
      'about.hero.description': 'Được thành lập năm 2019, D2 Group đã tiên phong trong công nghệ chatbot AI, giúp các doanh nghiệp trên khắp Đông Nam Á chuyển đổi tương tác khách hàng.',
      'about.stats.clients': 'Khách hàng hài lòng',
      'about.stats.countries': 'Quốc gia phục vụ',
      'about.stats.uptime': 'Thời gian hoạt động',
      
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
      
      // Pricing Vietnamese
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
