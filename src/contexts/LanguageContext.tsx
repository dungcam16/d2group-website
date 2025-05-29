
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

      // Contact Page
      'contact.hero.title': 'Get in Touch',
      'contact.hero.subtitle': 'Ready to transform your customer conversations? Let\'s discuss how D2 Group can help you achieve your automation goals. Our experts are standing by to provide personalized guidance.',
      'contact.form.title': 'Let\'s Start the Conversation',
      'contact.form.subtitle': 'Fill out the form below and our team will reach out to you within 24 hours.',
      'contact.info.title': 'Contact Information',
      'contact.map.title': 'Find Us',
      'contact.thanks.title': 'Thank You for Your Interest!',
      'contact.thanks.subtitle': 'Your message has been received and our team will respond within 24 hours. In the meantime, feel free to connect with us on social media.',

      // Case Studies
      'caseStudies.hero.title': 'Real Success Stories',
      'caseStudies.hero.subtitle': 'Discover how businesses across industries have transformed their customer experience and achieved remarkable results with D2 Group\'s AI chatbot solutions.',
      'caseStudies.industries.title': 'Industries We Serve',
      'caseStudies.industries.subtitle': 'Proven success across diverse business sectors',
      'caseStudies.cta.title': 'Ready to Write Your Success Story?',
      'caseStudies.cta.subtitle': 'Join hundreds of successful businesses that have transformed their customer experience with D2 Group. Let\'s discuss how we can deliver similar results for your organization.',
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
      
      // About Page
      'about.hero.title': 'Về D2 Group',
      'about.hero.subtitle': 'Dẫn đầu cuộc cách mạng AI trong tương tác khách hàng.',
      'about.hero.description': 'Được thành lập năm 2019, D2 Group đã tiên phong trong công nghệ chatbot AI, giúp các doanh nghiệp trên khắp Đông Nam Á chuyển đổi tương tác khách hàng.',
      'about.stats.clients': 'Khách hàng hài lòng',
      'about.stats.countries': 'Quốc gia phục vụ',
      'about.stats.uptime': 'Thời gian hoạt động',
      'about.mission.title': 'Sứ mệnh & Giá trị',
      'about.mission.description': 'Chúng tôi tin vào việc dân chủ hóa công nghệ AI để giúp các doanh nghiệp ở mọi quy mô tạo ra những kết nối có ý nghĩa với khách hàng thông qua tự động hóa thông minh.',
      'about.mission.global.title': 'Phạm vi toàn cầu',
      'about.mission.global.desc': 'Phục vụ doanh nghiệp trên 12 quốc gia với các giải pháp bản địa hóa',
      'about.mission.innovation.title': 'Đổi mới đầu tiên',
      'about.mission.innovation.desc': 'Liên tục đẩy ranh giới của công nghệ AI đối thoại',
      'about.mission.security.title': 'Bảo mật & Quyền riêng tư',
      'about.mission.security.desc': 'Bảo mật cấp doanh nghiệp với bảo vệ dữ liệu hoàn toàn và tuân thủ',
      'about.vision.title': 'Tầm nhìn của chúng tôi',
      'about.vision.description': 'Trở thành nền tảng chatbot AI hàng đầu tại Đông Nam Á, trao quyền cho mọi doanh nghiệp cung cấp trải nghiệm khách hàng đặc biệt.',
      'about.team.title': 'Gặp gỡ đội ngũ',
      'about.team.subtitle': 'Các chuyên gia đam mê cống hiến cho việc cách mạng hóa tương tác khách hàng thông qua đổi mới AI.',
      'about.journey.title': 'Hành trình của chúng tôi',
      'about.journey.subtitle': 'Từ startup đến nhà lãnh đạo ngành - những cột mốc định hình câu chuyện của chúng tôi',
      'about.awards.title': 'Công nhận & Giải thưởng',
      'about.awards.subtitle': 'Sự công nhận của ngành về sự đổi mới và xuất sắc của chúng tôi',
      'about.cta.title': 'Sẵn sàng tham gia câu chuyện thành công?',
      'about.cta.description': 'Hãy để chúng tôi giúp bạn chuyển đổi tương tác khách hàng với các giải pháp chatbot AI đã được chứng minh.',
      'about.cta.getStarted': 'Bắt đầu ngay hôm nay',
      'about.cta.scheduleCall': 'Lên lịch cuộc gọi',

      // Features Page
      'features.hero.title': 'Mạnh mẽ',
      'features.hero.titleHighlight': 'Tính năng AI',
      'features.hero.titleEnd': 'cho doanh nghiệp hiện đại',
      'features.hero.description': 'Khám phá bộ tính năng toàn diện được hỗ trợ bởi AI làm cho chatbot của chúng tôi trở thành lựa chọn thông minh nhất cho doanh nghiệp của bạn.',
      'features.hero.cta': 'Bắt đầu dùng thử miễn phí',
      
      'features.core.title': 'Tính năng',
      'features.core.titleHighlight': 'cốt lõi',
      'features.core.subtitle': 'Mọi thứ bạn cần để tạo ra trải nghiệm khách hàng đặc biệt',
      
      'features.core.nlp.title': 'Xử lý ngôn ngữ tự nhiên nâng cao',
      'features.core.nlp.desc': 'AI của chúng tôi hiểu ngữ cảnh, ý định và sắc thái trong cuộc trò chuyện khách hàng',
      'features.core.nlp.detail1': 'Hỗ trợ đa ngôn ngữ bao gồm tiếng Anh, tiếng Việt, tiếng Thái',
      'features.core.nlp.detail2': 'Phản hồi nhận biết ngữ cảnh duy trì luồng hội thoại',
      'features.core.nlp.detail3': 'Nhận dạng ý định với độ chính xác 95%',
      'features.core.nlp.detail4': 'Phân tích cảm xúc cho trí tuệ cảm xúc',
      
      'features.core.multiChannel.title': 'Triển khai đa kênh',
      'features.core.multiChannel.desc': 'Triển khai liền mạch trên tất cả các nền tảng giao tiếp chính',
      'features.core.multiChannel.detail1': 'Widget chat website với thiết kế có thể tùy chỉnh',
      'features.core.multiChannel.detail2': 'Tích hợp API WhatsApp Business',
      'features.core.multiChannel.detail3': 'Hỗ trợ Facebook Messenger và Instagram',
      'features.core.multiChannel.detail4': 'Kết nối Telegram và Viber',
      
      'features.core.realTime.title': 'Phân tích & Thông tin thời gian thực',
      'features.core.realTime.desc': 'Phân tích toàn diện để tối ưu hóa hiệu suất chatbot của bạn',
      'features.core.realTime.detail1': 'Bảng điều khiển giám sát cuộc trò chuyện trực tiếp',
      'features.core.realTime.detail2': 'Chấm điểm sự hài lòng của khách hàng',
      'features.core.realTime.detail3': 'Theo dõi chuyển đổi và số liệu ROI',
      'features.core.realTime.detail4': 'Báo cáo tùy chỉnh và xuất dữ liệu',
      
      'features.core.security.title': 'Bảo mật cấp doanh nghiệp',
      'features.core.security.desc': 'Bảo mật cấp ngân hàng để bảo vệ doanh nghiệp và dữ liệu khách hàng của bạn',
      'features.core.security.detail1': 'Mã hóa đầu cuối cho tất cả cuộc trò chuyện',
      'features.core.security.detail2': 'Tuân thủ GDPR và PDPA',
      'features.core.security.detail3': 'Cơ sở hạ tầng được chứng nhận SOC 2 Type II',
      'features.core.security.detail4': 'Kiểm tra bảo mật thường xuyên và thử nghiệm xâm nhập',
      
      'features.core.deployment.title': 'Triển khai nhanh',
      'features.core.deployment.desc': 'Đưa chatbot của bạn lên sóng trong vài phút, không phải vài tuần',
      'features.core.deployment.detail1': 'Trình tạo chatbot không cần mã với giao diện kéo và thả',
      'features.core.deployment.detail2': 'Mẫu có sẵn cho các trường hợp sử dụng phổ biến',
      'features.core.deployment.detail3': 'Triển khai một cú nhấp chuột trên các kênh',
      'features.core.deployment.detail4': 'Thử nghiệm tự động và đảm bảo chất lượng',
      
      'features.core.conversations.title': 'Cuộc trò chuyện thông minh',
      'features.core.conversations.desc': 'Tương tác giống con người thực sự giúp ích cho khách hàng của bạn',
      'features.core.conversations.detail1': 'Luồng hội thoại động dựa trên hành vi người dùng',
      'features.core.conversations.detail2': 'Chuyển giao liền mạch cho đại lý con người khi cần',
      'features.core.conversations.detail3': 'Phản hồi được cá nhân hóa sử dụng dữ liệu khách hàng',
      'features.core.conversations.detail4': 'Gợi ý thông minh và phản hồi nhanh',

      // Features Comparison
      'features.comparison.title': 'Chatbot AI so với',
      'features.comparison.titleHighlight': 'Hỗ trợ truyền thống',
      'features.comparison.subtitle': 'Xem cách chatbot AI vượt trội hơn các phương pháp hỗ trợ khách hàng truyền thống',
      'features.comparison.tableHeader.feature': 'Tính năng',
      'features.comparison.tableHeader.traditional': 'Hỗ trợ truyền thống',
      'features.comparison.tableHeader.aiChatbot': 'Chatbot AI',
      'features.comparison.tableHeader.improvement': 'Cải thiện',
      
      'features.comparison.responseTime': 'Thời gian phản hồi',
      'features.comparison.traditional.responseTime': '2-24 giờ',
      'features.comparison.ai.responseTime': '< 2 giây',
      'features.comparison.improvement.responseTime': 'Nhanh hơn 99%',
      
      'features.comparison.availability': 'Tính khả dụng',
      'features.comparison.traditional.availability': 'Chỉ giờ làm việc',
      'features.comparison.ai.availability': '24/7/365',
      'features.comparison.improvement.availability': 'Luôn hoạt động',
      
      'features.comparison.scalability': 'Khả năng mở rộng',
      'features.comparison.traditional.scalability': 'Giới hạn bởi nhân viên',
      'features.comparison.ai.scalability': 'Chat đồng thời không giới hạn',
      'features.comparison.improvement.scalability': 'Quy mô vô hạn',
      
      'features.comparison.consistency': 'Tính nhất quán',
      'features.comparison.traditional.consistency': 'Thay đổi theo đại lý',
      'features.comparison.ai.consistency': 'Luôn nhất quán',
      'features.comparison.improvement.consistency': '100% đáng tin cậy',
      
      'features.comparison.costPerInteraction': 'Chi phí mỗi tương tác',
      'features.comparison.traditional.costPerInteraction': '$5-15',
      'features.comparison.ai.costPerInteraction': '$0.10-0.50',
      'features.comparison.improvement.costPerInteraction': 'Rẻ hơn 95%',
      
      'features.comparison.languageSupport': 'Hỗ trợ ngôn ngữ',
      'features.comparison.traditional.languageSupport': '1-2 ngôn ngữ',
      'features.comparison.ai.languageSupport': '50+ ngôn ngữ',
      'features.comparison.improvement.languageSupport': 'Nhiều hơn 25 lần',

      // Advanced Features
      'features.advanced.title': 'Khả năng',
      'features.advanced.titleHighlight': 'nâng cao',
      'features.advanced.subtitle': 'Tính năng mạnh mẽ cho các yêu cầu kinh doanh phức tạp',
      
      'features.advanced.ai.category': 'AI & Học máy',
      'features.advanced.ai.conversationFlow.name': 'Luồng hội thoại động',
      'features.advanced.ai.conversationFlow.desc': 'AI điều chỉnh đường dẫn hội thoại dựa trên phản hồi và hành vi của người dùng',
      'features.advanced.ai.intentTraining.name': 'Đào tạo ý định tùy chỉnh',
      'features.advanced.ai.intentTraining.desc': 'Đào tạo AI để hiểu thuật ngữ kinh doanh cụ thể của bạn',
      'features.advanced.ai.autoLearning.name': 'Học tập liên tục',
      'features.advanced.ai.autoLearning.desc': 'AI cải thiện theo thời gian bằng cách học từ các tương tác',
      'features.advanced.ai.fallbackHandling.name': 'Xử lý dự phòng thông minh',
      'features.advanced.ai.fallbackHandling.desc': 'Xử lý nhã nhặn các truy vấn phức tạp với chuyển giao con người',
      
      'features.advanced.integration.category': 'Tích hợp & API',
      'features.advanced.integration.crm.name': 'Tích hợp CRM',
      'features.advanced.integration.crm.desc': 'Tích hợp liền mạch với Salesforce, HubSpot và nhiều hơn nữa',
      'features.advanced.integration.ecommerce.name': 'Nền tảng thương mại điện tử',
      'features.advanced.integration.ecommerce.desc': 'Kết nối với Shopify, WooCommerce, Magento',
      'features.advanced.integration.customApi.name': 'Kết nối API tùy chỉnh',
      'features.advanced.integration.customApi.desc': 'Kết nối với bất kỳ hệ thống bên ngoài nào qua REST API',
      'features.advanced.integration.webhook.name': 'Hỗ trợ Webhook',
      'features.advanced.integration.webhook.desc': 'Đồng bộ dữ liệu thời gian thực với các ứng dụng bên ngoài',
      
      'features.advanced.analytics.category': 'Phân tích & Báo cáo',
      'features.advanced.analytics.conversation.name': 'Phân tích cuộc trò chuyện',
      'features.advanced.analytics.conversation.desc': 'Thông tin sâu sắc về các mẫu cuộc trò chuyện khách hàng',
      'features.advanced.analytics.performance.name': 'Số liệu hiệu suất',
      'features.advanced.analytics.performance.desc': 'Theo dõi KPI như tỷ lệ giải quyết, điểm hài lòng',
      'features.advanced.analytics.dashboard.name': 'Bảng điều khiển tùy chỉnh',
      'features.advanced.analytics.dashboard.desc': 'Xây dựng bảng điều khiển phân tích được cá nhân hóa',
      'features.advanced.analytics.abTesting.name': 'Thử nghiệm A/B',
      'features.advanced.analytics.abTesting.desc': 'Thử nghiệm các luồng hội thoại khác nhau và tối ưu hóa hiệu suất',

      // Features Demo
      'features.demo.title': 'Xem nó trong',
      'features.demo.titleHighlight': 'hành động',
      'features.demo.description': 'Trải nghiệm các tính năng chatbot AI của chúng tôi với một cuộc trình diễn tương tác',
      'features.demo.interactive.title': 'Demo tương tác có sẵn',
      'features.demo.interactive.description': 'Thử chatbot của chúng tôi trong môi trường trực tiếp',
      'features.demo.feature1': 'Phản hồi thời gian thực',
      'features.demo.feature2': 'Hỗ trợ đa ngôn ngữ',
      'features.demo.feature3': 'Đề xuất thông minh',
      'features.demo.bookDemo': 'Đặt Demo cá nhân',
      'features.demo.viewCaseStudies': 'Xem nghiên cứu điển hình',

      // Home Why Section
      'home.why.title': 'Tại sao chọn',
      'home.why.subtitle': 'Các doanh nghiệp hàng đầu tin tưởng D2 Group cung cấp trải nghiệm chatbot AI đặc biệt mang lại kết quả thực sự.',
      'home.why.ai.title': 'Công nghệ AI tiên tiến',
      'home.why.ai.desc': 'Chatbot của chúng tôi sử dụng xử lý ngôn ngữ tự nhiên tiên tiến để hiểu và phản hồi như con người.',
      'home.why.security.title': 'Bảo mật doanh nghiệp',
      'home.why.security.desc': 'Bảo mật cấp ngân hàng với mã hóa đầu cuối và tuân thủ GDPR để bạn yên tâm.',
      'home.why.results.title': 'Kết quả đã được chứng minh',
      'home.why.results.desc': 'Khách hàng của chúng tôi thấy tăng trung bình 40% chuyển đổi và giảm 60% chi phí hỗ trợ.',
      'home.why.learnMore': 'Tìm hiểu thêm về chúng tôi',
      
      // Home Features
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
      
      // Home How It Works
      'home.howItWorks.title': 'Cách hoạt động',
      'home.howItWorks.subtitle': 'Bắt đầu trong vài phút với quy trình 3 bước đơn giản của chúng tôi',
      'home.howItWorks.step1.title': 'Thiết kế chatbot của bạn',
      'home.howItWorks.step1.desc': 'Sử dụng trình tạo kéo và thả trực quan của chúng tôi để tạo luồng hội thoại phù hợp với nhu cầu kinh doanh của bạn.',
      'home.howItWorks.step2.title': 'Đào tạo & Tùy chỉnh',
      'home.howItWorks.step2.desc': 'Tải lên dữ liệu của bạn và tùy chỉnh phản hồi để phù hợp với giọng điệu thương hiệu và yêu cầu kinh doanh.',
      'home.howItWorks.step3.title': 'Triển khai & Giám sát',
      'home.howItWorks.step3.desc': 'Ra mắt trên nhiều kênh và giám sát hiệu suất với phân tích và thông tin thời gian thực.',
      
      // Home Use Cases
      'home.useCases.title': 'Giải pháp ngành',
      'home.useCases.subtitle': 'Kết quả đã được chứng minh trên nhiều ngành',
      'home.useCases.ecommerce': 'Thương mại điện tử',
      'home.useCases.healthcare': 'Chăm sóc sức khỏe',
      'home.useCases.education': 'Giáo dục',
      'home.useCases.banking': 'Ngân hàng',
      'home.useCases.realestate': 'Bất động sản',
      'home.useCases.travel': 'Du lịch',
      'home.useCases.viewCaseStudies': 'Xem nghiên cứu điển hình',
      
      // Home Testimonials
      'home.testimonials.title': 'Câu chuyện thành công của khách hàng',
      'home.testimonials.subtitle': 'Xem khách hàng nói gì về trải nghiệm với D2 Group',
      'home.testimonials.1.content': 'Chatbot AI của D2 Group đã tăng sự hài lòng của khách hàng 45% và giảm thời gian phản hồi xuống dưới 1 phút. Kết quả đặc biệt!',
      'home.testimonials.2.content': 'Việc triển khai diễn ra suôn sẻ và ROI ngay lập tức. Tỷ lệ chuyển đổi của chúng tôi cải thiện 35% trong tháng đầu tiên.',
      'home.testimonials.3.content': 'Hỗ trợ và công nghệ xuất sắc. Chatbot xử lý 80% câu hỏi sinh viên tự động với độ chính xác cao.',
      
      // Home Partners
      'home.partners.title': 'Đối tác tin cậy',
      'home.partners.subtitle': 'Làm việc với các công ty hàng đầu trên khắp Việt Nam',
      
      // Home Pricing
      'home.pricing.title': 'Bảng giá đơn giản',
      'home.pricing.subtitle': 'Chọn gói phù hợp với nhu cầu kinh doanh của bạn',
      'home.pricing.seeFullPricing': 'Xem chi tiết bảng giá đầy đủ',
      
      // Home FAQ
      'home.faq.title': 'Câu hỏi thường gặp',
      'home.faq.subtitle': 'Mọi thứ bạn cần biết về giải pháp chatbot AI của chúng tôi',
      'home.faq.q1': 'Tôi có thể triển khai chatbot nhanh như thế nào?',
      'home.faq.a1': 'Hầu hết doanh nghiệp có thể có chatbot cơ bản hoạt động trong vòng 24-48 giờ. Tùy chỉnh phức tạp có thể mất 1-2 tuần.',
      'home.faq.q2': 'Bạn có cung cấp đào tạo và hỗ trợ không?',
      'home.faq.a2': 'Có, chúng tôi cung cấp đào tạo toàn diện, hỗ trợ 24/7 và quản lý tài khoản chuyên dụng cho tất cả khách hàng.',
      'home.faq.q3': 'Chatbot có thể tích hợp với hệ thống hiện tại của chúng tôi không?',
      'home.faq.a3': 'Hoàn toàn có thể! Chatbot của chúng tôi có thể tích hợp với CRM, helpdesk, nền tảng thương mại điện tử và hầu hết ứng dụng kinh doanh.',
      'home.faq.viewFullFaq': 'Xem FAQ đầy đủ',
      
      // Home Final CTA
      'home.finalCta.title': 'Sẵn sàng chuyển đổi',
      'home.finalCta.title2': 'doanh nghiệp của bạn',
      'home.finalCta.title3': 'ngay hôm nay?',
      'home.finalCta.description': 'Tham gia hàng nghìn doanh nghiệp đang sử dụng chatbot AI của D2 Group để cải thiện trải nghiệm khách hàng và thúc đẩy tăng trưởng.',
      'home.finalCta.startTrial': 'Bắt đầu dùng thử miễn phí',
      'home.finalCta.bookDemo': 'Đặt lịch Demo',
      'home.finalCta.freeTrial': 'Dùng thử miễn phí 14 ngày',
      'home.finalCta.noCreditCard': 'Không cần thẻ tín dụng',
      'home.finalCta.setupIn5': 'Thiết lập trong 5 phút',
      
      // Pricing
      'pricing.starter': 'Khởi đầu',
      'pricing.growth': 'Phát triển',
      'pricing.business': 'Doanh nghiệp',
      'pricing.enterprise': 'Tập đoàn',
      'pricing.month': '/tháng',
      'pricing.contactPricing': 'Liên hệ',
      'pricing.mostPopular': 'Phổ biến nhất',
      'pricing.getStarted': 'Bắt đầu',
      'pricing.contactForPricing': 'Liên hệ bán hàng',
      'pricing.starter.desc': 'Hoàn hảo cho doanh nghiệp nhỏ bắt đầu với chatbot AI',
      'pricing.growth.desc': 'Lý tưởng cho doanh nghiệp đang phát triển cần thêm tính năng',
      'pricing.business.desc': 'Phù hợp cho doanh nghiệp lớn với nhu cầu tùy chỉnh cao',
      'pricing.enterprise.desc': 'Giải pháp doanh nghiệp với các tính năng có thể tùy chỉnh hoàn toàn',
      
      // Features
      'feature.conversations': 'cuộc trò chuyện/tháng',
      'feature.basicTemplates': 'Mẫu chatbot cơ bản',
      'feature.advancedTemplates': 'Mẫu chatbot nâng cao',
      'feature.websiteIntegration': 'Tích hợp website',
      'feature.multiChannel': 'Đa kênh (Website, Facebook, WhatsApp)',
      'feature.emailSupport': 'Hỗ trợ email',
      'feature.prioritySupport': 'Hỗ trợ ưu tiên',
      'feature.phoneSupport': 'Hỗ trợ điện thoại 24/7',
      'feature.basicAnalytics': 'Phân tích cơ bản',
      'feature.advancedAnalytics': 'Phân tích nâng cao',
      'feature.advancedReporting': 'Báo cáo nâng cao',
      'feature.workflows': 'quy trình tự động',
      'feature.unlimitedWorkflows': 'Quy trình không giới hạn',
      'feature.standardResponse': 'Thời gian phản hồi tiêu chuẩn',
      'feature.crmIntegration': 'Tích hợp CRM',
      'feature.abTesting': 'Thử nghiệm A/B',
      'feature.leadQualification': 'Đánh giá khách hàng tiềm năng',
      'feature.customDesign': 'Thiết kế chatbot tùy chỉnh',
      'feature.customBranding': 'Thương hiệu tùy chỉnh',
      'feature.customAI': 'AI tùy chỉnh hoàn toàn',
      'feature.unlimited': 'Không giới hạn',
      'feature.onPremise': 'Triển khai tại chỗ',
      'feature.dedicatedManager': 'Quản lý tài khoản chuyên dụng',
      'feature.security': 'Bảo mật cấp doanh nghiệp',
      'feature.customIntegrations': 'Tích hợp tùy chỉnh',
      'feature.slaGuarantees': 'Cam kết SLA',
      'feature.whiteLabel': 'Nhãn trắng',

      // Contact Page
      'contact.hero.title': 'Liên hệ',
      'contact.hero.subtitle': 'Sẵn sàng chuyển đổi cuộc trò chuyện khách hàng của bạn? Hãy thảo luận về cách D2 Group có thể giúp bạn đạt được mục tiêu tự động hóa. Các chuyên gia của chúng tôi đang sẵn sàng cung cấp hướng dẫn được cá nhân hóa.',
      'contact.form.title': 'Hãy bắt đầu cuộc trò chuyện',
      'contact.form.subtitle': 'Điền vào biểu mẫu dưới đây và đội ngũ của chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ.',
      'contact.info.title': 'Thông tin liên hệ',
      'contact.map.title': 'Tìm chúng tôi',
      'contact.thanks.title': 'Cảm ơn bạn đã quan tâm!',
      'contact.thanks.subtitle': 'Tin nhắn của bạn đã được nhận và đội ngũ của chúng tôi sẽ phản hồi trong vòng 24 giờ. Trong thời gian chờ đợi, hãy kết nối với chúng tôi trên mạng xã hội.',

      // Case Studies
      'caseStudies.hero.title': 'Câu chuyện thành công thực tế',
      'caseStudies.hero.subtitle': 'Khám phá cách các doanh nghiệp trên nhiều ngành đã chuyển đổi trải nghiệm khách hàng và đạt được kết quả đáng kể với giải pháp chatbot AI của D2 Group.',
      'caseStudies.industries.title': 'Các ngành chúng tôi phục vụ',
      'caseStudies.industries.subtitle': 'Thành công đã được chứng minh trên các lĩnh vực kinh doanh đa dạng',
      'caseStudies.cta.title': 'Sẵn sàng viết câu chuyện thành công của bạn?',
      'caseStudies.cta.subtitle': 'Tham gia hàng trăm doanh nghiệp thành công đã chuyển đổi trải nghiệm khách hàng với D2 Group. Hãy thảo luận về cách chúng tôi có thể mang lại kết quả tương tự cho tổ chức của bạn.',
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
