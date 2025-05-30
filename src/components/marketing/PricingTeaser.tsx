
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const PricingTeaser = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const plans = [
    {
      key: "starter",
      popular: false
    },
    {
      key: "professional",
      popular: true
    },
    {
      key: "enterprise",
      popular: false
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("services.pricing.title")}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t("services.pricing.description")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.key} 
              className={`relative ${
                plan.popular 
                  ? 'border-blue-600 shadow-lg scale-105' 
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    {t("services.pricing.popular")}
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold">
                  {t(`services.pricing.${plan.key}.name`)}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold">
                    {t(`services.pricing.${plan.key}.price`)}
                  </span>
                  <span className="text-gray-600 ml-2">
                    {t("services.pricing.perMonth")}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {[1, 2, 3, 4].map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">
                        {t(`services.pricing.${plan.key}.feature${feature}`)}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'variant-outline'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                  onClick={() => navigate('/pricing')}
                >
                  {t("services.pricing.getStarted")}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="link" 
            onClick={() => navigate('/pricing')}
            className="text-blue-600 hover:text-blue-700"
          >
            {t("services.pricing.viewAllPlans")}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingTeaser;
