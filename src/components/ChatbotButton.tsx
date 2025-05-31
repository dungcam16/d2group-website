
import { MessageCircle, Phone, Send, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ChatbotButton = () => {
  const [isBotpressLoaded, setIsBotpressLoaded] = useState(false);

  const handleMessenger = () => {
    console.log('Opening Messenger');
    window.open("https://m.me/d2groupmarketing", "_blank");
  };

  const handleZalo = () => {
    console.log('Opening Zalo');
    window.open("https://zalo.me/0909099421", "_blank");
  };

  const handleTelegram = () => {
    console.log('Opening Telegram');
    window.open("https://t.me/nguyendung16", "_blank");
  };

  const handleWhatsApp = () => {
    console.log('Opening WhatsApp');
    window.open("https://wa.me/84909099421", "_blank");
  };

  const handleWebsite = () => {
    console.log('Loading Botpress widget');
    
    // Load Botpress scripts dynamically
    const script1 = document.createElement('script');
    script1.src = "https://cdn.botpress.cloud/webchat/v2.5/inject.js";
    script1.defer = true;
    script1.async = true;
    
    const script2 = document.createElement('script');
    script2.src = "https://files.bpcontent.cloud/2025/05/27/10/20250527101911-FJ8GLO2W.js";
    script2.defer = true;
    script2.async = true;
    
    script1.onload = function() {
      document.head.appendChild(script2);
      
      script2.onload = function() {
        // Ẩn button gốc sau khi Botpress đã load
        setIsBotpressLoaded(true);
      };
    };
    
    document.head.appendChild(script1);
  };

  // Ẩn button nếu Botpress đã được load
  if (isBotpressLoaded) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            size="icon"
            aria-label="Chọn platform chat"
          >
            <MessageCircle className="h-6 w-6 text-white" />
          </Button>
        </DropdownMenuTrigger>
        
        <DropdownMenuContent 
          align="end" 
          className="mb-4 w-56 bg-white border border-gray-200 shadow-lg rounded-lg z-[100]"
          sideOffset={8}
        >
          <div className="p-2 border-b border-gray-100">
            <span className="text-sm font-semibold text-gray-700">Chọn platform chat</span>
          </div>
          
          <DropdownMenuItem 
            onClick={handleWebsite} 
            className="cursor-pointer hover:bg-blue-50 px-4 py-3 flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Globe className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <span className="font-medium text-gray-900">Website</span>
              <p className="text-xs text-gray-500">Chat trực tiếp</p>
            </div>
          </DropdownMenuItem>
          
          <DropdownMenuItem 
            onClick={handleMessenger} 
            className="cursor-pointer hover:bg-blue-50 px-4 py-3 flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden bg-gray-100">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg" 
                alt="Messenger" 
                className="w-6 h-6 object-contain"
              />
            </div>
            <div>
              <span className="font-medium text-gray-900">Messenger</span>
              <p className="text-xs text-gray-500">Facebook Messenger</p>
            </div>
          </DropdownMenuItem>
          
          <DropdownMenuItem 
            onClick={handleZalo} 
            className="cursor-pointer hover:bg-blue-50 px-4 py-3 flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden bg-gray-100">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" 
                alt="Zalo" 
                className="w-6 h-6 object-contain"
              />
            </div>
            <div>
              <span className="font-medium text-gray-900">Zalo</span>
              <p className="text-xs text-gray-500">Zalo chat</p>
            </div>
          </DropdownMenuItem>
          
          <DropdownMenuItem 
            onClick={handleTelegram} 
            className="cursor-pointer hover:bg-blue-50 px-4 py-3 flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden bg-gray-100">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" 
                alt="Telegram" 
                className="w-6 h-6 object-contain"
              />
            </div>
            <div>
              <span className="font-medium text-gray-900">Telegram</span>
              <p className="text-xs text-gray-500">Telegram chat</p>
            </div>
          </DropdownMenuItem>
          
          <DropdownMenuItem 
            onClick={handleWhatsApp} 
            className="cursor-pointer hover:bg-green-50 px-4 py-3 flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden bg-gray-100">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp" 
                className="w-6 h-6 object-contain"
              />
            </div>
            <div>
              <span className="font-medium text-gray-900">WhatsApp</span>
              <p className="text-xs text-gray-500">WhatsApp chat</p>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ChatbotButton;
