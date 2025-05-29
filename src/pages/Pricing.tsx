
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  const pricingPlans = [
    {
      name: "Starter",
      price: "2.900.000",
      period: "VNĐ/tháng",
      description: "Dành cho doanh nghiệp nhỏ mới bắt đầu",
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Growth",
      price: "3.900.000", 
      period: "VNĐ/tháng",
      description: "Cho doanh nghiệp đang phát triển",
      popular: true,
      color: "border-ai-orange"
    },
    {
      name: "Business",
      price: "7.900.000",
      period: "VNĐ/tháng", 
      description: "Giải pháp toàn diện cho doanh nghiệp lớn",
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Enterprise",
      price: "Liên hệ",
      period: "tư vấn",
      description: "Tùy chỉnh theo yêu cầu đặc biệt",
      popular: false,
      color: "border-ai-blue"
    },
  ];

  const comparisonFeatures = [
    {
      category: "Cơ bản",
      features: [
        { name: "Cuộc trò chuyện/tháng", starter: "100", growth: "1,000", business: "5,000", enterprise: "Unlimited" },
        { name: "Tích hợp website", starter: true, growth: true, business: true, enterprise: true },
        { name: "Dashboard báo cáo", starter: true, growth: true, business: true, enterprise: true },
        { name: "Hỗ trợ đa ngôn ngữ", starter: true, growth: true, business: true, enterprise: true },
        { name: "Email support", starter: true, growth: true, business: true, enterprise: true },
      ]
    },
    {
      category: "Nâng cao",
      features: [
        { name: "Tích hợp CRM", starter: false, growth: true, business: true, enterprise: true },
        { name: "AI cá nhân hoá", starter: false, growth: true, business: true, enterprise: true },
        { name: "Lead qualification", starter: false, growth: true, business: true, enterprise: true },
        { name: "Live chat handover", starter: false, growth: true, business: true, enterprise: true },
        { name: "Priority support", starter: false, growth: true, business: true, enterprise: true },
      ]
    },
    {
      category: "Chuyên nghiệp",
      features: [
        { name: "Multi-channel deployment", starter: false, growth: false, business: true, enterprise: true },
        { name: "Advanced analytics", starter: false, growth: false, business: true, enterprise: true },
        { name: "Custom integrations", starter: false, growth: false, business: true, enterprise: true },
        { name: "24/7 dedicated support", starter: false, growth: false, business: true, enterprise: true },
      ]
    },
    {
      category: "Enterprise",
      features: [
        { name: "On-premise deployment", starter: false, growth: false, business: false, enterprise: true },
        { name: "Custom AI model training", starter: false, growth: false, business: false, enterprise: true },
        { name: "Dedicated account manager", starter: false, growth: false, business: false, enterprise: true },
        { name: "SLA 99.9% uptime", starter: false, growth: false, business: false, enterprise: true },
        { name: "Custom security & compliance", starter: false, growth: false, business: false, enterprise: true },
      ]
    }
  ];

  const handleCTAClick = () => {
    navigate('/contact');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-ai-gradient-soft">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Bảng Giá Dịch Vụ
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Giá cả minh bạch, không phí ẩn. Tất cả gói đều bao gồm setup miễn phí, 
            đào tạo sử dụng và dùng thử 14 ngày không mất phí.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
            <span className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Setup miễn phí</span>
            </span>
            <span className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Dùng thử 14 ngày</span>
            </span>
            <span className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Không ràng buộc</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  plan.popular 
                    ? `${plan.color} shadow-lg scale-105` 
                    : `${plan.color} hover:border-ai-blue`
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-ai-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Phổ biến nhất
                    </span>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <Button 
                    onClick={handleCTAClick}
                    className={`w-full mt-6 ${
                      plan.popular 
                        ? 'bg-ai-orange hover:bg-ai-orange/90' 
                        : 'bg-ai-blue hover:bg-ai-blue/90'
                    } text-white`}
                  >
                    {plan.name === 'Enterprise' ? 'Liên hệ tư vấn' : 'Bắt đầu ngay'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            So sánh chi tiết tính năng
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-ai-gradient">
                  <tr>
                    <th className="text-left p-6 text-white font-semibold">Tính năng</th>
                    <th className="text-center p-6 text-white font-semibold">Starter</th>
                    <th className="text-center p-6 text-white font-semibold">Growth</th>
                    <th className="text-center p-6 text-white font-semibold">Business</th>
                    <th className="text-center p-6 text-white font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((category, categoryIndex) => (
                    <>
                      <tr key={`category-${categoryIndex}`} className="bg-gray-100">
                        <td colSpan={5} className="p-4 font-bold text-ai-blue">
                          {category.category}
                        </td>
                      </tr>
                      {category.features.map((feature, featureIndex) => (
                        <tr key={`${categoryIndex}-${featureIndex}`} className={featureIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="p-4 font-medium">{feature.name}</td>
                          <td className="p-4 text-center">
                            {typeof feature.starter === 'boolean' ? (
                              feature.starter ? (
                                <Check className="w-5 h-5 text-green-500 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-gray-300 mx-auto" />
                              )
                            ) : (
                              feature.starter
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {typeof feature.growth === 'boolean' ? (
                              feature.growth ? (
                                <Check className="w-5 h-5 text-green-500 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-gray-300 mx-auto" />
                              )
                            ) : (
                              feature.growth
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {typeof feature.business === 'boolean' ? (
                              feature.business ? (
                                <Check className="w-5 h-5 text-green-500 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-gray-300 mx-auto" />
                              )
                            ) : (
                              feature.business
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {typeof feature.enterprise === 'boolean' ? (
                              feature.enterprise ? (
                                <Check className="w-5 h-5 text-green-500 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-gray-300 mx-auto" />
                              )
                            ) : (
                              feature.enterprise
                            )}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Câu hỏi thường gặp
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Chi phí setup và đào tạo có tính thêm không?",
                answer: "Không, tất cả các gói đều bao gồm setup miễn phí và đào tạo sử dụng cơ bản. Chúng tôi sẽ hỗ trợ bạn từ A-Z để chatbot hoạt động hiệu quả."
              },
              {
                question: "Tôi có thể thay đổi gói dịch vụ trong quá trình sử dụng không?",
                answer: "Có, bạn có thể nâng cấp hoặc hạ cấp gói bất cứ lúc nào. Phí sẽ được tính theo tỷ lệ thời gian sử dụng thực tế."
              },
              {
                question: "14 ngày dùng thử có giới hạn tính năng gì không?",
                answer: "Không, bạn được trải nghiệm đầy đủ tính năng của gói đã chọn trong 14 ngày. Không cần thẻ tín dụng để đăng ký."
              },
              {
                question: "Dữ liệu khách hàng có được bảo mật an toàn không?",
                answer: "Tuyệt đối. Chúng tôi tuân thủ các tiêu chuẩn bảo mật quốc tế và có chứng chỉ ISO 27001. Dữ liệu được mã hóa end-to-end."
              },
              {
                question: "Có hỗ trợ tích hợp với hệ thống hiện tại không?",
                answer: "Có, chúng tôi hỗ trợ tích hợp với hầu hết các hệ thống phổ biến như CRM, ERP, Website, Social Media. Gói Enterprise có tích hợp custom."
              }
            ].map((faq, index) => (
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

      {/* CTA Section */}
      <section className="py-20 bg-ai-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Sẵn sàng bắt đầu với AI Chatbot?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Đăng ký dùng thử 14 ngày miễn phí ngay hôm nay. Không cần thẻ tín dụng, 
            setup trong 5 phút.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleCTAClick} className="bg-ai-orange hover:bg-ai-orange/90 text-white font-semibold px-8 py-4 text-lg">
              Bắt đầu dùng thử miễn phí
            </Button>
            <Button size="lg" variant="outline" onClick={handleCTAClick} className="border-white text-white hover:bg-white hover:text-ai-blue px-8 py-4 text-lg">
              Tư vấn với chuyên gia
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
