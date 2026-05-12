import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  { tag: "01", title: "UPF 50+ Protection", desc: "Engineered to block 98% of UVA/UVB rays during peak commute hours." },
  { tag: "02", title: "Breathable Dual Layer", desc: "Two micro-perforated layers that exchange heat without losing coverage." },
  { tag: "03", title: "Full Coverage Design", desc: "Wraps from crown to collarbone with no gaps — no constant adjusting." },
  { tag: "04", title: "Lightweight Comfort", desc: "Under 90 grams. You'll forget you're wearing it." },
  { tag: "05", title: "Designed For Indian Conditions", desc: "Tested across heat, monsoon humidity, and Tier-1 city pollution." },
];

export function TechSection() {
  const containerRef = useScrollReveal();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full overflow-hidden bg-cinematic-dark grain py-24 md:py-32 perspective-2000"
    >
      <div className="pointer-events-none absolute inset-0">
        <div 
          className="absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-orange-glow/15 blur-[120px] will-change-transform" 
          style={{ transform: `translate3d(0, ${scrollY * 0.1}px, 0)` }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col items-center text-center reveal-on-scroll mb-20">
          <span className="text-[10px] tracking-[0.3em] text-orange-glow uppercase font-medium text-shadow-sm">— FABRIC TECHNOLOGY</span>
          <h2 className="font-display mt-6 text-4xl md:text-6xl text-cream leading-[1.2] text-shadow-sm">
            Engineered as a
            <br />
            <span className="italic text-orange-glow">single layer of relief.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 items-center">
          {/* 3D scarf object */}
          <div className="reveal-on-scroll relative flex items-center justify-center min-h-[400px] transform-gpu">
            <div className="absolute inset-0 flex items-center justify-center rotate-slow scale-110 opacity-60">
              <svg viewBox="0 0 400 400" className="h-full w-full max-w-sm">
                <defs>
                  <linearGradient id="scarf" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ff7c00" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#7a4900" stopOpacity="0.4" />
                  </linearGradient>
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
            
            <div 
              className="relative float-y will-change-transform"
              style={{ transform: `translate3d(0, ${scrollY * -0.05}px, 0) rotateY(${scrollY * 0.05}deg)` }}
            >
              <div className="h-40 w-40 rounded-full bg-orange-glow/30 blur-3xl animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-28 w-28 rounded-full border border-orange-glow/20 backdrop-blur-sm" />
              </div>
            </div>

            {/* airflow lines */}
            <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 400 500">
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
          <div className="flex flex-col space-y-0">
            {features.map((f, i) => (
              <div 
                key={f.tag} 
                className="reveal-on-scroll group flex gap-8 border-t border-luxury-beige/10 bg-white/[0.02] hover:bg-white/[0.05] py-8 px-4 transition-all duration-500 light-sweep cursor-default"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="font-mono text-[10px] text-orange-glow tracking-[0.2em] opacity-80 group-hover:opacity-100 transition-opacity mt-1 text-shadow-sm font-bold">
                  {f.tag}
                </span>
                <div className="flex-1">
                  <h4 className="font-display text-2xl text-cream group-hover:text-orange-glow transition-all duration-500 text-shadow-sm">
                    {f.title}
                  </h4>
                  <p className="mt-3 text-sm text-cream/70 leading-relaxed font-light group-hover:text-cream transition-colors text-shadow-sm">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
            <div className="border-t border-luxury-beige/10 w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
