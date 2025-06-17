
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Bot, MessageSquare, Zap, BarChart3, Globe, Clock } from 'lucide-react';
import ScrollTriggered3D from '@/components/ScrollTriggered3D';

const AIChatbot = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Bot,
      title: "AI Thông minh",
      description: "Chatbot được trang bị AI/NLP tiên tiến, hiểu và phản hồi tự nhiên"
    },
    {
      icon: Globe,
      title: "Đa nền tảng",
      description: "Tích hợp Website, Facebook Messenger, Zalo, Telegram"
    },
    {
      icon: Clock,
      title: "Hoạt động 24/7",
      description: "Hỗ trợ khách hàng liên tục, không giới hạn thời gian"
    },
    {
      icon: BarChart3,
      title: "Phân tích chi tiết",
      description: "Báo cáo tương tác, hiệu suất và chuyển đổi khách hàng"
    }
  ];

  const benefits = [
    "Tăng 80% hiệu quả chăm sóc khách hàng",
    "Giảm 60% chi phí vận hành",
    "Tăng 45% tỷ lệ chuyển đổi",
    "Cải thiện trải nghiệm khách hàng"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-6 text-center">
          <ScrollTriggered3D direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              AI - Chatbot Automation
            </h1>
          </ScrollTriggered3D>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Giải pháp chatbot thông minh đa kênh, tự động hóa tương tác khách hàng và tăng hiệu quả kinh doanh
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg"
            >
              Nhận tư vấn miễn phí
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/contact')}
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-4 text-lg"
            >
              Xem demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Tính năng nổi bật
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Chatbot AI với công nghệ tiên tiến nhất hiện tại
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="inline-flex p-3 rounded-lg bg-blue-100 text-blue-600 mb-4 w-fit mx-auto">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Lợi ích vượt trội
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Chatbot AI mang lại hiệu quả kinh doanh đột phá cho doanh nghiệp
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Bắt đầu ngay hôm nay
              </h3>
              <p className="text-gray-600 mb-6">
                Liên hệ để được tư vấn và triển khai chatbot AI cho doanh nghiệp của bạn
              </p>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                onClick={() => navigate('/contact')}
              >
                Liên hệ ngay
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIChatbot;
