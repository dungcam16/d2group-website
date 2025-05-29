
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Users, DollarSign, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Section from "@/components/ui/section";

const CaseStudies = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const caseStudies = [
    {
      id: 1,
      titleKey: "caseStudies.case1.title",
      companyKey: "caseStudies.case1.company",
      industryKey: "caseStudies.case1.industry",
      challengeKey: "caseStudies.case1.challenge",
      solutionKey: "caseStudies.case1.solution",
      results: [
        { metricKey: "caseStudies.case1.result1.metric", improvementKey: "caseStudies.case1.result1.improvement", icon: <TrendingUp className="w-4 h-4" /> },
        { metricKey: "caseStudies.case1.result2.metric", improvementKey: "caseStudies.case1.result2.improvement", icon: <DollarSign className="w-4 h-4" /> },
        { metricKey: "caseStudies.case1.result3.metric", improvementKey: "caseStudies.case1.result3.improvement", icon: <Clock className="w-4 h-4" /> },
        { metricKey: "caseStudies.case1.result4.metric", improvementKey: "caseStudies.case1.result4.improvement", icon: <Users className="w-4 h-4" /> }
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      testimonialKey: "caseStudies.case1.testimonial",
      authorKey: "caseStudies.case1.author"
    },
    {
      id: 2,
      titleKey: "caseStudies.case2.title",
      companyKey: "caseStudies.case2.company",
      industryKey: "caseStudies.case2.industry",
      challengeKey: "caseStudies.case2.challenge",
      solutionKey: "caseStudies.case2.solution",
      results: [
        { metricKey: "caseStudies.case2.result1.metric", improvementKey: "caseStudies.case2.result1.improvement", icon: <Clock className="w-4 h-4" /> },
        { metricKey: "caseStudies.case2.result2.metric", improvementKey: "caseStudies.case2.result2.improvement", icon: <TrendingUp className="w-4 h-4" /> },
        { metricKey: "caseStudies.case2.result3.metric", improvementKey: "caseStudies.case2.result3.improvement", icon: <Users className="w-4 h-4" /> },
        { metricKey: "caseStudies.case2.result4.metric", improvementKey: "caseStudies.case2.result4.improvement", icon: <Users className="w-4 h-4" /> }
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      testimonialKey: "caseStudies.case2.testimonial",
      authorKey: "caseStudies.case2.author"
    },
    {
      id: 3,
      titleKey: "caseStudies.case3.title",
      companyKey: "caseStudies.case3.company",
      industryKey: "caseStudies.case3.industry",
      challengeKey: "caseStudies.case3.challenge",
      solutionKey: "caseStudies.case3.solution",
      results: [
        { metricKey: "caseStudies.case3.result1.metric", improvementKey: "caseStudies.case3.result1.improvement", icon: <TrendingUp className="w-4 h-4" /> },
        { metricKey: "caseStudies.case3.result2.metric", improvementKey: "caseStudies.case3.result2.improvement", icon: <Clock className="w-4 h-4" /> },
        { metricKey: "caseStudies.case3.result3.metric", improvementKey: "caseStudies.case3.result3.improvement", icon: <DollarSign className="w-4 h-4" /> },
        { metricKey: "caseStudies.case3.result4.metric", improvementKey: "caseStudies.case3.result4.improvement", icon: <Users className="w-4 h-4" /> }
      ],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      testimonialKey: "caseStudies.case3.testimonial",
      authorKey: "caseStudies.case3.author"
    },
    {
      id: 4,
      titleKey: "caseStudies.case4.title",
      companyKey: "caseStudies.case4.company",
      industryKey: "caseStudies.case4.industry",
      challengeKey: "caseStudies.case4.challenge",
      solutionKey: "caseStudies.case4.solution",
      results: [
        { metricKey: "caseStudies.case4.result1.metric", improvementKey: "caseStudies.case4.result1.improvement", icon: <Users className="w-4 h-4" /> },
        { metricKey: "caseStudies.case4.result2.metric", improvementKey: "caseStudies.case4.result2.improvement", icon: <TrendingUp className="w-4 h-4" /> },
        { metricKey: "caseStudies.case4.result3.metric", improvementKey: "caseStudies.case4.result3.improvement", icon: <Clock className="w-4 h-4" /> },
        { metricKey: "caseStudies.case4.result4.metric", improvementKey: "caseStudies.case4.result4.improvement", icon: <Users className="w-4 h-4" /> }
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      testimonialKey: "caseStudies.case4.testimonial",
      authorKey: "caseStudies.case4.author"
    },
    {
      id: 5,
      titleKey: "caseStudies.case5.title",
      companyKey: "caseStudies.case5.company",
      industryKey: "caseStudies.case5.industry",
      challengeKey: "caseStudies.case5.challenge",
      solutionKey: "caseStudies.case5.solution",
      results: [
        { metricKey: "caseStudies.case5.result1.metric", improvementKey: "caseStudies.case5.result1.improvement", icon: <TrendingUp className="w-4 h-4" /> },
        { metricKey: "caseStudies.case5.result2.metric", improvementKey: "caseStudies.case5.result2.improvement", icon: <Users className="w-4 h-4" /> },
        { metricKey: "caseStudies.case5.result3.metric", improvementKey: "caseStudies.case5.result3.improvement", icon: <Clock className="w-4 h-4" /> },
        { metricKey: "caseStudies.case5.result4.metric", improvementKey: "caseStudies.case5.result4.improvement", icon: <DollarSign className="w-4 h-4" /> }
      ],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
      testimonialKey: "caseStudies.case5.testimonial",
      authorKey: "caseStudies.case5.author"
    },
    {
      id: 6,
      titleKey: "caseStudies.case6.title",
      companyKey: "caseStudies.case6.company",
      industryKey: "caseStudies.case6.industry",
      challengeKey: "caseStudies.case6.challenge",
      solutionKey: "caseStudies.case6.solution",
      results: [
        { metricKey: "caseStudies.case6.result1.metric", improvementKey: "caseStudies.case6.result1.improvement", icon: <TrendingUp className="w-4 h-4" /> },
        { metricKey: "caseStudies.case6.result2.metric", improvementKey: "caseStudies.case6.result2.improvement", icon: <Users className="w-4 h-4" /> },
        { metricKey: "caseStudies.case6.result3.metric", improvementKey: "caseStudies.case6.result3.improvement", icon: <DollarSign className="w-4 h-4" /> },
        { metricKey: "caseStudies.case6.result4.metric", improvementKey: "caseStudies.case6.result4.improvement", icon: <Users className="w-4 h-4" /> }
      ],
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      testimonialKey: "caseStudies.case6.testimonial",
      authorKey: "caseStudies.case6.author"
    }
  ];

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handlePricingClick = () => {
    navigate('/pricing');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            {t('caseStudies.hero.title1')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('caseStudies.hero.title2')}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {t('caseStudies.hero.subtitle')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{t('caseStudies.stats.deployments.number')}</div>
              <div className="text-gray-600">{t('caseStudies.stats.deployments.label')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{t('caseStudies.stats.conversion.number')}</div>
              <div className="text-gray-600">{t('caseStudies.stats.conversion.label')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{t('caseStudies.stats.cost.number')}</div>
              <div className="text-gray-600">{t('caseStudies.stats.cost.label')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{t('caseStudies.stats.support.number')}</div>
              <div className="text-gray-600">{t('caseStudies.stats.support.label')}</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Case Studies Grid */}
      <Section background="white">
        <div className="space-y-20">
          {caseStudies.map((study, index) => (
            <div key={study.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="space-y-2">
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                    {t(study.industryKey)}
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {t(study.titleKey)}
                  </h2>
                  <p className="text-lg text-gray-600">{t(study.companyKey)}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-red-600">{t('caseStudies.labels.challenge')}:</h3>
                    <p className="text-gray-600 leading-relaxed">{t(study.challengeKey)}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-blue-600">{t('caseStudies.labels.solution')}:</h3>
                    <p className="text-gray-600 leading-relaxed">{t(study.solutionKey)}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-green-600">{t('caseStudies.labels.results')}:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-3 bg-green-50 p-3 rounded-lg">
                          <div className="text-green-600">{result.icon}</div>
                          <div>
                            <div className="font-semibold text-green-700">{t(result.improvementKey)}</div>
                            <div className="text-sm text-green-600">{t(result.metricKey)}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <Card className="border-l-4 border-l-blue-600 bg-blue-50">
                  <CardContent className="p-6">
                    <blockquote className="text-lg italic text-gray-700 mb-4">
                      "{t(study.testimonialKey)}"
                    </blockquote>
                    <cite className="text-blue-600 font-semibold">
                      — {t(study.authorKey)}
                    </cite>
                  </CardContent>
                </Card>
              </div>

              {/* Image */}
              <div className="flex-1">
                <Card className="border-none shadow-xl overflow-hidden">
                  <div className="aspect-video">
                    <img
                      src={study.image}
                      alt={t(study.companyKey)}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{t(study.companyKey)}</h3>
                      <p className="text-blue-600 font-semibold">{t(study.industryKey)}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Industries Overview */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t('caseStudies.industries.title1')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('caseStudies.industries.title2')}</span>
          </h2>
          <p className="text-xl text-gray-600">
            {t('caseStudies.industries.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { nameKey: "caseStudies.industries.ecommerce.name", icon: "🛒", metricKey: "caseStudies.industries.ecommerce.metric" },
            { nameKey: "caseStudies.industries.healthcare.name", icon: "🏥", metricKey: "caseStudies.industries.healthcare.metric" },
            { nameKey: "caseStudies.industries.finance.name", icon: "🏦", metricKey: "caseStudies.industries.finance.metric" },
            { nameKey: "caseStudies.industries.education.name", icon: "🎓", metricKey: "caseStudies.industries.education.metric" },
            { nameKey: "caseStudies.industries.realestate.name", icon: "🏠", metricKey: "caseStudies.industries.realestate.metric" },
            { nameKey: "caseStudies.industries.hospitality.name", icon: "🏨", metricKey: "caseStudies.industries.hospitality.metric" },
            { nameKey: "caseStudies.industries.retail.name", icon: "🏪", metricKey: "caseStudies.industries.retail.metric" },
            { nameKey: "caseStudies.industries.automotive.name", icon: "🚗", metricKey: "caseStudies.industries.automotive.metric" },
            { nameKey: "caseStudies.industries.insurance.name", icon: "🛡️", metricKey: "caseStudies.industries.insurance.metric" },
            { nameKey: "caseStudies.industries.manufacturing.name", icon: "🏭", metricKey: "caseStudies.industries.manufacturing.metric" },
            { nameKey: "caseStudies.industries.travel.name", icon: "✈️", metricKey: "caseStudies.industries.travel.metric" },
            { nameKey: "caseStudies.industries.logistics.name", icon: "📦", metricKey: "caseStudies.industries.logistics.metric" }
          ].map((industry, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
              <CardContent className="p-0">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{industry.icon}</div>
                <h3 className="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors mb-2">
                  {t(industry.nameKey)}
                </h3>
                <div className="text-xs text-blue-600 font-semibold">{t(industry.metricKey)}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t('caseStudies.cta.title1')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('caseStudies.cta.title2')}</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('caseStudies.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleContactClick} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg">
              {t('caseStudies.cta.button1')}
            </Button>
            <Button size="lg" variant="outline" onClick={handlePricingClick} className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg">
              {t('caseStudies.cta.button2')} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CaseStudies;
