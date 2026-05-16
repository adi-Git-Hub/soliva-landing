import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SolivaLogo } from "./SolivaLogo";

export function Hero({ isRevealed = false }: { isRevealed?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Cinematic parallax transforms
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[120vh] w-full overflow-hidden bg-[#F9F6F0]">
      {/* Sticky Wrapper for the Cinematic Scene */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-10">
        
        {/* Fullscreen Cinematic Visual */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            style={{ scale: bgScale }}
            initial={{ scale: 1.1, filter: "blur(20px)" }}
            animate={{ scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-image.png')" }}
          />
          {/* Atmospheric Layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#F9F6F0]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
          <div className="absolute inset-0 opacity-[0.04] grain pointer-events-none mix-blend-overlay" />
        </div>

        {/* Floating Navbar */}
        <nav className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-10 py-12 md:px-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="group cursor-pointer"
          >
            <SolivaLogo height={38} />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="hidden gap-16 text-[9px] tracking-[0.5em] text-[#3A2A1F]/50 md:flex font-light uppercase"
          >
            {["Experience", "Technology", "Journal"].map((item) => (
              <span key={item} className="hover:text-[#3A2A1F] transition-colors duration-500 cursor-pointer">
                {item}
              </span>
            ))}
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="rounded-full border border-[#3A2A1F]/10 px-8 py-2.5 text-[9px] tracking-[0.4em] text-[#3A2A1F]/60 hover:bg-[#3A2A1F] hover:text-white transition-all duration-700 uppercase font-medium"
          >
            Notify Me
          </motion.button>
        </nav>

        {/* Central Cinematic Composition */}
        <motion.div 
          style={{ y: contentY, opacity }}
          className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center"
        >
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            {/* Logo Mark */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="mb-16"
            >
              <SolivaLogo height={80} />
            </motion.div>

            {/* Brand Title with Cinematic Reveal */}
            <div className="mb-10 overflow-hidden">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] tracking-[0.3em] uppercase font-light leading-none text-[#3A2A1F]"
              >
                SOLIVA
              </motion.h1>
            </div>

            {/* Subtitle / Coming Soon */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1.6 }}
              className="space-y-16"
            >
              <p className="font-body text-[10px] md:text-[11px] font-light tracking-[1.4em] text-[#3A2A1F]/40 uppercase italic">
                Coming Soon
              </p>

              {/* Mission Statement */}
              <div className="max-w-2xl mx-auto border-t border-[#3A2A1F]/5 pt-16">
                <p className="font-body text-[11px] md:text-sm font-light tracking-[0.25em] text-[#3A2A1F]/60 leading-relaxed uppercase italic">
                  Redefining urban movement <br className="hidden md:block" /> through advanced textile architecture.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Details */}
        <div className="absolute bottom-12 inset-x-12 z-20 flex justify-between items-end pointer-events-none px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="flex flex-col gap-3"
          >
            <span className="font-mono text-[8px] tracking-[0.5em] text-[#3A2A1F]/30 uppercase">SYSTEM ARCHIVE // 26.01</span>
            <div className="w-16 h-px bg-[#3A2A1F]/20" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="flex items-center gap-6"
          >
            <span className="font-mono text-[8px] tracking-[0.5em] text-[#3A2A1F]/30 uppercase">SCROLL TO EXPLORE</span>
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-10 bg-gradient-to-b from-[#3A2A1F]/30 to-transparent" 
            />
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .grain::after {
          content: "";
          position: absolute;
          inset: -100%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          animation: noise 0.5s infinite steps(2);
        }
        @keyframes noise {
          0% { transform: translate(0,0) }
          10% { transform: translate(-5%,-5%) }
          20% { transform: translate(-10%,5%) }
          30% { transform: translate(5%,-10%) }
          40% { transform: translate(-5%,15%) }
          50% { transform: translate(-10%,5%) }
          60% { transform: translate(15%,0) }
          70% { transform: translate(0,10%) }
          80% { transform: translate(-15%,0) }
          90% { transform: translate(10%,5%) }
          100% { transform: translate(5%,0) }
        }
      `}} />
    </section>
  );
}
