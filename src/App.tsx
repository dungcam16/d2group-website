import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";
import ChatbotButton from "./components/ChatbotButton";

import Index from "./pages/Index";
import About from "./pages/About";
import Features from "./pages/Features";
import CaseStudies from "./pages/CaseStudies";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import RetailEcommerce from "./pages/industries/RetailEcommerce";
import FoodBeverage from "./pages/industries/FoodBeverage";
import BankingFinance from "./pages/industries/BankingFinance";
import Insurance from "./pages/industries/Insurance";
import Travel from "./pages/industries/Travel";
import Healthcare from "./pages/industries/Healthcare";
import RealEstate from "./pages/industries/RealEstate";
import Education from "./pages/industries/Education";
import CallCenter from "./pages/industries/CallCenter";
import Logistics from "./pages/industries/Logistics";
import TechSaas from "./pages/industries/TechSaas";
import Automotive from "./pages/industries/Automotive";
import SpaBeauty from "./pages/industries/SpaBeauty";
import Recruitment from "./pages/industries/Recruitment";

const queryClient = new QueryClient();

function App() {
  const [loading, setLoading] = useState(true);
    const [scrollProgress, setScrollProgress] = useState(0);


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setScrollProgress(scrollPercent);
        };

        window.addEventListener('scroll', updateScrollProgress);
        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

  if (loading) {
    return <ProgressBar />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
                <ProgressBar progress={scrollProgress} />
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/features" element={<Features />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-of-service" element={<TermsOfService />} />
                  <Route path="/cookie-policy" element={<CookiePolicy />} />
                  <Route path="/industries/retail-ecommerce" element={<RetailEcommerce />} />
                  <Route path="/industries/food-beverage" element={<FoodBeverage />} />
                  <Route path="/industries/banking-finance" element={<BankingFinance />} />
                  <Route path="/industries/insurance" element={<Insurance />} />
                  <Route path="/industries/travel" element={<Travel />} />
                  <Route path="/industries/healthcare" element={<Healthcare />} />
                  <Route path="/industries/real-estate" element={<RealEstate />} />
                  <Route path="/industries/education" element={<Education />} />
                  <Route path="/industries/call-center" element={<CallCenter />} />
                  <Route path="/industries/logistics" element={<Logistics />} />
                  <Route path="/industries/tech-saas" element={<TechSaas />} />
                  <Route path="/industries/automotive" element={<Automotive />} />
                  <Route path="/industries/spa-beauty" element={<SpaBeauty />} />
                  <Route path="/industries/recruitment" element={<Recruitment />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
              <ChatbotButton />
            </div>
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
