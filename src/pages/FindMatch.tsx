import { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";

type Profile = {
  id: string;
  name: string;
  role: "Mentor" | "Mentee";
  bio: string;
  skills: string;
  location: string;
  pronouns?: string;
  pronounPreferenceForMentees?: string;
  linkedin?: string;
};

type MatchState = {
  cardId: string;
  matched: boolean;
  removing: boolean;
  direction: "yes" | "no";
} | null;

const sampleProfiles: Profile[] = [
  {
    id: "mentor-1",
    name: "Riya Gomez",
    role: "Mentor",
    bio: "Senior data analyst who loves helping new grads turn insights into stories.",
    skills: "Analytics, Storytelling, SQL",
    location: "Chicago",
    pronouns: "She/Her",
    pronounPreferenceForMentees: "She/Her",
    linkedin: "linkedin.com/in/riyagomez",
  },
  {
    id: "mentee-1",
    name: "Jordan Lee",
    role: "Mentee",
    bio: "New grad aiming to break into product marketing with strong research chops.",
    skills: "Market research, Go-to-market, Presentation",
    location: "Seattle",
    pronouns: "They/Them",
    pronounPreferenceForMentees: "Any",
    linkedin: "linkedin.com/in/jordanlee",
  },
  {
    id: "mentor-2",
    name: "Nia Patel",
    role: "Mentor",
    bio: "Engineering lead focused on leveling up junior developers and career paths.",
    skills: "Frontend, Career planning, Leadership",
    location: "Toronto",
    pronouns: "She/Her",
    pronounPreferenceForMentees: "Ask me",
    linkedin: "linkedin.com/in/niapatel",
  },
];

export default function FindMatch() {
  const [userRole] = useState<"Mentor" | "Mentee">(() => {
    const r = localStorage.getItem("mm_user_role");
    return r === "Mentor" || r === "Mentee" ? r : "Mentor";
  });

  const [list, setList] = useState<Profile[]>(sampleProfiles);
  const [matchState, setMatchState] = useState<MatchState>(null);
  const [toast, setToast] = useState<{ msg: string; show: boolean }>({
    msg: "",
    show: false,
  });
  const [confetti, setConfetti] = useState<{ id: string }[]>([]);

  useEffect(() => {
    if (toast.show) {
      const t = setTimeout(() => setToast({ msg: "", show: false }), 2500);
      return () => clearTimeout(t);
    }
  }, [toast]);

  const generateConfetti = () => {
    const pieces = Array.from({ length: 12 }, (_, i) => ({
      id: `confetti-${Date.now()}-${i}`,
    }));
    setConfetti(pieces);
    setTimeout(() => setConfetti([]), 1000);
  };

  const handleYes = (p: Profile) => {
    if (p.role === userRole) {
      setToast({ msg: `Can't match same role`, show: true });
      return;
    }
    setMatchState({
      cardId: p.id,
      matched: true,
      removing: false,
      direction: "yes",
    });
    generateConfetti();
    setToast({ msg: `Match added with ${p.name}!`, show: true });
  };

  const handleNo = (p: Profile) => {
    setMatchState({
      cardId: p.id,
      matched: false,
      removing: true,
      direction: "no",
    });
    setTimeout(() => {
      setList((l) => l.filter((x) => x.id !== p.id));
      setMatchState(null);
    }, 600);
  };

  const handleContinue = () => {
    if (matchState?.cardId) {
      setMatchState((prev) => (prev ? { ...prev, removing: true } : null));
      setTimeout(() => {
        setList((l) => l.filter((x) => x.id !== matchState.cardId));
        setMatchState(null);
      }, 600);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-end justify-between gap-6 mb-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--slate)]">
            Swipe deck
          </p>
          <h1 className="font-display mt-3 text-4xl font-semibold">
            Find a Match
          </h1>
          <p className="mt-2 text-sm text-[var(--slate)]">
            Curated cards — say yes to connect with mentors or mentees.
          </p>
        </div>
        <span className="rounded-full bg-[var(--sun)]/20 px-4 py-2 text-xs font-semibold text-[var(--ink)] whitespace-nowrap">
          {userRole}
        </span>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 perspective">
        {list.map((p) => (
          <div key={p.id} className="relative">
            <div
              className={`transition-all duration-500 ${
                matchState?.cardId === p.id && matchState?.removing
                  ? matchState.direction === "yes"
                    ? "slide-out"
                    : "slide-out-no"
                  : ""
              }`}
            >
              <ProfileCard profile={p} onYes={handleYes} onNo={handleNo} />
            </div>

            {matchState?.cardId === p.id &&
              matchState?.matched &&
              !matchState?.removing && (
                <div className="absolute inset-0 flex items-center justify-center rounded-[28px]">
                  <div className="rounded-[28px] border border-white/70 bg-white/98 p-8 shadow-2xl flex flex-col items-center gap-6 scale-in">
                    <div className="relative">
                      <div className="h-20 w-20 rounded-full bg-[var(--sun)] text-[var(--ink)] flex items-center justify-center text-4xl font-bold pop-in pulse-ring">
                        ✓
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-display text-2xl font-semibold mb-2">
                        It's a match!
                      </div>
                      <div className="text-sm text-[var(--slate)]">
                        You and <span className="font-semibold">{p.name}</span>{" "}
                        are now connected.
                      </div>
                    </div>
                    <button
                      onClick={handleContinue}
                      className="mt-4 rounded-full bg-[var(--sun)] text-[var(--ink)] px-8 py-2 text-sm font-semibold shadow-md transition hover:shadow-lg hover:bg-[var(--sun)]/90"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}
          </div>
        ))}
      </div>

      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="confetti-piece fixed pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: "50%",
            width: "8px",
            height: "8px",
            backgroundColor: [
              "var(--sun)",
              "var(--mint)",
              "var(--coral)",
              "var(--sky)",
            ][Math.floor(Math.random() * 4)],
            borderRadius: "50%",
            opacity: 1,
          }}
        />
      ))}

      {toast.show && (
        <div className="fixed left-1/2 top-20 -translate-x-1/2 z-50">
          <div className="rounded-full bg-[var(--sun)] text-[var(--ink)] px-6 py-3 shadow-lg font-semibold text-sm fade-in-up">
            {toast.msg}
          </div>
        </div>
      )}
    </div>
  );
}
