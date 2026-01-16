import { useEffect, useState } from 'react'
import ChatPage from './pages/ChatPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'

type RouteState = {
  path: string
  section: string
}

const parseHash = (): RouteState => {
  const raw = window.location.hash.replace(/^#/, '')
  const [pathPart, queryString] = raw.split('?')
  const path = pathPart || '/'
  const params = new URLSearchParams(queryString || '')
  const section = params.get('section') || ''
  return { path, section }
}

export default function App() {
  const [route, setRoute] = useState<RouteState>(() => parseHash())

  useEffect(() => {
    const handleHashChange = () => setRoute(parseHash())
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const page = route.path
  const showHome = page === '/' || page === ''

  return (
    <div className="min-h-screen bg-[var(--sand)] text-[var(--ink)]">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 pb-4 pt-8">
        <a className="flex items-center gap-3" href="#/">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--ink)] text-sm font-semibold tracking-wide text-white shadow-lg">
            MM
          </span>
          <span>
            <span className="font-display block text-lg font-semibold">Mentor Match</span>
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--slate)]">Swipe for wisdom</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--slate)] md:flex">
          <a className="transition hover:text-[var(--ink)]" href="#/">
            Home
          </a>
          <a className="transition hover:text-[var(--ink)]" href="#/?section=features">
            Features
          </a>
          <a className="transition hover:text-[var(--ink)]" href="#/?section=how-it-works">
            How it works
          </a>
          <a className="transition hover:text-[var(--ink)]" href="#/?section=events">
            Events
          </a>
          <a className="transition hover:text-[var(--ink)]" href="#/profile">
            Profile
          </a>
          <a className="transition hover:text-[var(--ink)]" href="#/chat">
            Chat
          </a>
        </nav>

        <a
          href="#/profile"
          className="group flex items-center gap-3 rounded-full border border-white/60 bg-white/80 px-2 py-1 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <span className="hidden text-xs font-semibold text-[var(--slate)] sm:block">Your card</span>
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ink)] text-sm font-semibold text-white">
            CM
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-[var(--mint)]" />
          </span>
        </a>
      </header>

      <main>
        {showHome ? <HomePage section={route.section} /> : null}
        {page === '/profile' ? <ProfilePage /> : null}
        {page === '/chat' ? <ChatPage /> : null}
      </main>
    </div>
  )
}
