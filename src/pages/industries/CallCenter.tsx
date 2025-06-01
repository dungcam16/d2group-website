
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Clock, Users, Phone, MessageCircle, BarChart3, Headphones, Zap, Target } from 'lucide-react';

const CallCenter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-rose-600 via-pink-600 to-rose-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            AI CHATBOT IMPACT REPORT
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-rose-100 bg-clip-text text-transparent">
            Tăng 90% Tỉ lệ giải quyết
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-rose-100">
            Giảm 50% Thời gian chờ
          </h2>
          <p className="text-xl mb-8 text-rose-100 max-w-3xl mx-auto">
            NGÀNH DỊCH VỤ KHÁCH HÀNG CALL CENTER
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50 font-semibold px-8 py-3">
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
              <Phone className="h-12 w-12 mb-4 mx-auto text-rose-200" />
              <h3 className="text-lg font-semibold mb-2">Call Routing</h3>
              <p className="text-rose-100">Định tuyến cuộc gọi thông minh</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Headphones className="h-12 w-12 mb-4 mx-auto text-pink-200" />
              <h3 className="text-lg font-semibold mb-2">Agent Support</h3>
              <p className="text-rose-100">Hỗ trợ agent 24/7</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Target className="h-12 w-12 mb-4 mx-auto text-red-200" />
              <h3 className="text-lg font-semibold mb-2">Auto Resolution</h3>
              <p className="text-rose-100">Giải quyết tự động</p>
            </div>
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Executive Summary</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Chatbot AI giúp call center tự động hóa xử lý yêu cầu khách hàng, 
              hỗ trợ agent, và nâng cao chất lượng dịch vụ 24/7.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-green-600">+90%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Tỉ lệ giải quyết tự động</p>
                </CardContent>
              </Card>
              <Card className="border-rose-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Clock className="h-12 w-12 text-rose-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-rose-600">-50%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Thời gian chờ trung bình</p>
                </CardContent>
              </Card>
              <Card className="border-pink-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <BarChart3 className="h-12 w-12 text-pink-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-pink-600">1–3 tháng</CardTitle>
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
      <section className="py-20 bg-gradient-to-r from-rose-600 to-pink-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Tối ưu Call Center</h2>
          <p className="text-xl mb-8 text-rose-100 max-w-2xl mx-auto">
            Nâng cao hiệu quả dịch vụ khách hàng
          </p>
          <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50 font-bold px-12 py-4 text-lg">
            <MessageCircle className="mr-3 h-6 w-6" />
            Demo Ngay
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CallCenter;
