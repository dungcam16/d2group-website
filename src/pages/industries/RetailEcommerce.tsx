
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Clock, Users, ShoppingCart, MessageCircle, BarChart3, Shield, Zap, Globe } from 'lucide-react';

const RetailEcommerce = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            AI CHATBOT IMPACT REPORT
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Tăng 18% Tỉ lệ chuyển đổi
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-100">
            Giảm 25% Thời gian phản hồi
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            NGÀNH BÁN LẺ & THƯƠNG MẠI ĐIỆN TỬ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3">
              <MessageCircle className="mr-2 h-5 w-5" />
              chatbot@d2group.vn
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3">
              <Users className="mr-2 h-5 w-5" />
              090909.9421
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <ShoppingCart className="h-12 w-12 mb-4 mx-auto text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">E-commerce</h3>
              <p className="text-blue-100">Giao diện web shop tích hợp</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <MessageCircle className="h-12 w-12 mb-4 mx-auto text-purple-200" />
              <h3 className="text-lg font-semibold mb-2">Chat Widget</h3>
              <p className="text-blue-100">Hỗ trợ đa nền tảng</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <BarChart3 className="h-12 w-12 mb-4 mx-auto text-green-200" />
              <h3 className="text-lg font-semibold mb-2">Analytics</h3>
              <p className="text-blue-100">Báo cáo chi tiết</p>
            </div>
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Executive Summary</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Chatbot AI giúp các sàn TMĐT và cửa hàng online tự động hóa giới thiệu sản phẩm, tư vấn mua hàng 24/7, 
              nhắc giỏ hàng bỏ dở và thúc đẩy doanh số. Ở khu vực ASEAN, doanh nghiệp bán lẻ áp dụng sớm ghi nhận:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-green-600">+12–18%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Tỉ lệ chuyển đổi (CVR) sau 3 tháng</p>
                </CardContent>
              </Card>
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-blue-600">-25%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Thời gian phản hồi khách hàng trên chat</p>
                </CardContent>
              </Card>
              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <BarChart3 className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-purple-600">4–8 tháng</CardTitle>
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
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <ShoppingCart className="mr-3 h-6 w-6" />
                  Khách bỏ giỏ hàng nhiều
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Bot tự động nhắc và gợi mã giảm giá</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-600">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Câu hỏi lặp lại (size, tồn kho)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Chatbot tra cứu kho & kích hoạt live agent khi cần</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <TrendingUp className="mr-3 h-6 w-6" />
                  Upsell / Cross-sell chưa cá nhân hoá
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ AI đề xuất sản phẩm bổ trợ dựa trên lịch sử duyệt & mua</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-600">
                  <Users className="mr-3 h-6 w-6" />
                  Hỗ trợ đa kênh tốn nhân lực
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Omnichannel (Messenger, Web Chat, WhatsApp…)</p>
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
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Zap, title: "Chào & gợi ý khuyến mãi theo event", color: "text-yellow-600" },
              { icon: ShoppingCart, title: "Tìm kiếm & lọc sản phẩm theo yêu cầu", color: "text-blue-600" },
              { icon: MessageCircle, title: "Nhắc nhở giỏ hàng bỏ dở với ưu đãi", color: "text-red-600" },
              { icon: CheckCircle, title: "Xác nhận đơn & tình trạng vận chuyển", color: "text-green-600" },
              { icon: Users, title: "Thu nhận phản hồi sau giao hàng", color: "text-purple-600" },
              { icon: Badge, title: "Đăng ký loyalty & mã ưu đãi tự động", color: "text-orange-600" }
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Market Benchmarks 2024</h2>
            <p className="text-xl text-blue-100">40 thương hiệu bán lẻ & TMĐT Đông Nam Á khảo sát</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">15%</h3>
              <p className="text-blue-100">Tỉ lệ giỏ hàng hoàn thành tăng trung bình</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">10%</h3>
              <p className="text-blue-100">AOV (Giá trị đơn trung bình) tăng</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">20%</h3>
              <p className="text-blue-100">Lượt chat CS giảm do bot xử lý</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Journey */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Customer Journey & Flow Tự Động</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-4 text-center">
              {[
                "Khách truy cập web/Social",
                "Bot chào + đề xuất sản phẩm hot",
                "Tư vấn & demo nhanh",
                "Nhắc giỏ hàng bỏ dở",
                "Xác nhận & thanh toán",
                "Cập nhật vận chuyển",
                "Thu feedback",
                "Gợi ý mua tiếp"
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
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Omnichannel chat: Web, Facebook, Zalo, WhatsApp",
              "Product search & filter by attributes",
              "Cart-abandonment recovery & coupon trigger",
              "AI recommendation engine (cross-sell / up-sell)",
              "Real-time dashboard (CVR, AOV, CSAT)",
              "Hệ thống ticket escalation"
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
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">E-commerce</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Shopify, Magento, WooCommerce</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">PayPal, Stripe, VNPay</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <ShoppingCart className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Shipping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">GHN, GHTK, J&T</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-orange-600 mx-auto mb-2" />
                <CardTitle className="text-lg">CRM & Loyalty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Salesforce, HubSpot, custom API</p>
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
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { period: "Tháng 0–1", content: "Phân tích UX, mapping chatbot flow, dựng prototype", color: "bg-blue-100 border-blue-300" },
              { period: "Tháng 1–3", content: "Kết nối nền tảng TMĐT, triển khai MVP, đào tạo nhân viên", color: "bg-green-100 border-green-300" },
              { period: "Tháng 3–6", content: "Tối ưu AI recommendation, A/B test messaging", color: "bg-purple-100 border-purple-300" },
              { period: "Tháng 6–12", content: "Mở rộng đa ngôn ngữ, tích hợp loyalty & subscription model", color: "bg-orange-100 border-orange-300" }
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Next Steps & Call To Action</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Đặt lịch demo cá nhân hoá hoặc nhận tư vấn chi tiết
          </p>
          <div className="space-y-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-12 py-4 text-lg">
              <MessageCircle className="mr-3 h-6 w-6" />
              Demo Ngay
            </Button>
            <p className="text-blue-200">
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
              <p className="text-gray-300 mb-2">Phone: 090909.9421</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Phụ Lục (Thuật Ngữ)</h3>
              <div className="text-gray-300 space-y-1">
                <p>• CVR – Conversion Rate</p>
                <p>• AOV – Average Order Value</p>
                <p>• CSAT – Customer Satisfaction Score</p>
                <p>• Churn Rate – Tỉ lệ khách rời bỏ</p>
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

export default RetailEcommerce;
