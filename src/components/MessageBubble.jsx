function MessageBubble({ text, sender = "ai", source }) {
  return (
    <div
      className={`message ${
        sender === "user" ? "user-message" : "ai-message"
      }`}
    >
      <p>{text}</p>

      {sender === "ai" && source && (
        <div className="source-box">
          <strong>📚 Source</strong>
          <span>{source}</span>
        </div>
      )}
    </div>
  );
}

export default MessageBubble;