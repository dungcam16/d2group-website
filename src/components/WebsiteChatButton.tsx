
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const WebsiteChatButton = () => {
  const [isChatwootLoaded, setIsChatwootLoaded] = useState(false);

  useEffect(() => {
    // Lắng nghe sự kiện từ Chatwoot
    const handleChatwootEvents = (event: MessageEvent) => {
      if (event.origin !== 'https://chatwoot.d2group.co') return;
      
      if (event.data.type === 'chatwoot:closed') {
        console.log('Chatwoot chat closed, showing original button');
        setIsChatwootLoaded(false);
        
        // Xóa Chatwoot script và reset
        const existingScript = document.querySelector('script[src*="chatwoot"]');
        if (existingScript) {
          existingScript.remove();
        }
        
        // Reset window objects
        delete (window as any).chatwootSDK;
        delete (window as any).chatwootSettings;
        delete (window as any).$chatwoot;
        
        // Xóa Chatwoot elements
        const chatwootContainer = document.querySelector('#chatwoot_live_chat_widget');
        if (chatwootContainer) {
          chatwootContainer.remove();
        }
      }
    };

    window.addEventListener('message', handleChatwootEvents);
    
    return () => {
      window.removeEventListener('message', handleChatwootEvents);
    };
  }, []);

  const handleWebsiteChat = () => {
    console.log('Loading Chatwoot widget');
    
    // Set up Chatwoot settings
    (window as any).chatwootSettings = {
      "position": "right",
      "type": "standard",
      "launcherTitle": "Chat with us",
      "hideMessageBubble": true
    };

    // Load Chatwoot script dynamically
    const BASE_URL = "https://chatwoot.d2group.co";
    const script = document.createElement('script');
    script.src = BASE_URL + "/packs/js/sdk.js";
    script.defer = true;
    script.async = true;
    
    script.onload = function() {
      (window as any).chatwootSDK.run({
        websiteToken: 'SDf9hw3hrgQP5Sd3brUkQ6ua',
        baseUrl: BASE_URL
      });
      
      // Ẩn button gốc và mở chat ngay lập tức
      setIsChatwootLoaded(true);
      
      // Mở chat widget ngay
      setTimeout(() => {
        if ((window as any).chatwootSDK && (window as any).chatwootSDK.toggle) {
          (window as any).chatwootSDK.toggle();
        }
      }, 1000);
    };
    
    document.head.appendChild(script);
  };

  // Ẩn button nếu Chatwoot đã được load
  if (isChatwootLoaded) {
    return null;
  }

  return (
    <Button
      onClick={handleWebsiteChat}
      className="h-14 w-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      size="icon"
      aria-label="Chat trực tiếp website"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </Button>
  );
};

export default WebsiteChatButton;
