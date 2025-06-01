
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Clock, Users, Utensils, MessageCircle, BarChart3, Shield, Zap, MapPin } from 'lucide-react';

const FoodBeverage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-orange-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            AI CHATBOT IMPACT REPORT
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
            Tăng 35% Đơn đặt hàng
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-orange-100">
            Giảm 40% Thời gian chờ
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
            NGÀNH DỊCH VỤ ĂN UỐNG (F&B)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8 py-3">
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
              <Utensils className="h-12 w-12 mb-4 mx-auto text-orange-200" />
              <h3 className="text-lg font-semibold mb-2">Online Ordering</h3>
              <p className="text-orange-100">Tích hợp menu & đặt bàn</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <MessageCircle className="h-12 w-12 mb-4 mx-auto text-red-200" />
              <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
              <p className="text-orange-100">Hỗ trợ 24/7</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <MapPin className="h-12 w-12 mb-4 mx-auto text-yellow-200" />
              <h3 className="text-lg font-semibold mb-2">Delivery Tracking</h3>
              <p className="text-orange-100">Theo dõi giao hàng</p>
            </div>
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Executive Summary</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Chatbot AI giúp nhà hàng, quán ăn, và dịch vụ giao đồ ăn tự động hóa nhận đặt hàng, tư vấn menu, 
              theo dõi giao hàng và chăm sóc khách hàng 24/7. Doanh nghiệp F&B áp dụng chatbot ghi nhận:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-green-600">+35%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Đơn đặt hàng online tăng</p>
                </CardContent>
              </Card>
              <Card className="border-orange-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Clock className="h-12 w-12 text-orange-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-orange-600">-40%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Thời gian chờ của khách hàng</p>
                </CardContent>
              </Card>
              <Card className="border-red-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <BarChart3 className="h-12 w-12 text-red-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-red-600">3–6 tháng</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">ROI hòa vốn cho F&B</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Sẵn sàng tối ưu F&B của bạn?</h2>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            Đặt lịch demo để xem chatbot hoạt động cho nhà hàng
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-12 py-4 text-lg">
            <MessageCircle className="mr-3 h-6 w-6" />
            Demo Ngay
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FoodBeverage;
