
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
        t('features.nlp.detail1'),
        t('features.nlp.detail2'),
        t('features.nlp.detail3'),
        t('features.nlp.detail4')
      ]
    },
    {
      title: t('features.omnichannel.title'),
      description: t('features.omnichannel.description'),
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      details: [
        t('features.omnichannel.detail1'),
        t('features.omnichannel.detail2'),
        t('features.omnichannel.detail3'),
        t('features.omnichannel.detail4')
      ]
    },
    {
      title: t('features.analytics.title'),
      description: t('features.analytics.description'),
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      details: [
        t('features.analytics.detail1'),
        t('features.analytics.detail2'),
        t('features.analytics.detail3'),
        t('features.analytics.detail4')
      ]
    },
    {
      title: t('features.security.title'),
      description: t('features.security.description'),
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      details: [
        t('features.security.detail1'),
        t('features.security.detail2'),
        t('features.security.detail3'),
        t('features.security.detail4')
      ]
    },
    {
      title: t('features.deployment.title'),
      description: t('features.deployment.description'),
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      details: [
        t('features.deployment.detail1'),
        t('features.deployment.detail2'),
        t('features.deployment.detail3'),
        t('features.deployment.detail4')
      ]
    },
    {
      title: t('features.conversations.title'),
      description: t('features.conversations.description'),
      icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
      details: [
        t('features.conversations.detail1'),
        t('features.conversations.detail2'),
        t('features.conversations.detail3'),
        t('features.conversations.detail4')
      ]
    }
  ];

  const comparisonTable = [
    {
      feature: t('features.comparison.responseTime'),
      traditional: t('features.comparison.responseTime.traditional'),
      aiChatbot: t('features.comparison.responseTime.ai'),
      improvement: t('features.comparison.responseTime.improvement')
    },
    {
      feature: t('features.comparison.availability'),
      traditional: t('features.comparison.availability.traditional'),
      aiChatbot: t('features.comparison.availability.ai'),
      improvement: t('features.comparison.availability.improvement')
    },
    {
      feature: t('features.comparison.scalability'),
      traditional: t('features.comparison.scalability.traditional'),
      aiChatbot: t('features.comparison.scalability.ai'),
      improvement: t('features.comparison.scalability.improvement')
    },
    {
      feature: t('features.comparison.consistency'),
      traditional: t('features.comparison.consistency.traditional'),
      aiChatbot: t('features.comparison.consistency.ai'),
      improvement: t('features.comparison.consistency.improvement')
    },
    {
      feature: t('features.comparison.cost'),
      traditional: t('features.comparison.cost.traditional'),
      aiChatbot: t('features.comparison.cost.ai'),
      improvement: t('features.comparison.cost.improvement')
    },
    {
      feature: t('features.comparison.language'),
      traditional: t('features.comparison.language.traditional'),
      aiChatbot: t('features.comparison.language.ai'),
      improvement: t('features.comparison.language.improvement')
    }
  ];

  const advancedFeatures = [
    {
      category: t('features.advanced.ai.category'),
      features: [
        {
          name: t('features.advanced.ai.conversationFlow.name'),
          description: t('features.advanced.ai.conversationFlow.description')
        },
        {
          name: t('features.advanced.ai.intentTraining.name'),
          description: t('features.advanced.ai.intentTraining.description')
        },
        {
          name: t('features.advanced.ai.autoLearning.name'),
          description: t('features.advanced.ai.autoLearning.description')
        },
        {
          name: t('features.advanced.ai.fallback.name'),
          description: t('features.advanced.ai.fallback.description')
        }
      ]
    },
    {
      category: t('features.advanced.integration.category'),
      features: [
        {
          name: t('features.advanced.integration.crm.name'),
          description: t('features.advanced.integration.crm.description')
        },
        {
          name: t('features.advanced.integration.ecommerce.name'),
          description: t('features.advanced.integration.ecommerce.description')
        },
        {
          name: t('features.advanced.integration.api.name'),
          description: t('features.advanced.integration.api.description')
        },
        {
          name: t('features.advanced.integration.webhook.name'),
          description: t('features.advanced.integration.webhook.description')
        }
      ]
    },
    {
      category: t('features.advanced.analyticsReporting.category'),
      features: [
        {
          name: t('features.advanced.analyticsReporting.conversation.name'),
          description: t('features.advanced.analyticsReporting.conversation.description')
        },
        {
          name: t('features.advanced.analyticsReporting.performance.name'),
          description: t('features.advanced.analyticsReporting.performance.description')
        },
        {
          name: t('features.advanced.analyticsReporting.dashboard.name'),
          description: t('features.advanced.analyticsReporting.dashboard.description')
        },
        {
          name: t('features.advanced.analyticsReporting.abTesting.name'),
          description: t('features.advanced.analyticsReporting.abTesting.description')
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
                  <th className="text-left p-6 text-white font-semibold">{t('features.comparison.table.feature')}</th>
                  <th className="text-center p-6 text-white font-semibold">{t('features.comparison.table.traditional')}</th>
                  <th className="text-center p-6 text-white font-semibold">{t('features.comparison.table.aiChatbot')}</th>
                  <th className="text-center p-6 text-white font-semibold">{t('features.comparison.table.improvement')}</th>
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
            {t('features.demo.title')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('features.demo.titleHighlight')}</span>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('features.demo.interactiveDemo')}</h3>
                <p className="text-gray-600">{t('features.demo.clickToExperience')}</p>
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
