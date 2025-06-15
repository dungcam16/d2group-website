import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Rocket, Shield, Users, MessageSquare, BarChart3, Settings, Zap, Wrench } from 'lucide-react';
import ScrollTriggered3D from "@/components/ScrollTriggered3D";

const Features = () => {
  return (
    <div className="pt-16">
      {/* Hero section */}
      <section>
        <div className="container mx-auto px-6 text-center py-12">
          <ScrollTriggered3D direction="up" delay={0.1}>
            <h1 className="text-5xl font-bold mb-6 text-gray-900">Tính năng nổi bật</h1>
          </ScrollTriggered3D>
          <p className="text-xl text-gray-600 mb-8">Khám phá các tính năng vượt trội giúp doanh nghiệp của bạn bứt phá.</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3">
            Xem demo ngay
          </Button>
        </div>
      </section>
      {/* Feature sections */}
      <section>
        <div className="container mx-auto px-6 py-8">
          <ScrollTriggered3D direction="up" delay={0.1}>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Chi tiết từng nhóm tính năng</h2>
          </ScrollTriggered3D>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Rocket className="mr-3 h-6 w-6 text-blue-600" />
                  Tăng tốc bán hàng
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Tự động hóa quy trình bán hàng, giảm thời gian tư vấn.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-3 h-6 w-6 text-green-600" />
                  Bảo mật thông tin
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Bảo vệ dữ liệu khách hàng, tuân thủ các tiêu chuẩn bảo mật.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-3 h-6 w-6 text-purple-600" />
                  Hỗ trợ đa kênh
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Tương tác với khách hàng trên mọi nền tảng, từ website đến mạng xã hội.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="mr-3 h-6 w-6 text-orange-600" />
                  Chatbot thông minh
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Trả lời tự động, giải đáp thắc mắc 24/7, nâng cao trải nghiệm khách hàng.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-3 h-6 w-6 text-pink-600" />
                  Phân tích hiệu quả
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Theo dõi và đánh giá hiệu quả hoạt động, đưa ra quyết định dựa trên dữ liệu.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="mr-3 h-6 w-6 text-indigo-600" />
                  Tùy chỉnh linh hoạt
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Dễ dàng tùy chỉnh và tích hợp với các hệ thống hiện có của doanh nghiệp.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Integration section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Tích hợp dễ dàng</h2>
          <p className="text-xl text-gray-600 mb-8">Kết nối chatbot với các nền tảng và công cụ yêu thích của bạn.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <img src="https://via.placeholder.com/80" alt="Platform 1" className="h-12 w-auto" />
            <img src="https://via.placeholder.com/80" alt="Platform 2" className="h-12 w-auto" />
            <img src="https://via.placeholder.com/80" alt="Platform 3" className="h-12 w-auto" />
            <img src="https://via.placeholder.com/80" alt="Platform 4" className="h-12 w-auto" />
          </div>
        </div>
      </section>
      {/* CTA section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Khám phá sức mạnh của chatbot ngay hôm nay</h2>
          <p className="text-xl mb-8">Tăng doanh số, cải thiện dịch vụ khách hàng và tối ưu hóa quy trình làm việc.</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-12 py-4 text-lg">
            Bắt đầu ngay
          </Button>
        </div>
      </section>
    </div>
  );
};
export default Features;
