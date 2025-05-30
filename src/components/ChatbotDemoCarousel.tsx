
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ShoppingCart, Calendar, HeadphonesIcon, HelpCircle, Globe, CreditCard, Target, Package } from 'lucide-react';

interface ChatMessage {
  sender: 'user' | 'bot';
  message: string;
  time: string;
}

interface DemoScenario {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  messages: ChatMessage[];
  features: string[];
}

const ChatbotDemoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animatingMessages, setAnimatingMessages] = useState<{[key: string]: number}>({});
  const [isPlaying, setIsPlaying] = useState(true);

  const scenarios: DemoScenario[] = [
    {
      id: 'ecommerce',
      title: 'E-commerce Support',
      subtitle: 'Hỗ trợ mua sắm trực tuyến',
      icon: <ShoppingCart className="w-6 h-6" />,
      color: 'bg-green-500',
      messages: [
        { sender: 'user', message: 'Tôi muốn tìm áo thun nam size L', time: '14:30' },
        { sender: 'bot', message: 'Chào bạn! Tôi có thể giúp bạn tìm áo thun nam size L. Bạn có màu sắc ưa thích không?', time: '14:30' },
        { sender: 'user', message: 'Màu đen hoặc trắng', time: '14:31' },
        { sender: 'bot', message: 'Tôi tìm thấy 15 sản phẩm phù hợp. Giá từ 200k-500k. Bạn muốn xem top 3 sản phẩm bán chạy nhất không?', time: '14:31' }
      ],
      features: ['Tìm kiếm sản phẩm thông minh', 'Gợi ý dựa trên sở thích', 'So sánh giá tự động']
    },
    {
      id: 'booking',
      title: 'Booking & Scheduling',
      subtitle: 'Đặt lịch hẹn tự động',
      icon: <Calendar className="w-6 h-6" />,
      color: 'bg-blue-500',
      messages: [
        { sender: 'user', message: 'Tôi muốn đặt lịch cắt tóc', time: '09:15' },
        { sender: 'bot', message: 'Xin chào! Bạn muốn đặt lịch vào ngày nào? Tôi có thể kiểm tra lịch trống cho bạn.', time: '09:15' },
        { sender: 'user', message: 'Thứ 7 tuần này được không?', time: '09:16' },
        { sender: 'bot', message: 'Thứ 7 (23/12) có các khung giờ: 9:00, 14:30, 16:00. Bạn chọn giờ nào?', time: '09:16' }
      ],
      features: ['Kiểm tra lịch real-time', 'Đặt lịch tự động', 'Nhắc nhở qua SMS/Email']
    },
    {
      id: 'support',
      title: 'Customer Support',
      subtitle: 'Hỗ trợ khách hàng 24/7',
      icon: <HeadphonesIcon className="w-6 h-6" />,
      color: 'bg-purple-500',
      messages: [
        { sender: 'user', message: 'Đơn hàng của tôi chưa được giao', time: '22:45' },
        { sender: 'bot', message: 'Tôi sẽ kiểm tra đơn hàng cho bạn. Vui lòng cung cấp mã đơn hàng.', time: '22:45' },
        { sender: 'user', message: 'DH123456789', time: '22:46' },
        { sender: 'bot', message: 'Đơn hàng DH123456789 đang được vận chuyển, dự kiến giao ngày mai 15:00. Bạn có thể theo dõi tại: bit.ly/track123', time: '22:46' }
      ],
      features: ['Tra cứu đơn hàng', 'Xử lý khiếu nại', 'Chuyển tiếp nhân viên']
    },
    {
      id: 'faq',
      title: 'FAQ & Information',
      subtitle: 'Trả lời câu hỏi thường gặp',
      icon: <HelpCircle className="w-6 h-6" />,
      color: 'bg-orange-500',
      messages: [
        { sender: 'user', message: 'Chính sách đổi trả như thế nào?', time: '16:20' },
        { sender: 'bot', message: 'Chính sách đổi trả của chúng tôi:\n• Trong vòng 7 ngày\n• Sản phẩm còn nguyên tem mác\n• Có hóa đơn mua hàng', time: '16:20' },
        { sender: 'user', message: 'Phí ship đổi trả bao nhiêu?', time: '16:21' },
        { sender: 'bot', message: 'Miễn phí ship đổi trả cho đơn hàng trên 500k. Dưới 500k phí ship 30k.', time: '16:21' }
      ],
      features: ['Knowledge Base thông minh', 'Cập nhật thông tin real-time', 'Liên kết tài liệu']
    },
    {
      id: 'multilingual',
      title: 'Multilingual Support',
      subtitle: 'Hỗ trợ đa ngôn ngữ',
      icon: <Globe className="w-6 h-6" />,
      color: 'bg-indigo-500',
      messages: [
        { sender: 'user', message: 'Hello, I need help with my order', time: '11:30' },
        { sender: 'bot', message: 'Hello! I can help you with your order. May I have your order number please?', time: '11:30' },
        { sender: 'user', message: 'Can you speak Vietnamese?', time: '11:31' },
        { sender: 'bot', message: 'Vâng, tôi có thể nói tiếng Việt. Bạn cần hỗ trợ gì ạ?', time: '11:31' }
      ],
      features: ['Nhận diện ngôn ngữ tự động', 'Hỗ trợ 50+ ngôn ngữ', 'Dịch thuật real-time']
    },
    {
      id: 'payment',
      title: 'Payment Processing',
      subtitle: 'Xử lý thanh toán thông minh',
      icon: <CreditCard className="w-6 h-6" />,
      color: 'bg-red-500',
      messages: [
        { sender: 'user', message: 'Tôi muốn thanh toán đơn hàng', time: '13:15' },
        { sender: 'bot', message: 'Tôi sẽ hướng dẫn bạn thanh toán. Phương thức thanh toán: Banking, Momo, ZaloPay. Bạn chọn gì?', time: '13:15' },
        { sender: 'user', message: 'Banking', time: '13:16' },
        { sender: 'bot', message: 'Thông tin chuyển khoản:\nSTK: 1234567890\nNội dung: DH123456\nSố tiền: 450,000 VNĐ\nTôi sẽ xác nhận sau khi nhận được tiền.', time: '13:16' }
      ],
      features: ['Tích hợp gateway thanh toán', 'Xác nhận tự động', 'Bảo mật cao']
    },
    {
      id: 'leads',
      title: 'Lead Generation',
      subtitle: 'Thu thập thông tin khách hàng',
      icon: <Target className="w-6 h-6" />,
      color: 'bg-pink-500',
      messages: [
        { sender: 'bot', message: 'Chào bạn! Bạn có quan tâm đến khóa học Marketing Digital không?', time: '10:00' },
        { sender: 'user', message: 'Có, tôi muốn tìm hiểu', time: '10:01' },
        { sender: 'bot', message: 'Tuyệt vời! Để tôi gửi bạn thông tin chi tiết, có thể cho tôi email và số điện thoại không?', time: '10:01' },
        { sender: 'user', message: 'Email: john@email.com, SĐT: 0123456789', time: '10:02' }
      ],
      features: ['Thu thập lead tự động', 'Phân loại khách hàng tiềm năng', 'Tích hợp CRM']
    },
    {
      id: 'recommendations',
      title: 'Product Recommendations',
      subtitle: 'Gợi ý sản phẩm thông minh',
      icon: <Package className="w-6 h-6" />,
      color: 'bg-teal-500',
      messages: [
        { sender: 'user', message: 'Tôi vừa mua iPhone 15, cần gì thêm không?', time: '15:30' },
        { sender: 'bot', message: 'Chúc mừng bạn! Với iPhone 15, tôi gợi ý:\n• Ốp lưng MagSafe\n• Sạc nhanh 20W\n• AirPods Pro', time: '15:30' },
        { sender: 'user', message: 'Ốp lưng có màu nào?', time: '15:31' },
        { sender: 'bot', message: 'Có 6 màu: Đen, Trắng, Xanh Navy, Hồng, Tím, Trong suốt. Màu nào bạn thích nhất?', time: '15:31' }
      ],
      features: ['AI recommendations', 'Phân tích hành vi mua', 'Cross-selling thông minh']
    }
  ];

  // Auto-scroll every 10 seconds (increased from 6)
  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % scenarios.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [scenarios.length, isPlaying]);

  // Animate messages for current scenario with improved timing
  useEffect(() => {
    const currentScenario = scenarios[currentSlide];
    if (currentScenario) {
      setAnimatingMessages({});
      
      // Reset and start new animation sequence
      const animationSequence = async () => {
        for (let index = 0; index < currentScenario.messages.length; index++) {
          await new Promise(resolve => {
            setTimeout(() => {
              setAnimatingMessages(prev => ({
                ...prev,
                [`${currentScenario.id}-${index}`]: index
              }));
              resolve(undefined);
            }, index * 1500); // Increased timing between messages
          });
        }
      };
      
      animationSequence();
    }
  }, [currentSlide, scenarios]);

  const currentScenario = scenarios[currentSlide];

  return (
    <div className="max-w-6xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent>
          {scenarios.map((scenario, index) => (
            <CarouselItem key={scenario.id}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* iPhone Mockup */}
                <div className="flex justify-center">
                  <div className="relative">
                    {/* iPhone Frame */}
                    <div className="w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
                      <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                        {/* Status Bar */}
                        <div className="bg-gray-50 px-6 py-3 flex justify-between items-center text-sm">
                          <span className="font-medium">9:41</span>
                          <div className="flex space-x-1">
                            <div className="w-4 h-2 bg-black rounded-sm"></div>
                            <div className="w-4 h-2 bg-black rounded-sm"></div>
                            <div className="w-6 h-2 bg-black rounded-sm"></div>
                          </div>
                        </div>
                        
                        {/* Chat Header */}
                        <div className={`${scenario.color} px-6 py-4 flex items-center space-x-3`}>
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            {scenario.icon}
                          </div>
                          <div className="text-white">
                            <div className="font-semibold">AI Assistant</div>
                            <div className="text-xs opacity-90">Online</div>
                          </div>
                        </div>
                        
                        {/* Chat Messages */}
                        <div className="flex-1 p-4 space-y-3 h-[400px] overflow-y-auto bg-gray-50">
                          {scenario.messages.map((message, msgIndex) => {
                            const isVisible = animatingMessages[`${scenario.id}-${msgIndex}`] !== undefined;
                            return (
                              <div
                                key={msgIndex}
                                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} transition-all duration-500 ${
                                  isVisible 
                                    ? 'opacity-100 translate-y-0' 
                                    : 'opacity-0 translate-y-4'
                                }`}
                              >
                                <div
                                  className={`max-w-xs px-4 py-2 rounded-2xl ${
                                    message.sender === 'user'
                                      ? 'bg-blue-500 text-white rounded-br-md'
                                      : 'bg-white text-gray-800 rounded-bl-md shadow-sm'
                                  }`}
                                >
                                  <div className="text-sm whitespace-pre-line">{message.message}</div>
                                  <div className={`text-xs mt-1 ${
                                    message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                                  }`}>
                                    {message.time}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        
                        {/* Input Area */}
                        <div className="bg-white border-t p-4 flex items-center space-x-3">
                          <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                            <div className="text-gray-500 text-sm">Nhập tin nhắn...</div>
                          </div>
                          <div className={`w-8 h-8 ${scenario.color} rounded-full flex items-center justify-center`}>
                            <MessageSquare className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Scenario Details */}
                <div className="space-y-6">
                  <div>
                    <Badge className={`${scenario.color} text-white mb-4`}>
                      {scenario.title}
                    </Badge>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {scenario.subtitle}
                    </h3>
                    <p className="text-gray-600">
                      Xem cách AI Chatbot xử lý {scenario.title.toLowerCase()} một cách thông minh và hiệu quả
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900">Tính năng nổi bật:</h4>
                    {scenario.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 ${scenario.color} rounded-full`}></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Progress Indicator */}
                  <div className="flex space-x-2">
                    {scenarios.map((_, dotIndex) => (
                      <div
                        key={dotIndex}
                        className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          dotIndex === currentSlide ? scenario.color : 'bg-gray-300'
                        }`}
                        onClick={() => {
                          setCurrentSlide(dotIndex);
                          setIsPlaying(false);
                          setTimeout(() => setIsPlaying(true), 2000);
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious 
          className="left-4" 
          onClick={() => {
            setCurrentSlide((prev) => (prev - 1 + scenarios.length) % scenarios.length);
            setIsPlaying(false);
            setTimeout(() => setIsPlaying(true), 2000);
          }} 
        />
        <CarouselNext 
          className="right-4" 
          onClick={() => {
            setCurrentSlide((prev) => (prev + 1) % scenarios.length);
            setIsPlaying(false);
            setTimeout(() => setIsPlaying(true), 2000);
          }} 
        />
      </Carousel>
    </div>
  );
};

export default ChatbotDemoCarousel;
