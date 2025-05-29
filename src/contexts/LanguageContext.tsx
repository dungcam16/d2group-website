import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

const translations = {
  vi: {
    // Navigation
    nav: {
      home: 'Trang chủ',
      about: 'Giới thiệu',
      features: 'Tính năng',
      caseStudies: 'Nghiên cứu điển hình',
      pricing: 'Bảng giá',
      contact: 'Liên hệ',
      getDemo: 'Xem Demo',
      contactUs: 'Liên hệ chúng tôi'
    },

    // NotFound page
    notFound: {
      title: 'Trang không tìm thấy',
      description: 'Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.',
      backHome: 'Quay lại trang chủ',
      contactSupport: 'Liên hệ hỗ trợ',
      errorCode: 'Đường dẫn lỗi:'
    },

    // Home page
    home: {
      hero: {
        title: 'Giải pháp AI Chatbot',
        subtitle: 'Thông minh',
        description: 'Tự động hóa giao tiếp khách hàng với chatbot AI thông minh của chúng tôi. Tăng chuyển đổi, giảm chi phí hỗ trợ và cung cấp trải nghiệm khách hàng vượt trội.',
        cta: 'Bắt đầu ngay',
        secondaryCta: 'Xem demo'
      },
      stats: {
        clients: 'Khách hàng',
        countries: 'Quốc gia',
        uptime: 'Thời gian hoạt động'
      },
      features: {
        title: 'Tính năng nổi bật',
        subtitle: 'Tại sao chọn D2 Group?',
        description: 'Nền tảng AI chatbot toàn diện của chúng tôi cung cấp mọi thứ bạn cần để tự động hóa và nâng cao giao tiếp với khách hàng.',
        cta: 'Khám phá tất cả tính năng',
        items: {
          nlp: {
            title: 'Xử lý ngôn ngữ tự nhiên',
            description: 'Chatbot của chúng tôi hiểu ngữ cảnh, ý định và cảm xúc để cung cấp phản hồi chính xác.'
          },
          omnichannel: {
            title: 'Tích hợp đa kênh',
            description: 'Triển khai trên website, WhatsApp, Facebook và nhiều nền tảng khác.'
          },
          analytics: {
            title: 'Phân tích thời gian thực',
            description: 'Theo dõi hiệu suất, tỷ lệ chuyển đổi và mức độ hài lòng của khách hàng.'
          },
          nocode: {
            title: 'Không cần lập trình',
            description: 'Dễ dàng thiết lập và tùy chỉnh với giao diện kéo thả trực quan.'
          }
        }
      },
      benefits: {
        title: 'Lợi ích kinh doanh',
        subtitle: 'Tác động đến kết quả',
        description: 'Khám phá cách chatbot AI của chúng tôi có thể chuyển đổi hoạt động kinh doanh của bạn và thúc đẩy tăng trưởng.',
        items: {
          conversion: {
            title: 'Tăng tỷ lệ chuyển đổi',
            description: 'Tăng doanh số bán hàng với tương tác tức thì và đề xuất được cá nhân hóa.'
          },
          support: {
            title: 'Giảm chi phí hỗ trợ',
            description: 'Tự động hóa câu trả lời cho các câu hỏi thường gặp và giảm khối lượng vé hỗ trợ.'
          },
          experience: {
            title: 'Nâng cao trải nghiệm',
            description: 'Cung cấp hỗ trợ 24/7 và phản hồi tức thì cho khách hàng của bạn.'
          },
          insights: {
            title: 'Thu thập thông tin chi tiết',
            description: 'Hiểu rõ hơn về nhu cầu và hành vi của khách hàng thông qua phân tích hội thoại.'
          }
        }
      },
      howItWorks: {
        title: 'Cách thức hoạt động',
        subtitle: 'Đơn giản & Hiệu quả',
        description: 'Thiết lập chatbot AI của bạn chỉ trong vài phút với quy trình đơn giản của chúng tôi.',
        steps: {
          step1: {
            title: 'Tùy chỉnh chatbot của bạn',
            description: 'Chọn mẫu, tùy chỉnh câu trả lời và thiết lập luồng hội thoại.'
          },
          step2: {
            title: 'Tích hợp với website của bạn',
            description: 'Thêm một dòng mã hoặc sử dụng plugin của chúng tôi cho các nền tảng phổ biến.'
          },
          step3: {
            title: 'Huấn luyện AI',
            description: 'AI của chúng tôi học từ tương tác và liên tục cải thiện theo thời gian.'
          },
          step4: {
            title: 'Theo dõi và tối ưu hóa',
            description: 'Sử dụng phân tích để tinh chỉnh hiệu suất và tối đa hóa kết quả.'
          }
        },
        cta: 'Bắt đầu ngay hôm nay'
      },
      testimonials: {
        title: 'Khách hàng nói gì',
        subtitle: 'Câu chuyện thành công',
        description: 'Khám phá cách các doanh nghiệp đã chuyển đổi hoạt động của họ với giải pháp AI chatbot của chúng tôi.',
        cta: 'Xem tất cả nghiên cứu điển hình'
      },
      cta: {
        title: 'Sẵn sàng nâng cao trải nghiệm khách hàng của bạn?',
        description: 'Bắt đầu với chatbot AI của chúng tôi ngay hôm nay và xem sự khác biệt mà nó có thể tạo ra cho doanh nghiệp của bạn.',
        primary: 'Bắt đầu miễn phí',
        secondary: 'Liên hệ với đội ngũ bán hàng'
      }
    },

    // About page
    about: {
      hero: {
        title: 'Về chúng tôi',
        subtitle: 'Chúng tôi là D2 Group',
        description: 'Chúng tôi là công ty công nghệ AI hàng đầu Việt Nam, chuyên về các giải pháp chatbot thông minh và tự động hóa quy trình cho doanh nghiệp.'
      },
      stats: {
        clients: 'Khách hàng',
        countries: 'Quốc gia',
        uptime: 'Thời gian hoạt động'
      },
      mission: {
        title: 'Sứ mệnh của chúng tôi',
        description: 'Tại D2 Group, chúng tôi tin rằng AI có thể cách mạng hóa cách doanh nghiệp giao tiếp với khách hàng. Sứ mệnh của chúng tôi là làm cho công nghệ AI tiên tiến trở nên dễ tiếp cận và hiệu quả cho các doanh nghiệp thuộc mọi quy mô.',
        global: {
          title: 'Tầm nhìn toàn cầu',
          desc: 'Xây dựng các giải pháp AI phục vụ khách hàng trên toàn thế giới'
        },
        innovation: {
          title: 'Đổi mới liên tục',
          desc: 'Luôn đi đầu trong công nghệ AI và xử lý ngôn ngữ tự nhiên'
        },
        security: {
          title: 'Bảo mật là ưu tiên hàng đầu',
          desc: 'Cam kết bảo vệ dữ liệu và quyền riêng tư của khách hàng'
        }
      },
      vision: {
        title: 'Tầm nhìn của chúng tôi',
        description: 'Chúng tôi hướng tới một tương lai nơi mọi doanh nghiệp đều có thể tận dụng sức mạnh của AI để cung cấp trải nghiệm khách hàng vượt trội, tự động hóa các tác vụ lặp đi lặp lại và giải phóng tiềm năng con người cho công việc sáng tạo hơn.'
      },
      team: {
        title: 'Đội ngũ của chúng tôi',
        subtitle: 'Gặp gỡ những người đứng sau D2 Group'
      },
      journey: {
        title: 'Hành trình của chúng tôi',
        subtitle: 'Từ ý tưởng đến thành công'
      },
      awards: {
        title: 'Giải thưởng & Ghi nhận',
        subtitle: 'Thành tựu của chúng tôi'
      },
      cta: {
        title: 'Sẵn sàng hợp tác với chúng tôi?',
        description: 'Hãy khám phá cách D2 Group có thể giúp doanh nghiệp của bạn tự động hóa giao tiếp khách hàng và thúc đẩy tăng trưởng.',
        getStarted: 'Bắt đầu ngay',
        scheduleCall: 'Lên lịch cuộc gọi'
      }
    },

    // Pricing page
    pricing: {
      title: 'Giá cả đơn giản, minh bạch',
      subtitle: 'Chọn gói phù hợp với nhu cầu của bạn',
      freeTrial: 'Dùng thử miễn phí 14 ngày',
      noSetupFees: 'Không phí thiết lập',
      cancelAnytime: 'Hủy bất cứ lúc nào',
      month: '/tháng',
      starter: 'Starter',
      growth: 'Growth',
      business: 'Business',
      enterprise: 'Enterprise',
      contactPricing: 'Liên hệ để có giá',
      mostPopular: 'Phổ biến nhất',
      getStarted: 'Bắt đầu ngay',
      contactForPricing: 'Liên hệ để có giá',
      'starter.desc': 'Dành cho doanh nghiệp nhỏ mới bắt đầu với chatbot AI',
      'growth.desc': 'Dành cho doanh nghiệp đang phát triển cần nhiều tính năng hơn',
      'business.desc': 'Dành cho doanh nghiệp lớn với nhu cầu tùy chỉnh cao',
      'enterprise.desc': 'Giải pháp tùy chỉnh hoàn toàn cho doanh nghiệp quy mô lớn'
    },

    // Features
    feature: {
      conversations: 'cuộc hội thoại',
      basicTemplates: 'Mẫu cơ bản',
      websiteIntegration: 'Tích hợp website',
      emailSupport: 'Hỗ trợ qua email',
      basicAnalytics: 'Phân tích cơ bản',
      workflows: 'quy trình làm việc',
      standardResponse: 'Thời gian phản hồi tiêu chuẩn',
      advancedTemplates: 'Mẫu nâng cao',
      multiChannel: 'Tích hợp đa kênh',
      crmIntegration: 'Tích hợp CRM',
      advancedAnalytics: 'Phân tích nâng cao',
      unlimitedWorkflows: 'Quy trình làm việc không giới hạn',
      prioritySupport: 'Hỗ trợ ưu tiên',
      abTesting: 'Kiểm tra A/B',
      leadQualification: 'Đánh giá khách hàng tiềm năng',
      customDesign: 'Thiết kế tùy chỉnh',
      customBranding: 'Thương hiệu tùy chỉnh',
      priorityResponse: 'Thời gian phản hồi ưu tiên',
      unlimited: 'Không giới hạn',
      customAI: 'AI tùy chỉnh',
      dedicatedManager: 'Người quản lý riêng',
      onPremise: 'Triển khai tại chỗ',
      security: 'Bảo mật cấp doanh nghiệp',
      customIntegrations: 'Tích hợp tùy chỉnh',
      phoneSupport: 'Hỗ trợ qua điện thoại',
      slaGuarantees: 'Đảm bảo SLA',
      whiteLabel: 'White Label',
      advancedReporting: 'Báo cáo nâng cao'
    },

    // Features page
    features: {
      hero: {
        title: 'Tính năng Mạnh mẽ',
        subtitle: 'Thúc đẩy Kết quả',
        description: 'Khám phá bộ tính năng toàn diện được hỗ trợ bởi AI được thiết kế để biến đổi giao tiếp khách hàng của bạn và thúc đẩy tăng trưởng kinh doanh có thể đo lường được.',
        cta: 'Xem Tính năng Hoạt động'
      },
      core: {
        title: 'Khả năng',
        subtitle: 'Cốt lõi',
        description: 'Mọi thứ bạn cần để mang lại trải nghiệm khách hàng đặc biệt'
      },
      nlp: {
        title: 'Xử lý Ngôn ngữ Tự nhiên',
        description: 'AI tiên tiến hiểu ngữ cảnh, ý định và cảm xúc',
        details: {
          accuracy: 'Hỗ trợ đa ngôn ngữ với độ chính xác 95%+',
          contextual: 'Quản lý luồng hội thoại theo ngữ cảnh',
          sentiment: 'Phân tích cảm xúc và nhận diện cảm xúc',
          intent: 'Nhận diện ý định và trích xuất thực thể'
        }
      },
      omnichannel: {
        title: 'Triển khai Đa kênh',
        description: 'Triển khai trên website, WhatsApp, Facebook và nhiều hơn nữa',
        details: {
          website: 'Widget chat website với giao diện có thể tùy chỉnh',
          whatsapp: 'Tích hợp WhatsApp Business API',
          facebook: 'Kết nối Facebook Messenger',
          sms: 'Hỗ trợ kênh SMS và voice'
        }
      },
      analytics: {
        title: 'Phân tích Thời gian Thực',
        description: 'Thông tin toàn diện về tương tác khách hàng',
        details: {
          monitoring: 'Giám sát hội thoại trực tiếp',
          metrics: 'Chỉ số hiệu suất và KPI',
          satisfaction: 'Chấm điểm sự hài lòng của khách hàng',
          roi: 'Theo dõi ROI và chuyển đổi'
        }
      },
      security: {
        title: 'Bảo mật Doanh nghiệp',
        description: 'Tiêu chuẩn bảo mật và tuân thủ cấp ngân hàng',
        details: {
          encryption: 'Mã hóa đầu cuối',
          soc2: 'Tuân thủ SOC 2 Type II',
          gdpr: 'Tuân thủ GDPR và quyền riêng tư dữ liệu',
          sso: 'Tích hợp đăng nhập một lần (SSO)'
        }
      },
      deployment: {
        title: 'Triển khai Tức thì',
        description: 'Hoạt động trong vài phút với nền tảng no-code của chúng tôi',
        details: {
          setup: 'Quá trình thiết lập 5 phút',
          templates: 'Mẫu và quy trình làm việc được xây dựng sẵn',
          builder: 'Trình tạo hội thoại kéo và thả',
          integrations: 'Tích hợp một cú nhấp chuột'
        }
      },
      conversations: {
        title: 'Hội thoại Thông minh',
        description: 'Tương tác giống con người để chuyển đổi và thu hút',
        details: {
          personalization: 'Cá nhân hóa động',
          qualification: 'Tự động hóa đủ điều kiện khách hàng tiềm năng',
          booking: 'Đặt lịch hẹn và lên lịch',
          recommendations: 'Đề xuất sản phẩm'
        }
      },
      vsTraditional: {
        title: 'AI Chatbots so với',
        subtitle: 'Live Chat Truyền thống',
        description: 'Xem cách tự động hóa được hỗ trợ bởi AI vượt trội hơn các phương pháp dịch vụ khách hàng truyền thống'
      },
      comparison: {
        feature: 'Tính năng',
        traditionalLiveChat: 'Live Chat Truyền thống',
        aiChatbot: 'AI Chatbot',
        improvement: 'Cải thiện',
        responseTime: 'Thời gian Phản hồi',
        hoursTodays: 'Giờ đến ngày',
        underTwoSec: '< 2 giây',
        ninetyNineFaster: '99% nhanh hơn',
        availability: 'Tính khả dụng',
        businessHours: 'Chỉ giờ làm việc',
        twentyFourSeven: '24/7/365',
        alwaysOn: 'Luôn bật',
        scalability: 'Khả năng Mở rộng',
        limitedByStaff: 'Bị giới hạn bởi nhân viên',
        unlimitedConversations: 'Hội thoại không giới hạn',
        infiniteScale: 'Quy mô vô hạn',
        consistency: 'Tính nhất quán',
        variesByAgent: 'Thay đổi theo đại lý',
        alwaysConsistent: 'Luôn nhất quán',
        hundredReliable: '100% đáng tin cậy',
        costPerInteraction: 'Chi phí mỗi Tương tác',
        costReduction: '95% giảm chi phí',
        languageSupport: 'Hỗ trợ Ngôn ngữ',
        oneToTwoLang: '1-2 ngôn ngữ',
        fiftyPlusLang: '50+ ngôn ngữ',
        globalReach: 'Phạm vi toàn cầu'
      },
      advancedCapabilities: {
        title: 'Khả năng',
        subtitle: 'Nâng cao',
        description: 'Khám phá chức năng sâu sắc làm nên sự khác biệt của D2 Group'
      },
      advanced: {
        aiMl: 'AI & Machine Learning',
        flowBuilder: 'Trình Tạo Luồng Hội thoại',
        flowBuilderDesc: 'Giao diện kéo và thả trực quan để thiết kế đường dẫn hội thoại phức tạp',
        intentTraining: 'Đào tạo Ý định',
        intentTrainingDesc: 'Liên tục cải thiện hiểu biết AI với dữ liệu đào tạo tùy chỉnh',
        autoLearning: 'Tự động Học',
        autoLearningDesc: 'Thuật toán machine learning cải thiện phản hồi theo thời gian',
        fallbackHandling: 'Xử lý Dự phòng',
        fallbackHandlingDesc: 'Chuyển giao thông minh cho đại lý con người khi cần thiết',
        integrationApis: 'Tích hợp & APIs',
        crmIntegration: 'Tích hợp CRM',
        crmIntegrationDesc: 'Kết nối với Salesforce, HubSpot, Pipedrive và 50+ CRM',
        ecommerce: 'Nền tảng E-commerce',
        ecommerceDesc: 'Tích hợp gốc với Shopify, WooCommerce, Magento',
        customApis: 'APIs Tùy chỉnh',
        customApisDesc: 'APIs RESTful cho tích hợp và quy trình làm việc tùy chỉnh',
        webhooks: 'Hỗ trợ Webhook',
        webhooksDesc: 'Đồng bộ hóa dữ liệu thời gian thực với hệ thống bên ngoài',
        analyticsReporting: 'Phân tích & Báo cáo',
        conversationAnalytics: 'Phân tích Hội thoại',
        conversationAnalyticsDesc: 'Thông tin sâu sắc về hành vi khách hàng và mẫu hội thoại',
        performanceMetrics: 'Chỉ số Hiệu suất',
        performanceMetricsDesc: 'Theo dõi tỷ lệ giải quyết, điểm hài lòng và chỉ số chuyển đổi',
        customDashboards: 'Bảng điều khiển Tùy chỉnh',
        customDashboardsDesc: 'Xây dựng bảng điều khiển báo cáo cá nhân hóa cho các bên liên quan',
        abTesting: 'A/B Testing',
        abTestingDesc: 'Kiểm tra các luồng hội thoại khác nhau và tối ưu hóa hiệu suất'
      },
      demo: {
        title: 'Xem Tính năng của Chúng tôi',
        subtitle: 'Trong Hành động',
        description: 'Trải nghiệm sức mạnh của nền tảng AI chatbot D2 Group với demo được cá nhân hóa phù hợp với nhu cầu kinh doanh của bạn.',
        interactiveDemo: 'Demo Tương tác',
        clickToExperience: 'Nhấp để trải nghiệm chatbot của chúng tôi trong hành động',
        realTime: 'Luồng hội thoại thời gian thực',
        multiLanguage: 'Hỗ trợ đa ngôn ngữ',
        analyticsDashboard: 'Bảng điều khiển phân tích',
        bookDemo: 'Đặt Demo Trực tiếp',
        viewCaseStudies: 'Xem Nghiên cứu Trường hợp'
      }
    },

    // Case Studies page
    caseStudies: {
      hero: {
        title: 'Câu chuyện Thành công',
        subtitle: 'Thực tế',
        description: 'Khám phá cách các doanh nghiệp trong các ngành công nghiệp đã biến đổi trải nghiệm khách hàng và đạt được kết quả đáng kể với các giải pháp AI chatbot của D2 Group.'
      },
      stats: {
        deployments: 'Triển khai Thành công',
        conversionIncrease: 'Tăng Chuyển đổi Trung bình',
        costReduction: 'Giảm Chi phí Trung bình',
        customerSupport: 'Hỗ trợ Khách hàng'
      },
      challenge: 'Thách thức',
      solution: 'Giải pháp',
      results: 'Kết quả',
      metrics: {
        conversionRate: 'Tỷ lệ Chuyển đổi',
        cartAbandonment: 'Bỏ giỏ hàng',
        responseTime: 'Thời gian Phản hồi',
        customerSatisfaction: 'Sự hài lòng Khách hàng',
        waitTimes: 'Thời gian Chờ',
        appointmentBookings: 'Đặt lịch Hẹn',
        staffEfficiency: 'Hiệu quả Nhân viên',
        patientSatisfaction: 'Sự hài lòng Bệnh nhân',
        leadQuality: 'Chất lượng Khách hàng tiềm năng',
        onboardingTime: 'Thời gian Onboarding',
        processEfficiency: 'Hiệu quả Quy trình',
        studentEngagement: 'Sự tham gia Sinh viên',
        courseCompletion: 'Hoàn thành Khóa học',
        supportQueries: 'Truy vấn Hỗ trợ',
        studentSatisfaction: 'Sự hài lòng Sinh viên',
        qualifiedLeads: 'Khách hàng tiềm năng Đủ điều kiện',
        propertyViews: 'Lượt xem Bất động sản',
        salesCycle: 'Chu kỳ Bán hàng',
        agentProductivity: 'Năng suất Đại lý',
        bookingAutomation: 'Tự động hóa Đặt phòng',
        staffWorkload: 'Khối lượng Công việc Nhân viên',
        bookingConversion: 'Chuyển đổi Đặt phòng',
        guestSatisfaction: 'Sự hài lòng Khách'
      },
      ecommerce: {
        title: 'Gã khổng lồ E-commerce Tăng Chuyển đổi 45%',
        industry: 'Thương mại điện tử',
        challenge: 'Tỷ lệ bỏ giỏ hàng cao và các yêu cầu khách hàng áp đảo trong mùa cao điểm',
        solution: 'Triển khai AI chatbot cho đề xuất sản phẩm, theo dõi đơn hàng và hỗ trợ khách hàng tức thì',
        testimonial: 'Chatbot đã biến đổi trải nghiệm khách hàng của chúng tôi. Chúng tôi đang thấy tỷ lệ chuyển đổi cao kỷ lục và đội ngũ hỗ trợ có thể tập trung vào các vấn đề phức tạp.'
      },
      healthcare: {
        title: 'Nhà cung cấp Y tế Giảm Thời gian Chờ 60%',
        industry: 'Y tế',
        challenge: 'Thời gian chờ đợi lâu của bệnh nhân để đặt lịch hẹn và các yêu cầu sức khỏe cơ bản',
        solution: 'Triển khai bot lập lịch hẹn với bộ kiểm tra triệu chứng và hệ thống thông tin sức khỏe',
        testimonial: 'Bệnh nhân của chúng tôi yêu thích phản hồi tức thì cho các cuộc hẹn và câu hỏi sức khỏe cơ bản. Nó đã cách mạng hóa quy trình chăm sóc bệnh nhân của chúng tôi.'
      },
      finance: {
        title: 'Dịch vụ Tài chính Cải thiện Chất lượng Khách hàng tiềm năng 80%',
        industry: 'Dịch vụ Tài chính',
        challenge: 'Quy trình đủ điều kiện khách hàng tiềm năng kém và onboarding khách hàng tốn thời gian',
        solution: 'Triển khai bot đủ điều kiện khách hàng tiềm năng thông minh với xử lý tài liệu và tự động hóa KYC',
        testimonial: 'AI chatbot đủ điều kiện khách hàng tiềm năng tốt đến mức đội ngũ bán hàng của chúng tôi chỉ nói chuyện với khách hàng tiềm năng nghiêm túc. Tỷ lệ chuyển đổi của chúng tôi chưa bao giờ cao hơn.'
      },
      education: {
        title: 'Nền tảng Giáo dục Tăng Sự tham gia Sinh viên 70%',
        industry: 'Giáo dục',
        challenge: 'Sự tham gia sinh viên thấp và tỷ lệ bỏ học cao trong các khóa học trực tuyến',
        solution: 'Tạo bot gia sư AI cho hỗ trợ sinh viên 24/7, đề xuất khóa học và theo dõi tiến độ',
        testimonial: 'Sinh viên có một gia sư AI cá nhân có sẵn 24/7. Sự cải thiện trong sự tham gia và tỷ lệ hoàn thành đã đáng chú ý.'
      },
      realEstate: {
        title: 'Công ty Bất động sản Tạo ra 3x Khách hàng tiềm năng Đủ điều kiện Hơn',
        industry: 'Bất động sản',
        challenge: 'Khó khăn trong việc đủ điều kiện người mua nghiêm túc và quản lý khối lượng lớn yêu cầu bất động sản',
        solution: 'Triển khai bot tìm kiếm bất động sản với tour ảo và hệ thống đủ điều kiện người mua',
        testimonial: 'Chatbot tiền đủ điều kiện người mua và lên lịch xem tự động. Các đại lý của chúng tôi bây giờ chỉ dành thời gian với những người mua nghiêm túc.'
      },
      hospitality: {
        title: 'Chuỗi Khách sạn Đạt 90% Tự động hóa Đặt phòng',
        industry: 'Khách sạn',
        challenge: 'Quy trình đặt phòng thủ công áp đảo nhân viên trong mùa du lịch cao điểm',
        solution: 'Triển khai bot tự động hóa đặt phòng với đề xuất phòng và tính năng dịch vụ khách',
        testimonial: 'Khách có thể đặt phòng, yêu cầu dịch vụ và nhận đề xuất ngay lập tức. Tỷ lệ lấp đầy của chúng tôi đã đạt mức cao nhất mọi thời đại.'
      },
      industries: {
        title: 'Các ngành chúng tôi',
        subtitle: 'Phục vụ',
        description: 'Thành công đã được chứng minh trên các lĩnh vực kinh doanh đa dạng',
        ecommerce: 'Thương mại điện tử',
        healthcare: 'Y tế',
        finance: 'Tài chính',
        education: 'Giáo dục',
        realEstate: 'Bất động sản',
        hospitality: 'Khách sạn',
        retail: 'Bán lẻ',
        automotive: 'Ô tô',
        insurance: 'Bảo hiểm',
        manufacturing: 'Sản xuất',
        travel: 'Du lịch',
        logistics: 'Logistics'
      },
      cta: {
        title: 'Sẵn sàng Viết',
        subtitle: 'Câu chuyện Thành công của Bạn',
        description: 'Tham gia cùng hàng trăm doanh nghiệp thành công đã biến đổi trải nghiệm khách hàng với D2 Group. Hãy thảo luận về cách chúng tôi có thể mang lại kết quả tương tự cho tổ chức của bạn.',
        startStory: 'Bắt đầu Câu chuyện Thành công của Bạn',
        viewPricing: 'Xem Bảng giá'
      }
    },

    // Contact page
    contact: {
      hero: {
        title: 'Liên hệ',
        subtitle: 'Chúng tôi',
        description: 'Sẵn sàng biến đổi các cuộc hội thoại khách hàng của bạn? Hãy thảo luận về cách D2 Group có thể giúp bạn đạt được mục tiêu tự động hóa. Các chuyên gia của chúng tôi đang sẵn sàng cung cấp hướng dẫn cá nhân hóa.'
      },
      features: {
        consultation: {
          title: 'Tư vấn Miễn phí',
          description: 'Hướng dẫn chuyên gia phù hợp với nhu cầu của bạn'
        },
        response: {
          title: 'Phản hồi 24 Giờ',
          description: 'Xử lý nhanh chóng tất cả các yêu cầu'
        },
        implementation: {
          title: 'Triển khai Nhanh',
          description: 'Hoạt động chỉ trong 48 giờ'
        }
      },
      form: {
        title: 'Hãy Bắt đầu',
        subtitle: 'Cuộc trò chuyện',
        description: 'Điền vào biểu mẫu dưới đây và đội ngũ của chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ.',
        fullName: 'Họ và Tên',
        fullNamePlaceholder: 'Nguyễn Văn An',
        email: 'Địa chỉ Email',
        emailPlaceholder: 'an@congty.com',
        phone: 'Số Điện thoại',
        phonePlaceholder: '+84 123 456 789',
        company: 'Tên Công ty',
        companyPlaceholder: 'Công ty ABC',
        interest: 'Lĩnh vực Quan tâm',
        interestPlaceholder: 'Chúng tôi có thể giúp gì cho bạn?',
        options: {
          demo: 'Lên lịch Demo Sản phẩm',
          pricing: 'Nhận Thông tin Giá',
          integration: 'Thảo luận Tùy chọn Tích hợp',
          enterprise: 'Giải pháp Doanh nghiệp',
          support: 'Hỗ trợ Kỹ thuật',
          partnership: 'Cơ hội Đối tác',
          other: 'Khác'
        },
        message: 'Tin nhắn',
        messagePlaceholder: 'Hãy cho chúng tôi biết về nhu cầu kinh doanh, thách thức hiện tại hoặc bất kỳ câu hỏi cụ thể nào bạn có...',
        sendMessage: 'Gửi Tin nhắn',
        sending: 'Đang gửi...',
        privacy: 'Bằng cách gửi biểu mẫu này, bạn đồng ý với Chính sách Quyền riêng tư và Điều khoản Dịch vụ của chúng tôi.',
        successTitle: 'Cảm ơn bạn đã quan tâm!',
        successDescription: 'Chúng tôi sẽ liên lạc lại với bạn trong vòng 24 giờ. Kiểm tra email để xác nhận.',
        errorTitle: 'Ôi! Có gì đó không ổn',
        errorDescription: 'Không thể gửi biểu mẫu. Vui lòng thử lại hoặc liên hệ trực tiếp qua email.'
      },
      info: {
        title: 'Thông tin',
        subtitle: 'Liên hệ',
        email: 'Email',
        phone: 'Điện thoại',
        address: 'Địa chỉ',
        addressDetail: 'Tầng 10, Tòa nhà ABC\n123 Đường Công nghệ, Quận 1\nThành phố Hồ Chí Minh, Việt Nam',
        hours: 'Giờ Làm việc',
        hoursDetail: 'Thứ Hai - Thứ Sáu: 9:00 SA - 6:00 CH (GMT+7)\nThứ Bảy: 10:00 SA - 2:00 CH (GMT+7)\nHỗ trợ khẩn cấp: 24/7'
      },
      map: {
        title: 'Tìm',
        subtitle: 'Chúng tôi'
      },
      thanks: {
        title: 'Cảm ơn bạn vì sự',
        subtitle: 'Quan tâm',
        description: 'Tin nhắn của bạn đã được nhận và đội ngũ của chúng tôi sẽ phản hồi trong vòng 24 giờ. Trong thời gian chờ đợi, hãy kết nối với chúng tôi trên mạng xã hội.'
      }
    },
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      features: 'Features',
      caseStudies: 'Case Studies',
      pricing: 'Pricing',
      contact: 'Contact',
      getDemo: 'Get Demo',
      contactUs: 'Contact Us'
    },

    // NotFound page
    notFound: {
      title: 'Page Not Found',
      description: 'Sorry, the page you are looking for doesn\'t exist or has been moved.',
      backHome: 'Back to Home',
      contactSupport: 'Contact Support',
      errorCode: 'Error path:'
    },

    // Home page
    home: {
      hero: {
        title: 'AI Chatbot Solutions',
        subtitle: 'Intelligent',
        description: 'Automate customer communications with our intelligent AI chatbot. Increase conversions, reduce support costs, and deliver superior customer experiences.',
        cta: 'Get Started',
        secondaryCta: 'See Demo'
      },
      stats: {
        clients: 'Clients',
        countries: 'Countries',
        uptime: 'Uptime'
      },
      features: {
        title: 'Key Features',
        subtitle: 'Why Choose D2 Group?',
        description: 'Our comprehensive AI chatbot platform provides everything you need to automate and enhance customer communications.',
        cta: 'Explore All Features',
        items: {
          nlp: {
            title: 'Natural Language Processing',
            description: 'Our chatbots understand context, intent, and sentiment to provide accurate responses.'
          },
          omnichannel: {
            title: 'Omnichannel Integration',
            description: 'Deploy across website, WhatsApp, Facebook, and more platforms.'
          },
          analytics: {
            title: 'Real-time Analytics',
            description: 'Track performance, conversion rates, and customer satisfaction levels.'
          },
          nocode: {
            title: 'No-code Required',
            description: 'Easily set up and customize with our intuitive drag-and-drop interface.'
          }
        }
      },
      benefits: {
        title: 'Business Benefits',
        subtitle: 'Impact on Results',
        description: 'Discover how our AI chatbot can transform your operations and drive growth.',
        items: {
          conversion: {
            title: 'Increase Conversion Rates',
            description: 'Boost sales with instant engagement and personalized recommendations.'
          },
          support: {
            title: 'Reduce Support Costs',
            description: 'Automate answers to common questions and reduce ticket volume.'
          },
          experience: {
            title: 'Enhance Experience',
            description: 'Provide 24/7 support and instant responses to your customers.'
          },
          insights: {
            title: 'Gather Insights',
            description: 'Better understand customer needs and behaviors through conversation analytics.'
          }
        }
      },
      howItWorks: {
        title: 'How It Works',
        subtitle: 'Simple & Effective',
        description: 'Set up your AI chatbot in minutes with our simple process.',
        steps: {
          step1: {
            title: 'Customize your chatbot',
            description: 'Choose templates, customize responses, and set up conversation flows.'
          },
          step2: {
            title: 'Integrate with your website',
            description: 'Add a single line of code or use our plugin for popular platforms.'
          },
          step3: {
            title: 'Train the AI',
            description: 'Our AI learns from interactions and continuously improves over time.'
          },
          step4: {
            title: 'Monitor and optimize',
            description: 'Use analytics to fine-tune performance and maximize results.'
          }
        },
        cta: 'Get Started Today'
      },
      testimonials: {
        title: 'What Clients Say',
        subtitle: 'Success Stories',
        description: 'Discover how businesses have transformed their operations with our AI chatbot solutions.',
        cta: 'View All Case Studies'
      },
      cta: {
        title: 'Ready to elevate your customer experience?',
        description: 'Start with our AI chatbot today and see the difference it can make for your business.',
        primary: 'Start for Free',
        secondary: 'Contact Sales Team'
      }
    },

    // About page
    about: {
      hero: {
        title: 'About Us',
        subtitle: 'We are D2 Group',
        description: 'We are Vietnam\'s leading AI technology company, specializing in intelligent chatbot solutions and process automation for businesses.'
      },
      stats: {
        clients: 'Clients',
        countries: 'Countries',
        uptime: 'Uptime'
      },
      mission: {
        title: 'Our Mission',
        description: 'At D2 Group, we believe AI can revolutionize how businesses communicate with customers. Our mission is to make advanced AI technology accessible and effective for businesses of all sizes.',
        global: {
          title: 'Global Vision',
          desc: 'Building AI solutions that serve customers worldwide'
        },
        innovation: {
          title: 'Continuous Innovation',
          desc: 'Always at the forefront of AI and natural language processing technology'
        },
        security: {
          title: 'Security First',
          desc: 'Committed to protecting customer data and privacy'
        }
      },
      vision: {
        title: 'Our Vision',
        description: 'We envision a future where every business can harness the power of AI to deliver exceptional customer experiences, automate repetitive tasks, and free human potential for more creative work.'
      },
      team: {
        title: 'Our Team',
        subtitle: 'Meet the people behind D2 Group'
      },
      journey: {
        title: 'Our Journey',
        subtitle: 'From idea to success'
      },
      awards: {
        title: 'Awards & Recognition',
        subtitle: 'Our achievements'
      },
      cta: {
        title: 'Ready to work with us?',
        description: 'Discover how D2 Group can help your business automate customer communications and drive growth.',
        getStarted: 'Get Started',
        scheduleCall: 'Schedule a Call'
      }
    },

    // Pricing page
    pricing: {
      title: 'Simple, Transparent Pricing',
      subtitle: 'Choose the plan that fits your needs',
      freeTrial: '14-day free trial',
      noSetupFees: 'No setup fees',
      cancelAnytime: 'Cancel anytime',
      month: '/month',
      starter: 'Starter',
      growth: 'Growth',
      business: 'Business',
      enterprise: 'Enterprise',
      contactPricing: 'Contact for pricing',
      mostPopular: 'Most Popular',
      getStarted: 'Get Started',
      contactForPricing: 'Contact for Pricing',
      'starter.desc': 'For small businesses just getting started with AI chatbots',
      'growth.desc': 'For growing businesses that need more features',
      'business.desc': 'For larger businesses with high customization needs',
      'enterprise.desc': 'Fully customized solutions for large-scale enterprises'
    },

    // Features
    feature: {
      conversations: 'conversations',
      basicTemplates: 'Basic templates',
      websiteIntegration: 'Website integration',
      emailSupport: 'Email support',
      basicAnalytics: 'Basic analytics',
      workflows: 'workflows',
      standardResponse: 'Standard response time',
      advancedTemplates: 'Advanced templates',
      multiChannel: 'Multi-channel integration',
      crmIntegration: 'CRM integration',
      advancedAnalytics: 'Advanced analytics',
      unlimitedWorkflows: 'Unlimited workflows',
      prioritySupport: 'Priority support',
      abTesting: 'A/B testing',
      leadQualification: 'Lead qualification',
      customDesign: 'Custom design',
      customBranding: 'Custom branding',
      priorityResponse: 'Priority response time',
      unlimited: 'Unlimited',
      customAI: 'Custom AI',
      dedicatedManager: 'Dedicated manager',
      onPremise: 'On-premise deployment',
      security: 'Enterprise-grade security',
      customIntegrations: 'Custom integrations',
      phoneSupport: 'Phone support',
      slaGuarantees: 'SLA guarantees',
      whiteLabel: 'White label',
      advancedReporting: 'Advanced reporting'
    },

    // Features page
    features: {
      hero: {
        title: 'Powerful Features',
        subtitle: 'That Drive Results',
        description: 'Discover the comprehensive suite of AI-powered features designed to transform your customer communication and drive measurable business growth.',
        cta: 'See Features in Action'
      },
      core: {
        title: 'Core',
        subtitle: 'Capabilities',
        description: 'Everything you need to deliver exceptional customer experiences'
      },
      nlp: {
        title: 'Natural Language Processing',
        description: 'Advanced AI that understands context, intent, and sentiment',
        details: {
          accuracy: 'Multi-language support with 95%+ accuracy',
          contextual: 'Contextual conversation flow management',
          sentiment: 'Sentiment analysis and emotion detection',
          intent: 'Intent recognition and entity extraction'
        }
      },
      omnichannel: {
        title: 'Omnichannel Deployment',
        description: 'Deploy across website, WhatsApp, Facebook, and more',
        details: {
          website: 'Website chat widget with customizable UI',
          whatsapp: 'WhatsApp Business API integration',
          facebook: 'Facebook Messenger connectivity',
          sms: 'SMS and voice channel support'
        }
      },
      analytics: {
        title: 'Real-time Analytics',
        description: 'Comprehensive insights into customer interactions',
        details: {
          monitoring: 'Live conversation monitoring',
          metrics: 'Performance metrics and KPIs',
          satisfaction: 'Customer satisfaction scoring',
          roi: 'ROI and conversion tracking'
        }
      },
      security: {
        title: 'Enterprise Security',
        description: 'Bank-grade security and compliance standards',
        details: {
          encryption: 'End-to-end encryption',
          soc2: 'SOC 2 Type II compliant',
          gdpr: 'GDPR and data privacy compliance',
          sso: 'Single sign-on (SSO) integration'
        }
      },
      deployment: {
        title: 'Instant Deployment',
        description: 'Go live in minutes with our no-code platform',
        details: {
          setup: '5-minute setup process',
          templates: 'Pre-built templates and workflows',
          builder: 'Drag-and-drop conversation builder',
          integrations: 'One-click integrations'
        }
      },
      conversations: {
        title: 'Smart Conversations',
        description: 'Human-like interactions that convert and engage',
        details: {
          personalization: 'Dynamic personalization',
          qualification: 'Lead qualification automation',
          booking: 'Appointment booking and scheduling',
          recommendations: 'Product recommendations'
        }
      },
      vsTraditional: {
        title: 'AI Chatbots vs',
        subtitle: 'Traditional Live Chat',
        description: 'See how AI-powered automation outperforms traditional customer service methods'
      },
      comparison: {
        feature: 'Feature',
        traditionalLiveChat: 'Traditional Live Chat',
        aiChatbot: 'AI Chatbot',
        improvement: 'Improvement',
        responseTime: 'Response Time',
        hoursTodays: 'Hours to days',
        underTwoSec: '< 2 seconds',
        ninetyNineFaster: '99% faster',
        availability: 'Availability',
        businessHours: 'Business hours only',
        twentyFourSeven: '24/7/365',
        alwaysOn: 'Always on',
        scalability: 'Scalability',
        limitedByStaff: 'Limited by staff',
        unlimitedConversations: 'Unlimited conversations',
        infiniteScale: 'Infinite scale',
        consistency: 'Consistency',
        variesByAgent: 'Varies by agent',
        alwaysConsistent: 'Always consistent',
        hundredReliable: '100% reliable',
        costPerInteraction: 'Cost per Interaction',
        costReduction: '95% cost reduction',
        languageSupport: 'Language Support',
        oneToTwoLang: '1-2 languages',
        fiftyPlusLang: '50+ languages',
        globalReach: 'Global reach'
      },
      advancedCapabilities: {
        title: 'Advanced',
        subtitle: 'Capabilities',
        description: 'Explore the deep functionality that sets D2 Group apart'
      },
      advanced: {
        aiMl: 'AI & Machine Learning',
        flowBuilder: 'Conversation Flow Builder',
        flowBuilderDesc: 'Visual drag-and-drop interface to design complex conversation paths',
        intentTraining: 'Intent Training',
        intentTrainingDesc: 'Continuously improve AI understanding with custom training data',
        autoLearning: 'Auto-Learning',
        autoLearningDesc: 'Machine learning algorithms that improve responses over time',
        fallbackHandling: 'Fallback Handling',
        fallbackHandlingDesc: 'Smart escalation to human agents when needed',
        integrationApis: 'Integration & APIs',
        crmIntegration: 'CRM Integration',
        crmIntegrationDesc: 'Connect with Salesforce, HubSpot, Pipedrive, and 50+ CRMs',
        ecommerce: 'E-commerce Platforms',
        ecommerceDesc: 'Native integration with Shopify, WooCommerce, Magento',
        customApis: 'Custom APIs',
        customApisDesc: 'RESTful APIs for custom integrations and workflows',
        webhooks: 'Webhook Support',
        webhooksDesc: 'Real-time data synchronization with external systems',
        analyticsReporting: 'Analytics & Reporting',
        conversationAnalytics: 'Conversation Analytics',
        conversationAnalyticsDesc: 'Deep insights into customer behavior and conversation patterns',
        performanceMetrics: 'Performance Metrics',
        performanceMetricsDesc: 'Track resolution rate, satisfaction scores, and conversion metrics',
        customDashboards: 'Custom Dashboards',
        customDashboardsDesc: 'Build personalized reporting dashboards for stakeholders',
        abTesting: 'A/B Testing',
        abTestingDesc: 'Test different conversation flows and optimize performance'
      },
      demo: {
        title: 'See Our Features',
        subtitle: 'In Action',
        description: 'Experience the power of D2 Group\'s AI chatbot platform with a personalized demo tailored to your business needs.',
        interactiveDemo: 'Interactive Demo',
        clickToExperience: 'Click to experience our chatbot in action',
        realTime: 'Real-time conversation flow',
        multiLanguage: 'Multi-language support',
        analyticsDashboard: 'Analytics dashboard',
        bookDemo: 'Book Live Demo',
        viewCaseStudies: 'View Case Studies'
      }
    },

    // Case Studies page
    caseStudies: {
      hero: {
        title: 'Real',
        subtitle: 'Success Stories',
        description: 'Discover how businesses across industries have transformed their customer experience and achieved remarkable results with D2 Group\'s AI chatbot solutions.'
      },
      stats: {
        deployments: 'Successful Deployments',
        conversionIncrease: 'Average Conversion Increase',
        costReduction: 'Average Cost Reduction',
        customerSupport: 'Customer Support'
      },
      challenge: 'Challenge',
      solution: 'Solution',
      results: 'Results',
      metrics: {
        conversionRate: 'Conversion Rate',
        cartAbandonment: 'Cart Abandonment',
        responseTime: 'Response Time',
        customerSatisfaction: 'Customer Satisfaction',
        waitTimes: 'Wait Times',
        appointmentBookings: 'Appointment Bookings',
        staffEfficiency: 'Staff Efficiency',
        patientSatisfaction: 'Patient Satisfaction',
        leadQuality: 'Lead Quality',
        onboardingTime: 'Onboarding Time',
        processEfficiency: 'Process Efficiency',
        studentEngagement: 'Student Engagement',
        courseCompletion: 'Course Completion',
        supportQueries: 'Support Queries',
        studentSatisfaction: 'Student Satisfaction',
        qualifiedLeads: 'Qualified Leads',
        propertyViews: 'Property Views',
        salesCycle: 'Sales Cycle',
        agentProductivity: 'Agent Productivity',
        bookingAutomation: 'Booking Automation',
        staffWorkload: 'Staff Workload',
        bookingConversion: 'Booking Conversion',
        guestSatisfaction: 'Guest Satisfaction'
      },
      ecommerce: {
        title: 'E-commerce Giant Increases Conversions by 45%',
        industry: 'E-commerce',
        challenge: 'High cart abandonment rate and overwhelming customer inquiries during peak seasons',
        solution: 'Deployed AI chatbot for product recommendations, order tracking, and instant customer support',
        testimonial: 'The chatbot transformed our customer experience. We\'re seeing record-high conversion rates and our support team can focus on complex issues.'
      },
      healthcare: {
        title: 'Healthcare Provider Reduces Wait Times by 60%',
        industry: 'Healthcare',
        challenge: 'Long patient wait times for appointment booking and basic health inquiries',
        solution: 'Implemented appointment scheduling bot with symptom checker and health information system',
        testimonial: 'Our patients love the instant response for appointments and basic health questions. It\'s revolutionized our patient care workflow.'
      },
      finance: {
        title: 'Financial Services Improves Lead Quality by 80%',
        industry: 'Financial Services',
        challenge: 'Poor lead qualification process and time-consuming customer onboarding',
        solution: 'Deployed intelligent lead qualification bot with document processing and KYC automation',
        testimonial: 'The AI chatbot pre-qualifies leads so well that our sales team only speaks with serious prospects. Our conversion rates have never been higher.'
      },
      education: {
        title: 'Education Platform Boosts Student Engagement by 70%',
        industry: 'Education',
        challenge: 'Low student engagement and high drop-out rates in online courses',
        solution: 'Created AI tutor bot for 24/7 student support, course recommendations, and progress tracking',
        testimonial: 'Students have a personal AI tutor available 24/7. The improvement in engagement and completion rates has been remarkable.'
      },
      realEstate: {
        title: 'Real Estate Agency Generates 3x More Qualified Leads',
        industry: 'Real Estate',
        challenge: 'Difficulty qualifying serious buyers and managing high volume of property inquiries',
        solution: 'Implemented property search bot with virtual tours and buyer qualification system',
        testimonial: 'The chatbot pre-qualifies buyers and schedules viewings automatically. Our agents now spend time with serious buyers only.'
      },
      hospitality: {
        title: 'Hotel Chain Achieves 90% Booking Automation',
        industry: 'Hospitality',
        challenge: 'Manual booking process overwhelming staff during peak tourism seasons',
        solution: 'Deployed booking automation bot with room recommendations and guest service features',
        testimonial: 'Guests can book rooms, request services, and get recommendations instantly. Our occupancy rates have reached all-time highs.'
      },
      industries: {
        title: 'Industries We',
        subtitle: 'Serve',
        description: 'Proven success across diverse business sectors',
        ecommerce: 'E-commerce',
        healthcare: 'Healthcare',
        finance: 'Finance',
        education: 'Education',
        realEstate: 'Real Estate',
        hospitality: 'Hospitality',
        retail: 'Retail',
        automotive: 'Automotive',
        insurance: 'Insurance',
        manufacturing: 'Manufacturing',
        travel: 'Travel',
        logistics: 'Logistics'
      },
      cta: {
        title: 'Ready to Write Your',
        subtitle: 'Success Story',
        description: 'Join hundreds of successful businesses that have transformed their customer experience with D2 Group. Let\'s discuss how we can deliver similar results for your organization.',
        startStory: 'Start Your Success Story',
        viewPricing: 'View Pricing'
      }
    },

    // Contact page
    contact: {
      hero: {
        title: 'Get in',
        subtitle: 'Touch',
        description: 'Ready to transform your customer conversations? Let\'s discuss how D2 Group can help you achieve your automation goals. Our experts are standing by to provide personalized guidance.'
      },
      features: {
        consultation: {
          title: 'Free Consultation',
          description: 'Expert guidance tailored to your needs'
        },
        response: {
          title: '24-Hour Response',
          description: 'Quick turnaround on all inquiries'
        },
        implementation: {
          title: 'Fast Implementation',
          description: 'Go live in as little as 48 hours'
        }
      },
      form: {
        title: 'Let\'s Start the',
        subtitle: 'Conversation',
        description: 'Fill out the form below and our team will reach out to you within 24 hours.',
        fullName: 'Full Name',
        fullNamePlaceholder: 'John Smith',
        email: 'Email Address',
        emailPlaceholder: 'john@company.com',
        phone: 'Phone Number',
        phonePlaceholder: '+1 (555) 123-4567',
        company: 'Company Name',
        companyPlaceholder: 'Acme Corporation',
        interest: 'Area of Interest',
        interestPlaceholder: 'What can we help you with?',
        options: {
          demo: 'Schedule a Product Demo',
          pricing: 'Get Pricing Information',
          integration: 'Discuss Integration Options',
          enterprise: 'Enterprise Solutions',
          support: 'Technical Support',
          partnership: 'Partnership Opportunities',
          other: 'Other'
        },
        message: 'Message',
        messagePlaceholder: 'Tell us about your business needs, current challenges, or any specific questions you have...',
        sendMessage: 'Send Message',
        sending: 'Sending...',
        privacy: 'By submitting this form, you agree to our Privacy Policy and Terms of Service.',
        successTitle: 'Thank you for your inquiry!',
        successDescription: 'We\'ll get back to you within 24 hours. Check your email for confirmation.',
        errorTitle: 'Oops! Something went wrong',
        errorDescription: 'Unable to submit form. Please try again or contact us directly via email.'
      },
      info: {
        title: 'Contact',
        subtitle: 'Information',
        email: 'Email',
        phone: 'Phone',
        address: 'Address',
        addressDetail: 'Level 10, ABC Building\n123 Tech Street, District 1\nHo Chi Minh City, Vietnam',
        hours: 'Business Hours',
        hoursDetail: 'Monday - Friday: 9:00 AM - 6:00 PM (GMT+7)\nSaturday: 10:00 AM - 2:00 PM (GMT+7)\nEmergency support: 24/7'
      },
      map: {
        title: 'Find',
        subtitle: 'Us'
      },
      thanks: {
        title: 'Thank You for Your',
        subtitle: 'Interest',
        description: 'Your message has been received and our team will respond within 24 hours. In the meantime, feel free to connect with us on social media.'
      }
    },
  }
};

type Language = 'en' | 'vi';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'vi';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }

    return value;
  };

  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
