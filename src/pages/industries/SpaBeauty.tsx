
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Clock, Users, Sparkles, MessageCircle, BarChart3, Calendar, Zap, Heart } from 'lucide-react';

const SpaBeauty = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-pink-600 via-rose-600 to-pink-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            AI CHATBOT IMPACT REPORT
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
            Tăng 40% Booking
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-pink-100">
            Giảm 50% No-show
          </h2>
          <p className="text-xl mb-8 text-pink-100 max-w-3xl mx-auto">
            NGÀNH SPA & THẨM MỸ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50 font-semibold px-8 py-3">
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
              <Calendar className="h-12 w-12 mb-4 mx-auto text-pink-200" />
              <h3 className="text-lg font-semibold mb-2">Booking System</h3>
              <p className="text-pink-100">Đặt lịch dịch vụ tự động</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Sparkles className="h-12 w-12 mb-4 mx-auto text-rose-200" />
              <h3 className="text-lg font-semibold mb-2">Beauty Consult</h3>
              <p className="text-pink-100">Tư vấn làm đẹp</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Heart className="h-12 w-12 mb-4 mx-auto text-red-200" />
              <h3 className="text-lg font-semibold mb-2">Customer Care</h3>
              <p className="text-pink-100">Chăm sóc khách hàng</p>
            </div>
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Executive Summary</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Chatbot AI giúp spa và thẩm mỹ viện tự động hóa đặt lịch, 
              tư vấn dịch vụ, và chăm sóc khách hàng 24/7.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-green-600">+40%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Booking online</p>
                </CardContent>
              </Card>
              <Card className="border-pink-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Clock className="h-12 w-12 text-pink-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-pink-600">-50%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Tỉ lệ no-show</p>
                </CardContent>
              </Card>
              <Card className="border-rose-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <BarChart3 className="h-12 w-12 text-rose-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-rose-600">2–5 tháng</CardTitle>
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
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Nâng tầm Spa & Beauty</h2>
          <p className="text-xl mb-8 text-pink-100 max-w-2xl mx-auto">
            Tối ưu trải nghiệm khách hàng và tăng doanh thu
          </p>
          <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50 font-bold px-12 py-4 text-lg">
            <MessageCircle className="mr-3 h-6 w-6" />
            Demo Ngay
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SpaBeauty;
