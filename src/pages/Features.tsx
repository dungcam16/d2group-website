
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, X, MessageSquare, Brain, BarChart3, Shield, Zap, Globe, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Section from "@/components/ui/section";
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const coreFeatures = [
    {
      title: t('features.nlp.title'),
      description: t('features.nlp.description'),
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      details: [
        t('features.nlp.details.accuracy'),
        t('features.nlp.details.contextual'),
        t('features.nlp.details.sentiment'),
        t('features.nlp.details.intent')
      ]
    },
    {
      title: t('features.omnichannel.title'),
      description: t('features.omnichannel.description'),
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      details: [
        t('features.omnichannel.details.website'),
        t('features.omnichannel.details.whatsapp'),
        t('features.omnichannel.details.facebook'),
        t('features.omnichannel.details.sms')
      ]
    },
    {
      title: t('features.analytics.title'),
      description: t('features.analytics.description'),
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      details: [
        t('features.analytics.details.monitoring'),
        t('features.analytics.details.metrics'),
        t('features.analytics.details.satisfaction'),
        t('features.analytics.details.roi')
      ]
    },
    {
      title: t('features.security.title'),
      description: t('features.security.description'),
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      details: [
        t('features.security.details.encryption'),
        t('features.security.details.soc2'),
        t('features.security.details.gdpr'),
        t('features.security.details.sso')
      ]
    },
    {
      title: t('features.deployment.title'),
      description: t('features.deployment.description'),
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      details: [
        t('features.deployment.details.setup'),
        t('features.deployment.details.templates'),
        t('features.deployment.details.builder'),
        t('features.deployment.details.integrations')
      ]
    },
    {
      title: t('features.conversations.title'),
      description: t('features.conversations.description'),
      icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
      details: [
        t('features.conversations.details.personalization'),
        t('features.conversations.details.qualification'),
        t('features.conversations.details.booking'),
        t('features.conversations.details.recommendations')
      ]
    }
  ];

  const comparisonTable = [
    {
      feature: t('features.comparison.responseTime'),
      traditional: t('features.comparison.hoursTodays'),
      aiChatbot: t('features.comparison.underTwoSec'),
      improvement: t('features.comparison.ninetyNineFaster')
    },
    {
      feature: t('features.comparison.availability'),
      traditional: t('features.comparison.businessHours'),
      aiChatbot: t('features.comparison.twentyFourSeven'),
      improvement: t('features.comparison.alwaysOn')
    },
    {
      feature: t('features.comparison.scalability'),
      traditional: t('features.comparison.limitedByStaff'),
      aiChatbot: t('features.comparison.unlimitedConversations'),
      improvement: t('features.comparison.infiniteScale')
    },
    {
      feature: t('features.comparison.consistency'),
      traditional: t('features.comparison.variesByAgent'),
      aiChatbot: t('features.comparison.alwaysConsistent'),
      improvement: t('features.comparison.hundredReliable')
    },
    {
      feature: t('features.comparison.costPerInteraction'),
      traditional: "$5-15",
      aiChatbot: "$0.10-0.50",
      improvement: t('features.comparison.costReduction')
    },
    {
      feature: t('features.comparison.languageSupport'),
      traditional: t('features.comparison.oneToTwoLang'),
      aiChatbot: t('features.comparison.fiftyPlusLang'),
      improvement: t('features.comparison.globalReach')
    }
  ];

  const advancedFeatures = [
    {
      category: t('features.advanced.aiMl'),
      features: [
        {
          name: t('features.advanced.flowBuilder'),
          description: t('features.advanced.flowBuilderDesc')
        },
        {
          name: t('features.advanced.intentTraining'),
          description: t('features.advanced.intentTrainingDesc')
        },
        {
          name: t('features.advanced.autoLearning'),
          description: t('features.advanced.autoLearningDesc')
        },
        {
          name: t('features.advanced.fallbackHandling'),
          description: t('features.advanced.fallbackHandlingDesc')
        }
      ]
    },
    {
      category: t('features.advanced.integrationApis'),
      features: [
        {
          name: t('features.advanced.crmIntegration'),
          description: t('features.advanced.crmIntegrationDesc')
        },
        {
          name: t('features.advanced.ecommerce'),
          description: t('features.advanced.ecommerceDesc')
        },
        {
          name: t('features.advanced.customApis'),
          description: t('features.advanced.customApisDesc')
        },
        {
          name: t('features.advanced.webhooks'),
          description: t('features.advanced.webhooksDesc')
        }
      ]
    },
    {
      category: t('features.advanced.analyticsReporting'),
      features: [
        {
          name: t('features.advanced.conversationAnalytics'),
          description: t('features.advanced.conversationAnalyticsDesc')
        },
        {
          name: t('features.advanced.performanceMetrics'),
          description: t('features.advanced.performanceMetricsDesc')
        },
        {
          name: t('features.advanced.customDashboards'),
          description: t('features.advanced.customDashboardsDesc')
        },
        {
          name: t('features.advanced.abTesting'),
          description: t('features.advanced.abTestingDesc')
        }
      ]
    }
  ];

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleCaseStudiesClick = () => {
    navigate('/case-studies');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            {t('features.hero.title')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('features.hero.subtitle')}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {t('features.hero.description')}
          </p>
          <Button size="lg" onClick={handleContactClick} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg">
            {t('features.hero.cta')}
          </Button>
        </div>
      </Section>

      {/* Core Features */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t('features.core.title')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('features.core.subtitle')}</span>
          </h2>
          <p className="text-xl text-gray-600">
            {t('features.core.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreFeatures.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
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
      </Section>

      {/* Comparison with Traditional Live Chat */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t('features.vsTraditional.title')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('features.vsTraditional.subtitle')}</span>
          </h2>
          <p className="text-xl text-gray-600">
            {t('features.vsTraditional.description')}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-indigo-600">
                <tr>
                  <th className="text-left p-6 text-white font-semibold">{t('features.comparison.feature')}</th>
                  <th className="text-center p-6 text-white font-semibold">{t('features.comparison.traditionalLiveChat')}</th>
                  <th className="text-center p-6 text-white font-semibold">{t('features.comparison.aiChatbot')}</th>
                  <th className="text-center p-6 text-white font-semibold">{t('features.comparison.improvement')}</th>
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
      </Section>

      {/* Advanced Features with Accordion */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t('features.advancedCapabilities.title')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('features.advancedCapabilities.subtitle')}</span>
          </h2>
          <p className="text-xl text-gray-600">
            {t('features.advancedCapabilities.description')}
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
                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* Interactive Demo Preview */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t('features.demo.title')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('features.demo.subtitle')}</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('features.demo.description')}
          </p>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('features.demo.interactiveDemo')}</h3>
                <p className="text-gray-600">{t('features.demo.clickToExperience')}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>{t('features.demo.realTime')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>{t('features.demo.multiLanguage')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>{t('features.demo.analyticsDashboard')}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleContactClick} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg">
              {t('features.demo.bookDemo')}
            </Button>
            <Button size="lg" variant="outline" onClick={handleCaseStudiesClick} className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg">
              {t('features.demo.viewCaseStudies')} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Features;
