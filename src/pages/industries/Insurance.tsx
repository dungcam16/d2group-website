
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Clock, Users, Shield, MessageCircle, BarChart3, FileText, Zap, Heart, Phone, Mail } from 'lucide-react';

const Insurance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-50">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-sky-600 via-cyan-600 to-sky-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            AI CHATBOT IMPACT REPORT – NGÀNH BẢO HIỂM
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-sky-100 bg-clip-text text-transparent">
            +30% Lead Bảo hiểm
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-sky-100">
            −35% Thời gian xử lý yêu cầu
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-sky-600 hover:bg-sky-50 font-semibold px-8 py-3">
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
              <Shield className="h-12 w-12 mb-4 mx-auto text-sky-200" />
              <h3 className="text-lg font-semibold mb-2">Policy Management</h3>
              <p className="text-sky-100">Quản lý hợp đồng tự động</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <FileText className="h-12 w-12 mb-4 mx-auto text-cyan-200" />
              <h3 className="text-lg font-semibold mb-2">Claims Processing</h3>
              <p className="text-sky-100">Xử lý bồi thường nhanh</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Heart className="h-12 w-12 mb-4 mx-auto text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">Customer Care</h3>
              <p className="text-sky-100">Chăm sóc 24/7</p>
            </div>
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Executive Summary</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Chatbot AI tự động hóa tương tác khách hàng bảo hiểm 24/7: tư vấn sản phẩm, báo giá nhanh, 
              hỗ trợ yêu cầu bồi thường và gia hạn hợp đồng. Doanh nghiệp bảo hiểm áp dụng tại Việt Nam cho biết:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-green-600">+25–30%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Tỉ lệ lead đăng ký báo giá</p>
                </CardContent>
              </Card>
              <Card className="border-sky-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Clock className="h-12 w-12 text-sky-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-sky-600">−35%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Thời gian trả lời yêu cầu khách hàng</p>
                </CardContent>
              </Card>
              <Card className="border-cyan-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <BarChart3 className="h-12 w-12 text-cyan-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-cyan-600">5–10 tháng</CardTitle>
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
            <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <Clock className="mr-3 h-6 w-6" />
                  Thời gian tư vấn dài (gọi điện, email)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Bot trả lời FAQ & tự động gửi brochure PDF</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-600">
                  <Shield className="mr-3 h-6 w-6" />
                  Khách quên gia hạn hợp đồng
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Nhắc lịch tự động qua Zalo/Messenger</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <FileText className="mr-3 h-6 w-6" />
                  Quy trình bồi thường phức tạp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Hướng dẫn từng bước + thu hồ sơ qua chatbot</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-600">
                  <BarChart3 className="mr-3 h-6 w-6" />
                  Dữ liệu khách chưa đồng bộ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Chatbot ghi nhận thông tin, đẩy về CRM ngay</p>
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
            <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Shield, title: "Tư vấn gói bảo hiểm nhân thọ, sức khỏe, ô tô", color: "text-blue-600" },
              { icon: BarChart3, title: "Ước tính phí & báo giá nhanh", color: "text-green-600" },
              { icon: FileText, title: "Hỗ trợ khai báo và upload chứng từ bồi thường", color: "text-red-600" },
              { icon: Clock, title: "Nhắc gia hạn & thu phí định kỳ", color: "text-purple-600" },
              { icon: Users, title: "Chuyển agent khi cần tư vấn chuyên sâu", color: "text-orange-600" },
              { icon: Heart, title: "Khảo sát hài lòng sau xử lý yêu cầu", color: "text-pink-600" }
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
      <section className="py-16 bg-gradient-to-r from-sky-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Market Benchmarks 2024</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">20</h3>
              <p className="text-sky-100">Công ty bảo hiểm Việt Nam khảo sát</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">40%</h3>
              <p className="text-sky-100">Tỉ lệ lead tự động hóa trung vị</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">+15</h3>
              <p className="text-sky-100">NPS tăng điểm sau 3 tháng</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Journey */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Customer Journey & Flow Tự Động</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 mx-auto"></div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-4 text-center">
              {[
                "Khách truy cập trang web",
                "Chatbot chào hỏi",
                "Chọn loại bảo hiểm",
                "Nhập thông tin cơ bản",
                "Bot báo giá & gửi hợp đồng mẫu",
                "Nhắc nộp phí",
                "Hỗ trợ bồi thường",
                "Khảo sát CSAT"
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
            <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Đa kênh (Web, Messenger, Zalo, App)",
              "Tính năng báo giá theo tham số (tuổi, quyền lợi)",
              "Upload & xử lý file PDF/ảnh chứng từ",
              "Xác thực OTP & bảo mật thông tin",
              "Chuyển live agent & ghi ticket tự động",
              "Dashboard theo dõi lead, yêu cầu bồi thường"
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
      <section className="py-16 bg-gradient-to-r from-sky-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Case Study - Công Ty Bảo Hiểm XYZ</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Thông tin cơ bản</h3>
                <ul className="space-y-2 text-sky-100">
                  <li>• Tập khách hàng cá nhân</li>
                  <li>• 2.000 yêu cầu báo giá/tháng</li>
                  <li>• Triển khai chatbot Web & Messenger</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Kết quả sau 4 tháng</h3>
                <ul className="space-y-2 text-sky-100">
                  <li>• +28% lead đăng ký</li>
                  <li>• Giảm 32% thời gian trả lời</li>
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
          <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white font-bold px-12 py-4 text-lg">
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
                <p>• KYC – Know Your Customer</p>
                <p>• AML – Anti–Money Laundering</p>
                <p>• NPS – Net Promoter Score</p>
                <p>• CSAT – Customer Satisfaction Score</p>
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

export default Insurance;
