import { MessageCircle, Phone, Send, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ChatbotButton = () => {
  const [sdkReady, setSdkReady] = useState(false);
  const BASE_URL = "https://chatwoot.d2group.co";
  const WEBSITE_TOKEN = "SDf9hw3hrgQP5Sd3brUkQ6ua";

  // Preload Chatwoot SDK on mount
  useEffect(() => {
    // thiết lập trước
    (window as any).chatwootSettings = {
      position: "right",
      type: "expanded_bubble",
      launcherTitle: "Chat with us",
      hideBranding: true, // nếu bạn đã bật biến ENV HIDE_BRANDING=true
    };

    const script = document.createElement("script");
    script.src = `${BASE_URL}/packs/js/sdk.js`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      // khởi chạy SDK
      (window as any).chatwootSDK.run({
        websiteToken: WEBSITE_TOKEN,
        baseUrl: BASE_URL,
      });
      setSdkReady(true);
    };
    document.head.appendChild(script);
  }, []);

  const handleWebsite = () => {
    if (!sdkReady) return;          // chờ SDK
    (window as any).chatwootSDK.toggle(); 
  };

  const handleMessenger = () => window.open("https://m.me/d2groupmarketing", "_blank");
  const handleZalo      = () => window.open("https://zalo.me/0909099421", "_blank");
  const handleTelegram  = () => window.open("https://t.me/nguyendung16", "_blank");
  const handleWhatsApp  = () => window.open("https://wa.me/84909099421", "_blank");

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
          sideOffset={8}
          className="mb-4 w-56 bg-white border border-gray-200 shadow-lg rounded-lg z-[100]"
        >
          <div className="p-2 border-b border-gray-100">
            <span className="text-sm font-semibold text-gray-700">Chọn platform chat</span>
          </div>
          <DropdownMenuItem onClick={handleWebsite} className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Globe className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <span className="font-medium text-gray-900">Website</span>
              <p className="text-xs text-gray-500">Chat trực tiếp</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleMessenger} className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Users className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <span className="font-medium text-gray-900">Messenger</span>
              <p className="text-xs text-gray-500">Facebook Messenger</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleZalo} className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Phone className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <span className="font-medium text-gray-900">Zalo</span>
              <p className="text-xs text-gray-500">Zalo chat</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleTelegram} className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Send className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <span className="font-medium text-gray-900">Telegram</span>
              <p className="text-xs text-gray-500">Telegram chat</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleWhatsApp} className="flex items-center gap-3 px-4 py-3 hover:bg-green-50">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <MessageCircle className="h-4 w-4 text-green-600" />
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
