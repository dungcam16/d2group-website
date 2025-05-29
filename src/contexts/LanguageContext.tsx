
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'vi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      features: "Features",
      services: "Services",
      useCases: "Use Cases",
      caseStudies: "Case Studies",
      pricing: "Pricing",
      contact: "Contact"
    },
    
    // Home page translations
    home: {
      hero: {
        title: "Transform Customer Conversations",
        titleHighlight: "AI-Powered",
        subtitle: "Boost engagement by 10x with intelligent chatbots",
        description: "Deploy advanced AI chatbots in under 5 minutes. Automate support, capture leads, and delight customers 24/7 with D2 Group's cutting-edge conversational AI platform.",
        cta: "Start Free Trial",
        watchDemo: "Watch Demo"
      },
      stats: {
        conversations: "Monthly Conversations",
        responseTime: "Average Response Time",
        satisfaction: "Customer Satisfaction",
        integration: "Integration Time"
      },
      features: {
        title: "Why Choose",
        titleHighlight: "D2 Group",
        subtitle: "Experience the next generation of customer interaction",
        aiPowered: {
          title: "AI-Powered Intelligence",
          description: "Advanced NLP understands context and intent for human-like conversations"
        },
        multiChannel: {
          title: "Multi-Channel Support",
          description: "Seamlessly integrate across website, WhatsApp, Messenger, and more"
        },
        realTime: {
          title: "Real-Time Analytics",
          description: "Track performance, optimize conversations, and measure ROI instantly"
        },
        easySetup: {
          title: "5-Minute Setup",
          description: "Get up and running fast with our intuitive drag-and-drop interface"
        },
        security: {
          title: "Enterprise Security",
          description: "Bank-grade encryption and compliance with global data protection standards"
        },
        support: {
          title: "24/7 Expert Support",
          description: "Dedicated customer success team ensures your chatbot performs optimally"
        }
      },
      howItWorks: {
        title: "How It",
        titleHighlight: "Works",
        subtitle: "Get your AI chatbot up and running in minutes",
        step1: {
          title: "Choose Your Template",
          description: "Select from industry-specific templates or start from scratch"
        },
        step2: {
          title: "Customize Conversations",
          description: "Train your bot with your brand voice and business logic"
        },
        step3: {
          title: "Deploy Everywhere",
          description: "Launch across all your channels with one-click deployment"
        },
        step4: {
          title: "Monitor & Optimize",
          description: "Track performance and continuously improve with AI insights"
        }
      },
      useCases: {
        title: "Perfect for Every",
        titleHighlight: "Industry",
        subtitle: "Tailored solutions that deliver real results",
        ecommerce: {
          title: "E-commerce",
          description: "Boost sales with product recommendations and cart recovery"
        },
        healthcare: {
          title: "Healthcare",
          description: "Streamline appointments and provide instant health information"
        },
        finance: {
          title: "Financial Services",
          description: "Automate customer service and improve lead qualification"
        },
        education: {
          title: "Education",
          description: "Support students with 24/7 academic assistance"
        },
        realEstate: {
          title: "Real Estate",
          description: "Qualify leads and schedule property viewings automatically"
        },
        hospitality: {
          title: "Hospitality",
          description: "Enhance guest experience with instant booking and support"
        }
      },
      testimonials: {
        title: "Trusted by",
        titleHighlight: "Industry Leaders",
        subtitle: "See what our customers are saying about D2 Group",
        testimonial1: {
          text: "D2 Group's chatbot increased our conversion rate by 45% and reduced support costs by 60%. The setup was incredibly easy and the results were immediate.",
          author: "Sarah Chen, CEO of TechMart"
        },
        testimonial2: {
          text: "The AI understands our customers' needs perfectly. We've seen a 300% increase in qualified leads since implementing D2 Group's solution.",
          author: "Michael Rodriguez, Head of Sales at PropertyPro"
        },
        testimonial3: {
          text: "Outstanding customer support and a product that actually works as advertised. Our patient satisfaction scores have never been higher.",
          author: "Dr. Emily Watson, Medical Director"
        }
      },
      cta: {
        title: "Ready to Transform Your",
        titleHighlight: "Customer Experience",
        description: "Join thousands of businesses that trust D2 Group to power their customer conversations.",
        startButton: "Start Free Trial",
        contactButton: "Contact Sales"
      }
    },

    // About page translations
    about: {
      hero: {
        title: "Pioneering the Future of Conversational AI",
        subtitle: "Founded in 2019, D2 Group has been at the forefront of AI innovation.",
        description: "We believe every business deserves intelligent, efficient customer conversations that drive growth and satisfaction."
      },
      stats: {
        clients: "Happy Clients",
        countries: "Countries Served",
        uptime: "Platform Uptime"
      },
      mission: {
        title: "Our Mission & Vision",
        description: "We're on a mission to democratize AI and make intelligent customer conversations accessible to businesses of all sizes. Our vision is to create a world where every customer interaction is meaningful, efficient, and delightful.",
        global: {
          title: "Global Reach",
          desc: "Serving businesses across 12 countries with localized solutions"
        },
        innovation: {
          title: "Continuous Innovation",
          desc: "Investing 40% of revenue in R&D to stay ahead of AI trends"
        },
        security: {
          title: "Security First",
          desc: "Enterprise-grade security with 99.9% uptime guarantee"
        }
      },
      vision: {
        title: "Our Vision",
        description: "To be the global leader in conversational AI, empowering every business to deliver exceptional customer experiences."
      },
      team: {
        title: "Meet Our Expert Team",
        subtitle: "A diverse group of AI researchers, engineers, and customer success experts dedicated to your success."
      },
      journey: {
        title: "Our Journey",
        subtitle: "From startup to industry leader - here's how we've grown"
      },
      awards: {
        title: "Recognition & Awards",
        subtitle: "Industry recognition for our innovation and excellence"
      },
      cta: {
        title: "Ready to Join Our Success Story?",
        description: "Let's discuss how D2 Group can help transform your customer conversations and drive business growth.",
        getStarted: "Get Started Today",
        scheduleCall: "Schedule a Call"
      }
    },

    // Features page translations
    features: {
      hero: {
        title: "Powerful",
        titleHighlight: "Features",
        titleEnd: "for Modern Businesses",
        description: "Discover the comprehensive suite of AI-powered tools designed to transform your customer interactions and drive business growth.",
        cta: "Start Free Trial"
      },
      core: {
        title: "Core",
        titleHighlight: "Features",
        subtitle: "Everything you need to create intelligent customer conversations",
        nlp: {
          title: "Advanced Natural Language Processing",
          desc: "State-of-the-art AI that understands context, intent, and sentiment",
          detail1: "Multi-language support with 99% accuracy",
          detail2: "Context-aware conversation handling",
          detail3: "Intent recognition and entity extraction",
          detail4: "Sentiment analysis for better responses"
        },
        multiChannel: {
          title: "Multi-Channel Integration",
          desc: "Seamlessly connect across all your communication channels",
          detail1: "Website widget with customizable design",
          detail2: "WhatsApp Business API integration",
          detail3: "Facebook Messenger connectivity",
          detail4: "Custom API for any platform"
        },
        realTime: {
          title: "Real-Time Analytics",
          desc: "Comprehensive insights to optimize your chatbot performance",
          detail1: "Conversation flow analytics",
          detail2: "User engagement metrics",
          detail3: "Performance dashboards",
          detail4: "ROI tracking and reporting"
        },
        security: {
          title: "Enterprise Security",
          desc: "Bank-grade security with global compliance standards",
          detail1: "End-to-end encryption",
          detail2: "GDPR and CCPA compliance",
          detail3: "SOC 2 Type II certified",
          detail4: "Regular security audits"
        },
        deployment: {
          title: "Rapid Deployment",
          desc: "Get your chatbot live in minutes, not months",
          detail1: "5-minute setup process",
          detail2: "Pre-built industry templates",
          detail3: "Drag-and-drop conversation builder",
          detail4: "One-click deployment"
        },
        conversations: {
          title: "Intelligent Conversations",
          desc: "Human-like interactions that understand and respond naturally",
          detail1: "Dynamic response generation",
          detail2: "Conversation memory and context",
          detail3: "Handoff to human agents",
          detail4: "Personalized user experiences"
        }
      },
      comparison: {
        title: "AI Chatbots vs",
        titleHighlight: "Traditional Live Chat",
        subtitle: "See how our AI-powered solution outperforms traditional approaches",
        tableHeader: {
          feature: "Feature",
          traditional: "Traditional Live Chat",
          aiChatbot: "AI Chatbot",
          improvement: "Improvement"
        },
        responseTime: "Response Time",
        availability: "Availability",
        scalability: "Scalability",
        consistency: "Response Consistency",
        costPerInteraction: "Cost per Interaction",
        languageSupport: "Language Support",
        traditional: {
          responseTime: "Minutes to hours",
          availability: "Business hours only",
          scalability: "Limited by staff",
          consistency: "Varies by agent",
          costPerInteraction: "$2-5 per chat",
          languageSupport: "Agent dependent"
        },
        ai: {
          responseTime: "Instant",
          availability: "24/7",
          scalability: "Unlimited",
          consistency: "Always consistent",
          costPerInteraction: "$0.10 per chat",
          languageSupport: "50+ languages"
        },
        improvement: {
          responseTime: "99% faster",
          availability: "3x more coverage",
          scalability: "Unlimited scale",
          consistency: "100% consistent",
          costPerInteraction: "95% cost reduction",
          languageSupport: "50x more languages"
        }
      },
      advanced: {
        title: "Advanced",
        titleHighlight: "Capabilities",
        subtitle: "Professional features for enterprise-grade implementations",
        ai: {
          category: "AI & Machine Learning",
          conversationFlow: {
            name: "Dynamic Conversation Flow",
            desc: "AI-powered conversation paths that adapt based on user responses"
          },
          intentTraining: {
            name: "Intent Training",
            desc: "Continuously improve bot understanding with machine learning"
          },
          autoLearning: {
            name: "Auto-Learning",
            desc: "Bot automatically learns from successful conversations"
          },
          fallbackHandling: {
            name: "Smart Fallback Handling",
            desc: "Graceful handling of unrecognized queries with human handoff"
          }
        },
        integration: {
          category: "Integrations & APIs",
          crm: {
            name: "CRM Integration",
            desc: "Seamlessly sync with Salesforce, HubSpot, and other CRMs"
          },
          ecommerce: {
            name: "E-commerce Platforms",
            desc: "Connect with Shopify, WooCommerce, and major e-commerce systems"
          },
          customApi: {
            name: "Custom API Access",
            desc: "Full REST API access for custom integrations and workflows"
          },
          webhook: {
            name: "Webhook Support",
            desc: "Real-time event notifications and data synchronization"
          }
        },
        analytics: {
          category: "Analytics & Insights",
          conversation: {
            name: "Conversation Analytics",
            desc: "Deep insights into user behavior and conversation patterns"
          },
          performance: {
            name: "Performance Metrics",
            desc: "Track response times, resolution rates, and user satisfaction"
          },
          dashboard: {
            name: "Executive Dashboard",
            desc: "High-level metrics and KPIs for business stakeholders"
          },
          abTesting: {
            name: "A/B Testing",
            desc: "Test different conversation flows to optimize performance"
          }
        }
      },
      demo: {
        title: "Experience Our",
        titleHighlight: "Technology",
        description: "See our AI chatbot in action with an interactive demonstration",
        interactive: {
          title: "Interactive Demo",
          description: "Try our chatbot technology yourself"
        },
        feature1: "Real-time conversation",
        feature2: "Natural language understanding",
        feature3: "Context-aware responses",
        bookDemo: "Book a Demo",
        viewCaseStudies: "View Case Studies"
      }
    },

    // Case Studies page translations
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
      studies: {
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
        luxuryresorts: {
          title: "Hotel Chain Achieves 90% Booking Automation",
          company: "Luxury Resorts Group",
          industry: "Hospitality",
          challenge: "Manual booking process overwhelming staff during peak tourism seasons",
          solution: "Deployed booking automation bot with room recommendations and guest service features",
          testimonial: "Guests can book rooms, request services, and get recommendations instantly. Our occupancy rates have reached all-time highs.",
          author: "Nguyễn Thị Hoa, Operations Manager"
        }
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
        list: {
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
          logistics: "Logistics"
        },
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

    // Contact page translations
    contact: {
      hero: {
        title: "Get in",
        titleHighlight: "Touch",
        description: "Ready to transform your customer conversations? Let's discuss how D2 Group can help you achieve your automation goals. Our experts are standing by to provide personalized guidance."
      },
      features: {
        consultation: {
          title: "Free Consultation",
          description: "Expert guidance tailored to your needs"
        },
        response: {
          title: "24-Hour Response",
          description: "Quick turnaround on all inquiries"
        },
        implementation: {
          title: "Fast Implementation",
          description: "Go live in as little as 48 hours"
        }
      },
      form: {
        title: "Let's Start the",
        titleHighlight: "Conversation",
        subtitle: "Fill out the form below and our team will reach out to you within 24 hours.",
        fields: {
          name: "Full Name",
          email: "Email Address",
          phone: "Phone Number",
          company: "Company Name",
          interest: "Area of Interest",
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
        interests: {
          demo: "Schedule a Product Demo",
          pricing: "Get Pricing Information",
          integration: "Discuss Integration Options",
          enterprise: "Enterprise Solutions",
          support: "Technical Support",
          partnership: "Partnership Opportunities",
          other: "Other"
        },
        submit: "Send Message",
        sending: "Sending...",
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
        title: "Contact",
        titleHighlight: "Information",
        email: {
          title: "Email"
        },
        phone: {
          title: "Phone"
        },
        address: {
          title: "Address",
          line1: "No. 3 Nguyễn Cơ Thạch Street",
          line2: "An Lợi Đông Ward, Thủ Đức City",
          line3: "Ho Chi Minh City, Vietnam"
        },
        hours: {
          title: "Business Hours",
          weekdays: "Monday - Friday: 9:00 AM - 6:00 PM (GMT+7)",
          saturday: "Saturday: 10:00 AM - 2:00 PM (GMT+7)",
          emergency: "Emergency support: 24/7"
        }
      },
      map: {
        title: "Find",
        titleHighlight: "Us"
      },
      thanks: {
        title: "Thank You for Your",
        titleHighlight: "Interest",
        description: "Your message has been received and our team will respond within 24 hours. In the meantime, feel free to connect with us on social media."
      }
    },

    // Pricing page translations
    pricing: {
      hero: {
        title: "Simple, Transparent",
        titleHighlight: "Pricing",
        description: "Choose the perfect plan for your business needs. All plans include our core AI features with no hidden fees.",
        features: {
          trial: "14-day free trial",
          noSetup: "No setup fees",
          cancel: "Cancel anytime"
        }
      },
      mostPopular: "Most Popular",
      plans: {
        starter: {
          name: "Starter",
          period: " VND/month",
          description: "Perfect for small businesses getting started with AI chatbots"
        },
        growth: {
          name: "Growth",
          period: " VND/month",
          description: "Ideal for growing businesses with moderate chat volume"
        },
        business: {
          name: "Business",
          period: " VND/month",
          description: "Advanced features for established businesses with high volume"
        },
        enterprise: {
          name: "Enterprise",
          price: "Contact for Pricing",
          description: "Custom solutions for large organizations with complex needs"
        }
      },
      features: {
        conversations1000: "1,000 Conversations",
        conversations5000: "5,000 Conversations",
        conversations15000: "15,000 Conversations",
        unlimitedConversations: "Unlimited Conversations",
        basicTemplates: "Basic Templates",
        advancedTemplates: "Advanced Templates",
        customDesign: "Custom Design",
        customAI: "Custom AI Training",
        websiteIntegration: "Website Integration",
        multiChannel: "Multi-Channel Support",
        crmIntegration: "CRM Integration",
        customIntegrations: "Custom Integrations",
        emailSupport: "Email Support",
        prioritySupport: "Priority Support",
        phoneSupport: "Phone Support",
        basicAnalytics: "Basic Analytics",
        advancedAnalytics: "Advanced Analytics",
        advancedReporting: "Advanced Reporting",
        workflows5: "5 Workflows",
        unlimitedWorkflows: "Unlimited Workflows",
        standardResponse: "Standard Response Time",
        priorityResponse: "Priority Response Time",
        abTesting: "A/B Testing",
        leadQualification: "Lead Qualification",
        customBranding: "Custom Branding",
        dedicatedManager: "Dedicated Account Manager",
        onPremise: "On-Premise Deployment",
        security: "Enterprise Security",
        slaGuarantees: "SLA Guarantees",
        whiteLabel: "White-Label Solution"
      },
      buttons: {
        getStarted: "Get Started",
        contact: "Contact for Pricing"
      },
      comparison: {
        title: "Pricing",
        titleHighlight: "Comparison",
        subtitle: "Compare all features across our pricing plans.",
        table: {
          features: "Features",
          starter: "Starter",
          growth: "Growth",
          business: "Business",
          enterprise: "Enterprise"
        },
        categories: {
          core: "Core Features",
          channels: "Channels & Integrations"
        },
        features: {
          monthlySessions: "Monthly Chat Sessions",
          template: "Chatbot Template",
          responseTime: "Response Time SLA",
          analytics: "Analytics Dashboard",
          websiteWidget: "Website Widget Integration",
          website: "Website Widget",
          whatsapp: "WhatsApp Business",
          messenger: "Facebook Messenger",
          crm: "CRM Integration",
          api: "Custom API Access"
        }
      },
      faq: {
        title: "Frequently Asked",
        titleHighlight: "Questions",
        subtitle: "Everything you need to know about our pricing and service packages.",
        counting: {
          question: "How are chat sessions counted?",
          answer: "A chat session is counted each time a unique user interacts with your chatbot within a 24-hour window, regardless of the number of messages exchanged."
        },
        upgrade: {
          question: "Can I upgrade or downgrade my plan at any time?",
          answer: "Yes—you can switch plans whenever you like. Upgrades take effect immediately; downgrades apply on your next billing cycle."
        },
        trial: {
          question: "Is there a free trial available?",
          answer: "Yes—we offer a 14-day free trial on all plans. No credit card required, and you can cancel at any time during the trial."
        },
        exceed: {
          question: "What happens if I exceed my chat session limit?",
          answer: "If you go over your monthly quota, additional sessions are billed at VND 3,000 per session. We'll send you a notification as you approach your limit."
        }
      },
      cta: {
        title: "Ready to",
        titleHighlight: "Get Started",
        description: "Start your free trial today and discover how D2 Group's AI chatbots can transform your customer conversations. No credit card required—cancel anytime.",
        buttons: {
          trial: "Start Your Free Trial",
          contact: "Contact Sales"
        },
        help: "Have questions? Our sales team is ready to help you choose the right plan."
      }
    }
  },
  
  vi: {
    // Navigation
    nav: {
      home: "Trang chủ",
      about: "Về chúng tôi",
      features: "Tính năng",
      services: "Dịch vụ",
      useCases: "Ứng dụng",
      caseStudies: "Nghiên cứu trường hợp",
      pricing: "Bảng giá",
      contact: "Liên hệ"
    },

    // Home page translations
    home: {
      hero: {
        title: "Biến đổi cuộc trò chuyện khách hàng",
        titleHighlight: "Công nghệ AI",
        subtitle: "Tăng tương tác lên 10 lần với chatbot thông minh",
        description: "Triển khai chatbot AI tiên tiến chỉ trong 5 phút. Tự động hóa hỗ trợ, thu hút khách hàng tiềm năng và làm hài lòng khách hàng 24/7 với nền tảng AI đối thoại tiên tiến của D2 Group.",
        cta: "Dùng thử miễn phí",
        watchDemo: "Xem Demo"
      },
      stats: {
        conversations: "Cuộc trò chuyện hàng tháng",
        responseTime: "Thời gian phản hồi trung bình",
        satisfaction: "Độ hài lòng khách hàng",
        integration: "Thời gian tích hợp"
      },
      features: {
        title: "Tại sao chọn",
        titleHighlight: "D2 Group",
        subtitle: "Trải nghiệm thế hệ tiếp theo của tương tác khách hàng",
        aiPowered: {
          title: "Trí tuệ nhân tạo tiên tiến",
          description: "NLP tiên tiến hiểu ngữ cảnh và ý định cho cuộc trò chuyện tự nhiên như con người"
        },
        multiChannel: {
          title: "Hỗ trợ đa kênh",
          description: "Tích hợp liền mạch trên website, WhatsApp, Messenger và nhiều hơn nữa"
        },
        realTime: {
          title: "Phân tích thời gian thực",
          description: "Theo dõi hiệu suất, tối ưu hóa cuộc trò chuyện và đo lường ROI ngay lập tức"
        },
        easySetup: {
          title: "Cài đặt 5 phút",
          description: "Khởi động nhanh chóng với giao diện kéo thả trực quan của chúng tôi"
        },
        security: {
          title: "Bảo mật doanh nghiệp",
          description: "Mã hóa cấp ngân hàng và tuân thủ tiêu chuẩn bảo vệ dữ liệu toàn cầu"
        },
        support: {
          title: "Hỗ trợ chuyên gia 24/7",
          description: "Đội ngũ chăm sóc khách hàng tận tâm đảm bảo chatbot hoạt động tối ưu"
        }
      },
      howItWorks: {
        title: "Cách thức",
        titleHighlight: "Hoạt động",
        subtitle: "Khởi chạy chatbot AI chỉ trong vài phút",
        step1: {
          title: "Chọn mẫu của bạn",
          description: "Chọn từ các mẫu chuyên ngành hoặc bắt đầu từ đầu"
        },
        step2: {
          title: "Tùy chỉnh cuộc trò chuyện",
          description: "Huấn luyện bot với giọng điệu thương hiệu và logic kinh doanh của bạn"
        },
        step3: {
          title: "Triển khai mọi nơi",
          description: "Khởi chạy trên tất cả các kênh với triển khai một cú nhấp chuột"
        },
        step4: {
          title: "Theo dõi & Tối ưu",
          description: "Theo dõi hiệu suất và liên tục cải thiện với thông tin chi tiết AI"
        }
      },
      useCases: {
        title: "Hoàn hảo cho mọi",
        titleHighlight: "Ngành nghề",
        subtitle: "Giải pháp tùy chỉnh mang lại kết quả thực tế",
        ecommerce: {
          title: "Thương mại điện tử",
          description: "Tăng doanh số với đề xuất sản phẩm và phục hồi giỏ hàng"
        },
        healthcare: {
          title: "Y tế",
          description: "Sắp xếp lịch hẹn và cung cấp thông tin sức khỏe ngay lập tức"
        },
        finance: {
          title: "Dịch vụ tài chính",
          description: "Tự động hóa dịch vụ khách hàng và cải thiện chất lượng khách hàng tiềm năng"
        },
        education: {
          title: "Giáo dục",
          description: "Hỗ trợ học sinh với trợ giúp học tập 24/7"
        },
        realEstate: {
          title: "Bất động sản",
          description: "Đánh giá khách hàng tiềm năng và lên lịch xem nhà tự động"
        },
        hospitality: {
          title: "Khách sạn",
          description: "Nâng cao trải nghiệm khách với đặt phòng và hỗ trợ ngay lập tức"
        }
      },
      testimonials: {
        title: "Được tin tưởng bởi",
        titleHighlight: "Các nhà lãnh đạo ngành",
        subtitle: "Xem khách hàng nói gì về D2 Group",
        testimonial1: {
          text: "Chatbot của D2 Group đã tăng tỷ lệ chuyển đổi của chúng tôi lên 45% và giảm chi phí hỗ trợ 60%. Việc cài đặt cực kỳ dễ dàng và kết quả ngay lập tức.",
          author: "Sarah Chen, CEO của TechMart"
        },
        testimonial2: {
          text: "AI hiểu hoàn hảo nhu cầu khách hàng của chúng tôi. Chúng tôi đã thấy tăng 300% khách hàng tiềm năng chất lượng kể từ khi triển khai giải pháp của D2 Group.",
          author: "Michael Rodriguez, Trưởng phòng Kinh doanh tại PropertyPro"
        },
        testimonial3: {
          text: "Hỗ trợ khách hàng xuất sắc và sản phẩm thực sự hoạt động như quảng cáo. Điểm hài lòng bệnh nhân của chúng tôi chưa bao giờ cao hơn.",
          author: "Dr. Emily Watson, Giám đốc Y khoa"
        }
      },
      cta: {
        title: "Sẵn sàng biến đổi",
        titleHighlight: "Trải nghiệm khách hàng",
        description: "Tham gia hàng nghìn doanh nghiệp tin tưởng D2 Group để cung cấp năng lượng cho cuộc trò chuyện khách hàng của họ.",
        startButton: "Dùng thử miễn phí",
        contactButton: "Liên hệ bán hàng"
      }
    },

    // About page translations
    about: {
      hero: {
        title: "Tiên phong tương lai của AI đối thoại",
        subtitle: "Được thành lập năm 2019, D2 Group đã đi đầu trong đổi mới AI.",
        description: "Chúng tôi tin rằng mọi doanh nghiệp đều xứng đáng có những cuộc trò chuyện khách hàng thông minh, hiệu quả thúc đẩy tăng trưởng và sự hài lòng."
      },
      stats: {
        clients: "Khách hàng hài lòng",
        countries: "Quốc gia được phục vụ",
        uptime: "Thời gian hoạt động nền tảng"
      },
      mission: {
        title: "Sứ mệnh & Tầm nhìn",
        description: "Chúng tôi có sứ mệnh dân chủ hóa AI và làm cho các cuộc trò chuyện khách hàng thông minh có thể tiếp cận được với các doanh nghiệp thuộc mọi quy mô. Tầm nhìn của chúng tôi là tạo ra một thế giới nơi mọi tương tác khách hàng đều có ý nghĩa, hiệu quả và thú vị.",
        global: {
          title: "Phạm vi toàn cầu",
          desc: "Phục vụ doanh nghiệp trên 12 quốc gia với giải pháp địa phương hóa"
        },
        innovation: {
          title: "Đổi mới liên tục",
          desc: "Đầu tư 40% doanh thu vào R&D để đi trước xu hướng AI"
        },
        security: {
          title: "Bảo mật hàng đầu",
          desc: "Bảo mật cấp doanh nghiệp với đảm bảo hoạt động 99.9%"
        }
      },
      vision: {
        title: "Tầm nhìn của chúng tôi",
        description: "Trở thành nhà lãnh đạo toàn cầu trong AI đối thoại, trao quyền cho mọi doanh nghiệp để mang lại trải nghiệm khách hàng đặc biệt."
      },
      team: {
        title: "Gặp gỡ đội ngũ chuyên gia",
        subtitle: "Một nhóm đa dạng các nhà nghiên cứu AI, kỹ sư và chuyên gia chăm sóc khách hàng tận tâm cho thành công của bạn."
      },
      journey: {
        title: "Hành trình của chúng tôi",
        subtitle: "Từ startup đến nhà lãnh đạo ngành - đây là cách chúng tôi phát triển"
      },
      awards: {
        title: "Công nhận & Giải thưởng",
        subtitle: "Sự công nhận của ngành về đổi mới và xuất sắc của chúng tôi"
      },
      cta: {
        title: "Sẵn sàng tham gia câu chuyện thành công của chúng tôi?",
        description: "Hãy thảo luận về cách D2 Group có thể giúp biến đổi cuộc trò chuyện khách hàng và thúc đẩy tăng trưởng kinh doanh của bạn.",
        getStarted: "Bắt đầu hôm nay",
        scheduleCall: "Đặt lịch cuộc gọi"
      }
    },

    // Features page translations
    features: {
      hero: {
        title: "Tính năng",
        titleHighlight: "Mạnh mẽ",
        titleEnd: "cho doanh nghiệp hiện đại",
        description: "Khám phá bộ công cụ toàn diện được hỗ trợ bởi AI được thiết kế để biến đổi tương tác khách hàng và thúc đẩy tăng trưởng kinh doanh.",
        cta: "Dùng thử miễn phí"
      },
      core: {
        title: "Tính năng",
        titleHighlight: "Cốt lõi",
        subtitle: "Mọi thứ bạn cần để tạo ra cuộc trò chuyện khách hàng thông minh",
        nlp: {
          title: "Xử lý ngôn ngữ tự nhiên tiên tiến",
          desc: "AI hiện đại hiểu ngữ cảnh, ý định và cảm xúc",
          detail1: "Hỗ trợ đa ngôn ngữ với độ chính xác 99%",
          detail2: "Xử lý cuộc trò chuyện nhận biết ngữ cảnh",
          detail3: "Nhận dạng ý định và trích xuất thực thể",
          detail4: "Phân tích cảm xúc để có phản hồi tốt hơn"
        },
        multiChannel: {
          title: "Tích hợp đa kênh",
          desc: "Kết nối liền mạch trên tất cả các kênh giao tiếp của bạn",
          detail1: "Widget website với thiết kế có thể tùy chỉnh",
          detail2: "Tích hợp WhatsApp Business API",
          detail3: "Kết nối Facebook Messenger",
          detail4: "API tùy chỉnh cho bất kỳ nền tảng nào"
        },
        realTime: {
          title: "Phân tích thời gian thực",
          desc: "Thông tin chi tiết toàn diện để tối ưu hóa hiệu suất chatbot",
          detail1: "Phân tích luồng cuộc trò chuyện",
          detail2: "Số liệu tương tác người dùng",
          detail3: "Bảng điều khiển hiệu suất",
          detail4: "Theo dõi và báo cáo ROI"
        },
        security: {
          title: "Bảo mật doanh nghiệp",
          desc: "Bảo mật cấp ngân hàng với tiêu chuẩn tuân thủ toàn cầu",
          detail1: "Mã hóa đầu cuối",
          detail2: "Tuân thủ GDPR và CCPA",
          detail3: "Chứng nhận SOC 2 Type II",
          detail4: "Kiểm tra bảo mật thường xuyên"
        },
        deployment: {
          title: "Triển khai nhanh chóng",
          desc: "Khởi chạy chatbot chỉ trong vài phút, không phải vài tháng",
          detail1: "Quy trình cài đặt 5 phút",
          detail2: "Mẫu ngành được xây dựng sẵn",
          detail3: "Trình tạo cuộc trò chuyện kéo thả",
          detail4: "Triển khai một cú nhấp chuột"
        },
        conversations: {
          title: "Cuộc trò chuyện thông minh",
          desc: "Tương tác giống con người hiểu và phản hồi tự nhiên",
          detail1: "Tạo phản hồi động",
          detail2: "Bộ nhớ và ngữ cảnh cuộc trò chuyện",
          detail3: "Chuyển giao cho nhân viên",
          detail4: "Trải nghiệm người dùng được cá nhân hóa"
        }
      },
      comparison: {
        title: "Chatbot AI so với",
        titleHighlight: "Live Chat truyền thống",
        subtitle: "Xem giải pháp được hỗ trợ AI của chúng tôi vượt trội hơn các phương pháp truyền thống như thế nào",
        tableHeader: {
          feature: "Tính năng",
          traditional: "Live Chat truyền thống",
          aiChatbot: "Chatbot AI",
          improvement: "Cải thiện"
        },
        responseTime: "Thời gian phản hồi",
        availability: "Tình trạng sẵn có",
        scalability: "Khả năng mở rộng",
        consistency: "Tính nhất quán phản hồi",
        costPerInteraction: "Chi phí mỗi tương tác",
        languageSupport: "Hỗ trợ ngôn ngữ",
        traditional: {
          responseTime: "Vài phút đến vài giờ",
          availability: "Chỉ giờ làm việc",
          scalability: "Bị giới hạn bởi nhân viên",
          consistency: "Thay đổi theo nhân viên",
          costPerInteraction: "$2-5 mỗi cuộc trò chuyện",
          languageSupport: "Phụ thuộc vào nhân viên"
        },
        ai: {
          responseTime: "Ngay lập tức",
          availability: "24/7",
          scalability: "Không giới hạn",
          consistency: "Luôn nhất quán",
          costPerInteraction: "$0.10 mỗi cuộc trò chuyện",
          languageSupport: "Hơn 50 ngôn ngữ"
        },
        improvement: {
          responseTime: "Nhanh hơn 99%",
          availability: "Phủ sóng gấp 3 lần",
          scalability: "Mở rộng không giới hạn",
          consistency: "Nhất quán 100%",
          costPerInteraction: "Giảm chi phí 95%",
          languageSupport: "Nhiều hơn 50 lần ngôn ngữ"
        }
      },
      advanced: {
        title: "Khả năng",
        titleHighlight: "Tiên tiến",
        subtitle: "Tính năng chuyên nghiệp cho triển khai cấp doanh nghiệp",
        ai: {
          category: "AI & Machine Learning",
          conversationFlow: {
            name: "Luồng cuộc trò chuyện động",
            desc: "Đường dẫn cuộc trò chuyện được hỗ trợ AI thích ứng dựa trên phản hồi của người dùng"
          },
          intentTraining: {
            name: "Huấn luyện ý định",
            desc: "Liên tục cải thiện hiểu biết bot với machine learning"
          },
          autoLearning: {
            name: "Tự động học",
            desc: "Bot tự động học từ các cuộc trò chuyện thành công"
          },
          fallbackHandling: {
            name: "Xử lý dự phòng thông minh",
            desc: "Xử lý các truy vấn không được nhận dạng một cách khéo léo với chuyển giao con người"
          }
        },
        integration: {
          category: "Tích hợp & APIs",
          crm: {
            name: "Tích hợp CRM",
            desc: "Đồng bộ liền mạch với Salesforce, HubSpot và các CRM khác"
          },
          ecommerce: {
            name: "Nền tảng thương mại điện tử",
            desc: "Kết nối với Shopify, WooCommerce và các hệ thống thương mại điện tử lớn"
          },
          customApi: {
            name: "Truy cập API tùy chỉnh",
            desc: "Truy cập REST API đầy đủ cho tích hợp và quy trình làm việc tùy chỉnh"
          },
          webhook: {
            name: "Hỗ trợ Webhook",
            desc: "Thông báo sự kiện thời gian thực và đồng bộ hóa dữ liệu"
          }
        },
        analytics: {
          category: "Phân tích & Thông tin chi tiết",
          conversation: {
            name: "Phân tích cuộc trò chuyện",
            desc: "Thông tin chi tiết sâu sắc về hành vi người dùng và mẫu cuộc trò chuyện"
          },
          performance: {
            name: "Số liệu hiệu suất",
            desc: "Theo dõi thời gian phản hồi, tỷ lệ giải quyết và sự hài lòng của người dùng"
          },
          dashboard: {
            name: "Bảng điều khiển điều hành",
            desc: "Số liệu và KPI cấp cao cho các bên liên quan kinh doanh"
          },
          abTesting: {
            name: "Kiểm tra A/B",
            desc: "Kiểm tra các luồng cuộc trò chuyện khác nhau để tối ưu hóa hiệu suất"
          }
        }
      },
      demo: {
        title: "Trải nghiệm",
        titleHighlight: "Công nghệ",
        description: "Xem chatbot AI của chúng tôi hoạt động với một cuộc biểu diễn tương tác",
        interactive: {
          title: "Demo tương tác",
          description: "Tự mình thử công nghệ chatbot của chúng tôi"
        },
        feature1: "Cuộc trò chuyện thời gian thực",
        feature2: "Hiểu ngôn ngữ tự nhiên",
        feature3: "Phản hồi nhận biết ngữ cảnh",
        bookDemo: "Đặt lịch Demo",
        viewCaseStudies: "Xem nghiên cứu trường hợp"
      }
    },

    // Case Studies page translations
    caseStudies: {
      hero: {
        title: "Câu chuyện",
        titleHighlight: "Thành công thực tế",
        description: "Khám phá cách các doanh nghiệp thuộc nhiều ngành đã biến đổi trải nghiệm khách hàng và đạt được kết quả đáng kể với giải pháp chatbot AI của D2 Group."
      },
      stats: {
        deployments: "Triển khai thành công",
        conversionIncrease: "Tăng chuyển đổi trung bình",
        costReduction: "Giảm chi phí trung bình",
        support: "Hỗ trợ khách hàng"
      },
      labels: {
        challenge: "Thách thức",
        solution: "Giải pháp",
        results: "Kết quả"
      },
      studies: {
        techmart: {
          title: "Gã khổng lồ thương mại điện tử tăng chuyển đổi 45%",
          company: "TechMart Vietnam",
          industry: "Thương mại điện tử",
          challenge: "Tỷ lệ bỏ giỏ hàng cao và quá tải yêu cầu khách hàng trong mùa cao điểm",
          solution: "Triển khai chatbot AI cho đề xuất sản phẩm, theo dõi đơn hàng và hỗ trợ khách hàng ngay lập tức",
          testimonial: "Chatbot đã biến đổi trải nghiệm khách hàng của chúng tôi. Chúng tôi đang thấy tỷ lệ chuyển đổi cao kỷ lục và đội hỗ trợ có thể tập trung vào các vấn đề phức tạp.",
          author: "Nguyễn Văn Minh, CEO TechMart Vietnam"
        },
        medcare: {
          title: "Nhà cung cấp y tế giảm thời gian chờ 60%",
          company: "MedCare Plus",
          industry: "Y tế",
          challenge: "Thời gian chờ bệnh nhân dài để đặt lịch hẹn và yêu cầu sức khỏe cơ bản",
          solution: "Triển khai bot lập lịch hẹn với kiểm tra triệu chứng và hệ thống thông tin sức khỏe",
          testimonial: "Bệnh nhân của chúng tôi thích phản hồi ngay lập tức cho lịch hẹn và câu hỏi sức khỏe cơ bản. Nó đã cách mạng hóa quy trình chăm sóc bệnh nhân của chúng tôi.",
          author: "BS. Trần Thị Lan, Giám đốc Y khoa"
        },
        vietfinance: {
          title: "Dịch vụ tài chính cải thiện chất lượng khách hàng tiềm năng 80%",
          company: "VietFinance Solutions",
          industry: "Dịch vụ tài chính",
          challenge: "Quy trình đánh giá khách hàng tiềm năng kém và quá trình tuyển dụng khách hàng tốn thời gian",
          solution: "Triển khai bot đánh giá khách hàng tiềm năng thông minh với xử lý tài liệu và tự động hóa KYC",
          testimonial: "Chatbot AI đánh giá khách hàng tiềm năng tốt đến mức đội bán hàng của chúng tôi chỉ nói chuyện với những khách hàng tiềm năng nghiêm túc. Tỷ lệ chuyển đổi của chúng tôi chưa bao giờ cao hơn.",
          author: "Lê Hoàng Nam, Giám đốc Bán hàng"
        },
        edutech: {
          title: "Nền tảng giáo dục tăng sự tham gia của học sinh 70%",
          company: "EduTech Academy",
          industry: "Giáo dục",
          challenge: "Sự tham gia của học sinh thấp và tỷ lệ bỏ học cao trong các khóa học trực tuyến",
          solution: "Tạo bot gia sư AI cho hỗ trợ học sinh 24/7, đề xuất khóa học và theo dõi tiến độ",
          testimonial: "Học sinh có gia sư AI cá nhân có sẵn 24/7. Sự cải thiện trong sự tham gia và tỷ lệ hoàn thành thật đáng chú ý.",
          author: "Phạm Thị Mai, Giám đốc Học thuật"
        },
        propertypro: {
          title: "Đại lý bất động sản tạo ra gấp 3 lần khách hàng tiềm năng chất lượng",
          company: "PropertyPro Vietnam",
          industry: "Bất động sản",
          challenge: "Khó khăn trong việc đánh giá người mua nghiêm túc và quản lý khối lượng lớn yêu cầu bất động sản",
          solution: "Triển khai bot tìm kiếm bất động sản với tour ảo và hệ thống đánh giá người mua",
          testimonial: "Chatbot đánh giá trước người mua và lên lịch xem nhà tự động. Đại lý của chúng tôi bây giờ chỉ dành thời gian với những người mua nghiêm túc.",
          author: "Vũ Minh Tuấn, Giám đốc Điều hành"
        },
        luxuryresorts: {
          title: "Chuỗi khách sạn đạt được 90% tự động hóa đặt phòng",
          company: "Luxury Resorts Group",
          industry: "Khách sạn",
          challenge: "Quy trình đặt phòng thủ công áp đảo nhân viên trong mùa du lịch cao điểm",
          solution: "Triển khai bot tự động hóa đặt phòng với đề xuất phòng và tính năng dịch vụ khách",
          testimonial: "Khách có thể đặt phòng, yêu cầu dịch vụ và nhận đề xuất ngay lập tức. Tỷ lệ lấp đầy của chúng tôi đã đạt mức cao nhất mọi thời đại.",
          author: "Nguyễn Thị Hoa, Quản lý Vận hành"
        }
      },
      metrics: {
        conversionRate: "Tỷ lệ chuyển đổi",
        cartAbandonment: "Bỏ giỏ hàng",
        responseTime: "Thời gian phản hồi",
        customerSatisfaction: "Sự hài lòng của khách hàng",
        waitTimes: "Thời gian chờ",
        appointmentBookings: "Đặt lịch hẹn",
        staffEfficiency: "Hiệu quả nhân viên",
        patientSatisfaction: "Sự hài lòng của bệnh nhân",
        leadQuality: "Chất lượng khách hàng tiềm năng",
        onboardingTime: "Thời gian tuyển dụng",
        processEfficiency: "Hiệu quả quy trình",
        studentEngagement: "Sự tham gia của học sinh",
        courseCompletion: "Hoàn thành khóa học",
        supportQueries: "Truy vấn hỗ trợ",
        studentSatisfaction: "Sự hài lòng của học sinh",
        qualifiedLeads: "Khách hàng tiềm năng đủ điều kiện",
        propertyViews: "Lượt xem bất động sản",
        salesCycle: "Chu kỳ bán hàng",
        agentProductivity: "Năng suất đại lý",
        bookingAutomation: "Tự động hóa đặt phòng",
        staffWorkload: "Khối lượng công việc nhân viên",
        bookingConversion: "Chuyển đổi đặt phòng",
        guestSatisfaction: "Sự hài lòng của khách"
      },
      industries: {
        title: "Các ngành chúng tôi",
        titleHighlight: "Phục vụ",
        subtitle: "Thành công đã được chứng minh trên nhiều lĩnh vực kinh doanh đa dạng",
        list: {
          ecommerce: "Thương mại điện tử",
          healthcare: "Y tế",
          finance: "Tài chính",
          education: "Giáo dục",
          realEstate: "Bất động sản",
          hospitality: "Khách sạn",
          retail: "Bán lẻ",
          automotive: "Ô tô",
          insurance: "Bảo hiểm",
          manufacturing: "Sản xuất",
          travel: "Du lịch",
          logistics: "Logistics"
        },
        metrics: {
          ecommerce: "+45% Doanh số",
          healthcare: "-60% Thời gian chờ",
          finance: "+80% Chất lượng khách hàng tiềm năng",
          education: "+70% Sự tham gia",
          realEstate: "+300% Khách hàng tiềm năng",
          hospitality: "90% Tự động hóa",
          retail: "+35% Chuyển đổi",
          automotive: "+50% Hiệu quả",
          insurance: "+25% Khiếu nại",
          manufacturing: "+40% Hỗ trợ",
          travel: "+55% Đặt chỗ",
          logistics: "+30% Theo dõi"
        }
      },
      cta: {
        title: "Sẵn sàng viết",
        titleHighlight: "Câu chuyện thành công",
        description: "Tham gia hàng trăm doanh nghiệp thành công đã biến đổi trải nghiệm khách hàng với D2 Group. Hãy thảo luận cách chúng tôi có thể mang lại kết quả tương tự cho tổ chức của bạn.",
        startButton: "Bắt đầu câu chuyện thành công của bạn",
        pricingButton: "Xem bảng giá"
      }
    },

    // Contact page translations
    contact: {
      hero: {
        title: "Liên hệ",
        titleHighlight: "với chúng tôi",
        description: "Sẵn sàng biến đổi cuộc trò chuyện khách hàng của bạn? Hãy thảo luận cách D2 Group có thể giúp bạn đạt được mục tiêu tự động hóa. Các chuyên gia của chúng tôi đang sẵn sàng cung cấp hướng dẫn cá nhân hóa."
      },
      features: {
        consultation: {
          title: "Tư vấn miễn phí",
          description: "Hướng dẫn chuyên gia phù hợp với nhu cầu của bạn"
        },
        response: {
          title: "Phản hồi trong 24 giờ",
          description: "Xử lý nhanh chóng tất cả các yêu cầu"
        },
        implementation: {
          title: "Triển khai nhanh",
          description: "Khởi chạy chỉ trong 48 giờ"
        }
      },
      form: {
        title: "Hãy bắt đầu",
        titleHighlight: "Cuộc trò chuyện",
        subtitle: "Điền vào biểu mẫu dưới đây và đội ngũ của chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ.",
        fields: {
          name: "Họ và tên",
          email: "Địa chỉ email",
          phone: "Số điện thoại",
          company: "Tên công ty",
          interest: "Lĩnh vực quan tâm",
          message: "Tin nhắn"
        },
        placeholders: {
          name: "Nguyễn Văn A",
          email: "nguyen@congty.com",
          phone: "+84 909 123 456",
          company: "Công ty ABC",
          interest: "Chúng tôi có thể giúp gì cho bạn?",
          message: "Hãy cho chúng tôi biết về nhu cầu kinh doanh, thách thức hiện tại hoặc bất kỳ câu hỏi cụ thể nào bạn có..."
        },
        interests: {
          demo: "Lên lịch demo sản phẩm",
          pricing: "Nhận thông tin giá",
          integration: "Thảo luận tùy chọn tích hợp",
          enterprise: "Giải pháp doanh nghiệp",
          support: "Hỗ trợ kỹ thuật",
          partnership: "Cơ hội đối tác",
          other: "Khác"
        },
        submit: "Gửi tin nhắn",
        sending: "Đang gửi...",
        privacy: "Bằng cách gửi biểu mẫu này, bạn đồng ý với Chính sách bảo mật và Điều khoản dịch vụ của chúng tôi.",
        success: {
          title: "Cảm ơn bạn đã quan tâm!",
          description: "Chúng tôi sẽ liên hệ lại với bạn trong vòng 24 giờ. Hãy kiểm tra email để xác nhận."
        },
        error: {
          title: "Oops! Đã xảy ra lỗi",
          description: "Không thể gửi biểu mẫu. Vui lòng thử lại hoặc liên hệ chúng tôi trực tiếp qua email."
        }
      },
      info: {
        title: "Thông tin",
        titleHighlight: "Liên hệ",
        email: {
          title: "Email"
        },
        phone: {
          title: "Điện thoại"
        },
        address: {
          title: "Địa chỉ",
          line1: "Số 3 đường Nguyễn Cơ Thạch",
          line2: "Phường An Lợi Đông, Thành phố Thủ Đức",
          line3: "Thành phố Hồ Chí Minh, Việt Nam"
        },
        hours: {
          title: "Giờ làm việc",
          weekdays: "Thứ 2 - Thứ 6: 9:00 AM - 6:00 PM (GMT+7)",
          saturday: "Thứ 7: 10:00 AM - 2:00 PM (GMT+7)",
          emergency: "Hỗ trợ khẩn cấp: 24/7"
        }
      },
      map: {
        title: "Tìm",
        titleHighlight: "chúng tôi"
      },
      thanks: {
        title: "Cảm ơn bạn đã",
        titleHighlight: "Quan tâm",
        description: "Tin nhắn của bạn đã được nhận và đội ngũ của chúng tôi sẽ phản hồi trong vòng 24 giờ. Trong thời gian chờ đợi, hãy kết nối với chúng tôi trên mạng xã hội."
      }
    },

    // Pricing page translations
    pricing: {
      hero: {
        title: "Giá cả đơn giản,",
        titleHighlight: "Minh bạch",
        description: "Chọn gói hoàn hảo cho nhu cầu kinh doanh của bạn. Tất cả các gói bao gồm các tính năng AI cốt lõi của chúng tôi mà không có phí ẩn.",
        features: {
          trial: "Dùng thử miễn phí 14 ngày",
          noSetup: "Không phí thiết lập",
          cancel: "Hủy bất cứ lúc nào"
        }
      },
      mostPopular: "Phổ biến nhất",
      plans: {
        starter: {
          name: "Khởi đầu",
          period: " VND/tháng",
          description: "Hoàn hảo cho các doanh nghiệp nhỏ bắt đầu với chatbot AI"
        },
        growth: {
          name: "Tăng trưởng",
          period: " VND/tháng",
          description: "Lý tưởng cho các doanh nghiệp đang phát triển với khối lượng trò chuyện vừa phải"
        },
        business: {
          name: "Doanh nghiệp",
          period: " VND/tháng",
          description: "Tính năng nâng cao cho các doanh nghiệp thành lập với khối lượng cao"
        },
        enterprise: {
          name: "Doanh nghiệp lớn",
          price: "Liên hệ để biết giá",
          description: "Giải pháp tùy chỉnh cho các tổ chức lớn có nhu cầu phức tạp"
        }
      },
      features: {
        conversations1000: "1.000 Cuộc trò chuyện",
        conversations5000: "5.000 Cuộc trò chuyện",
        conversations15000: "15.000 Cuộc trò chuyện",
        unlimitedConversations: "Cuộc trò chuyện không giới hạn",
        basicTemplates: "Mẫu cơ bản",
        advancedTemplates: "Mẫu nâng cao",
        customDesign: "Thiết kế tùy chỉnh",
        customAI: "Huấn luyện AI tùy chỉnh",
        websiteIntegration: "Tích hợp website",
        multiChannel: "Hỗ trợ đa kênh",
        crmIntegration: "Tích hợp CRM",
        customIntegrations: "Tích hợp tùy chỉnh",
        emailSupport: "Hỗ trợ email",
        prioritySupport: "Hỗ trợ ưu tiên",
        phoneSupport: "Hỗ trợ điện thoại",
        basicAnalytics: "Phân tích cơ bản",
        advancedAnalytics: "Phân tích nâng cao",
        advancedReporting: "Báo cáo nâng cao",
        workflows5: "5 Quy trình làm việc",
        unlimitedWorkflows: "Quy trình làm việc không giới hạn",
        standardResponse: "Thời gian phản hồi tiêu chuẩn",
        priorityResponse: "Thời gian phản hồi ưu tiên",
        abTesting: "Kiểm tra A/B",
        leadQualification: "Đánh giá khách hàng tiềm năng",
        customBranding: "Thương hiệu tùy chỉnh",
        dedicatedManager: "Quản lý tài khoản chuyên dụng",
        onPremise: "Triển khai tại chỗ",
        security: "Bảo mật doanh nghiệp",
        slaGuarantees: "Đảm bảo SLA",
        whiteLabel: "Giải pháp nhãn trắng"
      },
      buttons: {
        getStarted: "Bắt đầu",
        contact: "Liên hệ để biết giá"
      },
      comparison: {
        title: "So sánh",
        titleHighlight: "Giá cả",
        subtitle: "So sánh tất cả tính năng trên các gói giá của chúng tôi.",
        table: {
          features: "Tính năng",
          starter: "Khởi đầu",
          growth: "Tăng trưởng",
          business: "Doanh nghiệp",
          enterprise: "Doanh nghiệp lớn"
        },
        categories: {
          core: "Tính năng cốt lõi",
          channels: "Kênh & Tích hợp"
        },
        features: {
          monthlySessions: "Phiên trò chuyện hàng tháng",
          template: "Mẫu chatbot",
          responseTime: "SLA thời gian phản hồi",
          analytics: "Bảng điều khiển phân tích",
          websiteWidget: "Tích hợp widget website",
          website: "Widget website",
          whatsapp: "WhatsApp Business",
          messenger: "Facebook Messenger",
          crm: "Tích hợp CRM",
          api: "Truy cập API tùy chỉnh"
        }
      },
      faq: {
        title: "Câu hỏi",
        titleHighlight: "Thường gặp",
        subtitle: "Mọi thứ bạn cần biết về giá cả và gói dịch vụ của chúng tôi.",
        counting: {
          question: "Phiên trò chuyện được tính như thế nào?",
          answer: "Một phiên trò chuyện được tính mỗi khi người dùng duy nhất tương tác với chatbot của bạn trong khung thời gian 24 giờ, bất kể số lượng tin nhắn được trao đổi."
        },
        upgrade: {
          question: "Tôi có thể nâng cấp hoặc hạ cấp gói bất cứ lúc nào không?",
          answer: "Có—bạn có thể chuyển đổi gói bất cứ khi nào bạn muốn. Nâng cấp có hiệu lực ngay lập tức; hạ cấp áp dụng vào chu kỳ thanh toán tiếp theo của bạn."
        },
        trial: {
          question: "Có bản dùng thử miễn phí không?",
          answer: "Có—chúng tôi cung cấp bản dùng thử miễn phí 14 ngày cho tất cả các gói. Không cần thẻ tín dụng và bạn có thể hủy bất cứ lúc nào trong thời gian dùng thử."
        },
        exceed: {
          question: "Điều gì xảy ra nếu tôi vượt quá giới hạn phiên trò chuyện?",
          answer: "Nếu bạn vượt quá hạn ngạch hàng tháng, các phiên bổ sung sẽ được tính phí 3.000 VND mỗi phiên. Chúng tôi sẽ gửi thông báo khi bạn gần đạt giới hạn."
        }
      },
      cta: {
        title: "Sẵn sàng",
        titleHighlight: "Bắt đầu",
        description: "Bắt đầu dùng thử miễn phí ngay hôm nay và khám phá cách chatbot AI của D2 Group có thể biến đổi cuộc trò chuyện khách hàng của bạn. Không cần thẻ tín dụng—hủy bất cứ lúc nào.",
        buttons: {
          trial: "Bắt đầu dùng thử miễn phí",
          contact: "Liên hệ bán hàng"
        },
        help: "Có câu hỏi? Đội bán hàng của chúng tôi sẵn sàng giúp bạn chọn gói phù hợp."
      }
    }
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
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
