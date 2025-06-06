
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Users, DollarSign, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Section from "@/components/ui/section";
import { useLanguage } from "@/contexts/LanguageContext";

const CaseStudies = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const caseStudies = [
    {
      id: 1,
      title: t('caseStudies.content.case1.title'),
      company: t('caseStudies.content.case1.company'),
      industry: t('caseStudies.content.case1.industry'),
      challenge: t('caseStudies.content.case1.challenge'),
      solution: t('caseStudies.content.case1.solution'),
      results: [
        { metric: t('caseStudies.metrics.conversionRate'), improvement: "+45%", icon: <TrendingUp className="w-4 h-4" /> },
        { metric: t('caseStudies.metrics.cartAbandonment'), improvement: "-30%", icon: <DollarSign className="w-4 h-4" /> },
        { metric: t('caseStudies.metrics.responseTime'), improvement: "< 2 giây", icon: <Clock className="w-4 h-4" /> },
        { metric: t('caseStudies.metrics.customerSatisfaction'), improvement: "4.8/5", icon: <Users className="w-4 h-4" /> }
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      testimonial: t('caseStudies.content.case1.testimonial'),
      author: t('caseStudies.content.case1.author')
    },
    {
      id: 2,
      title: t('caseStudies.content.case2.title'),
      company: t('caseStudies.content.case2.company'),
      industry: t('caseStudies.content.case2.industry'),
      challenge: t('caseStudies.content.case2.challenge'),
      solution: t('caseStudies.content.case2.solution'),
      results: [
        { metric: t('caseStudies.metrics.waitTimes'), improvement: "-60%", icon: <Clock className="w-4 h-4" /> },
        { metric: t('caseStudies.metrics.appointmentBookings'), improvement: "+200%", icon: <TrendingUp className="w-4 h-4" /> },
        { metric: t('caseStudies.metrics.staffEfficiency'), improvement: "+40%", icon: <Users className="w-4 h-4" /> },
        { metric: t('caseStudies.metrics.customerSatisfaction'), improvement: "4.9/5", icon: <Users className="w-4 h-4" /> }
      ],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      testimonial: t('caseStudies.content.case2.testimonial'),
      author: t('caseStudies.content.case2.author')
    },
    {
      id: 3,
      title: t('caseStudies.content.case3.title'),
      company: t('caseStudies.content.case3.company'),
      industry: t('caseStudies.content.case3.industry'), 
      challenge: t('caseStudies.content.case3.challenge'),
      solution: t('caseStudies.content.case3.solution'),
      results: [
        { metric: t('caseStudies.metrics.leadQuality'), improvement: "+80%", icon: <TrendingUp className="w-4 h-4" /> },
        { metric: t('caseStudies.metrics.onboardingTime'), improvement: "-50%", icon: <Clock className="w-4 h-4" /> },
        { metric: t('caseStudies.metrics.conversionRate'), improvement: "+35%", icon: <DollarSign className="w-4 h-4" /> },
        { metric: t('caseStudies.metrics.processEfficiency'), improvement: "+65%", icon: <Users className="w-4 h-4" /> }
      ],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      testimonial: t('caseStudies.content.case3.testimonial'),
      author: t('caseStudies.content.case3.author')
    },
    {
      id: 4,
      title: t('caseStudies.content.case4.title'),
      company: t('caseStudies.content.case4.company'), 
      industry: t('caseStudies.content.case4.industry'),
      challenge: t('caseStudies.content.case4.challenge'),
      solution: t('caseStudies.content.case4.solution'),
      results: [
        { metric: t('caseStudies.metrics.studentEngagement'), improvement: "+70%", icon: <Users className="w-4 h-4" /> },
        { metric: t('caseStudies.metrics.courseCompletion'), improvement: "+55%", icon: <TrendingUp className="w-4 h-4" /> },
        { metric: t('caseStudies.metrics.supportQueries'), improvement: "24/7", icon: <Clock className="w-4 h-4" /> },
        { metric: t('caseStudies.metrics.customerSatisfaction'), improvement: "4.7/5", icon: <Users className="w-4 h-4" /> }
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      testimonial: t('caseStudies.content.case4.testimonial'),
      author: t('caseStudies.content.case4.author')
    },
    {
      id: 5,
      title: t('caseStudies.content.case5.title'),
      company: t('caseStudies.content.case5.company'),
      industry: t('caseStudies.content.case5.industry'),
      challenge: t('caseStudies.content.case5.challenge'),
      solution: t('caseStudies.content.case5.solution'),
      results: [
        { metric: t('caseStudies.metrics.qualifiedLeads'), improvement: "+300%", icon: <TrendingUp className="w-4 h-4" /> },
        { metric: t('caseStudies.metrics.propertyViews'), improvement: "+150%", icon: <Users className="w-4 h-4" /> },
        { metric: t('caseStudies.metrics.salesCycle'), improvement: "-40%", icon: <Clock className="w-4 h-4" /> },
        { metric: t('caseStudies.metrics.agentProductivity'), improvement: "+60%", icon: <DollarSign className="w-4 h-4" /> }
      ],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
      testimonial: t('caseStudies.content.case5.testimonial'),
      author: t('caseStudies.content.case5.author')
    },
    {
      id: 6,
      title: t('caseStudies.content.case6.title'),
      company: t('caseStudies.content.case6.company'),
      industry: t('caseStudies.content.case6.industry'),
      challenge: t('caseStudies.content.case6.challenge'),
      solution: t('caseStudies.content.case6.solution'),
      results: [
        { metric: t('caseStudies.metrics.bookingAutomation'), improvement: "90%", icon: <TrendingUp className="w-4 h-4" /> },
        { metric: t('caseStudies.metrics.staffWorkload'), improvement: "-70%", icon: <Users className="w-4 h-4" /> },
        { metric: t('caseStudies.metrics.bookingConversion'), improvement: "+40%", icon: <DollarSign className="w-4 h-4" /> },
        { metric: t('caseStudies.metrics.guestSatisfaction'), improvement: "4.9/5", icon: <Users className="w-4 h-4" /> }
      ],
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      testimonial: t('caseStudies.content.case6.testimonial'),
      author: t('caseStudies.content.case6.author')
    }
  ];

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handlePricingClick = () => {
    navigate('/pricing');
  };

  const handleIndustryClick = (industrySlug: string) => {
    navigate(`/industries/${industrySlug}`);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            {t('caseStudies.hero.title')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Success Stories</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {t('caseStudies.hero.subtitle')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">{t('caseStudies.content.stats.deployments')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">45%</div>
              <div className="text-gray-600">{t('caseStudies.content.stats.conversionIncrease')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
              <div className="text-gray-600">{t('caseStudies.content.stats.costReduction')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">{t('caseStudies.content.stats.support')}</div>
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
                    {study.industry}
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {study.title}
                  </h2>
                  <p className="text-lg text-gray-600">{study.company}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-red-600">Challenge:</h3>
                    <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-blue-600">Solution:</h3>
                    <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-green-600">Results:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-3 bg-green-50 p-3 rounded-lg">
                          <div className="text-green-600">{result.icon}</div>
                          <div>
                            <div className="font-semibold text-green-700">{result.improvement}</div>
                            <div className="text-sm text-green-600">{result.metric}</div>
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
                      "{study.testimonial}"
                    </blockquote>
                    <cite className="text-blue-600 font-semibold">
                      — {study.author}
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
                      alt={study.company}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{study.company}</h3>
                      <p className="text-blue-600 font-semibold">{study.industry}</p>
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
            Ngành nghề <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">We Serve</span>
          </h2>
          <p className="text-xl text-gray-600">
            Chuyên đổi doanh nghiệp trên tất cả các lĩnh vực chính
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {[
            { name: "Bán lẻ & Thương mại điện tử", icon: "🛒", metric: "+45% Sales", slug: "retail-ecommerce" },
            { name: "Dịch vụ ăn uống (F&B)", icon: "🍽️", metric: "+35% Orders", slug: "fnb" },
            { name: "Ngân hàng & Tài chính", icon: "🏦", metric: "+80% Lead Quality", slug: "banking-finance" },
            { name: "Bảo hiểm", icon: "🛡️", metric: "+25% Claims", slug: "insurance" },
            { name: "Du lịch lữ hành", icon: "✈️", metric: "+55% Bookings", slug: "travel" },
            { name: "Chăm sóc sức khỏe", icon: "🏥", metric: "-60% Wait Time", slug: "healthcare" },
            { name: "Bất động sản", icon: "🏠", metric: "+300% Leads", slug: "real-estate" },
            { name: "Giáo dục & Đào tạo", icon: "🎓", metric: "+70% Engagement", slug: "education" },
            { name: "Dịch vụ khách hàng Call Center", icon: "📞", metric: "+90% Resolution", slug: "call-center" },
            { name: "Logistics & Vận chuyển", icon: "📦", metric: "+30% Tracking", slug: "logistics" },
            { name: "Công nghệ & Phần mềm (SaaS, IT)", icon: "💻", metric: "+50% Support", slug: "tech-saas" },
            { name: "Ô tô & Xe máy", icon: "🚗", metric: "+50% Efficiency", slug: "automotive" },
            { name: "Spa & Thẩm mỹ", icon: "💅", metric: "+40% Bookings", slug: "spa-beauty" },
            { name: "Tuyển dụng & Nhân sự", icon: "👥", metric: "+60% Matching", slug: "recruitment" }
          ].map((industry, index) => (
            <Card 
              key={index} 
              className="text-center p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
              onClick={() => handleIndustryClick(industry.slug)}
            >
              <CardContent className="p-0">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{industry.icon}</div>
                <h3 className="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors mb-1 text-sm">
                  {industry.name}
                </h3>
                <div className="text-xs text-blue-600 font-semibold">{industry.metric}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t('caseStudies.cta.title')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Success Story</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('caseStudies.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleContactClick} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg">
              {t('caseStudies.cta.startStory')}
            </Button>
            <Button size="lg" variant="outline" onClick={handlePricingClick} className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg">
              {t('caseStudies.cta.viewPricing')} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CaseStudies;
