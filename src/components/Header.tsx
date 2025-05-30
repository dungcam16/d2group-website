
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage } = useLanguage();

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Blog", path: "/blog" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    navigate('/contact');
    setIsMenuOpen(false);
  };

  const isCurrentPath = (path: string) => {
    return location.pathname === path;
  };

  const toggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavigation('/')}>
            <img 
              src="/lovable-uploads/e2a562a2-0da7-4581-a153-4d44091323a9.png" 
              alt="D2 Group - AI & Automation" 
              className="h-10 w-auto"
              loading="eager"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              D2 Group - AI & Automation
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isCurrentPath(item.path) 
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA + Language Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'vi' ? 'EN' : 'VI'}</span>
            </button>
            <Button 
              variant="outline" 
              onClick={handleContactClick}
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Get a Demo
            </Button>
            <Button 
              onClick={handleContactClick}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
            <nav className="flex flex-col py-4">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className={`text-left px-4 py-3 text-sm font-medium transition-colors hover:bg-gray-50 hover:text-blue-600 ${
                    isCurrentPath(item.path) 
                      ? 'text-blue-600 bg-blue-50 border-r-4 border-blue-600' 
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 pt-4 space-y-2">
                <button
                  onClick={toggleLanguage}
                  className="w-full flex items-center justify-center space-x-2 p-2 text-sm text-gray-600 hover:text-blue-600 transition-colors border border-gray-300 rounded"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language === 'vi' ? 'English' : 'Tiếng Việt'}</span>
                </button>
                <Button 
                  variant="outline" 
                  onClick={handleContactClick}
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Get a Demo
                </Button>
                <Button 
                  onClick={handleContactClick}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Contact Us
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
