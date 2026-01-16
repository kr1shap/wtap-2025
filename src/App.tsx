const stats = [
  { label: 'Mentor-ready profiles', value: '12k+' },
  { label: 'Average matches per week', value: '3-5' },
  { label: 'Events hosted monthly', value: '120+' },
]

const steps = [
  {
    title: 'Build your quest card',
    description:
      'Create a profile with your bio, expertise, and mentorship goals. Pick mentor or mentee and set availability.',
  },
  {
    title: 'Swipe purposeful matches',
    description:
      'Get 3-5 curated matches at a time, plus event-based pairings to keep discovery fresh without overload.',
  },
  {
    title: 'Chat, schedule, grow',
    description:
      'Use guided conversation starters, then sync time zones and download .ics files for calendar-ready sessions.',
  },
]

const features = [
  {
    title: 'Profile Creation',
    description:
      'Bio, expertise, mentorship goals, and role preference in one sleek card.',
    bullets: ['Mentor or mentee toggle', 'Location + availability filters', 'Gamified stat badges'],
    accent: 'from-[#ffe0b8] via-white to-[#ffd788]'
  },
  {
    title: 'Matching Algorithm',
    description:
      'Skill, interest, and location matching with a mindful 3-5 card stack.',
    bullets: ['Mutual goal alignment', 'Event-based boosts', 'Swipe-friendly queues'],
    accent: 'from-[#b8f3dc] via-white to-[#c8f9e6]'
  },
  {
    title: 'Chat Feature',
    description:
      'Threaded chats with prompts tailored to mentorship areas.',
    bullets: ['Conversation starters', 'Goal-setting prompts', 'Quick follow-up nudges'],
    accent: 'from-[#9ed7ff] via-white to-[#bfe7ff]'
  },
  {
    title: 'Scheduling',
    description:
      'Time-zone aware scheduling with downloadable .ics files.',
    bullets: ['Availability syncing', 'Calendar integrations', 'Reminders built-in'],
    accent: 'from-[#ffb1a8] via-white to-[#ffd1cb]'
  },
  {
    title: 'Mentorship Tracking',
    description:
      'Optional progress tracking for goals, milestones, and action items.',
    bullets: ['Shared check-ins', 'Progress snapshots', 'Future release'],
    accent: 'from-[#f2d7ff] via-white to-[#f6e8ff]'
  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--sand)] text-[var(--ink)]">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,215,136,0.6),transparent_65%)] blur-2xl" />
        <div className="pointer-events-none absolute top-20 right-10 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(184,243,220,0.8),transparent_70%)] blur-2xl" />
        <div className="pointer-events-none absolute bottom-10 left-10 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(158,215,255,0.6),transparent_70%)] blur-2xl" />

        <div className="mx-auto max-w-6xl px-6 pb-20 pt-8">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--ink)] text-sm font-semibold tracking-wide text-white shadow-lg">
                MM
              </div>
              <div>
                <p className="font-display text-lg font-semibold">Mentor Match</p>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--slate)]">
                  Swipe for wisdom
                </p>
              </div>
            </div>

            <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--slate)] md:flex">
              <a className="transition hover:text-[var(--ink)]" href="#features">
                Features
              </a>
              <a className="transition hover:text-[var(--ink)]" href="#how-it-works">
                How it works
              </a>
              <a className="transition hover:text-[var(--ink)]" href="#events">
                Events
              </a>
              <a className="transition hover:text-[var(--ink)]" href="#profile">
                Profile
              </a>
            </nav>

            <a
              href="#profile"
              className="group flex items-center gap-3 rounded-full border border-white/60 bg-white/80 px-2 py-1 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="hidden text-xs font-semibold text-[var(--slate)] sm:block">Your card</span>
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ink)] text-sm font-semibold text-white">
                CM
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-[var(--mint)]" />
              </span>
            </a>
          </header>

          <section className="mt-16 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-[var(--slate)] shadow-sm">
                Mentor Match beta
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--berry)]" />
                Newgrad-first
              </div>
              <h1 className="font-display mt-6 text-4xl font-semibold leading-tight text-[var(--ink)] sm:text-5xl">
                Swipe into the mentor circle that actually fits.
              </h1>
              <p className="mt-5 max-w-xl text-base text-[var(--slate)] sm:text-lg">
                Mentor Match is a sleek webapp for new grads to find mentors through curated events,
                swipe-based discovery, and real-time chat. Build your card, match with intent, and
                schedule sessions without the overwhelm.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl">
                  Join the waitlist
                </button>
                <button className="rounded-full border border-[var(--ink)]/15 bg-white/70 px-6 py-3 text-sm font-semibold text-[var(--ink)] shadow-sm transition hover:-translate-y-0.5">
                  Explore matches
                </button>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-sm">
                    <p className="font-display text-2xl font-semibold">{stat.value}</p>
                    <p className="text-xs text-[var(--slate)]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-4 h-24 w-24 rounded-full border border-dashed border-[var(--sun)]/70" />
              <div className="absolute -right-6 bottom-6 h-20 w-20 rounded-full border border-dashed border-[var(--sky)]/70" />
              <div className="relative h-[460px]">
                <div className="absolute right-10 top-6 w-72 -rotate-6 rounded-3xl border border-white/70 bg-white/90 p-5 shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[var(--mint)]/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--ink)]">
                      Mentor
                    </span>
                    <span className="text-xs font-semibold text-[var(--slate)]">Lvl 12</span>
                  </div>
                  <h3 className="font-display mt-4 text-xl font-semibold">Ari Patel</h3>
                  <p className="text-xs text-[var(--slate)]">Product Design • SF</p>
                  <div className="mt-4 rounded-2xl bg-[var(--fog)] px-3 py-2 text-xs">
                    <p className="font-semibold text-[var(--ink)]">Mentor Traits</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="rounded-full bg-white px-2 py-1 text-[10px]">Portfolio XP</span>
                      <span className="rounded-full bg-white px-2 py-1 text-[10px]">UX Strategy</span>
                      <span className="rounded-full bg-white px-2 py-1 text-[10px]">Hiring Prep</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs text-[var(--slate)]">
                    <span>Match boost</span>
                    <span className="font-semibold text-[var(--ink)]">92%</span>
                  </div>
                </div>

                <div className="absolute left-6 top-16 w-72 rotate-3 rounded-3xl border border-white/70 bg-white/90 p-5 shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[var(--sun)]/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--ink)]">
                      Mentee
                    </span>
                    <span className="text-xs font-semibold text-[var(--slate)]">Lvl 4</span>
                  </div>
                  <h3 className="font-display mt-4 text-xl font-semibold">Sasha Kim</h3>
                  <p className="text-xs text-[var(--slate)]">Data Science • NYC</p>
                  <div className="mt-4 rounded-2xl bg-[var(--fog)] px-3 py-2 text-xs">
                    <p className="font-semibold text-[var(--ink)]">Quest Goals</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="rounded-full bg-white px-2 py-1 text-[10px]">Interview Prep</span>
                      <span className="rounded-full bg-white px-2 py-1 text-[10px]">Portfolio Revamp</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs text-[var(--slate)]">
                    <span>Mutual fit</span>
                    <span className="font-semibold text-[var(--ink)]">88%</span>
                  </div>
                </div>

                <div className="absolute bottom-0 right-2 w-72 rotate-1 rounded-3xl border border-white/70 bg-white/90 p-5 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[var(--sky)]/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--ink)]">
                      Duo Quest
                    </span>
                    <span className="text-xs font-semibold text-[var(--slate)]">Event Match</span>
                  </div>
                  <h3 className="font-display mt-4 text-xl font-semibold">UX Lab Night</h3>
                  <p className="text-xs text-[var(--slate)]">Pairings based on shared themes</p>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="h-10 w-10 rounded-2xl bg-[var(--mint)]" />
                    <span className="h-10 w-10 rounded-2xl bg-[var(--sun)]" />
                    <span className="h-10 w-10 rounded-2xl bg-[var(--coral)]" />
                    <span className="text-xs font-semibold text-[var(--slate)]">+5 more</span>
                  </div>
                  <div className="mt-4 rounded-2xl bg-[var(--fog)] px-3 py-2 text-xs text-[var(--slate)]">
                    Swipe to join the next round.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--slate)]">How it works</p>
            <h2 className="font-display mt-3 text-3xl font-semibold">Mentorship, but make it effortless.</h2>
          </div>
          <p className="max-w-xl text-sm text-[var(--slate)]">
            Every match is designed to feel like a co-op game: cards, levels, and shared quests that keep
            momentum steady from intro to follow-up.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--slate)]">
                Step {index + 1}
              </p>
              <h3 className="font-display mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm text-[var(--slate)]">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 pb-6">
        <div className="rounded-[32px] border border-white/70 bg-white/70 p-10 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--slate)]">Core features</p>
              <h2 className="font-display mt-3 text-3xl font-semibold">Every feature designed for focus.</h2>
            </div>
            <p className="max-w-xl text-sm text-[var(--slate)]">
              Get the essentials for thoughtful mentorship: rich profiles, mindful matching, and seamless scheduling
              without leaving the chat.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-sm"
              >
                <div className={`h-10 w-10 rounded-2xl bg-gradient-to-br ${feature.accent}`} />
                <h3 className="font-display mt-4 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm text-[var(--slate)]">{feature.description}</p>
                <ul className="mt-4 space-y-2 text-xs text-[var(--slate)]">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[var(--ink)]/70" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[32px] border border-white/70 bg-white/90 p-8 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--slate)]">Event-driven</p>
            <h2 className="font-display mt-4 text-3xl font-semibold">Meet mentors at curated events.</h2>
            <p className="mt-4 text-sm text-[var(--slate)]">
              Join pop-up sessions, industry mixers, and resume labs. Every event spawns a fresh swipe deck
              so you can connect while the energy is high.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[var(--fog)] p-4 text-sm">
                <p className="font-semibold text-[var(--ink)]">Live Sessions</p>
                <p className="mt-2 text-xs text-[var(--slate)]">Small-room breakout pairs you with mentors in real time.</p>
              </div>
              <div className="rounded-2xl bg-[var(--fog)] p-4 text-sm">
                <p className="font-semibold text-[var(--ink)]">Swipe Backstage</p>
                <p className="mt-2 text-xs text-[var(--slate)]">Event-only cards disappear after 48 hours for focus.</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="rounded-[28px] border border-white/70 bg-white/90 p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--slate)]">Swipe deck</p>
                  <p className="font-display mt-2 text-2xl font-semibold">3-5 matches per wave.</p>
                </div>
                <span className="rounded-full bg-[var(--berry)]/10 px-3 py-1 text-xs font-semibold text-[var(--berry)]">
                  Focus mode
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded-full border border-[var(--ink)]/10 bg-[var(--fog)] px-3 py-1 text-xs">Shared skills</span>
                <span className="rounded-full border border-[var(--ink)]/10 bg-[var(--fog)] px-3 py-1 text-xs">Same time zone</span>
                <span className="rounded-full border border-[var(--ink)]/10 bg-[var(--fog)] px-3 py-1 text-xs">Goals aligned</span>
              </div>
            </div>
            <div className="rounded-[28px] border border-white/70 bg-white/90 p-6 shadow-lg">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--slate)]">Chat starters</p>
              <div className="mt-4 space-y-3 text-sm text-[var(--slate)]">
                <div className="rounded-2xl bg-[var(--fog)] px-4 py-3">
                  “What mentorship goal would make this quarter a win for you?”
                </div>
                <div className="rounded-2xl bg-[var(--fog)] px-4 py-3">
                  “Which project are you most excited to show a mentor?”
                </div>
                <div className="rounded-2xl bg-[var(--fog)] px-4 py-3">
                  “What advice would unblock you right now?”
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="profile" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-[36px] border border-white/70 bg-white/90 p-10 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--slate)]">Profile preview</p>
              <h2 className="font-display mt-3 text-3xl font-semibold">Your Mentor Match card.</h2>
            </div>
            <button className="rounded-full border border-[var(--ink)]/15 bg-white px-5 py-2 text-xs font-semibold text-[var(--ink)]">
              Edit profile
            </button>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-white/70 bg-[var(--fog)] p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[var(--berry)]/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--berry)]">
                  Mentor
                </span>
                <span className="text-xs font-semibold text-[var(--slate)]">Level 9</span>
              </div>
              <h3 className="font-display mt-4 text-2xl font-semibold">Camille Ray</h3>
              <p className="text-xs text-[var(--slate)]">Product Management • Austin</p>
              <p className="mt-4 text-sm text-[var(--slate)]">
                Passionate about helping new grads ship their first roadmap and build confidence in cross-functional teams.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-white px-3 py-1 text-[10px]">Roadmap Design</span>
                <span className="rounded-full bg-white px-3 py-1 text-[10px]">Career Switch</span>
                <span className="rounded-full bg-white px-3 py-1 text-[10px]">Leadership</span>
              </div>
              <div className="mt-5 rounded-2xl bg-white px-4 py-3 text-xs text-[var(--slate)]">
                Availability: Tue + Thu evenings • GMT-5
              </div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/70 bg-white/90 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--slate)]">Chat preview</p>
                <div className="mt-3 space-y-3 text-sm">
                  <div className="rounded-2xl bg-[var(--fog)] px-4 py-3 text-[var(--slate)]">
                    “I can help you prep for PM interviews and scope portfolio projects.”
                  </div>
                  <div className="rounded-2xl bg-[var(--mint)]/60 px-4 py-3 text-[var(--ink)]">
                    “Amazing! I want to focus on stakeholder management.”
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/90 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--slate)]">Mentorship tracking</p>
                <p className="mt-3 text-sm text-[var(--slate)]">
                  Track goals, action items, and progress snapshots. Mark sessions complete and keep momentum.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-[var(--fog)] px-3 py-1">Goal: First PM offer</span>
                  <span className="rounded-full bg-[var(--fog)] px-3 py-1">Milestone: Interview loop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-[36px] border border-white/70 bg-[var(--ink)] px-8 py-12 text-white shadow-2xl">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">Ready to match?</p>
              <h2 className="font-display mt-3 text-3xl font-semibold">Find your mentor squad in minutes.</h2>
              <p className="mt-3 max-w-xl text-sm text-white/70">
                Join the beta, meet mentors in your city, and unlock a consistent support system for your career.
              </p>
            </div>
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--ink)] shadow-lg transition hover:-translate-y-0.5">
              Get early access
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
