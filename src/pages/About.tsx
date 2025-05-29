
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Target, ArrowRight, Globe, Zap, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Section from "@/components/ui/section";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: "Dr. Nguyễn Minh Tuấn",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "15+ years in AI research and enterprise solutions"
    },
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer", 
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5ab?w=300&h=300&fit=crop&crop=face",
      bio: "Former Google AI engineer, NLP specialist"
    },
    {
      name: "Trần Văn Đức",
      role: "VP of Engineering",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Led chatbot implementations for Fortune 500 companies"
    },
    {
      name: "Lisa Wang",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Product strategy expert with focus on user experience"
    },
    {
      name: "Phạm Thị Mai",
      role: "Customer Success Director",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=face",
      bio: "Ensures every client achieves their automation goals"
    },
    {
      name: "James Rodriguez",
      role: "Head of Sales",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      bio: "Strategic partnerships and enterprise solutions specialist"
    }
  ];

  const timeline = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a vision to democratize AI for businesses"
    },
    {
      year: "2020", 
      title: "First Enterprise Client",
      description: "Deployed chatbot for major Vietnamese bank"
    },
    {
      year: "2021",
      title: "Series A Funding",
      description: "$5M raised to accelerate product development"
    },
    {
      year: "2022",
      title: "Regional Expansion",
      description: "Opened offices in Singapore and Thailand"
    },
    {
      year: "2023",
      title: "AI Breakthrough",
      description: "Launched industry-leading conversational AI platform"
    },
    {
      year: "2024",
      title: "500+ Clients",
      description: "Serving businesses across 12 countries"
    }
  ];

  const awards = [
    {
      title: "Best AI Startup 2023",
      organization: "TechCrunch Disrupt",
      icon: <Award className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Top Chatbot Platform",
      organization: "G2 Software Reviews",
      icon: <Award className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Innovation Award",
      organization: "Vietnam Tech Summit",
      icon: <Award className="w-8 h-8 text-yellow-500" />
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
            {t('about.hero.title')}
          </h1>
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
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              {t('about.mission.title')}
            </h2>
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

      {/* Team Section */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t('about.team.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.team.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t('about.journey.title')}
          </h2>
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
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t('about.awards.title')}
          </h2>
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t('about.cta.title')}
          </h2>
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
