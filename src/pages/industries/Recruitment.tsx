
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Clock, Users, UserCheck, MessageCircle, BarChart3, Search, Zap, Target } from 'lucide-react';

const Recruitment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-violet-600 to-purple-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            AI CHATBOT IMPACT REPORT
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
            Tăng 60% Matching
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-purple-100">
            Giảm 45% Thời gian tuyển dụng
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
            NGÀNH TUYỂN DỤNG & NHÂN SỰ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-8 py-3">
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
              <Search className="h-12 w-12 mb-4 mx-auto text-purple-200" />
              <h3 className="text-lg font-semibold mb-2">Candidate Search</h3>
              <p className="text-purple-100">Tìm kiếm ứng viên thông minh</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <UserCheck className="h-12 w-12 mb-4 mx-auto text-violet-200" />
              <h3 className="text-lg font-semibold mb-2">Screening</h3>
              <p className="text-purple-100">Sàng lọc ứng viên tự động</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Target className="h-12 w-12 mb-4 mx-auto text-pink-200" />
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
              Chatbot AI giúp công ty tuyển dụng tự động hóa sàng lọc ứng viên, 
              ghép đôi công việc, và tư vấn nghề nghiệp 24/7.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-green-600">+60%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Độ chính xác matching</p>
                </CardContent>
              </Card>
              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Clock className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-purple-600">-45%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Thời gian tuyển dụng</p>
                </CardContent>
              </Card>
              <Card className="border-violet-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <BarChart3 className="h-12 w-12 text-violet-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-violet-600">2–4 tháng</CardTitle>
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Tối ưu Quy trình Tuyển dụng</h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Tăng hiệu quả tìm kiếm và chọn lọc nhân tài
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 font-bold px-12 py-4 text-lg">
            <MessageCircle className="mr-3 h-6 w-6" />
            Demo Ngay
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Recruitment;
