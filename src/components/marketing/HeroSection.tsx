
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Zap, Target, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <Zap className="w-5 h-5 text-teal-600" />
              <span className="text-sm font-medium text-gray-700">{t("services.hero.badge")}</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">{t("services.hero.title")}</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              {t("services.hero.titleHighlight")}
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t("services.hero.description")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              onClick={() => navigate('/contact')}
            >
              {t("services.hero.cta")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3"
              onClick={() => {
                const servicesSection = document.getElementById('services-grid');
                servicesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t("services.hero.learnMore")}
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-lg">
              <Target className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">{t("services.hero.stat1.title")}</h3>
              <p className="text-gray-600 text-sm text-center">{t("services.hero.stat1.desc")}</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-lg">
              <TrendingUp className="w-8 h-8 text-teal-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">{t("services.hero.stat2.title")}</h3>
              <p className="text-gray-600 text-sm text-center">{t("services.hero.stat2.desc")}</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-lg">
              <Zap className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">{t("services.hero.stat3.title")}</h3>
              <p className="text-gray-600 text-sm text-center">{t("services.hero.stat3.desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
