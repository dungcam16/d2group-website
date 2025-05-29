
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
    'nav.contactUs': 'Liên hệ chúng tôi',

    // Home page
    'home.hero.title': 'Chatbot AI thông minh',
    'home.hero.subtitle': 'Tự động hóa',
    'home.hero.subtitle2': 'chăm sóc khách hàng',
    'home.hero.subtitle3': '24/7',
    'home.hero.description': 'Giải pháp chatbot AI tiên tiến giúp doanh nghiệp tự động hóa quy trình chăm sóc khách hàng, tăng hiệu quả kinh doanh và cải thiện trải nghiệm người dùng.\n\nTriển khai nhanh chóng, tích hợp dễ dàng.',
    'home.hero.getDemo': 'Nhận Demo Miễn Phí',
    'home.hero.learnMore': 'Tìm hiểu thêm',

    'home.why.title': 'Tại sao chọn',
    'home.why.subtitle': 'Chúng tôi cam kết mang đến giải pháp AI tốt nhất cho doanh nghiệp của bạn',
    'home.why.ai.title': 'AI Tiên Tiến',
    'home.why.ai.desc': 'Công nghệ AI hiện đại, hiểu ngữ cảnh và phản hồi tự nhiên như con người',
    'home.why.security.title': 'Bảo Mật Tuyệt Đối',
    'home.why.security.desc': 'Dữ liệu được mã hóa và bảo vệ theo tiêu chuẩn quốc tế',
    'home.why.results.title': 'Kết Quả Đo Lường',
    'home.why.results.desc': 'Theo dõi hiệu suất realtime với báo cáo chi tiết và phân tích sâu',
    'home.why.learnMore': 'Tìm hiểu thêm về chúng tôi',

    'home.features.title': 'Tính năng nổi bật',
    'home.features.subtitle': 'Khám phá những tính năng mạnh mẽ của chatbot AI D2 Group',
    'home.features.smart.title': 'Trò chuyện thông minh',
    'home.features.smart.desc': 'AI hiểu ngữ cảnh và trả lời chính xác',
    'home.features.instant.title': 'Phản hồi tức thì',
    'home.features.instant.desc': 'Phản hồi khách hàng trong vòng 2 giây',
    'home.features.analytics.title': 'Phân tích dữ liệu',
    'home.features.analytics.desc': 'Báo cáo chi tiết về hiệu suất chatbot',
    'home.features.multichannel.title': 'Đa kênh',
    'home.features.multichannel.desc': 'Tích hợp Website, Facebook, Zalo, WhatsApp',
    'home.features.viewAll': 'Xem tất cả tính năng',

    'home.howItWorks.title': 'Cách thức hoạt động',
    'home.howItWorks.subtitle': 'Triển khai chatbot AI chỉ trong 3 bước đơn giản',
    'home.howItWorks.step1.title': 'Thiết lập và cấu hình',
    'home.howItWorks.step1.desc': 'Cung cấp thông tin doanh nghiệp và tùy chỉnh chatbot theo nhu cầu',
    'home.howItWorks.step2.title': 'Huấn luyện AI',
    'home.howItWorks.step2.desc': 'AI học hỏi từ dữ liệu và kiến thức về sản phẩm, dịch vụ của bạn',
    'home.howItWorks.step3.title': 'Triển khai và vận hành',
    'home.howItWorks.step3.desc': 'Tích hợp vào website và các kênh liên lạc, bắt đầu phục vụ khách hàng',

    'home.useCases.title': 'Ứng dụng thực tế',
    'home.useCases.subtitle': 'Chatbot AI phù hợp với mọi ngành nghề và quy mô doanh nghiệp',
    'home.useCases.ecommerce': 'Thương mại điện tử',
    'home.useCases.healthcare': 'Y tế',
    'home.useCases.education': 'Giáo dục',
    'home.useCases.banking': 'Ngân hàng',
    'home.useCases.realestate': 'Bất động sản',
    'home.useCases.travel': 'Du lịch',
    'home.useCases.viewCaseStudies': 'Xem nghiên cứu trường hợp',

    'home.testimonials.title': 'Khách hàng nói gì',
    'home.testimonials.subtitle': 'Hơn 1000+ doanh nghiệp tin tưởng sử dụng giải pháp của chúng tôi',
    'home.testimonials.1.content': 'Chatbot AI của D2 Group đã giúp chúng tôi giảm 70% thời gian xử lý yêu cầu khách hàng và tăng 40% tỷ lệ chuyển đổi. Đội ngũ hỗ trợ rất chuyên nghiệp.',
    'home.testimonials.2.content': 'Giải pháp AI thông minh và dễ sử dụng. Khách hàng rất hài lòng với trải nghiệm mới. ROI đạt được sau 3 tháng triển khai.',
    'home.testimonials.3.content': 'Tích hợp nhanh chóng, giao diện thân thiện. Học sinh có thể dễ dàng tra cứu thông tin và đăng ký khóa học qua chatbot.',

    'home.partners.title': 'Đối tác triển khai',
    'home.partners.subtitle': 'Được tin tưởng bởi các doanh nghiệp hàng đầu Việt Nam',

    'home.pricing.title': 'Bảng giá linh hoạt',
    'home.pricing.subtitle': 'Chọn gói dịch vụ phù hợp với quy mô doanh nghiệp của bạn',
    'home.pricing.seeFullPricing': 'Xem bảng giá đầy đủ',

    'home.faq.title': 'Câu hỏi thường gặp',
    'home.faq.subtitle': 'Những thắc mắc phổ biến về chatbot AI',
    'home.faq.q1': 'Chatbot có thể tích hợp với hệ thống CRM hiện tại không?',
    'home.faq.a1': 'Có, chúng tôi hỗ trợ tích hợp với hầu hết các hệ thống CRM phổ biến như Salesforce, HubSpot, và các hệ thống tùy chỉnh.',
    'home.faq.q2': 'Thời gian triển khai chatbot là bao lâu?',
    'home.faq.a2': 'Thông thường từ 1-2 tuần tùy thuộc vào độ phức tạp và yêu cầu tùy chỉnh của doanh nghiệp.',
    'home.faq.q3': 'Chatbot có hỗ trợ tiếng Việt không?',
    'home.faq.a3': 'Có, chatbot được tối ưu hóa đặc biệt cho tiếng Việt với khả năng hiểu ngữ cảnh và văn hóa địa phương.',
    'home.faq.viewFullFaq': 'Xem tất cả câu hỏi',

    'home.finalCta.title': 'Sẵn sàng',
    'home.finalCta.title2': 'tự động hóa',
    'home.finalCta.title3': 'chăm sóc khách hàng?',
    'home.finalCta.description': 'Bắt đầu dùng thử miễn phí ngay hôm nay và trải nghiệm sức mạnh của AI',
    'home.finalCta.startTrial': 'Dùng thử 14 ngày miễn phí',
    'home.finalCta.bookDemo': 'Đặt lịch demo',
    'home.finalCta.freeTrial': 'Dùng thử miễn phí 14 ngày',
    'home.finalCta.noCreditCard': 'Không cần thẻ tín dụng',
    'home.finalCta.setupIn5': 'Thiết lập trong 5 phút',

    // About page
    'about.hero.title': 'Về',
    'about.hero.titleHighlight': 'D2 Group',
    'about.hero.description': 'Chúng tôi là đội ngũ chuyên gia công nghệ với sứ mệnh mang giải pháp AI tiên tiến đến với các doanh nghiệp Việt Nam.',

    'about.story.title': 'Câu chuyện',
    'about.story.titleHighlight': 'của chúng tôi',
    'about.story.content': 'Được thành lập năm 2020, D2 Group bắt đầu với tầm nhìn tạo ra những giải pháp AI thông minh, phù hợp với thị trường Việt Nam. Chúng tôi hiểu rằng mỗi doanh nghiệp có những nhu cầu riêng biệt, vì vậy chúng tôi không ngừng đổi mới để mang đến những sản phẩm tốt nhất.',

    'about.mission.title': 'Sứ mệnh',
    'about.mission.titleHighlight': 'của chúng tôi',
    'about.mission.content': 'Tạo ra những giải pháp AI dễ tiếp cận, hiệu quả và phù hợp với văn hóa doanh nghiệp Việt Nam.',

    'about.vision.title': 'Tầm nhìn',
    'about.vision.titleHighlight': '2030',
    'about.vision.content': 'Trở thành đối tác AI tin cậy hàng đầu cho các doanh nghiệp tại Việt Nam và khu vực Đông Nam Á.',

    'about.values.title': 'Giá trị',
    'about.values.titleHighlight': 'cốt lõi',
    'about.values.innovation.title': 'Đổi mới',
    'about.values.innovation.desc': 'Không ngừng nghiên cứu và ứng dụng công nghệ mới nhất',
    'about.values.customer.title': 'Khách hàng trung tâm',
    'about.values.customer.desc': 'Lấy sự thành công của khách hàng làm thước đo thành công',
    'about.values.quality.title': 'Chất lượng',
    'about.values.quality.desc': 'Cam kết chất lượng cao trong mọi sản phẩm và dịch vụ',
    'about.values.integrity.title': 'Chính trực',
    'about.values.integrity.desc': 'Minh bạch, trung thực trong mọi giao dịch',

    'about.team.title': 'Đội ngũ',
    'about.team.titleHighlight': 'chuyên gia',
    'about.team.subtitle': 'Những con người tài năng đằng sau thành công của D2 Group',

    'about.stats.title': 'Con số',
    'about.stats.titleHighlight': 'ấn tượng',
    'about.stats.customers': 'Khách hàng',
    'about.stats.projects': 'Dự án',
    'about.stats.success': 'Tỷ lệ thành công',
    'about.stats.support': 'Hỗ trợ 24/7',

    'about.join.title': 'Tham gia',
    'about.join.titleHighlight': 'hành trình',
    'about.join.description': 'Hãy cùng chúng tôi xây dựng tương lai của AI tại Việt Nam',
    'about.join.button': 'Liên hệ ngay',

    // Features page
    'features.hero.title': 'Tính năng',
    'features.hero.titleHighlight': 'mạnh mẽ',
    'features.hero.description': 'Khám phá những tính năng tiên tiến giúp chatbot AI của bạn trở nên thông minh và hiệu quả hơn',

    'features.core.title': 'Tính năng',
    'features.core.titleHighlight': 'cốt lõi',
    'features.core.ai.title': 'Trí tuệ nhân tạo tiên tiến',
    'features.core.ai.desc': 'Sử dụng công nghệ NLP và Machine Learning để hiểu ngữ cảnh và phản hồi tự nhiên',
    'features.core.multilingual.title': 'Đa ngôn ngữ',
    'features.core.multilingual.desc': 'Hỗ trợ tiếng Việt, tiếng Anh và nhiều ngôn ngữ khác',
    'features.core.analytics.title': 'Phân tích thông minh',
    'features.core.analytics.desc': 'Báo cáo chi tiết về hiệu suất và hành vi người dùng',
    'features.core.integration.title': 'Tích hợp dễ dàng',
    'features.core.integration.desc': 'Kết nối với website, CRM, và các nền tảng khác',

    'features.advanced.title': 'Tính năng',
    'features.advanced.titleHighlight': 'nâng cao',
    'features.advanced.workflow.title': 'Workflow tự động',
    'features.advanced.workflow.desc': 'Thiết kế quy trình xử lý phức tạp với giao diện kéo thả',
    'features.advanced.personalization.title': 'Cá nhân hóa',
    'features.advanced.personalization.desc': 'Tùy chỉnh trải nghiệm dựa trên lịch sử và sở thích',
    'features.advanced.sentiment.title': 'Phân tích cảm xúc',
    'features.advanced.sentiment.desc': 'Hiểu tâm trạng khách hàng và phản hồi phù hợp',
    'features.advanced.handoff.title': 'Chuyển giao thông minh',
    'features.advanced.handoff.desc': 'Tự động chuyển đến nhân viên khi cần thiết',

    'features.integration.title': 'Tích hợp',
    'features.integration.titleHighlight': 'đa nền tảng',
    'features.integration.description': 'Kết nối liền mạch với các công cụ và nền tảng bạn đang sử dụng',

    'features.security.title': 'Bảo mật',
    'features.security.titleHighlight': 'enterprise',
    'features.security.encryption.title': 'Mã hóa end-to-end',
    'features.security.encryption.desc': 'Dữ liệu được bảo vệ toàn diện',
    'features.security.compliance.title': 'Tuân thủ quy định',
    'features.security.compliance.desc': 'Đáp ứng GDPR, SOC 2 và các tiêu chuẩn bảo mật',
    'features.security.backup.title': 'Sao lưu tự động',
    'features.security.backup.desc': 'Dữ liệu được sao lưu định kỳ và an toàn',
    'features.security.access.title': 'Kiểm soát truy cập',
    'features.security.access.desc': 'Phân quyền chi tiết cho từng thành viên',

    'features.cta.title': 'Sẵn sàng trải nghiệm',
    'features.cta.titleHighlight': 'các tính năng này?',
    'features.cta.description': 'Bắt đầu với bản dùng thử miễn phí ngay hôm nay',
    'features.cta.button': 'Dùng thử miễn phí',

    // Case Studies page
    'caseStudies.hero.title': 'Nghiên cứu',
    'caseStudies.hero.titleHighlight': 'trường hợp',
    'caseStudies.hero.description': 'Khám phá cách các doanh nghiệp đã thành công với giải pháp chatbot AI của D2 Group',

    'caseStudies.featured.title': 'Trường hợp',
    'caseStudies.featured.titleHighlight': 'tiêu biểu',

    'caseStudies.success.title': 'Thành công',
    'caseStudies.success.titleHighlight': 'đo lường được',
    'caseStudies.success.metric1': 'Tăng trưởng doanh số',
    'caseStudies.success.metric2': 'Giảm chi phí vận hành',
    'caseStudies.success.metric3': 'Cải thiện sự hài lòng',
    'caseStudies.success.metric4': 'Tăng tỷ lệ chuyển đổi',

    'caseStudies.industries.title': 'Ngành nghề',
    'caseStudies.industries.titleHighlight': 'đa dạng',
    'caseStudies.industries.ecommerce': 'Thương mại điện tử',
    'caseStudies.industries.banking': 'Ngân hàng - Tài chính',
    'caseStudies.industries.healthcare': 'Y tế - Sức khỏe',
    'caseStudies.industries.education': 'Giáo dục',
    'caseStudies.industries.realestate': 'Bất động sản',
    'caseStudies.industries.travel': 'Du lịch',

    'caseStudies.testimonials.title': 'Lời chứng thực',
    'caseStudies.testimonials.titleHighlight': 'từ khách hàng',

    'caseStudies.cta.title': 'Câu chuyện thành công tiếp theo',
    'caseStudies.cta.titleHighlight': 'sẽ là của bạn',
    'caseStudies.cta.description': 'Hãy để chúng tôi giúp bạn đạt được những kết quả tương tự',
    'caseStudies.cta.button': 'Bắt đầu ngay',

    // Pricing page
    'pricing.hero.title': 'Bảng giá',
    'pricing.hero.titleHighlight': 'minh bạch',
    'pricing.hero.description': 'Chọn gói dịch vụ phù hợp với quy mô và nhu cầu của doanh nghiệp bạn',
    'pricing.hero.features.trial': 'Dùng thử 14 ngày miễn phí',
    'pricing.hero.features.noSetup': 'Không phí thiết lập',
    'pricing.hero.features.cancel': 'Hủy bất cứ lúc nào',

    'pricing.mostPopular': 'Phổ biến nhất',

    'pricing.plans.starter.name': 'Starter',
    'pricing.plans.starter.period': '/tháng',
    'pricing.plans.starter.description': 'Phù hợp cho doanh nghiệp nhỏ mới bắt đầu',

    'pricing.plans.growth.name': 'Growth',
    'pricing.plans.growth.period': '/tháng',
    'pricing.plans.growth.description': 'Tối ưu cho doanh nghiệp đang phát triển',

    'pricing.plans.business.name': 'Business',
    'pricing.plans.business.period': '/tháng',
    'pricing.plans.business.description': 'Giải pháp toàn diện cho doanh nghiệp lớn',

    'pricing.plans.enterprise.name': 'Enterprise',
    'pricing.plans.enterprise.price': 'Liên lạc',
    'pricing.plans.enterprise.description': 'Tùy chỉnh hoàn toàn theo yêu cầu',

    'pricing.features.conversations1000': '1.000 cuộc hội thoại/tháng',
    'pricing.features.conversations5000': '5.000 cuộc hội thoại/tháng',
    'pricing.features.conversations15000': '15.000 cuộc hội thoại/tháng',
    'pricing.features.unlimitedConversations': 'Không giới hạn cuộc hội thoại',
    'pricing.features.basicTemplates': 'Mẫu chatbot cơ bản',
    'pricing.features.advancedTemplates': 'Mẫu chatbot nâng cao',
    'pricing.features.customDesign': 'Thiết kế tùy chỉnh',
    'pricing.features.websiteIntegration': 'Tích hợp website',
    'pricing.features.multiChannel': 'Đa kênh (Facebook, Zalo, WhatsApp)',
    'pricing.features.emailSupport': 'Hỗ trợ qua email',
    'pricing.features.prioritySupport': 'Hỗ trợ ưu tiên',
    'pricing.features.phoneSupport': 'Hỗ trợ qua điện thoại',
    'pricing.features.basicAnalytics': 'Phân tích cơ bản',
    'pricing.features.advancedAnalytics': 'Phân tích nâng cao',
    'pricing.features.advancedReporting': 'Báo cáo chi tiết',
    'pricing.features.workflows5': '5 workflow tự động',
    'pricing.features.unlimitedWorkflows': 'Không giới hạn workflow',
    'pricing.features.standardResponse': 'Thời gian phản hồi tiêu chuẩn',
    'pricing.features.priorityResponse': 'Thời gian phản hồi ưu tiên',
    'pricing.features.crmIntegration': 'Tích hợp CRM',
    'pricing.features.abTesting': 'A/B Testing',
    'pricing.features.leadQualification': 'Phân loại khách hàng tiềm năng',
    'pricing.features.customBranding': 'Thương hiệu tùy chỉnh',
    'pricing.features.customAI': 'AI tùy chỉnh',
    'pricing.features.dedicatedManager': 'Quản lý tài khoản riêng',
    'pricing.features.onPremise': 'Triển khai on-premise',
    'pricing.features.security': 'Bảo mật enterprise',
    'pricing.features.customIntegrations': 'Tích hợp tùy chỉnh',
    'pricing.features.slaGuarantees': 'Cam kết SLA',
    'pricing.features.whiteLabel': 'White-label solution',

    'pricing.buttons.getStarted': 'Bắt đầu',
    'pricing.buttons.contact': 'Liên hệ',

    'pricing.comparison.title': 'So sánh',
    'pricing.comparison.titleHighlight': 'chi tiết',
    'pricing.comparison.subtitle': 'Tìm hiểu sự khác biệt giữa các gói dịch vụ',
    'pricing.comparison.table.features': 'Tính năng',
    'pricing.comparison.table.starter': 'Starter',
    'pricing.comparison.table.growth': 'Growth',
    'pricing.comparison.table.business': 'Business',
    'pricing.comparison.table.enterprise': 'Enterprise',

    'pricing.comparison.categories.core': 'Tính năng cốt lõi',
    'pricing.comparison.categories.channels': 'Kênh giao tiếp',

    'pricing.comparison.features.monthlySessions': 'Phiên/tháng',
    'pricing.comparison.features.template': 'Mẫu chatbot',
    'pricing.comparison.features.responseTime': 'Thời gian phản hồi',
    'pricing.comparison.features.analytics': 'Phân tích',
    'pricing.comparison.features.websiteWidget': 'Widget website',
    'pricing.comparison.features.website': 'Website',
    'pricing.comparison.features.whatsapp': 'WhatsApp',
    'pricing.comparison.features.messenger': 'Facebook Messenger',
    'pricing.comparison.features.crm': 'Tích hợp CRM',
    'pricing.comparison.features.api': 'API tùy chỉnh',

    'pricing.faq.title': 'Câu hỏi',
    'pricing.faq.titleHighlight': 'thường gặp',
    'pricing.faq.subtitle': 'Giải đáp những thắc mắc phổ biến về bảng giá',

    'pricing.faq.counting.question': 'Cuộc hội thoại được tính như thế nào?',
    'pricing.faq.counting.answer': 'Mỗi phiên chat của một người dùng trong vòng 24 giờ được tính là một cuộc hội thoại.',

    'pricing.faq.upgrade.question': 'Tôi có thể nâng cấp gói bất cứ lúc nào không?',
    'pricing.faq.upgrade.answer': 'Có, bạn có thể nâng cấp hoặc hạ cấp gói dịch vụ bất cứ lúc nào. Thay đổi sẽ có hiệu lực trong chu kỳ thanh toán tiếp theo.',

    'pricing.faq.trial.question': 'Bản dùng thử có đầy đủ tính năng không?',
    'pricing.faq.trial.answer': 'Bản dùng thử 14 ngày bao gồm tất cả tính năng của gói Growth, không giới hạn và không cần thẻ tín dụng.',

    'pricing.faq.exceed.question': 'Điều gì xảy ra khi vượt quá giới hạn cuộc hội thoại?',
    'pricing.faq.exceed.answer': 'Hệ thống sẽ thông báo và bạn có thể nâng cấp gói hoặc mua thêm cuộc hội thoại với giá ưu đãi.',

    'pricing.cta.title': 'Sẵn sàng',
    'pricing.cta.titleHighlight': 'bắt đầu',
    'pricing.cta.description': 'Chọn gói phù hợp và bắt đầu chuyển đổi số ngay hôm nay',
    'pricing.cta.buttons.trial': 'Dùng thử 14 ngày miễn phí',
    'pricing.cta.buttons.contact': 'Tư vấn miễn phí',
    'pricing.cta.help': 'Cần hỗ trợ? Liên hệ với chúng tôi',

    // Contact page
    'contact.hero.title': 'Liên hệ với',
    'contact.hero.titleHighlight': 'chúng tôi',
    'contact.hero.description': 'Sẵn sàng hỗ trợ và tư vấn giải pháp AI phù hợp nhất cho doanh nghiệp của bạn',

    'contact.features.consultation.title': 'Tư vấn miễn phí',
    'contact.features.consultation.description': 'Phân tích nhu cầu và đề xuất giải pháp',
    'contact.features.response.title': 'Phản hồi nhanh',
    'contact.features.response.description': 'Liên hệ lại trong vòng 24 giờ',
    'contact.features.implementation.title': 'Triển khai nhanh',
    'contact.features.implementation.description': 'Từ ý tưởng đến vận hành chỉ trong 1-2 tuần',

    'contact.form.title': 'Gửi thông tin',
    'contact.form.titleHighlight': 'liên hệ',
    'contact.form.subtitle': 'Điền thông tin bên dưới và chúng tôi sẽ liên hệ với bạn sớm nhất',

    'contact.form.fields.name': 'Họ và tên',
    'contact.form.fields.email': 'Email',
    'contact.form.fields.phone': 'Số điện thoại',
    'contact.form.fields.company': 'Công ty',
    'contact.form.fields.interest': 'Quan tâm đến',
    'contact.form.fields.message': 'Tin nhắn',

    'contact.form.placeholders.name': 'Nhập họ và tên của bạn',
    'contact.form.placeholders.email': 'email@company.com',
    'contact.form.placeholders.phone': '+84 xxx xxx xxx',
    'contact.form.placeholders.company': 'Tên công ty của bạn',
    'contact.form.placeholders.interest': 'Chọn lĩnh vực quan tâm',
    'contact.form.placeholders.message': 'Mô tả chi tiết nhu cầu của bạn...',

    'contact.form.interests.demo': 'Xem demo sản phẩm',
    'contact.form.interests.pricing': 'Tư vấn bảng giá',
    'contact.form.interests.integration': 'Tích hợp hệ thống',
    'contact.form.interests.enterprise': 'Giải pháp doanh nghiệp',
    'contact.form.interests.support': 'Hỗ trợ kỹ thuật',
    'contact.form.interests.partnership': 'Hợp tác đối tác',
    'contact.form.interests.other': 'Khác',

    'contact.form.submit': 'Gửi thông tin',
    'contact.form.sending': 'Đang gửi...',
    'contact.form.privacy': 'Thông tin của bạn được bảo mật theo chính sách riêng tư',

    'contact.form.success.title': 'Gửi thành công!',
    'contact.form.success.description': 'Chúng tôi đã nhận được thông tin và sẽ liên hệ với bạn sớm nhất.',
    'contact.form.error.title': 'Có lỗi xảy ra',
    'contact.form.error.description': 'Vui lòng thử lại sau hoặc liên hệ trực tiếp qua email.',

    'contact.info.title': 'Thông tin',
    'contact.info.titleHighlight': 'liên hệ',
    'contact.info.email.title': 'Email',
    'contact.info.phone.title': 'Điện thoại',
    'contact.info.address.title': 'Địa chỉ',
    'contact.info.address.line1': '123 Đường ABC, Quận 1',
    'contact.info.address.line2': 'TP. Hồ Chí Minh',
    'contact.info.address.line3': 'Việt Nam',
    'contact.info.hours.title': 'Giờ làm việc',
    'contact.info.hours.weekdays': 'Thứ 2 - Thứ 6: 8:00 - 18:00',
    'contact.info.hours.saturday': 'Thứ 7: 8:00 - 12:00',
    'contact.info.hours.emergency': 'Hỗ trợ khẩn cấp 24/7',

    'contact.map.title': 'Vị trí',
    'contact.map.titleHighlight': 'văn phòng',

    'contact.thanks.title': 'Cảm ơn',
    'contact.thanks.titleHighlight': 'sự quan tâm',
    'contact.thanks.description': 'Hãy kết nối với chúng tôi trên các kênh mạng xã hội để cập nhật tin tức mới nhất',

    // Pricing values
    'pricing.starter': 'Starter',
    'pricing.growth': 'Growth',
    'pricing.business': 'Business',
    'pricing.enterprise': 'Enterprise',
    'pricing.month': '/tháng',
    'pricing.contactPricing': 'Liên lạc',
    'pricing.getStarted': 'Bắt đầu',
    'pricing.contactForPricing': 'Liên hệ để biết giá',
    'pricing.starter.desc': 'Phù hợp cho doanh nghiệp nhỏ',
    'pricing.growth.desc': 'Tối ưu cho doanh nghiệp đang phát triển',
    'pricing.business.desc': 'Giải pháp toàn diện cho doanh nghiệp lớn',
    'pricing.enterprise.desc': 'Tùy chỉnh hoàn toàn theo yêu cầu',

    // Feature details
    'feature.conversations': 'cuộc hội thoại',
    'feature.basicTemplates': 'Mẫu chatbot cơ bản',
    'feature.advancedTemplates': 'Mẫu chatbot nâng cao',
    'feature.websiteIntegration': 'Tích hợp website',
    'feature.emailSupport': 'Hỗ trợ email',
    'feature.basicAnalytics': 'Phân tích cơ bản',
    'feature.workflows': 'workflow',
    'feature.multiChannel': 'Đa kênh (Facebook, Zalo)',
    'feature.prioritySupport': 'Hỗ trợ ưu tiên',
    'feature.advancedAnalytics': 'Phân tích nâng cao',
    'feature.crmIntegration': 'Tích hợp CRM',
    'feature.unlimited': 'Không giới hạn',
    'feature.customDesign': 'Thiết kế tùy chỉnh',
    'feature.customAI': 'AI tùy chỉnh',
    'feature.phoneSupport': 'Hỗ trợ điện thoại',
    'feature.advancedReporting': 'Báo cáo nâng cao',
    'feature.unlimitedWorkflows': 'Workflow không giới hạn',
    'feature.abTesting': 'A/B Testing',
    'feature.leadQualification': 'Phân loại lead',
    'feature.customBranding': 'Thương hiệu tùy chỉnh',
    'feature.onPremise': 'Triển khai riêng',
    'feature.dedicatedManager': 'Quản lý riêng',
    'feature.security': 'Bảo mật cao cấp',
    'feature.customIntegrations': 'Tích hợp tùy chỉnh',
    'feature.slaGuarantees': 'Cam kết SLA',
    'feature.whiteLabel': 'White-label'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.features': 'Features',
    'nav.caseStudies': 'Case Studies',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.getDemo': 'Get Demo',
    'nav.contactUs': 'Contact Us',

    // Home page
    'home.hero.title': 'Smart AI Chatbot',
    'home.hero.subtitle': 'Automate',
    'home.hero.subtitle2': 'customer service',
    'home.hero.subtitle3': '24/7',
    'home.hero.description': 'Advanced AI chatbot solution helps businesses automate customer service processes, increase business efficiency and improve user experience.\n\nQuick deployment, easy integration.',
    'home.hero.getDemo': 'Get Free Demo',
    'home.hero.learnMore': 'Learn More',

    'home.why.title': 'Why Choose',
    'home.why.subtitle': 'We are committed to bringing the best AI solutions for your business',
    'home.why.ai.title': 'Advanced AI',
    'home.why.ai.desc': 'Modern AI technology that understands context and responds naturally like humans',
    'home.why.security.title': 'Absolute Security',
    'home.why.security.desc': 'Data is encrypted and protected according to international standards',
    'home.why.results.title': 'Measurable Results',
    'home.why.results.desc': 'Real-time performance monitoring with detailed reports and deep analysis',
    'home.why.learnMore': 'Learn more about us',

    'home.features.title': 'Key Features',
    'home.features.subtitle': 'Discover the powerful features of D2 Group AI chatbot',
    'home.features.smart.title': 'Smart Conversations',
    'home.features.smart.desc': 'AI understands context and responds accurately',
    'home.features.instant.title': 'Instant Response',
    'home.features.instant.desc': 'Respond to customers within 2 seconds',
    'home.features.analytics.title': 'Data Analytics',
    'home.features.analytics.desc': 'Detailed reports on chatbot performance',
    'home.features.multichannel.title': 'Multi-channel',
    'home.features.multichannel.desc': 'Integrate Website, Facebook, Zalo, WhatsApp',
    'home.features.viewAll': 'View all features',

    'home.howItWorks.title': 'How It Works',
    'home.howItWorks.subtitle': 'Deploy AI chatbot in just 3 simple steps',
    'home.howItWorks.step1.title': 'Setup and Configuration',
    'home.howItWorks.step1.desc': 'Provide business information and customize chatbot according to needs',
    'home.howItWorks.step2.title': 'AI Training',
    'home.howItWorks.step2.desc': 'AI learns from data and knowledge about your products and services',
    'home.howItWorks.step3.title': 'Deploy and Operate',
    'home.howItWorks.step3.desc': 'Integrate into website and communication channels, start serving customers',

    'home.useCases.title': 'Real Applications',
    'home.useCases.subtitle': 'AI chatbot is suitable for all industries and business scales',
    'home.useCases.ecommerce': 'E-commerce',
    'home.useCases.healthcare': 'Healthcare',
    'home.useCases.education': 'Education',
    'home.useCases.banking': 'Banking',
    'home.useCases.realestate': 'Real Estate',
    'home.useCases.travel': 'Travel',
    'home.useCases.viewCaseStudies': 'View case studies',

    'home.testimonials.title': 'What Customers Say',
    'home.testimonials.subtitle': 'Over 1000+ businesses trust and use our solutions',
    'home.testimonials.1.content': 'D2 Group\'s AI chatbot helped us reduce 70% of customer request processing time and increase 40% conversion rate. Very professional support team.',
    'home.testimonials.2.content': 'Smart and easy-to-use AI solution. Customers are very satisfied with the new experience. ROI achieved after 3 months of deployment.',
    'home.testimonials.3.content': 'Quick integration, user-friendly interface. Students can easily look up information and register for courses through the chatbot.',

    'home.partners.title': 'Deployment Partners',
    'home.partners.subtitle': 'Trusted by leading businesses in Vietnam',

    'home.pricing.title': 'Flexible Pricing',
    'home.pricing.subtitle': 'Choose the service package that suits your business scale',
    'home.pricing.seeFullPricing': 'See full pricing',

    'home.faq.title': 'Frequently Asked Questions',
    'home.faq.subtitle': 'Common questions about AI chatbot',
    'home.faq.q1': 'Can the chatbot integrate with current CRM systems?',
    'home.faq.a1': 'Yes, we support integration with most popular CRM systems like Salesforce, HubSpot, and custom systems.',
    'home.faq.q2': 'How long does it take to deploy the chatbot?',
    'home.faq.a2': 'Usually 1-2 weeks depending on complexity and business customization requirements.',
    'home.faq.q3': 'Does the chatbot support Vietnamese?',
    'home.faq.a3': 'Yes, the chatbot is specially optimized for Vietnamese with the ability to understand local context and culture.',
    'home.faq.viewFullFaq': 'View all questions',

    'home.finalCta.title': 'Ready to',
    'home.finalCta.title2': 'automate',
    'home.finalCta.title3': 'customer service?',
    'home.finalCta.description': 'Start your free trial today and experience the power of AI',
    'home.finalCta.startTrial': 'Free 14-day trial',
    'home.finalCta.bookDemo': 'Book a demo',
    'home.finalCta.freeTrial': '14-day free trial',
    'home.finalCta.noCreditCard': 'No credit card required',
    'home.finalCta.setupIn5': 'Setup in 5 minutes',

    // About page
    'about.hero.title': 'About',
    'about.hero.titleHighlight': 'D2 Group',
    'about.hero.description': 'We are a team of technology experts with a mission to bring advanced AI solutions to Vietnamese businesses.',

    'about.story.title': 'Our',
    'about.story.titleHighlight': 'Story',
    'about.story.content': 'Founded in 2020, D2 Group started with the vision of creating smart AI solutions suitable for the Vietnamese market. We understand that each business has unique needs, so we continuously innovate to bring the best products.',

    'about.mission.title': 'Our',
    'about.mission.titleHighlight': 'Mission',
    'about.mission.content': 'To create AI solutions that are accessible, effective, and suitable for Vietnamese business culture.',

    'about.vision.title': 'Vision',
    'about.vision.titleHighlight': '2030',
    'about.vision.content': 'To become the leading trusted AI partner for businesses in Vietnam and Southeast Asia.',

    'about.values.title': 'Core',
    'about.values.titleHighlight': 'Values',
    'about.values.innovation.title': 'Innovation',
    'about.values.innovation.desc': 'Continuously research and apply the latest technology',
    'about.values.customer.title': 'Customer-Centric',
    'about.values.customer.desc': 'Taking customer success as our measure of success',
    'about.values.quality.title': 'Quality',
    'about.values.quality.desc': 'Commitment to high quality in all products and services',
    'about.values.integrity.title': 'Integrity',
    'about.values.integrity.desc': 'Transparent and honest in all transactions',

    'about.team.title': 'Expert',
    'about.team.titleHighlight': 'Team',
    'about.team.subtitle': 'The talented people behind D2 Group\'s success',

    'about.stats.title': 'Impressive',
    'about.stats.titleHighlight': 'Numbers',
    'about.stats.customers': 'Customers',
    'about.stats.projects': 'Projects',
    'about.stats.success': 'Success Rate',
    'about.stats.support': '24/7 Support',

    'about.join.title': 'Join the',
    'about.join.titleHighlight': 'Journey',
    'about.join.description': 'Let\'s build the future of AI in Vietnam together',
    'about.join.button': 'Contact Now',

    // Features page
    'features.hero.title': 'Powerful',
    'features.hero.titleHighlight': 'Features',
    'features.hero.description': 'Discover advanced features that make your AI chatbot smarter and more efficient',

    'features.core.title': 'Core',
    'features.core.titleHighlight': 'Features',
    'features.core.ai.title': 'Advanced Artificial Intelligence',
    'features.core.ai.desc': 'Using NLP and Machine Learning technology to understand context and respond naturally',
    'features.core.multilingual.title': 'Multi-language',
    'features.core.multilingual.desc': 'Support Vietnamese, English and many other languages',
    'features.core.analytics.title': 'Smart Analytics',
    'features.core.analytics.desc': 'Detailed reports on performance and user behavior',
    'features.core.integration.title': 'Easy Integration',
    'features.core.integration.desc': 'Connect with website, CRM, and other platforms',

    'features.advanced.title': 'Advanced',
    'features.advanced.titleHighlight': 'Features',
    'features.advanced.workflow.title': 'Automated Workflow',
    'features.advanced.workflow.desc': 'Design complex processes with drag-and-drop interface',
    'features.advanced.personalization.title': 'Personalization',
    'features.advanced.personalization.desc': 'Customize experience based on history and preferences',
    'features.advanced.sentiment.title': 'Sentiment Analysis',
    'features.advanced.sentiment.desc': 'Understand customer emotions and respond appropriately',
    'features.advanced.handoff.title': 'Smart Handoff',
    'features.advanced.handoff.desc': 'Automatically transfer to staff when needed',

    'features.integration.title': 'Multi-platform',
    'features.integration.titleHighlight': 'Integration',
    'features.integration.description': 'Seamlessly connect with tools and platforms you\'re already using',

    'features.security.title': 'Enterprise',
    'features.security.titleHighlight': 'Security',
    'features.security.encryption.title': 'End-to-end Encryption',
    'features.security.encryption.desc': 'Data is comprehensively protected',
    'features.security.compliance.title': 'Regulatory Compliance',
    'features.security.compliance.desc': 'Meets GDPR, SOC 2 and security standards',
    'features.security.backup.title': 'Automatic Backup',
    'features.security.backup.desc': 'Data is backed up regularly and securely',
    'features.security.access.title': 'Access Control',
    'features.security.access.desc': 'Detailed permissions for each member',

    'features.cta.title': 'Ready to experience',
    'features.cta.titleHighlight': 'these features?',
    'features.cta.description': 'Start with a free trial today',
    'features.cta.button': 'Try for Free',

    // Case Studies page
    'caseStudies.hero.title': 'Case',
    'caseStudies.hero.titleHighlight': 'Studies',
    'caseStudies.hero.description': 'Discover how businesses have succeeded with D2 Group\'s AI chatbot solutions',

    'caseStudies.featured.title': 'Featured',
    'caseStudies.featured.titleHighlight': 'Cases',

    'caseStudies.success.title': 'Measurable',
    'caseStudies.success.titleHighlight': 'Success',
    'caseStudies.success.metric1': 'Revenue Growth',
    'caseStudies.success.metric2': 'Reduced Operating Costs',
    'caseStudies.success.metric3': 'Improved Satisfaction',
    'caseStudies.success.metric4': 'Increased Conversion Rate',

    'caseStudies.industries.title': 'Diverse',
    'caseStudies.industries.titleHighlight': 'Industries',
    'caseStudies.industries.ecommerce': 'E-commerce',
    'caseStudies.industries.banking': 'Banking & Finance',
    'caseStudies.industries.healthcare': 'Healthcare',
    'caseStudies.industries.education': 'Education',
    'caseStudies.industries.realestate': 'Real Estate',
    'caseStudies.industries.travel': 'Travel',

    'caseStudies.testimonials.title': 'Customer',
    'caseStudies.testimonials.titleHighlight': 'Testimonials',

    'caseStudies.cta.title': 'The next success story',
    'caseStudies.cta.titleHighlight': 'will be yours',
    'caseStudies.cta.description': 'Let us help you achieve similar results',
    'caseStudies.cta.button': 'Get Started',

    // Pricing page
    'pricing.hero.title': 'Transparent',
    'pricing.hero.titleHighlight': 'Pricing',
    'pricing.hero.description': 'Choose the service package that fits your business scale and needs',
    'pricing.hero.features.trial': '14-day free trial',
    'pricing.hero.features.noSetup': 'No setup fees',
    'pricing.hero.features.cancel': 'Cancel anytime',

    'pricing.mostPopular': 'Most Popular',

    'pricing.plans.starter.name': 'Starter',
    'pricing.plans.starter.period': '/month',
    'pricing.plans.starter.description': 'Perfect for small businesses getting started',

    'pricing.plans.growth.name': 'Growth',
    'pricing.plans.growth.period': '/month',
    'pricing.plans.growth.description': 'Optimized for growing businesses',

    'pricing.plans.business.name': 'Business',
    'pricing.plans.business.period': '/month',
    'pricing.plans.business.description': 'Comprehensive solution for large enterprises',

    'pricing.plans.enterprise.name': 'Enterprise',
    'pricing.plans.enterprise.price': 'Contact us',
    'pricing.plans.enterprise.description': 'Fully customized to requirements',

    'pricing.features.conversations1000': '1,000 conversations/month',
    'pricing.features.conversations5000': '5,000 conversations/month',
    'pricing.features.conversations15000': '15,000 conversations/month',
    'pricing.features.unlimitedConversations': 'Unlimited conversations',
    'pricing.features.basicTemplates': 'Basic chatbot templates',
    'pricing.features.advancedTemplates': 'Advanced chatbot templates',
    'pricing.features.customDesign': 'Custom design',
    'pricing.features.websiteIntegration': 'Website integration',
    'pricing.features.multiChannel': 'Multi-channel (Facebook, Zalo, WhatsApp)',
    'pricing.features.emailSupport': 'Email support',
    'pricing.features.prioritySupport': 'Priority support',
    'pricing.features.phoneSupport': 'Phone support',
    'pricing.features.basicAnalytics': 'Basic analytics',
    'pricing.features.advancedAnalytics': 'Advanced analytics',
    'pricing.features.advancedReporting': 'Advanced reporting',
    'pricing.features.workflows5': '5 automated workflows',
    'pricing.features.unlimitedWorkflows': 'Unlimited workflows',
    'pricing.features.standardResponse': 'Standard response time',
    'pricing.features.priorityResponse': 'Priority response time',
    'pricing.features.crmIntegration': 'CRM integration',
    'pricing.features.abTesting': 'A/B Testing',
    'pricing.features.leadQualification': 'Lead qualification',
    'pricing.features.customBranding': 'Custom branding',
    'pricing.features.customAI': 'Custom AI',
    'pricing.features.dedicatedManager': 'Dedicated account manager',
    'pricing.features.onPremise': 'On-premise deployment',
    'pricing.features.security': 'Enterprise security',
    'pricing.features.customIntegrations': 'Custom integrations',
    'pricing.features.slaGuarantees': 'SLA guarantees',
    'pricing.features.whiteLabel': 'White-label solution',

    'pricing.buttons.getStarted': 'Get Started',
    'pricing.buttons.contact': 'Contact',

    'pricing.comparison.title': 'Detailed',
    'pricing.comparison.titleHighlight': 'Comparison',
    'pricing.comparison.subtitle': 'Understand the differences between service packages',
    'pricing.comparison.table.features': 'Features',
    'pricing.comparison.table.starter': 'Starter',
    'pricing.comparison.table.growth': 'Growth',
    'pricing.comparison.table.business': 'Business',
    'pricing.comparison.table.enterprise': 'Enterprise',

    'pricing.comparison.categories.core': 'Core Features',
    'pricing.comparison.categories.channels': 'Communication Channels',

    'pricing.comparison.features.monthlySessions': 'Sessions/month',
    'pricing.comparison.features.template': 'Chatbot templates',
    'pricing.comparison.features.responseTime': 'Response time',
    'pricing.comparison.features.analytics': 'Analytics',
    'pricing.comparison.features.websiteWidget': 'Website widget',
    'pricing.comparison.features.website': 'Website',
    'pricing.comparison.features.whatsapp': 'WhatsApp',
    'pricing.comparison.features.messenger': 'Facebook Messenger',
    'pricing.comparison.features.crm': 'CRM integration',
    'pricing.comparison.features.api': 'Custom API',

    'pricing.faq.title': 'Frequently',
    'pricing.faq.titleHighlight': 'Asked Questions',
    'pricing.faq.subtitle': 'Common questions about pricing',

    'pricing.faq.counting.question': 'How are conversations counted?',
    'pricing.faq.counting.answer': 'Each chat session from a user within 24 hours counts as one conversation.',

    'pricing.faq.upgrade.question': 'Can I upgrade my plan anytime?',
    'pricing.faq.upgrade.answer': 'Yes, you can upgrade or downgrade your service plan anytime. Changes will take effect in the next billing cycle.',

    'pricing.faq.trial.question': 'Does the trial include all features?',
    'pricing.faq.trial.answer': 'The 14-day trial includes all Growth plan features, unlimited and no credit card required.',

    'pricing.faq.exceed.question': 'What happens when I exceed the conversation limit?',
    'pricing.faq.exceed.answer': 'The system will notify you and you can upgrade your plan or purchase additional conversations at a discounted rate.',

    'pricing.cta.title': 'Ready to',
    'pricing.cta.titleHighlight': 'get started',
    'pricing.cta.description': 'Choose the right plan and start your digital transformation today',
    'pricing.cta.buttons.trial': 'Free 14-day trial',
    'pricing.cta.buttons.contact': 'Free consultation',
    'pricing.cta.help': 'Need help? Contact us',

    // Contact page
    'contact.hero.title': 'Contact',
    'contact.hero.titleHighlight': 'Us',
    'contact.hero.description': 'Ready to support and advise the most suitable AI solution for your business',

    'contact.features.consultation.title': 'Free Consultation',
    'contact.features.consultation.description': 'Analyze needs and propose solutions',
    'contact.features.response.title': 'Quick Response',
    'contact.features.response.description': 'Contact back within 24 hours',
    'contact.features.implementation.title': 'Fast Implementation',
    'contact.features.implementation.description': 'From idea to operation in just 1-2 weeks',

    'contact.form.title': 'Send Contact',
    'contact.form.titleHighlight': 'Information',
    'contact.form.subtitle': 'Fill in the information below and we will contact you soon',

    'contact.form.fields.name': 'Full Name',
    'contact.form.fields.email': 'Email',
    'contact.form.fields.phone': 'Phone Number',
    'contact.form.fields.company': 'Company',
    'contact.form.fields.interest': 'Interested In',
    'contact.form.fields.message': 'Message',

    'contact.form.placeholders.name': 'Enter your full name',
    'contact.form.placeholders.email': 'email@company.com',
    'contact.form.placeholders.phone': '+84 xxx xxx xxx',
    'contact.form.placeholders.company': 'Your company name',
    'contact.form.placeholders.interest': 'Select area of interest',
    'contact.form.placeholders.message': 'Describe your needs in detail...',

    'contact.form.interests.demo': 'Product demo',
    'contact.form.interests.pricing': 'Pricing consultation',
    'contact.form.interests.integration': 'System integration',
    'contact.form.interests.enterprise': 'Enterprise solution',
    'contact.form.interests.support': 'Technical support',
    'contact.form.interests.partnership': 'Partnership',
    'contact.form.interests.other': 'Other',

    'contact.form.submit': 'Send Information',
    'contact.form.sending': 'Sending...',
    'contact.form.privacy': 'Your information is protected according to privacy policy',

    'contact.form.success.title': 'Sent successfully!',
    'contact.form.success.description': 'We have received your information and will contact you soon.',
    'contact.form.error.title': 'An error occurred',
    'contact.form.error.description': 'Please try again later or contact directly via email.',

    'contact.info.title': 'Contact',
    'contact.info.titleHighlight': 'Information',
    'contact.info.email.title': 'Email',
    'contact.info.phone.title': 'Phone',
    'contact.info.address.title': 'Address',
    'contact.info.address.line1': '123 ABC Street, District 1',
    'contact.info.address.line2': 'Ho Chi Minh City',
    'contact.info.address.line3': 'Vietnam',
    'contact.info.hours.title': 'Working Hours',
    'contact.info.hours.weekdays': 'Monday - Friday: 8:00 - 18:00',
    'contact.info.hours.saturday': 'Saturday: 8:00 - 12:00',
    'contact.info.hours.emergency': '24/7 emergency support',

    'contact.map.title': 'Office',
    'contact.map.titleHighlight': 'Location',

    'contact.thanks.title': 'Thank you',
    'contact.thanks.titleHighlight': 'for your interest',
    'contact.thanks.description': 'Connect with us on social media channels for latest updates',

    // Pricing values
    'pricing.starter': 'Starter',
    'pricing.growth': 'Growth',
    'pricing.business': 'Business',
    'pricing.enterprise': 'Enterprise',
    'pricing.month': '/month',
    'pricing.contactPricing': 'Contact us',
    'pricing.getStarted': 'Get Started',
    'pricing.contactForPricing': 'Contact for pricing',
    'pricing.starter.desc': 'Perfect for small businesses',
    'pricing.growth.desc': 'Optimized for growing businesses',
    'pricing.business.desc': 'Comprehensive solution for large enterprises',
    'pricing.enterprise.desc': 'Fully customized to requirements',

    // Feature details
    'feature.conversations': 'conversations',
    'feature.basicTemplates': 'Basic chatbot templates',
    'feature.advancedTemplates': 'Advanced chatbot templates',
    'feature.websiteIntegration': 'Website integration',
    'feature.emailSupport': 'Email support',
    'feature.basicAnalytics': 'Basic analytics',
    'feature.workflows': 'workflows',
    'feature.multiChannel': 'Multi-channel (Facebook, Zalo)',
    'feature.prioritySupport': 'Priority support',
    'feature.advancedAnalytics': 'Advanced analytics',
    'feature.crmIntegration': 'CRM integration',
    'feature.unlimited': 'Unlimited',
    'feature.customDesign': 'Custom design',
    'feature.customAI': 'Custom AI',
    'feature.phoneSupport': 'Phone support',
    'feature.advancedReporting': 'Advanced reporting',
    'feature.unlimitedWorkflows': 'Unlimited workflows',
    'feature.abTesting': 'A/B Testing',
    'feature.leadQualification': 'Lead qualification',
    'feature.customBranding': 'Custom branding',
    'feature.onPremise': 'On-premise deployment',
    'feature.dedicatedManager': 'Dedicated manager',
    'feature.security': 'Enterprise security',
    'feature.customIntegrations': 'Custom integrations',
    'feature.slaGuarantees': 'SLA guarantees',
    'feature.whiteLabel': 'White-label'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
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
