
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Clock, Users, Calendar, MessageCircle, BarChart3, Shield, Sparkles, Star, Heart, Zap } from 'lucide-react';

const SpaReport = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-rose-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            AI CHATBOT IMPACT REPORT – NGÀNH SPA & THẨM MỸ
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
            +20% Lượt đặt lịch
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-pink-100">
            -30% Tỉ lệ hủy hẹn
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50 font-semibold px-8 py-3">
              <MessageCircle className="mr-2 h-5 w-5" />
              chatbot@d2group.vn
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3">
              <Users className="mr-2 h-5 w-5" />
              028 9999 8888
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Sparkles className="h-12 w-12 mb-4 mx-auto text-pink-200" />
              <h3 className="text-lg font-semibold mb-2">Spa Services</h3>
              <p className="text-pink-100">Phong spa thư giãn</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <MessageCircle className="h-12 w-12 mb-4 mx-auto text-purple-200" />
              <h3 className="text-lg font-semibold mb-2">Chat Widget</h3>
              <p className="text-pink-100">Giao diện chatbot trên smartphone</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Calendar className="h-12 w-12 mb-4 mx-auto text-rose-200" />
              <h3 className="text-lg font-semibold mb-2">Booking System</h3>
              <p className="text-pink-100">Đặt lịch tự động 24/7</p>
            </div>
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Executive Summary</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Chatbot AI nâng tầm trải nghiệm khách hàng spa & thẩm mỹ qua tự động hoá đặt lịch, 
              tư vấn dịch vụ và chăm sóc sau – giúp:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-pink-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Calendar className="h-12 w-12 text-pink-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-pink-600">+18–25%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Lượt đặt lịch thành công</p>
                </CardContent>
              </Card>
              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Clock className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-purple-600">-30%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Tỉ lệ hủy hẹn không báo trước</p>
                </CardContent>
              </Card>
              <Card className="border-rose-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-rose-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-rose-600">4–9 tháng</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">ROI hòa vốn tùy quy mô</p>
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
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <Calendar className="mr-3 h-6 w-6" />
                  Hủy hẹn cao
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">→ Nhắc lịch thông minh & xác nhận tự động</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-600">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Hotline quá tải
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">→ Bot trả lời FAQ, chuyển agent khẩn khi cần</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-pink-600">
                  <Sparkles className="mr-3 h-6 w-6" />
                  Upsell dịch vụ thủ công
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">→ AI đề xuất gói/chăm sóc cá nhân hoá</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-600">
                  <Users className="mr-3 h-6 w-6" />
                  Thiếu dữ liệu khách
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">→ Bot lưu lịch sử, kích hoạt chương trình loyalty</p>
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
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Calendar, title: "Đặt / xác nhận lịch 24/7", color: "text-pink-600" },
              { icon: Sparkles, title: "Tư vấn dịch vụ & gói ưu đãi", color: "text-purple-600" },
              { icon: Clock, title: "Nhắc lịch tự động trước 24 giờ", color: "text-blue-600" },
              { icon: Star, title: "Hỏi thăm sau liệu trình (feedback, CSAT)", color: "text-yellow-600" },
              { icon: Heart, title: "Upsell mỹ phẩm & sản phẩm chăm sóc da", color: "text-rose-600" },
              { icon: Badge, title: "Quản lý membership & tích điểm", color: "text-indigo-600" }
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
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Market Benchmarks 2024</h2>
            <p className="text-xl text-pink-100">Khảo sát 25 thương hiệu spa & thẩm mỹ tại VN</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">45%</h3>
              <p className="text-pink-100">Tỉ lệ đặt lịch tự động trung vị</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">30%</h3>
              <p className="text-pink-100">Tỉ lệ hủy hẹn giảm</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">2.5×</h3>
              <p className="text-pink-100">ROI năm đầu trung bình</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Journey */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Customer Journey & Flow Tự Động</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-4 text-center">
              {[
                "Khách xem QC",
                "Bot chào & khảo sát nhu cầu",
                "Gợi ý liệu trình",
                "Đặt lịch",
                "Nhắc lịch",
                "Hậu dịch vụ: thu feedback",
                "Gợi ý tái hẹn"
              ].map((step, index) => (
                <React.Fragment key={index}>
                  <div className="bg-white rounded-lg p-4 shadow-md min-w-[200px]">
                    <p className="text-sm font-medium text-gray-800">{step}</p>
                  </div>
                  {index < 6 && (
                    <div className="text-pink-600 font-bold text-2xl">▶️</div>
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
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Omnichannel (FB, Zalo, Web chat)",
              "Lịch & Google Calendar Sync",
              "NLP intent recognition",
              "Hình ảnh & video demo liệu trình",
              "AI recommendation engine",
              "Dashboard real-time (booking, CSAT)"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-pink-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-pink-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Systems */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Tích Hợp Hệ Thống</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Sparkles className="h-12 w-12 text-pink-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Spa Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Zenoti, Mindbody</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Calendar API</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Google, Outlook</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">VNPay, Momo</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-rose-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Messaging</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Facebook, Zalo, Web Chat</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Lộ Trình Triển Khai Đề Xuất</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { period: "Thg 0–1", content: "Phân tích quy trình, prototype", color: "bg-pink-100 border-pink-300" },
              { period: "Thg 1–3", content: "Kết nối Calendar & MVP launch", color: "bg-purple-100 border-purple-300" },
              { period: "Thg 3–6", content: "Tối ưu AI upsell & nhắc lịch", color: "bg-rose-100 border-rose-300" },
              { period: "Thg 6–12", content: "Mở rộng đa cơ sở, đa ngôn ngữ", color: "bg-indigo-100 border-indigo-300" }
            ].map((phase, index) => (
              <Card key={index} className={`${phase.color} border-2`}>
                <CardHeader>
                  <CardTitle className="text-lg">{phase.period}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{phase.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Case Study Ngắn – LUXURY SPA X (HCM)</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h3 className="text-2xl font-bold text-pink-600 mb-2">3 cơ sở</h3>
                    <p className="text-gray-600">Chuỗi spa cao cấp</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-purple-600 mb-2">+22%</h3>
                    <p className="text-gray-600">Lượt đặt lịch sau 6 tháng</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-rose-600 mb-2">ROI 2.6×</h3>
                    <p className="text-gray-600">Triển khai chatbot FB & Web chat</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* KPI Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">KPI & Khung Đo Lường</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { label: "Tỉ lệ đặt lịch tự động", unit: "%" },
              { label: "Tỉ lệ hủy hẹn không báo", unit: "%" },
              { label: "First-response time", unit: "giây" },
              { label: "CSAT score", unit: "1–5" },
              { label: "Tỉ lệ tái hẹn 30 ngày", unit: "%" }
            ].map((kpi, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BarChart3 className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                  <CardTitle className="text-sm">{kpi.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-gray-600">({kpi.unit})</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Next Steps & Call To Action</h2>
          <p className="text-xl mb-8 text-pink-100 max-w-2xl mx-auto">
            Đặt lịch demo cá nhân hoá hoặc nhận tư vấn chi tiết
          </p>
          <div className="space-y-4">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50 font-bold px-12 py-4 text-lg">
              <Sparkles className="mr-3 h-6 w-6" />
              Demo Ngay
            </Button>
            <p className="text-pink-200">
              <a href="https://tinyurl.com/d2group-chatbot" className="underline hover:text-white">
                https://tinyurl.com/d2group-chatbot
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Liên Hệ</h3>
              <p className="text-gray-300 mb-2">Email: chatbot@d2group.vn</p>
              <p className="text-gray-300 mb-2">Phone: 028 9999 8888</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Phụ Lục – Thuật Ngữ</h3>
              <div className="text-gray-300 space-y-1">
                <p>• CSAT – Customer Satisfaction Score</p>
                <p>• ROI – Return on Investment</p>
                <p>• PDPA – Personal Data Protection Act</p>
                <p>• AI – Artificial Intelligence</p>
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

export default SpaReport;
