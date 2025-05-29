
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, Globe, Zap, Shield, TrendingUp, Heart, Lightbulb, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Section from "@/components/ui/section";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.desc')
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: t('about.values.reliability.title'),
      description: t('about.values.reliability.desc')
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: t('about.values.customer.title'),
      description: t('about.values.customer.desc')
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: t('about.values.global.title'),
      description: t('about.values.global.desc')
    }
  ];

  const team = [
    {
      name: t('about.team.ceo.name'),
      role: t('about.team.ceo.role'),
      description: t('about.team.ceo.desc'),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: t('about.team.cto.name'),
      role: t('about.team.cto.role'),
      description: t('about.team.cto.desc'),
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5ab?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: t('about.team.head.name'),
      role: t('about.team.head.role'),
      description: t('about.team.head.desc'),
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const achievements = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      number: "500+",
      label: t('about.achievements.clients')
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      number: "95%",
      label: t('about.achievements.satisfaction')
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      number: "50+",
      label: t('about.achievements.awards')
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      number: "15+",
      label: t('about.achievements.countries')
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            {t('about.hero.title').split(' ')[0]} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('about.hero.title').split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {t('about.hero.subtitle')}
          </p>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-900 flex items-center">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                {t('about.mission.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t('about.mission.desc')}
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-900 flex items-center">
                <Zap className="w-8 h-8 text-blue-600 mr-3" />
                {t('about.vision.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t('about.vision.desc')}
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Values */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t('about.values.title').split(' ')[0]} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('about.values.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-xl text-gray-600">
            {t('about.values.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t('about.team.title').split(' ')[0]} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('about.team.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-xl text-gray-600">
            {t('about.team.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold mb-2 text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Achievements */}
      <Section background="gradient">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t('about.achievements.title').split(' ')[0]} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('about.achievements.title').split(' ').slice(1).join(' ')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">{achievement.icon}</div>
              <div className="text-4xl font-bold text-blue-600 mb-2">{achievement.number}</div>
              <p className="text-gray-600 font-semibold">{achievement.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t('about.cta.title').split(' ').slice(0, -1).join(' ')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('about.cta.title').split(' ').slice(-1)}</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('about.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/contact')} className="bg-blue-600 hover:bg-blue-700 text-white">
              {t('about.cta.contact')}
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/case-studies')} className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              {t('about.cta.caseStudies')}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
