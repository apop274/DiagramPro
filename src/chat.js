import React, { useState } from 'react';

function Chat() {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = () => {
    if (!userInput) return;
    const newMessage = { user: 'You', message: userInput };
    setChatHistory([...chatHistory, newMessage]);
    setUserInput('');
  };

  return (
    <div className="chat">
      <div className="chat-history">
        {chatHistory.map((chat, index) => (
          <div key={index} className="chat-message">
            <strong>{chat.user}:</strong> {chat.message}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input 
          type="text" 
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
