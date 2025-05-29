
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Zap, 
  BarChart3, 
  Globe, 
  Shield, 
  Smartphone,
  Bot,
  Brain,
  Clock,
  Users,
  Settings,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Section from "@/components/ui/section";
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const coreFeatures = [
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
      title: t('features.core.conversations.title'),
      description: t('features.core.conversations.desc'),
      features: [
        t('features.core.conversations.feature1'),
        t('features.core.conversations.feature2'),
        t('features.core.conversations.feature3'),
        t('features.core.conversations.feature4')
      ]
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: t('features.core.ai.title'),
      description: t('features.core.ai.desc'),
      features: [
        t('features.core.ai.feature1'),
        t('features.core.ai.feature2'),
        t('features.core.ai.feature3'),
        t('features.core.ai.feature4')
      ]
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: t('features.core.multichannel.title'),
      description: t('features.core.multichannel.desc'),
      features: [
        t('features.core.multichannel.feature1'),
        t('features.core.multichannel.feature2'),
        t('features.core.multichannel.feature3'),
        t('features.core.multichannel.feature4')
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: t('features.core.analytics.title'),
      description: t('features.core.analytics.desc'),
      features: [
        t('features.core.analytics.feature1'),
        t('features.core.analytics.feature2'),
        t('features.core.analytics.feature3'),
        t('features.core.analytics.feature4')
      ]
    }
  ];

  const advancedFeatures = [
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: t('features.advanced.automation.title'),
      description: t('features.advanced.automation.desc')
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: t('features.advanced.security.title'),
      description: t('features.advanced.security.desc')
    },
    {
      icon: <Settings className="w-6 h-6 text-blue-600" />,
      title: t('features.advanced.customization.title'),
      description: t('features.advanced.customization.desc')
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      title: t('features.advanced.scalability.title'),
      description: t('features.advanced.scalability.desc')
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: t('features.advanced.collaboration.title'),
      description: t('features.advanced.collaboration.desc')
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: t('features.advanced.support.title'),
      description: t('features.advanced.support.desc')
    }
  ];

  const integrations = [
    { name: "WhatsApp", icon: "💬" },
    { name: "Facebook Messenger", icon: "📘" },
    { name: "Zalo", icon: "💙" },
    { name: "Telegram", icon: "✈️" },
    { name: "Website Chat", icon: "🌐" },
    { name: "Mobile Apps", icon: "📱" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            {t('features.hero.title').split(' ')[0]} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('features.hero.title').split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {t('features.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/contact')} className="bg-blue-600 hover:bg-blue-700 text-white">
              {t('features.hero.getDemo')}
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/pricing')} className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              {t('features.hero.seePricing')}
            </Button>
          </div>
        </div>
      </Section>

      {/* Core Features */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t('features.core.title').split(' ')[0]} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('features.core.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-xl text-gray-600">
            {t('features.core.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {coreFeatures.map((feature, index) => (
            <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-gray-900">{feature.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Advanced Features */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t('features.advanced.title').split(' ')[0]} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('features.advanced.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-xl text-gray-600">
            {t('features.advanced.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advancedFeatures.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Integrations */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t('features.integrations.title').split(' ')[0]} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('features.integrations.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-xl text-gray-600">
            {t('features.integrations.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {integrations.map((integration, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-3">{integration.icon}</div>
                <h3 className="font-semibold text-sm">{integration.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t('features.cta.title').split(' ').slice(0, -1).join(' ')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('features.cta.title').split(' ').slice(-1)}</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('features.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/contact')} className="bg-blue-600 hover:bg-blue-700 text-white">
              {t('features.cta.getStarted')} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/case-studies')} className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              {t('features.cta.viewCases')}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Features;
