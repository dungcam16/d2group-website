
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQAccordion = () => {
  const { t } = useLanguage();

  const faqs = [
    { key: "faq1" },
    { key: "faq2" },
    { key: "faq3" },
    { key: "faq4" },
    { key: "faq5" },
    { key: "faq6" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("services.faq.title")}
            </h2>
            <p className="text-xl text-gray-600">
              {t("services.faq.description")}
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.key} value={faq.key}>
                <AccordionTrigger className="text-left">
                  {t(`services.faq.${faq.key}.question`)}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {t(`services.faq.${faq.key}.answer`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
