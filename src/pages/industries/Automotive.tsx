import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Clock, Users, Car, MessageCircle, BarChart3, Settings, Zap, Wrench } from 'lucide-react';
import ScrollTriggered3D from '@/components/ScrollTriggered3D';

const Automotive = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            AI CHATBOT IMPACT REPORT
          </Badge>
          <ScrollTriggered3D direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Tăng 50% Hiệu quả
            </h1>
          </ScrollTriggered3D>
          <ScrollTriggered3D direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-100">
              Giảm 35% Thời gian tư vấn
            </h2>
          </ScrollTriggered3D>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            NGÀNH Ô TÔ & XE MÁY
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
              <Car className="h-12 w-12 mb-4 mx-auto text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">Vehicle Info</h3>
              <p className="text-blue-100">Thông tin xe & so sánh</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Wrench className="h-12 w-12 mb-4 mx-auto text-indigo-200" />
              <h3 className="text-lg font-semibold mb-2">Service Book</h3>
              <p className="text-blue-100">Đặt lịch bảo dưỡng</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Settings className="h-12 w-12 mb-4 mx-auto text-purple-200" />
              <h3 className="text-lg font-semibold mb-2">Parts Support</h3>
              <p className="text-blue-100">Hỗ trợ phụ tùng</p>
            </div>
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <ScrollTriggered3D direction="up" delay={0.1}>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Executive Summary</h2>
            </ScrollTriggered3D>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Chatbot AI giúp showroom ô tô và xe máy tự động hóa tư vấn sản phẩm, 
              đặt lịch bảo dưỡng, và hỗ trợ khách hàng 24/7.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-green-600">+50%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Hiệu quả bán hàng</p>
                </CardContent>
              </Card>
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-blue-600">-35%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Thời gian tư vấn</p>
                </CardContent>
              </Card>
              <Card className="border-indigo-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <BarChart3 className="h-12 w-12 text-indigo-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-indigo-600">3–7 tháng</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">ROI hòa vốn</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <div className="container mx-auto px-6">
          <ScrollTriggered3D direction="up" delay={0.1}>
            <h2 className="text-4xl font-bold mb-6">Nâng cấp Showroom Automotive</h2>
          </ScrollTriggered3D>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Tăng doanh số và cải thiện dịch vụ khách hàng
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-12 py-4 text-lg">
            <MessageCircle className="mr-3 h-6 w-6" />
            Demo Ngay
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Automotive;
