
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Clock, Users, Phone, MessageCircle, BarChart3, Shield, Zap, Mail } from 'lucide-react';

const Logistics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-amber-600 via-orange-600 to-amber-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            AI CHATBOT IMPACT REPORT – NGÀNH LOGISTICS & VẬN CHUYỂN
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">
            +30% Tự động cập nhật trạng thái
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-amber-100">
            −25% Cuộc gọi CSKH
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 font-semibold px-8 py-3">
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
              <BarChart3 className="h-12 w-12 mb-4 mx-auto text-amber-200" />
              <h3 className="text-lg font-semibold mb-2">Tracking</h3>
              <p className="text-amber-100">Theo dõi đơn hàng real-time</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Clock className="h-12 w-12 mb-4 mx-auto text-orange-200" />
              <h3 className="text-lg font-semibold mb-2">ETA Updates</h3>
              <p className="text-amber-100">Cập nhật thời gian giao hàng</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Users className="h-12 w-12 mb-4 mx-auto text-yellow-200" />
              <h3 className="text-lg font-semibold mb-2">Support 24/7</h3>
              <p className="text-amber-100">Hỗ trợ khách hàng</p>
            </div>
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Executive Summary</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Chatbot AI giảm tải cho đội ngũ logistics bằng cách tự động trả lời truy vấn về theo dõi, ETA, 
              báo cáo sự cố và thu thập phản hồi 24/7. Trong 6 tháng đầu triển khai, doanh nghiệp logistics cho biết:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-green-600">+28–35%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Tỉ lệ tự động phản hồi trạng thái vận chuyển</p>
                </CardContent>
              </Card>
              <Card className="border-amber-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Clock className="h-12 w-12 text-amber-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-amber-600">−25%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Số cuộc gọi đến bộ phận CSKH</p>
                </CardContent>
              </Card>
              <Card className="border-orange-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <BarChart3 className="h-12 w-12 text-orange-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-orange-600">5–9 tháng</CardTitle>
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
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <Phone className="mr-3 h-6 w-6" />
                  Khách hỏi trạng thái đơn liên tục
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Bot cung cấp tracking real-time, cảnh báo chậm trễ</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-600">
                  <Clock className="mr-3 h-6 w-6" />
                  Đơn hủy/ngưng giao trễ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Chatbot phân tích lý do, đề xuất phương án bù đắp</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <BarChart3 className="mr-3 h-6 w-6" />
                  Tài xế cần hỗ trợ đường đi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Bot gợi ý lộ trình, cập nhật traffic</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-600">
                  <Users className="mr-3 h-6 w-6" />
                  Thống kê khiếu nại phân tán
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Bot ghi nhận sentiment, tự tạo ticket</p>
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
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: BarChart3, title: "Nhập mã đơn để tra cứu trạng thái", color: "text-blue-600" },
              { icon: Clock, title: "Cảnh báo ETA sớm/chậm qua Zalo/Messenger", color: "text-green-600" },
              { icon: Shield, title: "Xử lý báo sự cố (mất hàng, hư hỏng)", color: "text-red-600" },
              { icon: Users, title: "Hỗ trợ hướng dẫn tài xế (GPS, contact CS)", color: "text-purple-600" },
              { icon: CheckCircle, title: "Tạo ticket & chuyển live agent khi cần", color: "text-orange-600" },
              { icon: MessageCircle, title: "Khảo sát NPS & CSAT sau giao hàng", color: "text-pink-600" }
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
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Market Benchmarks 2024</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">30</h3>
              <p className="text-amber-100">Công ty logistics trong SEA khảo sát</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">42%</h3>
              <p className="text-amber-100">Tỉ lệ tự động phản hồi trung vị</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">+15%</h3>
              <p className="text-amber-100">Tăng on-time delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Journey */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Customer Journey & Flow Tự Động</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-4 text-center">
              {[
                "Khách đặt hàng",
                "Bot gửi link tracking",
                "Bot nhắc ETA & giao hàng",
                "Nếu trễ: báo lỗi & hướng xử lý",
                "Giao xong: thu feedback",
                "Gợi ý re-order"
              ].map((step, index) => (
                <React.Fragment key={index}>
                  <div className="bg-white rounded-lg p-4 shadow-md min-w-[200px]">
                    <p className="text-sm font-medium text-gray-800">{step}</p>
                  </div>
                  {index < 5 && (
                    <div className="text-amber-600 font-bold text-2xl">▶️</div>
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
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Omnichannel: Web widget, Zalo OA, Messenger, SMS",
              "Tích hợp TMS (SAP TM, Oracle Logistics)",
              "NLP hiểu mã đơn, địa chỉ, vấn đề",
              "API kết nối Couriers (GHN, GHTK, DHL)",
              "Dashboard real-time: trạng thái, CSAT, NPS",
              "Escalation rules & SLA alerts"
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
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Case Study - VNE Logistics</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Thông tin cơ bản</h3>
                <ul className="space-y-2 text-amber-100">
                  <li>• Khối lượng: 1.200 đơn/ngày</li>
                  <li>• Giải pháp: Chatbot Web & Zalo</li>
                  <li>• Tích hợp GHN API</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Kết quả sau 6 tháng</h3>
                <ul className="space-y-2 text-amber-100">
                  <li>• +32% tự động cập nhật trạng thái</li>
                  <li>• −27% cuộc gọi CSKH</li>
                  <li>• ROI 2.6×</li>
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
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-12 py-4 text-lg">
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
                <p>• TMS – Transportation Management System</p>
                <p>• ETA – Estimated Time of Arrival</p>
                <p>• POD – Proof of Delivery</p>
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

export default Logistics;
