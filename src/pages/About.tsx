import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, ArrowRight, Globe, Zap, Shield, TrendingUp, Users, MessageSquare, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Section from "@/components/ui/section";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollTriggered3D from '@/components/ScrollTriggered3D';

const About = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const timeline = [
    {
      year: "2019",
      title: t('about.timeline.2019.title'),
      description: t('about.timeline.2019.desc')
    },
    {
      year: "2020", 
      title: t('about.timeline.2020.title'),
      description: t('about.timeline.2020.desc')
    },
    {
      year: "2021",
      title: t('about.timeline.2021.title'),
      description: t('about.timeline.2021.desc')
    },
    {
      year: "2022",
      title: t('about.timeline.2022.title'),
      description: t('about.timeline.2022.desc')
    },
    {
      year: "2023",
      title: t('about.timeline.2023.title'),
      description: t('about.timeline.2023.desc')
    },
    {
      year: "2024",
      title: t('about.timeline.2024.title'),
      description: t('about.timeline.2024.desc')
    }
  ];

  const awards = [
    {
      title: t('about.awards.award1.title'),
      organization: t('about.awards.award1.org'),
      icon: <Award className="w-8 h-8 text-yellow-500" />
    },
    {
      title: t('about.awards.award2.title'),
      organization: t('about.awards.award2.org'),
      icon: <Award className="w-8 h-8 text-yellow-500" />
    },
    {
      title: t('about.awards.award3.title'),
      organization: t('about.awards.award3.org'),
      icon: <Award className="w-8 h-8 text-yellow-500" />
    }
  ];

  const whyChooseUs = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: t('about.whyChoose.results.title'),
      description: t('about.whyChoose.results.desc'),
      stats: t('about.whyChoose.results.stats')
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: t('about.whyChoose.trusted.title'),
      description: t('about.whyChoose.trusted.desc'),
      stats: t('about.whyChoose.trusted.stats')
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-purple-600" />,
      title: t('about.whyChoose.technology.title'),
      description: t('about.whyChoose.technology.desc'),
      stats: t('about.whyChoose.technology.stats')
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-600" />,
      title: t('about.whyChoose.support.title'),
      description: t('about.whyChoose.support.desc'),
      stats: t('about.whyChoose.support.stats')
    }
  ];

  const companyValues = [
    {
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.desc'),
      icon: <Zap className="w-6 h-6 text-blue-600" />
    },
    {
      title: t('about.values.customer.title'),
      description: t('about.values.customer.desc'),
      icon: <Target className="w-6 h-6 text-green-600" />
    },
    {
      title: t('about.values.transparency.title'),
      description: t('about.values.transparency.desc'),
      icon: <Shield className="w-6 h-6 text-purple-600" />
    },
    {
      title: t('about.values.global.title'),
      description: t('about.values.global.desc'),
      icon: <Globe className="w-6 h-6 text-orange-600" />
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
          <ScrollTriggered3D direction="up" delay={0.1}>
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              {t('about.hero.title')}
            </h1>
          </ScrollTriggered3D>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {t('about.hero.subtitle')} {t('about.hero.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">{t('about.stats.clients')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-gray-600">{t('about.stats.countries')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">{t('about.stats.uptime')}</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollTriggered3D direction="up" delay={0.1}>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                {t('about.mission.title')}
              </h2>
            </ScrollTriggered3D>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('about.mission.description')}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Globe className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('about.mission.global.title')}</h3>
                  <p className="text-gray-600">{t('about.mission.global.desc')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Zap className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('about.mission.innovation.title')}</h3>
                  <p className="text-gray-600">{t('about.mission.innovation.desc')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('about.mission.security.title')}</h3>
                  <p className="text-gray-600">{t('about.mission.security.desc')}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('about.vision.title')}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('about.vision.description')}
                </p>
                <div className="mt-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* Why Choose Us Section */}
      <Section background="gray">
        <div className="text-center mb-16">
          <ScrollTriggered3D direction="up" delay={0.1}>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {t('about.whyChoose.title')}
            </h2>
          </ScrollTriggered3D>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.whyChoose.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="text-2xl font-bold text-blue-600">{item.stats}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Company Values */}
      <Section background="white">
        <div className="text-center mb-16">
          <ScrollTriggered3D direction="up" delay={0.1}>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {t('about.values.title')}
            </h2>
          </ScrollTriggered3D>
          <p className="text-xl text-gray-600">
            {t('about.values.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {companyValues.map((value, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex-shrink-0">
                {value.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section background="gray">
        <div className="text-center mb-16">
          <ScrollTriggered3D direction="up" delay={0.1}>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {t('about.journey.title')}
            </h2>
          </ScrollTriggered3D>
          <p className="text-xl text-gray-600">
            {t('about.journey.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-indigo-600 hidden lg:block"></div>
            
            {timeline.map((event, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{event.year}</div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{event.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
                
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Awards */}
      <Section background="white">
        <div className="text-center mb-16">
          <ScrollTriggered3D direction="up" delay={0.1}>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {t('about.awards.title')}
            </h2>
          </ScrollTriggered3D>
          <p className="text-xl text-gray-600">
            {t('about.awards.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {awards.map((award, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="mb-6">{award.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{award.title}</h3>
                <p className="text-gray-600">{award.organization}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <ScrollTriggered3D direction="up" delay={0.1}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('about.cta.title')}
            </h2>
          </ScrollTriggered3D>
          <p className="text-xl text-gray-600 mb-8">
            {t('about.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleContactClick} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg">
              {t('about.cta.getStarted')}
            </Button>
            <Button size="lg" variant="outline" onClick={handleContactClick} className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg">
              {t('about.cta.scheduleCall')}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
