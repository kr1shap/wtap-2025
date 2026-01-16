import { useMemo, useState } from 'react'

const suggestions = [
  {
    id: 'mentor-1',
    name: 'Riya Gomez',
    role: 'Mentor',
    bio: 'Senior data analyst who loves helping new grads turn insights into stories.',
    skills: ['Analytics', 'Storytelling', 'SQL'],
    location: 'Chicago',
  },
  {
    id: 'mentee-1',
    name: 'Jordan Lee',
    role: 'Mentee',
    bio: 'New grad aiming to break into product marketing with strong research chops.',
    skills: ['Market research', 'Go-to-market', 'Presentation'],
    location: 'Seattle',
  },
  {
    id: 'mentor-2',
    name: 'Nia Patel',
    role: 'Mentor',
    bio: 'Engineering lead focused on leveling up junior developers and career paths.',
    skills: ['Frontend', 'Career planning', 'Leadership'],
    location: 'Toronto',
  },
]

const initialProfile = {
  name: 'Camille Ray',
  pronouns: 'She/Her',
  pronounPreferenceForMentees: 'Ask me',
  linkedin: 'linkedin.com/in/camilleray',
  role: 'Mentor',
  bio: 'Product manager helping new grads build confidence, roadmaps, and stakeholder fluency.',
  skills: 'Roadmapping, Hiring prep, Stakeholder management',
  location: 'Austin',
}

function formatIcsDate(date: Date) {
  const pad = (value: number) => String(value).padStart(2, '0')
  return `${date.getUTCFullYear()}${pad(date.getUTCMonth() + 1)}${pad(date.getUTCDate())}T${pad(
    date.getUTCHours(),
  )}${pad(date.getUTCMinutes())}00Z`
}

