
import { useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact Us", path: "/contact" },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/d2groupmarketing",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
    },
    {
      name: "Instagram", 
      url: "https://www.instagram.com/d2group.co",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
    },
    {
      name: "Threads",
      url: "https://www.threads.com/@d2group.co", 
      logo: "/lovable-uploads/049840e3-a2b1-469f-9858-ab4c8c496ca6.png"
    },
    {
      name: "Telegram",
      url: "https://t.me/d2group",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/84909099421",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    },
    {
      name: "Zalo",
      url: "https://zalo.me/d2group",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/1077a81a-0fe3-49aa-9fd3-1305b6e0342f.png" 
                alt="D2 Group - AI & Automation" 
                className="h-10 w-auto"
                loading="lazy"
              />
              <span className="text-xl font-bold">D2 Group - AI & Automation</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming customer conversations with AI-driven chatbot solutions. 
              Trusted by 500+ businesses worldwide.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden hover:bg-gray-800 transition-colors" 
                  aria-label={social.name}
                >
                  <img 
                    src={social.logo} 
                    alt={social.name}
                    className="w-5 h-5 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>E-commerce Automation</li>
              <li>Customer Support</li>
              <li>Lead Generation</li>
              <li>Appointment Booking</li>
              <li>Multi-channel Deployment</li>
              <li>Enterprise Integration</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  No. 3 Nguyễn Cơ Thạch Street<br />
                  An Lợi Đông Ward, Thủ Đức City<br />
                  Ho Chi Minh City, Vietnam
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+84 90909 9421</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>contact@d2group.co</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 D2 Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
