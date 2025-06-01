
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Clock, Users, ShoppingCart, MessageCircle, BarChart3, Shield, Zap, Globe, Coffee, Utensils, Phone } from 'lucide-react';

const FnBReport = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-orange-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            AI CHATBOT IMPACT REPORT - NGÀNH F&B
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
            Tăng 25% Giá trị đơn
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-orange-100">
            Giảm 40% Thời gian phản hồi
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
            NGÀNH F&B - NHÀ HÀNG & CHUỖI CAFÉ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8 py-3">
              <MessageCircle className="mr-2 h-5 w-5" />
              chatbot@d2group.vn
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              028 9999 8888
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Coffee className="h-12 w-12 mb-4 mx-auto text-orange-200" />
              <h3 className="text-lg font-semibold mb-2">Café & Bar</h3>
              <p className="text-orange-100">Đặt bàn & order tự động</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Utensils className="h-12 w-12 mb-4 mx-auto text-red-200" />
              <h3 className="text-lg font-semibold mb-2">Nhà hàng</h3>
              <p className="text-orange-100">Menu thông minh & gợi ý combo</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <BarChart3 className="h-12 w-12 mb-4 mx-auto text-yellow-200" />
              <h3 className="text-lg font-semibold mb-2">Analytics</h3>
              <p className="text-orange-100">Báo cáo real-time</p>
            </div>
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Executive Summary</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Chatbot AI đang thay đổi cách nhà hàng & chuỗi café phục vụ khách: đặt bàn tức thì, nhận đơn 24/7, 
              gợi ý combo theo khẩu vị. Doanh nghiệp F&B áp dụng sớm trong khu vực ASEAN ghi nhận:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-green-600">+15-25%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Average Order Value (AOV) sau 6 tháng</p>
                </CardContent>
              </Card>
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-blue-600">-40%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Thời gian phản hồi Facebook/Zalo</p>
                </CardContent>
              </Card>
              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <BarChart3 className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-purple-600">3-9 tháng</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">ROI hoàn vốn (tùy quy mô)</p>
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
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <Phone className="mr-3 h-6 w-6" />
                  Đặt bàn gọi điện tốn thời gian
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Chatbot xác nhận trong 5s, đồng bộ POS</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-600">
                  <Clock className="mr-3 h-6 w-6" />
                  Giờ cao điểm sót đơn online
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Bot luôn trực, tự phân chia bếp/phòng ăn</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <TrendingUp className="mr-3 h-6 w-6" />
                  Upsell kém nhất quán
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ AI gợi món/cặp món dựa trên giỏ hàng & giờ dùng bữa</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-600">
                  <Users className="mr-3 h-6 w-6" />
                  Khách lẻ khó tạo dữ liệu
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Bot lưu lịch sử món ưa thích, kích hoạt loyalty</p>
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
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Zap, title: "Chào khách + ưu đãi hôm nay", color: "text-yellow-600" },
              { icon: Utensils, title: "Đặt bàn / Đặt món mang đi", color: "text-blue-600" },
              { icon: CheckCircle, title: "Xác nhận & đồng bộ POS", color: "text-green-600" },
              { icon: ShoppingCart, title: "Nhắc pha chế/giao hàng (GrabFood/ShopeeFood)", color: "text-red-600" },
              { icon: Users, title: "Thu feedback 5 sao → mời đánh giá Google", color: "text-purple-600" },
              { icon: Badge, title: "Gửi mã giảm giá đơn sau (tăng lượt quay lại)", color: "text-orange-600" }
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
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Market Benchmarks 2024</h2>
            <p className="text-xl text-orange-100">32 thương hiệu F&B Đông Nam Á khảo sát</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">48%</h3>
              <p className="text-orange-100">Tỷ lệ đơn tự động hóa trung vị</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">22%</h3>
              <p className="text-orange-100">AOV tăng trung bình sau triển khai</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">18%</h3>
              <p className="text-orange-100">Số cuộc gọi hotline giảm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Journey */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Customer Journey & Flow Tự Động</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-4 text-center">
              {[
                "Khách nhìn thấy bài quảng cáo",
                "Nhấp Messenger",
                "Bot chào + menu nhanh",
                "Lọc món theo dị ứng",
                "Xác nhận thanh toán",
                "Bot gửi tiến trình đơn",
                "Nhắc đánh giá",
                "Đăng ký thành viên"
              ].map((step, index) => (
                <React.Fragment key={index}>
                  <div className="bg-white rounded-lg p-4 shadow-md min-w-[200px]">
                    <p className="text-sm font-medium text-gray-800">{step}</p>
                  </div>
                  {index < 7 && (
                    <div className="text-orange-600 font-bold text-2xl">▶️</div>
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
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "NLP đa ngôn ngữ (VN–EN–KR–JP)",
              "Tích hợp POS KiotViet, iPOS, CukCuk",
              "Cổng thanh toán Momo, VNPay, ZaloPay",
              "Gợi ý combo bằng máy học",
              "Bảng điều khiển real-time: đơn, AOV, CSAT",
              "Quản lý voucher & loyalty qua CRM"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
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
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <ShoppingCart className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Delivery API</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">GrabFood, ShopeeFood - cập nhật trạng thái giao hàng</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">CRM/Loyalty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">HubSpot, Zoho - phân loại khách thân thiết</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Kênh bán</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Facebook, Zalo OA, Web Chat, QR tại bàn</p>
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
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { period: "Tháng 0–1", content: "Khảo sát quy trình, chọn kênh, dựng prototype", color: "bg-blue-100 border-blue-300" },
              { period: "Tháng 1–3", content: "Kết nối POS, ra mắt MVP tại 1 chi nhánh", color: "bg-green-100 border-green-300" },
              { period: "Tháng 3–6", content: "Tối ưu upsell, A/B thông điệp, đào tạo staff", color: "bg-purple-100 border-purple-300" },
              { period: "Tháng 6–12", content: "Nhân rộng toàn chuỗi, kích hoạt đa ngôn ngữ, tích hợp loyalty", color: "bg-orange-100 border-orange-300" }
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
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Case Study - Café Aurora (HCMC)</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Thông tin cơ bản</h3>
                <ul className="space-y-2 text-orange-100">
                  <li>• 5 cửa hàng, 450 đơn/ngày</li>
                  <li>• Triển khai bot Messenger + Zalo</li>
                  <li>• Đồng bộ iPOS</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Kết quả sau 6 tháng</h3>
                <ul className="space-y-2 text-orange-100">
                  <li>• +28% AOV</li>
                  <li>• Giảm 3 phút quy trình order</li>
                  <li>• ROI 2.7×</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KPI & Measurement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">KPI & Khung Đo Lường</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { metric: "Tỷ lệ đơn tự động hóa", unit: "%" },
              { metric: "Average Order Value", unit: "₫" },
              { metric: "First Response Time", unit: "giây" },
              { metric: "Feedback Score", unit: "1–5" },
              { metric: "Tỷ lệ quay lại sau 30 ngày", unit: "%" }
            ].map((kpi, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BarChart3 className="h-12 w-12 text-orange-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">{kpi.metric}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-orange-600">({kpi.unit})</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Tuân Thủ & Bảo Mật</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Mã hóa dữ liệu AES-256, HTTPS mặc định",
              "Phân quyền nhân viên qua SSO",
              "Tuân thủ PDPA/GDPR, log truy cập 365 ngày"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                <Shield className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Next Steps & Call To Action</h2>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            Đặt lịch demo cá nhân hoá hoặc nhận tư vấn chi tiết
          </p>
          <div className="space-y-4">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-12 py-4 text-lg">
              <Coffee className="mr-3 h-6 w-6" />
              Demo Ngay
            </Button>
            <p className="text-orange-200">
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
              <h3 className="text-2xl font-bold mb-4">Phụ Lục (Thuật Ngữ)</h3>
              <div className="text-gray-300 space-y-1">
                <p>• AOV – Average Order Value</p>
                <p>• CSAT – Customer Satisfaction Score</p>
                <p>• NLP – Natural Language Processing</p>
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

export default FnBReport;
