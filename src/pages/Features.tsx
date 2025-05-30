import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, X, MessageSquare, Brain, BarChart3, Shield, Zap, Globe, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Section from "@/components/ui/section";
import { useLanguage } from "@/contexts/LanguageContext";
import ChatbotDemoCarousel from "@/components/ChatbotDemoCarousel";

const Features = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const coreFeatures = [
    {
      titleKey: "features.core.nlp.title",
      descKey: "features.core.nlp.desc",
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      detailsKeys: [
        "features.core.nlp.detail1",
        "features.core.nlp.detail2",
        "features.core.nlp.detail3",
        "features.core.nlp.detail4"
      ]
    },
    {
      titleKey: "features.core.multiChannel.title",
      descKey: "features.core.multiChannel.desc",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      detailsKeys: [
        "features.core.multiChannel.detail1",
        "features.core.multiChannel.detail2",
        "features.core.multiChannel.detail3",
        "features.core.multiChannel.detail4"
      ]
    },
    {
      titleKey: "features.core.realTime.title",
      descKey: "features.core.realTime.desc",
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      detailsKeys: [
        "features.core.realTime.detail1",
        "features.core.realTime.detail2",
        "features.core.realTime.detail3",
        "features.core.realTime.detail4"
      ]
    },
    {
      titleKey: "features.core.security.title",
      descKey: "features.core.security.desc",
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      detailsKeys: [
        "features.core.security.detail1",
        "features.core.security.detail2",
        "features.core.security.detail3",
        "features.core.security.detail4"
      ]
    },
    {
      titleKey: "features.core.deployment.title",
      descKey: "features.core.deployment.desc",
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      detailsKeys: [
        "features.core.deployment.detail1",
        "features.core.deployment.detail2",
        "features.core.deployment.detail3",
        "features.core.deployment.detail4"
      ]
    },
    {
      titleKey: "features.core.conversations.title",
      descKey: "features.core.conversations.desc",
      icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
      detailsKeys: [
        "features.core.conversations.detail1",
        "features.core.conversations.detail2",
        "features.core.conversations.detail3",
        "features.core.conversations.detail4"
      ]
    }
  ];

  const comparisonTable = [
    {
      featureKey: "features.comparison.responseTime",
      traditionalKey: "features.comparison.traditional.responseTime",
      aiChatbotKey: "features.comparison.ai.responseTime",
      improvementKey: "features.comparison.improvement.responseTime"
    },
    {
      featureKey: "features.comparison.availability",
      traditionalKey: "features.comparison.traditional.availability",
      aiChatbotKey: "features.comparison.ai.availability",
      improvementKey: "features.comparison.improvement.availability"
    },
    {
      featureKey: "features.comparison.scalability",
      traditionalKey: "features.comparison.traditional.scalability",
      aiChatbotKey: "features.comparison.ai.scalability",
      improvementKey: "features.comparison.improvement.scalability"
    },
    {
      featureKey: "features.comparison.consistency",
      traditionalKey: "features.comparison.traditional.consistency",
      aiChatbotKey: "features.comparison.ai.consistency",
      improvementKey: "features.comparison.improvement.consistency"
    },
    {
      featureKey: "features.comparison.costPerInteraction",
      traditionalKey: "features.comparison.traditional.costPerInteraction",
      aiChatbotKey: "features.comparison.ai.costPerInteraction",
      improvementKey: "features.comparison.improvement.costPerInteraction"
    },
    {
      featureKey: "features.comparison.languageSupport",
      traditionalKey: "features.comparison.traditional.languageSupport",
      aiChatbotKey: "features.comparison.ai.languageSupport",
      improvementKey: "features.comparison.improvement.languageSupport"
    }
  ];

  const advancedFeatures = [
    {
      categoryKey: "features.advanced.ai.category",
      features: [
        {
          nameKey: "features.advanced.ai.conversationFlow.name",
          descKey: "features.advanced.ai.conversationFlow.desc"
        },
        {
          nameKey: "features.advanced.ai.intentTraining.name",
          descKey: "features.advanced.ai.intentTraining.desc"
        },
        {
          nameKey: "features.advanced.ai.autoLearning.name",
          descKey: "features.advanced.ai.autoLearning.desc"
        },
        {
          nameKey: "features.advanced.ai.fallbackHandling.name",
          descKey: "features.advanced.ai.fallbackHandling.desc"
        }
      ]
    },
    {
      categoryKey: "features.advanced.integration.category",
      features: [
        {
          nameKey: "features.advanced.integration.crm.name",
          descKey: "features.advanced.integration.crm.desc"
        },
        {
          nameKey: "features.advanced.integration.ecommerce.name",
          descKey: "features.advanced.integration.ecommerce.desc"
        },
        {
          nameKey: "features.advanced.integration.customApi.name",
          descKey: "features.advanced.integration.customApi.desc"
        },
        {
          nameKey: "features.advanced.integration.webhook.name",
          descKey: "features.advanced.integration.webhook.desc"
        }
      ]
    },
    {
      categoryKey: "features.advanced.analytics.category",
      features: [
        {
          nameKey: "features.advanced.analytics.conversation.name",
          descKey: "features.advanced.analytics.conversation.desc"
        },
        {
          nameKey: "features.advanced.analytics.performance.name",
          descKey: "features.advanced.analytics.performance.desc"
        },
        {
          nameKey: "features.advanced.analytics.dashboard.name",
          descKey: "features.advanced.analytics.dashboard.desc"
        },
        {
          nameKey: "features.advanced.analytics.abTesting.name",
          descKey: "features.advanced.analytics.abTesting.desc"
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
            {t('features.hero.title')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('features.hero.titleHighlight')}</span> {t('features.hero.titleEnd')}
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
            {t('features.core.title')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('features.core.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600">
            {t('features.core.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreFeatures.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{t(feature.titleKey)}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{t(feature.descKey)}</p>
                <ul className="space-y-2">
                  {feature.detailsKeys.map((detailKey, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-3">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{t(detailKey)}</span>
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
            {t('features.comparison.title')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('features.comparison.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600">
            {t('features.comparison.subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-indigo-600">
                <tr>
                  <th className="text-left p-6 text-white font-semibold">{t('features.comparison.tableHeader.feature')}</th>
                  <th className="text-center p-6 text-white font-semibold">{t('features.comparison.tableHeader.traditional')}</th>
                  <th className="text-center p-6 text-white font-semibold">{t('features.comparison.tableHeader.aiChatbot')}</th>
                  <th className="text-center p-6 text-white font-semibold">{t('features.comparison.tableHeader.improvement')}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-6 font-medium text-gray-900">{t(row.featureKey)}</td>
                    <td className="p-6 text-center">
                      <span className="inline-flex items-center space-x-2">
                        <X className="w-4 h-4 text-red-500" />
                        <span className="text-gray-600">{t(row.traditionalKey)}</span>
                      </span>
                    </td>
                    <td className="p-6 text-center">
                      <span className="inline-flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-gray-900 font-semibold">{t(row.aiChatbotKey)}</span>
                      </span>
                    </td>
                    <td className="p-6 text-center">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {t(row.improvementKey)}
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
            {t('features.advanced.title')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('features.advanced.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600">
            {t('features.advanced.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {advancedFeatures.map((category, categoryIndex) => (
              <AccordionItem key={categoryIndex} value={`item-${categoryIndex}`} className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="text-xl font-semibold text-gray-900">{t(category.categoryKey)}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <h4 className="font-semibold text-blue-600 mb-2">{t(feature.nameKey)}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{t(feature.descKey)}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* See It in Action Section with Carousel */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Xem <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Thực Tế</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Trải nghiệm tính năng chatbot AI qua bản demo tương tác
          </p>
        </div>
        
        <ChatbotDemoCarousel />
        
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleContactClick} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg">
              Đặt Demo Cá Nhân
            </Button>
            <Button size="lg" variant="outline" onClick={handleCaseStudiesClick} className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg">
              Xem Nghiên Cứu <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Features;
