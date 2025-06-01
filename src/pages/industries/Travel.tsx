
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Plane, MapPin, Users, TrendingUp, CheckCircle, Phone, Mail } from "lucide-react";

const TravelReport = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-sky-500 hover:bg-sky-600">
            AI CHATBOT IMPACT REPORT – NGÀNH DU LỊCH & LỮ HÀNH
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            +30% Đặt tour trực tuyến<br />
            <span className="text-sky-200">-20% Thời gian phản hồi</span>
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
            <Plane className="w-24 h-24 mx-auto text-sky-200" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Executive Summary */}
        <Card className="mb-8 border-sky-200">
          <CardHeader className="bg-sky-50">
            <CardTitle className="text-sky-800 flex items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              EXECUTIVE SUMMARY
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-700 mb-6">
              AI Chatbot tự động hóa tư vấn tour, đặt vé, hỗ trợ đa ngôn ngữ cho ngành du lịch & lữ hành 24/7. 
              Các công ty du lịch áp dụng sớm ghi nhận:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-sky-50 rounded-lg">
                <div className="text-2xl font-bold text-sky-600">+25-30%</div>
                <div className="text-sm text-gray-600">Tỉ lệ chuyển đổi đặt tour online</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">-20%</div>
                <div className="text-sm text-gray-600">Thời gian phản hồi yêu cầu khách hàng</div>
              </div>
              <div className="text-center p-4 bg-sky-50 rounded-lg">
                <div className="text-2xl font-bold text-sky-600">4-8 tháng</div>
                <div className="text-sm text-gray-600">ROI hòa vốn</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pain Points */}
        <Card className="mb-8 border-sky-200">
          <CardHeader className="bg-sky-50">
            <CardTitle className="text-sky-800">PAIN POINTS & CƠ HỘI</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-600 mb-2">Vấn đề hiện tại:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Khách chờ lâu khi hỏi tour/phương án</li>
                  <li>• Đặt vé/ngủ phòng ngoài giờ hành chính</li>
                  <li>• Tư vấn itinerary thủ công tốn thời gian</li>
                  <li>• Hủy/đổi tour bất ngờ</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Giải pháp AI:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Bot trả lời ngay, gợi ý lịch trình</li>
                  <li>• Chatbot tiếp nhận 24/7, đồng bộ OTA</li>
                  <li>• AI cá nhân hóa gợi ý theo sở thích</li>
                  <li>• Nhắc lịch tự động, cập nhật điều kiện</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Use Cases */}
        <Card className="mb-8 border-sky-200">
          <CardHeader className="bg-sky-50">
            <CardTitle className="text-sky-800 flex items-center gap-2">
              <MapPin className="w-6 h-6" />
              BẢN ĐỒ USE-CASE CHATBOT
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Khảo sát nhu cầu (địa điểm, ngân sách, thời gian)",
                "Gợi ý tour trọn gói & add-on",
                "Đặt vé máy bay & phòng khách sạn",
                "Thanh toán & xuất e-voucher tự động",
                "Nhắc lịch khởi hành, hướng dẫn check-in",
                "Thu feedback & upsell dịch vụ địa phương"
              ].map((useCase, index) => (
                <div key={index} className="p-4 bg-sky-50 rounded-lg">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-sky-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{useCase}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Market Benchmarks */}
        <Card className="mb-8 border-sky-200">
          <CardHeader className="bg-sky-50">
            <CardTitle className="text-sky-800">MARKET BENCHMARKS 2024</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-600 mb-2">30</div>
                <div className="text-sm text-gray-600">Doanh nghiệp lữ hành SEA khảo sát</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">+28%</div>
                <div className="text-sm text-gray-600">Tỉ lệ đặt tour trực tuyến tăng trung vị</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-600 mb-2">-25%</div>
                <div className="text-sm text-gray-600">Cuộc gọi CSKH giảm</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Customer Journey */}
        <Card className="mb-8 border-sky-200">
          <CardHeader className="bg-sky-50">
            <CardTitle className="text-sky-800">CUSTOMER JOURNEY & FLOW TỰ ĐỘNG</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
              {[
                "Khách tìm kiếm tour",
                "Bot chào + hỏi nhu cầu", 
                "Gợi ý & so sánh gói",
                "Xác nhận & thanh toán",
                "Gửi e-voucher",
                "Nhắc trước khởi hành",
                "Thu feedback",
                "Gợi ý tour kế tiếp"
              ].map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="px-3 py-2 bg-sky-100 rounded-lg text-gray-700">
                    {step}
                  </div>
                  {index < 7 && <span className="mx-2 text-sky-600">▶️</span>}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Core Features */}
        <Card className="mb-8 border-sky-200">
          <CardHeader className="bg-sky-50">
            <CardTitle className="text-sky-800">CHECKLIST TÍNH NĂNG CỐT LÕI</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Hỗ trợ đa ngôn ngữ (VN/EN, thậm chí JP/KR)",
                "NLP hiểu ngày tháng, địa danh",
                "Tích hợp Booking Engine (Amadeus, Travelport)",
                "Payment Gateway (Stripe, VNPay, Momo)",
                "Dynamic pricing & availability API",
                "Dashboard real-time (bookings, CVR, CSAT)"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Case Study */}
        <Card className="mb-8 border-sky-200">
          <CardHeader className="bg-sky-50">
            <CardTitle className="text-sky-800">CASE STUDY – TRAVELCO VIỆT NAM</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Thông tin khách hàng:</h4>
                <p className="text-gray-700 mb-4">Công ty lữ hành 5 chi nhánh</p>
                <h4 className="font-semibold mb-2">Giải pháp:</h4>
                <p className="text-gray-700">Chatbot Web & Zalo tích hợp Amadeus</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Kết quả sau 5 tháng:</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Đặt tour online</span>
                    <span className="font-bold text-green-600">+32%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Cuộc gọi CS</span>
                    <span className="font-bold text-blue-600">-30%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>ROI</span>
                    <span className="font-bold text-sky-600">3×</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="border-sky-200 bg-gradient-to-r from-sky-50 to-blue-50">
          <CardContent className="pt-6 text-center">
            <h2 className="text-2xl font-bold text-sky-800 mb-4">NEXT STEPS & CTA</h2>
            <p className="text-gray-700 mb-6">
              Đặt lịch demo cá nhân hoá hoặc nhận tư vấn chi tiết tại:
            </p>
            <Button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 text-lg">
              https://tinyurl.com/d2group-chatbot
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TravelReport;
