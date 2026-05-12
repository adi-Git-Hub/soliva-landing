import { useEffect, useRef, useState } from "react";
import { Particles } from "./Particles";
import { SolivaLogo } from "./SolivaLogo";

export function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setMouse({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const px = mouse.x * 20;
  const py = mouse.y * 20;

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-cinematic-dark grain"
    >
      <Particles count={50} />

      {/* Ambient orange haze */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-orange-glow/30 blur-[140px] drift" />
        <div className="absolute -right-32 bottom-1/4 h-[500px] w-[500px] rounded-full bg-brown/40 blur-[140px] drift" style={{ animationDelay: "-9s" }} />
      </div>

      {/* Top nav */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center gap-3 text-cream">
          <SolivaLogo size={28} />
          <span className="font-display text-xl tracking-[0.3em]">SOLIVA</span>
        </div>
        <div className="hidden gap-8 text-[11px] tracking-[0.4em] text-cream/70 md:flex">
          <span>EXPERIENCE</span>
          <span>TECHNOLOGY</span>
          <span>JOURNAL</span>
        </div>
        <button className="text-[11px] tracking-[0.4em] text-cream/80 hover:text-orange-glow transition-colors">
          NOTIFY ME
        </button>
      </nav>

      {/* Twin banners */}
      <div className="relative z-10 grid grid-cols-2 gap-2 px-2 md:gap-6 md:px-6">
        {/* Left banner */}
        <div
          className="relative aspect-[3/4] overflow-hidden rounded-sm"
          style={{ transform: `translate(${-px}px, ${-py}px)` }}
        >
          <div className="banner-slide-l absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 30%, oklch(0.72 0.19 50 / 0.55), transparent 60%), linear-gradient(135deg, oklch(0.45 0.09 60), oklch(0.22 0.05 55))",
              }}
            />
            <div className="absolute inset-0 grain opacity-60" />
            {/* glass reflection */}
            <div className="absolute inset-y-0 left-1/3 w-px bg-gradient-to-b from-transparent via-cream/30 to-transparent" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h3
              className="text-3d-float font-display text-3xl md:text-6xl tracking-[0.15em] text-cream/95"
              style={{
                textShadow:
                  "1px 1px 0 #c46300, 2px 2px 0 #a55300, 3px 3px 0 #864300, 4px 4px 12px rgba(255,124,0,0.5)",
              }}
            >
              COMING
            </h3>
          </div>
          <div className="absolute bottom-4 left-4 text-[10px] tracking-[0.4em] text-cream/60">
            CHAPTER I
          </div>
        </div>

        {/* Right banner */}
        <div
          className="relative aspect-[3/4] overflow-hidden rounded-sm"
          style={{ transform: `translate(${px}px, ${py}px)` }}
        >
          <div className="banner-slide-r absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 70% 70%, oklch(0.72 0.19 50 / 0.45), transparent 60%), linear-gradient(225deg, oklch(0.96 0.025 90 / 0.5), oklch(0.45 0.09 60))",
              }}
            />
            <div className="absolute inset-0 grain opacity-60" />
            <div className="absolute inset-y-0 right-1/3 w-px bg-gradient-to-b from-transparent via-cream/30 to-transparent" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h3
              className="text-3d-float font-display text-3xl md:text-6xl tracking-[0.15em] text-cream/95"
              style={{
                textShadow:
                  "1px 1px 0 #c46300, 2px 2px 0 #a55300, 3px 3px 0 #864300, 4px 4px 12px rgba(255,124,0,0.5)",
                animationDelay: "-3s",
              }}
            >
              SOON
            </h3>
          </div>
          <div className="absolute bottom-4 right-4 text-[10px] tracking-[0.4em] text-cream/60">
            VOLUME 01
          </div>
        </div>
      </div>

      {/* Center overlay */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6">
        <div className="pointer-events-auto max-w-2xl text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-1 text-[10px] tracking-[0.4em] text-cream/70 fade-in-slow">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-glow animate-pulse" />
            SOLIVA SUNWRAP — PRE-LAUNCH
          </div>
          <h1
            className="reveal-up font-display text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.05]"
            style={{ animationDelay: "0.2s" }}
          >
            Protection Designed
            <br />
            <span className="italic text-orange-glow">For Daily Urban Exposure</span>
          </h1>
          <p
            className="reveal-up mx-auto mt-6 max-w-lg text-sm md:text-base text-cream/70 leading-relaxed"
            style={{ animationDelay: "0.5s" }}
          >
            Engineered for sun, dust, heat, and real Indian commutes.
          </p>
          <div
            className="reveal-up mt-10 flex items-center justify-center gap-4"
            style={{ animationDelay: "0.8s" }}
          >
            <button className="group relative overflow-hidden rounded-full bg-orange-glow px-8 py-3.5 text-xs tracking-[0.3em] text-white transition-all hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,124,0,0.5)]">
              <span className="relative z-10">EXPLORE EXPERIENCE</span>
              <span className="absolute inset-0 bg-gradient-to-r from-orange-glow via-cream to-orange-glow bg-[length:200%_100%] opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/60">
        <span className="text-[10px] tracking-[0.5em]">SCROLL</span>
        <div className="h-10 w-px bg-gradient-to-b from-cream/60 to-transparent" />
      </div>
    </section>
  );
}
