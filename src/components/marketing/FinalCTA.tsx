
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";

const FinalCTA = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleChatwootToggle = () => {
    // Toggle Chatwoot widget if available
    if (window.$chatwoot) {
      window.$chatwoot.toggle();
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t("services.finalCta.title")}
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t("services.finalCta.description")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
              onClick={() => navigate('/contact')}
            >
              {t("services.finalCta.primary")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
              onClick={handleChatwootToggle}
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              {t("services.finalCta.secondary")}
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">
                {t("services.finalCta.stat1.number")}
              </div>
              <p className="text-blue-100">
                {t("services.finalCta.stat1.label")}
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {t("services.finalCta.stat2.number")}
              </div>
              <p className="text-blue-100">
                {t("services.finalCta.stat2.label")}
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {t("services.finalCta.stat3.number")}
              </div>
              <p className="text-blue-100">
                {t("services.finalCta.stat3.label")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
