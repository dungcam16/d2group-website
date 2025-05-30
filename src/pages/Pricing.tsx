import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Star, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Section from "@/components/ui/section";

const Pricing = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const pricingPlans = [
    {
      name: t('pricing.starter'),
      price: language === 'vi' ? t('pricing.starter.price') : "$119",
      period: t('pricing.month'),
      description: t('pricing.starter.desc'),
      popular: false,
      features: [
        `1,000 ${t('feature.conversations')}`,
        t('feature.basicTemplates'),
        t('feature.websiteIntegration'),
        t('feature.emailSupport'),
        t('feature.basicAnalytics'),
        `5 ${t('feature.workflows')}`,
        t('feature.standardResponse')
      ]
    },
    {
      name: t('pricing.growth'),
      price: language === 'vi' ? t('pricing.growth.price') : "$199",
      period: t('pricing.month'),
      description: t('pricing.growth.desc'),
      popular: true,
      features: [
        `5,000 ${t('feature.conversations')}`,
        t('feature.advancedTemplates'),
        t('feature.multiChannel'),
        t('feature.crmIntegration'),
        t('feature.advancedAnalytics'),
        t('feature.unlimitedWorkflows'),
        t('feature.prioritySupport'),
        t('feature.abTesting'),
        t('feature.leadQualification')
      ]
    },
    {
      name: t('pricing.business'),
      price: language === 'vi' ? t('pricing.business.price') : "$299",
      period: t('pricing.month'),
      description: t('pricing.business.desc'),
      popular: false,
      features: [
        `15,000 ${t('feature.conversations')}`,
        t('feature.customDesign'),
        t('feature.multiChannel'),
        t('feature.crmIntegration'),
        t('feature.advancedAnalytics'),
        t('feature.unlimitedWorkflows'),
        t('feature.prioritySupport'),
        t('feature.abTesting'),
        t('feature.leadQualification'),
        t('feature.customBranding'),
        "Priority response"
      ]
    },
    {
      name: t('pricing.enterprise'),
      price: language === 'vi' ? t('pricing.enterprise.price') : "Contact",
      period: "",
      description: t('pricing.enterprise.desc'),
      popular: false,
      features: [
        `${t('feature.unlimited')} conversations`,
        t('feature.customAI'),
        t('feature.dedicatedManager'),
        t('feature.onPremise'),
        t('feature.security'),
        t('feature.customIntegrations'),
        t('feature.phoneSupport'),
        t('feature.slaGuarantees'),
        t('feature.whiteLabel'),
        t('feature.advancedReporting')
      ]
    }
  ];

  const comparisonFeatures = [
    {
      category: t('pricing.comparison.coreFeatures'),
      features: [
        { name: t('pricing.comparison.monthlyChatSessions'), starter: "1,000", growth: "5,000", business: "15,000", enterprise: t('pricing.comparison.unlimited') },
        { name: t('pricing.comparison.chatbotTemplate'), starter: t('pricing.comparison.basic'), growth: t('pricing.comparison.advanced'), business: t('pricing.comparison.custom'), enterprise: t('pricing.comparison.fullyCustom') },
        { name: t('pricing.comparison.responseTimeSLA'), starter: t('pricing.comparison.standard'), growth: t('pricing.comparison.priority'), business: t('pricing.comparison.priority'), enterprise: t('pricing.comparison.instant') },
        { name: t('pricing.comparison.analyticsDashboard'), starter: true, growth: true, business: true, enterprise: true },
        { name: t('pricing.comparison.websiteWidgetIntegration'), starter: true, growth: true, business: true, enterprise: true }
      ]
    },
    {
      category: t('pricing.comparison.channelsIntegrations'),
      features: [
        { name: t('pricing.comparison.websiteWidget'), starter: true, growth: true, business: true, enterprise: true },
        { name: t('pricing.comparison.whatsappBusiness'), starter: false, growth: true, business: true, enterprise: true },
        { name: t('pricing.comparison.facebookMessenger'), starter: false, growth: true, business: true, enterprise: true },
        { name: t('pricing.comparison.crmIntegration'), starter: false, growth: true, business: true, enterprise: true },
        { name: t('pricing.comparison.customApiAccess'), starter: false, growth: false, business: false, enterprise: true }
      ]
    }
  ];

  const faqs = [
    {
      question: t('pricing.faq.q1'),
      answer: t('pricing.faq.a1')
    },
    {
      question: t('pricing.faq.q2'),
      answer: t('pricing.faq.a2')
    },
    {
      question: t('pricing.faq.q3'),
      answer: t('pricing.faq.a3')
    },
    {
      question: t('pricing.faq.q4'),
      answer: t('pricing.faq.a4')
    }
  ];

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="pt-16">
      {/* Hero Section - NOW TRANSLATED */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            {t('pricing.hero.title')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('pricing.hero.titleHighlight')}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {t('pricing.hero.description')}
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
            <span className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>{t('pricing.hero.freeTrial')}</span>
            </span>
            <span className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>{t('pricing.hero.noSetupFees')}</span>
            </span>
            <span className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>{t('pricing.hero.cancelAnytime')}</span>
            </span>
          </div>
        </div>
      </Section>

      {/* Pricing Cards - ALREADY TRANSLATED */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-blue-600 shadow-lg scale-105' 
                  : 'border-gray-200 hover:border-blue-600'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>{t('pricing.mostPopular')}</span>
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-blue-600">{plan.price}</span>
                  <span className="text-gray-600 ml-1 text-sm">{plan.period}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={handleContactClick}
                  className={`w-full mt-6 ${
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
      </Section>

      {/* Feature Comparison Table - NOW TRANSLATED */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t('pricing.comparison.title')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('pricing.comparison.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600">
            {t('pricing.comparison.subtitle')}
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-indigo-600">
                <tr>
                  <th className="text-left p-6 text-white font-semibold">{t('pricing.comparison.features')}</th>
                  <th className="text-center p-6 text-white font-semibold">{t('pricing.starter')}</th>
                  <th className="text-center p-6 text-white font-semibold">{t('pricing.growth')}</th>
                  <th className="text-center p-6 text-white font-semibold">{t('pricing.business')}</th>
                  <th className="text-center p-6 text-white font-semibold">{t('pricing.enterprise')}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category, categoryIndex) => (
                  <>
                    <tr key={`category-${categoryIndex}`} className="bg-gray-100">
                      <td colSpan={5} className="p-4 font-bold text-blue-600 text-lg">
                        {category.category}
                      </td>
                    </tr>
                    {category.features.map((feature, featureIndex) => (
                      <tr key={`${categoryIndex}-${featureIndex}`} className={featureIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="p-4 font-medium">{feature.name}</td>
                        <td className="p-4 text-center">
                          {typeof feature.starter === 'boolean' ? (
                            feature.starter ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="font-semibold">{feature.starter}</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {typeof feature.growth === 'boolean' ? (
                            feature.growth ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="font-semibold">{feature.growth}</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {typeof feature.business === 'boolean' ? (
                            feature.business ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="font-semibold">{feature.business}</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {typeof feature.enterprise === 'boolean' ? (
                            feature.enterprise ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="font-semibold">{feature.enterprise}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* FAQ Section - NOW TRANSLATED */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t('pricing.faq.title')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('pricing.faq.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600">
            {t('pricing.faq.subtitle')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-3 text-blue-600">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section - NOW TRANSLATED */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t('pricing.cta.title')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('pricing.cta.titleHighlight')}</span>{t('pricing.cta.question')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('pricing.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleContactClick} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg">
              {t('pricing.cta.startFreeTrial')}
            </Button>
            <Button size="lg" variant="outline" onClick={handleContactClick} className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg">
              {t('pricing.cta.contactSales')}
            </Button>
          </div>
          <div className="mt-6 text-sm text-gray-600">
            {t('pricing.cta.questionsText')}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Pricing;
