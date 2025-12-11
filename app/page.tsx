import { CharacterCard } from "@/components/CharacterCard";
import { StatusRibbon } from "@/components/StatusRibbon";
import { TimelinePanel } from "@/components/TimelinePanel";

const holoLines = Array.from({ length: 12 }, (_, idx) => idx);

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/10 via-transparent to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(0,246,255,0.35),transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 lg:flex-row">
        <section className="flex-1 space-y-8">
          <StatusRibbon />
          <header className="space-y-5">
            <p className="text-sm uppercase tracking-[0.45em] text-neon-cyan">
              Lab Node // Polaris Sector
            </p>
            <h1 className="text-5xl font-semibold leading-tight text-white drop-shadow-[0_0_18px_rgba(30,144,255,0.35)]">
              Observation Sequence: Cryo Nursery Sigma-12
            </h1>
            <p className="text-lg text-white/75">
              A static capture of the Aurora Labs deep-core facility. Monitors stream
              biometric telemetry while the chamber bathes in neon luminescence.
              Central subjects perform micro-reactions: upward curiosity, downward
              analysis, and a flash of surprise.
            </p>
          </header>

          <div className="perspective-1200 relative">
            <div className="card-tilt holo relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
              <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
                <div className="space-y-6">
                  <h2 className="text-xl uppercase tracking-[0.35em] text-neon-cyan">
                    Static Scene Render
                  </h2>
                  <div className="relative h-72 overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-black via-slate-900/60 to-black">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,246,255,0.18),transparent_55%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(30,144,255,0.24),transparent_60%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_85%,rgba(90,200,255,0.25),transparent_55%)]" />
                    <div className="absolute inset-x-12 top-16 h-32 rounded-full border border-neon-cyan/20" />
                    <div className="absolute inset-y-10 left-[22%] w-px bg-gradient-to-b from-transparent via-neon-cyan/60 to-transparent" />
                    <div className="absolute inset-y-10 right-[26%] w-px bg-gradient-to-b from-transparent via-neon-blue/60 to-transparent" />
                    <div className="absolute inset-x-10 bottom-10 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                    <div className="absolute left-8 top-16 flex flex-col items-center gap-3">
                      <div className="h-20 w-24 rounded-2xl bg-gradient-to-t from-slate-800 via-slate-900 to-black opacity-80" />
                      <div className="h-3 w-24 rounded-full bg-neon-cyan/40" />
                    </div>
                    <div className="absolute right-10 top-12 h-36 w-40 rounded-2xl border border-neon-blue/40 bg-black/60 backdrop-blur">
                      <div className="absolute inset-3 rounded-xl border border-white/5">
                        {holoLines.map((line) => (
                          <div
                            key={line}
                            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent"
                            style={{ top: `${(line / 11) * 100}%` }}
                          />
                        ))}
                        <div className="absolute inset-x-8 inset-y-6 rounded-full border border-neon-blue/40" />
                      </div>
                    </div>
                    <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-neon-cyan/60 bg-black/40" />
                  </div>
                </div>

                <TimelinePanel />
              </div>
            </div>
          </div>
        </section>

        <aside className="flex w-full flex-1 flex-col gap-6">
          <CharacterCard
            label="Subject A"
            subtitle="Baby Man"
            mood="Looking Up"
            description="The infantile research subject tilts his gaze toward the luminescent ceiling, mesmerized by cascading holograms and magnetic drones hovering overhead."
            avatar={<AvatarBabyMan />}
          />
          <CharacterCard
            label="Subject B"
            subtitle="Giant Grey Cat"
            mood="Looking Down"
            description="The feline guardian, a towering grey cat, gazes downward with contemplative focus, analyzing control panels embedded into the floor grid."
            avatar={<AvatarGiantCat />}
          />
          <CharacterCard
            label="Ambient Event"
            subtitle="Shock Pulse"
            mood="Surprised"
            description="A surprise energy flare ripples through the lab, bathing consoles in bright cyan. Both subjects momentarily react — sparks of astonishment captured in the telemetry."
            avatar={<AvatarPulse />}
          />
        </aside>
      </div>
    </main>
  );
}

function AvatarBabyMan() {
  return (
    <div className="relative flex h-16 w-16 items-center justify-center">
      <div className="absolute inset-2 rounded-full bg-gradient-to-br from-neon-blue/40 to-neon-cyan/20" />
      <div className="relative h-10 w-8 rounded-full bg-white/90 shadow-[0_0_20px_rgba(30,144,255,0.35)]">
        <div className="absolute inset-x-1 top-1 h-2 rounded-full bg-black/80" />
        <div className="absolute left-2 top-3 h-1 w-1 rounded-full bg-neon-blue" />
        <div className="absolute right-2 top-3 h-1 w-1 rounded-full bg-neon-blue" />
        <div className="absolute left-1 right-1 bottom-2 h-4 rounded-full bg-gradient-to-br from-white to-slate-100" />
      </div>
    </div>
  );
}

function AvatarGiantCat() {
  return (
    <div className="relative flex h-16 w-16 items-center justify-center">
      <div className="absolute inset-0 rounded-full border border-neon-blue/40 bg-black/70" />
      <div className="relative h-11 w-11 rounded-[18px] bg-gradient-to-br from-slate-400 via-gray-500 to-slate-700">
        <div className="absolute -top-2 left-1 h-4 w-3 rounded-t-full bg-gradient-to-br from-slate-300 to-slate-600" />
        <div className="absolute -top-2 right-1 h-4 w-3 rounded-t-full bg-gradient-to-br from-slate-300 to-slate-600" />
        <div className="absolute left-2 top-3 h-2 w-2 rounded-full bg-black/80 ring-2 ring-neon-blue/40" />
        <div className="absolute right-2 top-3 h-2 w-2 rounded-full bg-black/80 ring-2 ring-neon-blue/40" />
        <div className="absolute inset-x-2 bottom-3 h-3 rounded-full bg-gradient-to-r from-slate-500 to-slate-300" />
        <div className="absolute inset-x-3 bottom-1 h-1 rounded-full bg-black/60" />
      </div>
    </div>
  );
}

function AvatarPulse() {
  return (
    <div className="relative flex h-16 w-16 items-center justify-center">
      <div className="absolute inset-0 animate-ping rounded-full bg-neon-cyan/20" />
      <div className="relative h-10 w-10 rounded-full border border-neon-cyan/50 bg-black/80" />
      <div className="absolute h-16 w-16 rounded-full border border-dashed border-neon-blue/50" />
    </div>
  );
}
