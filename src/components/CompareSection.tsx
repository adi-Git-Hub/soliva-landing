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
    <section className="relative w-full overflow-hidden bg-cinematic-dark grain py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-orange-glow/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[10px] tracking-[0.5em] text-orange-glow">— THE COMPARISON</span>
          <h2 className="font-display mt-4 text-4xl md:text-6xl text-cream leading-[1.05]">
            Still using a dupatta or
            <br />
            <span className="italic text-orange-glow">regular scarf?</span>
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px md:grid-cols-2">
          <div className="bg-cinematic-dark p-10 md:p-14 border border-cream/10">
            <div className="text-[10px] tracking-[0.5em] text-cream/40 mb-6">THE OLD WAY</div>
            <h3 className="font-display text-3xl text-cream/80 mb-8">Borrowed protection.</h3>
            <ul className="space-y-5">
              {oldWay.map((t) => (
                <li key={t} className="flex items-start gap-4 text-cream/60">
                  <span className="mt-1 inline-block h-px w-6 bg-cream/30" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative bg-cinematic-dark p-10 md:p-14 border border-orange-glow/40">
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-orange-glow to-transparent" />
            <div className="text-[10px] tracking-[0.5em] text-orange-glow mb-6">SOLIVA SUNWRAP</div>
            <h3 className="font-display text-3xl text-cream mb-8 text-glow">Engineered protection.</h3>
            <ul className="space-y-5">
              {newWay.map((t) => (
                <li key={t} className="flex items-start gap-4 text-cream/90">
                  <span className="mt-1 inline-block h-px w-6 bg-orange-glow" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="font-display mx-auto mt-20 max-w-2xl text-center text-2xl md:text-3xl italic text-cream/80">
          "Protection shouldn't depend on adjustment."
        </p>
      </div>
    </section>
  );
}
