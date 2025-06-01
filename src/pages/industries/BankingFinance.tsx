
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Building2, DollarSign, Shield, TrendingUp, CheckCircle, Phone, Mail } from "lucide-react";

const BankingReport = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-blue-500 hover:bg-blue-600">
            AI CHATBOT IMPACT REPORT – NGÀNH NGÂN HÀNG & TÀI CHÍNH
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            +20% Tỉ lệ chuyển đổi lead<br />
            <span className="text-blue-200">-50% Thời gian phản hồi</span>
          </h1>
          <div className="flex items-center justify-center gap-4 text-lg">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>chatbot@d2group.vn</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>090909.9421</span>
            </div>
          </div>
          <div className="mt-8">
            <Building2 className="w-24 h-24 mx-auto text-blue-200" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Executive Summary */}
        <Card className="mb-8 border-blue-200">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-800 flex items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              EXECUTIVE SUMMARY
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-700 mb-6">
              Chatbot AI tự động hoá tương tác với khách hàng ngân hàng & tài chính 24/7: trả lời FAQ, tra cứu số dư, 
              mở tài khoản, tiền gửi... Giúp:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">+15-20%</div>
                <div className="text-sm text-gray-600">Tỉ lệ chuyển đổi hồ sơ mới</div>
              </div>
              <div className="text-center p-4 bg-cyan-50 rounded-lg">
                <div className="text-2xl font-bold text-cyan-600">-50%</div>
                <div className="text-sm text-gray-600">Thời gian chờ hỗ trợ</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">6-12 tháng</div>
                <div className="text-sm text-gray-600">ROI hoàn vốn</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pain Points */}
        <Card className="mb-8 border-blue-200">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-800">PAIN POINTS & CƠ HỘI</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-600 mb-2">Vấn đề hiện tại:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Chờ lâu khi hỏi số dư, biểu phí</li>
                  <li>• Khách lặp lại câu hỏi về lãi suất, phí dịch vụ</li>
                  <li>• Dễ bỏ lỡ lead tiềm năng ngoài giờ hành chính</li>
                  <li>• Rủi ro tuân thủ quy định</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Giải pháp AI:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Bot trả lời ngay, kèm link chi tiết</li>
                  <li>• Chatbot tra cứu trực tiếp</li>
                  <li>• Bot thu thông tin & qualify tự động</li>
                  <li>• Chatbot kèm cảnh báo, hướng dẫn KYC/AML</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Use Cases */}
        <Card className="mb-8 border-blue-200">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-800 flex items-center gap-2">
              <DollarSign className="w-6 h-6" />
              BẢN ĐỒ USE-CASE CHATBOT
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Tra cứu số dư & lịch sử giao dịch",
                "Mở tài khoản tiết kiệm/tiền gửi",
                "Vay cá nhân: thu thập thông tin sơ bộ",
                "Tư vấn sản phẩm (thẻ, gói đầu tư)",
                "Cảnh báo giao dịch nghi ngờ",
                "Lên lịch cuộc hẹn với chuyên viên"
              ].map((useCase, index) => (
                <div key={index} className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{useCase}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Market Benchmarks */}
        <Card className="mb-8 border-blue-200">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-800">MARKET BENCHMARKS 2024</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">28</div>
                <div className="text-sm text-gray-600">Ngân hàng & fintech ASEAN khảo sát</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">-45%</div>
                <div className="text-sm text-gray-600">Cuộc gọi đến contact center</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">+18%</div>
                <div className="text-sm text-gray-600">Lead mở tài khoản mới</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Customer Journey */}
        <Card className="mb-8 border-blue-200">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-800">CUSTOMER JOURNEY & FLOW TỰ ĐỘNG</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
              {[
                "Truy cập web/app",
                "Bot chào + hỏi mục đích", 
                "Tra cứu/vay/ghi lead",
                "E-mail/Xác thực OTP",
                "CSKH hoặc chuyên viên",
                "Thu feedback"
              ].map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="px-3 py-2 bg-blue-100 rounded-lg text-gray-700">
                    {step}
                  </div>
                  {index < 5 && <span className="mx-2 text-blue-600">▶️</span>}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Core Features */}
        <Card className="mb-8 border-blue-200">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-800">CHECKLIST TÍNH NĂNG CỐT LÕI</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Omnichannel (Web, Messenger, Mobile SDK)",
                "NLP & Entity Recognition (Số tài khoản, số tiền...)",
                "Xác thực OTP & KYC tự động",
                "Tích hợp Core Banking System",
                "Dashboard real-time (lead, CSAT, SLA)",
                "Chuyển live agent & ticket escalation"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Integration */}
        <Card className="mb-8 border-blue-200">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-800">TÍCH HỢP HỆ THỐNG</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold mb-2">Core Banking API</h4>
                <p className="text-sm text-gray-600">Flexcube, Mambu</p>
              </div>
              <div className="p-4 bg-cyan-50 rounded-lg">
                <h4 className="font-semibold mb-2">CRM & Marketing</h4>
                <p className="text-sm text-gray-600">Salesforce, HubSpot</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold mb-2">SMS/OTP Gateway</h4>
                <p className="text-sm text-gray-600">VNPT, Viettel</p>
              </div>
              <div className="p-4 bg-cyan-50 rounded-lg">
                <h4 className="font-semibold mb-2">KYC/AML Service</h4>
                <p className="text-sm text-gray-600">Shufti Pro, Onfido</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold mb-2">Email Service</h4>
                <p className="text-sm text-gray-600">SendGrid, Mailchimp</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Implementation Roadmap */}
        <Card className="mb-8 border-blue-200">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-800">LỘ TRÌNH TRIỂN KHAI ĐỀ XUẤT</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-blue-600">0-1</span>
                </div>
                <div>
                  <h4 className="font-semibold">Thg 0–1</h4>
                  <p className="text-gray-600">Khảo sát nghiệp vụ, prototype</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-cyan-600">1-3</span>
                </div>
                <div>
                  <h4 className="font-semibold">Thg 1–3</h4>
                  <p className="text-gray-600">Kết nối Core Banking & OTP, pilot chi nhánh</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-blue-600">3-6</span>
                </div>
                <div>
                  <h4 className="font-semibold">Thg 3–6</h4>
                  <p className="text-gray-600">Tinh chỉnh NLP, đào tạo nhân viên</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-cyan-600">6-12</span>
                </div>
                <div>
                  <h4 className="font-semibold">Thg 6–12</h4>
                  <p className="text-gray-600">Scale toàn hệ thống, đa ngôn ngữ</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Case Study */}
        <Card className="mb-8 border-blue-200">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-800">CASE STUDY – NGÂN HÀNG ABC</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Thông tin khách hàng:</h4>
                <p className="text-gray-700 mb-4">Chi nhánh HCM, 2.000 lead/tháng</p>
                <h4 className="font-semibold mb-2">Giải pháp:</h4>
                <p className="text-gray-700">Bot Web & Messenger tích hợp Flexcube</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Kết quả sau 4 tháng:</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Lead mở mới</span>
                    <span className="font-bold text-green-600">+18%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Cuộc gọi CS</span>
                    <span className="font-bold text-blue-600">-35%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>ROI</span>
                    <span className="font-bold text-blue-600">2.3×</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* KPI */}
        <Card className="mb-8 border-blue-200">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-800">KPI & KHUNG ĐO LƯỜNG</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Tỉ lệ lead conversion (%)",
                "Thời gian trả lời đầu tiên (s)",
                "Tỉ lệ hoàn thành KYC tự động (%)",
                "CSAT (1–5)",
                "Số giao dịch qua bot (%)"
              ].map((kpi, index) => (
                <div key={index} className="p-3 bg-blue-50 rounded-lg text-center">
                  <span className="text-sm font-medium text-gray-700">{kpi}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Security & Compliance */}
        <Card className="mb-8 border-blue-200">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-800 flex items-center gap-2">
              <Shield className="w-6 h-6" />
              TUÂN THỦ & BẢO MẬT
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Mã hóa AES-256 & TLS/SSL",
                "OAuth2 & token-based authentication",
                "Tuân thủ PCI DSS, PDPA, GDPR",
                "Audit log & role-based access"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Terminology */}
        <Card className="mb-8 border-blue-200">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-800">PHỤ LỤC – THUẬT NGỮ</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div><span className="font-semibold">KYC</span> – Know Your Customer</div>
                <div><span className="font-semibold">AML</span> – Anti–Money Laundering</div>
              </div>
              <div className="space-y-2">
                <div><span className="font-semibold">OTP</span> – One–Time Password</div>
                <div><span className="font-semibold">SLA</span> – Service Level Agreement</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50">
          <CardContent className="pt-6 text-center">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">NEXT STEPS & CTA</h2>
            <p className="text-gray-700 mb-6">
              Đặt lịch demo cá nhân hoá hoặc nhận tư vấn chi tiết tại:
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              https://tinyurl.com/d2group-chatbot
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BankingReport;
