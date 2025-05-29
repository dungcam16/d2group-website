
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, X, MessageSquare, Brain, BarChart3, Shield, Zap, Globe, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Section from "@/components/ui/section";

const Features = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const coreFeatures = [
    {
      titleKey: "features.nlp.title",
      descriptionKey: "features.nlp.description",
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      detailsKeys: [
        "features.nlp.detail1",
        "features.nlp.detail2",
        "features.nlp.detail3",
        "features.nlp.detail4"
      ]
    },
    {
      titleKey: "features.omnichannel.title",
      descriptionKey: "features.omnichannel.description",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      detailsKeys: [
        "features.omnichannel.detail1",
        "features.omnichannel.detail2",
        "features.omnichannel.detail3",
        "features.omnichannel.detail4"
      ]
    },
    {
      titleKey: "features.analytics.title",
      descriptionKey: "features.analytics.description",
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      detailsKeys: [
        "features.analytics.detail1",
        "features.analytics.detail2",
        "features.analytics.detail3",
        "features.analytics.detail4"
      ]
    },
    {
      titleKey: "features.security.title",
      descriptionKey: "features.security.description",
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      detailsKeys: [
        "features.security.detail1",
        "features.security.detail2",
        "features.security.detail3",
        "features.security.detail4"
      ]
    },
    {
      titleKey: "features.deployment.title",
      descriptionKey: "features.deployment.description",
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      detailsKeys: [
        "features.deployment.detail1",
        "features.deployment.detail2",
        "features.deployment.detail3",
        "features.deployment.detail4"
      ]
    },
    {
      titleKey: "features.conversations.title",
      descriptionKey: "features.conversations.description",
      icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
      detailsKeys: [
        "features.conversations.detail1",
        "features.conversations.detail2",
        "features.conversations.detail3",
        "features.conversations.detail4"
      ]
    }
  ];

  const comparisonTable = [
    {
      featureKey: "features.comparison.responseTime",
      traditionalKey: "features.comparison.responseTime.traditional",
      aiChatbotKey: "features.comparison.responseTime.ai",
      improvementKey: "features.comparison.responseTime.improvement"
    },
    {
      featureKey: "features.comparison.availability",
      traditionalKey: "features.comparison.availability.traditional",
      aiChatbotKey: "features.comparison.availability.ai",
      improvementKey: "features.comparison.availability.improvement"
    },
    {
      featureKey: "features.comparison.scalability",
      traditionalKey: "features.comparison.scalability.traditional",
      aiChatbotKey: "features.comparison.scalability.ai",
      improvementKey: "features.comparison.scalability.improvement"
    },
    {
      featureKey: "features.comparison.consistency",
      traditionalKey: "features.comparison.consistency.traditional",
      aiChatbotKey: "features.comparison.consistency.ai",
      improvementKey: "features.comparison.consistency.improvement"
    },
    {
      featureKey: "features.comparison.cost",
      traditionalKey: "features.comparison.cost.traditional",
      aiChatbotKey: "features.comparison.cost.ai",
      improvementKey: "features.comparison.cost.improvement"
    },
    {
      featureKey: "features.comparison.language",
      traditionalKey: "features.comparison.language.traditional",
      aiChatbotKey: "features.comparison.language.ai",
      improvementKey: "features.comparison.language.improvement"
    }
  ];

  const advancedFeatures = [
    {
      categoryKey: "features.advanced.ai.category",
      features: [
        {
          nameKey: "features.advanced.ai.flowBuilder.name",
          descriptionKey: "features.advanced.ai.flowBuilder.description"
        },
        {
          nameKey: "features.advanced.ai.intentTraining.name",
          descriptionKey: "features.advanced.ai.intentTraining.description"
        },
        {
          nameKey: "features.advanced.ai.autoLearning.name",
          descriptionKey: "features.advanced.ai.autoLearning.description"
        },
        {
          nameKey: "features.advanced.ai.fallback.name",
          descriptionKey: "features.advanced.ai.fallback.description"
        }
      ]
    },
    {
      categoryKey: "features.advanced.integration.category",
      features: [
        {
          nameKey: "features.advanced.integration.crm.name",
          descriptionKey: "features.advanced.integration.crm.description"
        },
        {
          nameKey: "features.advanced.integration.ecommerce.name",
          descriptionKey: "features.advanced.integration.ecommerce.description"
        },
        {
          nameKey: "features.advanced.integration.api.name",
          descriptionKey: "features.advanced.integration.api.description"
        },
        {
          nameKey: "features.advanced.integration.webhook.name",
          descriptionKey: "features.advanced.integration.webhook.description"
        }
      ]
    },
    {
      categoryKey: "features.advanced.reporting.category",
      features: [
        {
          nameKey: "features.advanced.reporting.conversation.name",
          descriptionKey: "features.advanced.reporting.conversation.description"
        },
        {
          nameKey: "features.advanced.reporting.performance.name",
          descriptionKey: "features.advanced.reporting.performance.description"
        },
        {
          nameKey: "features.advanced.reporting.dashboard.name",
          descriptionKey: "features.advanced.reporting.dashboard.description"
        },
        {
          nameKey: "features.advanced.reporting.abtest.name",
          descriptionKey: "features.advanced.reporting.abtest.description"
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
            {t('features.hero.title1')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('features.hero.title2')}</span> {t('features.hero.title3')}
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {t('features.hero.subtitle')}
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
            {t('features.core.title1')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('features.core.title2')}</span>
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
                <p className="text-gray-600 mb-6 leading-relaxed">{t(feature.descriptionKey)}</p>
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
            {t('features.comparison.title1')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('features.comparison.title2')}</span>
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
                  <th className="text-left p-6 text-white font-semibold">{t('features.comparison.table.feature')}</th>
                  <th className="text-center p-6 text-white font-semibold">{t('features.comparison.table.traditional')}</th>
                  <th className="text-center p-6 text-white font-semibold">{t('features.comparison.table.ai')}</th>
                  <th className="text-center p-6 text-white font-semibold">{t('features.comparison.table.improvement')}</th>
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
            {t('features.advanced.title1')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('features.advanced.title2')}</span>
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
                        <p className="text-gray-600 text-sm leading-relaxed">{t(feature.descriptionKey)}</p>
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
            {t('features.demo.title1')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('features.demo.title2')}</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('features.demo.subtitle')}
          </p>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('features.demo.interactive.title')}</h3>
                <p className="text-gray-600">{t('features.demo.interactive.subtitle')}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>{t('features.demo.feature1')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>{t('features.demo.feature2')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>{t('features.demo.feature3')}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleContactClick} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg">
              {t('features.demo.cta1')}
            </Button>
            <Button size="lg" variant="outline" onClick={handleCaseStudiesClick} className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg">
              {t('features.demo.cta2')} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Features;
