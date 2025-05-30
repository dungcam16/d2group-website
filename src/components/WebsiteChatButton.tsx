
import { useEffect } from "react";

const WebsiteChatButton = () => {
  useEffect(() => {
    // Load Chatwoot immediately when component mounts
    if (!(window as any).chatwootSDK) {
      console.log('Loading Chatwoot widget automatically');
      
      // Set up Chatwoot settings
      (window as any).chatwootSettings = {
        "position": "right",
        "type": "standard",
        "launcherTitle": "Chat with us"
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
      };
      
      document.head.appendChild(script);
    }
  }, []);

  // This component doesn't render anything visible since Chatwoot shows its own button
  return null;
};

export default WebsiteChatButton;
