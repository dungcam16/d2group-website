
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChatbotButton = () => {
  const handleChatClick = () => {
    // Placeholder for WhatsApp or future widget integration
    window.open("https://wa.me/84123456789", "_blank");
  };

  return (
    <Button
      onClick={handleChatClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      size="icon"
      aria-label="Chat with us"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </Button>
  );
};

export default ChatbotButton;
