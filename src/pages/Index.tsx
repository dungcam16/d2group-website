import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, ArrowRight, CheckCircle, Zap, Shield, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TestimonialAvatar from "@/components/TestimonialAvatar";
import Section from "@/components/ui/section";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Hero carousel images
  const heroImages = [
    {
      type: "mockup",
      content: (
        <div className="relative mx-auto w-72 h-96">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl">
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">AI</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="flex-1 space-y-4 overflow-hidden">
                <div className="flex items-start space-x-3 animate-fade-in">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <div className="bg-gray-700 rounded-2xl p-3 max-w-[200px]">
                    <p className="text-white text-sm">Hi! How can I help you today?</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 justify-end animate-fade-in" style={{animationDelay: '1s'}}>
                  <div className="bg-blue-600 rounded-2xl p-3 max-w-[200px]">
                    <p className="text-white text-sm">I need help with my order</p>
                  </div>
                  <div className="w-8 h-8 bg-gray-500 rounded-full flex-shrink-0"></div>
                </div>
                
                <div className="flex items-start space-x-3 animate-fade-in" style={{animationDelay: '2s'}}>
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <div className="bg-gray-700 rounded-2xl p-3 max-w-[200px]">
                    <p className="text-white text-sm">I can help you track your order. What's your order number?</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 animate-fade-in" style={{animationDelay: '3s'}}>
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-3 max-w-[200px]">
                    <p className="text-white text-sm">✅ Order found! It's being processed and will ship tomorrow.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      type: "stats",
      content: (
        <div className="relative">
          <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 w-72 space-y-4 shadow-2xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Results</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium">Response Time</span>
                  <span className="text-green-600 font-bold">&lt; 2 sec</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm font-medium">Conversion Rate</span>
                  <span className="text-blue-600 font-bold">+40%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="text-sm font-medium">Cost Savings</span>
                  <span className="text-purple-600 font-bold">60%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Core values
  const coreValues = [
    {
      title: t('home.why.ai.title'),
      description: t('home.why.ai.desc'),
      icon: <Zap className="w-8 h-8 text-blue-600" />
    },
    {
      title: t('home.why.security.title'),
      description: t('home.why.security.desc'),
      icon: <Shield className="w-8 h-8 text-blue-600" />
    },
    {
      title: t('home.why.results.title'),
      description: t('home.why.results.desc'),
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />
    }
  ];

  // Key features overview
  const keyFeatures = [
    {
      title: t('home.features.smart.title'),
      description: t('home.features.smart.desc'),
      icon: "💬"
    },
    {
      title: t('home.features.instant.title'),
      description: t('home.features.instant.desc'),
      icon: "⚡"
    },
    {
      title: t('home.features.analytics.title'),
      description: t('home.features.analytics.desc'),
      icon: "📊"
    },
    {
      title: t('home.features.multichannel.title'),
      description: t('home.features.multichannel.desc'),
      icon: "🌐"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: "1",
      title: t('home.howItWorks.step1.title'),
      description: t('home.howItWorks.step1.desc')
    },
    {
      step: "2", 
      title: t('home.howItWorks.step2.title'),
      description: t('home.howItWorks.step2.desc')
    },
    {
      step: "3",
      title: t('home.howItWorks.step3.title'),
      description: t('home.howItWorks.step3.desc')
    }
  ];

  // Use cases mini preview
  const useCasesMini = [
    { industry: t('home.useCases.ecommerce'), metric: "+35% Sales", icon: "🛒" },
    { industry: t('home.useCases.healthcare'), metric: "-50% Wait Time", icon: "🏥" },
    { industry: t('home.useCases.education'), metric: "+60% Engagement", icon: "🎓" },
    { industry: t('home.useCases.banking'), metric: "+25% Satisfaction", icon: "🏦" },
    { industry: t('home.useCases.realestate'), metric: "+40% Leads", icon: "🏠" },
    { industry: t('home.useCases.travel'), metric: "-30% Support Cost", icon: "✈️" }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Nguyễn Văn Quang",
      company: "CEO, TechViet Solutions",
      content: t('home.testimonials.1.content'),
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      fallback: "NVQ"
    },
    {
      name: "Trần Thị Hồng",
      company: "Marketing Director, VietBank Digital",
      content: t('home.testimonials.2.content'),
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5ab?w=150&h=150&fit=crop&crop=face",
      fallback: "TTH"
    },
    {
      name: "Lê Minh Cường",
      company: "Founder, EduPlatform Vietnam",
      content: t('home.testimonials.3.content'),
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      fallback: "LMC"
    }
  ];

  // Deployment partners
  const deploymentPartners = [
    { name: "VinGroup", logo: "🏢" },
    { name: "FPT Corporation", logo: "💼" },
    { name: "Vietcombank", logo: "🏦" },
    { name: "Saigon Co.op", logo: "🛒" },
    { name: "Vietnam Airlines", logo: "✈️" },
    { name: "Vinamilk", logo: "🥛" }
  ];

  // FAQ snapshot
  const faqSnapshot = [
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

  // Updated pricing plans to match the Pricing page
  const pricingPlans = [
    {
      name: t('pricing.starter'),
      price: "119$",
      period: t('pricing.month'),
      description: t('pricing.starter.desc'),
      features: [
        `1.000 ${t('feature.conversations')}`,
        t('feature.basicTemplates'),
        t('feature.websiteIntegration'),
        t('feature.emailSupport'),
        t('feature.basicAnalytics'),
        `5 ${t('feature.workflows')}`
      ],
      cta: t('pricing.getStarted'),
      popular: false
    },
    {
      name: t('pricing.growth'),
      price: "149$",
      period: t('pricing.month'),
      description: t('pricing.growth.desc'),
      features: [
        `5.000 ${t('feature.conversations')}`,
        t('feature.advancedTemplates'),
        t('feature.multiChannel'),
        t('feature.prioritySupport'),
        t('feature.advancedAnalytics'),
        `20 ${t('feature.workflows')}`,
        t('feature.crmIntegration')
      ],
      cta: t('pricing.getStarted'),
      popular: true
    },
    {
      name: t('pricing.business'),
      price: "299$",
      period: t('pricing.month'),
      description: t('pricing.business.desc'),
      features: [
        t('feature.unlimited') + ` ${t('feature.conversations')}`,
        t('feature.customDesign'),
        t('feature.customAI'),
        t('feature.phoneSupport'),
        t('feature.advancedReporting'),
        t('feature.unlimitedWorkflows'),
        t('feature.abTesting'),
        t('feature.leadQualification')
      ],
      cta: t('pricing.getStarted'),
      popular: false
    },
    {
      name: t('pricing.enterprise'),
      price: t('pricing.contactPricing'),
      period: "",
      description: t('pricing.enterprise.desc'),
      features: [
        t('feature.customBranding'),
        t('feature.onPremise'),
        t('feature.dedicatedManager'),
        t('feature.security'),
        t('feature.customIntegrations'),
        t('feature.slaGuarantees'),
        t('feature.whiteLabel')
      ],
      cta: t('pricing.contactForPricing'),
      popular: false
    }
  ];

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleLearnMoreClick = (page: string) => {
    navigate(`/${page}`);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Section background="gradient" className="min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('home.hero.title')}</span><br />
              {t('home.hero.subtitle')}<br />
              {t('home.hero.subtitle2')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('home.hero.subtitle3')}</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed whitespace-pre-line">
              {t('home.hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={handleContactClick} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg">
                {t('home.hero.getDemo')}
              </Button>
              <Button size="lg" variant="outline" onClick={() => handleLearnMoreClick('features')} className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg">
                {t('home.hero.learnMore')}
              </Button>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {heroImages[currentImage].content}
              
              {/* Carousel Controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImage ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => setCurrentImage((prev) => (prev + 1) % heroImages.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Values / Why D2 Group */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t('home.why.title')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">D2 Group</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('home.why.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button onClick={() => handleLearnMoreClick('about')} variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
            {t('home.why.learnMore')} <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </Section>

      {/* Key Features Overview */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('home.features.title')}</span>
          </h2>
          <p className="text-xl text-gray-600">
            {t('home.features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyFeatures.map((feature, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button onClick={() => handleLearnMoreClick('features')} className="bg-blue-600 hover:bg-blue-700 text-white">
            {t('home.features.viewAll')} <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('home.howItWorks.title')}</span>
          </h2>
          <p className="text-xl text-gray-600">
            {t('home.howItWorks.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-indigo-600 hidden lg:block"></div>
            
            {howItWorksSteps.map((step, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg hidden lg:flex">
                  {step.step}
                </div>
                
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Use Cases Mini */}
      <Section background="gradient">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('home.useCases.title')}</span> Across Industries
          </h2>
          <p className="text-xl text-gray-600">
            {t('home.useCases.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {useCasesMini.map((useCase, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">{useCase.icon}</div>
                <h3 className="font-semibold text-sm mb-2">{useCase.industry}</h3>
                <div className="text-blue-600 font-bold text-lg">{useCase.metric}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button onClick={() => handleLearnMoreClick('case-studies')} className="bg-blue-600 hover:bg-blue-700 text-white">
            {t('home.useCases.viewCaseStudies')} <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </Section>

      {/* Testimonials */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('home.testimonials.title')}</span>
          </h2>
          <p className="text-xl text-gray-600">
            {t('home.testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center">
                  <TestimonialAvatar 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fallback={testimonial.fallback}
                  />
                  <div className="ml-4">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Deployment Partners */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('home.partners.title')}</span>
          </h2>
          <p className="text-gray-600">
            {t('home.partners.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
          {deploymentPartners.map((partner, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                {partner.logo}
              </div>
              <p className="text-gray-600 text-sm font-semibold">{partner.name}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Updated Pricing Preview - All 4 Plans */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('home.pricing.title')}</span>
          </h2>
          <p className="text-xl text-gray-600">
            {t('home.pricing.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative ${
              plan.popular ? 'border-blue-600 shadow-lg scale-105' : 'border-gray-200 hover:border-blue-600'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {t('pricing.mostPopular')}
                  </span>
                </div>
              )}
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-4">
                  {plan.price === t('pricing.contactPricing') ? (
                    <span className="text-2xl font-bold text-blue-600">{plan.price}</span>
                  ) : (
                    <>
                      <span className="text-3xl font-bold text-blue-600">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </>
                  )}
                </div>
                <p className="text-gray-600 mb-6 text-sm h-12">{plan.description}</p>
                <ul className="space-y-3 mb-6 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={handleContactClick}
                  className={`w-full ${
                    plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900'
                  } text-white`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button onClick={() => handleLearnMoreClick('pricing')} variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
            {t('home.pricing.seeFullPricing')} <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </Section>

      {/* FAQ Snapshot */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('home.faq.title')}</span>
          </h2>
          <p className="text-xl text-gray-600">
            {t('home.faq.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqSnapshot.map((faq, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-blue-600">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button onClick={() => handleLearnMoreClick('pricing')} variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
            {t('home.faq.viewFullFaq')} <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </Section>

      {/* Final CTA Banner */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t('home.finalCta.title')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('home.finalCta.title2')}</span> {t('home.finalCta.title3')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('home.finalCta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleContactClick} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg">
              {t('home.finalCta.startTrial')}
            </Button>
            <Button size="lg" variant="outline" onClick={handleContactClick} className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg">
              {t('home.finalCta.bookDemo')}
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-6 mt-8 text-sm text-gray-600">
            <span className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>{t('home.finalCta.freeTrial')}</span>
            </span>
            <span className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>{t('home.finalCta.noCreditCard')}</span>
            </span>
            <span className="flex items-center space-x-2">
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
