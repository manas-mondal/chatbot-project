import { ChatMessage } from "./ChatMessage";
import useAutoScroll from "../hooks/useAutoScroll";
import "./ChatMessages.css";

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useAutoScroll([chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chat) => {
        return (
          <ChatMessage
            message={chat.message}
            sender={chat.sender}
            time={chat.time}
            key={chat.id}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;
