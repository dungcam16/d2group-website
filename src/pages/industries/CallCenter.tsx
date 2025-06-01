
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Clock, Users, Phone, MessageCircle, BarChart3, Shield, Zap, Mail } from 'lucide-react';

const CallCenter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-rose-600 via-pink-600 to-rose-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            AI CHATBOT IMPACT REPORT – NGÀNH DỊCH VỤ KHÁCH HÀNG (CALL CENTER)
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-rose-100 bg-clip-text text-transparent">
            +35% Cuộc gọi tự động
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-rose-100">
            −40% Thời gian chờ
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50 font-semibold px-8 py-3">
              <Mail className="mr-2 h-5 w-5" />
              chatbot@d2group.vn
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              090909.9421
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Phone className="h-12 w-12 mb-4 mx-auto text-rose-200" />
              <h3 className="text-lg font-semibold mb-2">Call Routing</h3>
              <p className="text-rose-100">Định tuyến cuộc gọi thông minh</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Users className="h-12 w-12 mb-4 mx-auto text-pink-200" />
              <h3 className="text-lg font-semibold mb-2">Agent Support</h3>
              <p className="text-rose-100">Hỗ trợ agent 24/7</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Zap className="h-12 w-12 mb-4 mx-auto text-red-200" />
              <h3 className="text-lg font-semibold mb-2">Auto Resolution</h3>
              <p className="text-rose-100">Giải quyết tự động</p>
            </div>
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Executive Summary</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              AI Chatbot tích hợp vào Call Center tự động hóa tiếp nhận & phân loại cuộc gọi/chat, trả lời FAQ, 
              và chuyển agent khi cần chuyên sâu. Các doanh nghiệp dịch vụ khách hàng áp dụng ghi nhận:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-green-600">+30–35%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Tỉ lệ yêu cầu xử lý tự động</p>
                </CardContent>
              </Card>
              <Card className="border-rose-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Clock className="h-12 w-12 text-rose-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-rose-600">−40%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Thời gian chờ trung bình</p>
                </CardContent>
              </Card>
              <Card className="border-pink-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <BarChart3 className="h-12 w-12 text-pink-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-pink-600">3–7 tháng</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">ROI hòa vốn</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points & Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Pain Points & Cơ Hội</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <Phone className="mr-3 h-6 w-6" />
                  Overload cuộc gọi vào giờ cao điểm
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Bot giải đáp FAQ & chỉ chuyển agent với trường hợp phức tạp</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-600">
                  <Clock className="mr-3 h-6 w-6" />
                  KPI SLA khó đáp ứng
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Chatbot cảnh báo tự động khi sắp quá hạn</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <BarChart3 className="mr-3 h-6 w-6" />
                  Thống kê không chi tiết
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Bot ghi log & phân loại intent, sentiment</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-600">
                  <Users className="mr-3 h-6 w-6" />
                  Đào tạo agent tốn thời gian
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Bot hướng dẫn kịch bản xử lý, trợ giúp real-time</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Bản Đồ Use-Case Chatbot</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: MessageCircle, title: "Trả lời FAQ (hóa đơn, đơn hàng, lịch hẹn)", color: "text-blue-600" },
              { icon: BarChart3, title: "Phân loại intent & sentiment trước khi chuyển agent", color: "text-green-600" },
              { icon: CheckCircle, title: "Tạo ticket tự động vào hệ thống CRM", color: "text-red-600" },
              { icon: Clock, title: "Cảnh báo SLA & nhắc agent follow-up", color: "text-purple-600" },
              { icon: Users, title: "Khảo sát CSAT sau tương tác", color: "text-orange-600" },
              { icon: Shield, title: "Hỗ trợ live agent với gợi ý kịch bản", color: "text-pink-600" }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <item.icon className={`h-12 w-12 ${item.color} mx-auto mb-4`} />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Benchmarks */}
      <section className="py-16 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Market Benchmarks 2024</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">50</h3>
              <p className="text-rose-100">Trung tâm CSKH tại VN khảo sát</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">38%</h3>
              <p className="text-rose-100">Tỉ lệ tự động hóa tương tác trung vị</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">+14</h3>
              <p className="text-rose-100">NPS tăng điểm sau 3 tháng</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Journey */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Customer Journey & Flow Tự Động</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto"></div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-4 text-center">
              {[
                "Người dùng gọi/chat",
                "Bot chào & yêu cầu mục đích",
                "Giải đáp FAQ hoặc tạo ticket",
                "Phân loại & sentiment analysis",
                "Chuyển agent nếu cần",
                "Thu survey CSAT",
                "Gửi follow-up tự động"
              ].map((step, index) => (
                <React.Fragment key={index}>
                  <div className="bg-white rounded-lg p-4 shadow-md min-w-[200px]">
                    <p className="text-sm font-medium text-gray-800">{step}</p>
                  </div>
                  {index < 6 && (
                    <div className="text-rose-600 font-bold text-2xl">▶️</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Checklist */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Checklist Tính Năng Cốt Lõi</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "NLP Intent & Sentiment Analysis",
              "Omnichannel (Voice IVR, Web Chat, Messenger, Zalo)",
              "Ticketing & CRM Integration (Zendesk, Salesforce)",
              "SLA Tracking & Alerting",
              "Knowledge Base tự động cập nhật",
              "Dashboard real-time (volume, CSAT, SLA)"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Case Study - Telco ABC (VN)</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Thông tin cơ bản</h3>
                <ul className="space-y-2 text-rose-100">
                  <li>• Tập khách hàng: 200.000 cuộc gọi/tháng</li>
                  <li>• Giải pháp: Chatbot Voice IVR + Messenger bot</li>
                  <li>• Tích hợp Zendesk</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Kết quả sau 5 tháng</h3>
                <ul className="space-y-2 text-rose-100">
                  <li>• +32% tương tác tự động</li>
                  <li>• −38% thời gian chờ</li>
                  <li>• ROI 3×</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Next Steps & Call To Action</h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Đặt lịch demo cá nhân hoá hoặc nhận tư vấn chi tiết
          </p>
          <a href="https://tinyurl.com/d2group-chatbot" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white font-bold px-12 py-4 text-lg">
              <MessageCircle className="mr-3 h-6 w-6" />
              NHẬN DEMO/BÁO GIÁ NGAY
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Liên Hệ</h3>
              <p className="text-gray-300 mb-2">Email: chatbot@d2group.vn</p>
              <p className="text-gray-300 mb-2">Phone: 090909.9421</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Phụ Lục (Thuật Ngữ)</h3>
              <div className="text-gray-300 space-y-1">
                <p>• IVR – Interactive Voice Response</p>
                <p>• SLA – Service Level Agreement</p>
                <p>• CSAT – Customer Satisfaction Score</p>
                <p>• NPS – Net Promoter Score</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 D2Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CallCenter;
