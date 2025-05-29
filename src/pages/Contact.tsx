
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    need: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    toast({
      title: "Cảm ơn bạn đã liên hệ!",
      description: "Chúng tôi sẽ phản hồi trong vòng 24h. Hãy kiểm tra email nhé!",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      need: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-ai-gradient-soft">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Liên hệ với chúng tôi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sẵn sàng tư vấn miễn phí và hỗ trợ bạn tìm ra giải pháp AI Chatbot phù hợp nhất. 
            Hãy chia sẻ nhu cầu để chúng tôi có thể hỗ trợ tốt nhất.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">
                    Nhận tư vấn miễn phí
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Họ và tên *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Nguyễn Văn A"
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="email@company.com"
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company">Tên công ty</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="ABC Company"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="need">Nhu cầu chính *</Label>
                      <Select onValueChange={(value) => handleInputChange("need", value)} required>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Chọn nhu cầu của bạn" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="demo">Xem demo sản phẩm</SelectItem>
                          <SelectItem value="consult">Tư vấn giải pháp</SelectItem>
                          <SelectItem value="pricing">Báo giá chi tiết</SelectItem>
                          <SelectItem value="integration">Tích hợp hệ thống</SelectItem>
                          <SelectItem value="training">Đào tạo sử dụng</SelectItem>
                          <SelectItem value="support">Hỗ trợ kỹ thuật</SelectItem>
                          <SelectItem value="other">Khác</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Mô tả chi tiết</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Chia sẻ thêm về doanh nghiệp và nhu cầu cụ thể của bạn..."
                        rows={4}
                        className="mt-1"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-ai-orange hover:bg-ai-orange/90 text-white font-semibold py-3"
                    >
                      Gửi yêu cầu tư vấn
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">
                    Thông tin liên hệ
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ai-gradient rounded-lg flex items-center justify-center text-white text-xl">
                      📧
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-gray-600">contact@d2group.vn</p>
                      <p className="text-gray-600">sales@d2group.vn</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ai-gradient rounded-lg flex items-center justify-center text-white text-xl">
                      📞
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Hotline</h3>
                      <p className="text-gray-600">1900 1234 (24/7)</p>
                      <p className="text-gray-600">+84 24 1234 5678</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ai-gradient rounded-lg flex items-center justify-center text-white text-xl">
                      📍
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Địa chỉ</h3>
                      <p className="text-gray-600">
                        Tầng 10, Tòa nhà ABC<br />
                        123 Đường Láng, Đống Đa<br />
                        Hà Nội, Việt Nam
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ai-gradient rounded-lg flex items-center justify-center text-white text-xl">
                      🕒
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Giờ làm việc</h3>
                      <p className="text-gray-600">
                        Thứ 2 - Thứ 6: 8:00 - 18:00<br />
                        Thứ 7: 8:00 - 12:00<br />
                        <span className="text-ai-blue font-semibold">Hỗ trợ 24/7 qua chatbot</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Map */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">
                    Vị trí văn phòng
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.096815417413!2d105.81536177503156!3d21.028810780631806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab86cece9ac3%3A0xe2015b08c2b8abb1!2zxJDhuqFpIGjhu41jIELDoWNoIGtob2EgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1703234567890!5m2!1svi!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="D2 Group Office Location"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Cách khác để liên hệ
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-ai-blue rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl group-hover:animate-float">
                  💬
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-ai-blue transition-colors">
                  Chat trực tiếp
                </h3>
                <p className="text-gray-600 mb-6">
                  Nhấn vào icon chat ở góc phải để nói chuyện trực tiếp với chuyên gia
                </p>
                <Button className="bg-ai-blue hover:bg-ai-blue/90 text-white">
                  Bắt đầu chat
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-ai-purple rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl group-hover:animate-float">
                  📅
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-ai-blue transition-colors">
                  Đặt lịch demo
                </h3>
                <p className="text-gray-600 mb-6">
                  Chọn thời gian phù hợp để xem demo và tư vấn trực tiếp 1-1
                </p>
                <Button className="bg-ai-purple hover:bg-ai-purple/90 text-white">
                  Đặt lịch ngay
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-ai-orange rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl group-hover:animate-float">
                  🚀
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-ai-blue transition-colors">
                  Dùng thử ngay
                </h3>
                <p className="text-gray-600 mb-6">
                  Bắt đầu dùng thử 14 ngày miễn phí, không cần thẻ tín dụng
                </p>
                <Button className="bg-ai-orange hover:bg-ai-orange/90 text-white">
                  Thử miễn phí
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
