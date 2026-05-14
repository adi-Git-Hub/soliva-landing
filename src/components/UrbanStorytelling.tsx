import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "@/hooks/use-mobile";
import { SolivaLogo } from "./SolivaLogo";

gsap.registerPlugin(ScrollTrigger);

const problemPoints = [
  {
    id: 1,
    title: "Silent Radiance",
    desc: "Invisible UV rays penetrate ordinary weaves, reaching your skin even when you feel covered.",
    image: "/sun.png",
  },
  {
    id: 2,
    title: "Atmospheric Debt",
    desc: "Micro-pollutants and urban dust find every opening, settling silently into your pores during the ride.",
    image: "/dust.png",
  },
  {
    id: 3,
    title: "Kinetic Friction",
    desc: "A slipping scarf is more than an inconvenience; it's a distraction from the journey you're navigating.",
    image: "/constant-slipping.png",
  },
  {
    id: 4,
    title: "Stifled Breath",
    desc: "In the peak of noon, heavy layers turn protection into a suffocating burden of trapped heat.",
    image: "/heate-sufacation.png",
  },
  {
    id: 5,
    title: "Residual Exposure",
    desc: "The jaw, the neck, the delicate edges. Standard coverings leave your most vital areas completely exposed.",
    image: "/incompelete-protection.png",
  },
];

