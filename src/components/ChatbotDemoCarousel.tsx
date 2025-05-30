
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ShoppingCart, Calendar, HelpCircle, Headphones, Globe, CreditCard, Users } from "lucide-react";

const ChatbotDemoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const demoScenarios = [
    {
      id: 1,
      title: "E-commerce Support",
      description: "AI helps customers find products and complete purchases",
      icon: <ShoppingCart className="w-6 h-6" />,
      messages: [
        { type: "user", text: "I'm looking for a blue dress for a wedding" },
        { type: "bot", text: "I'd be happy to help! What size and style are you looking for? We have beautiful blue dresses perfect for weddings." },
        { type: "user", text: "Size M, something elegant" },
        { type: "bot", text: "Perfect! I found 3 elegant blue dresses in size M. Here are our top recommendations with photos and prices." }
      ],
      features: ["Product recommendations", "Smart search", "Purchase assistance"]
    },
    {
      id: 2,
      title: "Booking & Scheduling", 
      description: "Seamless appointment booking with natural conversation",
      icon: <Calendar className="w-6 h-6" />,
      messages: [
        { type: "user", text: "I need to book a dental cleaning" },
        { type: "bot", text: "I can help you schedule that! When would work best for you? We have availability this week." },
        { type: "user", text: "Friday afternoon if possible" },
        { type: "bot", text: "Great! I have 2:30 PM and 4:00 PM available on Friday. Which time works better?" }
      ],
      features: ["Calendar integration", "Real-time availability", "Automated confirmations"]
    },
    {
      id: 3,
      title: "Customer Support",
      description: "Instant help with orders, returns, and technical issues",
      icon: <Headphones className="w-6 h-6" />,
      messages: [
        { type: "user", text: "My order hasn't arrived yet" },
        { type: "bot", text: "I'm sorry to hear that. Let me check your order status. Can you provide your order number?" },
        { type: "user", text: "Order #12345" },
        { type: "bot", text: "I see your order is currently out for delivery and should arrive today by 6 PM. I'll send you a tracking link." }
      ],
      features: ["Order tracking", "Issue resolution", "24/7 availability"]
    },
    {
      id: 4,
      title: "FAQ & Information",
      description: "Smart answers to common questions and company policies",
      icon: <HelpCircle className="w-6 h-6" />,
      messages: [
        { type: "user", text: "What's your return policy?" },
        { type: "bot", text: "You can return items within 30 days of purchase for a full refund. Items must be unused and in original packaging." },
        { type: "user", text: "How do I start a return?" },
        { type: "bot", text: "Simply visit your account dashboard and click 'Return Item' next to your order, or I can start the process for you right now." }
      ],
      features: ["Policy explanations", "Process guidance", "Instant answers"]
    },
    {
      id: 5,
      title: "Multilingual Support",
      description: "Communicate with customers in their preferred language",
      icon: <Globe className="w-6 h-6" />,
      messages: [
        { type: "user", text: "Xin chào, tôi cần hỗ trợ" },
        { type: "bot", text: "Xin chào! Tôi có thể giúp bạn bằng tiếng Việt. Bạn cần hỗ trợ gì?" },
        { type: "user", text: "Tôi muốn đặt hàng" },
        { type: "bot", text: "Tuyệt vời! Tôi sẽ hướng dẫn bạn qua quy trình đặt hàng. Bạn đang tìm sản phẩm gì?" }
      ],
      features: ["50+ languages", "Cultural adaptation", "Local preferences"]
    },
    {
      id: 6,
      title: "Payment Processing",
      description: "Secure payment assistance and transaction support",
      icon: <CreditCard className="w-6 h-6" />,
      messages: [
        { type: "user", text: "I'm having trouble with payment" },
        { type: "bot", text: "I can help with that. What payment method are you trying to use?" },
        { type: "user", text: "Credit card but it keeps declining" },
        { type: "bot", text: "Let me suggest some solutions: 1) Check your card details, 2) Try a different card, or 3) Use PayPal. I can also help you contact your bank." }
      ],
      features: ["Payment troubleshooting", "Multiple payment options", "Security verification"]
    },
    {
      id: 7,
      title: "Lead Generation",
      description: "Qualify leads and collect contact information naturally",
      icon: <Users className="w-6 h-6" />,
      messages: [
        { type: "user", text: "I'm interested in your services" },
        { type: "bot", text: "That's wonderful! I'd love to help you learn more. What type of business do you have?" },
        { type: "user", text: "A small restaurant" },
        { type: "bot", text: "Perfect! Our restaurant solutions can help with reservations and customer service. Can I schedule a demo for you?" }
      ],
      features: ["Lead qualification", "Contact collection", "Demo scheduling"]
    },
    {
      id: 8,
      title: "Product Recommendations",
      description: "AI-powered suggestions based on customer preferences",
      icon: <MessageCircle className="w-6 h-6" />,
      messages: [
        { type: "user", text: "I want something for dry skin" },
        { type: "bot", text: "I can recommend some great products! Do you prefer natural ingredients or are you looking for specific results?" },
        { type: "user", text: "Natural ingredients please" },
        { type: "bot", text: "Perfect! Based on your preferences, I recommend our Organic Moisturizer with aloe vera and vitamin E. It's our bestseller for dry skin!" }
      ],
      features: ["Personalized suggestions", "Preference learning", "Cross-selling"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % demoScenarios.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [demoScenarios.length]);

  return (
    <div className="max-w-6xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent>
          {demoScenarios.map((scenario, index) => (
            <CarouselItem key={scenario.id}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* iPhone Mockup */}
                <div className="relative mx-auto lg:mx-0">
                  <div className="relative w-64 h-[500px] bg-black rounded-[3rem] p-2 shadow-2xl">
                    {/* iPhone Screen */}
                    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                      {/* Status Bar */}
                      <div className="bg-blue-600 text-white text-xs px-4 py-2 flex justify-between items-center">
                        <span className="font-medium">Live Chat</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span>Online</span>
                        </div>
                      </div>
                      
                      {/* Chat Messages */}
                      <div className="p-4 space-y-3 h-full overflow-hidden">
                        {scenario.messages.map((message, msgIndex) => (
                          <div 
                            key={msgIndex} 
                            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                            style={{ animationDelay: `${msgIndex * 0.8}s` }}
                          >
                            <div 
                              className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                                message.type === 'user' 
                                  ? 'bg-blue-600 text-white rounded-br-md' 
                                  : 'bg-gray-100 text-gray-800 rounded-bl-md'
                              }`}
                            >
                              {message.text}
                            </div>
                          </div>
                        ))}
                        
                        {/* Typing indicator */}
                        <div className="flex justify-start animate-fade-in" style={{ animationDelay: '3.2s' }}>
                          <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-md">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* iPhone Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full"></div>
                  </div>
                </div>

                {/* Scenario Details */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      {scenario.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{scenario.title}</h3>
                      <p className="text-gray-600">{scenario.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {scenario.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="bg-blue-50 text-blue-700">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-1">
                    {demoScenarios.map((_, dotIndex) => (
                      <div
                        key={dotIndex}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          dotIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default ChatbotDemoCarousel;
