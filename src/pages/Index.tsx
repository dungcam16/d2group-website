
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: "Tương tác thông minh",
      description: "Chatbot hiểu ngữ cảnh, trả lời tự nhiên như con người thực sự",
      icon: "🧠",
    },
    {
      title: "Triển khai tức thì", 
      description: "Cấu hình nhanh trong 5 phút, không cần code hay kỹ thuật phức tạp",
      icon: "⚡",
    },
    {
      title: "Phân tích & báo cáo",
      description: "Dashboard real-time đo lường hiệu quả, ROI và insights khách hàng",
      icon: "📊",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-ai-gradient-soft relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">Tự động hóa</span><br />
                tương tác khách hàng<br />
                với <span className="gradient-text">AI Chatbot</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg">
                24/7 tư vấn, cá nhân hoá và chốt đơn tự động
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-ai-orange hover:bg-ai-orange/90 text-white font-semibold px-8 py-4 text-lg">
                  Dùng thử miễn phí
                </Button>
                <Button size="lg" variant="outline" className="border-ai-blue text-ai-blue hover:bg-ai-blue hover:text-white px-8 py-4 text-lg">
                  Xem Demo
                </Button>
              </div>
            </div>

            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="float-element">
                <div className="relative">
                  <div className="w-80 h-80 mx-auto bg-ai-gradient rounded-full opacity-20 animate-pulse-glow"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="glass rounded-3xl p-8 w-72 space-y-4">
                      <div className="flex items-center space-x-3 chat-bubble">
                        <div className="w-8 h-8 bg-ai-blue rounded-full"></div>
                        <div className="flex-1 bg-gray-100 rounded-lg p-3">
                          <p className="text-sm">Chào bạn! Tôi có thể giúp gì?</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 chat-bubble">
                        <div className="flex-1 bg-ai-blue text-white rounded-lg p-3 ml-auto">
                          <p className="text-sm">Muốn tìm hiểu sản phẩm</p>
                        </div>
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      </div>
                      <div className="flex items-center space-x-3 chat-bubble">
                        <div className="w-8 h-8 bg-ai-blue rounded-full"></div>
                        <div className="flex-1 bg-gray-100 rounded-lg p-3">
                          <p className="text-sm">Tuyệt vời! Hãy để tôi tư vấn...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              Tại sao chọn D2 Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Với công nghệ AI tiên tiến và kinh nghiệm trong ngành, chúng tôi mang đến giải pháp chatbot hoàn hảo cho doanh nghiệp của bạn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-6 group-hover:animate-float">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-ai-blue transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-20 bg-ai-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              Xem AI Chatbot hoạt động
            </h2>
            <p className="text-xl text-gray-600">
              Video demo 2 phút để hiểu cách chatbot của chúng tôi tương tác với khách hàng
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-900 rounded-2xl shadow-2xl relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-ai-gradient opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-l-[12px] border-l-ai-blue border-y-[8px] border-y-transparent ml-1"></div>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Demo: AI Chatbot trong thực tế</h3>
                <p className="text-white/80">2:30 phút • D2 Group</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ai-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Sẵn sàng tự động hóa tương tác khách hàng?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Bắt đầu dùng thử miễn phí 14 ngày. Không cần thẻ tín dụng, thiết lập trong 5 phút.
          </p>
          <Button size="lg" className="bg-ai-orange hover:bg-ai-orange/90 text-white font-semibold px-8 py-4 text-lg">
            Bắt đầu miễn phí ngay
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
