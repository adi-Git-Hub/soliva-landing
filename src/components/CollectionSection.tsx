const products = [
  { name: "The Daybreak", desc: "Cream / Sand", price: "₹ 1,490", tone: "from-cream to-orange-glow/40" },
  { name: "The Nomad", desc: "Tobacco / Brown", price: "₹ 1,690", tone: "from-orange-glow/60 to-brown" },
  { name: "The Eclipse", desc: "Deep Brown / Onyx", price: "₹ 1,890", tone: "from-brown to-brown-deep" },
];

const trust = ["UPF 50+", "DUAL LAYER", "FULL COVERAGE", "LIGHTWEIGHT", "BREATHABLE"];

export function CollectionSection() {
  const loop = [...trust, ...trust, ...trust];
  return (
    <section className="relative w-full overflow-hidden bg-cinematic-warm py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-[10px] tracking-[0.5em] text-orange-glow">— THE COLLECTION</span>
            <h2 className="font-display mt-4 text-4xl md:text-6xl text-brown-deep leading-[1.05]">
              Three editions.
              <br />
              <span className="italic">One philosophy.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-brown leading-relaxed">
            Launching with three signature wraps, each tuned for a different light, season, and city.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {products.map((p, i) => (
            <article
              key={p.name}
              className="group relative overflow-hidden rounded-sm bg-cream border border-brown/10 transition-all hover:-translate-y-3 hover:shadow-[0_40px_80px_-30px_rgba(122,73,0,0.4)]"
            >
              <div className={`relative aspect-[3/4] overflow-hidden bg-gradient-to-br ${p.tone}`}>
                <div className="absolute inset-0 grain opacity-50" />
                <div className="absolute left-1/2 top-1/2 h-72 w-44 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-cream/30 blur-2xl group-hover:bg-cream/50 transition-all" />
                {/* Abstract scarf silhouette */}
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 400">
                  <ellipse cx="150" cy="200" rx="80" ry="160" fill="oklch(1 0 0 / 0.18)" />
                  <ellipse cx="150" cy="200" rx="50" ry="140" fill="oklch(1 0 0 / 0.12)" />
                </svg>
                <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.3em] text-cream/90">
                  EDITION 0{i + 1}
                </div>
                <div className="absolute top-4 right-4 rounded-full bg-cream/20 px-3 py-1 text-[9px] tracking-[0.3em] text-cream backdrop-blur">
                  COMING SOON
                </div>
              </div>
              <div className="flex items-end justify-between p-6">
                <div>
                  <h3 className="font-display text-2xl text-brown-deep">{p.name}</h3>
                  <p className="mt-1 text-xs tracking-[0.3em] text-brown/60">{p.desc}</p>
                </div>
                <div className="text-right">
                  <div className="text-xs tracking-[0.3em] text-brown/50">FROM</div>
                  <div className="font-display text-xl text-orange-glow">{p.price}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="relative mt-24 border-y border-brown/15 bg-cream/40 py-5 overflow-hidden">
        <div className="marquee flex w-max gap-16 whitespace-nowrap">
          {loop.map((t, i) => (
            <span key={i} className="flex items-center gap-16 font-display text-2xl text-brown-deep/70">
              {t}
              <span className="text-orange-glow">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
