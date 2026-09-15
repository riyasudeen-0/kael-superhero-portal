export default function ChatMessage({ message }) {
  return (
    <div className={`chat-message chat-message--${message.role}`}>
      <div className="chat-avatar">{message.role === 'hero' ? 'K' : 'Y'}</div>
      <div className="chat-bubble">
        {message.text}
        {message.error && <small className="chat-error">{message.error}</small>}
      </div>
    </div>
  )
}
