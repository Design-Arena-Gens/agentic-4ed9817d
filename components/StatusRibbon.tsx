const statusItems = [
  {
    label: "Chamber Integrity",
    value: "100%",
    accent: "Operational"
  },
  {
    label: "Energy Flux",
    value: "Surge",
    accent: "Surprised"
  },
  {
    label: "Subject Focus",
    value: "Dual",
    accent: "Up & Down"
  }
];

export function StatusRibbon() {
  return (
    <div className="glow relative overflow-hidden rounded-full border border-neon-blue/30 bg-white/5 px-6 py-4 shadow-[0_25px_70px_rgba(0,246,255,0.18)]">
      <div className="flex flex-wrap items-center justify-between gap-6 text-sm uppercase tracking-[0.35em] text-white/70">
        {statusItems.map((item) => (
          <div key={item.label} className="flex items-baseline gap-3">
            <span className="text-xs text-white/50">{item.label}</span>
            <span className="text-lg text-white">{item.value}</span>
            <span className="text-xs text-neon-cyan">{item.accent}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
