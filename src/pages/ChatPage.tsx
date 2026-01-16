import { useEffect, useMemo, useRef, useState } from 'react'
import { io, Socket } from 'socket.io-client'

type Message = {
  id: string
  author: 'Mentor' | 'Mentee'
  text: string
  timestamp: number
}

const starters = [
  'What mentorship goal would make this quarter a win for you?',
  'Which project are you most excited to show a mentor?',
  'What advice would unblock you right now?',
]

const upcomingEvents = [
  {
    id: 'event-1',
    title: 'Coffee chat with Ari Patel',
    date: 'Sep 12',
    time: '4:00 PM',
    location: 'Civic Coffee, Market St',
  },
  {
    id: 'event-2',
    title: 'Resume lab meetup',
    date: 'Sep 15',
    time: '6:30 PM',
    location: 'Downtown Library',
  },
  {
    id: 'event-3',
    title: 'Mentor Match mixer',
    date: 'Sep 19',
    time: '5:00 PM',
    location: 'Union Square',
  },
]

const calendarDays = [
  { day: 'Mon', date: 9 },
  { day: 'Tue', date: 10 },
  { day: 'Wed', date: 11 },
  { day: 'Thu', date: 12, highlight: true },
  { day: 'Fri', date: 13 },
  { day: 'Sat', date: 14 },
  { day: 'Sun', date: 15, highlight: true },
]

const socketUrl = 'http://localhost:5174'

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [senderRole, setSenderRole] = useState<Message['author']>('Mentee')
  const [connected, setConnected] = useState(false)
  const socketRef = useRef<Socket | null>(null)

  useEffect(() => {
    const socket: Socket = io(socketUrl)
    socketRef.current = socket

    socket.on('connect', () => setConnected(true))
    socket.on('disconnect', () => setConnected(false))
    socket.on('chat:message', (payload: Message) => {
      setMessages((prev) => [...prev, payload])
    })

    return () => {
      socket.disconnect()
      socketRef.current = null
    }
  }, [])

  const conversation = useMemo(() => {
    if (messages.length) return messages
    return [
      {
        id: 'seed-1',
        author: 'Mentor' as const,
        text: 'Lets set up a meeting next week to discuss your career goals.',
        timestamp: Date.now(),
      },
      {
        id: 'seed-2',
        author: 'Mentee' as const,
        text: 'That sounds great. How about Thursday afternoon?',
        timestamp: Date.now(),
      },
    ]
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return
    const payload: Message = {
      id: crypto.randomUUID(),
      author: senderRole,
      text: input.trim(),
      timestamp: Date.now(),
    }
    setInput('')
    socketRef.current?.emit('chat:message', payload)
  }

  return (
    <div className="mx-auto max-w-5xl px-6 pb-20 pt-12">
      <div className="rounded-[36px] border border-white/70 bg-white/90 p-8 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--slate)]">Chat</p>
            <h1 className="font-display mt-3 text-3xl font-semibold">Mentor Match conversation</h1>
          </div>
          <div className="flex items-center gap-3">
            <span
              className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] ${
                connected ? 'bg-[var(--mint)]/70 text-[var(--ink)]' : 'bg-[var(--coral)]/40 text-[var(--ink)]'
              }`}
            >
              {connected ? 'Connected' : 'Offline'}
            </span>
            <a
              className="rounded-full border border-[var(--ink)]/15 bg-white px-5 py-2 text-xs font-semibold text-[var(--ink)]"
              href="#/profile"
            >
              View profile
            </a>
          </div>
        </div>

        <div className="mt-8 grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/70 bg-[var(--fog)] p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--slate)]">Conversation</p>
                <p className="mt-2 text-sm text-[var(--slate)]">Mentor: Ari Patel - Mentee: Sasha Kim</p>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-[var(--slate)]">Send as</span>
                <select
                  className="rounded-full border border-[var(--ink)]/10 bg-white px-3 py-2 text-xs"
                  value={senderRole}
                  onChange={(event) => setSenderRole(event.target.value as Message['author'])}
                >
                  <option value="Mentor">Mentor</option>
                  <option value="Mentee">Mentee</option>
                </select>
              </div>
            </div>
            <div className="mt-6 max-h-[360px] space-y-3 overflow-y-auto pr-2">
              {conversation.map((message) => (
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
            {!connected ? (
              <p className="mt-3 text-xs text-[var(--slate)]">
                Start the socket server to enable real-time updates.
              </p>
            ) : null}
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-white/70 bg-white/90 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--slate)]">Calendar</p>
              <div className="mt-4 rounded-3xl border border-white/70 bg-[var(--fog)] p-4">
                <div className="flex items-center justify-between text-sm text-[var(--slate)]">
                  <span className="font-semibold text-[var(--ink)]">September 2025</span>
                  <span>GMT-5</span>
                </div>
                <div className="mt-4 grid grid-cols-7 gap-2 text-center text-xs">
                  {calendarDays.map((entry) => (
                    <div
                      key={entry.day}
                      className={`rounded-2xl px-2 py-3 ${entry.highlight ? 'bg-[var(--mint)]/70 text-[var(--ink)]' : 'bg-white text-[var(--slate)]'}`}
                    >
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--slate)]">{entry.day}</p>
                      <p className="mt-2 text-sm font-semibold">{entry.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--slate)]">Upcoming events</p>
              <div className="mt-4 space-y-3">
                {upcomingEvents.map((eventItem) => (
                  <div key={eventItem.id} className="rounded-2xl bg-[var(--fog)] px-4 py-3 text-sm">
                    <p className="font-semibold text-[var(--ink)]">{eventItem.title}</p>
                    <p className="mt-1 text-xs text-[var(--slate)]">
                      {eventItem.date} · {eventItem.time} · {eventItem.location}
                    </p>
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
