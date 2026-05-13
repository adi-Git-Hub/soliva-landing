import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const blocks = [
  {
    title: "SLIPS",
    desc: "Dupattas weren't built for traffic. They unravel at every turn, every gust, every stop.",
    visual: "slips",
  },
  {
    title: "SUFFOCATES",
    desc: "Layered fabric over the face traps heat, fogs visibility, and tires you out before noon.",
    visual: "suffocates",
  },
  {
    title: "EXPOSES",
    desc: "Gaps at the temples, the neck, the hairline — the sun finds every shortcut.",
    visual: "exposes",
  },
];

export function ProblemSection() {
  const containerRef = useScrollReveal();

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-cinematic-warm py-24 md:py-32 perspective-2000"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mx-auto max-w-2xl text-center reveal-on-scroll">
          <span className="text-[10px] tracking-[0.3em] text-orange-glow uppercase font-medium">
            — THE PROBLEM
          </span>
          <h2 className="font-display mt-6 text-4xl md:text-6xl text-brown-deep leading-[1.2]">
            Three failures we
            <br />
            <span className="italic">stopped accepting.</span>
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {blocks.map((b, i) => (
            <div
              key={b.title}
              className="reveal-on-scroll group relative flex flex-col items-center text-center overflow-hidden rounded-sm bg-cream border border-brown/10 p-10 transition-all duration-700 hover:-translate-y-2 light-sweep"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative w-full aspect-square overflow-hidden rounded-sm bg-cinematic-dark grain transform-gpu transition-transform duration-700 group-hover:scale-105">
                <div className="absolute inset-0">
                  <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-glow/40 blur-[60px]" />
                </div>
                <ProblemVisual kind={b.visual} />
                <div className="absolute bottom-4 left-4 font-mono text-[9px] tracking-[0.2em] text-cream/60">
                  0{i + 1}
                </div>
              </div>
              <h3 className="font-display mt-8 text-2xl tracking-[0.1em] text-brown-deep group-hover:text-orange-glow transition-colors">
                {b.title}
              </h3>
              <p className="mt-4 text-sm text-brown/70 leading-relaxed font-light">{b.desc}</p>
            </div>
          ))}
        </div>

        <p
          className="reveal-on-scroll mx-auto mt-20 max-w-2xl text-center font-display text-2xl md:text-3xl italic text-brown-deep/60"
          style={{ transitionDelay: "400ms" }}
        >
          "Makeshift solutions were never designed to protect you."
        </p>

        {/* New Content Section */}
        <div className="mt-32 border-t border-brown/5 pt-20 reveal-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center text-left">
            <div className="space-y-6">
              <h3 className="font-display text-3xl text-brown-deep">
                The cost of <span className="italic">compromise.</span>
              </h3>
              <p className="text-brown/70 font-light leading-relaxed">
                Every day you spend in the city is a day of micro-stress. Your skin, your breathing,
                and your energy levels are constantly fighting against an environment that wasn't
                designed with your wellbeing in mind.
              </p>
              <p className="text-brown/70 font-light leading-relaxed">
                We believe you shouldn't have to choose between looking professional and being
                protected. Soliva is the bridge between high fashion and high performance,
                engineered for the modern urban warrior.
              </p>
            </div>
            <div className="bg-[#1A1410] p-12 rounded-sm text-cream space-y-8 shadow-2xl">
              <div>
                <span className="font-mono text-[10px] tracking-widest text-orange-glow uppercase block mb-2">
                  Impact Study
                </span>
                <div className="flex items-baseline gap-4">
                  <span className="text-5xl font-display">84%</span>
                  <span className="text-sm font-light text-cream/60">
                    of urban commuters report fatigue due to heat and sweat.
                  </span>
                </div>
              </div>
              <div className="h-px bg-cream/10" />
              <div>
                <div className="flex items-baseline gap-4">
                  <span className="text-5xl font-display">2.5x</span>
                  <span className="text-sm font-light text-cream/60">
                    higher UV exposure on asphalt surfaces than grassy areas.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cinematic Depth Element */}
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-orange-glow/5 blur-[120px] pointer-events-none" />
    </section>
  );
}

function ProblemVisual({ kind }: { kind: string }) {
  if (kind === "slips") {
    return (
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 200" fill="none">
        <path d="M20 80 Q60 40 100 80 T180 80" stroke="#f5f5dc" strokeWidth="1" opacity="0.6">
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="M20 80 Q60 40 100 80 T180 80; M20 100 Q60 60 100 100 T180 100; M20 80 Q60 40 100 80 T180 80"
          />
        </path>
        <path d="M20 110 Q60 70 100 110 T180 110" stroke="#ff7c00" strokeWidth="1" opacity="0.5">
          <animate
            attributeName="d"
            dur="7s"
            repeatCount="indefinite"
            values="M20 110 Q60 70 100 110 T180 110; M20 130 Q60 90 100 130 T180 130; M20 110 Q60 70 100 110 T180 110"
          />
        </path>
        <path d="M20 140 Q60 100 100 140 T180 140" stroke="#f5f5dc" strokeWidth="1" opacity="0.4">
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="M20 140 Q60 100 100 140 T180 140; M20 160 Q60 120 100 160 T180 160; M20 140 Q60 100 100 140 T180 140"
          />
        </path>
      </svg>
    );
  }
  if (kind === "suffocates") {
    return (
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 200" fill="none">
        {[0, 1, 2, 3, 4].map((i) => (
          <circle
            key={i}
            cx="100"
            cy="100"
            r={20 + i * 18}
            stroke="#ff7c00"
            strokeWidth="0.6"
            opacity={0.5 - i * 0.08}
          >
            <animate
              attributeName="r"
              dur={`${3 + i * 0.5}s`}
              repeatCount="indefinite"
              values={`${20 + i * 18};${30 + i * 18};${20 + i * 18}`}
            />
          </circle>
        ))}
      </svg>
    );
  }
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 200" fill="none">
      {Array.from({ length: 14 }).map((_, i) => {
        const angle = (i * 25.7 * Math.PI) / 180;
        const x2 = 100 + Math.cos(angle) * 90;
        const y2 = 100 + Math.sin(angle) * 90;
        return (
          <line
            key={i}
            x1="100"
            y1="100"
            x2={x2}
            y2={y2}
            stroke="#ff7c00"
            strokeWidth="0.7"
            opacity="0.5"
            strokeDasharray="4 4"
          >
            <animate
              attributeName="opacity"
              dur={`${2 + (i % 4)}s`}
              repeatCount="indefinite"
              values="0.2;0.7;0.2"
            />
          </line>
        );
      })}
      <circle cx="100" cy="100" r="14" fill="#f5f5dc" opacity="0.9" />
    </svg>
  );
}
