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
      className="relative w-full overflow-hidden bg-cinematic-dark grain py-32 md:py-48 perspective-2000"
    >
      <Particles count={60} />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-glow/25 blur-[150px]" />
        <div className="absolute -bottom-40 left-1/2 h-[400px] w-[1000px] -translate-x-1/2 rounded-[50%] bg-brown/40 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="reveal-on-scroll mx-auto inline-flex text-cream logo-glow">
          <SolivaLogo size={180} />
        </div>

        <h2
          className="reveal-on-scroll font-display mt-16 text-6xl md:text-8xl lg:text-[10rem] tracking-[0.1em] text-cream leading-none will-change-transform"
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
          className="reveal-on-scroll font-display mt-10 text-xl md:text-2xl italic text-cream/70"
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
            className="reveal-on-scroll mx-auto mt-16 flex max-w-md flex-col gap-3 sm:flex-row"
            style={{ transitionDelay: "600ms" }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 rounded-full border border-cream/20 bg-cream/5 px-6 py-4 text-sm text-cream placeholder:text-cream/40 outline-none focus:border-orange-glow transition-all backdrop-blur-sm"
            />
            <button
              type="submit"
              className="group relative overflow-hidden rounded-full bg-orange-glow px-10 py-4 text-[11px] tracking-[0.4em] text-white transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_50px_rgba(255,124,0,0.6)] light-sweep uppercase"
            >
              <span className="relative z-10">SECURE ACCESS</span>
            </button>
          </form>
        ) : (
          <div className="reveal-on-scroll mx-auto mt-12 max-w-md rounded-full border border-orange-glow/40 bg-orange-glow/10 px-8 py-4 text-sm tracking-[0.2em] text-cream backdrop-blur-md">
            You're on the list. Welcome to SOLIVA.
          </div>
        )}

        <div 
          className="reveal-on-scroll mt-24 flex flex-col items-center gap-8 text-[10px] tracking-[0.6em] text-cream/40"
          style={{ transitionDelay: "800ms" }}
        >
          <div className="flex gap-10 font-light items-center">
            <span className="hover:text-cream transition-colors cursor-pointer">INSTAGRAM</span>
            <span className="opacity-20 text-xs">✦</span>
            <span className="hover:text-cream transition-colors cursor-pointer">JOURNAL</span>
            <span className="opacity-20 text-xs">✦</span>
            <span className="hover:text-cream transition-colors cursor-pointer">PRESS</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="opacity-40">
              <SolivaLogo size={60} />
            </div>
            <div className="font-mono opacity-60">© 2026 SOLIVA SUNWRAP — DESIGNED IN INDIA</div>
          </div>
        </div>
      </div>
    </section>
  );
}
