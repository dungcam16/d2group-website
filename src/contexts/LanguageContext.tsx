import React, { createContext, useContext, useState, ReactNode } from "react";

interface LanguageContextProps {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key,
});

const translations = {
  en: {
    navigation: {
      home: "Home",
      about: "About",
      features: "Features",
      caseStudies: "Case Studies",
      pricing: "Pricing",
      contact: "Contact",
      language: "Language",
    },

    // Features page translations
    features: {
      hero: {
        title1: "Powerful",
        title2: "Features",
        title3: "That Drive Results",
        subtitle: "Discover the comprehensive suite of AI-powered features designed to transform your customer communication and drive measurable business growth.",
        cta: "See Features in Action"
      },
      core: {
        title1: "Core",
        title2: "Capabilities",
        subtitle: "Everything you need to deliver exceptional customer experiences"
      },
      nlp: {
        title: "Natural Language Processing",
        description: "Advanced AI that understands context, intent, and sentiment",
        detail1: "Multi-language support with 95%+ accuracy",
        detail2: "Contextual conversation flow management",
        detail3: "Sentiment analysis and emotion detection",
        detail4: "Intent recognition and entity extraction"
      },
      omnichannel: {
        title: "Omnichannel Deployment",
        description: "Deploy across website, WhatsApp, Facebook, and more",
        detail1: "Website chat widget with customizable UI",
        detail2: "WhatsApp Business API integration",
        detail3: "Facebook Messenger connectivity",
        detail4: "SMS and voice channel support"
      },
      analytics: {
        title: "Real-time Analytics",
        description: "Comprehensive insights into customer interactions",
        detail1: "Live conversation monitoring",
        detail2: "Performance metrics and KPIs",
        detail3: "Customer satisfaction scoring",
        detail4: "ROI and conversion tracking"
      },
      security: {
        title: "Enterprise Security",
        description: "Bank-grade security and compliance standards",
        detail1: "End-to-end encryption",
        detail2: "SOC 2 Type II compliant",
        detail3: "GDPR and data privacy compliance",
        detail4: "Single sign-on (SSO) integration"
      },
      deployment: {
        title: "Instant Deployment",
        description: "Go live in minutes with our no-code platform",
        detail1: "5-minute setup process",
        detail2: "Pre-built templates and workflows",
        detail3: "Drag-and-drop conversation builder",
        detail4: "One-click integrations"
      },
      conversations: {
        title: "Smart Conversations",
        description: "Human-like interactions that convert and engage",
        detail1: "Dynamic personalization",
        detail2: "Lead qualification automation",
        detail3: "Appointment booking and scheduling",
        detail4: "Product recommendations"
      },
      comparison: {
        title1: "AI Chatbots vs",
        title2: "Traditional Live Chat",
        subtitle: "See how AI-powered automation outperforms traditional customer service methods",
        table: {
          feature: "Feature",
          traditional: "Traditional Live Chat",
          ai: "AI Chatbot",
          improvement: "Improvement"
        },
        responseTime: "Response Time",
        availability: "Availability",
        scalability: "Scalability",
        consistency: "Consistency",
        cost: "Cost per Interaction",
        language: "Language Support",
        responseTime: {
          traditional: "Hours to days",
          ai: "< 2 seconds",
          improvement: "99% faster"
        },
        availability: {
          traditional: "Business hours only",
          ai: "24/7/365",
          improvement: "Always on"
        },
        scalability: {
          traditional: "Limited by staff",
          ai: "Unlimited conversations",
          improvement: "Infinite scale"
        },
        consistency: {
          traditional: "Varies by agent",
          ai: "Always consistent",
          improvement: "100% reliable"
        },
        cost: {
          traditional: "$5-15",
          ai: "$0.10-0.50",
          improvement: "95% cost reduction"
        },
        language: {
          traditional: "1-2 languages",
          ai: "50+ languages",
          improvement: "Global reach"
        }
      },
      advanced: {
        title1: "Advanced",
        title2: "Capabilities",
        subtitle: "Explore the deep functionality that sets D2 Group apart",
        ai: {
          category: "AI & Machine Learning",
          flowBuilder: {
            name: "Conversation Flow Builder",
            description: "Visual drag-and-drop interface to design complex conversation paths"
          },
          intentTraining: {
            name: "Intent Training",
            description: "Continuously improve AI understanding with custom training data"
          },
          autoLearning: {
            name: "Auto-Learning",
            description: "Machine learning algorithms that improve responses over time"
          },
          fallback: {
            name: "Fallback Handling",
            description: "Smart escalation to human agents when needed"
          }
        },
        integration: {
          category: "Integration & APIs",
          crm: {
            name: "CRM Integration",
            description: "Connect with Salesforce, HubSpot, Pipedrive, and 50+ CRMs"
          },
          ecommerce: {
            name: "E-commerce Platforms",
            description: "Native integration with Shopify, WooCommerce, Magento"
          },
          api: {
            name: "Custom APIs",
            description: "RESTful APIs for custom integrations and workflows"
          },
          webhook: {
            name: "Webhook Support",
            description: "Real-time data synchronization with external systems"
          }
        },
        reporting: {
          category: "Analytics & Reporting",
          conversation: {
            name: "Conversation Analytics",
            description: "Deep insights into customer behavior and conversation patterns"
          },
          performance: {
            name: "Performance Metrics",
            description: "Track resolution rate, satisfaction scores, and conversion metrics"
          },
          dashboard: {
            name: "Custom Dashboards",
            description: "Build personalized reporting dashboards for stakeholders"
          },
          abtest: {
            name: "A/B Testing",
            description: "Test different conversation flows and optimize performance"
          }
        }
      },
      demo: {
        title1: "See Our Features",
        title2: "In Action",
        subtitle: "Experience the power of D2 Group's AI chatbot platform with a personalized demo tailored to your business needs.",
        interactive: {
          title: "Interactive Demo",
          subtitle: "Click to experience our chatbot in action"
        },
        feature1: "Real-time conversation flow",
        feature2: "Multi-language support",
        feature3: "Analytics dashboard",
        cta1: "Book Live Demo",
        cta2: "View Case Studies"
      }
    },

    // Case Studies page translations
    caseStudies: {
      hero: {
        title1: "Real",
        title2: "Success Stories",
        subtitle: "Discover how businesses across industries have transformed their customer experience and achieved remarkable results with D2 Group's AI chatbot solutions."
      },
      stats: {
        deployments: {
          number: "500+",
          label: "Successful Deployments"
        },
        conversion: {
          number: "45%",
          label: "Average Conversion Increase"
        },
        cost: {
          number: "60%",
          label: "Average Cost Reduction"
        },
        support: {
          number: "24/7",
          label: "Customer Support"
        }
      },
      labels: {
        challenge: "Challenge",
        solution: "Solution",
        results: "Results"
      },
      case1: {
        title: "E-commerce Giant Increases Conversions by 45%",
        company: "TechMart Vietnam",
        industry: "E-commerce",
        challenge: "High cart abandonment rate and overwhelming customer inquiries during peak seasons",
        solution: "Deployed AI chatbot for product recommendations, order tracking, and instant customer support",
        result1: { metric: "Conversion Rate", improvement: "+45%" },
        result2: { metric: "Cart Abandonment", improvement: "-30%" },
        result3: { metric: "Response Time", improvement: "< 2 sec" },
        result4: { metric: "Customer Satisfaction", improvement: "4.8/5" },
        testimonial: "The chatbot transformed our customer experience. We're seeing record-high conversion rates and our support team can focus on complex issues.",
        author: "Nguyễn Văn Minh, CEO TechMart Vietnam"
      },
      case2: {
        title: "Healthcare Provider Reduces Wait Times by 60%",
        company: "MedCare Plus",
        industry: "Healthcare",
        challenge: "Long patient wait times for appointment booking and basic health inquiries",
        solution: "Implemented appointment scheduling bot with symptom checker and health information system",
        result1: { metric: "Wait Times", improvement: "-60%" },
        result2: { metric: "Appointment Bookings", improvement: "+200%" },
        result3: { metric: "Staff Efficiency", improvement: "+40%" },
        result4: { metric: "Patient Satisfaction", improvement: "4.9/5" },
        testimonial: "Our patients love the instant response for appointments and basic health questions. It's revolutionized our patient care workflow.",
        author: "Dr. Trần Thị Lan, Medical Director"
      },
      case3: {
        title: "Financial Services Improves Lead Quality by 80%",
        company: "VietFinance Solutions",
        industry: "Financial Services",
        challenge: "Poor lead qualification process and time-consuming customer onboarding",
        solution: "Deployed intelligent lead qualification bot with document processing and KYC automation",
        result1: { metric: "Lead Quality", improvement: "+80%" },
        result2: { metric: "Onboarding Time", improvement: "-50%" },
        result3: { metric: "Conversion Rate", improvement: "+35%" },
        result4: { metric: "Process Efficiency", improvement: "+65%" },
        testimonial: "The AI chatbot pre-qualifies leads so well that our sales team only speaks with serious prospects. Our conversion rates have never been higher.",
        author: "Lê Hoàng Nam, Sales Director"
      },
      case4: {
        title: "Education Platform Boosts Student Engagement by 70%",
        company: "EduTech Academy",
        industry: "Education",
        challenge: "Low student engagement and high drop-out rates in online courses",
        solution: "Created AI tutor bot for 24/7 student support, course recommendations, and progress tracking",
        result1: { metric: "Student Engagement", improvement: "+70%" },
        result2: { metric: "Course Completion", improvement: "+55%" },
        result3: { metric: "Support Queries", improvement: "24/7" },
        result4: { metric: "Student Satisfaction", improvement: "4.7/5" },
        testimonial: "Students have a personal AI tutor available 24/7. The improvement in engagement and completion rates has been remarkable.",
        author: "Phạm Thị Mai, Academic Director"
      },
      case5: {
        title: "Real Estate Agency Generates 3x More Qualified Leads",
        company: "PropertyPro Vietnam",
        industry: "Real Estate",
        challenge: "Difficulty qualifying serious buyers and managing high volume of property inquiries",
        solution: "Implemented property search bot with virtual tours and buyer qualification system",
        result1: { metric: "Qualified Leads", improvement: "+300%" },
        result2: { metric: "Property Views", improvement: "+150%" },
        result3: { metric: "Sales Cycle", improvement: "-40%" },
        result4: { metric: "Agent Productivity", improvement: "+60%" },
        testimonial: "The chatbot pre-qualifies buyers and schedules viewings automatically. Our agents now spend time with serious buyers only.",
        author: "Vũ Minh Tuấn, Managing Director"
      },
      case6: {
        title: "Hotel Chain Achieves 90% Booking Automation",
        company: "Luxury Resorts Group",
        industry: "Hospitality",
        challenge: "Manual booking process overwhelming staff during peak tourism seasons",
        solution: "Deployed booking automation bot with room recommendations and guest service features",
        result1: { metric: "Booking Automation", improvement: "90%" },
        result2: { metric: "Staff Workload", improvement: "-70%" },
        result3: { metric: "Booking Conversion", improvement: "+40%" },
        result4: { metric: "Guest Satisfaction", improvement: "4.9/5" },
        testimonial: "Guests can book rooms, request services, and get recommendations instantly. Our occupancy rates have reached all-time highs.",
        author: "Nguyễn Thị Hoa, Operations Manager"
      },
      industries: {
        title1: "Industries We",
        title2: "Serve",
        subtitle: "Proven success across diverse business sectors",
        ecommerce: { name: "E-commerce", metric: "+45% Sales" },
        healthcare: { name: "Healthcare", metric: "-60% Wait Time" },
        finance: { name: "Finance", metric: "+80% Lead Quality" },
        education: { name: "Education", metric: "+70% Engagement" },
        realestate: { name: "Real Estate", metric: "+300% Leads" },
        hospitality: { name: "Hospitality", metric: "90% Automation" },
        retail: { name: "Retail", metric: "+35% Conversion" },
        automotive: { name: "Automotive", metric: "+50% Efficiency" },
        insurance: { name: "Insurance", metric: "+25% Claims" },
        manufacturing: { name: "Manufacturing", metric: "+40% Support" },
        travel: { name: "Travel", metric: "+55% Bookings" },
        logistics: { name: "Logistics", metric: "+30% Tracking" }
      },
      cta: {
        title1: "Ready to Write Your",
        title2: "Success Story",
        subtitle: "Join hundreds of successful businesses that have transformed their customer experience with D2 Group. Let's discuss how we can deliver similar results for your organization.",
        button1: "Start Your Success Story",
        button2: "View Pricing"
      }
    },

    // Contact page translations
    contact: {
      hero: {
        title1: "Get in",
        title2: "Touch",
        subtitle: "Ready to transform your customer conversations? Let's discuss how D2 Group can help you achieve your automation goals. Our experts are standing by to provide personalized guidance.",
        feature1: {
          title: "Free Consultation",
          description: "Expert guidance tailored to your needs"
        },
        feature2: {
          title: "24-Hour Response",
          description: "Quick turnaround on all inquiries"
        },
        feature3: {
          title: "Fast Implementation",
          description: "Go live in as little as 48 hours"
        }
      },
      form: {
        title1: "Let's Start the",
        title2: "Conversation",
        subtitle: "Fill out the form below and our team will reach out to you within 24 hours.",
        fields: {
          name: "Full Name *",
          email: "Email Address *",
          phone: "Phone Number",
          company: "Company Name",
          interest: "Area of Interest *",
          message: "Message"
        },
        placeholders: {
          name: "John Smith",
          email: "john@company.com",
          phone: "+1 (555) 123-4567",
          company: "Acme Corporation",
          interest: "What can we help you with?",
          message: "Tell us about your business needs, current challenges, or any specific questions you have..."
        },
        options: {
          demo: "Schedule a Product Demo",
          pricing: "Get Pricing Information",
          integration: "Discuss Integration Options",
          enterprise: "Enterprise Solutions",
          support: "Technical Support",
          partnership: "Partnership Opportunities",
          other: "Other"
        },
        submit: "Send Message",
        submitting: "Sending...",
        privacy: "By submitting this form, you agree to our Privacy Policy and Terms of Service.",
        success: {
          title: "Thank you for your inquiry!",
          description: "We'll get back to you within 24 hours. Check your email for confirmation."
        },
        error: {
          title: "Oops! Something went wrong",
          description: "Unable to submit form. Please try again or contact us directly via email."
        }
      },
      info: {
        title1: "Contact",
        title2: "Information",
        email: {
          label: "Email",
          value: "contact@d2group.co"
        },
        phone: {
          label: "Phone",
          value1: "+84 909 099 421",
          value2: "+84 933 221 059"
        },
        address: {
          label: "Address",
          street: "No. 3 Nguyễn Cơ Thạch Street",
          ward: "An Lợi Đông Ward, Thủ Đức City",
          city: "Ho Chi Minh City, Vietnam"
        },
        hours: {
          label: "Business Hours",
          weekdays: "Monday - Friday: 9:00 AM - 6:00 PM (GMT+7)",
          saturday: "Saturday: 10:00 AM - 2:00 PM (GMT+7)",
          emergency: "Emergency support: 24/7"
        }
      },
      map: {
        title1: "Find",
        title2: "Us",
        alt: "D2 Group Office Location"
      },
      thanks: {
        title1: "Thank You for Your",
        title2: "Interest",
        subtitle: "Your message has been received and our team will respond within 24 hours. In the meantime, feel free to connect with us on social media."
      },
      social: {
        facebook: "Facebook",
        linkedin: "LinkedIn",
        email: "Email"
      }
    }
  },
  
  vi: {
    navigation: {
      home: "Trang chủ",
      about: "Giới thiệu",
      features: "Tính năng",
      caseStudies: "Nghiên cứu trường hợp",
      pricing: "Bảng giá",
      contact: "Liên hệ",
      language: "Ngôn ngữ",
    },

    // Features page Vietnamese translations
    features: {
      hero: {
        title1: "Tính năng",
        title2: "Mạnh mẽ",
        title3: "Tạo nên Kết quả",
        subtitle: "Khám phá bộ tính năng toàn diện được hỗ trợ bởi AI, được thiết kế để chuyển đổi giao tiếp khách hàng và thúc đẩy tăng trưởng kinh doanh có thể đo lường được.",
        cta: "Xem Tính năng Hoạt động"
      },
      core: {
        title1: "Khả năng",
        title2: "Cốt lõi",
        subtitle: "Mọi thứ bạn cần để mang lại trải nghiệm khách hàng đặc biệt"
      },
      nlp: {
        title: "Xử lý Ngôn ngữ Tự nhiên",
        description: "AI tiên tiến hiểu ngữ cảnh, ý định và cảm xúc",
        detail1: "Hỗ trợ đa ngôn ngữ với độ chính xác 95%+",
        detail2: "Quản lý luồng hội thoại theo ngữ cảnh",
        detail3: "Phân tích cảm xúc và nhận diện tình cảm",
        detail4: "Nhận diện ý định và trích xuất thực thể"
      },
      omnichannel: {
        title: "Triển khai Đa kênh",
        description: "Triển khai trên website, WhatsApp, Facebook và nhiều hơn nữa",
        detail1: "Widget chat website với giao diện có thể tùy chỉnh",
        detail2: "Tích hợp WhatsApp Business API",
        detail3: "Kết nối Facebook Messenger",
        detail4: "Hỗ trợ kênh SMS và voice"
      },
      analytics: {
        title: "Phân tích Thời gian Thực",
        description: "Thông tin chi tiết toàn diện về tương tác khách hàng",
        detail1: "Giám sát hội thoại trực tiếp",
        detail2: "Số liệu hiệu suất và KPI",
        detail3: "Đánh giá mức độ hài lòng khách hàng",
        detail4: "Theo dõi ROI và chuyển đổi"
      },
      security: {
        title: "Bảo mật Doanh nghiệp",
        description: "Tiêu chuẩn bảo mật và tuân thủ cấp ngân hàng",
        detail1: "Mã hóa đầu cuối",
        detail2: "Tuân thủ SOC 2 Type II",
        detail3: "Tuân thủ GDPR và quyền riêng tư dữ liệu",
        detail4: "Tích hợp đăng nhập một lần (SSO)"
      },
      deployment: {
        title: "Triển khai Tức thì",
        description: "Hoạt động trong vài phút với nền tảng không cần code",
        detail1: "Quy trình thiết lập 5 phút",
        detail2: "Mẫu và quy trình làm việc được xây dựng sẵn",
        detail3: "Trình tạo hội thoại kéo thả",
        detail4: "Tích hợp một cú nhấp"
      },
      conversations: {
        title: "Hội thoại Thông minh",
        description: "Tương tác giống con người chuyển đổi và thu hút",
        detail1: "Cá nhân hóa động",
        detail2: "Tự động hóa đánh giá khách hàng tiềm năng",
        detail3: "Đặt lịch hẹn và lên lịch",
        detail4: "Đề xuất sản phẩm"
      },
      comparison: {
        title1: "AI Chatbot so với",
        title2: "Live Chat Truyền thống",
        subtitle: "Xem cách tự động hóa được hỗ trợ bởi AI vượt trội hơn các phương pháp dịch vụ khách hàng truyền thống",
        table: {
          feature: "Tính năng",
          traditional: "Live Chat Truyền thống",
          ai: "AI Chatbot",
          improvement: "Cải thiện"
        },
        responseTime: "Thời gian Phản hồi",
        availability: "Khả năng Sẵn sàng",
        scalability: "Khả năng Mở rộng",
        consistency: "Tính Nhất quán",
        cost: "Chi phí mỗi Tương tác",
        language: "Hỗ trợ Ngôn ngữ",
        responseTime: {
          traditional: "Hàng giờ đến hàng ngày",
          ai: "< 2 giây",
          improvement: "Nhanh hơn 99%"
        },
        availability: {
          traditional: "Chỉ giờ làm việc",
          ai: "24/7/365",
          improvement: "Luôn sẵn sàng"
        },
        scalability: {
          traditional: "Bị giới hạn bởi nhân viên",
          ai: "Hội thoại không giới hạn",
          improvement: "Mở rộng vô hạn"
        },
        consistency: {
          traditional: "Thay đổi theo đại lý",
          ai: "Luôn nhất quán",
          improvement: "Đáng tin cậy 100%"
        },
        cost: {
          traditional: "$5-15",
          ai: "$0.10-0.50",
          improvement: "Giảm chi phí 95%"
        },
        language: {
          traditional: "1-2 ngôn ngữ",
          ai: "50+ ngôn ngữ",
          improvement: "Tiếp cận toàn cầu"
        }
      },
      advanced: {
        title1: "Khả năng",
        title2: "Nâng cao",
        subtitle: "Khám phá chức năng sâu làm nên sự khác biệt của D2 Group",
        ai: {
          category: "AI & Học máy",
          flowBuilder: {
            name: "Trình Tạo Luồng Hội thoại",
            description: "Giao diện kéo thả trực quan để thiết kế đường dẫn hội thoại phức tạp"
          },
          intentTraining: {
            name: "Huấn luyện Ý định",
            description: "Liên tục cải thiện hiểu biết AI với dữ liệu huấn luyện tùy chỉnh"
          },
          autoLearning: {
            name: "Tự động Học",
            description: "Thuật toán học máy cải thiện phản hồi theo thời gian"
          },
          fallback: {
            name: "Xử lý Dự phòng",
            description: "Chuyển giao thông minh cho đại lý con người khi cần thiết"
          }
        },
        integration: {
          category: "Tích hợp & API",
          crm: {
            name: "Tích hợp CRM",
            description: "Kết nối với Salesforce, HubSpot, Pipedrive và hơn 50 CRM"
          },
          ecommerce: {
            name: "Nền tảng Thương mại điện tử",
            description: "Tích hợp gốc với Shopify, WooCommerce, Magento"
          },
          api: {
            name: "API Tùy chỉnh",
            description: "RESTful API cho tích hợp và quy trình làm việc tùy chỉnh"
          },
          webhook: {
            name: "Hỗ trợ Webhook",
            description: "Đồng bộ hóa dữ liệu thời gian thực với hệ thống bên ngoài"
          }
        },
        reporting: {
          category: "Phân tích & Báo cáo",
          conversation: {
            name: "Phân tích Hội thoại",
            description: "Thông tin sâu về hành vi khách hàng và mẫu hội thoại"
          },
          performance: {
            name: "Số liệu Hiệu suất",
            description: "Theo dõi tỷ lệ giải quyết, điểm hài lòng và số liệu chuyển đổi"
          },
          dashboard: {
            name: "Bảng điều khiển Tùy chỉnh",
            description: "Xây dựng bảng điều khiển báo cáo cá nhân hóa cho các bên liên quan"
          },
          abtest: {
            name: "Kiểm tra A/B",
            description: "Kiểm tra các luồng hội thoại khác nhau và tối ưu hóa hiệu suất"
          }
        }
      },
      demo: {
        title1: "Xem Tính năng của Chúng tôi",
        title2: "Hoạt động",
        subtitle: "Trải nghiệm sức mạnh của nền tảng AI chatbot D2 Group với demo cá nhân hóa phù hợp với nhu cầu kinh doanh của bạn.",
        interactive: {
          title: "Demo Tương tác",
          subtitle: "Nhấp để trải nghiệm chatbot của chúng tôi hoạt động"
        },
        feature1: "Luồng hội thoại thời gian thực",
        feature2: "Hỗ trợ đa ngôn ngữ",
        feature3: "Bảng điều khiển phân tích",
        cta1: "Đặt Demo Trực tiếp",
        cta2: "Xem Nghiên cứu Trường hợp"
      }
    },

    // Case Studies page Vietnamese translations
    caseStudies: {
      hero: {
        title1: "Câu chuyện",
        title2: "Thành công Thực tế",
        subtitle: "Khám phá cách các doanh nghiệp từ nhiều ngành đã chuyển đổi trải nghiệm khách hàng và đạt được kết quả đáng kể với giải pháp AI chatbot của D2 Group."
      },
      stats: {
        deployments: {
          number: "500+",
          label: "Triển khai Thành công"
        },
        conversion: {
          number: "45%",
          label: "Tăng Chuyển đổi Trung bình"
        },
        cost: {
          number: "60%",
          label: "Giảm Chi phí Trung bình"
        },
        support: {
          number: "24/7",
          label: "Hỗ trợ Khách hàng"
        }
      },
      labels: {
        challenge: "Thách thức",
        solution: "Giải pháp",
        results: "Kết quả"
      },
      case1: {
        title: "Gã khổng lồ Thương mại điện tử Tăng Chuyển đổi 45%",
        company: "TechMart Vietnam",
        industry: "Thương mại điện tử",
        challenge: "Tỷ lệ bỏ giỏ hàng cao và quá tải yêu cầu khách hàng trong mùa cao điểm",
        solution: "Triển khai AI chatbot cho đề xuất sản phẩm, theo dõi đơn hàng và hỗ trợ khách hàng tức thì",
        result1: { metric: "Tỷ lệ Chuyển đổi", improvement: "+45%" },
        result2: { metric: "Bỏ Giỏ hàng", improvement: "-30%" },
        result3: { metric: "Thời gian Phản hồi", improvement: "< 2 giây" },
        result4: { metric: "Hài lòng Khách hàng", improvement: "4.8/5" },
        testimonial: "Chatbot đã chuyển đổi trải nghiệm khách hàng của chúng tôi. Chúng tôi đang thấy tỷ lệ chuyển đổi kỷ lục và đội hỗ trợ có thể tập trung vào các vấn đề phức tạp.",
        author: "Nguyễn Văn Minh, CEO TechMart Vietnam"
      },
      case2: {
        title: "Nhà cung cấp Y tế Giảm Thời gian Chờ 60%",
        company: "MedCare Plus",
        industry: "Y tế",
        challenge: "Thời gian chờ bệnh nhân dài để đặt lịch hẹn và câu hỏi sức khỏe cơ bản",
        solution: "Triển khai bot lên lịch hẹn với kiểm tra triệu chứng và hệ thống thông tin sức khỏe",
        result1: { metric: "Thời gian Chờ", improvement: "-60%" },
        result2: { metric: "Đặt lịch Hẹn", improvement: "+200%" },
        result3: { metric: "Hiệu quả Nhân viên", improvement: "+40%" },
        result4: { metric: "Hài lòng Bệnh nhân", improvement: "4.9/5" },
        testimonial: "Bệnh nhân của chúng tôi yêu thích phản hồi tức thì cho lịch hẹn và câu hỏi sức khỏe cơ bản. Nó đã cách mạng hóa quy trình chăm sóc bệnh nhân của chúng tôi.",
        author: "Bác sĩ Trần Thị Lan, Giám đốc Y khoa"
      },
      case3: {
        title: "Dịch vụ Tài chính Cải thiện Chất lượng Khách hàng tiềm năng 80%",
        company: "VietFinance Solutions",
        industry: "Dịch vụ Tài chính",
        challenge: "Quy trình đánh giá khách hàng tiềm năng kém và onboarding khách hàng tốn thời gian",
        solution: "Triển khai bot đánh giá khách hàng tiềm năng thông minh với xử lý tài liệu và tự động hóa KYC",
        result1: { metric: "Chất lượng Khách hàng tiềm năng", improvement: "+80%" },
        result2: { metric: "Thời gian Onboarding", improvement: "-50%" },
        result3: { metric: "Tỷ lệ Chuyển đổi", improvement: "+35%" },
        result4: { metric: "Hiệu quả Quy trình", improvement: "+65%" },
        testimonial: "AI chatbot đánh giá trước khách hàng tiềm năng rất tốt đến nỗi đội bán hàng của chúng tôi chỉ nói chuyện với khách hàng tiềm năng nghiêm túc. Tỷ lệ chuyển đổi của chúng tôi chưa bao giờ cao hơn.",
        author: "Lê Hoàng Nam, Giám đốc Bán hàng"
      },
      case4: {
        title: "Nền tảng Giáo dục Tăng Sự tham gia Học sinh 70%",
        company: "EduTech Academy",
        industry: "Giáo dục",
        challenge: "Sự tham gia học sinh thấp và tỷ lệ bỏ học cao trong các khóa học trực tuyến",
        solution: "Tạo AI tutor bot cho hỗ trợ học sinh 24/7, đề xuất khóa học và theo dõi tiến độ",
        result1: { metric: "Sự tham gia Học sinh", improvement: "+70%" },
        result2: { metric: "Hoàn thành Khóa học", improvement: "+55%" },
        result3: { metric: "Truy vấn Hỗ trợ", improvement: "24/7" },
        result4: { metric: "Hài lòng Học sinh", improvement: "4.7/5" },
        testimonial: "Học sinh có gia sư AI cá nhân sẵn sàng 24/7. Sự cải thiện trong sự tham gia và tỷ lệ hoàn thành đã rất đáng chú ý.",
        author: "Phạm Thị Mai, Giám đốc Học thuật"
      },
      case5: {
        title: "Đại lý Bất động sản Tạo ra Khách hàng tiềm năng Có chất lượng Gấp 3 lần",
        company: "PropertyPro Vietnam",
        industry: "Bất động sản",
        challenge: "Khó khăn trong việc đánh giá người mua nghiêm túc và quản lý khối lượng lớn yêu cầu bất động sản",
        solution: "Triển khai bot tìm kiếm bất động sản với tour ảo và hệ thống đánh giá người mua",
        result1: { metric: "Khách hàng tiềm năng Có chất lượng", improvement: "+300%" },
        result2: { metric: "Lượt xem Bất động sản", improvement: "+150%" },
        result3: { metric: "Chu kỳ Bán hàng", improvement: "-40%" },
        result4: { metric: "Năng suất Đại lý", improvement: "+60%" },
        testimonial: "Chatbot đánh giá trước người mua và lên lịch xem tự động. Đại lý của chúng tôi giờ chỉ dành thời gian với người mua nghiêm túc.",
        author: "Vũ Minh Tuấn, Giám đốc Điều hành"
      },
      case6: {
        title: "Chuỗi Khách sạn Đạt 90% Tự động hóa Đặt phòng",
        company: "Luxury Resorts Group",
        industry: "Khách sạn",
        challenge: "Quy trình đặt phòng thủ công làm quá tải nhân viên trong mùa du lịch cao điểm",
        solution: "Triển khai bot tự động hóa đặt phòng với đề xuất phòng và tính năng dịch vụ khách",
        result1: { metric: "Tự động hóa Đặt phòng", improvement: "90%" },
        result2: { metric: "Khối lượng công việc Nhân viên", improvement: "-70%" },
        result3: { metric: "Chuyển đổi Đặt phòng", improvement: "+40%" },
        result4: { metric: "Hài lòng Khách", improvement: "4.9/5" },
        testimonial: "Khách có thể đặt phòng, yêu cầu dịch vụ và nhận đề xuất tức thì. Tỷ lệ lấp đầy của chúng tôi đã đạt mức cao nhất mọi thời đại.",
        author: "Nguyễn Thị Hoa, Quản lý Vận hành"
      },
      industries: {
        title1: "Ngành nghề Chúng tôi",
        title2: "Phục vụ",
        subtitle: "Thành công đã được chứng minh trên các lĩnh vực kinh doanh đa dạng",
        ecommerce: { name: "Thương mại điện tử", metric: "+45% Doanh số" },
        healthcare: { name: "Y tế", metric: "-60% Thời gian Chờ" },
        finance: { name: "Tài chính", metric: "+80% Chất lượng Khách hàng tiềm năng" },
        education: { name: "Giáo dục", metric: "+70% Sự tham gia" },
        realestate: { name: "Bất động sản", metric: "+300% Khách hàng tiềm năng" },
        hospitality: { name: "Khách sạn", metric: "90% Tự động hóa" },
        retail: { name: "Bán lẻ", metric: "+35% Chuyển đổi" },
        automotive: { name: "Ô tô", metric: "+50% Hiệu quả" },
        insurance: { name: "Bảo hiểm", metric: "+25% Yêu cầu bồi thường" },
        manufacturing: { name: "Sản xuất", metric: "+40% Hỗ trợ" },
        travel: { name: "Du lịch", metric: "+55% Đặt chỗ" },
        logistics: { name: "Logistics", metric: "+30% Theo dõi" }
      },
      cta: {
        title1: "Sẵn sàng Viết",
        title2: "Câu chuyện Thành công",
        subtitle: "Tham gia hàng trăm doanh nghiệp thành công đã chuyển đổi trải nghiệm khách hàng với D2 Group. Hãy thảo luận về cách chúng tôi có thể mang lại kết quả tương tự cho tổ chức của bạn.",
        button1: "Bắt đầu Câu chuyện Thành công của Bạn",
        button2: "Xem Bảng giá"
      }
    },

    // Contact page Vietnamese translations
    contact: {
      hero: {
        title1: "Liên hệ",
        title2: "với Chúng tôi",
        subtitle: "Sẵn sàng chuyển đổi cuộc trò chuyện khách hàng của bạn? Hãy thảo luận về cách D2 Group có thể giúp bạn đạt được mục tiêu tự động hóa. Các chuyên gia của chúng tôi đang sẵn sàng cung cấp hướng dẫn cá nhân hóa.",
        feature1: {
          title: "Tư vấn Miễn phí",
          description: "Hướng dẫn chuyên gia phù hợp với nhu cầu của bạn"
        },
        feature2: {
          title: "Phản hồi trong 24 Giờ",
          description: "Xử lý nhanh chóng tất cả yêu cầu"
        },
        feature3: {
          title: "Triển khai Nhanh",
          description: "Hoạt động chỉ trong vòng 48 giờ"
        }
      },
      form: {
        title1: "Hãy Bắt đầu",
        title2: "Cuộc trò chuyện",
        subtitle: "Điền vào biểu mẫu bên dưới và đội ngũ của chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ.",
        fields: {
          name: "Họ và Tên *",
          email: "Địa chỉ Email *",
          phone: "Số Điện thoại",
          company: "Tên Công ty",
          interest: "Lĩnh vực Quan tâm *",
          message: "Tin nhắn"
        },
        placeholders: {
          name: "Nguyễn Văn A",
          email: "nguyenvana@congty.com",
          phone: "+84 (900) 123-4567",
          company: "Công ty TNHH ABC",
          interest: "Chúng tôi có thể giúp gì cho bạn?",
          message: "Hãy cho chúng tôi biết về nhu cầu kinh doanh, thách thức hiện tại hoặc bất kỳ câu hỏi cụ thể nào bạn có..."
        },
        options: {
          demo: "Lên lịch Demo Sản phẩm",
          pricing: "Nhận Thông tin Giá",
          integration: "Thảo luận Tùy chọn Tích hợp",
          enterprise: "Giải pháp Doanh nghiệp",
          support: "Hỗ trợ Kỹ thuật",
          partnership: "Cơ hội Đối tác",
          other: "Khác"
        },
        submit: "Gửi Tin nhắn",
        submitting: "Đang gửi...",
        privacy: "Bằng cách gửi biểu mẫu này, bạn đồng ý với Chính sách Quyền riêng tư và Điều khoản Dịch vụ của chúng tôi.",
        success: {
          title: "Cảm ơn bạn đã quan tâm!",
          description: "Chúng tôi sẽ liên hệ lại với bạn trong vòng 24 giờ. Kiểm tra email để xác nhận."
        },
        error: {
          title: "Oops! Có lỗi xảy ra",
          description: "Không thể gửi biểu mẫu. Vui lòng thử lại hoặc liên hệ trực tiếp qua email."
        }
      },
      info: {
        title1: "Thông tin",
        title2: "Liên hệ",
        email: {
          label: "Email",
          value: "contact@d2group.co"
        },
        phone: {
          label: "Điện thoại",
          value1: "+84 909 099 421",
          value2: "+84 933 221 059"
        },
        address: {
          label: "Địa chỉ",
          street: "Số 3 Đường Nguyễn Cơ Thạch",
          ward: "Phường An Lợi Đông, Thành phố Thủ Đức",
          city: "Thành phố Hồ Chí Minh, Việt Nam"
        },
        hours: {
          label: "Giờ Làm việc",
          weekdays: "Thứ Hai - Thứ Sáu: 9:00 SA - 6:00 CH (GMT+7)",
          saturday: "Thứ Bảy: 10:00 SA - 2:00 CH (GMT+7)",
          emergency: "Hỗ trợ khẩn cấp: 24/7"
        }
      },
      map: {
        title1: "Tìm",
        title2: "Chúng tôi",
        alt: "Vị trí Văn phòng D2 Group"
      },
      thanks: {
        title1: "Cảm ơn bạn đã",
        title2: "Quan tâm",
        subtitle: "Tin nhắn của bạn đã được nhận và đội ngũ của chúng tôi sẽ phản hồi trong vòng 24 giờ. Trong lúc chờ đợi, hãy kết nối với chúng tôi trên mạng xã hội."
      },
      social: {
        facebook: "Facebook",
        linkedin: "LinkedIn",
        email: "Email"
      }
    }
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("en");

  const t = (key: string): string => {
    const keys = key.split(".");
    let translation: any = translations[language];

    for (const k of keys) {
      if (translation && k in translation) {
        translation = translation[k];
      } else {
        return key; // fallback to key if translation not found
      }
    }

    if (typeof translation === "string") {
      return translation;
    }

    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
