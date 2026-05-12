import { useEffect, useRef, useState } from "react";
import { Particles } from "./Particles";
import { SolivaLogo } from "./SolivaLogo";

const slides = [
  {
    chapter: "CHAPTER I",
    label: "DAYBREAK",
    bg: "radial-gradient(ellipse at 30% 40%, oklch(0.78 0.18 55 / 0.55), transparent 60%), radial-gradient(ellipse at 80% 70%, oklch(0.45 0.09 60 / 0.7), transparent 65%), linear-gradient(120deg, oklch(0.55 0.13 55) 0%, oklch(0.28 0.06 50) 100%)",
  },
  {
    chapter: "CHAPTER II",
    label: "NOMAD",
    bg: "radial-gradient(ellipse at 70% 30%, oklch(0.82 0.16 60 / 0.5), transparent 55%), radial-gradient(ellipse at 20% 80%, oklch(0.35 0.08 55 / 0.8), transparent 60%), linear-gradient(200deg, oklch(0.96 0.025 90 / 0.35) 0%, oklch(0.5 0.11 55) 50%, oklch(0.22 0.05 50) 100%)",
  },
  {
    chapter: "CHAPTER III",
    label: "ECLIPSE",
    bg: "radial-gradient(ellipse at 50% 50%, oklch(0.72 0.19 50 / 0.55), transparent 55%), radial-gradient(ellipse at 90% 10%, oklch(0.96 0.025 90 / 0.25), transparent 50%), linear-gradient(160deg, oklch(0.32 0.07 55) 0%, oklch(0.18 0.04 50) 100%)",
  },
];

export function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(0);
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

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((a) => (a + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, []);

  const rx = -mouse.y * 12;
  const ry = mouse.x * 18;
  const tx = mouse.x * 30;
  const ty = mouse.y * 30;

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-cinematic-dark grain"
    >
      <Particles count={60} />

      {/* Ambient sun haze */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-40 top-1/4 h-[600px] w-[600px] rounded-full bg-orange-glow/30 blur-[160px] drift"
          style={{ transform: `translate(${tx * 0.4}px, ${ty * 0.4}px)` }}
        />
        <div
          className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-brown/50 blur-[160px] drift"
          style={{ animationDelay: "-9s", transform: `translate(${-tx * 0.4}px, ${-ty * 0.4}px)` }}
        />
      </div>

      {/* Top nav */}
      <nav className="relative z-30 flex items-center justify-between px-6 py-6 md:px-12">
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

      {/* Full-width cinematic slider */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-x-4 top-24 bottom-24 md:inset-x-10 md:top-28 md:bottom-28 overflow-hidden rounded-sm">
          {slides.map((s, i) => {
            const offset = i - active;
            const isActive = i === active;
            return (
              <div
                key={i}
                className="absolute inset-0 transition-all duration-[2200ms]"
                style={{
                  transform: `translateX(${offset * 100}%)`,
                  transitionTimingFunction: "cubic-bezier(0.65, 0, 0.35, 1)",
                  opacity: Math.abs(offset) > 1 ? 0 : 1,
                }}
              >
                {/* Parallax background */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: s.bg,
                    transform: `scale(${isActive ? 1.08 : 1.18}) translate(${-tx * 0.3}px, ${-ty * 0.3}px)`,
                    transition: "transform 8000ms ease-out",
                  }}
                />
                <div className="absolute inset-0 grain opacity-50" />
                {/* Cinematic light leaks */}
                <div className="absolute -top-1/4 left-1/4 h-1/2 w-1/3 rotate-12 bg-gradient-to-b from-orange-glow/30 via-cream/10 to-transparent blur-3xl" />
                <div className="absolute bottom-0 right-1/4 h-1/2 w-1/4 -rotate-12 bg-gradient-to-t from-cream/20 to-transparent blur-3xl" />
                {/* Vertical glass reflections */}
                <div className="absolute inset-y-0 left-[22%] w-px bg-gradient-to-b from-transparent via-cream/30 to-transparent" />
                <div className="absolute inset-y-0 right-[18%] w-px bg-gradient-to-b from-transparent via-cream/20 to-transparent" />
                {/* Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
                {/* Chapter label */}
                <div className="absolute bottom-6 left-6 text-[10px] tracking-[0.5em] text-cream/70">
                  {s.chapter} · {s.label}
                </div>
                <div className="absolute top-6 right-6 text-[10px] tracking-[0.5em] text-cream/60">
                  0{i + 1} / 0{slides.length}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Center editorial overlay */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6">
        <div className="pointer-events-auto max-w-3xl text-center" style={{ perspective: "1200px" }}>
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-cream/25 bg-black/20 px-4 py-1 text-[10px] tracking-[0.4em] text-cream/80 backdrop-blur-md fade-in-slow">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-glow animate-pulse" />
            SOLIVA SUNWRAP — PRE-LAUNCH
          </div>

          {/* 3D COMING SOON */}
          <div
            className="relative mx-auto select-none"
            style={{
              transform: `rotateX(${rx}deg) rotateY(${ry}deg)`,
              transformStyle: "preserve-3d",
              transition: "transform 600ms cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
          >
            <h1
              className="cinematic-3d font-display text-[18vw] md:text-[12vw] leading-[0.9] tracking-[0.04em] text-cream"
              style={{ transformStyle: "preserve-3d" }}
            >
              <span className="block depth-float">COMING</span>
              <span className="block italic text-orange-glow depth-float-delayed">SOON</span>
            </h1>
            {/* Soft reflection */}
            <div
              className="absolute inset-x-0 top-full h-32 opacity-30"
              style={{
                background:
                  "linear-gradient(to bottom, oklch(0.72 0.19 50 / 0.4), transparent)",
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)",
                transform: "scaleY(-1)",
              }}
            />
          </div>

          <p
            className="reveal-up mx-auto mt-8 max-w-lg text-sm md:text-base text-cream/75 leading-relaxed"
            style={{ animationDelay: "0.6s" }}
          >
            Protection designed for daily urban exposure. Engineered for sun, dust, heat
            and real Indian commutes.
          </p>

          <div
            className="reveal-up mt-10 flex items-center justify-center gap-4"
            style={{ animationDelay: "0.9s" }}
          >
            <button className="group relative overflow-hidden rounded-full bg-orange-glow px-9 py-3.5 text-xs tracking-[0.3em] text-white transition-all hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(255,124,0,0.6)]">
              <span className="relative z-10">EXPLORE EXPERIENCE</span>
              <span className="absolute inset-0 bg-gradient-to-r from-orange-glow via-cream/60 to-orange-glow bg-[length:200%_100%] opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="group flex items-center"
            aria-label={`Slide ${i + 1}`}
          >
            <span
              className={`h-px transition-all duration-700 ${
                i === active ? "w-12 bg-orange-glow" : "w-6 bg-cream/30 group-hover:bg-cream/60"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-8 z-30 hidden flex-col items-center gap-2 text-cream/60 md:flex">
        <span className="text-[10px] tracking-[0.5em] [writing-mode:vertical-rl]">SCROLL</span>
        <div className="h-12 w-px bg-gradient-to-b from-cream/60 to-transparent" />
      </div>
    </section>
  );
}
