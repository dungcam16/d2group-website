
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useNavigate } from 'react-router-dom';
import { Bot, MessageSquare, Zap, BarChart3, Globe, Clock, Brain, Shield, Users, CheckCircle, ArrowRight, Star, Check, X } from 'lucide-react';
import ScrollTriggered3D from '@/components/ScrollTriggered3D';

const AIChatbot = () => {
  const navigate = useNavigate();

  const coreFeatures = [
    {
      title: "AI/NLP Thông minh",
      desc: "Chatbot được trang bị AI/NLP tiên tiến, hiểu và phản hồi tự nhiên như con người",
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      details: [
        "Xử lý ngôn ngữ tự nhiên tiên tiến",
        "Học hỏi từ cuộc hội thoại",
        "Hiểu ngữ cảnh và ý định",
        "Phản hồi thông minh và chính xác"
      ]
    },
    {
      title: "Đa nền tảng",
      desc: "Tích hợp Website, Facebook Messenger, Zalo, Telegram, WhatsApp",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      details: [
        "Tích hợp đa kênh seamless",
        "Quản lý tập trung",
        "Đồng bộ dữ liệu real-time",
        "API mở cho tích hợp custom"
      ]
    },
    {
      title: "Phân tích Real-time",
      desc: "Báo cáo tương tác, hiệu suất và chuyển đổi khách hàng theo thời gian thực",
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      details: [
        "Dashboard analytics chi tiết",
        "Theo dõi KPI real-time",
        "Báo cáo tùy chỉnh",
        "Insights và recommendations"
      ]
    },
    {
      title: "Bảo mật cao",
      desc: "Mã hóa dữ liệu end-to-end, tuân thủ GDPR và các tiêu chuẩn bảo mật",
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      details: [
        "Mã hóa end-to-end",
        "Tuân thủ GDPR/CCPA",
        "Audit logs chi tiết",
        "Backup tự động"
      ]
    },
    {
      title: "Triển khai nhanh",
      desc: "Setup và đưa chatbot vào hoạt động chỉ trong 24 giờ",
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      details: [
        "No-code chatbot builder",
        "Template sẵn có",
        "Training nhanh chóng",
        "Go-live trong 24h"
      ]
    },
    {
      title: "Hội thoại thông minh",
      desc: "Quản lý flow hội thoại phức tạp và chuyển giao smooth đến nhân viên",
      icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
      details: [
        "Conversation flow designer",
        "Handover thông minh",
        "Context preservation",
        "Multi-turn conversations"
      ]
    }
  ];

  const comparisonTable = [
    {
      feature: "Thời gian phản hồi",
      traditional: "6-24 giờ",
      aiChatbot: "< 3 giây",
      improvement: "99.9% nhanh hơn"
    },
    {
      feature: "Khả năng sẵn sàng",
      traditional: "8-12 giờ/ngày",
      aiChatbot: "24/7/365",
      improvement: "300% tăng uptime"
    },
    {
      feature: "Khả năng mở rộng",
      traditional: "1:1 conversation",
      aiChatbot: "Không giới hạn",
      improvement: "Infinite scale"
    },
    {
      feature: "Tính nhất quán",
      traditional: "Phụ thuộc nhân viên",
      aiChatbot: "100% consistent",
      improvement: "Zero variance"
    },
    {
      feature: "Chi phí/tương tác",
      traditional: "50,000-100,000 VNĐ",
      aiChatbot: "< 500 VNĐ",
      improvement: "99% tiết kiệm"
    },
    {
      feature: "Hỗ trợ đa ngôn ngữ",
      traditional: "Giới hạn",
      aiChatbot: "100+ ngôn ngữ",
      improvement: "Unlimited languages"
    }
  ];

  const advancedFeatures = [
    {
      category: "Tính năng AI nâng cao",
      features: [
        {
          name: "Conversation Flow Designer",
          desc: "Thiết kế luồng hội thoại phức tạp với drag-and-drop interface"
        },
        {
          name: "Intent Training & Recognition",
          desc: "Training và nhận diện ý định khách hàng với độ chính xác cao"
        },
        {
          name: "Auto-learning từ feedback",
          desc: "Tự động học hỏi và cải thiện từ feedback của khách hàng"
        },
        {
          name: "Intelligent Fallback Handling",
          desc: "Xử lý thông minh khi không hiểu câu hỏi của khách hàng"
        }
      ]
    },
    {
      category: "Tích hợp hệ thống",
      features: [
        {
          name: "CRM Integration",
          desc: "Tích hợp với Salesforce, HubSpot, Pipedrive và các CRM phổ biến"
        },
        {
          name: "E-commerce Platforms",
          desc: "Kết nối với Shopify, WooCommerce, Magento cho hỗ trợ bán hàng"
        },
        {
          name: "Custom API Integration",
          desc: "Tích hợp với bất kỳ hệ thống nào qua REST API và webhooks"
        },
        {
          name: "Webhook & Automation",
          desc: "Tự động hóa quy trình với webhook và trigger events"
        }
      ]
    },
    {
      category: "Analytics & Insights",
      features: [
        {
          name: "Conversation Analytics",
          desc: "Phân tích chi tiết từng cuộc hội thoại và customer journey"
        },
        {
          name: "Performance Metrics",
          desc: "Theo dõi KPI: response time, resolution rate, satisfaction score"
        },
        {
          name: "Custom Dashboard",
          desc: "Dashboard tùy chỉnh với metrics và reports theo nhu cầu"
        },
        {
          name: "A/B Testing",
          desc: "Test và optimize các phiên bản chatbot khác nhau"
        }
      ]
    }
  ];

  const caseStudies = [
    {
      company: "FashionVN Store",
      industry: "Thương mại điện tử",
      challenge: "Khách hàng thường bỏ giỏ hàng do không có ai tư vấn sản phẩm vào ban đêm và cuối tuần",
      solution: "Triển khai AI Chatbot với khả năng tư vấn sản phẩm, so sánh giá, và xử lý đơn hàng tự động 24/7",
      results: [
        "Tỉ lệ chốt đơn tăng 30%",
        "Thời gian phản hồi giảm từ 6h xuống 30s",
        "Tiết kiệm 40% chi phí customer service",
        "Satisfaction score: 4.8/5"
      ],
      testimonial: "Chatbot của D2 Group như một nhân viên bán hàng giỏi nhất, làm việc 24/7 mà không bao giờ mệt mỏi",
      author: "Nguyễn Thu Hà - CEO FashionVN",
      color: "from-blue-500 to-indigo-600"
    },
    {
      company: "Paradise Resort",
      industry: "Dịch vụ khách sạn",
      challenge: "Lượng yêu cầu đặt phòng, hủy phòng và thắc mắc quá nhiều, nhân viên không kịp xử lý",
      solution: "Chatbot xử lý booking, check availability, thanh toán và cung cấp thông tin resort tự động",
      results: [
        "Thời gian xử lý booking giảm 40%",
        "95% inquiry được trả lời tức thì",
        "Revenue tăng 25% từ upselling tự động",
        "Guest satisfaction tăng 35%"
      ],
      testimonial: "Khách hàng có thể đặt phòng lúc 2h sáng và vẫn được phục vụ như giờ hành chính",
      author: "Trần Minh Quân - General Manager",
      color: "from-green-500 to-teal-600"
    },
    {
      company: "EduTech Academy",
      industry: "Giáo dục",
      challenge: "Học viên online thường cảm thấy thiếu sự hỗ trợ, dẫn đến tỉ lệ hoàn thành khóa học thấp",
      solution: "AI Teaching Assistant hỗ trợ giải đáp thắc mắc, nhắc nhở deadline và cá nhân hóa lộ trình học",
      results: [
        "Tương tác học viên tăng 30%",
        "Completion rate tăng từ 60% lên 85%",
        "24/7 support cho 10,000+ học viên",
        "Giảm 50% workload cho giảng viên"
      ],
      testimonial: "Như có một trợ giảng riêng cho từng học viên, luôn sẵn sàng giúp đỡ và động viên",
      author: "PGS.TS Lê Văn Nam - Hiệu trưởng",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const benefits = [
    "Tăng 80% hiệu quả chăm sóc khách hàng",
    "Giảm 60% chi phí vận hành",
    "Tăng 45% tỷ lệ chuyển đổi",
    "Cải thiện trải nghiệm khách hàng",
    "Tự động hóa 90% câu hỏi thường gặp",
    "Tích hợp đa nền tảng seamless"
  ];

  const pricingPlans = [
    {
      name: "Gói Cơ bản",
      price: "1,990,000",
      period: "VNĐ/tháng",
      features: [
        "1 Chatbot cho Website",
        "1,000 tin nhắn/tháng",
        "Báo cáo cơ bản",
        "Hỗ trợ email",
        "Tích hợp cơ bản"
      ],
      recommended: false
    },
    {
      name: "Gói Chuyên nghiệp",
      price: "3,990,000",
      period: "VNĐ/tháng",
      features: [
        "Chatbot đa nền tảng",
        "10,000 tin nhắn/tháng",
        "AI/NLP nâng cao",
        "Báo cáo chi tiết",
        "Hỗ trợ 24/7",
        "Tích hợp CRM",
        "Custom branding"
      ],
      recommended: true
    },
    {
      name: "Gói Doanh nghiệp",
      price: "Liên hệ",
      period: "Tùy chỉnh",
      features: [
        "Không giới hạn tin nhắn",
        "AI model tùy chỉnh",
        "Dedicated support",
        "Custom integration",
        "Advanced analytics",
        "Multi-language",
        "White-label solution"
      ],
      recommended: false
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-6 text-center">
          <ScrollTriggered3D direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              AI - Chatbot Automation
            </h1>
          </ScrollTriggered3D>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Giải pháp chatbot thông minh đa kênh, tự động hóa tương tác khách hàng và tăng hiệu quả kinh doanh với công nghệ AI/NLP tiên tiến
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg"
            >
              Nhận tư vấn miễn phí
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/contact')}
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-4 text-lg"
            >
              Xem demo trực tiếp
            </Button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Tính năng <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">nổi bật</span>
            </h2>
            <p className="text-xl text-gray-600">
              Chatbot AI với công nghệ tiên tiến nhất hiện tại, mang lại trải nghiệm khách hàng vượt trội
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-8">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.desc}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison with Traditional Live Chat */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              So sánh với <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Live Chat truyền thống</span>
            </h2>
            <p className="text-xl text-gray-600">
              Tại sao AI Chatbot vượt trội hơn hẳn các giải pháp customer service truyền thống
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-indigo-600">
                  <tr>
                    <th className="text-left p-6 text-white font-semibold">Tiêu chí</th>
                    <th className="text-center p-6 text-white font-semibold">Live Chat truyền thống</th>
                    <th className="text-center p-6 text-white font-semibold">AI Chatbot</th>
                    <th className="text-center p-6 text-white font-semibold">Cải thiện</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-6 font-medium text-gray-900">{row.feature}</td>
                      <td className="p-6 text-center">
                        <span className="inline-flex items-center space-x-2">
                          <X className="w-4 h-4 text-red-500" />
                          <span className="text-gray-600">{row.traditional}</span>
                        </span>
                      </td>
                      <td className="p-6 text-center">
                        <span className="inline-flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span className="text-gray-900 font-semibold">{row.aiChatbot}</span>
                        </span>
                      </td>
                      <td className="p-6 text-center">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {row.improvement}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features with Accordion */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Tính năng <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">nâng cao</span>
            </h2>
            <p className="text-xl text-gray-600">
              Khám phá các tính năng chuyên sâu giúp tối ưu hóa hiệu quả chatbot
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {advancedFeatures.map((category, categoryIndex) => (
                <AccordionItem key={categoryIndex} value={`item-${categoryIndex}`} className="border border-gray-200 rounded-lg">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      <span className="text-xl font-semibold text-gray-900">{category.category}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                          <h4 className="font-semibold text-blue-600 mb-2">{feature.name}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Khách hàng thành công
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Khám phá cách AI Chatbot của D2 Group đã giúp các doanh nghiệp tối ưu hóa trải nghiệm khách hàng và tăng trưởng doanh thu
            </p>
          </div>

          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${study.color} rounded-full flex items-center justify-center text-white text-2xl font-bold`}>
                      {study.company.charAt(0)}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                        {study.industry}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {study.company}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-red-600">Thách thức:</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-blue-600">Giải pháp:</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-green-600">Kết quả:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center space-x-3 bg-green-50 p-3 rounded-lg">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="text-green-700 font-medium">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Card className="border-l-4 border-l-blue-600 bg-blue-50">
                    <CardContent className="p-6">
                      <blockquote className="text-lg italic text-gray-700 mb-4">
                        "{study.testimonial}"
                      </blockquote>
                      <cite className="text-blue-600 font-semibold">
                        — {study.author}
                      </cite>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex-1">
                  <Card className="bg-white shadow-lg">
                    <CardContent className="p-8">
                      <div className="text-center space-y-6">
                        <h4 className="text-2xl font-bold text-gray-800">{study.company}</h4>
                        
                        <div className="grid grid-cols-2 gap-6">
                          <div className="text-center">
                            <div className="text-xl font-bold text-red-600 mb-2">TRƯỚC</div>
                            <div className="h-16 bg-red-100 rounded-lg flex items-center justify-center">
                              <span className="text-red-600 font-semibold text-sm">Thách thức</span>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-bold text-green-600 mb-2">SAU</div>
                            <div className="h-16 bg-green-100 rounded-lg flex items-center justify-center">
                              <span className="text-green-600 font-semibold text-sm">Thành công</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4">
                          <h5 className="font-semibold mb-3">Kết quả nổi bật</h5>
                          <div className="flex justify-center">
                            <div className="flex space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">Đánh giá khách hàng</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Bảng giá linh hoạt
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Chọn gói phù hợp với quy mô và nhu cầu của doanh nghiệp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.recommended ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Phổ biến nhất
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.recommended 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                    onClick={() => navigate('/contact')}
                  >
                    {plan.price === "Liên hệ" ? "Liên hệ tư vấn" : "Bắt đầu ngay"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Lợi ích vượt trội
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Chatbot AI mang lại hiệu quả kinh doanh đột phá cho doanh nghiệp
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Bắt đầu ngay hôm nay
              </h3>
              <p className="text-gray-600 mb-6">
                Liên hệ để được tư vấn miễn phí và triển khai chatbot AI cho doanh nghiệp của bạn
              </p>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 mb-4"
                onClick={() => navigate('/contact')}
              >
                Liên hệ ngay
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <p className="text-sm text-gray-500 text-center">
                Tư vấn miễn phí • Setup trong 24h • Hỗ trợ 24/7
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIChatbot;
