
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import HeroSection from "@/components/marketing/HeroSection";
import ServiceGrid from "@/components/marketing/ServiceGrid";
import ServiceDetailTabs from "@/components/marketing/ServiceDetailTabs";
import SynergyBanner from "@/components/marketing/SynergyBanner";
import ProcessTimeline from "@/components/marketing/ProcessTimeline";
import TestimonialsCarousel from "@/components/marketing/TestimonialsCarousel";
import PricingTeaser from "@/components/marketing/PricingTeaser";
import FAQAccordion from "@/components/marketing/FAQAccordion";
import FinalCTA from "@/components/marketing/FinalCTA";
import { useState } from "react";

const MarketingServices = () => {
  const { t, language } = useLanguage();
  const [selectedService, setSelectedService] = useState<string>("");

  useEffect(() => {
    // SEO Meta tags
    document.title = language === 'vi' 
      ? "Dịch vụ Marketing - D2 Group" 
      : "Marketing Services - D2 Group";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        language === 'vi' 
          ? "Dịch vụ marketing toàn diện từ D2 Group: Quảng cáo hiệu suất, Content Marketing, Livestream Commerce và nhiều hơn nữa."
          : "Comprehensive marketing services from D2 Group: Performance Ads, Content Marketing, Livestream Commerce and more."
      );
    }

    // JSON-LD Schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "provider": {
        "@type": "Organization",
        "name": "D2 Group",
        "url": "https://d2group.ai"
      },
      "serviceType": "Digital Marketing Services",
      "description": language === 'vi' 
        ? "Dịch vụ marketing số toàn diện bao gồm quảng cáo hiệu suất, content marketing, và tự động hóa marketing"
        : "Comprehensive digital marketing services including performance advertising, content marketing, and marketing automation"
    };

    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.textContent = JSON.stringify(schema);
    document.head.appendChild(scriptTag);

    return () => {
      document.head.removeChild(scriptTag);
    };
  }, [language]);

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    // Smooth scroll to detail tabs
    const detailSection = document.getElementById('service-details');
    if (detailSection) {
      detailSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServiceGrid onServiceSelect={handleServiceSelect} />
      <div id="service-details">
        <ServiceDetailTabs selectedService={selectedService} />
      </div>
      <SynergyBanner />
      <ProcessTimeline />
      <TestimonialsCarousel />
      <PricingTeaser />
      <FAQAccordion />
      <FinalCTA />
    </div>
  );
};

export default MarketingServices;
