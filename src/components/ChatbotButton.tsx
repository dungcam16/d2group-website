
import { MessageCircle, MessageSquare, Phone, Send, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ChatbotButton = () => {
  const handleChatWebsite = () => {
    // Trigger Chatwoot widget
    if (window.chatwootSDK) {
      window.chatwootSDK.toggle();
    }
  };

  const handleMessenger = () => {
    window.open("https://m.me/d2groupmarketing", "_blank");
  };

  const handleZalo = () => {
    window.open("https://zalo.me/0909099421", "_blank");
  };

  const handleTelegram = () => {
    window.open("https://t.me/nguyendung16", "_blank");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/84909099421", "_blank");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          size="icon"
          aria-label="Chat with us"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="mb-4 w-48 bg-white border border-gray-200 shadow-lg"
      >
        <DropdownMenuItem onClick={handleChatWebsite} className="cursor-pointer">
          <MessageSquare className="mr-2 h-4 w-4" />
          Chat Website
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleMessenger} className="cursor-pointer">
          <Users className="mr-2 h-4 w-4" />
          Chat Messenger
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleZalo} className="cursor-pointer">
          <Phone className="mr-2 h-4 w-4" />
          Chat Zalo
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleTelegram} className="cursor-pointer">
          <Send className="mr-2 h-4 w-4" />
          Chat Telegram
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleWhatsApp} className="cursor-pointer">
          <MessageCircle className="mr-2 h-4 w-4" />
          Chat WhatsApp
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ChatbotButton;
