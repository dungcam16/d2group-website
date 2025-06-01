
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Clock, Users, Home, MessageCircle, BarChart3, MapPin, Zap, Building } from 'lucide-react';

const RealEstate = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            AI CHATBOT IMPACT REPORT
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">
            Tăng 300% Lead
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-amber-100">
            Tăng 150% Lượt xem nhà
          </h2>
          <p className="text-xl mb-8 text-amber-100 max-w-3xl mx-auto">
            NGÀNH BẤT ĐỘNG SẢN
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 font-semibold px-8 py-3">
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
              <Home className="h-12 w-12 mb-4 mx-auto text-amber-200" />
              <h3 className="text-lg font-semibold mb-2">Property Search</h3>
              <p className="text-amber-100">Tìm kiếm BDS thông minh</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <MapPin className="h-12 w-12 mb-4 mx-auto text-yellow-200" />
              <h3 className="text-lg font-semibold mb-2">Location Guide</h3>
              <p className="text-amber-100">Tư vấn vị trí</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Building className="h-12 w-12 mb-4 mx-auto text-orange-200" />
              <h3 className="text-lg font-semibold mb-2">Virtual Tour</h3>
              <p className="text-amber-100">Tham quan ảo</p>
            </div>
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Executive Summary</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Chatbot AI giúp công ty bất động sản tự động hóa tư vấn dự án, 
              lọc khách hàng tiềm năng, và hỗ trợ quá trình mua bán 24/7.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-green-600">+300%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Lead chất lượng</p>
                </CardContent>
              </Card>
              <Card className="border-amber-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Clock className="h-12 w-12 text-amber-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-amber-600">-40%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Chu kỳ bán hàng</p>
                </CardContent>
              </Card>
              <Card className="border-yellow-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <BarChart3 className="h-12 w-12 text-yellow-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-yellow-600">+60%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Năng suất agent</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-yellow-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Tăng tốc Bán hàng BDS</h2>
          <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Thu hút và chuyển đổi lead hiệu quả hơn
          </p>
          <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 font-bold px-12 py-4 text-lg">
            <MessageCircle className="mr-3 h-6 w-6" />
            Demo Ngay
          </Button>
        </div>
      </section>
    </div>
  );
};

export default RealEstate;
