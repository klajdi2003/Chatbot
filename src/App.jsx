import ChatInput from './chatbot/ChatInput';
import ChatMessages from './chatbot/ChatMessages';
import './style/style.css';
import { useState, useEffect } from 'react';

const App = () => {

  const [chatMessages, setChatMessages] = useState([]);
  const [isDark, setIsDark] = useState(false);

  // Apply dark class to body element
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    
    // Cleanup function to remove class when component unmounts
    return () => {
      document.body.classList.remove('dark');
    };
  }, [isDark]);

  return (
  <div className="app-container">

    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
      <button className='send-button' onClick={() => setIsDark((v) => !v)}>
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>

    {chatMessages.length === 0 && (
      <p className='welcome-message'>
        Welcome to the chatbot project! Send a message using the textbox below.
      </p>
    )}

    <ChatMessages
      chatMessages={chatMessages}
    />

    <ChatInput
      chatMessages={chatMessages}
      setChatMessages={setChatMessages}
    />
  </div>
  )
}

export default App
