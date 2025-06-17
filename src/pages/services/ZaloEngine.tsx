
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Send, BarChart3, Users, CheckCircle, Zap, Target, Smartphone, Globe, ArrowRight, Star, TrendingUp } from 'lucide-react';
import ScrollTriggered3D from '@/components/ScrollTriggered3D';

const ZaloEngine = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: MessageSquare,
      title: "Quản lý Zalo OA",
      description: "Quản lý tin nhắn, khách hàng và tương tác trên Zalo OA một cách chuyên nghiệp và hiệu quả"
    },
    {
      icon: Send,
      title: "Gửi ZNS hàng loạt",
      description: "Gửi tin nhắn ZNS thông báo đến hàng ngàn khách hàng cùng lúc với tỷ lệ delivered cao"
    },
    {
      icon: BarChart3,
      title: "Phân tích chi tiết",
      description: "Báo cáo hiệu suất, tương tác và ROI chi tiết theo thời gian thực với dashboard trực quan"
    },
    {
      icon: Users,
      title: "Quản lý khách hàng",
      description: "Phân khúc và quản lý cơ sở dữ liệu khách hàng hiệu quả với CRM tích hợp"
    },
    {
      icon: Target,
      title: "Marketing Automation",
      description: "Tự động hóa chiến dịch marketing với AI, tăng hiệu quả và tỷ lệ chuyển đổi"
    },
    {
      icon: Globe,
      title: "Tích hợp đa nền tảng",
      description: "Kết nối với website, CRM, e-commerce và các hệ thống kinh doanh khác"
    }
  ];

  const caseStudies = [
    {
      company: "VietBank Digital",
      industry: "Ngân hàng & Tài chính",
      challenge: "Khách hàng phải chờ đợi lâu để được tư vấn các sản phẩm tài chính và xử lý giao dịch",
      solution: "Triển khai Zalo Engine để tư vấn sản phẩm tài chính, gửi thông báo ZNS và automation marketing",
      results: [
        "Tăng 70% hiệu quả marketing qua Zalo",
        "Thời gian xử lý giảm 50%",
        "Tỷ lệ mở tin nhắn đạt 85%",
        "ROI tăng 300% sau 3 tháng"
      ],
      testimonial: "Zalo Engine giúp chúng tôi tiếp cận khách hàng hiệu quả hơn và tăng doanh số đáng kể",
      author: "Phạm Văn Đức - Giám đốc Digital Banking",
      color: "from-green-500 to-teal-600"
    },
    {
      company: "MegaMall Shopping",
      industry: "Bán lẻ & Thương mại",
      challenge: "Khó khăn trong việc thông báo khuyến mãi và duy trì tương tác với khách hàng thân thiết",
      solution: "Sử dụng Zalo Engine để gửi ZNS khuyến mãi, chăm sóc khách hàng VIP và chương trình loyalty",
      results: [
        "Tăng 60% lượng truy cập từ Zalo",
        "Tỷ lệ chuyển đổi từ ZNS: 25%",
        "Retention rate tăng 45%",
        "Doanh thu từ Zalo tăng 200%"
      ],
      testimonial: "Zalo Engine đã biến Zalo thành kênh bán hàng hiệu quả nhất của chúng tôi",
      author: "Lê Thị Mai - Marketing Director",
      color: "from-blue-500 to-indigo-600"
    },
    {
      company: "HealthCare Plus",
      industry: "Y tế & Sức khỏe",
      challenge: "Việc thông báo lịch khám, kết quả xét nghiệm và chăm sóc sau điều trị chưa hiệu quả",
      solution: "Triển khai Zalo Engine để tự động hóa thông báo y tế, nhắc nhở lịch khám và tư vấn sức khỏe",
      results: [
        "Giảm 70% no-show rate",
        "Tăng 80% sự hài lòng bệnh nhân",
        "Tự động hóa 90% thông báo y tế",
        "Tiết kiệm 50% thời gian nhân viên"
      ],
      testimonial: "Bệnh nhân được chăm sóc tốt hơn với hệ thống thông báo tự động qua Zalo",
      author: "BS. Nguyễn Thị Lan - Phó Giám đốc",
      color: "from-red-500 to-pink-600"
    }
  ];

  const benefits = [
    "Tăng 70% hiệu quả marketing qua Zalo",
    "Giảm 50% thời gian quản lý khách hàng",
    "Tăng 60% tỷ lệ mở tin nhắn",
    "ROI trung bình 300% sau 3 tháng",
    "Tự động hóa 95% quy trình marketing",
    "Tích hợp seamless với hệ thống hiện có"
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
        "Tích hợp API cơ bản",
        "Template tin nhắn có sẵn"
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
        "Báo cáo chi tiết & Analytics",
        "Hỗ trợ 24/7",
        "Tích hợp API nâng cao",
        "Automation thông minh",
        "Phân khúc khách hàng",
        "A/B Testing"
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
        "Tích hợp CRM enterprise",
        "Đào tạo chuyên sâu",
        "Dedicated account manager"
      ],
      recommended: false
    }
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
            Nền tảng quản lý toàn diện Zalo OA, ZNS và marketing automation thông minh, giúp doanh nghiệp tối ưu hóa hiệu quả kinh doanh
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/contact')}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 text-lg"
            >
              Dùng thử miễn phí 14 ngày
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/contact')}
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold px-8 py-4 text-lg"
            >
              Xem demo trực tiếp
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
              Quản lý mọi hoạt động Zalo của doanh nghiệp từ một nền tảng duy nhất với công nghệ tiên tiến
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="inline-flex p-4 rounded-lg bg-green-100 text-green-600 mb-4 w-fit mx-auto">
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

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Khách hàng thành công
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Khám phá cách Zalo All-In-One Engine đã giúp các doanh nghiệp tối ưu hóa marketing và tăng trưởng doanh thu
            </p>
          </div>

          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${study.color} rounded-full flex items-center justify-center text-white text-2xl font-bold`}>
                      {study.company.charAt(0)}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">
                        {study.industry}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {study.company}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-red-600">Thách thức:</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-green-600">Giải pháp:</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-blue-600">Kết quả:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center space-x-3 bg-green-50 p-3 rounded-lg">
                            <TrendingUp className="w-5 h-5 text-green-500" />
                            <span className="text-green-700 font-medium">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Card className="border-l-4 border-l-green-600 bg-green-50">
                    <CardContent className="p-6">
                      <blockquote className="text-lg italic text-gray-700 mb-4">
                        "{study.testimonial}"
                      </blockquote>
                      <cite className="text-green-600 font-semibold">
                        — {study.author}
                      </cite>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex-1">
                  <Card className="bg-white shadow-lg">
                    <CardContent className="p-8">
                      <div className="text-center space-y-6">
                        <h4 className="text-2xl font-bold text-gray-800">{study.company}</h4>
                        
                        <div className="grid grid-cols-2 gap-6">
                          <div className="text-center">
                            <div className="text-xl font-bold text-red-600 mb-2">TRƯỚC</div>
                            <div className="h-16 bg-red-100 rounded-lg flex items-center justify-center">
                              <span className="text-red-600 font-semibold text-sm">Thách thức</span>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-bold text-green-600 mb-2">SAU</div>
                            <div className="h-16 bg-green-100 rounded-lg flex items-center justify-center">
                              <span className="text-green-600 font-semibold text-sm">Thành công</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4">
                          <h5 className="font-semibold mb-3">Đánh giá khách hàng</h5>
                          <div className="flex justify-center">
                            <div className="flex space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">5.0/5 - Xuất sắc</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Hiệu quả vượt trội
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Zalo All-In-One Engine giúp doanh nghiệp tối ưu hóa marketing và chăm sóc khách hàng với hiệu quả đáng kinh ngạc
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
                Dùng thử miễn phí 14 ngày với đầy đủ tính năng. Không cần thẻ tín dụng. Hỗ trợ setup và đào tạo miễn phí.
              </p>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 mb-4"
                onClick={() => navigate('/contact')}
              >
                Dùng thử miễn phí
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <div className="text-center space-y-2">
                <p className="text-sm text-gray-500">
                  ✓ Setup trong 24h ✓ Đào tạo miễn phí ✓ Hỗ trợ 24/7
                </p>
                <div className="flex justify-center items-center space-x-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">4.9/5 từ 500+ khách hàng</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZaloEngine;
