
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Clock, Users, Phone, MessageCircle, BarChart3, Shield, Zap, Mail } from 'lucide-react';

const Recruitment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-violet-600 to-purple-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            AI CHATBOT IMPACT REPORT – NGÀNH TUYỂN DỤNG & NHÂN SỰ
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
            +30% Ứng viên chất lượng
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-purple-100">
            −25% Thời gian phản hồi
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-8 py-3">
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
              <Users className="h-12 w-12 mb-4 mx-auto text-purple-200" />
              <h3 className="text-lg font-semibold mb-2">Candidate Search</h3>
              <p className="text-purple-100">Tìm kiếm ứng viên thông minh</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <CheckCircle className="h-12 w-12 mb-4 mx-auto text-violet-200" />
              <h3 className="text-lg font-semibold mb-2">Screening</h3>
              <p className="text-purple-100">Sàng lọc ứng viên tự động</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <TrendingUp className="h-12 w-12 mb-4 mx-auto text-pink-200" />
              <h3 className="text-lg font-semibold mb-2">Job Matching</h3>
              <p className="text-purple-100">Ghép đôi công việc</p>
            </div>
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Executive Summary</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Chatbot AI tự động hóa quy trình tuyển dụng và chăm sóc ứng viên 24/7: thu thập CV, sàng lọc sơ bộ, 
              lên lịch phỏng vấn, trả lời FAQ về chính sách công ty. Doanh nghiệp HR áp dụng cho biết:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-green-600">+25–30%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Lead ứng viên đủ điều kiện</p>
                </CardContent>
              </Card>
              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Clock className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-purple-600">−25%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Thời gian phản hồi thắc mắc ứng viên</p>
                </CardContent>
              </Card>
              <Card className="border-violet-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <BarChart3 className="h-12 w-12 text-violet-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-violet-600">4–8 tháng</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">ROI hoàn vốn</p>
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
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <Mail className="mr-3 h-6 w-6" />
                  Lượng CV tràn vào email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Bot tự động hỏi lọc kỹ năng, kinh nghiệm trước khi chuyển HR</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-600">
                  <Clock className="mr-3 h-6 w-6" />
                  Ứng viên chờ lâu, drop-off cao
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Chatbot phản hồi ngay, nhắc lịch và gửi hướng dẫn chuẩn bị</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <Shield className="mr-3 h-6 w-6" />
                  Thắc mắc chính sách & phúc lợi không đồng nhất
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Bot trả lời chuẩn theo handbook, cập nhật real-time</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-600">
                  <BarChart3 className="mr-3 h-6 w-6" />
                  Theo dõi nhân sự sau tuyển dụng thủ công
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Chatbot thu thập feedback, nhắc đào tạo nội bộ</p>
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
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Users, title: "Tiếp nhận CV & lọc sơ bộ (keyword, years of experience)", color: "text-blue-600" },
              { icon: BarChart3, title: "Đặt lịch phỏng vấn & đồng bộ Calendar", color: "text-green-600" },
              { icon: MessageCircle, title: "Hỗ trợ FAQ: lương, benefits, quy trình tuyển dụng", color: "text-red-600" },
              { icon: CheckCircle, title: "Phỏng vấn sơ bộ: quiz kỹ năng/bài test nhanh", color: "text-purple-600" },
              { icon: Clock, title: "Nhắc reminder: phỏng vấn, gửi offer, onboarding", color: "text-orange-600" },
              { icon: TrendingUp, title: "Khảo sát candidate experience & employee referral", color: "text-pink-600" }
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
      <section className="py-16 bg-gradient-to-r from-purple-600 to-violet-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Market Benchmarks 2024</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">20</h3>
              <p className="text-purple-100">Công ty tuyển dụng & HR platform khảo sát SEA</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">-30%</h3>
              <p className="text-purple-100">Tỉ lệ ứng viên drop-off giảm</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">+15</h3>
              <p className="text-purple-100">NPS ứng viên tăng điểm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Journey */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Customer Journey & Flow Tự Động</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto"></div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-4 text-center">
              {[
                "Ứng viên truy cập career page",
                "Bot chào & thu thông tin cơ bản",
                "Gửi link upload CV",
                "Chatbot sàng lọc tự động",
                "Lên lịch phỏng vấn",
                "Nhắc phỏng vấn & gửi prep guide",
                "Gửi offer, onboarding",
                "Khảo sát satisfaction"
              ].map((step, index) => (
                <React.Fragment key={index}>
                  <div className="bg-white rounded-lg p-4 shadow-md min-w-[200px]">
                    <p className="text-sm font-medium text-gray-800">{step}</p>
                  </div>
                  {index < 7 && (
                    <div className="text-purple-600 font-bold text-2xl">▶️</div>
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
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Omnichannel (Web, Messenger, Zalo, Email)",
              "NLP parse CV & extract entity (skill, exp, location)",
              "Calendar sync (Google, Outlook)",
              "Quiz/assessment mini-test integration",
              "ATS integration (Greenhouse, Workday, BambooHR)",
              "Dashboard real-time (leads, interviews, CSAT)"
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
      <section className="py-16 bg-gradient-to-r from-purple-600 to-violet-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Case Study - RecruitPro VN</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Thông tin cơ bản</h3>
                <ul className="space-y-2 text-purple-100">
                  <li>• Khách hàng: công ty IT staffing</li>
                  <li>• 1.000 CV/tháng</li>
                  <li>• Giải pháp: Chatbot Web & Messenger tích hợp Greenhouse</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Kết quả sau 4 tháng</h3>
                <ul className="space-y-2 text-purple-100">
                  <li>• +28% CV đủ điều kiện</li>
                  <li>• −30% thời gian sàng lọc</li>
                  <li>• ROI 2.7×</li>
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
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-12 py-4 text-lg">
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
                <p>• ATS – Applicant Tracking System</p>
                <p>• HRIS – Human Resource Information System</p>
                <p>• CSAT – Candidate Satisfaction Score</p>
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

export default Recruitment;
