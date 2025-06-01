
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Clock, Users, Phone, MessageCircle, BarChart3, Shield, Zap, Mail } from 'lucide-react';

const TechSaas = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-violet-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            AI CHATBOT IMPACT REPORT – NGÀNH CÔNG NGHỆ & PHẦN MỀM (SaaS, IT)
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-violet-100 bg-clip-text text-transparent">
            +25% Lead qualified
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-violet-100">
            −40% Thời gian xử lý yêu cầu
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-violet-600 hover:bg-violet-50 font-semibold px-8 py-3">
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
              <TrendingUp className="h-12 w-12 mb-4 mx-auto text-violet-200" />
              <h3 className="text-lg font-semibold mb-2">Lead Qualification</h3>
              <p className="text-violet-100">Sàng lọc khách hàng tiềm năng</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <BarChart3 className="h-12 w-12 mb-4 mx-auto text-purple-200" />
              <h3 className="text-lg font-semibold mb-2">Demo Scheduling</h3>
              <p className="text-violet-100">Lên lịch demo tự động</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Users className="h-12 w-12 mb-4 mx-auto text-indigo-200" />
              <h3 className="text-lg font-semibold mb-2">Support 24/7</h3>
              <p className="text-violet-100">Hỗ trợ kỹ thuật</p>
            </div>
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Executive Summary</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Chatbot AI giúp các công ty SaaS & IT tự động hóa tiếp nhận lead, tư vấn tính năng, lên lịch demo và 
              hỗ trợ kỹ thuật 24/7. Doanh nghiệp áp dụng ghi nhận:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-green-600">+20–25%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Lead đủ điều kiện (MQL)</p>
                </CardContent>
              </Card>
              <Card className="border-violet-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Clock className="h-12 w-12 text-violet-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-violet-600">−40%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Thời gian xử lý ticket ban đầu</p>
                </CardContent>
              </Card>
              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <BarChart3 className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-purple-600">4–8 tháng</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">ROI hoàn vốn, tùy quy mô</p>
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
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <Clock className="mr-3 h-6 w-6" />
                  Phản hồi chậm lead mới
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Bot qualify nhanh, tự động chuyển sales</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-600">
                  <BarChart3 className="mr-3 h-6 w-6" />
                  Demo & onboarding mất nhiều bước
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Chatbot lên lịch, gửi link và tài liệu tự động</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <Users className="mr-3 h-6 w-6" />
                  Hỗ trợ kỹ thuật lặp lại
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Bot trả lời FAQ, chuyển escalated ticket</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-600">
                  <TrendingUp className="mr-3 h-6 w-6" />
                  Thu thập feedback & upsell thủ công
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Chatbot khai thác nhu cầu và gợi ý gói nâng cấp</p>
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
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Users, title: "Lead qualification & phân loại theo industry", color: "text-blue-600" },
              { icon: BarChart3, title: "Lên lịch demo & gửi link tự động", color: "text-green-600" },
              { icon: Shield, title: "Hỗ trợ cài đặt cơ bản & hướng dẫn API", color: "text-red-600" },
              { icon: CheckCircle, title: "Triaging support ticket & tạo ticket", color: "text-purple-600" },
              { icon: MessageCircle, title: "Thu thập feedback & NPS sau triển khai", color: "text-orange-600" },
              { icon: TrendingUp, title: "Gợi ý cross-sell / upsell modules bổ trợ", color: "text-pink-600" }
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
      <section className="py-16 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Market Benchmarks 2024</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">30</h3>
              <p className="text-violet-100">Nền tảng SaaS khu vực SEA khảo sát</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">35%</h3>
              <p className="text-violet-100">Tỷ lệ MQL conversion trung vị</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">42%</h3>
              <p className="text-violet-100">Tỷ lệ ticket tự động giải quyết</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Journey */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Customer Journey & Flow Tự Động</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-4 text-center">
              {[
                "Visitor truy cập website",
                "Bot chào & hỏi mục tiêu",
                "Gởi tài liệu & demo link",
                "Lên lịch demo",
                "Hỗ trợ cài đặt",
                "Triaging ticket",
                "Khảo sát NPS"
              ].map((step, index) => (
                <React.Fragment key={index}>
                  <div className="bg-white rounded-lg p-4 shadow-md min-w-[200px]">
                    <p className="text-sm font-medium text-gray-800">{step}</p>
                  </div>
                  {index < 6 && (
                    <div className="text-violet-600 font-bold text-2xl">▶️</div>
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
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Omnichannel (Web chat, In-app, Messenger, Slack)",
              "NLP hiểu domain-specific intent & entity (API, module)",
              "API/Webhook integration dễ cấu hình",
              "Authentication (OAuth2, SSO) cho khách hàng",
              "Escalation rules & live agent handoff",
              "Dashboard real-time: leads, tickets, CSAT"
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
      <section className="py-16 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Case Study - GetPro CRM</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Thông tin cơ bản</h3>
                <ul className="space-y-2 text-violet-100">
                  <li>• Khách hàng: nền tảng CRM SaaS</li>
                  <li>• 500 lead/tháng</li>
                  <li>• Giải pháp: Chatbot Web & Slack bot tích hợp Salesforce</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Kết quả sau 4 tháng</h3>
                <ul className="space-y-2 text-violet-100">
                  <li>• +22% lead qualified</li>
                  <li>• −35% ticket volume</li>
                  <li>• ROI 2.5×</li>
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
          <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white font-bold px-12 py-4 text-lg">
            <MessageCircle className="mr-3 h-6 w-6" />
            https://tinyurl.com/d2group-chatbot
          </Button>
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
                <p>• MQL – Marketing Qualified Lead</p>
                <p>• CSAT – Customer Satisfaction Score</p>
                <p>• NPS – Net Promoter Score</p>
                <p>• API – Application Programming Interface</p>
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

export default TechSaas;
