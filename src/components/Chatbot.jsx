import { useEffect, useMemo, useRef, useState } from 'react'
import { buildGrievancePrompt, chatFlow, openingMessage } from '../data/chatFlow.js'
import { sendHelpRequest } from '../lib/email.js'
import ChatMessage from './ChatMessage.jsx'

function nowId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`
}

export default function Chatbot() {
  const [messages, setMessages] = useState([openingMessage])
  const [input, setInput] = useState('')
  const [stepIndex, setStepIndex] = useState(0)
  const [details, setDetails] = useState({})
  const [status, setStatus] = useState('active')
  const [sending, setSending] = useState(false)
  const [sentAt, setSentAt] = useState('')
  const bottomRef = useRef(null)

  const currentStep = chatFlow[stepIndex]
  const progress = useMemo(() => {
    if (status !== 'active') return 100
    return Math.round((stepIndex / (chatFlow.length + 1)) * 100)
  }, [stepIndex, status])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, sending])

  const addMessage = (role, text, extra = {}) => {
    setMessages((items) => [...items, { id: nowId(), role, text, ...extra }])
  }

  const submit = async (event) => {
    event.preventDefault()
    const value = input.trim()
    if (!value || sending || status !== 'active') return

    setInput('')
    addMessage('user', value)

    if (currentStep) {
      const error = currentStep.validate(value)
      if (error) {
        addMessage('hero', error, { error: true })
        return
      }

      const nextDetails = currentStep.store(details, value)
      setDetails(nextDetails)

      const nextStep = stepIndex + 1
      setStepIndex(nextStep)

      if (nextStep < chatFlow.length) {
        window.setTimeout(() => addMessage('hero', chatFlow[nextStep].prompt(nextDetails)), 350)
      } else {
        window.setTimeout(() => addMessage('hero', buildGrievancePrompt(nextDetails)), 350)
      }
      return
    }

    const nextDetails = { ...details, grievance: value }
    setDetails(nextDetails)
    setStatus('submitting')
    setSending(true)
    addMessage('hero', 'Give me a moment. I am sending your request through the portal.')

    const result = await sendHelpRequest(nextDetails)
    setSending(false)

    if (result.ok) {
      setStatus('sent')
      setSentAt(result.submittedAt)
      addMessage('hero', `It's through, ${nextDetails.name}. Your request reached my desk. If I can help, you will hear from me.`)
    } else {
      setStatus('error')
      addMessage('hero', result.message)
    }
  }

  const restart = () => {
    setMessages([openingMessage])
    setInput('')
    setStepIndex(0)
    setDetails({})
    setStatus('active')
    setSending(false)
    setSentAt('')
  }

  const placeholder = currentStep ? 'Type your answer…' : 'Tell Kael what is happening…'

  return (
    <section className="chat-card" id="contact">
      <div className="chat-head">
        <div>
          <span className="eyebrow">LIVE HELP PORTAL</span>
          <h2>Talk to Kael.</h2>
          <p>No forms. Start a conversation.</p>
        </div>
        <div className="status-dot"><span /> ONLINE</div>
      </div>

      <div className="progress-wrap" aria-label={`Conversation progress ${progress}%`}>
        <div className="progress-label"><span>CASE INTAKE</span><span>{progress}%</span></div>
        <div className="progress-track"><div style={{ width: `${progress}%` }} /></div>
      </div>

      <div className="chat-window" aria-live="polite">
        {messages.map((message) => <ChatMessage key={message.id} message={message} />)}
        {sending && <div className="typing"><span /><span /><span /> Kael is writing…</div>}
        <div ref={bottomRef} />
      </div>

      {status === 'sent' ? (
        <div className="sent-card">
          <div className="sent-icon">✓</div>
          <div>
            <strong>Request received.</strong>
            <p>Submitted {sentAt}.</p>
          </div>
          <button type="button" onClick={restart}>Start another request</button>
        </div>
      ) : (
        <form className="chat-input" onSubmit={submit}>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder={placeholder}
            aria-label="Chat message"
            disabled={sending || status !== 'active'}
          />
          <button type="submit" disabled={!input.trim() || sending || status !== 'active'} aria-label="Send message">↗</button>
        </form>
      )}

      <div className="chat-foot">
        <span>Privacy-minded by design</span>
        <span>•</span>
        <span>Your story stays in this request flow</span>
      </div>
    </section>
  )
}
