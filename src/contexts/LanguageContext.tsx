
import React, { createContext, useContext, useState } from "react";

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
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      features: "Features",
      caseStudies: "Case Studies",
      pricing: "Pricing",
      contact: "Contact",
      getDemo: "Get Demo",
      contactUs: "Contact Us"
    },

    // Home page
    home: {
      hero: {
        title: "Transform Your Customer Experience with",
        titleHighlight: "AI Chatbots",
        subtitle: "Automate customer conversations, boost sales, and provide 24/7 support with D2 Group's intelligent chatbot solutions.",
        cta: "Get Started Today",
        demo: "Watch Demo"
      },
      stats: {
        conversations: "Conversations Automated",
        satisfaction: "Customer Satisfaction",
        response: "Faster Response Time",
        cost: "Cost Reduction"
      },
      features: {
        title: "Why Choose",
        titleHighlight: "D2 Group",
        nlp: {
          title: "Advanced NLP",
          desc: "Understands context and intent for natural conversations"
        },
        multiChannel: {
          title: "Multi-Channel Support",
          desc: "Works across website, WhatsApp, Facebook, and more"
        },
        analytics: {
          title: "Real-time Analytics",
          desc: "Track performance and optimize conversations"
        },
        integration: {
          title: "Easy Integration",
          desc: "Connect with your existing CRM and tools"
        }
      },
      pricing: {
        title: "Simple",
        titleHighlight: "Pricing",
        subtitle: "Choose the plan that fits your business needs",
        starter: "Starter",
        growth: "Growth", 
        business: "Business",
        enterprise: "Enterprise",
        getStarted: "Get Started",
        contactSales: "Contact Sales"
      },
      cta: {
        title: "Ready to Transform Your",
        titleHighlight: "Customer Experience",
        description: "Join thousands of businesses that trust D2 Group for their customer automation needs.",
        startButton: "Start Free Trial",
        contactButton: "Talk to Sales"
      }
    },

    // About page
    about: {
      hero: {
        title: "About D2 Group",
        subtitle: "Pioneering the future of customer conversations with AI.",
        description: "We're a team of AI experts, engineers, and customer experience professionals dedicated to helping businesses automate and enhance their customer interactions."
      },
      stats: {
        clients: "Happy Clients",
        countries: "Countries Served",
        uptime: "System Uptime"
      },
      mission: {
        title: "Our Mission",
        description: "To democratize AI-powered customer service and make intelligent automation accessible to businesses of all sizes across Vietnam and Southeast Asia.",
        global: {
          title: "Global Reach",
          desc: "Serving clients across 12+ countries with localized solutions"
        },
        innovation: {
          title: "Continuous Innovation",
          desc: "Always at the forefront of AI and natural language processing"
        },
        security: {
          title: "Enterprise Security",
          desc: "Bank-level security with SOC 2 compliance and data protection"
        }
      },
      vision: {
        title: "Our Vision",
        description: "To be the leading AI conversation platform in Southeast Asia, empowering every business to deliver exceptional customer experiences."
      },
      team: {
        title: "Meet Our Team",
        subtitle: "The brilliant minds behind D2 Group's success"
      },
      journey: {
        title: "Our Journey",
        subtitle: "From startup to industry leader"
      },
      awards: {
        title: "Recognition & Awards",
        subtitle: "Honored by industry leaders and customers alike"
      },
      cta: {
        title: "Ready to Work With Us?",
        description: "Let's discuss how D2 Group can help transform your customer experience.",
        getStarted: "Get Started",
        scheduleCall: "Schedule a Call"
      }
    },

    // Features page
    features: {
      hero: {
        title: "Powerful Features for",
        titleHighlight: "Modern Businesses",
        titleEnd: "",
        description: "Discover how D2 Group's AI chatbot platform can revolutionize your customer interactions with cutting-edge features designed for the digital age.",
        cta: "Explore Features"
      },
      core: {
        title: "Core",
        titleHighlight: "Features",
        subtitle: "Everything you need to automate and enhance customer conversations",
        nlp: {
          title: "Advanced Natural Language Processing",
          desc: "Our AI understands context, sentiment, and intent to provide human-like conversations.",
          detail1: "Multi-language support including Vietnamese and English",
          detail2: "Context-aware responses that remember conversation history",
          detail3: "Sentiment analysis for better customer understanding",
          detail4: "Intent recognition with 95%+ accuracy"
        },
        multiChannel: {
          title: "Omni-Channel Deployment",
          desc: "Deploy your chatbot across all customer touchpoints seamlessly.",
          detail1: "Website widget with customizable design",
          detail2: "WhatsApp Business API integration",
          detail3: "Facebook Messenger connectivity",
          detail4: "Custom API for any platform"
        },
        realTime: {
          title: "Real-Time Analytics & Insights",
          desc: "Monitor performance and optimize conversations with detailed analytics.",
          detail1: "Live conversation monitoring dashboard",
          detail2: "Performance metrics and KPI tracking",
          detail3: "Customer satisfaction scoring",
          detail4: "Automated reporting and alerts"
        },
        security: {
          title: "Enterprise-Grade Security",
          desc: "Your data is protected with bank-level security and compliance.",
          detail1: "End-to-end encryption for all conversations",
          detail2: "SOC 2 Type II compliance",
          detail3: "GDPR and local data protection compliance",
          detail4: "Regular security audits and updates"
        },
        deployment: {
          title: "Rapid Deployment",
          desc: "Get up and running in minutes, not months.",
          detail1: "One-click integration with popular platforms",
          detail2: "Pre-built templates for common use cases",
          detail3: "No-code conversation builder",
          detail4: "24/7 deployment support"
        },
        conversations: {
          title: "Intelligent Conversations",
          desc: "Create natural, engaging conversations that convert.",
          detail1: "Dynamic conversation flows",
          detail2: "Personalization based on user data",
          detail3: "Smart fallback to human agents",
          detail4: "A/B testing for conversation optimization"
        }
      },
      comparison: {
        title: "AI Chatbots vs",
        titleHighlight: "Traditional Live Chat",
        subtitle: "See how AI-powered conversations outperform traditional methods",
        tableHeader: {
          feature: "Feature",
          traditional: "Traditional Live Chat",
          aiChatbot: "AI Chatbot",
          improvement: "Improvement"
        },
        responseTime: "Response Time",
        availability: "Availability", 
        scalability: "Scalability",
        consistency: "Consistency",
        costPerInteraction: "Cost per Interaction",
        languageSupport: "Language Support",
        traditional: {
          responseTime: "2-5 minutes",
          availability: "Business hours only",
          scalability: "Limited by staff",
          consistency: "Varies by agent",
          costPerInteraction: "$2-5 per chat",
          languageSupport: "Single language"
        },
        ai: {
          responseTime: "< 1 second",
          availability: "24/7/365",
          scalability: "Unlimited",
          consistency: "Always consistent",
          costPerInteraction: "$0.10 per chat",
          languageSupport: "Multi-language"
        },
        improvement: {
          responseTime: "500% faster",
          availability: "Always available",
          scalability: "Infinite scale",
          consistency: "100% consistent",
          costPerInteraction: "95% cost reduction",
          languageSupport: "Global reach"
        }
      },
      advanced: {
        title: "Advanced",
        titleHighlight: "Capabilities",
        subtitle: "Explore powerful features that set D2 Group apart from the competition",
        ai: {
          category: "AI & Machine Learning",
          conversationFlow: {
            name: "Dynamic Conversation Flows",
            desc: "Adaptive conversations that change based on user responses and behavior patterns"
          },
          intentTraining: {
            name: "Custom Intent Training",
            desc: "Train the AI to understand your specific business terminology and use cases"
          },
          autoLearning: {
            name: "Continuous Learning",
            desc: "AI improves over time by learning from successful conversations"
          },
          fallbackHandling: {
            name: "Smart Fallback Handling",
            desc: "Seamless transition to human agents when AI reaches its limits"
          }
        },
        integration: {
          category: "Integrations & APIs",
          crm: {
            name: "CRM Integration",
            desc: "Connect with Salesforce, HubSpot, and other popular CRM systems"
          },
          ecommerce: {
            name: "E-commerce Platforms",
            desc: "Native integrations with Shopify, WooCommerce, and Magento"
          },
          customApi: {
            name: "Custom API Access",
            desc: "RESTful APIs for custom integrations and data synchronization"
          },
          webhook: {
            name: "Webhook Support",
            desc: "Real-time data push to your systems for immediate action"
          }
        },
        analytics: {
          category: "Analytics & Reporting",
          conversation: {
            name: "Conversation Analytics",
            desc: "Deep insights into conversation patterns and user behavior"
          },
          performance: {
            name: "Performance Monitoring",
            desc: "Real-time monitoring of response times and success rates"
          },
          dashboard: {
            name: "Executive Dashboard",
            desc: "High-level metrics and KPIs for management reporting"
          },
          abTesting: {
            name: "A/B Testing Framework",
            desc: "Test different conversation approaches to optimize performance"
          }
        }
      },
      demo: {
        title: "See It in",
        titleHighlight: "Action",
        description: "Experience the power of D2 Group's AI chatbot with our interactive demo",
        interactive: {
          title: "Interactive Demo",
          description: "Try our chatbot right here and see how it can work for your business"
        },
        feature1: "Natural Language Understanding",
        feature2: "Multi-language Support",
        feature3: "Instant Responses",
        bookDemo: "Book a Demo",
        viewCaseStudies: "View Case Studies"
      }
    },

    // Case Studies
    caseStudies: {
      hero: {
        title: "Real",
        titleHighlight: "Success Stories",
        description: "Discover how businesses across industries have transformed their customer experience and achieved remarkable results with D2 Group's AI chatbot solutions."
      },
      stats: {
        deployments: "Successful Deployments",
        conversionIncrease: "Average Conversion Increase",
        costReduction: "Average Cost Reduction",
        support: "Customer Support"
      },
      labels: {
        challenge: "Challenge",
        solution: "Solution",
        results: "Results"
      },
      techmart: {
        title: "E-commerce Giant Increases Conversions by 45%",
        company: "TechMart Vietnam",
        industry: "E-commerce",
        challenge: "High cart abandonment rate and overwhelming customer inquiries during peak seasons",
        solution: "Deployed AI chatbot for product recommendations, order tracking, and instant customer support",
        testimonial: "The chatbot transformed our customer experience. We're seeing record-high conversion rates and our support team can focus on complex issues.",
        author: "Nguyễn Văn Minh, CEO TechMart Vietnam"
      },
      medcare: {
        title: "Healthcare Provider Reduces Wait Times by 60%",
        company: "MedCare Plus",
        industry: "Healthcare",
        challenge: "Long patient wait times for appointment booking and basic health inquiries",
        solution: "Implemented appointment scheduling bot with symptom checker and health information system",
        testimonial: "Our patients love the instant response for appointments and basic health questions. It's revolutionized our patient care workflow.",
        author: "Dr. Trần Thị Lan, Medical Director"
      },
      vietfinance: {
        title: "Financial Services Improves Lead Quality by 80%",
        company: "VietFinance Solutions",
        industry: "Financial Services",
        challenge: "Poor lead qualification process and time-consuming customer onboarding",
        solution: "Deployed intelligent lead qualification bot with document processing and KYC automation",
        testimonial: "The AI chatbot pre-qualifies leads so well that our sales team only speaks with serious prospects. Our conversion rates have never been higher.",
        author: "Lê Hoàng Nam, Sales Director"
      },
      edutech: {
        title: "Education Platform Boosts Student Engagement by 70%",
        company: "EduTech Academy",
        industry: "Education",
        challenge: "Low student engagement and high drop-out rates in online courses",
        solution: "Created AI tutor bot for 24/7 student support, course recommendations, and progress tracking",
        testimonial: "Students have a personal AI tutor available 24/7. The improvement in engagement and completion rates has been remarkable.",
        author: "Phạm Thị Mai, Academic Director"
      },
      propertypro: {
        title: "Real Estate Agency Generates 3x More Qualified Leads",
        company: "PropertyPro Vietnam",
        industry: "Real Estate",
        challenge: "Difficulty qualifying serious buyers and managing high volume of property inquiries",
        solution: "Implemented property search bot with virtual tours and buyer qualification system",
        testimonial: "The chatbot pre-qualifies buyers and schedules viewings automatically. Our agents now spend time with serious buyers only.",
        author: "Vũ Minh Tuấn, Managing Director"
      },
      luxury: {
        title: "Hotel Chain Achieves 90% Booking Automation",
        company: "Luxury Resorts Group",
        industry: "Hospitality",
        challenge: "Manual booking process overwhelming staff during peak tourism seasons",
        solution: "Deployed booking automation bot with room recommendations and guest service features",
        testimonial: "Guests can book rooms, request services, and get recommendations instantly. Our occupancy rates have reached all-time highs.",
        author: "Nguyễn Thị Hoa, Operations Manager"
      },
      metrics: {
        conversionRate: "Conversion Rate",
        cartAbandonment: "Cart Abandonment",
        responseTime: "Response Time",
        customerSatisfaction: "Customer Satisfaction",
        waitTimes: "Wait Times",
        appointmentBookings: "Appointment Bookings",
        staffEfficiency: "Staff Efficiency",
        patientSatisfaction: "Patient Satisfaction",
        leadQuality: "Lead Quality",
        onboardingTime: "Onboarding Time",
        processEfficiency: "Process Efficiency",
        studentEngagement: "Student Engagement",
        courseCompletion: "Course Completion",
        supportQueries: "Support Queries",
        studentSatisfaction: "Student Satisfaction",
        qualifiedLeads: "Qualified Leads",
        propertyViews: "Property Views",
        salesCycle: "Sales Cycle",
        agentProductivity: "Agent Productivity",
        bookingAutomation: "Booking Automation",
        staffWorkload: "Staff Workload",
        bookingConversion: "Booking Conversion",
        guestSatisfaction: "Guest Satisfaction"
      },
      industries: {
        title: "Industries We",
        titleHighlight: "Serve",
        subtitle: "Proven success across diverse business sectors",
        ecommerce: "E-commerce",
        healthcare: "Healthcare",
        finance: "Finance",
        education: "Education",
        realEstate: "Real Estate",
        hospitality: "Hospitality",
        retail: "Retail",
        automotive: "Automotive",
        insurance: "Insurance",
        manufacturing: "Manufacturing",
        travel: "Travel",
        logistics: "Logistics",
        metrics: {
          ecommerce: "+45% Sales",
          healthcare: "-60% Wait Time",
          finance: "+80% Lead Quality",
          education: "+70% Engagement",
          realEstate: "+300% Leads",
          hospitality: "90% Automation",
          retail: "+35% Conversion",
          automotive: "+50% Efficiency",
          insurance: "+25% Claims",
          manufacturing: "+40% Support",
          travel: "+55% Bookings",
          logistics: "+30% Tracking"
        }
      },
      cta: {
        title: "Ready to Write Your",
        titleHighlight: "Success Story",
        description: "Join hundreds of successful businesses that have transformed their customer experience with D2 Group. Let's discuss how we can deliver similar results for your organization.",
        startButton: "Start Your Success Story",
        pricingButton: "View Pricing"
      }
    },

    // Pricing
    pricing: {
      title: "Simple Transparent Pricing",
      subtitle: "Choose the perfect plan for your business needs. All plans include our core AI chatbot features with varying limits and support levels.",
      month: "/month",
      freeTrial: "14-day free trial",
      noSetupFees: "No setup fees", 
      cancelAnytime: "Cancel anytime",
      mostPopular: "Most Popular",
      contactPricing: "Contact",
      contactForPricing: "Contact for Pricing",
      getStarted: "Get Started",
      starter: "Starter",
      growth: "Growth",
      business: "Business",
      enterprise: "Enterprise"
    },

    // Contact & Other
    notFound: {
      title: "Page Not Found",
      description: "The page you're looking for doesn't exist or has been moved.",
      backHome: "Back to Home",
      contactSupport: "Contact Support",
      errorCode: "Error code:"
    },

    // Features
    feature: {
      conversations: "conversations",
      basicTemplates: "Basic templates",
      websiteIntegration: "Website integration",
      emailSupport: "Email support",
      basicAnalytics: "Basic analytics",
      workflows: "workflows",
      standardResponse: "Standard response time",
      advancedTemplates: "Advanced templates",
      multiChannel: "Multi-channel support",
      crmIntegration: "CRM integration",
      advancedAnalytics: "Advanced analytics",
      unlimitedWorkflows: "Unlimited workflows",
      prioritySupport: "Priority support",
      abTesting: "A/B testing",
      leadQualification: "Lead qualification",
      customDesign: "Custom design",
      customBranding: "Custom branding",
      priorityResponse: "Priority response time",
      unlimited: "Unlimited",
      customAI: "Custom AI training",
      dedicatedManager: "Dedicated account manager",
      onPremise: "On-premise deployment",
      security: "Advanced security",
      customIntegrations: "Custom integrations",
      phoneSupport: "Phone support",
      slaGuarantees: "SLA guarantees",
      whiteLabel: "White-label solution",
      advancedReporting: "Advanced reporting"
    }
  },
  vi: {
    // Navigation
    nav: {
      home: "Trang Chủ",
      about: "Về Chúng Tôi",
      features: "Tính Năng",
      caseStudies: "Nghiên Cứu Trường Hợp",
      pricing: "Bảng Giá",
      contact: "Liên Hệ",
      getDemo: "Xem Demo",
      contactUs: "Liên Hệ Ngay"
    },

    // Home page
    home: {
      hero: {
        title: "Chuyển Đổi Trải Nghiệm Khách Hàng Với",
        titleHighlight: "AI Chatbot",
        subtitle: "Tự động hóa cuộc trò chuyện, tăng doanh số và cung cấp hỗ trợ 24/7 với giải pháp chatbot thông minh của D2 Group.",
        cta: "Bắt Đầu Ngay",
        demo: "Xem Demo"
      },
      stats: {
        conversations: "Cuộc Trò Chuyện Tự Động",
        satisfaction: "Hài Lòng Khách Hàng",
        response: "Thời Gian Phản Hồi Nhanh Hơn",
        cost: "Giảm Chi Phí"
      },
      features: {
        title: "Tại Sao Chọn",
        titleHighlight: "D2 Group",
        nlp: {
          title: "NLP Tiên Tiến",
          desc: "Hiểu ngữ cảnh và ý định cho cuộc trò chuyện tự nhiên"
        },
        multiChannel: {
          title: "Hỗ Trợ Đa Kênh",
          desc: "Hoạt động trên website, WhatsApp, Facebook và nhiều hơn nữa"
        },
        analytics: {
          title: "Phân Tích Thời Gian Thực",
          desc: "Theo dõi hiệu suất và tối ưu hóa cuộc trò chuyện"
        },
        integration: {
          title: "Tích Hợp Dễ Dàng",
          desc: "Kết nối với CRM và công cụ hiện có của bạn"
        }
      },
      pricing: {
        title: "Bảng Giá",
        titleHighlight: "Đơn Giản",
        subtitle: "Chọn gói phù hợp với nhu cầu doanh nghiệp của bạn",
        starter: "Khởi Đầu",
        growth: "Phát Triển",
        business: "Doanh Nghiệp", 
        enterprise: "Tập Đoàn",
        getStarted: "Bắt Đầu",
        contactSales: "Liên Hệ Bán Hàng"
      },
      cta: {
        title: "Sẵn Sàng Chuyển Đổi",
        titleHighlight: "Trải Nghiệm Khách Hàng",
        description: "Tham gia cùng hàng nghìn doanh nghiệp tin tưởng D2 Group cho nhu cầu tự động hóa khách hàng.",
        startButton: "Dùng Thử Miễn Phí",
        contactButton: "Tư Vấn Bán Hàng"
      }
    },

    // About page
    about: {
      hero: {
        title: "Về D2 Group",
        subtitle: "Tiên phong tương lai cuộc trò chuyện khách hàng với AI.",
        description: "Chúng tôi là đội ngũ chuyên gia AI, kỹ sư và chuyên gia trải nghiệm khách hàng tận tâm giúp doanh nghiệp tự động hóa và nâng cao tương tác khách hàng."
      },
      stats: {
        clients: "Khách Hàng Hài Lòng",
        countries: "Quốc Gia Phục Vụ",
        uptime: "Thời Gian Hoạt Động"
      },
      mission: {
        title: "Sứ Mệnh",
        description: "Dân chủ hóa dịch vụ khách hàng được hỗ trợ bởi AI và làm cho tự động hóa thông minh có thể tiếp cận được với các doanh nghiệp thuộc mọi quy mô tại Việt Nam và Đông Nam Á.",
        global: {
          title: "Tầm Với Toàn Cầu",
          desc: "Phục vụ khách hàng tại hơn 12 quốc gia với giải pháp bản địa hóa"
        },
        innovation: {
          title: "Đổi Mới Liên Tục",
          desc: "Luôn đi đầu trong AI và xử lý ngôn ngữ tự nhiên"
        },
        security: {
          title: "Bảo Mật Doanh Nghiệp",
          desc: "Bảo mật cấp ngân hàng với tuân thủ SOC 2 và bảo vệ dữ liệu"
        }
      },
      vision: {
        title: "Tầm Nhìn",
        description: "Trở thành nền tảng cuộc trò chuyện AI hàng đầu tại Đông Nam Á, trao quyền cho mọi doanh nghiệp mang lại trải nghiệm khách hàng đặc biệt."
      },
      team: {
        title: "Gặp Gỡ Đội Ngũ",
        subtitle: "Những bộ óc lỗi lạc đằng sau thành công của D2 Group"
      },
      journey: {
        title: "Hành Trình Của Chúng Tôi",
        subtitle: "Từ startup đến nhà lãnh đạo ngành"
      },
      awards: {
        title: "Ghi Nhận & Giải Thưởng",
        subtitle: "Được tôn vinh bởi các nhà lãnh đạo ngành và khách hàng"
      },
      cta: {
        title: "Sẵn Sàng Làm Việc Với Chúng Tôi?",
        description: "Hãy thảo luận về cách D2 Group có thể giúp chuyển đổi trải nghiệm khách hàng của bạn.",
        getStarted: "Bắt Đầu",
        scheduleCall: "Đặt Lịch Gọi"
      }
    },

    // Features page
    features: {
      hero: {
        title: "Tính Năng Mạnh Mẽ Cho",
        titleHighlight: "Doanh Nghiệp Hiện Đại",
        titleEnd: "",
        description: "Khám phá cách nền tảng chatbot AI của D2 Group có thể cách mạng hóa tương tác khách hàng với các tính năng tiên tiến được thiết kế cho thời đại số.",
        cta: "Khám Phá Tính Năng"
      },
      core: {
        title: "Tính Năng",
        titleHighlight: "Cốt Lõi",
        subtitle: "Mọi thứ bạn cần để tự động hóa và nâng cao cuộc trò chuyện khách hàng",
        nlp: {
          title: "Xử Lý Ngôn Ngữ Tự Nhiên Tiên Tiến",
          desc: "AI của chúng tôi hiểu ngữ cảnh, cảm xúc và ý định để cung cấp cuộc trò chuyện giống con người.",
          detail1: "Hỗ trợ đa ngôn ngữ bao gồm tiếng Việt và tiếng Anh",
          detail2: "Phản hồi nhận thức ngữ cảnh ghi nhớ lịch sử cuộc trò chuyện",
          detail3: "Phân tích cảm xúc để hiểu khách hàng tốt hơn",
          detail4: "Nhận dạng ý định với độ chính xác 95%+"
        },
        multiChannel: {
          title: "Triển Khai Đa Kênh",
          desc: "Triển khai chatbot của bạn trên tất cả điểm tiếp xúc khách hàng một cách liền mạch.",
          detail1: "Widget website với thiết kế có thể tùy chỉnh",
          detail2: "Tích hợp API WhatsApp Business",
          detail3: "Kết nối Facebook Messenger",
          detail4: "API tùy chỉnh cho bất kỳ nền tảng nào"
        },
        realTime: {
          title: "Phân Tích & Thông Tin Thời Gian Thực",
          desc: "Giám sát hiệu suất và tối ưu hóa cuộc trò chuyện với phân tích chi tiết.",
          detail1: "Bảng điều khiển giám sát cuộc trò chuyện trực tiếp",
          detail2: "Số liệu hiệu suất và theo dõi KPI",
          detail3: "Chấm điểm hài lòng khách hàng",
          detail4: "Báo cáo tự động và cảnh báo"
        },
        security: {
          title: "Bảo Mật Cấp Doanh Nghiệp",
          desc: "Dữ liệu của bạn được bảo vệ với bảo mật cấp ngân hàng và tuân thủ.",
          detail1: "Mã hóa đầu cuối cho tất cả cuộc trò chuyện",
          detail2: "Tuân thủ SOC 2 Type II",
          detail3: "Tuân thủ GDPR và bảo vệ dữ liệu địa phương",
          detail4: "Kiểm tra bảo mật thường xuyên và cập nhật"
        },
        deployment: {
          title: "Triển Khai Nhanh Chóng",
          desc: "Hoạt động trong vài phút, không phải vài tháng.",
          detail1: "Tích hợp một cú nhấp chuột với các nền tảng phổ biến",
          detail2: "Mẫu được xây dựng sẵn cho các trường hợp sử dụng phổ biến",
          detail3: "Trình tạo cuộc trò chuyện không cần mã",
          detail4: "Hỗ trợ triển khai 24/7"
        },
        conversations: {
          title: "Cuộc Trò Chuyện Thông Minh",
          desc: "Tạo cuộc trò chuyện tự nhiên, hấp dẫn để chuyển đổi.",
          detail1: "Luồng cuộc trò chuyện động",
          detail2: "Cá nhân hóa dựa trên dữ liệu người dùng",
          detail3: "Chuyển giao thông minh cho đại lý con người",
          detail4: "Kiểm tra A/B để tối ưu hóa cuộc trò chuyện"
        }
      },
      comparison: {
        title: "AI Chatbot vs",
        titleHighlight: "Live Chat Truyền Thống",
        subtitle: "Xem cách cuộc trò chuyện được hỗ trợ bởi AI vượt trội hơn các phương pháp truyền thống",
        tableHeader: {
          feature: "Tính Năng",
          traditional: "Live Chat Truyền Thống",
          aiChatbot: "AI Chatbot",
          improvement: "Cải Thiện"
        },
        responseTime: "Thời Gian Phản Hồi",
        availability: "Tính Sẵn Sàng",
        scalability: "Khả Năng Mở Rộng",
        consistency: "Tính Nhất Quán",
        costPerInteraction: "Chi Phí Mỗi Tương Tác",
        languageSupport: "Hỗ Trợ Ngôn Ngữ",
        traditional: {
          responseTime: "2-5 phút",
          availability: "Chỉ giờ làm việc",
          scalability: "Giới hạn bởi nhân viên",
          consistency: "Thay đổi theo đại lý",
          costPerInteraction: "50.000-120.000đ mỗi chat",
          languageSupport: "Ngôn ngữ đơn"
        },
        ai: {
          responseTime: "< 1 giây",
          availability: "24/7/365",
          scalability: "Không giới hạn",
          consistency: "Luôn nhất quán",
          costPerInteraction: "2.000đ mỗi chat",
          languageSupport: "Đa ngôn ngữ"
        },
        improvement: {
          responseTime: "Nhanh hơn 500%",
          availability: "Luôn sẵn sàng",
          scalability: "Mở rộng vô hạn",
          consistency: "100% nhất quán",
          costPerInteraction: "Giảm 95% chi phí",
          languageSupport: "Tầm với toàn cầu"
        }
      },
      advanced: {
        title: "Khả Năng",
        titleHighlight: "Nâng Cao",
        subtitle: "Khám phá các tính năng mạnh mẽ giúp D2 Group khác biệt so với đối thủ cạnh tranh",
        ai: {
          category: "AI & Machine Learning",
          conversationFlow: {
            name: "Luồng Cuộc Trò Chuyện Động",
            desc: "Cuộc trò chuyện thích ứng thay đổi dựa trên phản hồi và mẫu hành vi của người dùng"
          },
          intentTraining: {
            name: "Đào Tạo Ý Định Tùy Chỉnh",
            desc: "Đào tạo AI hiểu thuật ngữ kinh doanh cụ thể và trường hợp sử dụng của bạn"
          },
          autoLearning: {
            name: "Học Liên Tục",
            desc: "AI cải thiện theo thời gian bằng cách học từ các cuộc trò chuyện thành công"
          },
          fallbackHandling: {
            name: "Xử Lý Fallback Thông Minh",
            desc: "Chuyển tiếp liền mạch cho đại lý con người khi AI đạt giới hạn"
          }
        },
        integration: {
          category: "Tích Hợp & API",
          crm: {
            name: "Tích Hợp CRM",
            desc: "Kết nối với Salesforce, HubSpot và các hệ thống CRM phổ biến khác"
          },
          ecommerce: {
            name: "Nền Tảng Thương Mại Điện Tử",
            desc: "Tích hợp gốc với Shopify, WooCommerce và Magento"
          },
          customApi: {
            name: "Truy Cập API Tùy Chỉnh",
            desc: "API RESTful cho tích hợp tùy chỉnh và đồng bộ hóa dữ liệu"
          },
          webhook: {
            name: "Hỗ Trợ Webhook",
            desc: "Đẩy dữ liệu thời gian thực cho hệ thống của bạn để hành động ngay lập tức"
          }
        },
        analytics: {
          category: "Phân Tích & Báo Cáo",
          conversation: {
            name: "Phân Tích Cuộc Trò Chuyện",
            desc: "Thông tin sâu sắc về mẫu cuộc trò chuyện và hành vi người dùng"
          },
          performance: {
            name: "Giám Sát Hiệu Suất",
            desc: "Giám sát thời gian thực về thời gian phản hồi và tỷ lệ thành công"
          },
          dashboard: {
            name: "Bảng Điều Khiển Điều Hành",
            desc: "Số liệu cấp cao và KPI cho báo cáo quản lý"
          },
          abTesting: {
            name: "Khung Kiểm Tra A/B",
            desc: "Kiểm tra các cách tiếp cận cuộc trò chuyện khác nhau để tối ưu hóa hiệu suất"
          }
        }
      },
      demo: {
        title: "Xem Nó Trong",
        titleHighlight: "Hành Động",
        description: "Trải nghiệm sức mạnh của chatbot AI D2 Group với demo tương tác của chúng tôi",
        interactive: {
          title: "Demo Tương Tác",
          description: "Thử chatbot của chúng tôi ngay tại đây và xem nó có thể hoạt động như thế nào cho doanh nghiệp của bạn"
        },
        feature1: "Hiểu Ngôn Ngữ Tự Nhiên",
        feature2: "Hỗ Trợ Đa Ngôn Ngữ",
        feature3: "Phản Hồi Tức Thì",
        bookDemo: "Đặt Demo",
        viewCaseStudies: "Xem Nghiên Cứu Trường Hợp"
      }
    },

    // Case Studies
    caseStudies: {
      hero: {
        title: "Câu Chuyện",
        titleHighlight: "Thành Công",
        description: "Khám phá cách các doanh nghiệp trong nhiều ngành đã chuyển đổi trải nghiệm khách hàng và đạt được kết quả đáng kể với giải pháp chatbot AI của D2 Group."
      },
      stats: {
        deployments: "Triển Khai Thành Công",
        conversionIncrease: "Tăng Chuyển Đổi Trung Bình",
        costReduction: "Giảm Chi Phí Trung Bình",
        support: "Hỗ Trợ Khách Hàng"
      },
      labels: {
        challenge: "Thách Thức",
        solution: "Giải Pháp",
        results: "Kết Quả"
      },
      techmart: {
        title: "Đại Gia Thương Mại Điện Tử Tăng Chuyển Đổi 45%",
        company: "TechMart Vietnam",
        industry: "Thương Mại Điện Tử",
        challenge: "Tỷ lệ bỏ giỏ hàng cao và quá tải câu hỏi khách hàng trong mùa cao điểm",
        solution: "Triển khai chatbot AI cho gợi ý sản phẩm, theo dõi đơn hàng và hỗ trợ khách hàng tức thì",
        testimonial: "Chatbot đã biến đổi trải nghiệm khách hàng của chúng tôi. Chúng tôi đang thấy tỷ lệ chuyển đổi kỷ lục và đội hỗ trợ có thể tập trung vào các vấn đề phức tạp.",
        author: "Nguyễn Văn Minh, CEO TechMart Vietnam"
      },
      medcare: {
        title: "Nhà Cung Cấp Y Tế Giảm Thời Gian Chờ 60%",
        company: "MedCare Plus",
        industry: "Y Tế",
        challenge: "Thời gian chờ lâu của bệnh nhân để đặt lịch khám và các câu hỏi y tế cơ bản",
        solution: "Triển khai bot đặt lịch khám với công cụ kiểm tra triệu chứng và hệ thống thông tin sức khỏe",
        testimonial: "Bệnh nhân của chúng tôi thích phản hồi tức thì cho việc đặt lịch và câu hỏi sức khỏe cơ bản. Nó đã cách mạng hóa quy trình chăm sóc bệnh nhân của chúng tôi.",
        author: "BS. Trần Thị Lan, Giám Đốc Y Khoa"
      },
      vietfinance: {
        title: "Dịch Vụ Tài Chính Cải Thiện Chất Lượng Khách Hàng Tiềm Năng 80%",
        company: "VietFinance Solutions",
        industry: "Dịch Vụ Tài Chính",
        challenge: "Quy trình đánh giá khách hàng tiềm năng kém và quy trình onboarding khách hàng tốn thời gian",
        solution: "Triển khai bot đánh giá khách hàng tiềm năng thông minh với xử lý tài liệu và tự động hóa KYC",
        testimonial: "Chatbot AI đánh giá trước khách hàng tiềm năng rất tốt đến mức đội bán hàng chỉ nói chuyện với khách hàng nghiêm túc. Tỷ lệ chuyển đổi của chúng tôi chưa bao giờ cao đến thế.",
        author: "Lê Hoàng Nam, Giám Đốc Bán Hàng"
      },
      edutech: {
        title: "Nền Tảng Giáo Dục Tăng Sự Tham Gia Của Học Sinh 70%",
        company: "EduTech Academy",
        industry: "Giáo Dục",
        challenge: "Sự tham gia thấp của học sinh và tỷ lệ bỏ học cao trong các khóa học trực tuyến",
        solution: "Tạo bot gia sư AI cho hỗ trợ học sinh 24/7, gợi ý khóa học và theo dõi tiến độ",
        testimonial: "Học sinh có gia sư AI cá nhân có sẵn 24/7. Sự cải thiện trong tham gia và tỷ lệ hoàn thành thật đáng chú ý.",
        author: "Phạm Thị Mai, Giám Đốc Học Thuật"
      },
      propertypro: {
        title: "Công Ty Bất Động Sản Tạo Ra Gấp 3 Lần Khách Hàng Tiềm Năng Chất Lượng",
        company: "PropertyPro Vietnam",
        industry: "Bất Động Sản",
        challenge: "Khó khăn trong việc đánh giá người mua nghiêm túc và quản lý khối lượng lớn câu hỏi về bất động sản",
        solution: "Triển khai bot tìm kiếm bất động sản với tour ảo và hệ thống đánh giá người mua",
        testimonial: "Chatbot đánh giá trước người mua và tự động lên lịch xem nhà. Các agent của chúng tôi giờ chỉ dành thời gian với người mua nghiêm túc.",
        author: "Vũ Minh Tuấn, Giám Đốc Điều Hành"
      },
      luxury: {
        title: "Chuỗi Khách Sạn Đạt 90% Tự Động Hóa Đặt Phòng",
        company: "Luxury Resorts Group",
        industry: "Dịch Vụ Khách Sạn",
        challenge: "Quy trình đặt phòng thủ công làm quá tải nhân viên trong mùa du lịch cao điểm",
        solution: "Triển khai bot tự động đặt phòng với gợi ý phòng và tính năng dịch vụ khách",
        testimonial: "Khách có thể đặt phòng, yêu cầu dịch vụ và nhận gợi ý ngay lập tức. Tỷ lệ lấp đầy của chúng tôi đã đạt mức cao nhất mọi thời đại.",
        author: "Nguyễn Thị Hoa, Quản Lý Vận Hành"
      },
      metrics: {
        conversionRate: "Tỷ Lệ Chuyển Đổi",
        cartAbandonment: "Bỏ Giỏ Hàng",
        responseTime: "Thời Gian Phản Hồi",
        customerSatisfaction: "Hài Lòng Khách Hàng",
        waitTimes: "Thời Gian Chờ",
        appointmentBookings: "Đặt Lịch Khám",
        staffEfficiency: "Hiệu Quả Nhân Viên",
        patientSatisfaction: "Hài Lòng Bệnh Nhân",
        leadQuality: "Chất Lượng Khách Hàng Tiềm Năng",
        onboardingTime: "Thời Gian Onboarding",
        processEfficiency: "Hiệu Quả Quy Trình",
        studentEngagement: "Tham Gia Học Sinh",
        courseCompletion: "Hoàn Thành Khóa Học",
        supportQueries: "Câu Hỏi Hỗ Trợ",
        studentSatisfaction: "Hài Lòng Học Sinh",
        qualifiedLeads: "Khách Hàng Tiềm Năng Chất Lượng",
        propertyViews: "Lượt Xem Bất Động Sản",
        salesCycle: "Chu Kỳ Bán Hàng",
        agentProductivity: "Năng Suất Agent",
        bookingAutomation: "Tự Động Đặt Phòng",
        staffWorkload: "Khối Lượng Công Việc Nhân Viên",
        bookingConversion: "Chuyển Đổi Đặt Phòng",
        guestSatisfaction: "Hài Lòng Khách"
      },
      industries: {
        title: "Các Ngành",
        titleHighlight: "Chúng Tôi Phục Vụ",
        subtitle: "Thành công đã được chứng minh trong nhiều lĩnh vực kinh doanh đa dạng",
        ecommerce: "Thương Mại Điện Tử",
        healthcare: "Y Tế",
        finance: "Tài Chính",
        education: "Giáo Dục",
        realEstate: "Bất Động Sản",
        hospitality: "Khách Sạn",
        retail: "Bán Lẻ",
        automotive: "Ô Tô",
        insurance: "Bảo Hiểm",
        manufacturing: "Sản Xuất",
        travel: "Du Lịch",
        logistics: "Logistics",
        metrics: {
          ecommerce: "+45% Doanh Số",
          healthcare: "-60% Thời Gian Chờ",
          finance: "+80% Chất Lượng Lead",
          education: "+70% Tham Gia",
          realEstate: "+300% Leads",
          hospitality: "90% Tự Động",
          retail: "+35% Chuyển Đổi",
          automotive: "+50% Hiệu Quả",
          insurance: "+25% Claims",
          manufacturing: "+40% Hỗ Trợ",
          travel: "+55% Đặt Chỗ",
          logistics: "+30% Theo Dõi"
        }
      },
      cta: {
        title: "Sẵn Sàng Viết",
        titleHighlight: "Câu Chuyện Thành Công",
        description: "Tham gia cùng hàng trăm doanh nghiệp thành công đã chuyển đổi trải nghiệm khách hàng với D2 Group. Hãy thảo luận về cách chúng tôi có thể mang lại kết quả tương tự cho tổ chức của bạn.",
        startButton: "Bắt Đầu Câu Chuyện Thành Công",
        pricingButton: "Xem Bảng Giá"
      }
    },

    // Pricing
    pricing: {
      title: "Bảng Giá Đơn Giản Minh Bạch",
      subtitle: "Chọn gói hoàn hảo cho nhu cầu doanh nghiệp của bạn. Tất cả các gói đều bao gồm các tính năng cốt lõi của chatbot AI với các giới hạn và mức hỗ trợ khác nhau.",
      month: "/tháng",
      freeTrial: "Dùng thử miễn phí 14 ngày",
      noSetupFees: "Không phí thiết lập",
      cancelAnytime: "Hủy bất cứ lúc nào",
      mostPopular: "Phổ Biến Nhất",
      contactPricing: "Liên lạc",
      contactForPricing: "Liên Hệ Báo Giá",
      getStarted: "Bắt Đầu",
      starter: "Khởi Đầu",
      growth: "Phát Triển",
      business: "Doanh Nghiệp",
      enterprise: "Tập Đoàn"
    },

    // Contact & Other
    notFound: {
      title: "Không Tìm Thấy Trang",
      description: "Trang bạn đang tìm không tồn tại hoặc đã bị di chuyển.",
      backHome: "Về Trang Chủ",
      contactSupport: "Liên Hệ Hỗ Trợ",
      errorCode: "Mã lỗi:"
    },

    // Features
    feature: {
      conversations: "cuộc trò chuyện",
      basicTemplates: "Mẫu cơ bản",
      websiteIntegration: "Tích hợp website",
      emailSupport: "Hỗ trợ email",
      basicAnalytics: "Phân tích cơ bản",
      workflows: "quy trình",
      standardResponse: "Thời gian phản hồi tiêu chuẩn",
      advancedTemplates: "Mẫu nâng cao",
      multiChannel: "Hỗ trợ đa kênh",
      crmIntegration: "Tích hợp CRM",
      advancedAnalytics: "Phân tích nâng cao",
      unlimitedWorkflows: "Quy trình không giới hạn",
      prioritySupport: "Hỗ trợ ưu tiên",
      abTesting: "Kiểm tra A/B",
      leadQualification: "Đánh giá khách hàng tiềm năng",
      customDesign: "Thiết kế tùy chỉnh",
      customBranding: "Thương hiệu tùy chỉnh",
      priorityResponse: "Thời gian phản hồi ưu tiên",
      unlimited: "Không giới hạn",
      customAI: "Đào tạo AI tùy chỉnh",
      dedicatedManager: "Quản lý tài khoản chuyên dụng",
      onPremise: "Triển khai tại chỗ",
      security: "Bảo mật nâng cao",
      customIntegrations: "Tích hợp tùy chỉnh",
      phoneSupport: "Hỗ trợ điện thoại",
      slaGuarantees: "Đảm bảo SLA",
      whiteLabel: "Giải pháp nhãn trắng",
      advancedReporting: "Báo cáo nâng cao"
    }
  }
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState('vi');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language as keyof typeof translations];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
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
