
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Bot, MessageSquare, Smartphone, Zap, Users, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';
import ScrollTriggered3D from '@/components/ScrollTriggered3D';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "AI - Chatbot Automation",
      description: "Giải pháp chatbot thông minh đa kênh, tự động hóa tương tác khách hàng và tăng hiệu quả kinh doanh với AI/NLP tiên tiến",
      icon: Bot,
      path: "/services/ai-chatbot",
      features: [
        "Chatbot đa nền tảng (Website, Facebook, Zalo, Telegram)",
        "Tích hợp AI/NLP thông minh hiểu ngôn ngữ tự nhiên",
        "Tự động hóa quy trình bán hàng và chăm sóc khách hàng",
        "Báo cáo & phân tích chi tiết theo thời gian thực"
      ],
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      price: "Từ 2,990,000 VNĐ/tháng"
    },
    {
      title: "Zalo All-In-One Engine",
      description: "Nền tảng quản lý toàn diện Zalo OA, ZNS và marketing automation thông minh cho doanh nghiệp",
      icon: MessageSquare,
      path: "/services/zalo-engine",
      features: [
        "Quản lý Zalo OA chuyên nghiệp đa tài khoản",
        "Gửi ZNS thông báo hàng loạt không giới hạn",
        "Marketing automation thông minh với AI",
        "Phân tích hiệu suất chi tiết và ROI tracking"
      ],
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
      price: "Từ 2,990,000 VNĐ/tháng"
    }
  ];

  const agencyBenefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Triển khai nhanh chóng",
      description: "Setup và vận hành trong vòng 24-48 giờ với đội ngũ kỹ thuật chuyên môn cao"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Hỗ trợ 24/7",
      description: "Đội ngũ kỹ thuật và tư vấn luôn sẵn sàng hỗ trợ khách hàng mọi lúc"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "ROI cao & Đo lường rõ ràng",
      description: "Tăng doanh thu trung bình 40-60% và giảm chi phí vận hành đến 50%"
    }
  ];

  const industries = [
    "Bán lẻ & E-commerce",
    "Ngân hàng & Tài chính", 
    "Bảo hiểm",
    "Du lịch & Khách sạn",
    "Y tế & Sức khỏe",
    "Bất động sản",
    "Giáo dục",
    "F&B",
    "Call Center",
    "Logistics"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-6 text-center">
          <ScrollTriggered3D direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Dịch vụ AI & Automation
            </h1>
          </ScrollTriggered3D>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            D2 Group cung cấp giải pháp AI và tự động hóa toàn diện cho doanh nghiệp. 
            Chúng tôi giúp bạn tối ưu hóa quy trình kinh doanh, tăng hiệu quả và giảm chi phí vận hành.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg"
            >
              Tư vấn miễn phí
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/contact')}
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-4 text-lg"
            >
              Đặt lịch demo
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Dịch vụ chuyên sâu của chúng tôi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chúng tôi chuyên cung cấp các giải pháp AI và automation hàng đầu được thiết kế riêng cho doanh nghiệp Việt Nam
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden border-2 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl cursor-pointer"
                onClick={() => navigate(service.path)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <CardHeader className={`relative z-10 pb-6 ${service.bgColor}`}>
                  <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${service.color} text-white mb-4 w-fit`}>
                    <service.icon className="h-10 w-10" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="text-2xl font-bold text-blue-600">
                    {service.price}
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 p-8">
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg transition-all duration-300 text-white font-semibold py-4 text-lg group`}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(service.path);
                    }}
                  >
                    Tìm hiểu chi tiết
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose D2 Group */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Tại sao chọn D2 Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Với hơn 5 năm kinh nghiệm trong lĩnh vực AI và automation, chúng tôi đã giúp hơn 500+ doanh nghiệp chuyển đổi số thành công
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {agencyBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-none">
                <CardContent className="p-8">
                  <div className="inline-flex p-4 rounded-full bg-blue-100 text-blue-600 mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ngành nghề chúng tôi phục vụ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Giải pháp AI & Automation được tùy chỉnh cho mọi ngành nghề
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md hover:border-blue-300 transition-all duration-300 cursor-pointer"
              >
                <span className="text-gray-700 font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Sẵn sàng chuyển đổi số với AI?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Liên hệ ngay để được tư vấn miễn phí và trải nghiệm demo các giải pháp AI & Automation phù hợp với doanh nghiệp của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate('/contact')}
              className="font-semibold px-8 py-4 text-lg"
            >
              Liên hệ tư vấn miễn phí
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/contact')}
              className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 text-lg"
            >
              Đặt lịch demo ngay
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
