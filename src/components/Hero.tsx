import { useEffect, useState } from "react";
import { SolivaLogo } from "./SolivaLogo";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative flex h-[100vh] w-full flex-col overflow-hidden bg-[#F9F6F0]">
      {/* Matte Premium Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#FFFFFF_0%,transparent_100%)] opacity-30" />
        <div
          className="absolute inset-0 opacity-[0.02] mix-blend-multiply grain"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Premium Minimal Navbar */}
      <nav
        className={`relative z-20 flex items-center justify-between px-8 py-10 md:px-16 transition-opacity duration-[2000ms] ${mounted ? "opacity-100" : "opacity-0"}`}
      >
        <div className="flex items-center group cursor-pointer">
          <div className="hidden md:block transition-transform duration-1000 ease-out hover:scale-105">
            <SolivaLogo height={42} />
          </div>
          <div className="md:hidden transition-transform duration-1000 ease-out hover:scale-105">
            <SolivaLogo height={32} />
          </div>
        </div>
        <div className="hidden gap-14 text-[9px] tracking-[0.5em] text-[#3A2A1F]/40 md:flex font-light uppercase">
          <span className="hover:text-[#3A2A1F] transition-colors duration-500 cursor-pointer">Experience</span>
          <span className="hover:text-[#3A2A1F] transition-colors duration-500 cursor-pointer">Technology</span>
          <span className="hover:text-[#3A2A1F] transition-colors duration-500 cursor-pointer">Journal</span>
        </div>
        <button className="rounded-full border border-[#3A2A1F]/10 px-7 py-2.5 text-[9px] tracking-[0.4em] text-[#3A2A1F]/60 hover:bg-[#3A2A1F] hover:text-white transition-all duration-700 uppercase font-medium">
          Notify Me
        </button>
      </nav>

      {/* Centered Composition */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <div className="flex flex-col items-center animate-float">
          {/* Logo Fade + Scale */}
          <div
            className={`mb-12 transition-all duration-[2000ms] cubic-bezier(0.2, 0.8, 0.2, 1) ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
            style={{ filter: "drop-shadow(0 10px 20px rgba(180,120,40,0.1))" }}
          >
            <SolivaLogo height={80} />
          </div>

          {/* Brand Identity Reveal */}
          <div className="mb-6 overflow-hidden">
            <h1
              className={`font-display text-6xl md:text-8xl lg:text-9xl tracking-[0.5em] uppercase font-light leading-none transition-all duration-[2500ms] ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
            >
              <span className="text-sweep">SOLIVA</span>
            </h1>
          </div>

          {/* Status Label Fade-up */}
          <div className="overflow-hidden">
            <p
              className={`font-body text-[10px] md:text-[11px] font-light tracking-[1em] text-[#3A2A1F]/40 uppercase transition-all duration-[3000ms] delay-1000 ${mounted ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
            >
              Coming Soon
            </p>
          </div>
        </div>
      </div>

      {/* Editorial Detail Line */}
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-[1px] bg-[#3A2A1F]/5 transition-all duration-[4000ms] delay-500 ${mounted ? "w-full" : "w-0"}`}
      />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes lightSweep {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .text-sweep {
          background: linear-gradient(90deg, #3A2A1F 0%, #3A2A1F 45%, #8B5E3C 50%, #3A2A1F 55%, #3A2A1F 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: lightSweep 8s infinite linear;
          display: inline-block;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
      `}} />
    </section>
  );
}
