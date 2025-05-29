
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Star, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Section from "@/components/ui/section";

const Pricing = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const pricingPlans = [
    {
      nameKey: "pricing.plans.starter.name",
      price: "2.900.000đ",
      periodKey: "pricing.plans.starter.period",
      descriptionKey: "pricing.plans.starter.description",
      popular: false,
      featureKeys: [
        "pricing.features.conversations1000",
        "pricing.features.basicTemplates",
        "pricing.features.websiteIntegration",
        "pricing.features.emailSupport",
        "pricing.features.basicAnalytics",
        "pricing.features.workflows5",
        "pricing.features.standardResponse"
      ]
    },
    {
      nameKey: "pricing.plans.growth.name",
      price: "3.900.000đ",
      periodKey: "pricing.plans.growth.period",
      descriptionKey: "pricing.plans.growth.description",
      popular: true,
      featureKeys: [
        "pricing.features.conversations5000",
        "pricing.features.advancedTemplates",
        "pricing.features.multiChannel",
        "pricing.features.crmIntegration",
        "pricing.features.advancedAnalytics",
        "pricing.features.unlimitedWorkflows",
        "pricing.features.prioritySupport",
        "pricing.features.abTesting",
        "pricing.features.leadQualification"
      ]
    },
    {
      nameKey: "pricing.plans.business.name",
      price: "7.900.000đ",
      periodKey: "pricing.plans.business.period",
      descriptionKey: "pricing.plans.business.description",
      popular: false,
      featureKeys: [
        "pricing.features.conversations15000",
        "pricing.features.customDesign",
        "pricing.features.multiChannel",
        "pricing.features.crmIntegration",
        "pricing.features.advancedAnalytics",
        "pricing.features.unlimitedWorkflows",
        "pricing.features.prioritySupport",
        "pricing.features.abTesting",
        "pricing.features.leadQualification",
        "pricing.features.customBranding",
        "pricing.features.priorityResponse"
      ]
    },
    {
      nameKey: "pricing.plans.enterprise.name",
      priceKey: "pricing.plans.enterprise.price",
      period: "",
      descriptionKey: "pricing.plans.enterprise.description",
      popular: false,
      featureKeys: [
        "pricing.features.unlimitedConversations",
        "pricing.features.customAI",
        "pricing.features.dedicatedManager",
        "pricing.features.onPremise",
        "pricing.features.security",
        "pricing.features.customIntegrations",
        "pricing.features.phoneSupport",
        "pricing.features.slaGuarantees",
        "pricing.features.whiteLabel",
        "pricing.features.advancedReporting"
      ]
    }
  ];

  const comparisonFeatures = [
    {
      categoryKey: "pricing.comparison.categories.core",
      features: [
        { nameKey: "pricing.comparison.features.monthlySessions", starter: "1,000", growth: "5,000", business: "15,000", enterprise: "Unlimited" },
        { nameKey: "pricing.comparison.features.template", starter: "Basic", growth: "Advanced", business: "Custom", enterprise: "Fully Custom" },
        { nameKey: "pricing.comparison.features.responseTime", starter: "Standard", growth: "Priority", business: "Priority", enterprise: "Instant" },
        { nameKey: "pricing.comparison.features.analytics", starter: true, growth: true, business: true, enterprise: true },
        { nameKey: "pricing.comparison.features.websiteWidget", starter: true, growth: true, business: true, enterprise: true }
      ]
    },
    {
      categoryKey: "pricing.comparison.categories.channels",
      features: [
        { nameKey: "pricing.comparison.features.website", starter: true, growth: true, business: true, enterprise: true },
        { nameKey: "pricing.comparison.features.whatsapp", starter: false, growth: true, business: true, enterprise: true },
        { nameKey: "pricing.comparison.features.messenger", starter: false, growth: true, business: true, enterprise: true },
        { nameKey: "pricing.comparison.features.crm", starter: false, growth: true, business: true, enterprise: true },
        { nameKey: "pricing.comparison.features.api", starter: false, growth: false, business: false, enterprise: true }
      ]
    }
  ];

  const faqsKeys = [
    {
      questionKey: "pricing.faq.counting.question",
      answerKey: "pricing.faq.counting.answer"
    },
    {
      questionKey: "pricing.faq.upgrade.question",
      answerKey: "pricing.faq.upgrade.answer"
    },
    {
      questionKey: "pricing.faq.trial.question",
      answerKey: "pricing.faq.trial.answer"
    },
    {
      questionKey: "pricing.faq.exceed.question",
      answerKey: "pricing.faq.exceed.answer"
    }
  ];

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
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
              <span>{t('pricing.hero.features.trial')}</span>
            </span>
            <span className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>{t('pricing.hero.features.noSetup')}</span>
            </span>
            <span className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>{t('pricing.hero.features.cancel')}</span>
            </span>
          </div>
        </div>
      </Section>

      {/* Pricing Cards */}
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
                <CardTitle className="text-2xl font-bold mb-2">{t(plan.nameKey)}</CardTitle>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-blue-600">
                    {plan.priceKey ? t(plan.priceKey) : plan.price}
                  </span>
                  {plan.periodKey && <span className="text-gray-600 ml-1 text-sm">{t(plan.periodKey)}</span>}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{t(plan.descriptionKey)}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.featureKeys.map((featureKey, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{t(featureKey)}</span>
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
                  {plan.priceKey ? t('pricing.buttons.contact') : t('pricing.buttons.getStarted')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Feature Comparison Table */}
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
                  <th className="text-left p-6 text-white font-semibold">{t('pricing.comparison.table.features')}</th>
                  <th className="text-center p-6 text-white font-semibold">{t('pricing.comparison.table.starter')}</th>
                  <th className="text-center p-6 text-white font-semibold">{t('pricing.comparison.table.growth')}</th>
                  <th className="text-center p-6 text-white font-semibold">{t('pricing.comparison.table.business')}</th>
                  <th className="text-center p-6 text-white font-semibold">{t('pricing.comparison.table.enterprise')}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category, categoryIndex) => (
                  <>
                    <tr key={`category-${categoryIndex}`} className="bg-gray-100">
                      <td colSpan={5} className="p-4 font-bold text-blue-600 text-lg">
                        {t(category.categoryKey)}
                      </td>
                    </tr>
                    {category.features.map((feature, featureIndex) => (
                      <tr key={`${categoryIndex}-${featureIndex}`} className={featureIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="p-4 font-medium">{t(feature.nameKey)}</td>
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

      {/* FAQ Section */}
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
            {faqsKeys.map((faq, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-3 text-blue-600">{t(faq.questionKey)}</h3>
                      <p className="text-gray-600 leading-relaxed">{t(faq.answerKey)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t('pricing.cta.title')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('pricing.cta.titleHighlight')}</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('pricing.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleContactClick} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg">
              {t('pricing.cta.buttons.trial')}
            </Button>
            <Button size="lg" variant="outline" onClick={handleContactClick} className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg">
              {t('pricing.cta.buttons.contact')}
            </Button>
          </div>
          <div className="mt-6 text-sm text-gray-600">
            {t('pricing.cta.help')}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Pricing;
