
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Clock, Users, CreditCard, MessageCircle, BarChart3, Shield, Zap, Phone, DollarSign, Building2 } from 'lucide-react';

const BankingFinance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            AI CHATBOT IMPACT REPORT – NGÀNH NGÂN HÀNG & TÀI CHÍNH
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            +40% Lead tư vấn
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-100">
            -50% Thời gian xử lý
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3">
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
              <CreditCard className="h-12 w-12 mb-4 mx-auto text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">Banking</h3>
              <p className="text-blue-100">Mở tài khoản & giao dịch</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <DollarSign className="h-12 w-12 mb-4 mx-auto text-indigo-200" />
              <h3 className="text-lg font-semibold mb-2">Investment</h3>
              <p className="text-blue-100">Tư vấn đầu tư thông minh</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Building2 className="h-12 w-12 mb-4 mx-auto text-cyan-200" />
              <h3 className="text-lg font-semibold mb-2">Corporate</h3>
              <p className="text-blue-100">Dịch vụ doanh nghiệp</p>
            </div>
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Executive Summary</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Chatbot AI tự động hóa tư vấn sản phẩm tài chính, mở tài khoản trực tuyến, hỗ trợ giao dịch và chăm sóc khách hàng 24/7. 
              Các ngân hàng và tổ chức tài chính áp dụng ghi nhận:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-green-600">+35-40%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Lead tư vấn sản phẩm trong 3 tháng</p>
                </CardContent>
              </Card>
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-blue-600">-50%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Thời gian xử lý yêu cầu khách hàng</p>
                </CardContent>
              </Card>
              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <BarChart3 className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-purple-600">3-6 tháng</CardTitle>
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
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <Phone className="mr-3 h-6 w-6" />
                  Tắc nghẽn hotline giờ cao điểm
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Bot trả lời FAQ & chỉ chuyển advisor với tư vấn phức tạp</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-600">
                  <Clock className="mr-3 h-6 w-6" />
                  Quy trình KYC/mở tài khoản dài
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Chatbot hướng dẫn từng bước, thu thập thông tin sơ bộ</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <TrendingUp className="mr-3 h-6 w-6" />
                  Cross-sell sản phẩm không hiệu quả
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ AI phân tích hành vi, gợi ý sản phẩm phù hợp</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-600">
                  <Users className="mr-3 h-6 w-6" />
                  Khách hàng quên thủ tục, deadline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Bot nhắc lịch tự động qua Zalo/SMS</p>
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
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Zap, title: "Tư vấn sản phẩm (thẻ tín dụng, vay, tiết kiệm)", color: "text-yellow-600" },
              { icon: CreditCard, title: "Hướng dẫn mở tài khoản & KYC điện tử", color: "text-blue-600" },
              { icon: CheckCircle, title: "Tra cứu số dư, lịch sử giao dịch", color: "text-green-600" },
              { icon: MessageCircle, title: "Báo cáo thất lạc thẻ, khóa tài khoản khẩn cấp", color: "text-red-600" },
              { icon: Users, title: "Lên lịch hẹn với advisor", color: "text-purple-600" },
              { icon: Shield, title: "Khảo sát NPS & cross-sell sản phẩm", color: "text-orange-600" }
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Market Benchmarks 2024</h2>
            <p className="text-xl text-blue-100">25 ngân hàng và tổ chức tài chính khu vực khảo sát</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">45%</h3>
              <p className="text-blue-100">Tỷ lệ tương tác tự động hóa trung vị</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">38%</h3>
              <p className="text-blue-100">Tăng lead sản phẩm mới sau triển khai</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">+16</h3>
              <p className="text-blue-100">NPS tăng điểm sau 6 tháng</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Journey */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Customer Journey & Flow Tự Động</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-4 text-center">
              {[
                "Khách truy cập website",
                "Bot chào & hỏi nhu cầu",
                "Tư vấn sản phẩm phù hợp",
                "Hướng dẫn KYC online",
                "Xác nhận mở tài khoản",
                "Gửi thông tin đăng nhập",
                "Thu feedback NPS",
                "Cross-sell sản phẩm mới"
              ].map((step, index) => (
                <React.Fragment key={index}>
                  <div className="bg-white rounded-lg p-4 shadow-md min-w-[200px]">
                    <p className="text-sm font-medium text-gray-800">{step}</p>
                  </div>
                  {index < 7 && (
                    <div className="text-blue-600 font-bold text-2xl">▶️</div>
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
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Bảo mật chuẩn PCI DSS, SSL/TLS",
              "Tích hợp Core Banking (T24, Flexcube)",
              "KYC điện tử (eKYC, OCR CCCD)",
              "Multi-channel (Web, Mobile App, Zalo)",
              "Real-time fraud detection",
              "Dashboard analytics & reporting"
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Case Study - Sacombank Digital</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Thông tin cơ bản</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• 1.5 triệu khách hàng, 15.000 tương tác/ngày</li>
                  <li>• Triển khai chatbot Web & Mobile App</li>
                  <li>• Tích hợp T24 Core Banking</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Kết quả sau 6 tháng</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• +42% mở tài khoản online</li>
                  <li>• Giảm 45% cuộc gọi hotline</li>
                  <li>• ROI 3.2×</li>
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
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-12 py-4 text-lg">
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
                <p>• KYC – Know Your Customer</p>
                <p>• PCI DSS – Payment Card Industry Data Security Standard</p>
                <p>• NPS – Net Promoter Score</p>
                <p>• eKYC – Electronic Know Your Customer</p>
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

export default BankingFinance;
