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
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2 md:gap-16 md:px-12">
        {/* Video placeholder */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-cinematic-dark grain">
          <Particles count={20} />
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-glow/30 blur-[100px]" />
          </div>
          {/* glass reflections */}
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-cream/10 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3
              className="text-3d-float font-display text-4xl md:text-6xl tracking-[0.18em] text-cream"
              style={{
                textShadow:
                  "1px 1px 0 #c46300, 2px 2px 0 #864300, 3px 3px 14px rgba(255,124,0,0.6), 0 0 60px rgba(255,124,0,0.4)",
              }}
            >
              COMING SOON
            </h3>
          </div>
          {/* Playback ui */}
          <div className="absolute inset-x-6 bottom-6 flex items-center gap-4 text-cream/70">
            <div className="h-8 w-8 rounded-full border border-cream/40 flex items-center justify-center">
              <div className="h-0 w-0 border-l-[8px] border-l-cream border-y-[5px] border-y-transparent ml-0.5" />
            </div>
            <div className="h-px flex-1 bg-cream/20">
              <div className="h-full w-1/3 bg-orange-glow" />
            </div>
            <span className="text-[10px] tracking-[0.3em]">00:42</span>
          </div>
        </div>

        {/* Editorial text */}
        <div className="flex flex-col justify-center">
          <span className="text-[10px] tracking-[0.5em] text-brown/60">— FILM 01</span>
          <h2 className="font-display mt-4 text-4xl md:text-5xl text-brown-deep leading-[1.1]">
            Built For Real
            <br />
            <span className="italic text-orange-glow">Daily Protection</span>
          </h2>
          <p className="mt-6 text-base text-brown leading-relaxed max-w-md">
            Sun. Dust. Pollution. Heat. Indian commutes are demanding — and the way we
            cover up was never designed for them. SOLIVA SUNWRAP is engineered as a
            single, breathable, full-coverage layer for the hours that matter most.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-brown-deep/80">
            {[
              "Single-layer full coverage that stays in place",
              "Breathable construction tested in 38°C+ heat",
              "Designed around the daily Indian commute",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-2 h-px w-6 bg-orange-glow" />
                {t}
              </li>
            ))}
          </ul>
          <button className="mt-10 self-start text-[11px] tracking-[0.4em] text-brown-deep border-b border-brown-deep/40 pb-1 hover:border-orange-glow hover:text-orange-glow transition-colors">
            DISCOVER THE TECHNOLOGY →
          </button>
        </div>
      </div>

      {/* Trust marquee */}
      <div className="relative mt-24 border-y border-brown/15 bg-cream/40 py-5 overflow-hidden">
        <div className="marquee flex w-max gap-16 whitespace-nowrap">
          {loop.map((t, i) => (
            <span key={i} className="flex items-center gap-16 text-[11px] tracking-[0.4em] text-brown-deep/80">
              {t}
              <span className="h-1 w-1 rounded-full bg-orange-glow" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
