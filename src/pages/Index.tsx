
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MessageCircle, Zap, BarChart3, Users, Globe, Shield, TrendingUp, Star, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Section from "@/components/ui/section";
import TestimonialAvatar from "@/components/TestimonialAvatar";
import Scene3D from "@/components/3d/Scene3D";
import AnimatedCard from "@/components/AnimatedCard";
import AnimatedButton from "@/components/AnimatedButton";
import ScrollTriggeredSection from "@/components/ScrollTriggeredSection";

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
    <div className="pt-16 relative">
      {/* 3D Background Scene */}
      <Scene3D />
      
      {/* Hero Section */}
      <Section background="gradient">
        <ScrollTriggeredSection direction="up" delay={0.2}>
          <div className="text-center max-w-6xl mx-auto relative z-10">
            <Badge variant="secondary" className="mb-6 px-4 py-2 bg-blue-100/80 backdrop-blur-sm text-blue-700 border-blue-200">
              ✨ <span className="text-green-600">{t('home.hero.subtitle3')}</span> AI-Powered Customer Conversations
            </Badge>
            
            <h1 className="text-6xl font-bold mb-6 text-gray-900 leading-tight">
              {t('home.hero.title')} <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {t('home.hero.subtitle')}
              </span> <br />
              {t('home.hero.subtitle2')} <span className="text-green-600">{t('home.hero.subtitle3')}</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              {t('home.hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <AnimatedButton size="lg" onClick={() => navigate('/contact')} className="font-semibold px-8 py-4 text-lg">
                {t('home.hero.getDemo')} <ArrowRight className="ml-2 w-5 h-5" />
              </AnimatedButton>
              <AnimatedButton 
                size="lg" 
                variant="outline" 
                onClick={() => navigate('/features')}
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg backdrop-blur-sm"
              >
                {t('home.hero.learnMore')}
              </AnimatedButton>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
              {[
                { value: "1000+", label: "Active Businesses" },
                { value: "45%", label: "Conversion Increase" },
                { value: "< 2s", label: "Response Time" },
                { value: "24/7", label: "AI Support" }
              ].map((stat, index) => (
                <ScrollTriggeredSection key={index} direction="up" delay={0.4 + index * 0.1}>
                  <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4">
                    <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </ScrollTriggeredSection>
              ))}
            </div>
          </div>
        </ScrollTriggeredSection>
      </Section>

      {/* Why Choose Us */}
      <Section background="white">
        <ScrollTriggeredSection direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {t('home.why.title')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">D2 Group</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.why.subtitle')}
            </p>
          </div>
        </ScrollTriggeredSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <MessageCircle className="w-8 h-8 text-blue-600" />,
              title: t('home.why.ai.title'),
              desc: t('home.why.ai.desc')
            },
            {
              icon: <Shield className="w-8 h-8 text-green-600" />,
              title: t('home.why.security.title'),
              desc: t('home.why.security.desc')
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
              title: t('home.why.results.title'),
              desc: t('home.why.results.desc')
            }
          ].map((item, index) => (
            <AnimatedCard key={index} delay={index * 0.2} hoverRotate={3}>
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.desc}</p>
              </CardContent>
            </AnimatedCard>
          ))}
        </div>

        <ScrollTriggeredSection direction="up" delay={0.4}>
          <div className="text-center">
            <AnimatedButton 
              variant="outline" 
              onClick={() => navigate('/about')}
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              {t('home.why.learnMore')} <ArrowRight className="ml-2 w-4 h-4" />
            </AnimatedButton>
          </div>
        </ScrollTriggeredSection>
      </Section>

      {/* Features Overview */}
      <Section background="gray">
        <ScrollTriggeredSection direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {t('home.features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.features.subtitle')}
            </p>
          </div>
        </ScrollTriggeredSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
              title: t('home.features.smart.title'),
              desc: t('home.features.smart.desc')
            },
            {
              icon: <Zap className="w-12 h-12 text-yellow-600 mx-auto mb-4" />,
              title: t('home.features.instant.title'),
              desc: t('home.features.instant.desc')
            },
            {
              icon: <BarChart3 className="w-12 h-12 text-green-600 mx-auto mb-4" />,
              title: t('home.features.analytics.title'),
              desc: t('home.features.analytics.desc')
            },
            {
              icon: <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />,
              title: t('home.features.multichannel.title'),
              desc: t('home.features.multichannel.desc')
            }
          ].map((feature, index) => (
            <AnimatedCard key={index} delay={index * 0.1} hoverScale={1.08}>
              <CardHeader>
                {feature.icon}
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </CardContent>
            </AnimatedCard>
          ))}
        </div>

        <ScrollTriggeredSection direction="up" delay={0.4}>
          <div className="text-center">
            <AnimatedButton 
              onClick={() => navigate('/features')}
              className="text-white"
            >
              {t('home.features.viewAll')} <ArrowRight className="ml-2 w-4 h-4" />
            </AnimatedButton>
          </div>
        </ScrollTriggeredSection>
      </Section>

      {/* How It Works */}
      <Section background="white">
        <ScrollTriggeredSection direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {t('home.howItWorks.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.howItWorks.subtitle')}
            </p>
          </div>
        </ScrollTriggeredSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: t('home.howItWorks.step1.title'),
              desc: t('home.howItWorks.step1.desc')
            },
            {
              step: "2",
              title: t('home.howItWorks.step2.title'),
              desc: t('home.howItWorks.step2.desc')
            },
            {
              step: "3",
              title: t('home.howItWorks.step3.title'),
              desc: t('home.howItWorks.step3.desc')
            }
          ].map((item, index) => (
            <ScrollTriggeredSection key={index} direction="up" delay={0.3 + index * 0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </ScrollTriggeredSection>
          ))}
        </div>
      </Section>

      {/* Industry Use Cases */}
      <Section background="gray">
        <ScrollTriggeredSection direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {t('home.useCases.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.useCases.subtitle')}
            </p>
          </div>
        </ScrollTriggeredSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {[
            { name: t('home.useCases.ecommerce'), icon: "🛒", color: "bg-blue-100 text-blue-700" },
            { name: t('home.useCases.healthcare'), icon: "🏥", color: "bg-green-100 text-green-700" },
            { name: t('home.useCases.education'), icon: "🎓", color: "bg-purple-100 text-purple-700" },
            { name: t('home.useCases.banking'), icon: "🏦", color: "bg-indigo-100 text-indigo-700" },
            { name: t('home.useCases.realestate'), icon: "🏠", color: "bg-orange-100 text-orange-700" },
            { name: t('home.useCases.travel'), icon: "✈️", color: "bg-cyan-100 text-cyan-700" }
          ].map((useCase, index) => (
            <AnimatedCard key={index} delay={index * 0.1} hoverScale={1.1}>
              <CardContent className="p-6">
                <div className="text-4xl mb-3">{useCase.icon}</div>
                <h3 className={`font-semibold ${useCase.color}`}>{useCase.name}</h3>
              </CardContent>
            </AnimatedCard>
          ))}
        </div>

        <ScrollTriggeredSection direction="up" delay={0.4}>
          <div className="text-center">
            <AnimatedButton 
              variant="outline" 
              onClick={() => navigate('/case-studies')}
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              {t('home.useCases.viewCaseStudies')} <ArrowRight className="ml-2 w-4 h-4" />
            </AnimatedButton>
          </div>
        </ScrollTriggeredSection>
      </Section>

      {/* Customer Testimonials */}
      <Section background="white">
        <ScrollTriggeredSection direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {t('home.testimonials.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.testimonials.subtitle')}
            </p>
          </div>
        </ScrollTriggeredSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedCard key={index} delay={index * 0.2} hoverRotate={2}>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center">
                  <TestimonialAvatar src="/placeholder.svg" alt={testimonial.author} fallback={testimonial.author.split(' ').map(n => n[0]).join('')} />
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>
          ))}
        </div>
      </Section>

      {/* Trusted Partners */}
      <Section background="gray">
        <ScrollTriggeredSection direction="up" delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              {t('home.partners.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('home.partners.subtitle')}
            </p>
          </div>
        </ScrollTriggeredSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <ScrollTriggeredSection key={index} direction="up" delay={0.3 + index * 0.1}>
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow h-32 flex flex-col items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-h-16 max-w-full object-contain mb-2"
                  />
                  <div className="text-sm font-medium text-gray-700">{partner.name}</div>
                </div>
              </div>
            </ScrollTriggeredSection>
          ))}
        </div>
      </Section>

      {/* Pricing Preview */}
      <Section background="white">
        <ScrollTriggeredSection direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {t('home.pricing.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('home.pricing.subtitle')}
            </p>
          </div>
        </ScrollTriggeredSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingPlans.map((plan, index) => (
            <AnimatedCard 
              key={index}
              delay={index * 0.1}
              hoverScale={plan.popular ? 1.08 : 1.05}
              className={plan.popular ? 'scale-105' : ''}
            >
              <Card 
                className={`text-center border-2 transition-all duration-300 ${
                  plan.popular 
                    ? 'border-blue-600 shadow-lg' 
                    : 'border-gray-200 hover:border-blue-600'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold py-2">
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
                  <AnimatedButton 
                    onClick={() => navigate('/contact')}
                    className={`w-full ${
                      plan.popular 
                        ? 'text-white' 
                        : 'bg-gray-800 hover:bg-gray-900 text-white'
                    }`}
                  >
                    {plan.name === t('pricing.enterprise') ? t('pricing.contactForPricing') : t('pricing.getStarted')}
                  </AnimatedButton>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>

        <ScrollTriggeredSection direction="up" delay={0.4}>
          <div className="text-center">
            <AnimatedButton 
              variant="outline" 
              onClick={() => navigate('/pricing')}
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              {t('home.pricing.seeFullPricing')} <ArrowRight className="ml-2 w-4 h-4" />
            </AnimatedButton>
          </div>
        </ScrollTriggeredSection>
      </Section>

      {/* FAQ Preview */}
      <Section background="gray">
        <ScrollTriggeredSection direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {t('home.faq.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('home.faq.subtitle')}
            </p>
          </div>
        </ScrollTriggeredSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {faqs.map((faq, index) => (
            <AnimatedCard key={index} delay={index * 0.2}>
              <CardContent className="p-8">
                <h3 className="font-bold text-lg mb-4 text-blue-600">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </CardContent>
            </AnimatedCard>
          ))}
          
          <AnimatedCard delay={0.6}>
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="font-bold text-lg mb-4">Have more questions?</h3>
                <AnimatedButton 
                  variant="outline" 
                  onClick={() => navigate('/contact')}
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Contact Us <ArrowRight className="ml-2 w-4 h-4" />
                </AnimatedButton>
              </div>
            </CardContent>
          </AnimatedCard>
        </div>

        <ScrollTriggeredSection direction="up" delay={0.4}>
          <div className="text-center">
            <AnimatedButton 
              variant="outline" 
              onClick={() => navigate('/contact')}
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              {t('home.faq.viewFullFaq')} <ArrowRight className="ml-2 w-4 h-4" />
            </AnimatedButton>
          </div>
        </ScrollTriggeredSection>
      </Section>

      {/* Final CTA */}
      <Section background="gradient">
        <ScrollTriggeredSection direction="up" delay={0.2}>
          <div className="text-center max-w-4xl mx-auto relative z-10">
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
              <AnimatedButton 
                size="lg" 
                onClick={() => navigate('/contact')}
                className="font-semibold px-8 py-4 text-lg"
              >
                {t('home.finalCta.startTrial')} <ArrowRight className="ml-2 w-5 h-5" />
              </AnimatedButton>
              <AnimatedButton 
                size="lg" 
                variant="outline" 
                onClick={() => navigate('/contact')}
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg backdrop-blur-sm"
              >
                {t('home.finalCta.bookDemo')}
              </AnimatedButton>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-gray-600">
              {[
                { text: t('home.finalCta.pocTrial') },
                { text: t('home.finalCta.noCreditCard') },
                { text: t('home.finalCta.setupIn5') }
              ].map((item, index) => (
                <span key={index} className="flex items-center justify-center space-x-2 backdrop-blur-sm bg-white/20 rounded-lg p-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{item.text}</span>
                </span>
              ))}
            </div>
          </div>
        </ScrollTriggeredSection>
      </Section>
    </div>
  );
};

export default Index;
