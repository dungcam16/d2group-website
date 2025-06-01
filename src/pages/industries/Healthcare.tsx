
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Clock, Users, Heart, MessageCircle, BarChart3, Stethoscope, Zap, Calendar, Phone, Mail } from 'lucide-react';

const Healthcare = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            AI CHATBOT IMPACT REPORT – NGÀNH CHĂM SÓC SỨC KHỎE
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-teal-100 bg-clip-text text-transparent">
            +20% Đặt lịch khám
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-teal-100">
            −30% Cuộc gọi CSKH
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50 font-semibold px-8 py-3">
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
              <Calendar className="h-12 w-12 mb-4 mx-auto text-teal-200" />
              <h3 className="text-lg font-semibold mb-2">Appointment</h3>
              <p className="text-teal-100">Đặt lịch khám tự động</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Stethoscope className="h-12 w-12 mb-4 mx-auto text-cyan-200" />
              <h3 className="text-lg font-semibold mb-2">Health Check</h3>
              <p className="text-teal-100">Tư vấn sức khỏe 24/7</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Heart className="h-12 w-12 mb-4 mx-auto text-emerald-200" />
              <h3 className="text-lg font-semibold mb-2">Patient Care</h3>
              <p className="text-teal-100">Chăm sóc bệnh nhân</p>
            </div>
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Executive Summary</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              AI Chatbot giúp tự động hóa đặt lịch khám, tư vấn ban đầu, nhắc lịch tái khám và hỗ trợ hậu mãi 24/7 
              cho phòng khám, bệnh viện. Các tổ chức y tế áp dụng sớm ghi nhận:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-green-600">+18–22%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Lượt đặt lịch trực tuyến trong 3 tháng</p>
                </CardContent>
              </Card>
              <Card className="border-teal-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Clock className="h-12 w-12 text-teal-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-teal-600">−30%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Cuộc gọi đến tổng đài nhờ bot giải đáp FAQ</p>
                </CardContent>
              </Card>
              <Card className="border-cyan-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <BarChart3 className="h-12 w-12 text-cyan-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-cyan-600">5–9 tháng</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">ROI hoàn vốn tùy quy mô</p>
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
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <Phone className="mr-3 h-6 w-6" />
                  Tắc đầu dây nóng khi đặt lịch khám
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Chatbot tự động thu lịch hẹn, phân luồng bác sĩ</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-600">
                  <Stethoscope className="mr-3 h-6 w-6" />
                  Thắc mắc về chỉ số xét nghiệm
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Bot giải thích kèm hướng dẫn đặt lịch xét nghiệm</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <Calendar className="mr-3 h-6 w-6" />
                  Bỏ quên lịch tái khám
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Nhắc tự động qua Zalo/Messenger</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-600">
                  <BarChart3 className="mr-3 h-6 w-6" />
                  Hạn chế dữ liệu bệnh nhân
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">→ Chatbot lưu tiền sử và chỉ số cơ bản, gửi báo cáo cho bác sĩ</p>
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
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Calendar, title: "Đặt lịch khám & xét nghiệm", color: "text-blue-600" },
              { icon: Stethoscope, title: "Tư vấn triệu chứng cơ bản & phân loại cấp độ", color: "text-green-600" },
              { icon: Heart, title: "Nhắc mời thanh toán BHYT / dịch vụ", color: "text-red-600" },
              { icon: CheckCircle, title: "Hướng dẫn chuẩn bị trước khi khám", color: "text-purple-600" },
              { icon: BarChart3, title: "Gửi kết quả xét nghiệm & giải thích", color: "text-orange-600" },
              { icon: Users, title: "Thu thập feedback CSAT sau khám", color: "text-pink-600" }
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
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Market Benchmarks 2024</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">25</h3>
              <p className="text-teal-100">Phòng khám & bệnh viện tư nhân tại VN</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">35%</h3>
              <p className="text-teal-100">Tỉ lệ đặt lịch trực tuyến tự động</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-2">+12</h3>
              <p className="text-teal-100">Điểm CSAT tăng trong 6 tháng</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Journey */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Customer Journey & Flow Tự Động</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto"></div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-4 text-center">
              {[
                "Bệnh nhân truy cập web/app",
                "Bot chào + hỏi nhu cầu",
                "Chọn khoa & giờ",
                "Xác nhận lịch",
                "Nhắc trước 24 giờ",
                "Hậu khám: gửi kết quả",
                "Khảo sát CSAT",
                "Gợi ý tái khám"
              ].map((step, index) => (
                <React.Fragment key={index}>
                  <div className="bg-white rounded-lg p-4 shadow-md min-w-[200px]">
                    <p className="text-sm font-medium text-gray-800">{step}</p>
                  </div>
                  {index < 7 && (
                    <div className="text-teal-600 font-bold text-2xl">▶️</div>
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
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Omnichannel (Website, Zalo, Messenger, Mobile SDK)",
              "NLP hiểu triệu chứng, chỉ số y tế cơ bản",
              "Tích hợp HIS/EMR (HL7, FHIR)",
              "OTP/Xác thực bảo mật thông tin bệnh nhân",
              "Dashboard real-time (lượt đặt, CSAT, SLA)",
              "Escalation & live agent cho trường hợp cấp bách"
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
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Case Study - Phòng Khám FamilyCare</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Thông tin cơ bản</h3>
                <ul className="space-y-2 text-teal-100">
                  <li>• Chuỗi 3 cơ sở đa khoa tại TP. HCM</li>
                  <li>• Triển khai chatbot Web & Zalo</li>
                  <li>• Tích hợp MISA Health</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Kết quả sau 4 tháng</h3>
                <ul className="space-y-2 text-teal-100">
                  <li>• +20% lịch hẹn mới</li>
                  <li>• −28% cuộc gọi CS</li>
                  <li>• ROI 2.4×</li>
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
          <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-12 py-4 text-lg">
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
                <p>• EMR – Electronic Medical Records</p>
                <p>• HL7/FHIR – Health data standards</p>
                <p>• BHYT – Bảo hiểm y tế</p>
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

export default Healthcare;
