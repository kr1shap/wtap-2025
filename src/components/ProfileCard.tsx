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

export default function ProfileCard({
  profile,
  onYes,
  onNo,
}: {
  profile: Profile;
  onYes: (p: Profile) => void;
  onNo: (p: Profile) => void;
}) {
  return (
    <div className="rounded-[28px] border border-white/70 bg-white/90 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[var(--sun)]/40">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-14 w-14 rounded-2xl bg-[var(--sun)]/30 flex items-center justify-center text-xl font-bold text-[var(--ink)]">
              {profile.name
                .split(" ")
                .map((s) => s[0])
                .slice(0, 2)
                .join("")}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-display font-semibold text-[var(--ink)]">
                  {profile.name}
                </h3>
                {profile.pronouns && (
                  <span className="text-xs text-[var(--slate)]">
                    {profile.pronouns}
                  </span>
                )}
              </div>
              <p className="text-xs text-[var(--slate)]">{profile.location}</p>
            </div>
          </div>

          <p className="text-sm text-[var(--slate)] mb-4">{profile.bio}</p>

          <div className="flex flex-wrap gap-2 mb-3">
            {profile.skills
              .split(", ")
              .slice(0, 3)
              .map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-[var(--fog)] px-3 py-1 text-xs text-[var(--slate)]"
                >
                  {s}
                </span>
              ))}
          </div>

          {profile.pronounPreferenceForMentees && (
            <div className="text-xs text-[var(--slate)] mb-3">
              <span className="font-semibold">Pronoun preference:</span>{" "}
              {profile.pronounPreferenceForMentees}
            </div>
          )}

          {profile.linkedin && (
            <div className="text-xs">
              <a
                href={`https://${profile.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--sun)] font-semibold hover:underline"
              >
                View LinkedIn →
              </a>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-[var(--sun)]/30 text-xs font-semibold text-[var(--ink)]">
            {profile.role}
          </span>
          <div className="flex flex-col gap-2 mt-2">
            <button
              onClick={() => onYes(profile)}
              className="rounded-full bg-[var(--sun)] text-[var(--ink)] px-6 py-2 text-sm font-semibold shadow-md transition-all duration-300 hover:shadow-lg hover:bg-[var(--sun)]/90 hover:scale-105 active:scale-95"
            >
              Yes
            </button>
            <button
              onClick={() => onNo(profile)}
              className="rounded-full border border-[var(--ink)]/20 text-[var(--ink)] px-6 py-2 text-sm font-semibold bg-white transition-all duration-300 hover:bg-[var(--fog)] hover:border-[var(--ink)]/40 active:scale-95"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
