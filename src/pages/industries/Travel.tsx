
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Clock, Users, Plane, MessageCircle, BarChart3, MapPin, Zap, Calendar } from 'lucide-react';

const Travel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-violet-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            AI CHATBOT IMPACT REPORT
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-violet-100 bg-clip-text text-transparent">
            Tăng 55% Booking
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-violet-100">
            Giảm 45% Thời gian tư vấn
          </h2>
          <p className="text-xl mb-8 text-violet-100 max-w-3xl mx-auto">
            NGÀNH DU LỊCH LỮ HÀNH
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-violet-600 hover:bg-violet-50 font-semibold px-8 py-3">
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
              <Plane className="h-12 w-12 mb-4 mx-auto text-violet-200" />
              <h3 className="text-lg font-semibold mb-2">Flight Booking</h3>
              <p className="text-violet-100">Đặt vé máy bay tự động</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <MapPin className="h-12 w-12 mb-4 mx-auto text-purple-200" />
              <h3 className="text-lg font-semibold mb-2">Tour Guide</h3>
              <p className="text-violet-100">Tư vấn tour du lịch</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Calendar className="h-12 w-12 mb-4 mx-auto text-pink-200" />
              <h3 className="text-lg font-semibold mb-2">Itinerary</h3>
              <p className="text-violet-100">Lập lịch trình tự động</p>
            </div>
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Executive Summary</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Chatbot AI giúp công ty du lịch tự động hóa tư vấn tour, đặt vé, 
              lập lịch trình và hỗ trợ khách hàng suốt hành trình du lịch.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-green-600">+55%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Booking online tăng</p>
                </CardContent>
              </Card>
              <Card className="border-violet-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Clock className="h-12 w-12 text-violet-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-violet-600">-45%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Thời gian tư vấn</p>
                </CardContent>
              </Card>
              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <BarChart3 className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-purple-600">3–6 tháng</CardTitle>
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
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Khởi động Du lịch Thông minh</h2>
          <p className="text-xl mb-8 text-violet-100 max-w-2xl mx-auto">
            Tối ưu trải nghiệm khách hàng từ tư vấn đến hoàn thành tour
          </p>
          <Button size="lg" className="bg-white text-violet-600 hover:bg-violet-50 font-bold px-12 py-4 text-lg">
            <MessageCircle className="mr-3 h-6 w-6" />
            Demo Ngay
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Travel;
