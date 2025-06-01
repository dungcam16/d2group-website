
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Building2, TrendingUp, Clock, Users, Calendar, Shield, Phone, Mail } from "lucide-react";

const RealEstateReport = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-gray-800">D2 GROUP</span>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>chatbot@d2group.vn</span>
            </div>
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>090909.9421</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
            AI CHATBOT IMPACT REPORT – NGÀNH BẤT ĐỘNG SẢN
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            +25% Lead qualified
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-700">
            −30% Thời gian phản hồi
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Phối cảnh căn hộ/nhà phố + giao diện chatbot trên web/mobile
          </p>
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
            Đặt lịch Demo ngay
          </Button>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 bg-white/60">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-3xl text-emerald-700">Executive Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                AI Chatbot tự động hóa thu thập và phân loại lead, tư vấn sơ bộ, lên lịch xem nhà và nuôi dưỡng khách hàng tiềm năng 24/7. Các đơn vị bất động sản áp dụng sớm ghi nhận:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <TrendingUp className="h-12 w-12 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-emerald-700">+20–25%</div>
                  <div className="text-sm text-gray-600">lead đủ điều kiện</div>
                </div>
                <div className="text-center p-4 bg-teal-50 rounded-lg">
                  <Clock className="h-12 w-12 text-teal-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-teal-700">−30%</div>
                  <div className="text-sm text-gray-600">thời gian phản hồi</div>
                </div>
                <div className="text-center p-4 bg-cyan-50 rounded-lg">
                  <Users className="h-12 w-12 text-cyan-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-cyan-700">6–10 tháng</div>
                  <div className="text-sm text-gray-600">ROI hoàn vốn</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-emerald-700">Pain Points & Cơ Hội</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-l-4 border-l-red-500">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-red-600 mb-2">❌ Khách hỏi ồ ạt ngoài giờ hành chính</h3>
                <p className="text-gray-600">→ Bot trả lời & thu thập thông tin tự động</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-red-500">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-red-600 mb-2">❌ Gặp khó khăn trong khâu sàng lọc lead</h3>
                <p className="text-gray-600">→ Chatbot qualify theo kịch bản đặt sẵn</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-red-500">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-red-600 mb-2">❌ Lên lịch xem nhà thủ công</h3>
                <p className="text-gray-600">→ Bot đồng bộ lịch qua Google/Outlook Calendar</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-red-500">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-red-600 mb-2">❌ Theo dõi và nuôi dưỡng lead kéo dài</h3>
                <p className="text-gray-600">→ Kịch bản drip messaging tự động</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white/60">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-emerald-700">Bản Đồ Use-Case Chatbot</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Thu thập thông tin: ngân sách, khu vực, loại hình",
              "Gợi ý danh sách bất động sản phù hợp", 
              "Lên lịch xem nhà & nhắc lịch tự động",
              "Tư vấn tài chính, tính toán lãi suất vay",
              "Chuyển agent khi cần walkthrough trực tiếp",
              "Gửi form đặt cọc & hợp đồng mẫu qua chat"
            ].map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{useCase}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Benchmarks */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-emerald-700">Market Benchmarks 2024</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center mb-8">
                  <p className="text-lg text-gray-600">30 sàn và công ty môi giới bất động sản khu vực SEA khảo sát</p>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Tỉ lệ lead chuyển đổi ban đầu tăng trung vị</span>
                      <span className="font-bold text-emerald-600">22%</span>
                    </div>
                    <Progress value={22} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Tỉ lệ lên lịch xem nhà thành công tăng</span>
                      <span className="font-bold text-teal-600">18%</span>
                    </div>
                    <Progress value={18} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Thời gian follow-up trung bình giảm</span>
                      <span className="font-bold text-cyan-600">40%</span>
                    </div>
                    <Progress value={40} className="h-3" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Journey */}
      <section className="py-16 bg-white/60">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-emerald-700">Customer Journey & Flow Tự Động</h2>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-4">
              {[
                "Khách truy cập landing page",
                "Bot chào + hỏi nhu cầu", 
                "Gửi link danh sách FS",
                "Thu thông tin qualified",
                "Đặt lịch xem nhà",
                "Nhắc lịch",
                "Hậu xem: thu feedback & nuôi dưỡng"
              ].map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-emerald-100 border-2 border-emerald-600 rounded-lg p-4 text-center min-w-[150px]">
                    <div className="text-sm font-medium text-emerald-800">{step}</div>
                  </div>
                  {index < 6 && (
                    <div className="text-2xl text-emerald-600 mx-2">▶️</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Checklist */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-emerald-700">Checklist Tính Năng Cốt Lõi</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Omnichannel (Web chat, FB Messenger, Zalo, App SDK)",
              "Lead scoring & qualification flows",
              "Calendar sync (Google, Outlook)", 
              "Mortgage calculator & tài chính tích hợp",
              "CRM integration (Salesforce, HubSpot)",
              "Dashboard real-time (leads, appointments, CSAT)"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="text-green-600 font-bold">✓</div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-emerald-700">Case Study Ngắn – PROHOUSING JSC (HCM)</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-emerald-700">Thông tin dự án</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Chuỗi văn phòng giao dịch 4 chi nhánh</li>
                    <li>• Triển khai Web & Messenger bot kết nối MLS</li>
                    <li>• Thời gian triển khai: 5 tháng</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-emerald-700">Kết quả đạt được</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Lead qualified:</span>
                      <span className="font-bold text-green-600">+24%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Appointment rate:</span>
                      <span className="font-bold text-green-600">+17%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ROI:</span>
                      <span className="font-bold text-green-600">2.8×</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* KPI */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-emerald-700">KPI & Khung Đo Lường</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { metric: "Tỉ lệ lead qualified", unit: "(%)" },
              { metric: "Appointment booking rate", unit: "(%)" },
              { metric: "First response time", unit: "(giây)" },
              { metric: "CSAT score", unit: "(1–5)" },
              { metric: "Conversion to sale", unit: "(%)" }
            ].map((kpi, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-emerald-700 mb-2">{kpi.metric}</h3>
                  <p className="text-gray-600">{kpi.unit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-emerald-700">Tuân Thủ & Bảo Mật</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "HTTPS + AES-256 encryption",
              "OAuth2 & JWT authentication",
              "Tuân thủ PDPA, GDPR", 
              "Audit log 365 ngày, phân quyền truy cập"
            ].map((security, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Shield className="h-6 w-6 text-emerald-600" />
                <span className="text-gray-700">{security}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Next Steps & CTA</h2>
          <p className="text-xl mb-8 opacity-90">
            Đặt lịch demo cá nhân hoá hoặc nhận tư vấn chi tiết
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3">
            Truy cập: https://tinyurl.com/d2group-chatbot
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Phụ Lục – Thuật Ngữ</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div>MLS – Multiple Listing Service</div>
              <div>CRM – Customer Relationship Management</div>
              <div>CSAT – Customer Satisfaction Score</div>
              <div>ROI – Return on Investment</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RealEstateReport;
