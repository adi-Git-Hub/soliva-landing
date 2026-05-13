import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const PROBLEM_CARDS = [
  { id: 1, title: "Heat Buildup" },
  { id: 2, title: "Poor Breathability" },
  { id: 3, title: "Constant Readjustment" },
  { id: 4, title: "Surface Coverage Only" },
];

const WHY_SOLIVA_FEATURES = [
  { id: 1, title: "Breathable Comfort" },
  { id: 2, title: "Lightweight Protection" },
  { id: 3, title: "Designed For Daily Movement" },
  { id: 4, title: "Urban Ready Design" },
];

export function StorytellingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Transform scroll progress to horizontal movement
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-50%"]);

  // Parallax effects for elements inside panels
  const panel1TextY = useTransform(smoothProgress, [0, 0.5], [0, -100]);
  const panel2TextY = useTransform(smoothProgress, [0.5, 1], [100, 0]);
  const panel1ImageScale = useTransform(smoothProgress, [0, 0.5], [1, 1.1]);
  const panel2ImageScale = useTransform(smoothProgress, [0.5, 1], [0.9, 1]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[#F5EFE4]">
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        <motion.div style={{ x }} className="flex h-full w-[200vw]">
          {/* PANEL 1: THE PROBLEM */}
          <div className="relative flex h-full w-[100vw] items-center px-6 md:px-24">
            <div className="grid h-full w-full grid-cols-1 md:grid-cols-2 items-center gap-12 py-20">
              {/* Left: Cinematic Urban Visuals */}
              <motion.div
                style={{ scale: panel1ImageScale }}
                className="relative h-full w-full overflow-hidden rounded-2xl bg-[#E8DED1] md:h-[80%] shadow-2xl"
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#3A2A1F]/40 to-transparent" />

                {/* Dust/Atmosphere particles effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0.1, y: 0 }}
                      animate={{
                        opacity: [0.1, 0.3, 0.1],
                        y: [-20, 20],
                        x: [-10, 10],
                      }}
                      transition={{
                        duration: 5 + Math.random() * 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute h-1 w-1 rounded-full bg-white/40"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                    />
                  ))}
                </div>

                <div className="absolute bottom-10 left-10 text-white/80">
                  <p className="font-mono text-[10px] tracking-[0.3em] uppercase">
                    Urban Exposure — 12:40 PM
                  </p>
                </div>
              </motion.div>

              {/* Right: Text Content */}
              <motion.div
                style={{ y: panel1TextY }}
                className="flex flex-col justify-center max-w-xl"
              >
                <motion.span className="font-mono text-[10px] tracking-[0.3em] text-[#3A2A1F]/60 uppercase mb-6">
                  THE PROBLEM
                </motion.span>
                <motion.h2 className="font-display text-4xl md:text-7xl text-[#3A2A1F] leading-[1.05] mb-8">
                  Your daily environment is <span className="italic">harsher than you think.</span>
                </motion.h2>
                <motion.p className="text-lg text-[#3A2A1F]/70 font-light leading-relaxed mb-12">
                  Daily exposure to pollution, UV rays, dust, and trapped heat affects comfort far
                  more than most people realize.
                </motion.p>

                <div className="grid grid-cols-2 gap-4">
                  {PROBLEM_CARDS.map((card, i) => (
                    <motion.div
                      key={card.id}
                      className="group p-6 rounded-xl border border-[#3A2A1F]/5 bg-white/30 backdrop-blur-sm transition-all hover:bg-white/50"
                    >
                      <p className="text-xs font-mono text-[#3A2A1F]/40 mb-2">0{card.id}</p>
                      <h4 className="text-sm font-medium text-[#3A2A1F] tracking-wide uppercase">
                        {card.title}
                      </h4>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* PANEL 2: WHY SOLIVA */}
          <div className="relative flex h-full w-[100vw] items-center px-6 md:px-24 bg-[#FDFBF7]">
            <div className="grid h-full w-full grid-cols-1 md:grid-cols-2 items-center gap-12 py-20">
              {/* Left: Content */}
              <motion.div
                style={{ y: panel2TextY }}
                className="flex flex-col justify-center max-w-xl md:order-1 order-2"
              >
                <motion.span className="font-mono text-[10px] tracking-[0.3em] text-[#3A2A1F]/60 uppercase mb-6">
                  WHY SOLIVA
                </motion.span>
                <motion.h2 className="font-display text-4xl md:text-7xl text-[#3A2A1F] leading-[1.05] mb-8">
                  Protection should never <span className="italic">compromise comfort.</span>
                </motion.h2>
                <motion.p className="text-lg text-[#3A2A1F]/70 font-light leading-relaxed mb-12">
                  SOLIVA is designed to bridge the gap between breathable comfort, lightweight
                  protection, and everyday movement.
                </motion.p>

                <div className="grid grid-cols-2 gap-6">
                  {WHY_SOLIVA_FEATURES.map((feature, i) => (
                    <motion.div key={feature.id} className="flex flex-col gap-2">
                      <div className="h-[1px] w-full bg-[#3A2A1F]/10 mb-2" />
                      <h4 className="text-sm font-medium text-[#3A2A1F] tracking-wide uppercase">
                        {feature.title}
                      </h4>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right: Premium Scarf Visual */}
              <div className="relative h-full w-full flex items-center justify-center md:order-2 order-1">
                <motion.div
                  style={{
                    scale: panel2ImageScale,
                    rotate: useTransform(smoothProgress, [0.5, 1], [-10, 0]),
                  }}
                  className="relative aspect-square w-full max-w-lg"
                >
                  {/* Abstract scarf shape */}
                  <div className="absolute inset-0 bg-[#3A2A1F]/5 rounded-full blur-3xl animate-premium-pulse" />

                  <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                    <defs>
                      <linearGradient id="premium-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F5EFE4" />
                        <stop offset="100%" stopColor="#E8DED1" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      d="M40,60 C40,60 80,40 120,60 C160,80 160,140 120,160 C80,180 40,160 40,100 Z"
                      fill="url(#premium-gradient)"
                      stroke="#3A2A1F"
                      strokeWidth="0.2"
                      opacity="0.8"
                    />
                    {/* Airflow lines */}
                    {[...Array(5)].map((_, i) => (
                      <motion.path
                        key={i}
                        d={`M ${60 + i * 15} 40 Q ${100 + i * 10} ${100} ${60 + i * 15} 160`}
                        fill="none"
                        stroke="#3A2A1F"
                        strokeWidth="0.1"
                        opacity="0.2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 0] }}
                        transition={{
                          duration: 3 + i,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                  </svg>

                  {/* Minimalist floating info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute top-0 right-0 p-4 border border-[#3A2A1F]/10 bg-white/40 backdrop-blur-md rounded-full"
                  >
                    <span className="text-[8px] font-mono tracking-widest text-[#3A2A1F]">
                      90g WEIGHT
                    </span>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Progress Indicator */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        <div className="h-[1px] w-24 bg-[#3A2A1F]/10 relative overflow-hidden">
          <motion.div
            style={{ scaleX: smoothProgress }}
            className="absolute inset-0 bg-[#3A2A1F] origin-left"
          />
        </div>
        <span className="font-mono text-[9px] tracking-widest text-[#3A2A1F]/60">STORYLINE</span>
      </div>
    </section>
  );
}
