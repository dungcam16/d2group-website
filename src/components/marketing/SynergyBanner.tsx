
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";

const SynergyBanner = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
              <Zap className="w-8 h-8" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t("services.synergy.title")}
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t("services.synergy.description")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
              onClick={() => navigate('/features')}
            >
              {t("services.synergy.exploreChatbots")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
              onClick={() => navigate('/contact')}
            >
              {t("services.synergy.getIntegration")}
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-semibold mb-2">{t("services.synergy.benefit1.title")}</h3>
              <p className="text-blue-100 text-sm">{t("services.synergy.benefit1.desc")}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-semibold mb-2">{t("services.synergy.benefit2.title")}</h3>
              <p className="text-blue-100 text-sm">{t("services.synergy.benefit2.desc")}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-semibold mb-2">{t("services.synergy.benefit3.title")}</h3>
              <p className="text-blue-100 text-sm">{t("services.synergy.benefit3.desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SynergyBanner;
