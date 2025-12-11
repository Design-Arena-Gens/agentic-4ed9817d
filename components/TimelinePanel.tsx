const events = [
  {
    time: "00:00:00",
    title: "Scene Stabilized",
    description: "Cryo nursery sealed. Neon arrays online. Ambient drones calibrated.",
    indicator: "Stable"
  },
  {
    time: "00:00:04",
    title: "Baby Man // Looking Up",
    description: "Subject A elevates gaze 17°. Eye tracking engaged with overhead holo-display.",
    indicator: "Curiosity"
  },
  {
    time: "00:00:07",
    title: "Giant Grey Cat // Looking Down",
    description: "Subject B scans floor console. Tail latent. Biometric calm.",
    indicator: "Analysis"
  },
  {
    time: "00:00:08",
    title: "Shock Pulse // Surprised",
    description: "Unexpected energy pulse cascades. Both subjects display startled micro-expression.",
    indicator: "Alert"
  }
];

export function TimelinePanel() {
  return (
    <section className="relative flex flex-col gap-6">
      <h2 className="text-xl uppercase tracking-[0.35em] text-white/70">Telemetry Feed</h2>
      <div className="relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-6">
        <div className="absolute inset-y-6 left-4 w-px bg-gradient-to-b from-transparent via-neon-cyan/40 to-transparent" />
        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={event.time} className="relative pl-10">
              <div className="absolute left-0 top-1.5 h-2 w-2 -translate-x-1/2 rounded-full bg-neon-cyan shadow-[0_0_12px_rgba(0,246,255,0.8)]" />
              <p className="text-xs uppercase tracking-[0.35em] text-neon-blue/70">
                {event.time}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">{event.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{event.description}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.5em] text-white/40">
                {event.indicator}
              </p>
              {index !== events.length - 1 && (
                <div className="absolute left-0 top-6 h-full w-px -translate-x-1/2 bg-gradient-to-b from-neon-blue/40 via-neon-cyan/30 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
