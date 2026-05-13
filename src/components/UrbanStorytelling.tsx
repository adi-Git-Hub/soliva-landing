import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const PROBLEM_CARDS = [
  { id: 1, title: "Pollution Exposure", desc: "Micro-particles and urban smog." },
  { id: 2, title: "UV Radiation", desc: "Invisible radiation damage." },
  { id: 3, title: "Thermal Stress", desc: "Trapped heat during movement." },
];

export function UrbanStorytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Heavier, smoother spring for a luxury 'glide and rest' feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 35,
    mass: 0.8,
  });

  // REDUCED STEPPED PROGRESSION:
  // 0.0 -> 0.1: Panel 1 Resting (10% scroll - much shorter)
  // 0.1 -> 0.9: Smooth Glide to Panel 2 (80% scroll - fluid movement)
  // 0.9 -> 1.0: Panel 2 Resting (10% scroll - quick finish)
  const x = useTransform(smoothProgress, [0, 0.1, 0.9, 1], ["0%", "-2%", "-58%", "-60%"]);

  const revealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.2, 0.8, 0.2, 1] }
    }
  };

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[#F5EFE4]">
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        
        {/* Subtle Ambient Depth Layer */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.015] grain z-0" />
        
        <motion.div 
          style={{ x }} 
          className="flex flex-nowrap h-full w-[250vw] items-center z-10"
        >
          
          {/* SECTION 1: THE INTRODUCTION (100vw) */}
          <motion.div 
            className="relative flex h-full w-[100vw] items-center px-12 md:px-24 flex-shrink-0"
          >
            <div className="grid h-full w-full grid-cols-1 md:grid-cols-2 gap-20 items-center py-16">
              
              {/* Left: Master Image */}
              <div className="relative flex h-full w-full items-center justify-center">
                <div className="relative aspect-[3/4] h-[75vh] w-full max-w-lg overflow-hidden rounded-sm shadow-2xl bg-[#E8DED1]">
                  <img
                    src="/hero-image.png"
                    className="h-full w-full object-cover"
                    style={{ objectPosition: "center 15%" }}
                    alt="Soliva Urban"
                  />
                  <div className="absolute inset-0 bg-black/5" />
                </div>
              </div>

              {/* Right: Intro Typography */}
              <div className="flex flex-col justify-center max-w-xl">
                <motion.span 
                  initial="hidden"
                  whileInView="visible"
                  variants={revealVariants}
                  className="mb-8 font-mono text-[10px] uppercase tracking-[0.5em] text-[#3A2A1F]/40"
                >
                  STORYLINE 01 — THE CONTEXT
                </motion.span>
                <motion.h2 
                  initial="hidden"
                  whileInView="visible"
                  variants={revealVariants}
                  className="font-display text-6xl md:text-8xl leading-[1.0] text-[#3A2A1F] mb-10"
                >
                  The city environment <br />
                  is <span className="italic text-[#8B5E3C]">designed</span> to test you.
                </motion.h2>
                <motion.p 
                  initial="hidden"
                  whileInView="visible"
                  variants={revealVariants}
                  className="font-light leading-relaxed text-[#3A2A1F]/70 text-xl border-l border-[#8B5E3C]/30 pl-8"
                >
                  Daily exposure to pollution, UV radiation, and trapped heat affects urban comfort more than we realize.
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* SECTION 2: EDITORIAL DASHBOARD (150vw wide area for side-by-side visuals) */}
          <motion.div 
            className="relative flex h-full w-[150vw] items-center bg-[#FDFBF7] px-12 md:px-24 flex-shrink-0"
          >
            <div className="flex h-full w-full items-center justify-between gap-16 py-16">
              
              {/* COMPONENT A: SCOOTER RIDER */}
              <div className="flex-shrink-0 w-[30vw] max-w-sm">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm shadow-xl bg-[#E8DED1]">
                  <img 
                    src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200&auto=format&fit=crop" 
                    className="w-full h-full object-cover" 
                    style={{ objectPosition: "center 30%" }}
                  />
                  <div className="absolute inset-0 bg-black/5" />
                  <div className="absolute bottom-6 left-6">
                    <span className="font-mono text-[8px] text-white tracking-[0.4em] uppercase">Daily Rhythm</span>
                  </div>
                </div>
              </div>

              {/* COMPONENT B: CENTERPIECE PORTRAIT */}
              <div className="flex-shrink-0 w-[40vw] max-w-md">
                <div className="relative aspect-[3/4] h-[75vh] w-full overflow-hidden shadow-[0_50px_100px_-20px_rgba(58,42,31,0.2)] rounded-sm bg-[#E8DED1]">
                  <img 
                    src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1200&auto=format&fit=max" 
                    className="h-full w-full object-cover" 
                    style={{ objectPosition: "center 5%" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3A2A1F]/50 via-transparent to-transparent opacity-70" />
                  <div className="absolute bottom-12 left-10 right-10 text-white">
                    <h3 className="font-display text-4xl mb-4 italic">Urban Reality</h3>
                    <p className="text-white/80 font-light text-sm leading-relaxed max-w-sm">
                      Engineered for the micro-climates of the cityscape.
                    </p>
                  </div>
                </div>
              </div>

              {/* COMPONENT C: TECHNICAL STACK (Always on the right) */}
              <div className="flex-shrink-0 w-[35vw] max-w-lg flex flex-col gap-8">
                <div className="mb-4">
                  <h4 className="font-display text-4xl text-[#3A2A1F] italic mb-2">Technical Analysis</h4>
                  <div className="h-px w-20 bg-[#8B5E3C]/30" />
                </div>
                
                {PROBLEM_CARDS.map((card, i) => (
                  <div 
                    key={card.id}
                    className="p-8 bg-white/40 backdrop-blur-md border border-[#3A2A1F]/5 rounded-sm hover:bg-white/70 transition-all duration-500 group"
                  >
                    <span className="font-mono text-[9px] text-[#3A2A1F]/30 block mb-4">0{card.id}</span>
                    <h4 className="text-[11px] uppercase tracking-widest text-[#3A2A1F] font-semibold mb-2">
                      {card.title}
                    </h4>
                    <p className="text-xs font-light text-[#3A2A1F]/60 leading-relaxed">
                      {card.desc}
                    </p>
                    <div className="mt-6 h-px w-0 bg-[#8B5E3C]/20 group-hover:w-full transition-all duration-1000" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Narrative Progress Tracker */}
      <div className="fixed bottom-12 right-12 z-50 flex items-center gap-4 mix-blend-difference">
        <div className="flex flex-col items-end">
          <div className="relative h-[1px] w-20 bg-white/20">
            <motion.div
              style={{ scaleX: smoothProgress }}
              className="absolute inset-0 origin-left bg-white"
            />
          </div>
          <span className="mt-3 font-mono text-[7px] uppercase tracking-[0.4em] text-white/40">
            SOLIVA — NARRATIVE 02
          </span>
        </div>
      </div>
    </section>
  );
}
