
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Starter",
      subtitle: "Chatbot cơ bản",
      description: "Giải pháp hoàn hảo cho doanh nghiệp nhỏ vừa bắt đầu",
      price: "2.900.000",
      period: "VNĐ/tháng",
      icon: "🚀",
      features: [
        "FAQs tự động 24/7",
        "Tích hợp website cơ bản", 
        "Dashboard báo cáo đơn giản",
        "Hỗ trợ 5 ngôn ngữ",
        "100 cuộc trò chuyện/tháng",
        "Email support"
      ],
      highlight: false
    },
    {
      title: "Growth", 
      subtitle: "Tích hợp CRM",
      description: "Phù hợp cho doanh nghiệp đang mở rộng quy mô",
      price: "3.900.000",
      period: "VNĐ/tháng",
      icon: "📈",
      features: [
        "Tất cả tính năng Starter",
        "Tích hợp CRM (Salesforce, HubSpot)",
        "Phễu bán hàng tự động",
        "Lead qualification thông minh",
        "1000 cuộc trò chuyện/tháng", 
        "Live chat handover",
        "Priority support"
      ],
      highlight: true
    },
    {
      title: "Business",
      subtitle: "AI nâng cao", 
      description: "Giải pháp toàn diện cho doanh nghiệp lớn",
      price: "7.900.000",
      period: "VNĐ/tháng",
      icon: "🏢",
      features: [
        "Tất cả tính năng Growth",
        "AI cá nhân hoá nâng cao",
        "Multi-channel deployment",
        "Advanced analytics & insights",
        "5000 cuộc trò chuyện/tháng",
        "Custom integrations",
        "24/7 dedicated support"
      ],
      highlight: false
    },
    {
      title: "Enterprise",
      subtitle: "Giải pháp custom",
      description: "Thiết kế riêng cho nhu cầu đặc biệt của tổ chức",
      price: "Liên hệ",
      period: "tư vấn",
      icon: "🏗️", 
      features: [
        "Tất cả tính năng Business",
        "Custom AI model training",
        "Unlimited conversations",
        "On-premise deployment",
        "SLA 99.9% uptime",
        "Dedicated account manager",
        "Custom security & compliance"
      ],
      highlight: false
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
            Gói dịch vụ & Bảng giá AI Chatbot
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Lựa chọn gói phù hợp với quy mô và nhu cầu của doanh nghiệp. 
            Tất cả gói đều bao gồm setup miễn phí và đào tạo sử dụng.
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

      {/* Services & Pricing Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`relative border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  service.highlight 
                    ? 'border-ai-orange shadow-lg scale-105' 
                    : 'border-gray-200 hover:border-ai-blue'
                }`}
              >
                {service.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-ai-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Phổ biến nhất
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-2xl font-bold mb-2">{service.title}</CardTitle>
                  <p className="text-ai-blue font-semibold">{service.subtitle}</p>
                  <div className="my-4">
                    <span className="text-3xl font-bold gradient-text">{service.price}</span>
                    <span className="text-gray-600 ml-2">{service.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={handleCTAClick}
                    className={`w-full mt-6 ${
                      service.highlight 
                        ? 'bg-ai-orange hover:bg-ai-orange/90' 
                        : 'bg-ai-blue hover:bg-ai-blue/90'
                    } text-white`}
                  >
                    {service.title === 'Enterprise' ? 'Liên hệ tư vấn' : 'Bắt đầu ngay'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            So sánh chi tiết các gói dịch vụ
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
                  {[
                    ["Conversations/tháng", "100", "1,000", "5,000", "Unlimited"],
                    ["AI Training", "Cơ bản", "Nâng cao", "Cao cấp", "Custom"],
                    ["CRM Integration", "❌", "✅", "✅", "✅"],
                    ["Multi-channel", "❌", "❌", "✅", "✅"],
                    ["Live Chat Handover", "❌", "✅", "✅", "✅"],
                    ["Lead Qualification", "❌", "✅", "✅", "✅"],
                    ["Advanced Analytics", "❌", "❌", "✅", "✅"],
                    ["Custom Integrations", "❌", "❌", "✅", "✅"],
                    ["On-premise Deployment", "❌", "❌", "❌", "✅"],
                    ["Dedicated Manager", "❌", "❌", "❌", "✅"],
                    ["SLA Uptime", "99%", "99.5%", "99.8%", "99.9%"],
                    ["Support", "Email", "Priority", "24/7", "Dedicated"],
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-4 font-medium">{row[0]}</td>
                      <td className="p-4 text-center">{row[1]}</td>
                      <td className="p-4 text-center">{row[2]}</td>
                      <td className="p-4 text-center">{row[3]}</td>
                      <td className="p-4 text-center">{row[4]}</td>
                    </tr>
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

export default Services;
