
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Clock, Users, Plane, MessageCircle, BarChart3, Shield, Zap, Phone, MapPin, Calendar } from 'lucide-react';

const Travel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-sky-600 via-blue-600 to-sky-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            AI CHATBOT IMPACT REPORT – NGÀNH DU LỊCH & LỮ HÀNH
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-sky-100 bg-clip-text text-transparent">
            +30% Đặt tour trực tuyến
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-sky-100">
            -20% Thời gian phản hồi
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-sky-600 hover:bg-sky-50 font-semibold px-8 py-3">
              <MessageCircle className="mr-2 h-5 w-5" />
              chatbot@d2group.vn
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              090909.9421
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Plane className="h-12 w-12 mb-4 mx-auto text-sky-200" />
              <h3 className="text-lg font-semibold mb-2">Tour Package</h3>
              <p className="text-sky-100">Đặt tour & vé máy bay</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <MapPin className="h-12 w-12 mb-4 mx-auto text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">Local Guide</h3>
              <p className="text-sky-100">Gợi ý điểm đến & lịch trình</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Calendar className="h-12 w-12 mb-4 mx-auto text-cyan-200" />
              <h3 className="text-lg font-semibold mb-2">Booking</h3>
              <p className="text-sky-100">Đặt phòng & dịch vụ</p>
            </div>
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Executive Summary</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              AI Chatbot tự động hóa tư vấn tour, đặt vé, hỗ trợ đa ngôn ngữ cho ngành du lịch & lữ hành 24/7. 
              Các công ty du lịch áp dụng sớm ghi nhận:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-green-600">+25-30%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Tỉ lệ chuyển đổi đặt tour online</p>
                </CardContent>
              </Card>
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-blue-600">-20%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Thời gian phản hồi yêu cầu khách hàng</p>
                </CardContent>
              </Card>
              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <BarChart3 className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-purple-600">4-8 tháng</CardTitle>
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
            <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <Phone className="mr-3 h-6 w-6" />
                  Khách chờ lâu khi hỏi tour/phương án
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Bot trả lời ngay, gợi ý lịch trình</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-600">
                  <Clock className="mr-3 h-6 w-6" />
                  Đặt vé/ngủ phòng ngoài giờ hành chính
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Chatbot tiếp nhận 24/7, đồng bộ OTA</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <TrendingUp className="mr-3 h-6 w-6" />
                  Tư vấn itinerary thủ công tốn thời gian
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ AI cá nhân hóa gợi ý theo sở thích</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-600">
                  <Users className="mr-3 h-6 w-6" />
                  Hủy/đổi tour bất ngờ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Nhắc lịch tự động, cập nhật điều kiện</p>
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
            <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Zap, title: "Khảo sát nhu cầu (địa điểm, ngân sách, thời gian)", color: "text-yellow-600" },
              { icon: Plane, title: "Gợi ý tour trọn gói & add-on", color: "text-blue-600" },
              { icon: CheckCircle, title: "Đặt vé máy bay & phòng khách sạn", color: "text-green-600" },
              { icon: MessageCircle, title: "Thanh toán & xuất e-voucher tự động", color: "text-red-600" },
              { icon: Users, title: "Nhắc lịch khởi hành, hướng dẫn check-in", color: "text-purple-600" },
              { icon: Shield, title: "Thu feedback & upsell dịch vụ địa phương", color: "text-orange-600" }
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
      <section className="py-16 bg-gradient-to-r from-sky-600 to-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Market Benchmarks 2024</h2>
            <p className="text-xl text-sky-100">30 doanh nghiệp lữ hành SEA khảo sát</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">28%</h3>
              <p className="text-sky-100">Tỉ lệ đặt tour trực tuyến tăng trung vị</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">-25%</h3>
              <p className="text-sky-100">Cuộc gọi CSKH giảm</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">+18</h3>
              <p className="text-sky-100">NPS tăng điểm sau 6 tháng</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Journey */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Customer Journey & Flow Tự Động</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-500 mx-auto"></div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-4 text-center">
              {[
                "Khách tìm kiếm tour",
                "Bot chào + hỏi nhu cầu", 
                "Gợi ý & so sánh gói",
                "Xác nhận & thanh toán",
                "Gửi e-voucher",
                "Nhắc trước khởi hành",
                "Thu feedback",
                "Gợi ý tour kế tiếp"
              ].map((step, index) => (
                <React.Fragment key={index}>
                  <div className="bg-white rounded-lg p-4 shadow-md min-w-[200px]">
                    <p className="text-sm font-medium text-gray-800">{step}</p>
                  </div>
                  {index < 7 && (
                    <div className="text-sky-600 font-bold text-2xl">▶️</div>
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
            <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Hỗ trợ đa ngôn ngữ (VN/EN, thậm chí JP/KR)",
              "NLP hiểu ngày tháng, địa danh",
              "Tích hợp Booking Engine (Amadeus, Travelport)",
              "Payment Gateway (Stripe, VNPay, Momo)",
              "Dynamic pricing & availability API",
              "Dashboard real-time (bookings, CVR, CSAT)"
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
      <section className="py-16 bg-gradient-to-r from-sky-600 to-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Case Study – TravelCo Việt Nam</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Thông tin cơ bản</h3>
                <ul className="space-y-2 text-sky-100">
                  <li>• Công ty lữ hành 5 chi nhánh</li>
                  <li>• Giải pháp: Chatbot Web & Zalo tích hợp Amadeus</li>
                  <li>• Tập khách hàng: 3.000 tour/tháng</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Kết quả sau 5 tháng</h3>
                <ul className="space-y-2 text-sky-100">
                  <li>• +32% đặt tour online</li>
                  <li>• -30% cuộc gọi CS</li>
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
            <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white font-bold px-12 py-4 text-lg">
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
                <p>• OTA – Online Travel Agency</p>
                <p>• CVR – Conversion Rate</p>
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

export default Travel;
