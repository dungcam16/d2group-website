
import WebsiteChatButton from "./WebsiteChatButton";
import PlatformChatButton from "./PlatformChatButton";

const ChatbotButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[9998] flex flex-col gap-4">
      <PlatformChatButton />
      <WebsiteChatButton />
    </div>
  );
};

export default ChatbotButton;
