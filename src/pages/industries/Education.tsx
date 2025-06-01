
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Clock, Users, GraduationCap, MessageCircle, BarChart3, Shield, Zap, Phone, BookOpen, Award } from 'lucide-react';

const Education = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            AI CHATBOT IMPACT REPORT – NGÀNH GIÁO DỤC & ĐÀO TẠO
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent">
            +30% Đăng ký khoá học
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-indigo-100">
            -35% Thời gian phản hồi
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-3">
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
              <GraduationCap className="h-12 w-12 mb-4 mx-auto text-indigo-200" />
              <h3 className="text-lg font-semibold mb-2">Online Learning</h3>
              <p className="text-indigo-100">Đăng ký & tư vấn khoá học</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <BookOpen className="h-12 w-12 mb-4 mx-auto text-purple-200" />
              <h3 className="text-lg font-semibold mb-2">Course Support</h3>
              <p className="text-indigo-100">Hỗ trợ học tập 24/7</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Award className="h-12 w-12 mb-4 mx-auto text-pink-200" />
              <h3 className="text-lg font-semibold mb-2">Certification</h3>
              <p className="text-indigo-100">Quản lý chứng chỉ</p>
            </div>
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Executive Summary</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Chatbot AI tự động hoá khâu giới thiệu chương trình, tư vấn khoá học, ghi danh & chăm sóc học viên 24/7. 
              Các tổ chức giáo dục áp dụng ghi nhận:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-green-600">+25-30%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Tăng đăng ký khoá mới trong 3 tháng</p>
                </CardContent>
              </Card>
              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Clock className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-purple-600">-35%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Thời gian giải đáp thắc mắc</p>
                </CardContent>
              </Card>
              <Card className="border-indigo-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <BarChart3 className="h-12 w-12 text-indigo-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-indigo-600">4-8 tháng</CardTitle>
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
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <Phone className="mr-3 h-6 w-6" />
                  Học viên chờ lâu khi hỏi chương trình, học phí
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Bot trả lời ngay, gửi brochure tự động</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-600">
                  <Clock className="mr-3 h-6 w-6" />
                  Tỷ lệ bỏ dở form đăng ký cao
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Nhắc hoàn tất form & hỗ trợ live agent</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <TrendingUp className="mr-3 h-6 w-6" />
                  Tư vấn khoá không cá nhân hoá
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ AI gợi khoá phù hợp theo mục tiêu</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-600">
                  <Users className="mr-3 h-6 w-6" />
                  Thiếu dữ liệu học viên tiềm năng
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Thu thập thông tin, đẩy CRM cho remarketing</p>
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
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Zap, title: "Chào mừng & câu hỏi ngắn (mục tiêu, trình độ)", color: "text-yellow-600" },
              { icon: BookOpen, title: "Gợi ý khoá học phù hợp & lịch khai giảng", color: "text-blue-600" },
              { icon: CheckCircle, title: "Hỗ trợ quy trình đăng ký & thanh toán", color: "text-green-600" },
              { icon: MessageCircle, title: "Nhắc lịch học, deadline nộp bài tập", color: "text-red-600" },
              { icon: Users, title: "Hỗ trợ thi thử, quiz tương tác", color: "text-purple-600" },
              { icon: Shield, title: "Thu feedback & referrals", color: "text-orange-600" }
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
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Market Benchmarks 2024</h2>
            <p className="text-xl text-indigo-100">20 trung tâm & nền tảng e-learning SEA khảo sát</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">+28%</h3>
              <p className="text-indigo-100">Tăng đăng ký khoá online</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">-40%</h3>
              <p className="text-indigo-100">Giảm email & cuộc gọi CS</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">+12</h3>
              <p className="text-indigo-100">NPS tăng điểm sau 4 tháng</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Journey */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Customer Journey & Flow Tự Động</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-4 text-center">
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
                <React.Fragment key={index}>
                  <div className="bg-white rounded-lg p-4 shadow-md min-w-[200px]">
                    <p className="text-sm font-medium text-gray-800">{step}</p>
                  </div>
                  {index < 7 && (
                    <div className="text-indigo-600 font-bold text-2xl">▶️</div>
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
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Omnichannel (Web chat, Messenger, Zalo, App SDK)",
              "NLP hiểu trình độ, mục tiêu học tập",
              "Form đăng ký động & validation tự động",
              "Tích hợp LMS (Moodle, Canvas)",
              "Dashboard real-time (leads, enrollments, CSAT)",
              "Live agent escalation & ticket system"
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
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Case Study – EduTech XYZ</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Thông tin cơ bản</h3>
                <ul className="space-y-2 text-indigo-100">
                  <li>• Nền tảng e-learning tiếng Anh, 5.000 học viên/tháng</li>
                  <li>• Giải pháp: Chatbot Web & Zalo tích hợp Canvas</li>
                  <li>• Phạm vi: toàn quốc</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Kết quả sau 4 tháng</h3>
                <ul className="space-y-2 text-indigo-100">
                  <li>• +32% đăng ký mới</li>
                  <li>• -38% email CS</li>
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
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-12 py-4 text-lg">
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
                <p>• LMS – Learning Management System</p>
                <p>• CSAT – Customer Satisfaction Score</p>
                <p>• NPS – Net Promoter Score</p>
                <p>• SDK – Software Development Kit</p>
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

export default Education;
