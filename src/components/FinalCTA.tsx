import { useState } from "react";
import { Particles } from "./Particles";
import { SolivaLogo } from "./SolivaLogo";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useScrollReveal();

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-cinematic-dark grain py-24 md:py-32 perspective-2000"
    >
      <Particles count={60} />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-glow/20 blur-[150px]" />
        <div className="absolute -bottom-40 left-1/2 h-[400px] w-[1000px] -translate-x-1/2 rounded-[50%] bg-brown/40 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="relative z-10 bg-black/10 backdrop-blur-sm rounded-[3rem] p-12 md:p-20 border border-luxury-beige/10">
          <div className="reveal-on-scroll mx-auto inline-flex text-cream logo-glow">
            <SolivaLogo size={140} />
          </div>

          <h2
            className="reveal-on-scroll font-display mt-12 text-6xl md:text-8xl lg:text-9xl tracking-[0.05em] text-cream leading-[1.1] will-change-transform text-shadow-sm"
            style={{
              transitionDelay: "200ms",
              textShadow:
                "1px 1px 0 #c46300, 2px 2px 0 #a55300, 4px 4px 0 #864300, 6px 6px 0 #7a4900, 10px 10px 30px rgba(255,124,0,0.5), 0 0 80px rgba(255,124,0,0.4)",
            }}
          >
            PREMIERE
            <br />
            SOON
          </h2>

          <p
            className="reveal-on-scroll font-display mt-10 text-xl md:text-2xl italic text-cream/80 text-shadow-sm"
            style={{ transitionDelay: "400ms" }}
          >
            Engineering protection. Designed in India.
          </p>

          {!submitted ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSubmitted(true);
              }}
              className="reveal-on-scroll mx-auto mt-16 flex max-w-md flex-col gap-4 sm:flex-row"
              style={{ transitionDelay: "600ms" }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 rounded-full border border-cream/30 bg-white/5 px-8 py-4 text-sm text-cream placeholder:text-cream/40 outline-none focus:border-orange-glow transition-all backdrop-blur-sm shadow-inner"
              />
              <button
                type="submit"
                className="group relative overflow-hidden rounded-full bg-orange-glow px-10 py-4 text-[10px] tracking-[0.2em] text-white transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_50px_rgba(255,124,0,0.6)] light-sweep uppercase font-bold"
              >
                <span className="relative z-10">SECURE ACCESS</span>
              </button>
            </form>
          ) : (
            <div className="reveal-on-scroll mx-auto mt-12 max-w-md rounded-full border border-orange-glow/30 bg-orange-glow/10 px-8 py-4 text-sm tracking-[0.1em] text-cream backdrop-blur-md">
              You're on the list. Welcome to SOLIVA.
            </div>
          )}
        </div>

        <div
          className="reveal-on-scroll mt-24 flex flex-col items-center gap-10 text-[9px] tracking-[0.3em] text-cream/60"
          style={{ transitionDelay: "800ms" }}
        >
          <div className="flex gap-10 font-light items-center uppercase font-bold text-shadow-sm">
            <span className="hover:text-cream transition-colors cursor-pointer">INSTAGRAM</span>
            <span className="opacity-20 text-xs">✦</span>
            <span className="hover:text-cream transition-colors cursor-pointer">JOURNAL</span>
            <span className="opacity-20 text-xs">✦</span>
            <span className="hover:text-cream transition-colors cursor-pointer">PRESS</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="opacity-60">
              <SolivaLogo size={50} />
            </div>
            <div className="font-mono opacity-50 uppercase tracking-[0.1em] text-shadow-sm">
              © 2026 SOLIVA SUNWRAP — DESIGNED IN INDIA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
