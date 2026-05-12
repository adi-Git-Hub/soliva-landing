import { useEffect, useRef, useState } from "react";
import { Particles } from "./Particles";
import { SolivaLogo } from "./SolivaLogo";

const slides = [
  {
    chapter: "CHAPTER I",
    label: "BLUSH PINK",
    bg: "radial-gradient(ellipse at 30% 40%, oklch(0.85 0.1 10 / 0.55), transparent 60%), radial-gradient(ellipse at 80% 70%, oklch(0.75 0.08 15 / 0.7), transparent 65%), linear-gradient(120deg, oklch(0.8 0.12 10) 0%, oklch(0.6 0.08 15) 100%)",
  },
  {
    chapter: "CHAPTER II",
    label: "CLASSIC BEIGE",
    bg: "radial-gradient(ellipse at 70% 30%, oklch(0.92 0.03 80 / 0.5), transparent 55%), radial-gradient(ellipse at 20% 80%, oklch(0.85 0.04 85 / 0.8), transparent 60%), linear-gradient(200deg, oklch(0.98 0.01 90 / 0.35) 0%, oklch(0.88 0.05 85) 50%, oklch(0.75 0.04 80) 100%)",
  },
  {
    chapter: "CHAPTER III",
    label: "ZESTY LIME",
    bg: "radial-gradient(ellipse at 50% 50%, oklch(0.88 0.15 130 / 0.55), transparent 55%), radial-gradient(ellipse at 90% 10%, oklch(0.95 0.1 140 / 0.25), transparent 50%), linear-gradient(160deg, oklch(0.85 0.2 120) 0%, oklch(0.7 0.15 130) 100%)",
  },
  {
    chapter: "CHAPTER IV",
    label: "GREEN",
    bg: "radial-gradient(ellipse at 30% 60%, oklch(0.65 0.12 150 / 0.5), transparent 60%), radial-gradient(ellipse at 70% 20%, oklch(0.55 0.1 160 / 0.6), transparent 65%), linear-gradient(140deg, oklch(0.5 0.1 150) 0%, oklch(0.35 0.08 160) 100%)",
  },
  {
    chapter: "CHAPTER V",
    label: "DEEP BLUE",
    bg: "radial-gradient(ellipse at 40% 40%, oklch(0.45 0.1 260 / 0.55), transparent 60%), radial-gradient(ellipse at 80% 80%, oklch(0.35 0.12 270 / 0.7), transparent 65%), linear-gradient(150deg, oklch(0.3 0.1 260) 0%, oklch(0.15 0.05 270) 100%)",
  },
];

