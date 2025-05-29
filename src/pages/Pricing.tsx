
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "2,990,000",
      period: "VNĐ/tháng",
      description: "Dành cho doanh nghiệp nhỏ mới bắt đầu",
      features: [
        { name: "100 cuộc trò chuyện/tháng", included: true },
        { name: "FAQs tự động cơ bản", included: true },
        { name: "Tích hợp website", included: true },
        { name: "Dashboard báo cáo đơn giản", included: true },
        { name: "Hỗ trợ 5 ngôn ngữ", included: true },
        { name: "Email support", included: true },
        { name: "Tích hợp CRM", included: false },
        { name: "AI cá nhân hoá", included: false },
        { name: "Multi-channel", included: false },
        { name: "Custom integrations", included: false },
        { name: "Priority support", included: false },
        { name: "SLA 99.9%", included: false },
      ],
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Growth",
      price: "7,990,000", 
      period: "VNĐ/tháng",
      description: "Cho doanh nghiệp đang phát triển",
      features: [
        { name: "1,000 cuộc trò chuyện/tháng", included: true },
        { name: "FAQs tự động cơ bản", included: true },
        { name: "Tích hợp website", included: true },
        { name: "Dashboard báo cáo đơn giản", included: true },
        { name: "Hỗ trợ 5 ngôn ngữ", included: true },
        { name: "Email support", included: true },
        { name: "Tích hợp CRM", included: true },
        { name: "AI cá nhân hoá", included: true },
        { name: "Multi-channel", included: false },
        { name: "Custom integrations", included: false },
        { name: "Priority support", included: true },
        { name: "SLA 99.9%", included: false },
      ],
      popular: true,
      color: "border-ai-orange"
    },
    {
      name: "Business",
      price: "19,990,000",
      period: "VNĐ/tháng", 
      description: "Giải pháp toàn diện cho doanh nghiệp lớn",
      features: [
        { name: "5,000 cuộc trò chuyện/tháng", included: true },
        { name: "FAQs tự động cơ bản", included: true },
        { name: "Tích hợp website", included: true },
        { name: "Dashboard báo cáo đơn giản", included: true },
        { name: "Hỗ trợ 5 ngôn ngữ", included: true },
        { name: "Email support", included: true },
        { name: "Tích hợp CRM", included: true },
        { name: "AI cá nhân hoá", included: true },
        { name: "Multi-channel", included: true },
        { name: "Custom integrations", included: true },
        { name: "Priority support", included: true },
        { name: "SLA 99.9%", included: false },
      ],
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Enterprise",
      price: "Liên hệ",
      period: "tư vấn",
      description: "Tùy chỉnh theo yêu cầu đặc biệt",
      features: [
        { name: "Unlimited conversations", included: true },
        { name: "FAQs tự động cơ bản", included: true },
        { name: "Tích hợp website", included: true },
        { name: "Dashboard báo cáo đơn giản", included: true },
        { name: "Hỗ trợ 5 ngôn ngữ", included: true },
        { name: "Email support", included: true },
        { name: "Tích hợp CRM", included: true },
        { name: "AI cá nhân hoá", included: true },
        { name: "Multi-channel", included: true },
        { name: "Custom integrations", included: true },
        { name: "Priority support", included: true },
        { name: "SLA 99.9%", included: true },
      ],
      popular: false,
      color: "border-ai-blue"
    },
  ];

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
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-gray-600' : 'text-gray-400'}`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button 
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

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
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
            <Button size="lg" className="bg-ai-orange hover:bg-ai-orange/90 text-white font-semibold px-8 py-4 text-lg">
              Bắt đầu dùng thử miễn phí
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-ai-blue px-8 py-4 text-lg">
              Tư vấn với chuyên gia
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
