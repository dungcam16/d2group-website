
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Target, 
  FileText, 
  Video, 
  Cog, 
  BarChart3, 
  Search, 
  Layers 
} from "lucide-react";

interface ServiceGridProps {
  onServiceSelect: (serviceId: string) => void;
}

const ServiceGrid = ({ onServiceSelect }: ServiceGridProps) => {
  const { t } = useLanguage();

  const services = [
    {
      id: "performance-ads",
      icon: Target,
      color: "text-red-600",
      bgColor: "bg-red-50",
      title: t("services.grid.performanceAds.title"),
      hook: t("services.grid.performanceAds.hook"),
      description: t("services.grid.performanceAds.description")
    },
    {
      id: "content-performance",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      title: t("services.grid.contentPerformance.title"),
      hook: t("services.grid.contentPerformance.hook"),
      description: t("services.grid.contentPerformance.description")
    },
    {
      id: "livestream-commerce",
      icon: Video,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      title: t("services.grid.livestreamCommerce.title"),
      hook: t("services.grid.livestreamCommerce.hook"),
      description: t("services.grid.livestreamCommerce.description")
    },
    {
      id: "marketing-automation",
      icon: Cog,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      title: t("services.grid.marketingAutomation.title"),
      hook: t("services.grid.marketingAutomation.hook"),
      description: t("services.grid.marketingAutomation.description")
    },
    {
      id: "growth-planner",
      icon: BarChart3,
      color: "text-green-600",
      bgColor: "bg-green-50",
      title: t("services.grid.growthPlanner.title"),
      hook: t("services.grid.growthPlanner.hook"),
      description: t("services.grid.growthPlanner.description")
    },
    {
      id: "seo",
      icon: Search,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      title: t("services.grid.seo.title"),
      hook: t("services.grid.seo.hook"),
      description: t("services.grid.seo.description")
    },
    {
      id: "full-stack-strategy",
      icon: Layers,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      title: t("services.grid.fullStackStrategy.title"),
      hook: t("services.grid.fullStackStrategy.hook"),
      description: t("services.grid.fullStackStrategy.description")
    }
  ];

  return (
    <section id="services-grid" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("services.grid.title")} <span className="text-blue-600">{t("services.grid.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("services.grid.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id}
                className="group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-0 shadow-lg"
                onClick={() => onServiceSelect(service.id)}
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <div className="text-sm font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-full inline-block">
                    {service.hook}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
