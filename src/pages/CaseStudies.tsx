
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
      titleKey: "caseStudies.study1.title",
      companyKey: "caseStudies.study1.company",
      industryKey: "caseStudies.study1.industry",
      challengeKey: "caseStudies.study1.challenge",
      solutionKey: "caseStudies.study1.solution",
      results: [
        { metricKey: "caseStudies.metrics.conversionRate", improvement: "+45%", icon: <TrendingUp className="w-4 h-4" /> },
        { metricKey: "caseStudies.metrics.cartAbandonment", improvement: "-30%", icon: <DollarSign className="w-4 h-4" /> },
        { metricKey: "caseStudies.metrics.responseTime", improvement: "< 2 sec", icon: <Clock className="w-4 h-4" /> },
        { metricKey: "caseStudies.metrics.customerSatisfaction", improvement: "4.8/5", icon: <Users className="w-4 h-4" /> }
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      testimonialKey: "caseStudies.study1.testimonial",
      authorKey: "caseStudies.study1.author"
    },
    {
      id: 2,
      titleKey: "caseStudies.study2.title",
      companyKey: "caseStudies.study2.company",
      industryKey: "caseStudies.study2.industry",
      challengeKey: "caseStudies.study2.challenge",
      solutionKey: "caseStudies.study2.solution",
      results: [
        { metricKey: "caseStudies.metrics.waitTimes", improvement: "-60%", icon: <Clock className="w-4 h-4" /> },
        { metricKey: "caseStudies.metrics.appointmentBookings", improvement: "+200%", icon: <TrendingUp className="w-4 h-4" /> },
        { metricKey: "caseStudies.metrics.staffEfficiency", improvement: "+40%", icon: <Users className="w-4 h-4" /> },
        { metricKey: "caseStudies.metrics.patientSatisfaction", improvement: "4.9/5", icon: <Users className="w-4 h-4" /> }
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      testimonialKey: "caseStudies.study2.testimonial",
      authorKey: "caseStudies.study2.author"
    },
    {
      id: 3,
      titleKey: "caseStudies.study3.title",
      companyKey: "caseStudies.study3.company",
      industryKey: "caseStudies.study3.industry",
      challengeKey: "caseStudies.study3.challenge",
      solutionKey: "caseStudies.study3.solution",
      results: [
        { metricKey: "caseStudies.metrics.leadQuality", improvement: "+80%", icon: <TrendingUp className="w-4 h-4" /> },
        { metricKey: "caseStudies.metrics.onboardingTime", improvement: "-50%", icon: <Clock className="w-4 h-4" /> },
        { metricKey: "caseStudies.metrics.conversionRate", improvement: "+35%", icon: <DollarSign className="w-4 h-4" /> },
        { metricKey: "caseStudies.metrics.processEfficiency", improvement: "+65%", icon: <Users className="w-4 h-4" /> }
      ],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      testimonialKey: "caseStudies.study3.testimonial",
      authorKey: "caseStudies.study3.author"
    },
    {
      id: 4,
      titleKey: "caseStudies.study4.title",
      companyKey: "caseStudies.study4.company",
      industryKey: "caseStudies.study4.industry",
      challengeKey: "caseStudies.study4.challenge",
      solutionKey: "caseStudies.study4.solution",
      results: [
        { metricKey: "caseStudies.metrics.studentEngagement", improvement: "+70%", icon: <Users className="w-4 h-4" /> },
        { metricKey: "caseStudies.metrics.courseCompletion", improvement: "+55%", icon: <TrendingUp className="w-4 h-4" /> },
        { metricKey: "caseStudies.metrics.supportQueries", improvement: "24/7", icon: <Clock className="w-4 h-4" /> },
        { metricKey: "caseStudies.metrics.studentSatisfaction", improvement: "4.7/5", icon: <Users className="w-4 h-4" /> }
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      testimonialKey: "caseStudies.study4.testimonial",
      authorKey: "caseStudies.study4.author"
    },
    {
      id: 5,
      titleKey: "caseStudies.study5.title",
      companyKey: "caseStudies.study5.company",
      industryKey: "caseStudies.study5.industry",
      challengeKey: "caseStudies.study5.challenge",
      solutionKey: "caseStudies.study5.solution",
      results: [
        { metricKey: "caseStudies.metrics.qualifiedLeads", improvement: "+300%", icon: <TrendingUp className="w-4 h-4" /> },
        { metricKey: "caseStudies.metrics.propertyViews", improvement: "+150%", icon: <Users className="w-4 h-4" /> },
        { metricKey: "caseStudies.metrics.salesCycle", improvement: "-40%", icon: <Clock className="w-4 h-4" /> },
        { metricKey: "caseStudies.metrics.agentProductivity", improvement: "+60%", icon: <DollarSign className="w-4 h-4" /> }
      ],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
      testimonialKey: "caseStudies.study5.testimonial",
      authorKey: "caseStudies.study5.author"
    },
    {
      id: 6,
      titleKey: "caseStudies.study6.title",
      companyKey: "caseStudies.study6.company",
      industryKey: "caseStudies.study6.industry",
      challengeKey: "caseStudies.study6.challenge",
      solutionKey: "caseStudies.study6.solution",
      results: [
        { metricKey: "caseStudies.metrics.bookingAutomation", improvement: "90%", icon: <TrendingUp className="w-4 h-4" /> },
        { metricKey: "caseStudies.metrics.staffWorkload", improvement: "-70%", icon: <Users className="w-4 h-4" /> },
        { metricKey: "caseStudies.metrics.bookingConversion", improvement: "+40%", icon: <DollarSign className="w-4 h-4" /> },
        { metricKey: "caseStudies.metrics.guestSatisfaction", improvement: "4.9/5", icon: <Users className="w-4 h-4" /> }
      ],
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      testimonialKey: "caseStudies.study6.testimonial",
      authorKey: "caseStudies.study6.author"
    }
  ];

  const industries = [
    { nameKey: "caseStudies.industries.ecommerce", icon: "🛒", metricKey: "caseStudies.industries.ecommerceMetric" },
    { nameKey: "caseStudies.industries.healthcare", icon: "🏥", metricKey: "caseStudies.industries.healthcareMetric" },
    { nameKey: "caseStudies.industries.finance", icon: "🏦", metricKey: "caseStudies.industries.financeMetric" },
    { nameKey: "caseStudies.industries.education", icon: "🎓", metricKey: "caseStudies.industries.educationMetric" },
    { nameKey: "caseStudies.industries.realEstate", icon: "🏠", metricKey: "caseStudies.industries.realEstateMetric" },
    { nameKey: "caseStudies.industries.hospitality", icon: "🏨", metricKey: "caseStudies.industries.hospitalityMetric" },
    { nameKey: "caseStudies.industries.retail", icon: "🏪", metricKey: "caseStudies.industries.retailMetric" },
    { nameKey: "caseStudies.industries.automotive", icon: "🚗", metricKey: "caseStudies.industries.automotiveMetric" },
    { nameKey: "caseStudies.industries.insurance", icon: "🛡️", metricKey: "caseStudies.industries.insuranceMetric" },
    { nameKey: "caseStudies.industries.manufacturing", icon: "🏭", metricKey: "caseStudies.industries.manufacturingMetric" },
    { nameKey: "caseStudies.industries.travel", icon: "✈️", metricKey: "caseStudies.industries.travelMetric" },
    { nameKey: "caseStudies.industries.logistics", icon: "📦", metricKey: "caseStudies.industries.logisticsMetric" }
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
            {t('caseStudies.hero.title').split(' ').slice(0, -2).join(' ')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('caseStudies.hero.title').split(' ').slice(-2).join(' ')}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {t('caseStudies.hero.subtitle')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">{t('caseStudies.stats.deployments')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">45%</div>
              <div className="text-gray-600">{t('caseStudies.stats.conversionIncrease')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
              <div className="text-gray-600">{t('caseStudies.stats.costReduction')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">{t('caseStudies.stats.customerSupport')}</div>
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
                            <div className="font-semibold text-green-700">{result.improvement}</div>
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
            {t('caseStudies.industries.title').split(' ').slice(0, -2).join(' ')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('caseStudies.industries.title').split(' ').slice(-2).join(' ')}</span>
          </h2>
          <p className="text-xl text-gray-600">
            {t('caseStudies.industries.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
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
            {t('caseStudies.cta.title').split(' ').slice(0, -2).join(' ')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('caseStudies.cta.title').split(' ').slice(-2).join(' ')}</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('caseStudies.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleContactClick} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg">
              {t('caseStudies.cta.startButton')}
            </Button>
            <Button size="lg" variant="outline" onClick={handlePricingClick} className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg">
              {t('caseStudies.cta.pricingButton')} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CaseStudies;
