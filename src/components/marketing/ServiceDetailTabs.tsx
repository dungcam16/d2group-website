
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

interface ServiceDetailTabsProps {
  selectedService: string;
}

const ServiceDetailTabs = ({ selectedService }: ServiceDetailTabsProps) => {
  const { t } = useLanguage();

  const services = [
    "performance-ads",
    "content-performance", 
    "livestream-commerce",
    "marketing-automation",
    "growth-planner",
    "seo",
    "full-stack-strategy"
  ];

  const getDeliverables = (serviceId: string) => {
    return t(`services.details.${serviceId}.deliverables`).split('|');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("services.details.title")} <span className="text-blue-600">{t("services.details.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("services.details.subtitle")}
          </p>
        </div>

        <Tabs value={selectedService || services[0]} className="max-w-6xl mx-auto">
          <TabsList className="grid grid-cols-3 lg:grid-cols-7 w-full mb-8">
            {services.map((service) => (
              <TabsTrigger 
                key={service} 
                value={service}
                className="text-xs lg:text-sm px-2 py-2"
              >
                {t(`services.grid.${service.replace('-', '')}.title`).split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service} value={service}>
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl font-bold">
                    {t(`services.grid.${service.replace('-', '')}.title`)}
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    {t(`services.details.${service}.overview`)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {t("services.details.deliverables")}
                      </h3>
                      <div className="space-y-3">
                        {getDeliverables(service).map((deliverable, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{deliverable.trim()}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {t("services.details.features")}
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-medium text-gray-900 mb-2">
                            {t(`services.details.${service}.feature1.title`)}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {t(`services.details.${service}.feature1.desc`)}
                          </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-medium text-gray-900 mb-2">
                            {t(`services.details.${service}.feature2.title`)}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {t(`services.details.${service}.feature2.desc`)}
                          </p>
                        </div>
                      </div>
                      <div className="mt-6">
                        <Badge variant="outline" className="text-teal-600 border-teal-600">
                          {t(`services.details.${service}.timeline`)}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ServiceDetailTabs;
