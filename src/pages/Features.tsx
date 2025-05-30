import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Zap, 
  BarChart3, 
  Users, 
  Globe, 
  Shield, 
  TrendingUp, 
  ArrowRight,
  CheckCircle,
  Clock,
  Brain,
  Settings,
  Smartphone,
  Headphones,
  ShoppingCart,
  Calendar
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Section from "@/components/ui/section";
import ChatbotDemoCarousel from "@/components/ChatbotDemoCarousel";

const Features = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const features = [
    {
      title: t('features.smart.title'),
      description: t('features.smart.desc'),
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      benefits: [
        t('features.smart.benefit1'),
        t('features.smart.benefit2'),
        t('features.smart.benefit3'),
      ],
    },
    {
      title: t('features.instant.title'),
      description: t('features.instant.desc'),
      icon: <Clock className="w-8 h-8 text-yellow-600" />,
      benefits: [
        t('features.instant.benefit1'),
        t('features.instant.benefit2'),
        t('features.instant.benefit3'),
      ],
    },
    {
      title: t('features.customizable.title'),
      description: t('features.customizable.desc'),
      icon: <Settings className="w-8 h-8 text-green-600" />,
      benefits: [
        t('features.customizable.benefit1'),
        t('features.customizable.benefit2'),
        t('features.customizable.benefit3'),
      ],
    },
    {
      title: t('features.multichannel.title'),
      description: t('features.multichannel.desc'),
      icon: <Smartphone className="w-8 h-8 text-purple-600" />,
      benefits: [
        t('features.multichannel.benefit1'),
        t('features.multichannel.benefit2'),
        t('features.multichannel.benefit3'),
      ],
    },
  ];

  const benefits = [
    {
      title: t('features.benefits.increaseSales.title'),
      description: t('features.benefits.increaseSales.desc'),
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
    },
    {
      title: t('features.benefits.improveEfficiency.title'),
      description: t('features.benefits.improveEfficiency.desc'),
      icon: <Zap className="w-6 h-6 text-yellow-600" />,
    },
    {
      title: t('features.benefits.reduceCosts.title'),
      description: t('features.benefits.reduceCosts.desc'),
      icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
    },
    {
      title: t('features.benefits.enhanceCustomer.title'),
      description: t('features.benefits.enhanceCustomer.desc'),
      icon: <Users className="w-6 h-6 text-purple-600" />,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6 px-4 py-2 bg-blue-100 text-blue-700 border-blue-200">
            ✨ Advanced AI Technology
          </Badge>
          
          <h1 className="text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Powerful AI Chatbot <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Features & Capabilities
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover how our advanced AI chatbot transforms customer interactions with intelligent responses, seamless integrations, and powerful automation features.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg"
            >
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => navigate('/pricing')}
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </Section>

      {/* See It in Action - Carousel */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            See It in <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our AI chatbot capabilities with interactive demos showcasing real-world scenarios
          </p>
        </div>

        <ChatbotDemoCarousel />
      </Section>

      {/* Core Features */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t('features.core.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.core.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader>
                {feature.icon}
                <CardTitle className="text-lg mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{feature.description}</p>
                <ul className="mt-4 text-left">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center space-x-2 text-gray-600 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t('features.benefits.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.benefits.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Technical Specifications */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t('features.specs.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.specs.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('features.specs.languageSupport')}</h3>
              <p className="text-gray-600">{t('features.specs.languageSupportDesc')}</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('features.specs.integration')}</h3>
              <p className="text-gray-600">{t('features.specs.integrationDesc')}</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('features.specs.security')}</h3>
              <p className="text-gray-600">{t('features.specs.securityDesc')}</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Integration Partners */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t('features.partners.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.partners.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center justify-center p-4 border rounded-md shadow-sm">
              <Globe className="w-8 h-8 text-gray-500" />
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-gray-900">
            {t('features.finalCta.title')} <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {t('features.finalCta.title2')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {t('features.finalCta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              onClick={() => navigate('/contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg"
            >
              {t('features.finalCta.startTrial')} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => navigate('/contact')}
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg"
            >
              {t('features.finalCta.bookDemo')}
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-gray-600">
            <span className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>{t('features.finalCta.easySetup')}</span>
            </span>
            <span className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>{t('features.finalCta.noCreditCard')}</span>
            </span>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Features;
