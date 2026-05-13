import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "@/hooks/use-mobile";

gsap.registerPlugin(ScrollTrigger);

export function UrbanStorytelling() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!isMobile) {
        // Horizontal Scroll for Desktop
        gsap.to(containerRef.current, {
          xPercent: -50, // Move 50% for 2 panels
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1.2,
            start: "top top",
            end: "+=120%", // Even shorter for a "brief cinematic pause"
            anticipatePin: 1,
          },
        });

        // Subtle Image Parallax
        gsap.to(".parallax-img", {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Premium Text Reveal
      const reveals = gsap.utils.toArray<Element>(".reveal-text");
      reveals.forEach((text) => {
        gsap.from(text, {
          y: 20,
          opacity: 0,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: text,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section ref={sectionRef} className="relative bg-[#F5EFE4] overflow-hidden">
      {/* Cinematic Ambient Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] grain z-0" />

      <div
        ref={containerRef}
        className="flex flex-col md:flex-row md:flex-nowrap md:w-[200vw] h-auto md:h-screen items-center z-10"
      >
        {/* PANEL 1 — THE PROBLEM */}
        <div className="relative flex flex-col md:flex-row h-auto md:h-full w-full md:w-[100vw] items-center px-6 md:px-24 py-24 md:py-0 flex-shrink-0">
          <div className="grid h-full w-full grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
            {/* Left: Strong Urban Portrait */}
            <div className="relative flex items-center justify-center order-2 md:order-1">
              <div className="relative aspect-[4/5] h-[60vh] md:h-[75vh] w-full max-w-lg overflow-hidden rounded-sm shadow-2xl bg-[#E8DED1]">
                <img
                  src="https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2000&auto=format&fit=crop"
                  className="parallax-img h-full w-full object-cover grayscale-[0.25] contrast-[1.05]"
                  style={{ transform: "scale(1.2)" }}
                  alt="Urban environment"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>

            {/* Right: Editorial Typography */}
            <div className="flex flex-col justify-center order-1 md:order-2 max-w-2xl">
              <span className="reveal-text mb-10 block font-mono text-[10px] uppercase tracking-[0.7em] text-[#3A2A1F]/40">
                STORYLINE 01 — THE CONTEXT
              </span>

              <h2 className="reveal-text font-display text-5xl md:text-[6rem] leading-[1.0] text-[#3A2A1F] mb-12">
                The city is <span className="italic font-normal">designed</span> to test you.
              </h2>

              <div className="reveal-text space-y-12 border-l border-[#3A2A1F]/10 pl-10 md:pl-12">
                <p className="font-light leading-relaxed text-[#3A2A1F]/80 text-xl md:text-2xl max-w-lg">
                  Daily exposure to pollution, UV radiation, and trapped heat affects urban comfort
                  more than we realize.
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#3A2A1F]/40 leading-relaxed italic">
                  Traditional fabrics were never designed <br />
                  for modern urban conditions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PANEL 2 — ENVIRONMENTAL EXPOSURE */}
        <div className="relative flex h-auto md:h-full w-full md:w-[100vw] items-center bg-[#FDFBF7] px-6 md:px-24 py-24 md:py-0 flex-shrink-0">
          <div className="w-full max-w-7xl mx-auto">
            <div className="mb-16 md:mb-24 flex items-end justify-between">
              <div className="max-w-xl">
                <span className="reveal-text mb-6 block font-mono text-[10px] uppercase tracking-[0.7em] text-[#3A2A1F]/40">
                  ENVIRONMENTAL EXPOSURE
                </span>
                <h3 className="reveal-text font-display text-4xl md:text-5xl text-[#3A2A1F]">
                  The Invisible <span className="italic">Urban Tax.</span>
                </h3>
              </div>
              <div className="hidden md:block h-px w-32 bg-[#3A2A1F]/10 mb-2" />
            </div>

            {/* Connected Environmental Composition (Triptych) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 overflow-hidden rounded-sm shadow-luxury-soft bg-[#3A2A1F]/5">
              {/* Pollution */}
              <div className="group relative aspect-[4/5] md:aspect-[4/6] overflow-hidden bg-[#E8DED1]">
                <img
                  src="https://images.unsplash.com/photo-1527525443983-6e60c75efe46?q=80&w=1200&auto=format&fit=crop"
                  className="w-full h-full object-cover grayscale-[0.4] transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                  alt="Pollution"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors duration-1000" />
                <div className="absolute bottom-10 left-10 overflow-hidden">
                  <span className="block font-display text-3xl text-white italic tracking-wide translate-y-0 transition-transform duration-700">
                    Pollution
                  </span>
                </div>
              </div>

              {/* UV Exposure */}
              <div className="group relative aspect-[4/5] md:aspect-[4/6] overflow-hidden bg-[#E8DED1]">
                <img
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop"
                  className="w-full h-full object-cover grayscale-[0.4] transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                  alt="UV Exposure"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors duration-1000" />
                <div className="absolute bottom-10 left-10 overflow-hidden">
                  <span className="block font-display text-3xl text-white italic tracking-wide translate-y-0 transition-transform duration-700">
                    UV Exposure
                  </span>
                </div>
              </div>

              {/* Heat */}
              <div className="group relative aspect-[4/5] md:aspect-[4/6] overflow-hidden bg-[#E8DED1]">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
                  className="w-full h-full object-cover grayscale-[0.4] transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                  alt="Heat"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors duration-1000" />
                <div className="absolute bottom-10 left-10 overflow-hidden">
                  <span className="block font-display text-3xl text-white italic tracking-wide translate-y-0 transition-transform duration-700">
                    Heat
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-20 flex justify-between items-center">
              <span className="font-mono text-[9px] uppercase tracking-[0.6em] text-[#3A2A1F]/30">
                Cohesive Atmospheric Grading — ACTIVE
              </span>
              <div className="flex gap-4">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-1 w-1 rounded-full bg-[#3A2A1F]/20" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Persistent Minimalist Brand Detail */}
      <div className="hidden md:block fixed bottom-12 right-12 z-50 pointer-events-none">
        <span className="font-mono text-[8px] uppercase tracking-[0.5em] text-[#3A2A1F]/20">
          SOLIVA — ARCHIVE 26.01
        </span>
      </div>
    </section>
  );
}
