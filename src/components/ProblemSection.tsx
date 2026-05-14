import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Master timeline for the refined editorial sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // STEP 1: Image Card Reveal (3D Perspective Flip)
      tl.fromTo(
        imageRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.96,
          rotationY: 10,
          filter: "blur(12px)",
          transformPerspective: 1200,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power2.out",
        },
      );

      // STEP 2: Staggered Text Content Reveal (After image finishes)
      const textElements = textContentRef.current?.children;
      if (textElements) {
        tl.fromTo(
          Array.from(textElements),
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            stagger: 0.25,
            ease: "expo.out",
          },
          "-=0.4", // Slight overlap for fluid transition
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#F5EFE4] flex items-center justify-center py-32 md:py-48 overflow-hidden"
    >
      {/* Editorial Grid Container */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-24 lg:gap-40 items-center">
          {/* LEFT: Large vertical rounded image card */}
          <div className="relative flex justify-center md:justify-end order-2 md:order-1">
            <div
              ref={imageRef}
              className="relative w-full max-w-[480px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_30px_70px_rgba(58,42,31,0.12)] bg-[#E8DED1] will-change-transform"
            >
              <img
                src="https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2000&auto=format&fit=crop"
                alt="Cinematic Urban Exposure"
                className="h-full w-full object-cover grayscale-[0.3] contrast-[1.05] brightness-[0.95]"
              />
              {/* Subtle Atmospheric Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A2A1F]/20 via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 grain opacity-[0.03] pointer-events-none" />
            </div>
          </div>

          {/* RIGHT: Editorial typography content */}
          <div
            ref={textContentRef}
            className="flex flex-col space-y-14 md:space-y-16 order-1 md:order-2"
          >
            {/* Small uppercase label */}
            <div className="overflow-hidden">
              <span className="block font-mono text-[10px] tracking-[0.6em] text-[#3A2A1F]/40 uppercase">
                STORYLINE 01 — THE CONTEXT
              </span>
            </div>

            {/* Large serif headline */}
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] text-[#3A2A1F] tracking-tight">
              The city is <br />
              <span className="italic font-normal">designed</span> to <br />
              test you.
            </h2>

            {/* Supporting paragraph */}
            <div className="space-y-8 max-w-lg">
              <p className="font-light text-xl md:text-2xl text-[#3A2A1F]/70 leading-relaxed">
                Daily exposure to pollution, UV radiation, and trapped heat affects urban comfort
                more than we realize.
              </p>
            </div>

            {/* Bottom faded statement */}
            <div className="pt-10 md:pt-12 border-t border-[#3A2A1F]/10">
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#3A2A1F]/30 italic leading-loose max-w-md">
                Traditional fabrics were never designed <br />
                for modern urban conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
