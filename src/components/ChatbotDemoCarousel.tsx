import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, ShoppingCart, Calendar, HeadphonesIcon, HelpCircle, Globe, CreditCard, Target, Package, ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [currentGif, setCurrentGif] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [animationKey, setAnimationKey] = useState(0);

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
        { sender: 'bot', message: 'Tôi tìm thấy 15 sản phẩm phù hợp. Giá từ 200k-500k. Bạn muốn xem top 3 sản phẩm bán chạy nhất không?', time: '14:31' },
        { sender: 'user', message: 'Có, cho tôi xem', time: '14:32' },
        { sender: 'bot', message: 'Đây là 3 sản phẩm được yêu thích:\n1. Áo thun polo đen - 250k\n2. Áo thun basic trắng - 180k\n3. Áo thun họa tiết đen - 320k', time: '14:32' }
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
        { sender: 'bot', message: 'Thứ 7 (23/12) có các khung giờ: 9:00, 14:30, 16:00. Bạn chọn giờ nào?', time: '09:16' },
        { sender: 'user', message: 'Lúc 14:30 được không?', time: '09:17' },
        { sender: 'bot', message: 'Đã đặt lịch thành công!\n📅 Thứ 7, 23/12\n⏰ 14:30\n✂️ Cắt tóc nam\nChúng tôi sẽ gửi nhắc nhở qua SMS trước 1 tiếng.', time: '09:17' }
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
        { sender: 'bot', message: 'Đơn hàng DH123456789 đang được vận chuyển, dự kiến giao ngày mai 15:00. Bạn có thể theo dõi tại: bit.ly/track123', time: '22:46' },
        { sender: 'user', message: 'Cảm ơn bạn', time: '22:47' },
        { sender: 'bot', message: 'Rất vui được hỗ trợ! Nếu có thắc mắc gì khác, đừng ngần ngại liên hệ nhé. Chúc bạn một ngày tốt lành! 😊', time: '22:47' }
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
        { sender: 'bot', message: 'Miễn phí ship đổi trả cho đơn hàng trên 500k. Dưới 500k phí ship 30k.', time: '16:21' },
        { sender: 'user', message: 'Tôi có thể đổi size được không?', time: '16:22' },
        { sender: 'bot', message: 'Có thể đổi size miễn phí trong 7 ngày. Bạn chỉ cần mang sản phẩm và hóa đơn đến cửa hàng gần nhất.', time: '16:22' }
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
        { sender: 'bot', message: 'Vâng, tôi có thể nói tiếng Việt. Bạn cần hỗ trợ gì ạ?', time: '11:31' },
        { sender: 'user', message: 'Tôi muốn hủy đơn hàng', time: '11:32' },
        { sender: 'bot', message: 'Tôi sẽ giúp bạn hủy đơn hàng. Cho tôi biết mã đơn hàng để tôi kiểm tra trạng thái nhé.', time: '11:32' }
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
        { sender: 'bot', message: 'Thông tin chuyển khoản:\nSTK: 1234567890\nNội dung: DH123456\nSố tiền: 450,000 VNĐ\nTôi sẽ xác nhận sau khi nhận được tiền.', time: '13:16' },
        { sender: 'user', message: 'Đã chuyển xong', time: '13:18' },
        { sender: 'bot', message: '✅ Đã nhận được thanh toán 450,000 VNĐ\n📦 Đơn hàng đang được chuẩn bị\n🚚 Dự kiến giao hàng: 2-3 ngày\nCảm ơn bạn!', time: '13:19' }
      ],
      features: ['Tích hợp gateway thanh toán', 'Xác nhận tự động', 'Bảo mật cao']
    },
    {
      id: 'leadgen',
      title: 'Lead Generation',
      subtitle: 'Tạo leads tự động',
      icon: <Target className="w-6 h-6" />,
      color: 'bg-pink-500',
      messages: [
        { sender: 'user', message: 'Tôi quan tâm đến sản phẩm của các bạn', time: '10:30' },
        { sender: 'bot', message: 'Cảm ơn bạn quan tâm! Để tư vấn tốt nhất, bạn có thể cho biết tên và số điện thoại không?', time: '10:30' },
        { sender: 'user', message: 'Tên tôi là Minh, số điện thoại 0912345678', time: '10:31' },
        { sender: 'bot', message: 'Xin chào anh Minh! Bạn đang quan tâm đến giải pháp nào của chúng tôi: Website, App mobile hay AI Chatbot?', time: '10:31' },
        { sender: 'user', message: 'AI Chatbot cho website bán hàng', time: '10:32' },
        { sender: 'bot', message: 'Tuyệt vời! Tôi đã ghi nhận thông tin. Sales sẽ liên hệ trong 30 phút để tư vấn chi tiết về AI Chatbot. Cảm ơn anh Minh!', time: '10:32' }
      ],
      features: ['Thu thập thông tin khách hàng', 'Phân loại leads tự động', 'Tích hợp CRM']
    },
    {
      id: 'recommendations',
      title: 'Product Recommendations',
      subtitle: 'Gợi ý sản phẩm thông minh',
      icon: <Package className="w-6 h-6" />,
      color: 'bg-teal-500',
      messages: [
        { sender: 'user', message: 'Tôi cần mua quà sinh nhật cho bạn gái', time: '19:20' },
        { sender: 'bot', message: 'Tôi sẽ giúp bạn tìm món quà ý nghĩa! Bạn gái bạn thích phong cách nào: trẻ trung, thanh lịch hay cá tính?', time: '19:20' },
        { sender: 'user', message: 'Thanh lịch, budget khoảng 1-2 triệu', time: '19:21' },
        { sender: 'bot', message: 'Với phong cách thanh lịch, tôi gợi ý:\n🎁 Túi xách da cao cấp - 1.8tr\n💄 Set mỹ phẩm premium - 1.5tr\n⌚ Đồng hồ nữ elegant - 1.9tr', time: '19:21' },
        { sender: 'user', message: 'Túi xách nghe hay đấy', time: '19:22' },
        { sender: 'bot', message: 'Tuyệt! Túi xách da cao cấp hiện có 3 màu: đen, nâu, be. Tôi có thể show ảnh và đặt hàng ngay cho bạn không?', time: '19:22' }
      ],
      features: ['AI phân tích sở thích', 'Gợi ý cá nhân hóa', 'Cross-selling thông minh']
    }
  ];

  const currentScenario = scenarios[currentGif];

  // Smooth video-like animation
  useEffect(() => {
    if (!isAnimating) return;

    const totalMessages = currentScenario.messages.length;
    const messageDisplayTime = 800; // 0.8 giây cho mỗi tin nhắn
    const pauseBetweenCycles = 1500; // 1.5 giây nghỉ giữa các cycle
    
    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;

    const displayNextMessage = () => {
      if (currentIndex < totalMessages) {
        setVisibleMessages(currentIndex + 1);
        currentIndex++;
        timeoutId = setTimeout(displayNextMessage, messageDisplayTime);
      } else {
        // Cycle complete, pause then restart
        timeoutId = setTimeout(() => {
          setVisibleMessages(0);
          setAnimationKey(prev => prev + 1); // Force re-render for smooth restart
          currentIndex = 0;
          timeoutId = setTimeout(displayNextMessage, 400);
        }, pauseBetweenCycles);
      }
    };

    // Start the animation
    setVisibleMessages(0);
    setAnimationKey(prev => prev + 1);
    timeoutId = setTimeout(displayNextMessage, 600);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [currentGif, isAnimating, currentScenario.messages.length]);

  const nextGif = () => {
    setCurrentGif((prev) => (prev + 1) % scenarios.length);
  };

  const prevGif = () => {
    setCurrentGif((prev) => (prev - 1 + scenarios.length) % scenarios.length);
  };

  const selectGif = (index: number) => {
    setCurrentGif(index);
  };

  return (
    <div className="max-w-6xl mx-auto">
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
                <div className={`${currentScenario.color} px-6 py-4 flex items-center space-x-3`}>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    {currentScenario.icon}
                  </div>
                  <div className="text-white">
                    <div className="font-semibold">AI Assistant</div>
                    <div className="text-xs opacity-90">Đang hoạt động</div>
                  </div>
                </div>
                
                {/* Chat Messages - Smooth Animation */}
                <div key={animationKey} className="flex-1 p-4 space-y-3 h-[400px] overflow-y-auto bg-gray-50">
                  {currentScenario.messages.slice(0, visibleMessages).map((message, msgIndex) => (
                    <div
                      key={`message-${msgIndex}`}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} 
                        transform transition-all duration-500 ease-out`}
                      style={{
                        opacity: 1,
                        transform: 'translateY(0px)'
                      }}
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
                  ))}
                  
                  {/* Typing indicator */}
                  {isAnimating && visibleMessages > 0 && visibleMessages < currentScenario.messages.length && (
                    <div className="flex justify-start">
                      <div className="bg-white text-gray-800 rounded-2xl rounded-bl-md shadow-sm px-4 py-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Input Area */}
                <div className="bg-white border-t p-4 flex items-center space-x-3">
                  <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                    <div className="text-gray-500 text-sm">Nhập tin nhắn...</div>
                  </div>
                  <div className={`w-8 h-8 ${currentScenario.color} rounded-full flex items-center justify-center`}>
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scenario Details & Controls */}
        <div className="space-y-6">
          <div>
            <Badge className={`${currentScenario.color} text-white mb-4`}>
              {currentScenario.title}
            </Badge>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {currentScenario.subtitle}
            </h3>
            <p className="text-gray-600">
              Xem cách AI Chatbot xử lý {currentScenario.title.toLowerCase()} một cách thông minh và hiệu quả
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-gray-900">Tính năng nổi bật:</h4>
            {currentScenario.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center space-x-3">
                <div className={`w-2 h-2 ${currentScenario.color} rounded-full`}></div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
          
          {/* Navigation Controls */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={prevGif}
                className="flex items-center space-x-2"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Trước</span>
              </Button>
              
              <span className="text-sm text-gray-500">
                {currentGif + 1} / {scenarios.length}
              </span>
              
              <Button
                variant="outline"
                size="sm"
                onClick={nextGif}
                className="flex items-center space-x-2"
              >
                <span>Tiếp</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Selector Dots */}
            <div className="flex justify-center space-x-2">
              {scenarios.map((_, index) => (
                <button
                  key={index}
                  onClick={() => selectGif(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentGif 
                      ? currentScenario.color 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Play/Pause Control */}
          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={() => setIsAnimating(!isAnimating)}
              className="text-sm"
            >
              {isAnimating ? '⏸️ Tạm dừng' : '▶️ Phát'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotDemoCarousel;
