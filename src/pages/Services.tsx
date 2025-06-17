
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Bot, MessageSquare, Smartphone, Zap, Users, BarChart3 } from 'lucide-react';
import ScrollTriggered3D from '@/components/ScrollTriggered3D';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "AI - Chatbot Automation",
      description: "Giải pháp chatbot thông minh đa kênh, tự động hóa tương tác khách hàng và tăng hiệu quả kinh doanh",
      icon: Bot,
      path: "/services/ai-chatbot",
      features: [
        "Chatbot đa nền tảng (Website, Facebook, Zalo, etc.)",
        "Tích hợp AI/NLP thông minh",
        "Tự động hóa quy trình bán hàng",
        "Báo cáo & phân tích chi tiết"
      ],
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Zalo All-In-One Engine",
      description: "Nền tảng quản lý toàn diện Zalo OA, ZNS và các tính năng marketing automation trên Zalo",
      icon: MessageSquare,
      path: "/services/zalo-engine",
      features: [
        "Quản lý Zalo OA chuyên nghiệp",
        "Gửi ZNS thông báo hàng loạt",
        "Marketing automation thông minh",
        "Phân tích hiệu suất chi tiết"
      ],
      color: "from-green-500 to-teal-600"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-6 text-center">
          <ScrollTriggered3D direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Dịch vụ của chúng tôi
            </h1>
          </ScrollTriggered3D>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Khám phá các giải pháp AI và automation hàng đầu để chuyển đổi số doanh nghiệp của bạn
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden border-2 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl cursor-pointer"
                onClick={() => navigate(service.path)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <CardHeader className="relative z-10 pb-6">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.color} text-white mb-4 w-fit`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="relative z-10">
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg transition-all duration-300 text-white font-semibold py-3`}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(service.path);
                    }}
                  >
                    Tìm hiểu thêm
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Tại sao chọn D2 Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Chúng tôi mang đến giải pháp toàn diện với công nghệ tiên tiến
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="inline-flex p-4 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Triển khai nhanh chóng</h3>
              <p className="text-gray-600">Setup và vận hành trong vòng 24-48 giờ</p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex p-4 rounded-full bg-green-100 text-green-600 mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Hỗ trợ 24/7</h3>
              <p className="text-gray-600">Đội ngũ kỹ thuật chuyên môn cao luôn sẵn sàng</p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex p-4 rounded-full bg-purple-100 text-purple-600 mb-4">
                <BarChart3 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">ROI cao</h3>
              <p className="text-gray-600">Tăng doanh thu và giảm chi phí vận hành</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Sẵn sàng chuyển đổi số?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Liên hệ ngay để được tư vấn miễn phí và trải nghiệm demo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate('/contact')}
              className="font-semibold px-8 py-4 text-lg"
            >
              Liên hệ tư vấn
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/contact')}
              className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 text-lg"
            >
              Đặt lịch demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
