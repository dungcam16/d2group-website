
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TestimonialAvatar from "@/components/TestimonialAvatar";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Carousel images for hero section
  const heroImages = [
    {
      type: "mockup",
      content: (
        <div className="relative mx-auto w-72 h-96">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl">
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-ai-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">AI</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="flex-1 space-y-4 overflow-hidden">
                <div className="flex items-start space-x-3 animate-fade-in">
                  <div className="w-8 h-8 bg-ai-blue rounded-full flex-shrink-0"></div>
                  <div className="bg-gray-700 rounded-2xl p-3 max-w-[200px]">
                    <p className="text-white text-sm">Chào bạn! Tôi có thể giúp gì cho bạn hôm nay?</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 justify-end animate-fade-in" style={{animationDelay: '1s'}}>
                  <div className="bg-ai-blue rounded-2xl p-3 max-w-[200px]">
                    <p className="text-white text-sm">Tôi muốn tìm hiểu về sản phẩm chatbot</p>
                  </div>
                  <div className="w-8 h-8 bg-gray-500 rounded-full flex-shrink-0"></div>
                </div>
                
                <div className="flex items-start space-x-3 animate-fade-in" style={{animationDelay: '2s'}}>
                  <div className="w-8 h-8 bg-ai-blue rounded-full flex-shrink-0"></div>
                  <div className="bg-gray-700 rounded-2xl p-3 max-w-[200px]">
                    <p className="text-white text-sm">Tuyệt vời! Để tôi giới thiệu các gói dịch vụ phù hợp...</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 animate-fade-in" style={{animationDelay: '3s'}}>
                  <div className="w-8 h-8 bg-ai-blue rounded-full flex-shrink-0"></div>
                  <div className="bg-gradient-to-r from-ai-blue to-ai-purple rounded-2xl p-3 max-w-[200px]">
                    <p className="text-white text-sm">🎯 Gói Growth phù hợp nhất với nhu cầu của bạn!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      type: "animation",
      content: (
        <div className="relative">
          <div className="w-80 h-80 mx-auto bg-ai-gradient rounded-full opacity-20 animate-pulse-glow"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="glass rounded-3xl p-8 w-72 space-y-4">
              <div className="flex items-center space-x-3 chat-bubble">
                <div className="w-8 h-8 bg-ai-blue rounded-full"></div>
                <div className="flex-1 bg-gray-100 rounded-lg p-3">
                  <p className="text-sm">24/7 hỗ trợ khách hàng</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 chat-bubble">
                <div className="flex-1 bg-ai-blue text-white rounded-lg p-3 ml-auto">
                  <p className="text-sm">Tự động chốt đơn</p>
                </div>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              </div>
              <div className="flex items-center space-x-3 chat-bubble">
                <div className="w-8 h-8 bg-ai-blue rounded-full"></div>
                <div className="flex-1 bg-gray-100 rounded-lg p-3">
                  <p className="text-sm">Tích hợp đa kênh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "Tương tác thông minh",
      description: "Chatbot hiểu ngữ cảnh, trả lời tự nhiên như con người thực sự",
      icon: "🧠",
    },
    {
      title: "Triển khai tức thì", 
      description: "Cấu hình nhanh trong 5 phút, không cần code hay kỹ thuật phức tạp",
      icon: "⚡",
    },
    {
      title: "Phân tích & báo cáo",
      description: "Dashboard real-time đo lường hiệu quả, ROI và insights khách hàng",
      icon: "📊",
    },
  ];

  const testimonials = [
    {
      name: "Nguyễn Văn Quang",
      company: "CEO, TechStore Vietnam",
      content: "D2 Group đã giúp chúng tôi tăng 40% tỷ lệ chốt đơn chỉ sau 2 tháng triển khai chatbot. Rất ấn tượng!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      fallback: "NQ"
    },
    {
      name: "Trần Thị Hồng", 
      company: "Marketing Director, EduTech",
      content: "Chatbot AI của D2 Group đã cách mạng hóa cách chúng tôi tương tác với học viên. Tiết kiệm 60% thời gian hỗ trợ.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5ab?w=150&h=150&fit=crop&crop=face",
      fallback: "TH"
    },
    {
      name: "Lê Minh Cường",
      company: "Founder, HealthCare Plus", 
      content: "Dịch vụ tận tâm, công nghệ hiện đại. Chatbot hiểu được cả những câu hỏi phức tạp về y tế.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      fallback: "LC"
    }
  ];

  const useCases = [
    {
      industry: "Thương mại điện tử",
      improvement: "+40% tỷ lệ chốt đơn",
      description: "Tự động tư vấn sản phẩm, xử lý đơn hàng và hỗ trợ thanh toán 24/7",
      icon: "🛒"
    },
    {
      industry: "Khách sạn & Du lịch", 
      improvement: "-50% thời gian xử lý",
      description: "Booking tự động, check-in/out, gợi ý dịch vụ cá nhân hóa",
      icon: "🏨"
    },
    {
      industry: "Giáo dục",
      improvement: "+35% tương tác",
      description: "Hỗ trợ học tập, đăng ký khóa học, giải đáp thắc mắc học viên",
      icon: "🎓"
    }
  ];

  const deploymentPartners = [
    { name: "Vingroup", logo: "🏢" },
    { name: "FPT Corporation", logo: "💼" },
    { name: "Vietcombank", logo: "🏦" },
    { name: "Saigon Co.op", logo: "🛒" },
    { name: "Vinamilk", logo: "🥛" },
    { name: "VNG Corporation", logo: "📱" }
  ];

  const faqs = [
    {
      question: "Chatbot có thể tích hợp với website hiện tại không?",
      answer: "Có, chatbot của chúng tôi có thể tích hợp dễ dàng với mọi website, CRM và hệ thống hiện tại chỉ với vài dòng code."
    },
    {
      question: "Mất bao lâu để triển khai chatbot?",
      answer: "Thông thường chỉ cần 5-10 phút để cài đặt cơ bản. Đối với các tùy chỉnh nâng cao, chúng tôi hỗ trợ trong vòng 24-48 giờ."
    },
    {
      question: "Chatbot có hỗ trợ tiếng Việt không?",
      answer: "Có, chatbot của chúng tôi được tối ưu đặc biệt cho tiếng Việt với khả năng hiểu ngữ cảnh và trả lời tự nhiên."
    },
    {
      question: "Chi phí vận hành hàng tháng như thế nào?",
      answer: "Chi phí phụ thuộc vào gói dịch vụ bạn chọn, bắt đầu từ 2.9 triệu VNĐ/tháng cho gói Starter."
    }
  ];

  const handleCTAClick = () => {
    navigate('/contact');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-ai-gradient-soft relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">Tự động hóa</span><br />
                tương tác khách hàng<br />
                với <span className="gradient-text">AI Chatbot</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg">
                24/7 tư vấn, cá nhân hoá và chốt đơn tự động
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={handleCTAClick} className="bg-ai-orange hover:bg-ai-orange/90 text-white font-semibold px-8 py-4 text-lg">
                  Dùng thử miễn phí
                </Button>
                <Button size="lg" variant="outline" onClick={handleCTAClick} className="border-ai-blue text-ai-blue hover:bg-ai-blue hover:text-white px-8 py-4 text-lg">
                  Xem Demo
                </Button>
              </div>
            </div>

            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                {heroImages[currentImage].content}
                
                {/* Carousel Controls */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImage ? 'bg-ai-blue' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={() => setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <button
                  onClick={() => setCurrentImage((prev) => (prev + 1) % heroImages.length)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              Tại sao chọn D2 Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Với công nghệ AI tiên tiến và kinh nghiệm trong ngành, chúng tôi mang đến giải pháp chatbot hoàn hảo cho doanh nghiệp của bạn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-6 group-hover:animate-float">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-ai-blue transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              Ứng dụng thực tế
            </h2>
            <p className="text-xl text-gray-600">
              Khám phá cách AI Chatbot đã thay đổi cách các doanh nghiệp tương tác với khách hàng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-6">{useCase.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{useCase.industry}</h3>
                  <div className="text-3xl font-bold text-ai-blue mb-4">{useCase.improvement}</div>
                  <p className="text-gray-600">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              Khách hàng nói gì về chúng tôi
            </h2>
            <p className="text-xl text-gray-600">
              Hơn 500+ doanh nghiệp tin tướng và sử dụng giải pháp AI Chatbot của D2 Group
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-ai-blue mb-4" />
                  <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.content}</p>
                  <div className="flex items-center">
                    <TestimonialAvatar 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fallback={testimonial.fallback}
                    />
                    <div className="ml-4">
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              Khách hàng triển khai
            </h2>
            <p className="text-gray-600">
              Các tổ chức hàng đầu đã tin tưởng triển khai giải pháp của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            {deploymentPartners.map((partner, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                  {partner.logo}
                </div>
                <p className="text-gray-600 text-sm font-semibold">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              Câu hỏi thường gặp
            </h2>
            <p className="text-xl text-gray-600">
              Những thắc mắc phổ biến về giải pháp AI Chatbot
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-ai-blue">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-20 bg-ai-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              Xem AI Chatbot hoạt động
            </h2>
            <p className="text-xl text-gray-600">
              Video demo 2 phút để hiểu cách chatbot của chúng tôi tương tác với khách hàng
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-900 rounded-2xl shadow-2xl relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-ai-gradient opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-l-[12px] border-l-ai-blue border-y-[8px] border-y-transparent ml-1"></div>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Demo: AI Chatbot trong thực tế</h3>
                <p className="text-white/80">2:30 phút • D2 Group</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ai-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Sẵn sàng tự động hóa tương tác khách hàng?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Bắt đầu dùng thử miễn phí 14 ngày. Không cần thẻ tín dụng, thiết lập trong 5 phút.
          </p>
          <Button size="lg" onClick={handleCTAClick} className="bg-ai-orange hover:bg-ai-orange/90 text-white font-semibold px-8 py-4 text-lg">
            Bắt đầu miễn phí ngay
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
