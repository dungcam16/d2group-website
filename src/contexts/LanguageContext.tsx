
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => ''
});

const translations = {
  en: {
    // Header
    'header.home': 'Home',
    'header.features': 'Features',
    'header.pricing': 'Pricing',
    'header.about': 'About',
    'header.contact': 'Contact',
    'header.caseStudies': 'Case Studies',
    'header.services': 'Services',
    'header.useCases': 'Use Cases',
    'header.getStarted': 'Get Started',

    // Home page
    'home.hero.title': 'Transform Customer Experience',
    'home.hero.subtitle': 'with AI-Powered',
    'home.hero.subtitle2': 'Chatbots for',
    'home.hero.subtitle3': 'Vietnamese Businesses',
    'home.hero.description': 'Automate customer support, boost sales, and deliver exceptional experiences 24/7 with D2 Group\'s intelligent chatbot solutions tailored for the Vietnamese market.',
    'home.hero.getDemo': 'Get Free Demo',
    'home.hero.learnMore': 'Learn More',

    'home.why.title': 'Why Choose',
    'home.why.subtitle': 'Leading Vietnamese businesses trust D2 Group for intelligent automation solutions',
    'home.why.ai.title': 'AI-Powered Intelligence',
    'home.why.ai.desc': 'Advanced natural language processing optimized for Vietnamese conversations',
    'home.why.security.title': 'Enterprise Security',
    'home.why.security.desc': 'Bank-grade security with data sovereignty compliance for Vietnamese businesses',
    'home.why.results.title': 'Proven Results',
    'home.why.results.desc': 'Average 40% increase in customer satisfaction and 60% reduction in support costs',
    'home.why.learnMore': 'Learn More About Us',

    'home.features.title': 'Powerful Features',
    'home.features.subtitle': 'Everything you need to automate customer conversations',
    'home.features.smart.title': 'Smart Conversations',
    'home.features.smart.desc': 'AI understands context and intent',
    'home.features.instant.title': 'Instant Responses',
    'home.features.instant.desc': 'Sub-second response times',
    'home.features.analytics.title': 'Advanced Analytics',
    'home.features.analytics.desc': 'Detailed insights and reporting',
    'home.features.multichannel.title': 'Multi-Channel',
    'home.features.multichannel.desc': 'Website, WhatsApp, Facebook',
    'home.features.viewAll': 'View All Features',

    'home.howItWorks.title': 'How It Works',
    'home.howItWorks.subtitle': 'Get started in minutes, not days',
    'home.howItWorks.step1.title': 'Quick Setup',
    'home.howItWorks.step1.desc': 'Connect your channels and customize your bot in under 5 minutes',
    'home.howItWorks.step2.title': 'AI Training',
    'home.howItWorks.step2.desc': 'Our AI learns from your business data and customer interactions',
    'home.howItWorks.step3.title': 'Go Live',
    'home.howItWorks.step3.desc': 'Deploy instantly and start serving customers 24/7',

    'home.useCases.title': 'Industry Solutions',
    'home.useCases.subtitle': 'Proven results across Vietnamese industries',
    'home.useCases.ecommerce': 'E-commerce',
    'home.useCases.healthcare': 'Healthcare',
    'home.useCases.education': 'Education',
    'home.useCases.banking': 'Banking',
    'home.useCases.realestate': 'Real Estate',
    'home.useCases.travel': 'Travel',
    'home.useCases.viewCaseStudies': 'View Case Studies',

    'home.testimonials.title': 'Customer Success',
    'home.testimonials.subtitle': 'See what our customers say about D2 Group',
    'home.testimonials.1.content': 'D2 Group\'s chatbot increased our conversion rate by 35% within the first month. The Vietnamese language support is exceptional.',
    'home.testimonials.2.content': 'Our customer support costs dropped by 50% while satisfaction scores increased. The ROI has been incredible.',
    'home.testimonials.3.content': 'The integration was seamless and the AI understands our students\' questions perfectly. Student engagement is up 60%.',

    'home.partners.title': 'Trusted Partners',
    'home.partners.subtitle': 'Powering conversations for leading Vietnamese enterprises',

    'home.pricing.title': 'Simple Pricing',
    'home.pricing.subtitle': 'Choose the plan that fits your business needs',
    'home.pricing.seeFullPricing': 'See Full Pricing Details',

    'home.faq.title': 'Common Questions',
    'home.faq.subtitle': 'Quick answers to help you get started',
    'home.faq.q1': 'How quickly can I get started?',
    'home.faq.a1': 'Most businesses are up and running within 24 hours with our quick setup process.',
    'home.faq.q2': 'Does it work in Vietnamese?',
    'home.faq.a2': 'Yes! Our AI is specifically trained for Vietnamese conversations and cultural context.',
    'home.faq.q3': 'What integrations are available?',
    'home.faq.a3': 'We support all major platforms including WhatsApp, Facebook, Zalo, and popular CRM systems.',
    'home.faq.viewFullFaq': 'View Full FAQ',

    'home.finalCta.title': 'Ready to Transform',
    'home.finalCta.title2': 'Customer Experience',
    'home.finalCta.title3': '?',
    'home.finalCta.description': 'Join hundreds of Vietnamese businesses already using D2 Group\'s AI chatbots to improve customer satisfaction and reduce costs.',
    'home.finalCta.startTrial': 'Start Free Trial',
    'home.finalCta.bookDemo': 'Book Demo',
    'home.finalCta.freeTrial': '14-day free trial',
    'home.finalCta.noCreditCard': 'No credit card required',
    'home.finalCta.setupIn5': 'Setup in 5 minutes',

    // Pricing page
    'pricing.title': 'Simple Transparent Pricing',
    'pricing.subtitle': 'Choose the perfect plan for your business needs. All plans include our core AI features.',
    'pricing.freeTrial': '14-day free trial',
    'pricing.noSetupFees': 'No setup fees',
    'pricing.cancelAnytime': 'Cancel anytime',
    'pricing.mostPopular': 'Most Popular',
    'pricing.month': '/month',
    'pricing.contactPricing': 'Contact',
    'pricing.getStarted': 'Get Started',
    'pricing.contactForPricing': 'Contact for Pricing',

    'pricing.starter': 'Starter',
    'pricing.starter.desc': 'Perfect for small businesses getting started with AI chatbots',
    'pricing.growth': 'Growth',
    'pricing.growth.desc': 'Ideal for growing businesses that need advanced features',
    'pricing.business': 'Business',
    'pricing.business.desc': 'For established businesses requiring premium capabilities',
    'pricing.enterprise': 'Enterprise',
    'pricing.enterprise.desc': 'Custom solutions for large organizations with specific needs',

    // Features
    'feature.conversations': 'conversations',
    'feature.basicTemplates': 'Basic chatbot templates',
    'feature.advancedTemplates': 'Advanced chatbot templates',
    'feature.customDesign': 'Custom chatbot design',
    'feature.websiteIntegration': 'Website widget integration',
    'feature.multiChannel': 'Multi-channel support (WhatsApp, FB)',
    'feature.emailSupport': '24/7 email support',
    'feature.prioritySupport': 'Priority support',
    'feature.phoneSupport': 'Phone support',
    'feature.basicAnalytics': 'Basic analytics dashboard',
    'feature.advancedAnalytics': 'Advanced analytics & reporting',
    'feature.advancedReporting': 'Advanced reporting & insights',
    'feature.workflows': 'automated workflows',
    'feature.unlimitedWorkflows': 'Unlimited workflows',
    'feature.standardResponse': 'Standard response time',
    'feature.priorityResponse': 'Priority response time',
    'feature.crmIntegration': 'CRM integrations',
    'feature.abTesting': 'A/B testing capabilities',
    'feature.leadQualification': 'Lead qualification tools',
    'feature.customBranding': 'Custom branding & white-label',
    'feature.unlimited': 'Unlimited',
    'feature.customAI': 'Custom AI training',
    'feature.onPremise': 'On-premise deployment',
    'feature.dedicatedManager': 'Dedicated account manager',
    'feature.security': 'Enhanced security features',
    'feature.customIntegrations': 'Custom integrations',
    'feature.slaGuarantees': 'SLA guarantees',
    'feature.whiteLabel': 'White-label solution',

    // Contact page
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Ready to transform your customer conversations? Let\'s discuss how D2 Group can help you achieve your automation goals. Our experts are standing by to provide personalized guidance.',
    'contact.freeConsultation': 'Free Consultation',
    'contact.freeConsultation.desc': 'Expert guidance tailored to your needs',
    'contact.responseTime': '24-Hour Response',
    'contact.responseTime.desc': 'Quick turnaround on all inquiries',
    'contact.fastImplementation': 'Fast Implementation',
    'contact.fastImplementation.desc': 'Go live in as little as 48 hours',

    'contact.form.title': 'Let\'s Start the Conversation',
    'contact.form.subtitle': 'Fill out the form below and our team will reach out to you within 24 hours.',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.company': 'Company Name',
    'contact.form.interest': 'Area of Interest',
    'contact.form.interest.placeholder': 'What can we help you with?',
    'contact.form.interest.demo': 'Schedule a Product Demo',
    'contact.form.interest.pricing': 'Get Pricing Information',
    'contact.form.interest.integration': 'Discuss Integration Options',
    'contact.form.interest.enterprise': 'Enterprise Solutions',
    'contact.form.interest.support': 'Technical Support',
    'contact.form.interest.partnership': 'Partnership Opportunities',
    'contact.form.interest.other': 'Other',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Tell us about your business needs, current challenges, or any specific questions you have...',
    'contact.form.submit': 'Send Message',
    'contact.form.submitting': 'Sending...',
    'contact.form.privacy': 'By submitting this form, you agree to our Privacy Policy and Terms of Service.',

    'contact.info.title': 'Contact Information',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.address': 'Address',
    'contact.info.hours': 'Business Hours',
    'contact.info.hours.weekdays': 'Monday - Friday: 9:00 AM - 6:00 PM (GMT+7)',
    'contact.info.hours.saturday': 'Saturday: 10:00 AM - 2:00 PM (GMT+7)',
    'contact.info.hours.emergency': 'Emergency support: 24/7',

    'contact.map.title': 'Find Us',
    'contact.thankyou.title': 'Thank You for Your Interest!',
    'contact.thankyou.subtitle': 'Your message has been received and our team will respond within 24 hours. In the meantime, feel free to connect with us on social media.',

    // Case Studies
    'caseStudies.title': 'Customer Success Stories',
    'caseStudies.subtitle': 'See how D2 Group\'s AI chatbots are transforming businesses across Vietnam',

    'caseStudies.ecommerce.title': 'E-commerce Revolution',
    'caseStudies.ecommerce.company': 'Saigon Fashion Co.',
    'caseStudies.ecommerce.industry': 'Fashion E-commerce',
    'caseStudies.ecommerce.challenge': 'High cart abandonment and overwhelming customer inquiries',
    'caseStudies.ecommerce.solution': 'AI chatbot with product recommendations and order tracking',
    'caseStudies.ecommerce.result': '35% increase in conversions, 50% reduction in support tickets',

    'caseStudies.healthcare.title': 'Healthcare Innovation',
    'caseStudies.healthcare.company': 'Vietnam Medical Center',
    'caseStudies.healthcare.industry': 'Healthcare Services',
    'caseStudies.healthcare.challenge': 'Long wait times for appointment booking and patient inquiries',
    'caseStudies.healthcare.solution': 'Multilingual chatbot for appointments and medical information',
    'caseStudies.healthcare.result': '60% faster appointment booking, 40% increase in patient satisfaction',

    'caseStudies.education.title': 'Educational Excellence',
    'caseStudies.education.company': 'Hanoi University of Technology',
    'caseStudies.education.industry': 'Higher Education',
    'caseStudies.education.challenge': 'Students struggling to find course information and enrollment help',
    'caseStudies.education.solution': 'Smart academic assistant with course recommendations',
    'caseStudies.education.result': '70% reduction in administrative workload, 85% student satisfaction',

    'caseStudies.banking.title': 'Banking Transformation',
    'caseStudies.banking.company': 'VietBank Digital',
    'caseStudies.banking.industry': 'Digital Banking',
    'caseStudies.banking.challenge': 'Complex banking queries and 24/7 customer support needs',
    'caseStudies.banking.solution': 'Secure AI assistant for banking operations and support',
    'caseStudies.banking.result': '45% reduction in call center volume, 99.9% uptime',

    'caseStudies.viewAll': 'View All Case Studies',
    'caseStudies.learnMore': 'Learn More',
    'caseStudies.challenge': 'Challenge',
    'caseStudies.solution': 'Solution',
    'caseStudies.results': 'Results',
    'caseStudies.industry': 'Industry',
  },
  vi: {
    // Header
    'header.home': 'Trang chủ',
    'header.features': 'Tính năng',
    'header.pricing': 'Bảng giá',
    'header.about': 'Giới thiệu',
    'header.contact': 'Liên hệ',
    'header.caseStudies': 'Nghiên cứu tình huống',
    'header.services': 'Dịch vụ',
    'header.useCases': 'Ứng dụng',
    'header.getStarted': 'Bắt đầu',

    // Home page
    'home.hero.title': 'Chuyển đổi trải nghiệm khách hàng',
    'home.hero.subtitle': 'với Chatbot AI',
    'home.hero.subtitle2': 'cho',
    'home.hero.subtitle3': 'doanh nghiệp Việt Nam',
    'home.hero.description': 'Tự động hóa hỗ trợ khách hàng, tăng doanh số và mang lại trải nghiệm tuyệt vời 24/7 với các giải pháp chatbot thông minh của D2 Group được thiết kế riêng cho thị trường Việt Nam.',
    'home.hero.getDemo': 'Dùng thử miễn phí',
    'home.hero.learnMore': 'Tìm hiểu thêm',

    'home.why.title': 'Tại sao chọn',
    'home.why.subtitle': 'Các doanh nghiệp hàng đầu Việt Nam tin tưởng D2 Group cho các giải pháp tự động hóa thông minh',
    'home.why.ai.title': 'Trí tuệ AI mạnh mẽ',
    'home.why.ai.desc': 'Xử lý ngôn ngữ tự nhiên tiên tiến được tối ưu hóa cho cuộc trò chuyện tiếng Việt',
    'home.why.security.title': 'Bảo mật doanh nghiệp',
    'home.why.security.desc': 'Bảo mật cấp độ ngân hàng với tuân thủ chủ quyền dữ liệu cho doanh nghiệp Việt Nam',
    'home.why.results.title': 'Kết quả đã được chứng minh',
    'home.why.results.desc': 'Trung bình tăng 40% sự hài lòng của khách hàng và giảm 60% chi phí hỗ trợ',
    'home.why.learnMore': 'Tìm hiểu thêm về chúng tôi',

    'home.features.title': 'Tính năng mạnh mẽ',
    'home.features.subtitle': 'Mọi thứ bạn cần để tự động hóa cuộc trò chuyện với khách hàng',
    'home.features.smart.title': 'Hội thoại thông minh',
    'home.features.smart.desc': 'AI hiểu ngữ cảnh và ý định',
    'home.features.instant.title': 'Phản hồi tức thì',
    'home.features.instant.desc': 'Thời gian phản hồi dưới 1 giây',
    'home.features.analytics.title': 'Phân tích nâng cao',
    'home.features.analytics.desc': 'Thông tin chi tiết và báo cáo',
    'home.features.multichannel.title': 'Đa kênh',
    'home.features.multichannel.desc': 'Website, WhatsApp, Facebook',
    'home.features.viewAll': 'Xem tất cả tính năng',

    'home.howItWorks.title': 'Cách thức hoạt động',
    'home.howItWorks.subtitle': 'Bắt đầu trong vài phút, không phải vài ngày',
    'home.howItWorks.step1.title': 'Thiết lập nhanh',
    'home.howItWorks.step1.desc': 'Kết nối các kênh của bạn và tùy chỉnh bot trong vòng 5 phút',
    'home.howItWorks.step2.title': 'Đào tạo AI',
    'home.howItWorks.step2.desc': 'AI của chúng tôi học từ dữ liệu doanh nghiệp và tương tác khách hàng của bạn',
    'home.howItWorks.step3.title': 'Triển khai',
    'home.howItWorks.step3.desc': 'Triển khai ngay lập tức và bắt đầu phục vụ khách hàng 24/7',

    'home.useCases.title': 'Giải pháp ngành',
    'home.useCases.subtitle': 'Kết quả đã được chứng minh trên các ngành nghề Việt Nam',
    'home.useCases.ecommerce': 'Thương mại điện tử',
    'home.useCases.healthcare': 'Y tế',
    'home.useCases.education': 'Giáo dục',
    'home.useCases.banking': 'Ngân hàng',
    'home.useCases.realestate': 'Bất động sản',
    'home.useCases.travel': 'Du lịch',
    'home.useCases.viewCaseStudies': 'Xem nghiên cứu tình huống',

    'home.testimonials.title': 'Thành công khách hàng',
    'home.testimonials.subtitle': 'Xem khách hàng nói gì về D2 Group',
    'home.testimonials.1.content': 'Chatbot của D2 Group đã tăng tỷ lệ chuyển đổi của chúng tôi lên 35% chỉ trong tháng đầu tiên. Hỗ trợ tiếng Việt rất xuất sắc.',
    'home.testimonials.2.content': 'Chi phí hỗ trợ khách hàng của chúng tôi giảm 50% trong khi điểm hài lòng tăng lên. ROI thật không thể tin được.',
    'home.testimonials.3.content': 'Việc tích hợp rất mượt mà và AI hiểu hoàn hảo câu hỏi của sinh viên. Sự tham gia của sinh viên tăng 60%.',

    'home.partners.title': 'Đối tác tin cậy',
    'home.partners.subtitle': 'Cung cấp cuộc trò chuyện cho các doanh nghiệp hàng đầu Việt Nam',

    'home.pricing.title': 'Bảng giá đơn giản',
    'home.pricing.subtitle': 'Chọn gói phù hợp với nhu cầu doanh nghiệp của bạn',
    'home.pricing.seeFullPricing': 'Xem chi tiết bảng giá đầy đủ',

    'home.faq.title': 'Câu hỏi thường gặp',
    'home.faq.subtitle': 'Câu trả lời nhanh để giúp bạn bắt đầu',
    'home.faq.q1': 'Tôi có thể bắt đầu nhanh như thế nào?',
    'home.faq.a1': 'Hầu hết doanh nghiệp có thể hoạt động trong vòng 24 giờ với quy trình thiết lập nhanh của chúng tôi.',
    'home.faq.q2': 'Có hoạt động bằng tiếng Việt không?',
    'home.faq.a2': 'Có! AI của chúng tôi được đào tạo đặc biệt cho cuộc trò chuyện tiếng Việt và bối cảnh văn hóa.',
    'home.faq.q3': 'Có những tích hợp nào?',
    'home.faq.a3': 'Chúng tôi hỗ trợ tất cả các nền tảng chính bao gồm WhatsApp, Facebook, Zalo và các hệ thống CRM phổ biến.',
    'home.faq.viewFullFaq': 'Xem FAQ đầy đủ',

    'home.finalCta.title': 'Sẵn sàng chuyển đổi',
    'home.finalCta.title2': 'trải nghiệm khách hàng',
    'home.finalCta.title3': '?',
    'home.finalCta.description': 'Tham gia cùng hàng trăm doanh nghiệp Việt Nam đã sử dụng chatbot AI của D2 Group để cải thiện sự hài lòng của khách hàng và giảm chi phí.',
    'home.finalCta.startTrial': 'Bắt đầu dùng thử miễn phí',
    'home.finalCta.bookDemo': 'Đặt lịch demo',
    'home.finalCta.freeTrial': 'Dùng thử miễn phí 14 ngày',
    'home.finalCta.noCreditCard': 'Không cần thẻ tín dụng',
    'home.finalCta.setupIn5': 'Thiết lập trong 5 phút',

    // Pricing page
    'pricing.title': 'Bảng giá đơn giản minh bạch',
    'pricing.subtitle': 'Chọn gói hoàn hảo cho nhu cầu doanh nghiệp của bạn. Tất cả các gói đều bao gồm các tính năng AI cốt lõi của chúng tôi.',
    'pricing.freeTrial': 'Dùng thử miễn phí 14 ngày',
    'pricing.noSetupFees': 'Không phí thiết lập',
    'pricing.cancelAnytime': 'Hủy bất cứ lúc nào',
    'pricing.mostPopular': 'Phổ biến nhất',
    'pricing.month': '/tháng',
    'pricing.contactPricing': 'Liên lạc',
    'pricing.getStarted': 'Bắt đầu',
    'pricing.contactForPricing': 'Liên hệ để biết giá',

    'pricing.starter': 'Starter',
    'pricing.starter.desc': 'Hoàn hảo cho các doanh nghiệp nhỏ bắt đầu với chatbot AI',
    'pricing.growth': 'Growth',
    'pricing.growth.desc': 'Lý tưởng cho các doanh nghiệp đang phát triển cần các tính năng nâng cao',
    'pricing.business': 'Business',
    'pricing.business.desc': 'Dành cho các doanh nghiệp đã thành lập cần khả năng cao cấp',
    'pricing.enterprise': 'Enterprise',
    'pricing.enterprise.desc': 'Giải pháp tùy chỉnh cho các tổ chức lớn với nhu cầu cụ thể',

    // Features
    'feature.conversations': 'cuộc trò chuyện',
    'feature.basicTemplates': 'Mẫu chatbot cơ bản',
    'feature.advancedTemplates': 'Mẫu chatbot nâng cao',
    'feature.customDesign': 'Thiết kế chatbot tùy chỉnh',
    'feature.websiteIntegration': 'Tích hợp widget website',
    'feature.multiChannel': 'Hỗ trợ đa kênh (WhatsApp, FB)',
    'feature.emailSupport': 'Hỗ trợ email 24/7',
    'feature.prioritySupport': 'Hỗ trợ ưu tiên',
    'feature.phoneSupport': 'Hỗ trợ qua điện thoại',
    'feature.basicAnalytics': 'Bảng điều khiển phân tích cơ bản',
    'feature.advancedAnalytics': 'Phân tích và báo cáo nâng cao',
    'feature.advancedReporting': 'Báo cáo và thông tin chi tiết nâng cao',
    'feature.workflows': 'quy trình tự động',
    'feature.unlimitedWorkflows': 'Quy trình không giới hạn',
    'feature.standardResponse': 'Thời gian phản hồi tiêu chuẩn',
    'feature.priorityResponse': 'Thời gian phản hồi ưu tiên',
    'feature.crmIntegration': 'Tích hợp CRM',
    'feature.abTesting': 'Khả năng A/B testing',
    'feature.leadQualification': 'Công cụ đánh giá khách hàng tiềm năng',
    'feature.customBranding': 'Thương hiệu tùy chỉnh & nhãn trắng',
    'feature.unlimited': 'Không giới hạn',
    'feature.customAI': 'Đào tạo AI tùy chỉnh',
    'feature.onPremise': 'Triển khai tại chỗ',
    'feature.dedicatedManager': 'Quản lý tài khoản riêng',
    'feature.security': 'Tính năng bảo mật nâng cao',
    'feature.customIntegrations': 'Tích hợp tùy chỉnh',
    'feature.slaGuarantees': 'Đảm bảo SLA',
    'feature.whiteLabel': 'Giải pháp nhãn trắng',

    // Contact page
    'contact.title': 'Liên hệ',
    'contact.subtitle': 'Sẵn sàng chuyển đổi cuộc trò chuyện khách hàng của bạn? Hãy thảo luận về cách D2 Group có thể giúp bạn đạt được mục tiêu tự động hóa. Các chuyên gia của chúng tôi đang sẵn sàng cung cấp hướng dẫn cá nhân hóa.',
    'contact.freeConsultation': 'Tư vấn miễn phí',
    'contact.freeConsultation.desc': 'Hướng dẫn chuyên gia phù hợp với nhu cầu của bạn',
    'contact.responseTime': 'Phản hồi trong 24 giờ',
    'contact.responseTime.desc': 'Xử lý nhanh chóng tất cả các yêu cầu',
    'contact.fastImplementation': 'Triển khai nhanh',
    'contact.fastImplementation.desc': 'Hoạt động chỉ trong 48 giờ',

    'contact.form.title': 'Hãy bắt đầu cuộc trò chuyện',
    'contact.form.subtitle': 'Điền vào biểu mẫu bên dưới và đội ngũ của chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ.',
    'contact.form.name': 'Họ và tên',
    'contact.form.email': 'Địa chỉ email',
    'contact.form.phone': 'Số điện thoại',
    'contact.form.company': 'Tên công ty',
    'contact.form.interest': 'Lĩnh vực quan tâm',
    'contact.form.interest.placeholder': 'Chúng tôi có thể giúp gì cho bạn?',
    'contact.form.interest.demo': 'Lên lịch demo sản phẩm',
    'contact.form.interest.pricing': 'Nhận thông tin giá',
    'contact.form.interest.integration': 'Thảo luận các tùy chọn tích hợp',
    'contact.form.interest.enterprise': 'Giải pháp doanh nghiệp',
    'contact.form.interest.support': 'Hỗ trợ kỹ thuật',
    'contact.form.interest.partnership': 'Cơ hội hợp tác',
    'contact.form.interest.other': 'Khác',
    'contact.form.message': 'Tin nhắn',
    'contact.form.message.placeholder': 'Hãy cho chúng tôi biết về nhu cầu kinh doanh, thách thức hiện tại hoặc bất kỳ câu hỏi cụ thể nào bạn có...',
    'contact.form.submit': 'Gửi tin nhắn',
    'contact.form.submitting': 'Đang gửi...',
    'contact.form.privacy': 'Bằng việc gửi biểu mẫu này, bạn đồng ý với Chính sách Bảo mật và Điều khoản Dịch vụ của chúng tôi.',

    'contact.info.title': 'Thông tin liên hệ',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Điện thoại',
    'contact.info.address': 'Địa chỉ',
    'contact.info.hours': 'Giờ làm việc',
    'contact.info.hours.weekdays': 'Thứ 2 - Thứ 6: 9:00 AM - 6:00 PM (GMT+7)',
    'contact.info.hours.saturday': 'Thứ 7: 10:00 AM - 2:00 PM (GMT+7)',
    'contact.info.hours.emergency': 'Hỗ trợ khẩn cấp: 24/7',

    'contact.map.title': 'Tìm chúng tôi',
    'contact.thankyou.title': 'Cảm ơn sự quan tâm của bạn!',
    'contact.thankyou.subtitle': 'Tin nhắn của bạn đã được nhận và đội ngũ của chúng tôi sẽ phản hồi trong vòng 24 giờ. Trong thời gian chờ đợi, hãy kết nối với chúng tôi trên mạng xã hội.',

    // Case Studies
    'caseStudies.title': 'Câu chuyện thành công của khách hàng',
    'caseStudies.subtitle': 'Xem cách chatbot AI của D2 Group đang chuyển đổi các doanh nghiệp trên khắp Việt Nam',

    'caseStudies.ecommerce.title': 'Cách mạng thương mại điện tử',
    'caseStudies.ecommerce.company': 'Saigon Fashion Co.',
    'caseStudies.ecommerce.industry': 'Thương mại điện tử thời trang',
    'caseStudies.ecommerce.challenge': 'Tỷ lệ bỏ giỏ hàng cao và quá tải yêu cầu khách hàng',
    'caseStudies.ecommerce.solution': 'Chatbot AI với đề xuất sản phẩm và theo dõi đơn hàng',
    'caseStudies.ecommerce.result': 'Tăng 35% chuyển đổi, giảm 50% phiếu hỗ trợ',

    'caseStudies.healthcare.title': 'Đổi mới y tế',
    'caseStudies.healthcare.company': 'Trung tâm Y tế Việt Nam',
    'caseStudies.healthcare.industry': 'Dịch vụ Y tế',
    'caseStudies.healthcare.challenge': 'Thời gian chờ đợi lâu để đặt lịch hẹn và các yêu cầu bệnh nhân',
    'caseStudies.healthcare.solution': 'Chatbot đa ngôn ngữ cho lịch hẹn và thông tin y tế',
    'caseStudies.healthcare.result': 'Đặt lịch hẹn nhanh hơn 60%, tăng 40% sự hài lòng bệnh nhân',

    'caseStudies.education.title': 'Xuất sắc giáo dục',
    'caseStudies.education.company': 'Đại học Bách khoa Hà Nội',
    'caseStudies.education.industry': 'Giáo dục Đại học',
    'caseStudies.education.challenge': 'Sinh viên gặp khó khăn tìm thông tin khóa học và trợ giúp đăng ký',
    'caseStudies.education.solution': 'Trợ lý học tập thông minh với đề xuất khóa học',
    'caseStudies.education.result': 'Giảm 70% khối lượng công việc hành chính, 85% hài lòng sinh viên',

    'caseStudies.banking.title': 'Chuyển đổi ngân hàng',
    'caseStudies.banking.company': 'VietBank Digital',
    'caseStudies.banking.industry': 'Ngân hàng số',
    'caseStudies.banking.challenge': 'Truy vấn ngân hàng phức tạp và nhu cầu hỗ trợ khách hàng 24/7',
    'caseStudies.banking.solution': 'Trợ lý AI bảo mật cho hoạt động và hỗ trợ ngân hàng',
    'caseStudies.banking.result': 'Giảm 45% lượng cuộc gọi trung tâm, 99.9% thời gian hoạt động',

    'caseStudies.viewAll': 'Xem tất cả nghiên cứu tình huống',
    'caseStudies.learnMore': 'Tìm hiểu thêm',
    'caseStudies.challenge': 'Thách thức',
    'caseStudies.solution': 'Giải pháp',
    'caseStudies.results': 'Kết quả',
    'caseStudies.industry': 'Ngành',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState('en');

  const t = (key: string) => {
    const translation = translations[language as keyof typeof translations];
    return translation?.[key as keyof typeof translation] || key;
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
