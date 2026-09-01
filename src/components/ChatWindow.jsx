function ChatWindow({ messages = [] }) {
  return (
    <div className="chat-window">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message-row ${
            message.sender === "user" ? "user-row" : "ai-row"
          }`}
        >
          <div
            className={`message ${
              message.sender === "user"
                ? "user-message"
                : "ai-message"
            }`}
          >
            {message.text}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatWindow;