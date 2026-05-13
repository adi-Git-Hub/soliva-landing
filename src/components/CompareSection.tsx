const oldWay = [
  "Slips off in traffic and wind",
  "Traps heat against the face",
  "Leaves the neck and temples exposed",
  "Needs constant adjustment",
  "Smudges makeup, tangles hair",
];
const newWay = [
  "Stays in place, hands-free",
  "Dual-layer breathable airflow",
  "Wraps fully — crown to collarbone",
  "Designed once, worn all day",
  "Smooth interior, no smudge, no snag",
];

export function CompareSection() {
  return (
    <section className="relative w-full overflow-hidden bg-cinematic-dark grain py-24 md:py-32">
      {/* Center light glow for depth */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 bg-orange-glow/10 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <span className="text-[10px] tracking-[0.3em] text-orange-glow uppercase font-medium text-shadow-sm">
            — THE COMPARISON
          </span>
          <h2 className="font-display mt-6 text-4xl md:text-6xl text-cream leading-[1.2] text-shadow-sm">
            Still using a dupatta or
            <br />
            <span className="italic text-orange-glow">regular scarf?</span>
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px md:grid-cols-2 bg-luxury-beige/10 border border-luxury-beige/20 shadow-[0_0_40px_rgba(245,239,228,0.05)]">
          {/* Old Way Block */}
          <div className="relative bg-black/20 backdrop-blur-sm p-10 md:p-16 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />

            <div className="relative z-10">
              <div className="text-[10px] tracking-[0.3em] text-cream/60 mb-10 uppercase font-medium">
                THE OLD WAY
              </div>
              <h3 className="font-display text-3xl text-cream/95 mb-10 text-shadow-sm">
                Borrowed protection.
              </h3>
              <ul className="space-y-6">
                {oldWay.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-4 text-cream/80 text-sm leading-relaxed font-light"
                  >
                    <span className="mt-2.5 inline-block h-px w-6 bg-cream/30" />
                    <span className="text-shadow-sm">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* New Way Block */}
          <div className="relative bg-orange-glow/5 backdrop-blur-md p-10 md:p-16 border-l md:border-l-0 md:border-t-0 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-glow/10 to-transparent opacity-30" />
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-orange-glow/40 to-transparent hidden md:block" />

            <div className="relative z-10">
              <div className="text-[10px] tracking-[0.3em] text-orange-glow mb-10 uppercase font-bold text-shadow-sm">
                SOLIVA SUNWRAP
              </div>
              <h3 className="font-display text-3xl text-cream mb-10 text-glow">
                Engineered protection.
              </h3>
              <ul className="space-y-6">
                {newWay.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-4 text-cream text-sm leading-relaxed font-medium"
                  >
                    <span className="mt-2.5 inline-block h-px w-6 bg-orange-glow shadow-[0_0_10px_rgba(255,124,0,0.5)]" />
                    <span className="text-shadow-sm">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="font-display mx-auto mt-20 max-w-2xl text-center text-2xl md:text-3xl italic text-cream/70 text-shadow-sm">
          "Protection shouldn't depend on adjustment."
        </p>
      </div>
    </section>
  );
}
