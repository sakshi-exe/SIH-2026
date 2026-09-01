function VoiceButton({ onClick }) {
  return (
    <button
      className="voice-btn"
      onClick={onClick}
      title="Voice input"
      type="button"
    >
      🎙️
    </button>
  );
}

export default VoiceButton;