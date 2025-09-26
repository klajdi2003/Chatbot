import React from 'react';
import { useState } from 'react';

const ChatInput = ({ chatMessages, setChatMessages }) => {

  const [inputText, setInputText] = useState('');
  
  const saveInputText = (event) => {
    setInputText(event.target.value);
  };

  const sendMessage = () => {
    if (!inputText.trim()) return;

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ]; 

    setChatMessages(newChatMessages);

    // Add temporary typing indicator from robot
    const typingMessage = {
      message: '',
      sender: 'robot',
      id: crypto.randomUUID(),
      isLoading: true
    };

    setChatMessages([
      ...newChatMessages,
      typingMessage
    ]);

    // Simulate async response and replace typing indicator with real response
    const typingId = typingMessage.id;
    const userText = inputText;
    setTimeout(() => {
      const response = Chatbot.getResponse(userText);
      setChatMessages((prev) => {
        const withoutTyping = prev.filter((m) => m.id !== typingId);
        return [
          ...withoutTyping,
          {
            message: response,
            sender: 'robot',
            id: crypto.randomUUID()
          }
        ];
      });
    }, 800);

    setInputText('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
  <div className='chat-input-container'>
    <input 
      className='chat-input'
      size={25} 
      placeholder='Send a message to Chatbot' 
      onChange={saveInputText}
      value={inputText}
      onKeyDown={handleKeyDown}
    />
    <button className='send-button' onClick={sendMessage}>Send</button>
  </div>
  )
}

export default ChatInput
