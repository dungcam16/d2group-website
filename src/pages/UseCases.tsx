
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const UseCases = () => {
  const caseStudies = [
    {
      industry: "Thương mại điện tử",
      company: "FashionVN Store",
      title: "Tăng 30% tỉ lệ chốt đơn",
      challenge: "Khách hàng thường bỏ giỏ hàng do không có ai tư vấn sản phẩm vào ban đêm và cuối tuần",
      solution: "Triển khai AI Chatbot với khả năng tư vấn sản phẩm, so sánh giá, và xử lý đơn hàng tự động 24/7",
      results: [
        "Tỉ lệ chốt đơn tăng 30%",
        "Thời gian phản hồi giảm từ 6h xuống 30s", 
        "Tiết kiệm 40% chi phí customer service",
        "Satisfaction score: 4.8/5"
      ],
      quote: "Chatbot của D2 Group như một nhân viên bán hàng giỏi nhất, làm việc 24/7 mà không bao giờ mệt mỏi",
      author: "Nguyễn Thu Hà - CEO FashionVN",
      image: "💼",
      color: "bg-blue-500"
    },
    {
      industry: "Dịch vụ khách sạn", 
      company: "Paradise Resort",
      title: "Giảm 40% thời gian xử lý booking",
      challenge: "Lượng yêu cầu đặt phòng, hủy phòng và thắc mắc quá nhiều, nhân viên không kịp xử lý",
      solution: "Chatbot xử lý booking, check availability, thanh toán và cung cấp thông tin resort tự động",
      results: [
        "Thời gian xử lý booking giảm 40%",
        "95% inquiry được trả lời tức thì",
        "Revenue tăng 25% từ upselling tự động", 
        "Guest satisfaction tăng 35%"
      ],
      quote: "Khách hàng có thể đặt phòng lúc 2h sáng và vẫn được phục vụ như giờ hành chính",
      author: "Trần Minh Quân - General Manager",
      image: "🏨", 
      color: "bg-green-500"
    },
    {
      industry: "Giáo dục",
      company: "EduTech Academy", 
      title: "30% tăng tương tác học viên",
      challenge: "Học viên online thường cảm thấy thiếu sự hỗ trợ, dẫn đến tỉ lệ hoàn thành khóa học thấp",
      solution: "AI Teaching Assistant hỗ trợ giải đáp thắc mắc, nhắc nhở deadline và cá nhân hóa lộ trình học",
      results: [
        "Tương tác học viên tăng 30%",
        "Completion rate tăng từ 60% lên 85%",
        "24/7 support cho 10,000+ học viên",
        "Giảm 50% workload cho giảng viên"
      ],
      quote: "Như có một trợ giảng riêng cho từng học viên, luôn sẵn sàng giúp đỡ và động viên",
      author: "PGS.TS Lê Văn Nam - Hiệu trưởng",
      image: "🎓",
      color: "bg-purple-500"
    },
    {
      industry: "Ngân hàng & Tài chính",
      company: "VietBank Digital",
      title: "50% giảm thời gian xử lý giao dịch",
      challenge: "Khách hàng phải chờ đợi lâu để được tư vấn các sản phẩm tài chính và xử lý giao dịch",
      solution: "Chatbot tư vấn sản phẩm tài chính, hỗ trợ mở tài khoản và xử lý giao dịch cơ bản tự động",
      results: [
        "Thời gian xử lý giảm 50%",
        "Customer satisfaction tăng 40%",
        "Tỉ lệ chuyển đổi sản phẩm tăng 35%",
        "Giảm 60% tải công việc cho nhân viên"
      ],
      quote: "Khách hàng có thể thực hiện hầu hết giao dịch mà không cần đến ngân hàng",
      author: "Phạm Văn Đức - Giám đốc Digital Banking",
      image: "🏦",
      color: "bg-indigo-500"
    },
    {
      industry: "Y tế & Sức khỏe",
      company: "HealthCare Plus",
      title: "45% tăng hiệu quả đặt lịch khám",
      challenge: "Hệ thống đặt lịch khám bệnh phức tạp, bệnh nhân thường gọi điện nhiều lần để được tư vấn",
      solution: "AI Assistant hỗ trợ đặt lịch khám, tư vấn triệu chứng cơ bản và nhắc nhở lịch hẹn",
      results: [
        "Hiệu quả đặt lịch tăng 45%",
        "Giảm 70% cuộc gọi tư vấn trùng lặp",
        "Tỉ lệ no-show giảm 30%",
        "Patient satisfaction: 4.7/5"
      ],
      quote: "Bệnh nhân được tư vấn sơ bộ ngay lập tức, giúp họ chuẩn bị tốt hơn cho buổi khám",
      author: "BS. Nguyễn Thị Lan - Phó Giám đốc",
      image: "🏥",
      color: "bg-red-500"
    },
    {
      industry: "Bất động sản",
      company: "PropTech Vietnam",
      title: "60% tăng lead quality",
      challenge: "Nhiều inquiry không chất lượng, sales team mất thời gian filter và qualify lead",
      solution: "Chatbot pre-qualify lead, thu thập thông tin chi tiết về nhu cầu và ngân sách khách hàng",
      results: [
        "Lead quality tăng 60%",
        "Conversion rate tăng từ 12% lên 28%",
        "Sales cycle rút ngắn 35%",
        "ROI marketing tăng 80%"
      ],
      quote: "Chatbot giúp chúng tôi tập trung vào những khách hàng thực sự có nhu cầu mua",
      author: "Lê Hoàng Nam - Sales Director",
      image: "🏠",
      color: "bg-yellow-500"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-ai-gradient-soft">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Ứng dụng thực tế
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá 6 ví dụ thực tế về cách AI Chatbot của D2 Group đã giúp các doanh nghiệp Việt Nam 
            tối ưu hóa trải nghiệm khách hàng và tăng trưởng doanh thu
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-20">
          {caseStudies.map((study, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 ${study.color} rounded-full flex items-center justify-center text-white text-2xl`}>
                    {study.image}
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-ai-blue uppercase tracking-wider">
                      {study.industry}
                    </span>
                    <h2 className="text-3xl font-bold gradient-text">
                      {study.title}
                    </h2>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-red-600">Thách thức:</h3>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-ai-blue">Giải pháp:</h3>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-green-600">Kết quả:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-3 bg-green-50 p-3 rounded-lg">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-green-700 font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <Card className="border-l-4 border-l-ai-orange bg-orange-50">
                  <CardContent className="p-6">
                    <blockquote className="text-lg italic text-gray-700 mb-4">
                      "{study.quote}"
                    </blockquote>
                    <cite className="text-ai-blue font-semibold">
                      — {study.author}
                    </cite>
                  </CardContent>
                </Card>
              </div>

              {/* Visual/Stats */}
              <div className="flex-1">
                <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-none shadow-lg">
                  <CardContent className="p-8">
                    <div className="text-center space-y-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-8">{study.company}</h3>
                      
                      <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-ai-blue mb-2">TRƯỚC</div>
                            <div className="h-20 bg-red-100 rounded-lg flex items-center justify-center">
                              <span className="text-red-600 font-semibold">Thách thức</span>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-ai-blue mb-2">SAU</div>
                            <div className="h-20 bg-green-100 rounded-lg flex items-center justify-center">
                              <span className="text-green-600 font-semibold">Thành công</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg p-6 space-y-4">
                          <h4 className="font-semibold text-center text-gray-800">Số liệu nổi bật</h4>
                          <div className="grid grid-cols-1 gap-3">
                            {study.results.slice(0, 2).map((result, idx) => (
                              <div key={idx} className="text-center p-3 bg-ai-gradient-soft rounded-lg">
                                <span className="text-ai-blue font-bold">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Ngành nghề chúng tôi phục vụ
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "E-commerce", icon: "🛒" },
              { name: "Khách sạn", icon: "🏨" },
              { name: "Giáo dục", icon: "🎓" },
              { name: "Ngân hàng", icon: "🏦" },
              { name: "Y tế", icon: "🏥" },
              { name: "Bất động sản", icon: "🏠" },
              { name: "Du lịch", icon: "✈️" },
              { name: "Ô tô", icon: "🚗" },
              { name: "F&B", icon: "🍽️" },
              { name: "Retail", icon: "🏪" },
              { name: "Logistics", icon: "📦" },
              { name: "Fintech", icon: "💳" },
            ].map((industry, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                <CardContent className="p-0">
                  <div className="text-4xl mb-3 group-hover:animate-float">{industry.icon}</div>
                  <h3 className="font-semibold text-gray-700 group-hover:text-ai-blue transition-colors">
                    {industry.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ai-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Bạn muốn có câu chuyện thành công tương tự?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Hãy để chúng tôi phân tích và tư vấn giải pháp AI Chatbot phù hợp cho doanh nghiệp của bạn
          </p>
          <Button size="lg" className="bg-ai-orange hover:bg-ai-orange/90 text-white font-semibold px-8 py-4 text-lg">
            Nhận tư vấn miễn phí
          </Button>
        </div>
      </section>
    </div>
  );
};

export default UseCases;
