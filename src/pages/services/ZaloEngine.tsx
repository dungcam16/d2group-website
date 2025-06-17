
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Send, BarChart3, Users, CheckCircle, Zap } from 'lucide-react';
import ScrollTriggered3D from '@/components/ScrollTriggered3D';

const ZaloEngine = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: MessageSquare,
      title: "Quản lý Zalo OA",
      description: "Quản lý tin nhắn, khách hàng và tương tác trên Zalo OA một cách chuyên nghiệp"
    },
    {
      icon: Send,
      title: "Gửi ZNS hàng loạt",
      description: "Gửi tin nhắn ZNS thông báo đến hàng ngàn khách hàng cùng lúc"
    },
    {
      icon: BarChart3,
      title: "Phân tích chi tiết",
      description: "Báo cáo hiệu suất, tương tác và ROI chi tiết theo thời gian thực"
    },
    {
      icon: Users,
      title: "Quản lý khách hàng",
      description: "Phân khúc và quản lý cơ sở dữ liệu khách hàng hiệu quả"
    }
  ];

  const pricingPlans = [
    {
      name: "Gói Cơ bản",
      price: "2,990,000",
      period: "VNĐ/tháng",
      features: [
        "Quản lý 1 Zalo OA",
        "Gửi 10,000 tin ZNS/tháng",
        "Báo cáo cơ bản",
        "Hỗ trợ email",
        "Tích hợp API cơ bản"
      ],
      recommended: false
    },
    {
      name: "Gói Chuyên nghiệp",
      price: "4,990,000",
      period: "VNĐ/tháng",
      features: [
        "Quản lý 3 Zalo OA",
        "Gửi 50,000 tin ZNS/tháng",
        "Báo cáo chi tiết",
        "Hỗ trợ 24/7",
        "Tích hợp API nâng cao",
        "Automation thông minh",
        "Phân khúc khách hàng"
      ],
      recommended: true
    },
    {
      name: "Gói Doanh nghiệp",
      price: "Liên hệ",
      period: "Tùy chỉnh",
      features: [
        "Không giới hạn Zalo OA",
        "Không giới hạn tin ZNS",
        "Báo cáo tùy chỉnh",
        "Hỗ trợ ưu tiên 24/7",
        "API không giới hạn",
        "AI Marketing automation",
        "Tích hợp CRM",
        "Đào tạo chuyên sâu"
      ],
      recommended: false
    }
  ];

  const benefits = [
    "Tăng 70% hiệu quả marketing qua Zalo",
    "Giảm 50% thời gian quản lý khách hàng",
    "Tăng 60% tỷ lệ mở tin nhắn",
    "ROI trung bình 300% sau 3 tháng"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-teal-50">
        <div className="container mx-auto px-6 text-center">
          <ScrollTriggered3D direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Zalo All-In-One Engine
            </h1>
          </ScrollTriggered3D>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Nền tảng quản lý toàn diện Zalo OA, ZNS và marketing automation thông minh
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/contact')}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 text-lg"
            >
              Dùng thử miễn phí
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/contact')}
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold px-8 py-4 text-lg"
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
              Tính năng toàn diện
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quản lý mọi hoạt động Zalo của doanh nghiệp từ một nền tảng duy nhất
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="inline-flex p-3 rounded-lg bg-green-100 text-green-600 mb-4 w-fit mx-auto">
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

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Bảng giá linh hoạt
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Chọn gói phù hợp với quy mô và nhu cầu của doanh nghiệp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.recommended ? 'ring-2 ring-green-500 scale-105' : ''}`}>
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Phổ biến nhất
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-green-600">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.recommended 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                    onClick={() => navigate('/contact')}
                  >
                    {plan.price === "Liên hệ" ? "Liên hệ tư vấn" : "Bắt đầu ngay"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Hiệu quả vượt trội
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Zalo All-In-One Engine giúp doanh nghiệp tối ưu hóa marketing và chăm sóc khách hàng
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Zap className="h-6 w-6 text-green-500" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Bắt đầu dùng thử ngay
              </h3>
              <p className="text-gray-600 mb-6">
                Dùng thử miễn phí 14 ngày với đầy đủ tính năng. Không cần thẻ tín dụng.
              </p>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 mb-4"
                onClick={() => navigate('/contact')}
              >
                Dùng thử miễn phí
              </Button>
              <p className="text-sm text-gray-500 text-center">
                Hỗ trợ setup và đào tạo miễn phí
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZaloEngine;