export function UrbanStorytelling() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Refs for animations
  const p1TextRef = useRef<HTMLDivElement>(null);
  const p1ImageRef = useRef<HTMLDivElement>(null);
  const p2VisualRef = useRef<HTMLDivElement>(null);
  const p2TextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!isMobile) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1.5,
            start: "top top",
            end: "+=400%",
            anticipatePin: 1,
            pinSpacing: true,
            invalidateOnRefresh: true,
          },
        });

        // --- PANEL 1 REVEAL ---
        const cards = gsap.utils.toArray<HTMLElement>(".problem-card-container");
        tl.fromTo(
          cards,
          { autoAlpha: 0, scale: 0.8, rotationY: -360, transformPerspective: 2000 },
          {
            autoAlpha: 1,
            scale: 1,
            rotationY: 0,
            duration: 1.4,
            stagger: 0.1,
            ease: "power2.out",
            force3D: true,
          },
        );

        if (p1TextRef.current?.children) {
          tl.fromTo(
            Array.from(p1TextRef.current.children),
            { autoAlpha: 0, y: 15 },
            { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.05, ease: "power2.out", force3D: true },
            "-=0.4",
          );
        }

        tl.to({}, { duration: 2.5 });

        // --- TRANSITION TO PANEL 2 (THE RESPONSE) ---
        tl.to(containerRef.current, {
          xPercent: -50,
          duration: 1.5,
          ease: "power2.inOut",
          force3D: true,
        });

        // --- PANEL 2 REVEAL ---
        tl.fromTo(
          p2VisualRef.current,
          { autoAlpha: 0, scale: 1.1, rotationY: 15, transformPerspective: 2000 },
          {
            autoAlpha: 1,
            scale: 1,
            rotationY: 0,
            duration: 1.5,
            ease: "power3.out",
            force3D: true,
          },
          "-=1.0",
        );

        if (p2TextRef.current?.children) {
          tl.fromTo(
            Array.from(p2TextRef.current.children),
            { autoAlpha: 0, y: 30 },
            { autoAlpha: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out", force3D: true },
            "-=1.2",
          );
        }

        tl.to({}, { duration: 2.5 });

        // Parallax background text
        gsap.to(".parallax-text", {
          x: -120,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=500%",
            scrub: 0.5,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section ref={sectionRef} className="relative bg-[#F5EFE4] overflow-hidden md:h-screen w-full">
      {/* Cinematic Ambient Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] grain z-0" />

      <div
        ref={containerRef}
        className="flex flex-col md:flex-row md:flex-nowrap md:w-[200%] h-auto md:h-screen items-center z-10"
      >
        {/* PANEL 1 — THE PROBLEM */}
        <div className="relative flex flex-col h-auto md:h-full w-full md:w-1/2 justify-center px-8 md:px-24 py-24 md:py-0 flex-shrink-0">
          <div className="flex flex-col w-full space-y-16 md:space-y-20">
            {/* Header Area */}
            <div
              ref={p1TextRef}
              className="relative flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-12 lg:gap-20 max-w-[95rem] w-full"
            >
              <div className="max-w-3xl space-y-6 z-10">
                <span className="block font-mono text-[10px] uppercase tracking-[0.7em] text-[#3A2A1F]/40">
                  01 — THE UNSEEN REALITY
                </span>
                <h2 className="heading-luxury text-sculpted font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.03em]">
                  Protection is an <span className="italic font-normal">illusion</span> we choose to
                  believe.
                </h2>
              </div>

              <div className="flex-1 flex flex-col justify-end items-start md:items-end space-y-6 md:pt-12">
                <div className="max-w-xl text-left md:text-right overflow-hidden">
                  <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#3A2A1F]/20 leading-[1.1] tracking-tight uppercase">
                    Navigating the <br />
                    <span className="italic font-normal lowercase">invisible</span> landscape.
                  </h3>
                </div>

                <div className="flex flex-col md:items-end w-full">
                  <div className="hidden md:block w-24 h-px bg-[#3A2A1F]/10 mb-6" />
                  <div className="max-w-[280px]">
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#3A2A1F]/30 leading-relaxed italic border-t border-[#3A2A1F]/10 pt-4 md:border-t-0 md:pt-0 md:text-right">
                      Traditional fabrics were designed for a static world. The modern city demands
                      a different intelligence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* THE 5 POINTS */}
            <div
              ref={p1ImageRef}
              className="flex flex-nowrap md:justify-center gap-8 md:gap-12 overflow-x-auto md:overflow-visible pb-20 scrollbar-hide translate-y-4 md:translate-y-6 will-change-transform"
            >
              {problemPoints.map((point) => (
                <div
                  key={point.id}
                  className="problem-card-container flex-shrink-0 w-[260px] md:w-[300px] space-y-6 md:space-y-8 group"
                >
                  <div className="card-premium-depth relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#E8DED1]">
                    <img
                      src={point.image}
                      className="image-cinematic-shadow h-full w-full object-cover grayscale-[0.3] contrast-[1.05] brightness-[0.95] transition-transform duration-1000 group-hover:scale-110"
                      alt={point.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3A2A1F]/30 via-transparent to-transparent opacity-60" />
                    <div className="absolute top-6 left-6 h-8 w-8 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-[10px] font-mono text-white/80">
                      0{point.id}
                    </div>
                  </div>
                  <div className="space-y-3 px-2">
                    <h3 className="text-sculpted-light font-display text-xl md:text-2xl text-[#3A2A1F] leading-tight">
                      {point.title}
                    </h3>
                    <p className="font-light text-xs md:text-sm text-[#3A2A1F]/60 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PANEL 2 — SYSTEM ARCHITECTURE (THE SOLUTION) */}
        <div className="relative flex h-auto md:h-full w-full md:w-1/2 items-center bg-[#F9F6F0] px-8 md:px-24 py-24 md:py-0 flex-shrink-0 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center w-full max-w-[95rem] mx-auto">
            {/* Left Visual Composition — Engineered Architecture */}
            <div ref={p2VisualRef} className="relative aspect-[4/5] md:aspect-square group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8DED1] to-[#D9CFC1] rounded-[3rem] overflow-hidden card-premium-depth">
                {/* Technical Blueprint Overlay */}
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(#3A2A1F 0.5px, transparent 0.5px)`,
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(139,94,60,0.15),transparent_70%)]" />

                {/* Protection Zone Markers */}
                <div className="absolute inset-0 z-20 pointer-events-none p-12">
                  <div className="absolute top-1/4 left-1/4 flex items-center gap-3">
                    <div className="h-px w-8 bg-[#3A2A1F]/20" />
                    <span className="font-mono text-[7px] tracking-widest text-[#3A2A1F]/40 uppercase">
                      ZONE_01 // ORBITAL DEFENSE
                    </span>
                  </div>
                  <div className="absolute bottom-1/3 right-1/4 flex items-center gap-3">
                    <span className="font-mono text-[7px] tracking-widest text-[#3A2A1F]/40 uppercase">
                      ZONE_04 // KINETIC ANCHOR
                    </span>
                    <div className="h-px w-8 bg-[#3A2A1F]/20" />
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Subtle Brand Watermark */}
                  <div className="opacity-[0.05] scale-150 rotate-[-15deg] transition-transform duration-[3000ms] group-hover:scale-[1.6]">
                    <SolivaLogo height={350} />
                  </div>

                  {/* Central Core — The Logo System */}
                  <div className="depth-float relative z-10 flex flex-col items-center">
                    <div className="p-14 rounded-full glass backdrop-blur-3xl border-white/20 shadow-luxury-soft transition-transform duration-1000 group-hover:scale-105">
                      <SolivaLogo height={140} />
                    </div>
                  </div>
                </div>

                {/* Luxury Lighting & Data detail */}
                <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-white/10 blur-[120px] pointer-events-none" />
                <div className="absolute bottom-12 left-12 flex items-end gap-6">
                  <div className="space-y-1">
                    <span className="block font-mono text-[8px] uppercase tracking-[0.4em] text-[#3A2A1F]/40">
                      SOLIVA PROTECTION SYSTEM
                    </span>
                    <span className="block font-mono text-[7px] text-[#3A2A1F]/20">
                      REF: ARCHIVE_SYS_26.01.04
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content Block — Science-Driven Narrative */}
            <div ref={p2TextRef} className="space-y-12 md:space-y-16">
              <div className="space-y-8">
                <span className="block font-mono text-[10px] uppercase tracking-[0.7em] text-[#8B5E3C]">
                  02 — THE RATIONALE
                </span>
                <h2 className="heading-luxury text-sculpted font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.03em]">
                  Engineered for the <br />
                  <span className="italic font-normal">Unseen</span> Realities.
                </h2>
                <p className="max-w-xl text-sm md:text-base text-[#3A2A1F]/70 leading-relaxed font-light">
                  Soliva was born from a singular observation: the tools we use to navigate the city
                  are failing the people who move within it. We reimagined protection not as a
                  temporary layer, but as a sophisticated system of defense—one that understands the
                  physics of heat, the geometry of the commute, and the delicate balance of the
                  human form in motion.
                </p>
              </div>

              {/* Engineered Feature Blocks */}
              <div className="grid grid-cols-1 gap-10 pt-4">
                {[
                  {
                    label: "Adaptive Coverage Architecture",
                    desc: "A precision-engineered silhouette designed to maintain a persistent seal across critical exposure zones, eliminating the need for constant manual adjustment.",
                  },
                  {
                    label: "Atmospheric Intelligence",
                    desc: "A dual-layer weave optimized to block micro-particulates and urban pollutants while facilitating effortless airflow in dense, high-heat environments.",
                  },
                  {
                    label: "Kinetic Equilibrium",
                    desc: "A weight-balanced structural fit that remains undisturbed during high-velocity movement, ensuring absolute defense never compromises the journey.",
                  },
                ].map((item, i) => (
                  <div key={i} className="group flex items-start gap-8">
                    <div className="flex flex-col items-center gap-2">
                      <span className="font-mono text-[10px] text-[#8B5E3C]/60">0{i + 1}</span>
                      <div className="w-px h-full bg-[#3A2A1F]/5 min-h-[40px] group-hover:bg-[#8B5E3C]/20 transition-colors duration-700" />
                    </div>
                    <div className="space-y-3 pt-0.5">
                      <h4 className="font-display text-xl md:text-2xl text-[#3A2A1F] tracking-tight">
                        {item.label}
                      </h4>
                      <p className="text-xs text-[#3A2A1F]/50 leading-relaxed max-w-sm font-light italic">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-[#3A2A1F]/5">
                <p className="font-mono text-[9px] uppercase tracking-[0.5em] text-[#3A2A1F]/30 leading-relaxed max-w-md">
                  Where engineered performance meets the poetry of modern movement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Persistent Minimalist Brand Detail */}
      <div className="hidden md:block fixed bottom-12 right-12 z-50 pointer-events-none">
        <span className="font-mono text-[8px] uppercase tracking-[0.5em] text-[#3A2A1F]/20">
          SOLIVA — ARCHIVE 26.01 / ENGINEERED MOVEMENT
        </span>
      </div>
    </section>
  );
}
