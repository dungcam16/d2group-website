
import WebsiteChatButton from "./WebsiteChatButton";
import PlatformChatButton from "./PlatformChatButton";

const ChatbotButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4">
      <WebsiteChatButton />
      <PlatformChatButton />
    </div>
  );
};

export default ChatbotButton;