export function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
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
    
    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((a) => (a + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, []);

  const rx = -mouse.y * 12 + scrollY * 0.02;
  const ry = mouse.x * 18;
  const tx = mouse.x * 40;
  const ty = mouse.y * 40 + scrollY * 0.1;

  // Parallax calculations
  const textParallax = scrollY * 0.4;
  const layerParallax = scrollY * 0.15;

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-cinematic-dark grain perspective-2000"
    >
      <Particles count={70} />

      {/* Full-width Cinematic Slider */}
      <div className="absolute inset-0 z-0">
        {slides.map((s, i) => {
          const offset = i - active;
          const isActive = i === active;
          return (
            <div
              key={i}
              className="absolute inset-0 transition-all duration-[2400ms]"
              style={{
                transform: `translateX(${offset * 100}%)`,
                transitionTimingFunction: "cubic-bezier(0.65, 0, 0.35, 1)",
                opacity: Math.abs(offset) > 1 ? 0 : 1,
              }}
            >
              {/* Immersive Parallax Background */}
              <div
                className="absolute inset-0"
                style={{
                  background: s.bg,
                  transform: `scale(${isActive ? 1.05 : 1.15}) translate3d(${-tx * 0.4}px, ${-ty * 0.4 - layerParallax}px, 0)`,
                  transition: "transform 10000ms ease-out",
                }}
              />
              <div className="absolute inset-0 grain opacity-40 mix-blend-overlay" />
              
              {/* Atmospheric Volumetric Lighting */}
              <div className="absolute -top-1/4 left-0 h-[150%] w-full bg-gradient-to-b from-orange-glow/10 via-transparent to-black/40 blur-3xl opacity-60" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.6)_100%)]" />
              
              {/* Editorial Labels */}
              <div 
                className="absolute bottom-12 left-12 text-[10px] tracking-[0.6em] text-cream/30 uppercase"
                style={{ transform: `translate3d(0, ${scrollY * 0.1}px, 0)` }}
              >
                {s.chapter} // {s.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Ambient sun haze */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div
          className="absolute -left-20 top-1/4 h-[700px] w-[700px] rounded-full bg-orange-glow/15 blur-[180px] drift"
          style={{ transform: `translate3d(${tx * 0.5}px, ${ty * 0.5 - scrollY * 0.2}px, 0)` }}
        />
        <div
          className="absolute -right-20 bottom-1/4 h-[700px] w-[700px] rounded-full bg-brown/30 blur-[180px] drift"
          style={{ animationDelay: "-9s", transform: `translate3d(${-tx * 0.5}px, ${-ty * 0.5 - scrollY * 0.2}px, 0)` }}
        />
      </div>

      {/* Floating Top Nav */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-8 md:px-16">
        <div className="flex items-center gap-4 text-cream group cursor-pointer">
          <div className="transition-transform duration-700 hover:scale-105">
            <SolivaLogo size={100} />
          </div>
        </div>
        <div className="hidden gap-12 text-[11px] tracking-[0.5em] text-cream/40 md:flex">
          <span className="hover:text-cream transition-colors cursor-pointer">EXPERIENCE</span>
          <span className="hover:text-cream transition-colors cursor-pointer">TECHNOLOGY</span>
          <span className="hover:text-cream transition-colors cursor-pointer">JOURNAL</span>
        </div>
        <button className="rounded-full border border-cream/10 px-6 py-2 text-[11px] tracking-[0.4em] text-cream/60 hover:bg-cream hover:text-black transition-all duration-300 light-sweep">
          NOTIFY ME
        </button>
      </nav>

      {/* Centered Minimalist Content */}
      <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center px-6">
        <div 
          className="pointer-events-auto w-full max-w-5xl text-center will-change-transform" 
          style={{ 
            perspective: "1500px",
            transform: `translate3d(0, ${-textParallax}px, 0) scale(${1 - scrollY * 0.0005})`,
            opacity: 1 - scrollY * 0.002
          }}
        >
          {/* Subtle Branding Mark */}
          <div className="reveal-up mx-auto mb-12 flex justify-center opacity-40">
            <SolivaLogo size={60} />
          </div>

          <div
            className="relative mx-auto select-none will-change-transform"
            style={{
              transform: `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(50px)`,
              transformStyle: "preserve-3d",
              transition: "transform 100ms linear",
            }}
          >
            <h1
              className="cinematic-3d font-display text-[15vw] md:text-[10vw] leading-[0.85] tracking-[0.1em] text-cream uppercase"
              style={{ transformStyle: "preserve-3d" }}
            >
              <span className="block depth-float">COMING</span>
              <span className="block italic text-orange-glow/80 depth-float-delayed">SOON</span>
            </h1>
          </div>

          <p
            className="reveal-up mx-auto mt-16 max-w-lg text-sm md:text-base text-cream/50 leading-relaxed font-light tracking-[0.2em] uppercase"
            style={{ animationDelay: "0.8s" }}
          >
            Engineering protection. Designed for the daily commute.
          </p>

          <div
            className="reveal-up mt-16 flex items-center justify-center"
            style={{ animationDelay: "1.1s" }}
          >
            <button className="group relative overflow-hidden rounded-full border border-cream/20 bg-cream/5 px-12 py-5 text-[10px] tracking-[0.6em] text-cream transition-all duration-500 hover:bg-cream hover:text-black hover:scale-[1.05] light-sweep uppercase">
              <span className="relative z-10">SECURE EARLY ACCESS</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Navigation Indicators */}
      <div className="absolute bottom-12 left-1/2 z-40 flex -translate-x-1/2 items-center gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="group py-4 px-2"
            aria-label={`Go to slide ${i + 1}`}
          >
            <div
              className={`h-[1px] transition-all duration-1000 ease-in-out ${
                i === active ? "w-16 bg-orange-glow/60" : "w-8 bg-cream/10 group-hover:bg-cream/30"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Immersive Edge Elements */}
      <div 
        className="absolute bottom-12 right-12 z-40 flex flex-col items-center gap-4 text-cream/20"
        style={{ transform: `translate3d(0, ${scrollY * 0.2}px, 0)`, opacity: 1 - scrollY * 0.003 }}
      >
        <span className="text-[9px] tracking-[0.6em] [writing-mode:vertical-rl] uppercase font-light">SCROLL</span>
        <div className="h-16 w-px bg-gradient-to-b from-orange-glow/40 via-cream/10 to-transparent" />
      </div>
    </section>
  );
}
