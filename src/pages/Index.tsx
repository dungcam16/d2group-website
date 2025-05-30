
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
    "VietcomBank", "FPT Corporation", "Vingroup", "BIDV", "Techcombank", "MB Bank"
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
    <div className="pt-16">
      {/* Hero Section */}
      <Section background="gradient">
        <div className="text-center max-w-6xl mx-auto">
          <Badge variant="secondary" className="mb-6 px-4 py-2 bg-blue-100 text-blue-700 border-blue-200">
            ✨ <span className="text-green-600">{t('home.hero.subtitle3')}</span> AI-Powered Customer Conversations
          </Badge>
          
          <h1 className="text-6xl font-bold mb-6 text-gray-900 leading-tight">
            {t('home.hero.title')} <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {t('home.hero.subtitle')}
            </span> <br />
            {t('home.hero.subtitle2')}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            {t('home.hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={() => navigate('/contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg"
            >
              {t('home.hero.getDemo')} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => navigate('/features')}
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg"
            >
              {t('home.hero.learnMore')}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Active Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">45%</div>
              <div className="text-gray-600">Conversion Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">&lt; 2s</div>
              <div className="text-gray-600">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">AI Support</div>
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

      {/* Features Overview */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t('home.features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('home.features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center border-none shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-lg">{t('home.features.smart.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">{t('home.features.smart.desc')}</p>
            </CardContent>
          </Card>

          <Card className="text-center border-none shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <Zap className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <CardTitle className="text-lg">{t('home.features.instant.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">{t('home.features.instant.desc')}</p>
            </CardContent>
          </Card>

          <Card className="text-center border-none shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <BarChart3 className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-lg">{t('home.features.analytics.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">{t('home.features.analytics.desc')}</p>
            </CardContent>
          </Card>

          <Card className="text-center border-none shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <CardTitle className="text-lg">{t('home.features.multichannel.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">{t('home.features.multichannel.desc')}</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            onClick={() => navigate('/features')}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            {t('home.features.viewAll')} <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t('home.howItWorks.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('home.howItWorks.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-bold mb-4">{t('home.howItWorks.step1.title')}</h3>
            <p className="text-gray-600">{t('home.howItWorks.step1.desc')}</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-bold mb-4">{t('home.howItWorks.step2.title')}</h3>
            <p className="text-gray-600">{t('home.howItWorks.step2.desc')}</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-bold mb-4">{t('home.howItWorks.step3.title')}</h3>
            <p className="text-gray-600">{t('home.howItWorks.step3.desc')}</p>
          </div>
        </div>
      </Section>

      {/* Industry Use Cases */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t('home.useCases.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('home.useCases.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {[
            { name: t('home.useCases.ecommerce'), icon: "🛒", color: "bg-blue-100 text-blue-700" },
            { name: t('home.useCases.healthcare'), icon: "🏥", color: "bg-green-100 text-green-700" },
            { name: t('home.useCases.education'), icon: "🎓", color: "bg-purple-100 text-purple-700" },
            { name: t('home.useCases.banking'), icon: "🏦", color: "bg-indigo-100 text-indigo-700" },
            { name: t('home.useCases.realestate'), icon: "🏠", color: "bg-orange-100 text-orange-700" },
            { name: t('home.useCases.travel'), icon: "✈️", color: "bg-cyan-100 text-cyan-700" }
          ].map((useCase, index) => (
            <Card key={index} className="text-center border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <CardContent className="p-6">
                <div className="text-4xl mb-3">{useCase.icon}</div>
                <h3 className={`font-semibold ${useCase.color}`}>{useCase.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            onClick={() => navigate('/case-studies')}
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            {t('home.useCases.viewCaseStudies')} <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </Section>

      {/* Customer Testimonials */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t('home.testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('home.testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                "{t('home.testimonials.1.content')}"
              </blockquote>
              <div className="flex items-center">
                <TestimonialAvatar src="/placeholder.svg" alt="Sarah Chen" fallback="SC" />
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">Sarah Chen</div>
                  <div className="text-sm text-gray-600">CEO, TechCorp</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                "{t('home.testimonials.2.content')}"
              </blockquote>
              <div className="flex items-center">
                <TestimonialAvatar src="/placeholder.svg" alt="Michael Rodriguez" fallback="MR" />
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">Michael Rodriguez</div>
                  <div className="text-sm text-gray-600">Marketing Director, E-Shop</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                "{t('home.testimonials.3.content')}"
              </blockquote>
              <div className="flex items-center">
                <TestimonialAvatar src="/placeholder.svg" alt="Dr. Emily Watson" fallback="EW" />
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">Dr. Emily Watson</div>
                  <div className="text-sm text-gray-600">Academic Director, EduPlatform</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Trusted Partners */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            {t('home.partners.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('home.partners.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-70">
          {[
            "VietcomBank", "FPT Corporation", "Vingroup", "BIDV", "Techcombank", "MB Bank"
          ].map((partner, index) => (
            <div key={index} className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl font-bold text-gray-400">{partner}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing Preview */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t('home.pricing.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('home.pricing.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`text-center border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'border-blue-600 shadow-lg scale-105' 
                  : 'border-gray-200 hover:border-blue-600'
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-sm font-semibold py-2">
                  {t('pricing.mostPopular')}
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-blue-600">
                  {plan.price}<span className="text-base text-gray-600 ml-1">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                <Button 
                  onClick={() => navigate('/contact')}
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-gray-800 hover:bg-gray-900'
                  } text-white`}
                >
                  {plan.name === t('pricing.enterprise') ? t('pricing.contactForPricing') : t('pricing.getStarted')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            onClick={() => navigate('/pricing')}
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            {t('home.pricing.seeFullPricing')} <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </Section>

      {/* FAQ Preview */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t('home.faq.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('home.faq.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-none shadow-md">
            <CardContent className="p-8">
              <h3 className="font-bold text-lg mb-4 text-blue-600">{t('home.faq.q1')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('home.faq.a1')}</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="p-8">
              <h3 className="font-bold text-lg mb-4 text-blue-600">{t('home.faq.q2')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('home.faq.a2')}</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="p-8">
              <h3 className="font-bold text-lg mb-4 text-blue-600">{t('home.faq.q3')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('home.faq.a3')}</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="font-bold text-lg mb-4">Have more questions?</h3>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/contact')}
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Contact Us <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            onClick={() => navigate('/contact')}
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            {t('home.faq.viewFullFaq')} <ArrowRight className="ml-2 w-4 h-4" />
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
              <span>{t('home.finalCta.freeTrial')}</span>
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
  );
};

export default Index;
