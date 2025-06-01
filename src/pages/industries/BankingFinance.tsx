
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Clock, Users, CreditCard, MessageCircle, BarChart3, Shield, Zap, Building2 } from 'lucide-react';

const BankingFinance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-green-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            AI CHATBOT IMPACT REPORT
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
            Tăng 80% Lead chất lượng
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-green-100">
            Giảm 50% Thời gian xử lý
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
            NGÀNH NGÂN HÀNG & TÀI CHÍNH
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 py-3">
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
              <CreditCard className="h-12 w-12 mb-4 mx-auto text-green-200" />
              <h3 className="text-lg font-semibold mb-2">Loan Processing</h3>
              <p className="text-green-100">Xử lý vay tự động</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Shield className="h-12 w-12 mb-4 mx-auto text-emerald-200" />
              <h3 className="text-lg font-semibold mb-2">Security</h3>
              <p className="text-green-100">Bảo mật cao</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Building2 className="h-12 w-12 mb-4 mx-auto text-lime-200" />
              <h3 className="text-lg font-semibold mb-2">Branch Support</h3>
              <p className="text-green-100">Hỗ trợ chi nhánh</p>
            </div>
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Executive Summary</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Chatbot AI giúp ngân hàng và tổ chức tài chính tự động hóa tư vấn sản phẩm, xử lý hồ sơ vay, 
              chăm sóc khách hàng và quản lý rủi ro 24/7 với độ bảo mật cao.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-green-600">+80%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Lead chất lượng cao</p>
                </CardContent>
              </Card>
              <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Clock className="h-12 w-12 text-emerald-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-emerald-600">-50%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">Thời gian xử lý hồ sơ</p>
                </CardContent>
              </Card>
              <Card className="border-lime-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <BarChart3 className="h-12 w-12 text-lime-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl text-lime-600">6–12 tháng</CardTitle>
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Chuyển đổi số Banking ngay</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Tối ưu quy trình tài chính với AI Chatbot
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 font-bold px-12 py-4 text-lg">
            <MessageCircle className="mr-3 h-6 w-6" />
            Demo Ngay
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BankingFinance;
