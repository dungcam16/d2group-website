
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Clock, Users, GraduationCap, MessageCircle, BarChart3, BookOpen, Zap, Award } from 'lucide-react';

const Education = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            AI CHATBOT IMPACT REPORT
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent">
            Tăng 70% Engagement
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-indigo-100">
            Tăng 55% Hoàn thành khóa học
          </h2>
          <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto">
            NGÀNH GIÁO DỤC & ĐÀO TẠO
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-3">
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
              <GraduationCap className="h-12 w-12 mb-4 mx-auto text-indigo-200" />
              <h3 className="text-lg font-semibold mb-2">Learning Support</h3>
              <p className="text-indigo-100">Hỗ trợ học tập 24/7</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <BookOpen className="h-12 w-12 mb-4 mx-auto text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">Course Guide</h3>
              <p className="text-indigo-100">Tư vấn khóa học</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Award className="h-12 w-12 mb-4 mx-auto text-purple-200" />
              <h3 className="text-lg font-semibold mb-2">Assessment</h3>
              <p className="text-indigo-100">Đánh giá tự động</p>
            </div>
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Executive Summary</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Chatbot AI giúp tổ chức giáo dục tự động hóa tư vấn khóa học, 
              hỗ trợ học viên, và quản lý quá trình học tập hiệu quả.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-green-600">+70%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Tương tác học viên</p>
                </CardContent>
              </Card>
              <Card className="border-indigo-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Clock className="h-12 w-12 text-indigo-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-indigo-600">24/7</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Hỗ trợ học tập</p>
                </CardContent>
              </Card>
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-blue-600">+55%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Hoàn thành khóa học</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Nâng cấp Giáo dục Số</h2>
          <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
            Cải thiện trải nghiệm học tập và hiệu quả đào tạo
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 font-bold px-12 py-4 text-lg">
            <MessageCircle className="mr-3 h-6 w-6" />
            Demo Ngay
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Education;
