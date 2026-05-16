import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "@/hooks/use-mobile";
import { SolivaLogo } from "./SolivaLogo";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";

gsap.registerPlugin(ScrollTrigger);

const problemPoints = [
  { id: 1, title: "Silent Radiance", desc: "Invisible UV rays penetrate ordinary weaves, reaching your skin even when you feel covered.", image: "/sun.png" },
  { id: 2, title: "Atmospheric Debt", desc: "Micro-pollutants and urban dust find every opening, settling silently into your pores during the ride.", image: "/dust.png" },
  { id: 3, title: "Kinetic Friction", desc: "A slipping scarf is more than an inconvenience; it's a distraction from the journey you're navigating.", image: "/constant-slipping.png" },
  { id: 4, title: "Stifled Breath", desc: "In the peak of noon, heavy layers turn protection into a suffocating burden of trapped heat.", image: "/heate-sufacation.png" },
  { id: 5, title: "Residual Exposure", desc: "The jaw, the neck, the delicate edges. Standard coverings leave your most vital areas completely exposed.", image: "/incompelete-protection.png" },
];

export function UrbanStorytelling() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  // Scroll logic for the 3D button reveal and horizontal progress
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "center center"] });
  const buttonRotateX = useTransform(scrollYProgress, [0.85, 1], [90, 0]);
  const buttonOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);
  const buttonScale = useTransform(scrollYProgress, [0.85, 1], [0.8, 1]);

  // Refs for animations
  const p1TextRef = useRef<HTMLDivElement>(null);
  const p2VisualRef = useRef<HTMLDivElement>(null);
  const p2TextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!isMobile) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: true,
            start: "top top",
            end: "+=350%",
            anticipatePin: 1,
            pinSpacing: false, // Essential for the next section to glide over this one
            invalidateOnRefresh: true,
            fastScrollEnd: true,
          },
        });

        // --- PANEL 1 REVEAL ---
        const cards = gsap.utils.toArray<HTMLElement>(".problem-card-container");
        tl.fromTo(cards, { autoAlpha: 0, scale: 0.95, y: 30 }, { autoAlpha: 1, scale: 1, y: 0, duration: 1.5, stagger: 0.1, ease: "power2.out" });
        tl.to({}, { duration: 1 });

        // --- TRANSITION TO PANEL 2 (Horizontal Slide) ---
        tl.to(containerRef.current, { xPercent: -50, duration: 2, ease: "power2.inOut" });

        // --- PANEL 2 REVEAL ---
        tl.fromTo(p2VisualRef.current, { autoAlpha: 0, scale: 1.05 }, { autoAlpha: 1, scale: 1, duration: 1.5, ease: "power3.out" }, "-=1.2");
        tl.fromTo(p2TextRef.current, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out" }, "-=1.0");
        
        // Final hold duration while the next section glides over
        tl.to({}, { duration: 1.5 });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <>
      <section ref={sectionRef} className="relative bg-luxury-editorial mesh-gradient ambient-glow cinematic-vignette overflow-hidden min-h-screen w-full z-10">
        {/* Cinematic Atmosphere Layer — Intensified for Luxury Flow */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 opacity-[0.05] grain" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(240,199,177,0.15)_0%,transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(216,154,114,0.1)_0%,transparent_60%)]" />
        </div>

        <div ref={containerRef} className="flex flex-col md:flex-row md:flex-nowrap md:w-[200%] h-auto md:h-screen items-center z-10">
          {/* PANEL 1 — EDITORIAL GRID PROBLEM */}
          <div className="relative flex flex-col h-auto md:h-full w-full md:w-1/2 justify-center px-10 md:px-24 py-24 md:py-0 flex-shrink-0 bg-transparent">
            {/* Soft Ambient Layer Behind Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,230,220,0.4)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="flex flex-col w-full space-y-16 md:space-y-24 max-w-[1400px] mx-auto relative z-10">
              <div ref={p1TextRef} className="relative flex flex-col md:flex-row md:items-start justify-between gap-12">
                <div className="max-w-2xl space-y-8 z-10">
                  <span className="block font-mono text-[9px] uppercase tracking-[0.8em] text-[#8B7B6E]">01 — THE UNSEEN REALITY</span>
                  <h2 className="font-display text-sculpted text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-[-0.03em] text-[#3D2E26]">Protection is an <br /><span className="italic font-normal text-[#D9772B]">illusion</span> we believe.</h2>
                </div>
                <div className="flex-1 flex flex-col justify-end items-start md:items-end space-y-10 md:pt-20">
                  <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#8B7B6E]/20 leading-[1] tracking-tight uppercase md:text-right">Navigating <br /><span className="italic font-normal lowercase text-[#8B7B6E]/40">invisible</span> landscapes.</h3>
                  <div className="hidden md:block w-32 h-[1px] bg-[#3D2E26]/10 mb-2" />
                </div>
              </div>

              {/* THE EDITORIAL GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 items-start">
                {problemPoints.map((point) => (
                  <div key={point.id} className="problem-card-container flex-shrink-0 space-y-6 group cursor-pointer">
                    <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-[#EFE7DC] transition-all duration-1000 group-hover:scale-105" style={{ border: "1px solid rgba(90,60,30,0.10)", boxShadow: "0 10px 30px rgba(80,50,20,0.05)" }}>
                      <img src={point.image} className="h-full w-full object-cover grayscale-[0.2] contrast-[1.05] brightness-[0.98] transition-transform duration-[2000ms] group-hover:scale-110" alt={point.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#3D2E26]/30 via-transparent to-transparent opacity-60" />
                      <div className="absolute top-6 left-6 h-8 w-8 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-[10px] font-mono text-white/90">0{point.id}</div>
                    </div>
                    <div className="space-y-3 px-1 transition-opacity duration-500 group-hover:opacity-80">
                      <h3 className="font-display text-xl text-[#3D2E26] leading-tight tracking-tight">{point.title}</h3>
                      <p className="font-light text-[11px] text-[#8B7B6E] leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PANEL 2 — SYSTEM ARCHITECTURE */}
          <div className="relative flex h-auto md:h-full w-full md:w-1/2 items-center bg-transparent px-10 md:px-24 py-24 md:py-0 flex-shrink-0 overflow-hidden">
             {/* Editorial Mesh for Panel 2 */}
            <div className="absolute inset-0 mesh-gradient opacity-40 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(243,221,210,0.3)_0%,transparent_60%)] pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32 items-center w-full max-w-[1400px] mx-auto relative z-10">
              <div ref={p2VisualRef} className="relative aspect-square group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5EFE6] to-[#EFE7DC] rounded-[3.5rem] overflow-hidden" style={{ border: "1px solid rgba(90,60,30,0.08)", boxShadow: "0 20px 60px rgba(80,50,20,0.04)" }}>
                  <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `radial-gradient(#4A382F 0.5px, transparent 0.5px)`, backgroundSize: "32px 32px" }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="opacity-[0.04] scale-150 rotate-[-12deg] transition-transform duration-[4000ms] group-hover:scale-[1.7]"><SolivaLogo height={450} /></div>
                    <div className="relative z-10 p-16 rounded-full bg-white/20 backdrop-blur-3xl border border-white/30 shadow-luxury-soft transition-transform duration-1000 group-hover:scale-105"><SolivaLogo height={150} /></div>
                  </div>
                </div>
              </div>
              <div ref={p2TextRef} className="space-y-16 md:space-y-20">
                <div className="space-y-8">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.8em] text-[#D9772B]">02 — THE RATIONALE</span>
                  <h2 className="font-display text-sculpted text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-[-0.03em] text-[#4A382F]">Engineered <br /><span className="italic font-normal opacity-90">Movement.</span></h2>
                  <p className="max-w-xl text-sm md:text-base text-[#8B7B6E] leading-relaxed font-light italic">Soliva reimaged protection not as a temporary layer, but as a system of defense that understands the geometry of the commute.</p>
                </div>
                <div className="grid grid-cols-1 gap-12">
                  {["Adaptive Coverage Architecture", "Atmospheric Intelligence", "Kinetic Equilibrium"].map((label, i) => (
                    <div key={i} className="group flex items-start gap-10">
                      <span className="font-mono text-[11px] text-[#D9772B]/60 pt-1">0{i + 1}</span>
                      <div className="space-y-2">
                        <h4 className="font-display text-2xl md:text-3xl text-[#3D2E26] tracking-tight group-hover:text-[#D9772B] transition-colors duration-500">{label}</h4>
                        <div className="w-0 h-[1px] bg-[#D9772B]/20 group-hover:w-full transition-all duration-700" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LUXURY FOOTER STRIP — Full-screen Edge-to-Edge with 3D Button Reveal */}
        <div className="hidden md:flex fixed bottom-0 left-0 right-0 z-50 w-full px-16 py-3.5 items-center justify-between border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.2)] backdrop-blur-2xl bg-gradient-to-r from-[#2A1A12] via-[#3A2418] to-[#2A1A12]">
          <div className="flex items-center gap-12">
            <div className="opacity-90 hover:opacity-100 transition-opacity duration-500 pr-10 border-r border-white/5"><SolivaLogo height={24} className="text-white" /></div>
            <div className="flex items-center gap-12">
              <div className="flex flex-col"><span className="font-mono text-[7px] tracking-[0.7em] text-white/30 uppercase leading-none text-nowrap">SYSTEM ARCHIVE // 26.01</span><span className="font-mono text-[6px] text-white/15 uppercase mt-1 tracking-widest text-nowrap">MILAN // PARIS // TOKYO</span></div>
              <div className="w-px h-6 bg-white/5" /><span className="font-mono text-[7px] tracking-[0.7em] text-white/30 uppercase text-nowrap">ENGINEERED FOR MOVEMENT</span>
            </div>
          </div>
          <div className="perspective-2000">
            <motion.button onClick={() => navigate({ to: "/beyond-the-scarf" })} style={{ rotateX: buttonRotateX, opacity: buttonOpacity, scale: buttonScale, transformStyle: "preserve-3d" }} whileHover={{ y: -1, scale: 1.05 }} whileTap={{ scale: 0.98 }} className="group relative overflow-hidden flex items-center gap-4 px-8 py-2.5 rounded-full bg-gradient-to-r from-[#C96A1D] to-[#E38B33] border border-white/20 shadow-lg">
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1500ms] ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]" />
              <span className="font-body text-[10px] font-medium tracking-[0.2em] uppercase text-[#FFF8F2] relative z-10">Beyond the Scarf</span>
              <svg width="14" height="10" viewBox="0 0 16 12" fill="none" className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-500"><path d="M10 1L15 6L10 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M1 6H15" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
            </motion.button>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .grain::after { content: ""; position: absolute; inset: -100%; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"); animation: noise 0.5s infinite steps(2); }
          @keyframes noise { 0% { transform: translate(0,0) } 10% { transform: translate(-5%,-5%) } 20% { transform: translate(-10%,5%) } 30% { transform: translate(5%,-10%) } 40% { transform: translate(-5%,15%) } 50% { transform: translate(-10%,5%) } 60% { transform: translate(15%,0) } 70% { transform: translate(0,10%) } 80% { transform: translate(-15%,0) } 90% { transform: translate(10%,5%) } 100% { transform: translate(5%,0) } }
        `}} />
      </section>

      {/* Spacer to allow the next section to glide over this one - matching background to prevent black gaps */}
      <div className="h-[350vh] w-full pointer-events-none bg-luxury-editorial mesh-gradient" />
    </>
  );
}
