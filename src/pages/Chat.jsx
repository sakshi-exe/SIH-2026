import { useState } from "react";
import { Link } from "react-router-dom";

function Chat() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    console.log("User message:", message);
    setMessage("");
  };

  return (
    <div>
      <header>
        <Link to="/">← Home</Link>
        <h1>Cooperative Sahayak</h1>
        <p>AI-powered multilingual assistance</p>
      </header>

      <main>
        <div>
          <p>
            👋 Namaste! I am Cooperative Sahayak.
          </p>

          <p>
            Ask me about government schemes, cooperative services,
            agriculture support or grievances.
          </p>
        </div>

        <div>
          <button>🇮🇳 Hindi</button>
          <button>मराठी Marathi</button>
          <button>🇬🇧 English</button>
        </div>

        <div>
          <textarea
            placeholder="Type your question here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="3"
          />

          <button onClick={handleSend}>
            Send
          </button>

          <button>
            🎤 Voice
          </button>
        </div>
      </main>
    </div>
  );
}

export default Chat;