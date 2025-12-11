import { ReactNode } from "react";

interface CharacterCardProps {
  label: string;
  subtitle: string;
  mood: string;
  description: string;
  avatar: ReactNode;
}

export function CharacterCard({
  label,
  subtitle,
  mood,
  description,
  avatar
}: CharacterCardProps) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl transition duration-500 hover:border-neon-cyan/60 hover:bg-white/10">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-sm uppercase tracking-[0.35em] text-white/70">{label}</h2>
          <p className="mt-1 text-3xl font-semibold text-white">{subtitle}</p>
        </div>
        <div className="ambient-glow relative flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-neon-blue/30 to-neon-cyan/20">
          {avatar}
        </div>
      </div>
      <p className="mt-6 text-sm font-semibold uppercase tracking-[0.35em] text-neon-cyan">
        Status: {mood}
      </p>
      <p className="mt-3 text-base leading-relaxed text-white/80">{description}</p>
      <div className="mt-6 grid gap-3 text-xs uppercase text-white/60 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-black/30 p-3">
          <p className="text-[0.6rem] tracking-[0.25em]">Vitals</p>
          <p className="mt-2 text-white/90">Stable</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/30 p-3">
          <p className="text-[0.6rem] tracking-[0.25em]">Focus</p>
          <p className="mt-2 text-white/90">Cognitive Scan</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/30 p-3">
          <p className="text-[0.6rem] tracking-[0.25em]">Signal</p>
          <p className="mt-2 text-white/90">Active</p>
        </div>
      </div>
    </article>
  );
}