export default function ProfilePage() {
  const [profile, setProfile] = useState(initialProfile)
  const [draft, setDraft] = useState(initialProfile)
  const [selectedId, setSelectedId] = useState(suggestions[0].id)
  const [matchMessage, setMatchMessage] = useState('')
  const [meetingDate, setMeetingDate] = useState('')
  const [meetingTime, setMeetingTime] = useState('')
  const [scheduleError, setScheduleError] = useState('')

  const selectedProfile = useMemo(
    () => suggestions.find((profileItem) => profileItem.id === selectedId) || suggestions[0],
    [selectedId],
  )

  const skillChips = useMemo(
    () =>
      profile.skills
        .split(',')
        .map((skill) => skill.trim())
        .filter(Boolean),
    [profile.skills],
  )

  const handleSave = () => {
    setProfile(draft)
  }

  const handleMatch = () => {
    const focus = selectedProfile.skills.slice(0, 2).join(' and ')
    setMatchMessage(`You have been matched with ${selectedProfile.name} based on ${focus}.`)
  }

  const handleIcsDownload = () => {
    if (!meetingDate || !meetingTime) {
      setScheduleError('Pick a date and time before downloading the invite.')
      return
    }

    setScheduleError('')
    const start = new Date(`${meetingDate}T${meetingTime}`)
    const end = new Date(start.getTime() + 60 * 60 * 1000)
    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//MentorMatch//EN',
      'BEGIN:VEVENT',
      `UID:${crypto.randomUUID()}`,
      `DTSTAMP:${formatIcsDate(new Date())}`,
      `DTSTART:${formatIcsDate(start)}`,
      `DTEND:${formatIcsDate(end)}`,
      'SUMMARY:Mentorship Meeting',
      'DESCRIPTION:Career development session',
      'LOCATION:Coffee Shop',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\n')

    const blob = new Blob([ics], { type: 'text/calendar' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'mentorship-meeting.ics'
    link.click()
    URL.revokeObjectURL(link.href)
  }

  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 pt-12">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[36px] border border-white/70 bg-white/90 p-8 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--slate)]">Editable profile</p>
              <h1 className="font-display mt-3 text-3xl font-semibold">Your mentor card</h1>
            </div>
            <span className="rounded-full bg-[var(--mint)]/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--ink)]">
              {profile.role}
            </span>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex justify-center">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Profile"
                className="h-20 w-20 rounded-full object-cover"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--slate)]">Name</label>
              <input
                className="mt-2 w-full rounded-2xl border border-[var(--ink)]/10 bg-white px-4 py-3 text-sm"
                value={draft.name}
                onChange={(event) => setDraft({ ...draft, name: event.target.value })}
              />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--slate)]">Pronouns</label>
              <select
                className="mt-2 w-full rounded-2xl border border-[var(--ink)]/10 bg-white px-4 py-3 text-sm"
                value={draft.pronouns}
                onChange={(event) => setDraft({ ...draft, pronouns: event.target.value })}
              >
                <option value="She/Her">She/Her</option>
                <option value="He/Him">He/Him</option>
                <option value="They/Them">They/Them</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--slate)]">Pronoun preference for matches</label>
              <select
                className="mt-2 w-full rounded-2xl border border-[var(--ink)]/10 bg-white px-4 py-3 text-sm"
                value={draft.pronounPreferenceForMentees}
                onChange={(event) => setDraft({ ...draft, pronounPreferenceForMentees: event.target.value })}
              >
                <option value="Use my pronouns">Use my pronouns</option>
                <option value="Ask me">Ask me</option>
                <option value="No preference">No preference</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--slate)]">Role</label>
              <select
                className="mt-2 w-full rounded-2xl border border-[var(--ink)]/10 bg-white px-4 py-3 text-sm"
                value={draft.role}
                onChange={(event) => setDraft({ ...draft, role: event.target.value })}
              >
                <option value="Mentor">Mentor</option>
                <option value="Mentee">Mentee</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--slate)]">Bio</label>
              <textarea
                className="mt-2 min-h-[120px] w-full rounded-2xl border border-[var(--ink)]/10 bg-white px-4 py-3 text-sm"
                value={draft.bio}
                onChange={(event) => setDraft({ ...draft, bio: event.target.value })}
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--slate)]">Skills</label>
              <input
                className="mt-2 w-full rounded-2xl border border-[var(--ink)]/10 bg-white px-4 py-3 text-sm"
                value={draft.skills}
                onChange={(event) => setDraft({ ...draft, skills: event.target.value })}
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--slate)]">Location</label>
              <input
                className="mt-2 w-full rounded-2xl border border-[var(--ink)]/10 bg-white px-4 py-3 text-sm"
                value={draft.location}
                onChange={(event) => setDraft({ ...draft, location: event.target.value })}
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--slate)]">LinkedIn</label>
              <input
                className="mt-2 w-full rounded-2xl border border-[var(--ink)]/10 bg-white px-4 py-3 text-sm"
                value={draft.linkedin}
                onChange={(event) => setDraft({ ...draft, linkedin: event.target.value })}
              />
            </div>
            <button
              className="w-full rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-white shadow-lg"
              onClick={handleSave}
              type="button"
            >
              Save profile
            </button>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="rounded-[32px] border border-white/70 bg-white/90 p-6 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--slate)]">Preview</p>
            <div className="mt-4 rounded-3xl border border-white/70 bg-[var(--fog)] p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[var(--sun)]/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--ink)]">
                  {profile.role}
                </span>
              </div>

              <div className="mt-4 flex items-start justify-between">
                <div className="pr-4">
                  <h2 className="font-display text-2xl font-semibold">{profile.name}</h2>
                  <p className="text-xs text-[var(--slate)]">{profile.pronouns}</p>
                  <p className="text-xs text-[var(--slate)]">{profile.location}</p>
                  <p className="mt-2 text-xs text-[var(--slate)]">Preference for matches: {profile.pronounPreferenceForMentees}</p>
                </div>
                <div className="flex-shrink-0">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Profile"
                    className="h-20 w-20 rounded-full object-cover"
                  />
                </div>
              </div>
              <p className="mt-4 text-sm text-[var(--slate)]">{profile.bio}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {skillChips.map((skill) => (
                  <span key={skill} className="rounded-full bg-white px-3 py-1 text-[10px]">
                    {skill}
                  </span>
                ))}
              </div>
              {profile.linkedin ? (
                <p className="mt-4 text-sm">
                  <a
                    className="text-[var(--ink)] font-semibold underline"
                    href={profile.linkedin.startsWith('http') ? profile.linkedin : `https://${profile.linkedin}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {profile.linkedin}
                  </a>
                </p>
              ) : null}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/70 bg-white/90 p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--slate)]">Matching</p>
                <h2 className="font-display mt-3 text-2xl font-semibold">Suggested matches</h2>
              </div>
              <button
                className="rounded-full bg-[var(--ink)] px-4 py-2 text-xs font-semibold text-white"
                onClick={handleMatch}
                type="button"
              >
                Match
              </button>
            </div>
            {matchMessage ? (
              <div className="mt-4 rounded-2xl bg-[var(--mint)]/50 px-4 py-3 text-sm text-[var(--ink)]">
                {matchMessage}
              </div>
            ) : null}
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {suggestions.map((profileItem) => (
                <button
                  key={profileItem.id}
                  className={`rounded-2xl border border-white/70 px-4 py-3 text-left text-sm transition ${
                    selectedId === profileItem.id ? 'bg-[var(--sky)]/40' : 'bg-white'
                  }`}
                  onClick={() => setSelectedId(profileItem.id)}
                  type="button"
                >
                  <p className="font-semibold">{profileItem.name}</p>
                  <p className="text-xs text-[var(--slate)]">
                    {profileItem.role} - {profileItem.location}
                  </p>
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-2xl bg-[var(--fog)] px-4 py-4 text-sm text-[var(--slate)]">
              <p className="font-semibold text-[var(--ink)]">Selected profile</p>
              <p className="mt-2">{selectedProfile.bio}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {selectedProfile.skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-white px-3 py-1">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/70 bg-white/90 p-6 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--slate)]">Scheduling</p>
            <h2 className="font-display mt-3 text-2xl font-semibold">Generate a meeting invite</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--slate)]">Date</label>
                <input
                  className="mt-2 w-full rounded-2xl border border-[var(--ink)]/10 bg-white px-4 py-3 text-sm"
                  type="date"
                  value={meetingDate}
                  onChange={(event) => setMeetingDate(event.target.value)}
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--slate)]">Time</label>
                <input
                  className="mt-2 w-full rounded-2xl border border-[var(--ink)]/10 bg-white px-4 py-3 text-sm"
                  type="time"
                  value={meetingTime}
                  onChange={(event) => setMeetingTime(event.target.value)}
                />
              </div>
            </div>
            {scheduleError ? (
              <p className="mt-3 text-xs text-[var(--berry)]">{scheduleError}</p>
            ) : null}
            <button
              className="mt-5 w-full rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-white"
              onClick={handleIcsDownload}
              type="button"
            >
              Download .ics
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
