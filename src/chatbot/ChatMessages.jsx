import React from "react";
import ChatMessage from "./ChatMessage";

const ChatMessages = ({ chatMessages }) => {

  const chatMessagesRef = React.useRef(null);

  React.useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
  <div className="chat-messages-container"
       ref={chatMessagesRef}>
    {chatMessages.map((chatMessage) => {
     return (
      <ChatMessage
        message={chatMessage.message}
        sender={chatMessage.sender}
        key={chatMessage.id}
        isLoading={chatMessage.isLoading}
      /> 
     )
    })}  
  </div>
  )
}

export default ChatMessages
