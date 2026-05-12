const features = [
  { tag: "01", title: "UPF 50+ Protection", desc: "Engineered to block 98% of UVA/UVB rays during peak commute hours." },
  { tag: "02", title: "Breathable Dual Layer", desc: "Two micro-perforated layers that exchange heat without losing coverage." },
  { tag: "03", title: "Full Coverage Design", desc: "Wraps from crown to collarbone with no gaps — no constant adjusting." },
  { tag: "04", title: "Lightweight Comfort", desc: "Under 90 grams. You'll forget you're wearing it." },
  { tag: "05", title: "Designed For Indian Conditions", desc: "Tested across heat, monsoon humidity, and Tier-1 city pollution." },
];

export function TechSection() {
  return (
    <section className="relative w-full overflow-hidden bg-cinematic-dark grain py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-orange-glow/15 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-2 md:px-12">
        {/* 3D scarf object */}
        <div className="relative flex items-center justify-center min-h-[500px]">
          <div className="absolute inset-0 flex items-center justify-center rotate-slow">
            <svg viewBox="0 0 400 400" className="h-full w-full max-w-md">
              <defs>
                <linearGradient id="scarf" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ff7c00" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#7a4900" stopOpacity="0.4" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" />
                </filter>
              </defs>
              {Array.from({ length: 24 }).map((_, i) => {
                const r = 80 + i * 4;
                return (
                  <ellipse
                    key={i}
                    cx="200"
                    cy="200"
                    rx={r}
                    ry={r * 0.4}
                    fill="none"
                    stroke="url(#scarf)"
                    strokeWidth="0.8"
                    opacity={0.7 - i * 0.025}
                    transform={`rotate(${i * 7} 200 200)`}
                  />
                );
              })}
            </svg>
          </div>
          <div className="relative float-y">
            <div className="h-48 w-48 rounded-full bg-orange-glow/20 blur-3xl" />
          </div>
          {/* airflow lines */}
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 500">
            {[0, 1, 2, 3].map((i) => (
              <path
                key={i}
                d={`M ${50 + i * 30} 50 Q 200 ${200 + i * 20} ${350 - i * 30} 450`}
                stroke="#ff7c00"
                strokeWidth="0.6"
                fill="none"
                strokeDasharray="2 8"
                opacity="0.4"
              >
                <animate attributeName="stroke-dashoffset" dur={`${4 + i}s`} repeatCount="indefinite" values="0;-100" />
              </path>
            ))}
          </svg>
        </div>

        {/* Tech features */}
        <div className="flex flex-col justify-center">
          <span className="text-[10px] tracking-[0.5em] text-orange-glow">— FABRIC TECHNOLOGY</span>
          <h2 className="font-display mt-4 text-4xl md:text-5xl text-cream leading-[1.1]">
            Engineered as a
            <br />
            <span className="italic text-orange-glow">single layer of relief.</span>
          </h2>
          <div className="mt-12 space-y-6">
            {features.map((f) => (
              <div key={f.tag} className="group flex gap-6 border-t border-cream/10 pt-6">
                <span className="font-mono text-xs text-orange-glow tracking-widest">{f.tag}</span>
                <div className="flex-1">
                  <h4 className="font-display text-xl text-cream group-hover:text-orange-glow transition-colors">{f.title}</h4>
                  <p className="mt-2 text-sm text-cream/60 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
