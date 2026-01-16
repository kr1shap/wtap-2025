import { useState } from 'react'

type Message = {
  id: string
  author: 'Mentor' | 'Mentee'
  text: string
}

const initialMessages: Message[] = [
  {
    id: '1',
    author: 'Mentor',
    text: 'Lets set up a meeting next week to discuss your career goals.',
  },
  {
    id: '2',
    author: 'Mentee',
    text: 'That sounds great. How about Thursday afternoon?',
  },
]

const starters = [
  'What mentorship goal would make this quarter a win for you?',
  'Which project are you most excited to show a mentor?',
  'What advice would unblock you right now?',
]

export default function ChatPage() {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return
    const nextMessage: Message = {
      id: String(Date.now()),
      author: 'Mentee',
      text: input.trim(),
    }
    setMessages((prev) => [...prev, nextMessage])
    setInput('')
  }

  return (
    <div className="mx-auto max-w-5xl px-6 pb-20 pt-12">
      <div className="rounded-[36px] border border-white/70 bg-white/90 p-8 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--slate)]">Chat</p>
            <h1 className="font-display mt-3 text-3xl font-semibold">Mentor Match conversation</h1>
          </div>
          <a
            className="rounded-full border border-[var(--ink)]/15 bg-white px-5 py-2 text-xs font-semibold text-[var(--ink)]"
            href="#/profile"
          >
            View profile
          </a>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/70 bg-[var(--fog)] p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--slate)]">Conversation</p>
                <p className="mt-2 text-sm text-[var(--slate)]">Mentor: Ari Patel - Mentee: Sasha Kim</p>
              </div>
              <span className="rounded-full bg-[var(--mint)]/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--ink)]">
                Active
              </span>
            </div>
            <div className="mt-6 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm ${
                    message.author === 'Mentee'
                      ? 'ml-auto bg-[var(--mint)]/70 text-[var(--ink)]'
                      : 'bg-white text-[var(--slate)]'
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--slate)]">
                    {message.author}
                  </p>
                  <p className="mt-2">{message.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                className="flex-1 rounded-2xl border border-[var(--ink)]/10 bg-white px-4 py-3 text-sm"
                placeholder="Type a message"
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
              <button
                className="rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-white"
                onClick={handleSend}
                type="button"
              >
                Send
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-white/70 bg-white/90 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--slate)]">Conversation starters</p>
              <div className="mt-4 space-y-3 text-sm text-[var(--slate)]">
                {starters.map((starter) => (
                  <div key={starter} className="rounded-2xl bg-[var(--fog)] px-4 py-3">
                    {starter}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/70 bg-white/90 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--slate)]">Next steps</p>
              <p className="mt-3 text-sm text-[var(--slate)]">
                Suggest a goal, schedule a session, and agree on a weekly cadence to keep momentum.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-[var(--fog)] px-3 py-1">Set a goal</span>
                <span className="rounded-full bg-[var(--fog)] px-3 py-1">Share a calendar</span>
                <span className="rounded-full bg-[var(--fog)] px-3 py-1">Recap highlights</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
