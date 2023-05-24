import React from 'react';

const ChatInterface = () => {
  return (
    <div className="chat-interface">
      <div className="chat-window">
        {/* Display chat messages */}
      </div>
      <div className="input-container">
        <input type="text" placeholder="Type your message..." />
        <button>Send</button>
      </div>
    </div>
  );
};

export default ChatInterface;
