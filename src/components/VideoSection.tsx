import { Particles } from "./Particles";

const trustItems = [
  "UPF 50+ PROTECTION",
  "DUAL-LAYER COMFORT",
  "FULL COVERAGE DESIGN",
  "BREATHABLE IN HEAT",
  "LIGHTWEIGHT DAILY WEAR",
  "NO SMUDGING",
  "NO MORE MESSY HAIR",
];

export function VideoSection() {
  const loop = [...trustItems, ...trustItems];
  return (
    <section className="relative w-full overflow-hidden bg-cinematic-warm py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:gap-20 md:px-12 items-center">
        {/* Video placeholder */}
        <div className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-cinematic-dark grain">
          <Particles count={24} />
          {/* layered amber gradients */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 30% 30%, oklch(0.78 0.18 55 / 0.55), transparent 60%), radial-gradient(ellipse at 80% 80%, oklch(0.45 0.09 60 / 0.7), transparent 60%), linear-gradient(160deg, oklch(0.5 0.11 55), oklch(0.22 0.05 50))",
            }}
          />
          {/* light leaks */}
          <div className="absolute -top-1/4 left-1/4 h-1/2 w-1/3 rotate-12 bg-gradient-to-b from-orange-glow/40 via-cream/15 to-transparent blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-1/2 w-1/4 -rotate-12 bg-gradient-to-t from-cream/25 to-transparent blur-3xl" />
          {/* glass reflections */}
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-cream/15 to-transparent" />
          <div className="absolute inset-y-0 left-1/4 w-px bg-gradient-to-b from-transparent via-cream/30 to-transparent" />
          {/* vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.55)_100%)]" />
          {/* cinematic 3d coming soon */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ perspective: "1000px" }}
          >
            <h3 className="cinematic-3d depth-float font-display text-3xl md:text-5xl tracking-[0.1em] text-cream transition-transform duration-700 group-hover:scale-105">
              COMING SOON
            </h3>
          </div>
          {/* Playback ui */}
          <div className="absolute inset-x-6 bottom-6 flex items-center gap-4 text-cream/80">
            <div className="h-9 w-9 rounded-full border border-cream/40 flex items-center justify-center backdrop-blur-md bg-black/20">
              <div className="h-0 w-0 border-l-[8px] border-l-cream border-y-[5px] border-y-transparent ml-0.5" />
            </div>
            <div className="h-px flex-1 bg-cream/20">
              <div className="h-full w-1/3 bg-orange-glow" />
            </div>
            <span className="text-[10px] tracking-[0.2em]">00:42</span>
          </div>
        </div>

        {/* Editorial text */}
        <div className="flex flex-col justify-center">
          <span className="text-[10px] tracking-[0.3em] text-brown/60 uppercase font-medium">
            — FILM 01
          </span>
          <h2 className="font-display mt-6 text-4xl md:text-5xl text-brown-deep leading-[1.2]">
            Built For Real
            <br />
            <span className="italic text-orange-glow">Daily Protection</span>
          </h2>
          <p className="mt-8 text-base text-brown/70 leading-relaxed max-w-md font-light">
            Sun. Dust. Pollution. Heat. Indian commutes are demanding — and the way we cover up was
            never designed for them. SOLIVA SUNWRAP is engineered as a single, breathable,
            full-coverage layer for the hours that matter most.
          </p>
          <ul className="mt-10 space-y-4 text-sm text-brown-deep/80">
            {[
              "Single-layer full coverage that stays in place",
              "Breathable construction tested in 38°C+ heat",
              "Designed around the daily Indian commute",
            ].map((t) => (
              <li key={t} className="flex items-start gap-4 leading-relaxed">
                <span className="mt-2.5 h-px w-6 bg-orange-glow" />
                {t}
              </li>
            ))}
          </ul>
          <button className="mt-12 self-start text-[10px] tracking-[0.3em] text-brown-deep font-medium border-b border-brown-deep/20 pb-1 hover:border-orange-glow hover:text-orange-glow transition-all uppercase">
            DISCOVER THE TECHNOLOGY
          </button>
        </div>
      </div>

      {/* Trust marquee */}
      <div className="relative mt-24 border-y border-brown/10 bg-cream/40 py-6 overflow-hidden">
        <div className="marquee flex w-max gap-16 whitespace-nowrap">
          {loop.map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-16 text-[10px] tracking-[0.2em] text-brown-deep/60 font-medium"
            >
              {t}
              <span className="h-1 w-1 rounded-full bg-orange-glow/40" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
