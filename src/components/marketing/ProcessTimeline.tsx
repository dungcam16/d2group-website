
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle, Clock, Target, TrendingUp } from "lucide-react";

const ProcessTimeline = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Target,
      key: "analyze",
      number: "01"
    },
    {
      icon: Clock,
      key: "strategy",
      number: "02"
    },
    {
      icon: TrendingUp,
      key: "execute",
      number: "03"
    },
    {
      icon: CheckCircle,
      key: "optimize",
      number: "04"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("services.process.title")}
          </h2>
          <p className="text-xl text-gray-600">
            {t("services.process.description")}
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:flex justify-between items-center relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 -translate-y-1/2"></div>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.key} className="flex flex-col items-center relative">
                  <div className="bg-blue-600 rounded-full p-4 mb-4 relative z-10">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center max-w-xs">
                    <span className="text-sm font-bold text-blue-600 mb-2 block">
                      {step.number}
                    </span>
                    <h3 className="font-semibold mb-2">
                      {t(`services.process.step${index + 1}.title`)}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t(`services.process.step${index + 1}.desc`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.key} className="flex items-start space-x-4">
                  <div className="bg-blue-600 rounded-full p-3 flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-bold text-blue-600 mb-1 block">
                      {step.number}
                    </span>
                    <h3 className="font-semibold mb-2">
                      {t(`services.process.step${index + 1}.title`)}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t(`services.process.step${index + 1}.desc`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
