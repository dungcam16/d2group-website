
import WebsiteChatButton from "./WebsiteChatButton";
import PlatformChatButton from "./PlatformChatButton";

const ChatbotButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-row gap-4 items-end">
      <PlatformChatButton />
      <WebsiteChatButton />
    </div>
  );
};

export default ChatbotButton;
