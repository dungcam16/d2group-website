
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, BookOpen, Users, TrendingUp, CheckCircle, Phone, Mail } from "lucide-react";

const EducationReport = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-indigo-500 hover:bg-indigo-600">
            AI CHATBOT IMPACT REPORT – NGÀNH GIÁO DỤC & ĐÀO TẠO
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            +30% Đăng ký khoá học<br />
            <span className="text-indigo-200">-35% Thời gian phản hồi</span>
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
            <GraduationCap className="w-24 h-24 mx-auto text-indigo-200" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Executive Summary */}
        <Card className="mb-8 border-indigo-200">
          <CardHeader className="bg-indigo-50">
            <CardTitle className="text-indigo-800 flex items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              EXECUTIVE SUMMARY
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-700 mb-6">
              Chatbot AI tự động hoá khâu giới thiệu chương trình, tư vấn khoá học, ghi danh & chăm sóc học viên 24/7. 
              Các tổ chức giáo dục áp dụng ghi nhận:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-indigo-50 rounded-lg">
                <div className="text-2xl font-bold text-indigo-600">+25-30%</div>
                <div className="text-sm text-gray-600">Tăng đăng ký khoá mới trong 3 tháng</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">-35%</div>
                <div className="text-sm text-gray-600">Thời gian giải đáp thắc mắc</div>
              </div>
              <div className="text-center p-4 bg-indigo-50 rounded-lg">
                <div className="text-2xl font-bold text-indigo-600">4-8 tháng</div>
                <div className="text-sm text-gray-600">ROI hòa vốn</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pain Points */}
        <Card className="mb-8 border-indigo-200">
          <CardHeader className="bg-indigo-50">
            <CardTitle className="text-indigo-800">PAIN POINTS & CƠ HỘI</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-600 mb-2">Vấn đề hiện tại:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Học viên chờ lâu khi hỏi chương trình, học phí</li>
                  <li>• Tỷ lệ bỏ dở form đăng ký cao</li>
                  <li>• Tư vấn khoá không cá nhân hoá</li>
                  <li>• Thiếu dữ liệu học viên tiềm năng</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Giải pháp AI:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Bot trả lời ngay, gửi brochure tự động</li>
                  <li>• Nhắc hoàn tất form & hỗ trợ live agent</li>
                  <li>• AI gợi khoá phù hợp theo mục tiêu</li>
                  <li>• Thu thập thông tin, đẩy CRM cho remarketing</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Use Cases */}
        <Card className="mb-8 border-indigo-200">
          <CardHeader className="bg-indigo-50">
            <CardTitle className="text-indigo-800 flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              BẢN ĐỒ USE-CASE CHATBOT
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Chào mừng & câu hỏi ngắn (mục tiêu, trình độ)",
                "Gợi ý khoá học phù hợp & lịch khai giảng",
                "Hỗ trợ quy trình đăng ký & thanh toán",
                "Nhắc lịch học, deadline nộp bài tập",
                "Hỗ trợ thi thử, quiz tương tác",
                "Thu feedback & referrals"
              ].map((useCase, index) => (
                <div key={index} className="p-4 bg-indigo-50 rounded-lg">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{useCase}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Market Benchmarks */}
        <Card className="mb-8 border-indigo-200">
          <CardHeader className="bg-indigo-50">
            <CardTitle className="text-indigo-800">MARKET BENCHMARKS 2024</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">20</div>
                <div className="text-sm text-gray-600">Trung tâm & nền tảng e-learning SEA khảo sát</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">+28%</div>
                <div className="text-sm text-gray-600">Tăng đăng ký khoá online</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">-40%</div>
                <div className="text-sm text-gray-600">Giảm email & cuộc gọi CS</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Customer Journey */}
        <Card className="mb-8 border-indigo-200">
          <CardHeader className="bg-indigo-50">
            <CardTitle className="text-indigo-800">CUSTOMER JOURNEY & FLOW TỰ ĐỘNG</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
              {[
                "Landing page",
                "Bot chào + khảo sát", 
                "Gợi ý khoá",
                "Đặt cọc & thanh toán",
                "Nhắc lịch khai giảng",
                "Hướng dẫn khóa học",
                "Khảo sát feedback",
                "Upsell nâng cao"
              ].map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="px-3 py-2 bg-indigo-100 rounded-lg text-gray-700">
                    {step}
                  </div>
                  {index < 7 && <span className="mx-2 text-indigo-600">▶️</span>}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Core Features */}
        <Card className="mb-8 border-indigo-200">
          <CardHeader className="bg-indigo-50">
            <CardTitle className="text-indigo-800">CHECKLIST TÍNH NĂNG CỐT LÕI</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Omnichannel (Web chat, Messenger, Zalo, App SDK)",
                "NLP hiểu trình độ, mục tiêu học tập",
                "Form đăng ký động & validation tự động",
                "Tích hợp LMS (Moodle, Canvas)",
                "Dashboard real-time (leads, enrollments, CSAT)",
                "Live agent escalation & ticket system"
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
        <Card className="mb-8 border-indigo-200">
          <CardHeader className="bg-indigo-50">
            <CardTitle className="text-indigo-800">TÍCH HỢP HỆ THỐNG</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-indigo-50 rounded-lg">
                <h4 className="font-semibold mb-2">LMS</h4>
                <p className="text-sm text-gray-600">Moodle, Canvas, Blackboard</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold mb-2">CRM & Marketing</h4>
                <p className="text-sm text-gray-600">HubSpot, Salesforce</p>
              </div>
              <div className="p-4 bg-indigo-50 rounded-lg">
                <h4 className="font-semibold mb-2">Payment Gateway</h4>
                <p className="text-sm text-gray-600">Stripe, VNPay, Momo</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold mb-2">Email/SMS</h4>
                <p className="text-sm text-gray-600">SendGrid, VNPT SMS</p>
              </div>
              <div className="p-4 bg-indigo-50 rounded-lg">
                <h4 className="font-semibold mb-2">Video Conference</h4>
                <p className="text-sm text-gray-600">Zoom, Microsoft Teams</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Case Study */}
        <Card className="mb-8 border-indigo-200">
          <CardHeader className="bg-indigo-50">
            <CardTitle className="text-indigo-800">CASE STUDY – EDUTECH XYZ</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Thông tin khách hàng:</h4>
                <p className="text-gray-700 mb-4">Nền tảng e-learning tiếng Anh, 5.000 học viên/tháng</p>
                <h4 className="font-semibold mb-2">Giải pháp:</h4>
                <p className="text-gray-700">Chatbot Web & Zalo tích hợp Canvas</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Kết quả sau 4 tháng:</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Đăng ký mới</span>
                    <span className="font-bold text-green-600">+32%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Email CS</span>
                    <span className="font-bold text-blue-600">-38%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>ROI</span>
                    <span className="font-bold text-indigo-600">3×</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* KPI */}
        <Card className="mb-8 border-indigo-200">
          <CardHeader className="bg-indigo-50">
            <CardTitle className="text-indigo-800">KPI & KHUNG ĐO LƯỜNG</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Tỷ lệ lead to enrollment (%)",
                "Enrollment completion rate (%)",
                "First-response time (giây)",
                "CSAT score (1–5)",
                "Repeat course signup rate (%)"
              ].map((kpi, index) => (
                <div key={index} className="p-3 bg-indigo-50 rounded-lg text-center">
                  <span className="text-sm font-medium text-gray-700">{kpi}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50">
          <CardContent className="pt-6 text-center">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">NEXT STEPS & CTA</h2>
            <p className="text-gray-700 mb-6">
              Đặt lịch demo cá nhân hoá hoặc nhận tư vấn chi tiết tại:
            </p>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg">
              https://tinyurl.com/d2group-chatbot
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EducationReport;
