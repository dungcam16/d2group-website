import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MessageCircle, Zap, BarChart3, Users, Globe, Shield, TrendingUp, Star, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Section from "@/components/ui/section";
import TestimonialAvatar from "@/components/TestimonialAvatar";

const Index = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const pricingPlans = [
    {
      name: t('pricing.starter'),
      price: language === 'vi' ? '2.900.000' : '$119',
      period: t('pricing.month'),
      description: t('pricing.starter.desc'),
      popular: false,
    },
    {
      name: t('pricing.growth'),
      price: language === 'vi' ? '3.900.000' : '$199',
      period: t('pricing.month'),
      description: t('pricing.growth.desc'),
      popular: true,
    },
    {
      name: t('pricing.business'),
      price: language === 'vi' ? '7.900.000' : '$299',
      period: t('pricing.month'),
      description: t('pricing.business.desc'),
      popular: false,
    },
    {
      name: t('pricing.enterprise'),
      price: language === 'vi' ? 'Liên lạc' : 'Contact',
      period: "",
      description: t('pricing.enterprise.desc'),
      popular: false,
    }
  ];

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handlePricingClick = () => {
    navigate('/pricing');
  };

  const testimonials = [
    {
      id: 1,
      stars: 5,
      content: t('home.testimonials.1.content'),
      author: "Sarah Chen",
      title: "CEO, TechCorp"
    },
    {
      id: 2,
      stars: 5,
      content: t('home.testimonials.2.content'),
      author: "Michael Rodriguez",
      title: "Marketing Director, E-Shop"
    },
    {
      id: 3,
      stars: 5,
      content: t('home.testimonials.3.content'),
      author: "Dr. Emily Watson",
      title: "Academic Director, EduPlatform"
    }
  ];

  const partners = [
    { name: "Khánh & Vân", logo: "/lovable-uploads/a7db9dff-ef1e-4883-88f4-52f93f6d92a7.png" },
    { name: "Luật Minh Tâm", logo: "/lovable-uploads/f95a2914-ae30-4fa8-9051-e102f6f73a8a.png" },
    { name: "Hannah Beauty Studio", logo: "/lovable-uploads/5f3bb211-f617-4a6c-9c48-253cf2dcedbd.png" },
    { name: "Golden Sun Travel", logo: "/lovable-uploads/a3ebde84-cb4e-4b4a-bce1-55943b504a5b.png" },
    { name: "Ziara Clothing", logo: "/lovable-uploads/97e01d1e-106c-42c6-9b4b-c11f99cb4b35.png" },
    { name: "Thynk Media", logo: "/lovable-uploads/7d5dfd9a-f744-478d-bf9c-24b9b9c779ef.png" }
  ];

  const faqs = [
    {
      question: t('home.faq.q1'),
      answer: t('home.faq.a1')
    },
    {
      question: t('home.faq.q2'),
      answer: t('home.faq.a2')
    },
    {
      question: t('home.faq.q3'),
      answer: t('home.faq.a3')
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Floating Sidebar */}
      <div className="floating-sidebar hidden lg:block">
        <div className="flex flex-col space-y-4">
          <Button size="icon" variant="ghost" className="w-12 h-12 rounded-xl glass">
            <MessageCircle className="w-6 h-6" />
          </Button>
          <Button size="icon" variant="ghost" className="w-12 h-12 rounded-xl glass">
            <Users className="w-6 h-6" />
          </Button>
          <Button size="icon" variant="ghost" className="w-12 h-12 rounded-xl glass">
            <BarChart3 className="w-6 h-6" />
          </Button>
          <Button size="icon" variant="ghost" className="w-12 h-12 rounded-xl glass">
            <Globe className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-16 pl-0 lg:pl-20">
        {/* Hero Section */}
        <Section background="gradient">
          <div className="relative overflow-hidden min-h-screen">
            {/* Search Bar */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
              <div className="glass-card px-8 py-4 flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">Service</span>
                  <span className="font-bold">AI Chatbot</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">Industry</span>
                  <span className="font-bold">All Industries</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">Price</span>
                  <span className="font-bold">From $119</span>
                </div>
                <Button className="bg-primary text-primary-foreground rounded-xl px-6">
                  Discover
                </Button>
              </div>
            </div>

            {/* Main Hero Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Text Content */}
              <div className="space-y-8">
                <h1 className="text-7xl md:text-8xl font-black leading-none">
                  <span className="block text-foreground/90">New Way Of</span>
                  <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Business
                  </span>
                  <span className="block text-foreground/80 text-5xl md:text-6xl">
                    Automation
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed font-light">
                  {t('home.hero.description')}
                </p>

                {/* Service Preview Card */}
                <div className="property-card p-6 max-w-md">
                  <h3 className="font-bold text-lg mb-2">Find The Perfect Solution</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Our platform connects you with extraordinary AI solutions. Start your journey to discovering the perfect match for your business.
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-black text-primary">10K+</div>
                      <div className="text-sm text-muted-foreground">Businesses</div>
                    </div>
                    <Button size="icon" className="rounded-xl">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Side - Feature Card */}
              <div className="relative">
                <div className="property-card p-8 max-w-md ml-auto">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold">AI Chatbot Engine</h3>
                    <Button size="icon" variant="ghost" className="rounded-xl">
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <MessageCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">24/7 Customer Support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-accent" />
                      <span className="text-sm">Instant Response</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BarChart3 className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Advanced Analytics</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-lg font-bold">99.5%</div>
                      <div className="text-xs text-muted-foreground">Uptime</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold">&lt; 2s</div>
                      <div className="text-xs text-muted-foreground">Response</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Button size="icon" variant="ghost" className="w-8 h-8 rounded-lg">
                        <Star className="w-4 h-4 fill-current text-yellow-400" />
                      </Button>
                      <span className="text-sm font-medium">4.9</span>
                      <span className="text-xs text-muted-foreground">127 reviews</span>
                    </div>
                    <Button size="icon" variant="ghost" className="rounded-xl">
                      <Shield className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="text-center pb-16">
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/contact')}
                  className="glass bg-primary/90 hover:bg-primary text-primary-foreground font-semibold px-10 py-6 text-lg rounded-2xl shadow-2xl backdrop-blur-xl"
                >
                  {t('home.hero.getDemo')} <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => navigate('/features')}
                  className="glass bg-white/20 border-white/30 text-foreground hover:bg-white/30 px-10 py-6 text-lg rounded-2xl backdrop-blur-xl"
                >
                  {t('home.hero.learnMore')}
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* Why Choose Us */}
        <Section background="white">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {t('home.why.title')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">D2 Group</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.why.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl mb-2">{t('home.why.ai.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('home.why.ai.desc')}</p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl mb-2">{t('home.why.security.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('home.why.security.desc')}</p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl mb-2">{t('home.why.results.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('home.why.results.desc')}</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              onClick={() => navigate('/about')}
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              {t('home.why.learnMore')} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </Section>

        {/* Final CTA */}
        <Section background="gradient">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              {t('home.finalCta.title')} <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {t('home.finalCta.title2')}
              </span> <br />
              {t('home.finalCta.title3')}
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('home.finalCta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                onClick={() => navigate('/contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg"
              >
                {t('home.finalCta.startTrial')} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => navigate('/contact')}
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg"
              >
                {t('home.finalCta.bookDemo')}
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-gray-600">
              <span className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>{t('home.finalCta.pocTrial')}</span>
              </span>
              <span className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>{t('home.finalCta.noCreditCard')}</span>
              </span>
              <span className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>{t('home.finalCta.setupIn5')}</span>
              </span>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Index;
