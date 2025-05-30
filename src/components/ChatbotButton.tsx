
import { useEffect } from "react";
import PlatformChatButton from "./PlatformChatButton";

const ChatbotButton = () => {
  useEffect(() => {
    // Set up Chatwoot settings
    (window as any).chatwootSettings = {
      "position": "right",
      "type": "standard",
      "launcherTitle": "Chat with us"
    };

    // Load Chatwoot script
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
    };
    
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const existingScript = document.querySelector('script[src*="chatwoot"]');
      if (existingScript) {
        existingScript.remove();
      }
      
      // Reset window objects
      delete (window as any).chatwootSDK;
      delete (window as any).chatwootSettings;
      delete (window as any).$chatwoot;
      
      // Remove Chatwoot elements
      const chatwootContainer = document.querySelector('#chatwoot_live_chat_widget');
      if (chatwootContainer) {
        chatwootContainer.remove();
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4">
      <PlatformChatButton />
      {/* Chatwoot widget sẽ tự động render ở đây thông qua script */}
    </div>
  );
};

export default ChatbotButton;
