import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    // ... keep existing code (nav, home, about, services, features, useCases)

    // Case Studies translations
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

    // Pricing translations
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
    }
  },
  vi: {
    // ... keep existing code (nav, home, about, services, features, useCases)

    // Case Studies translations
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
          finance: "+80% Chất Lượng Khách Hàng",
          education: "+70% Tham Gia",
          realEstate: "+300% Khách Hàng Tiềm Năng",
          hospitality: "90% Tự Động Hóa",
          retail: "+35% Chuyển Đổi",
          automotive: "+50% Hiệu Quả",
          insurance: "+25% Bồi Thường",
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

    // Pricing translations
    pricing: {
      title: "Bảng Giá Minh Bạch Đơn Giản",
      subtitle: "Chọn gói hoàn hảo cho nhu cầu kinh doanh của bạn. Tất cả gói đều bao gồm các tính năng chatbot AI cốt lõi với các giới hạn và mức hỗ trợ khác nhau.",
      month: "/tháng",
      freeTrial: "Dùng thử 14 ngày miễn phí",
      noSetupFees: "Không phí thiết lập",
      cancelAnytime: "Hủy bất cứ lúc nào",
      mostPopular: "Phổ Biến Nhất",
      contactPricing: "Liên lạc",
      contactForPricing: "Liên Hệ Để Biết Giá",
      getStarted: "Bắt Đầu",
      starter: "Khởi Đầu",
      growth: "Phát Triển", 
      business: "Doanh Nghiệp",
      enterprise: "Doanh Nghiệp Lớn"
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
