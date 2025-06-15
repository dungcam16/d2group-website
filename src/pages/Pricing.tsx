import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ShieldCheck, Rocket, PiggyBank, Gem, Users, HelpCircle, CheckCircle } from 'lucide-react';
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollTriggered3D from "@/components/ScrollTriggered3D";

const Pricing = () => {
  const { t } = useLanguage();

  const pricingTiers = [
    {
      name: t('pricing.tiers.basic.name'),
      price: t('pricing.tiers.basic.price'),
      description: t('pricing.tiers.basic.description'),
      features: [
        t('pricing.tiers.basic.features.feature1'),
        t('pricing.tiers.basic.features.feature2'),
        t('pricing.tiers.basic.features.feature3'),
      ],
      icon: Rocket,
      mostPopular: false,
    },
    {
      name: t('pricing.tiers.standard.name'),
      price: t('pricing.tiers.standard.price'),
      description: t('pricing.tiers.standard.description'),
      features: [
        t('pricing.tiers.standard.features.feature1'),
        t('pricing.tiers.standard.features.feature2'),
        t('pricing.tiers.standard.features.feature3'),
        t('pricing.tiers.standard.features.feature4'),
      ],
      icon: PiggyBank,
      mostPopular: true,
    },
    {
      name: t('pricing.tiers.premium.name'),
      price: t('pricing.tiers.premium.price'),
      description: t('pricing.tiers.premium.description'),
      features: [
        t('pricing.tiers.premium.features.feature1'),
        t('pricing.tiers.premium.features.feature2'),
        t('pricing.tiers.premium.features.feature3'),
        t('pricing.tiers.premium.features.feature4'),
        t('pricing.tiers.premium.features.feature5'),
      ],
      icon: Gem,
      mostPopular: false,
    },
  ];

  return (
    <div className="pt-16">
      <section className="container mx-auto px-6 text-center py-16">
        <ScrollTriggered3D direction="up" delay={0.1}>
          <h1 className="text-5xl font-bold mb-6 text-gray-900">{t('pricing.title')}</h1>
        </ScrollTriggered3D>
        <p className="text-xl text-gray-600 mb-8">{t('pricing.subtitle')}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className={`shadow-md hover:shadow-lg transition-shadow duration-300 ${tier.mostPopular ? 'border-2 border-blue-500' : ''}`}>
              <CardHeader className="text-center">
                <tier.icon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                {tier.mostPopular && (
                  <div className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded mt-2 inline-block">
                    {t('pricing.mostPopular')}
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-gray-600">/{t('pricing.perMonth')}</span>
                </div>
                <p className="text-gray-600 text-center mb-6">{tier.description}</p>
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-800">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold">{t('pricing.getStarted')}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('pricing.faqTitle')}</h2>
          <p className="text-xl text-gray-600 mb-8">{t('pricing.faqSubtitle')}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{t('pricing.faq1.question')}</h3>
              <p className="text-gray-600">{t('pricing.faq1.answer')}</p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{t('pricing.faq2.question')}</h3>
              <p className="text-gray-600">{t('pricing.faq2.answer')}</p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{t('pricing.faq3.question')}</h3>
              <p className="text-gray-600">{t('pricing.faq3.answer')}</p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{t('pricing.faq4.question')}</h3>
              <p className="text-gray-600">{t('pricing.faq4.answer')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">{t('pricing.ctaTitle')}</h2>
          <p className="text-xl mb-8">{t('pricing.ctaSubtitle')}</p>
          <Button className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-12 py-4 text-lg">{t('pricing.ctaButton')}</Button>
        </div>
      </section>
    </div>
  );
};
export default Pricing;
