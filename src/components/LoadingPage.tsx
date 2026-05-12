import { useEffect, useRef, useState, memo } from "react";
import { Particles } from "./Particles";
import { SolivaLogo } from "./SolivaLogo";

const OptimizedParticles = memo(() => <Particles count={40} />);

export function LoadingPage({ onComplete }: { onComplete: () => void }) {
  const progressRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [exiting, setExiting] = useState(false);
  const frameRef = useRef<number>(null);
  const startTimeRef = useRef<number>(null);

  useEffect(() => {
    const duration = 2400; // Slightly longer for premium feel

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(100, (elapsed / duration) * 100);

      if (progressRef.current) {
        progressRef.current.style.width = `${progress}%`;
      }
      if (counterRef.current) {
        counterRef.current.textContent = `${Math.floor(progress)}%`;
      }

      if (progress < 100) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setExiting(true);
        setTimeout(onComplete, 600); // More graceful cinematic dissolve
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-cinematic-dark overflow-hidden transition-all duration-700 ease-in-out ${
        exiting ? "opacity-0 scale-[1.1] blur-2xl pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 grain opacity-20" />
      <OptimizedParticles />

      {/* Premium Cinematic Lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div 
          className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-glow/10 blur-[160px] animate-pulse" 
          style={{ transition: "all 2s ease-in-out" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 w-full max-w-lg">
        {/* Official SOLIVA Logo - Premium Cinematic Reveal */}
        <div 
          className="mb-20 will-change-transform flex flex-col items-center"
          style={{ 
            animation: "logoEnter 1.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
            perspective: "1000px"
          }}
        >
          <div className="text-cream scale-[2] md:scale-[3] drop-shadow-[0_0_40px_rgba(245,245,220,0.15)] transform-gpu transition-transform duration-1000">
            <SolivaLogo size={120} className="animate-[logoFloat_6s_ease-in-out_infinite]" />
          </div>
          
          <div 
            className="mt-24 text-center space-y-4 opacity-0"
            style={{ animation: "fadeInUp 1s ease-out 0.8s forwards" }}
          >
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-orange-glow to-transparent" />
            <p className="text-[10px] tracking-[1em] text-cream/30 uppercase font-light">
              ENGINEERING PROTECTION
            </p>
          </div>
        </div>

        {/* Minimalist Progress Section */}
        <div 
          className="w-full max-w-[320px] mt-8 opacity-0"
          style={{ animation: "fadeIn 1.2s ease-out 1.2s forwards" }}
        >
          <div className="relative h-[1px] w-full bg-cream/5 overflow-hidden">
            <div
              ref={progressRef}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-transparent via-orange-glow/60 to-transparent will-change-[width] blur-[0.5px]"
              style={{ width: "0%" }}
            />
          </div>
          <div className="mt-6 flex justify-between items-center text-[9px] tracking-[0.6em] text-cream/20 font-mono">
            <span className="flex items-center gap-3">
              <span className="w-1 h-1 bg-orange-glow/40 rounded-full animate-pulse" />
              SYSTEM_INITIALIZING
            </span>
            <span ref={counterRef}>0%</span>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes logoEnter {
          from { opacity: 0; transform: translate3d(0, 40px, -100px) rotateX(10deg); filter: blur(20px); }
          to { opacity: 1; transform: translate3d(0, 0, 0) rotateX(0); filter: blur(0); }
        }
        @keyframes logoFloat {
          0%, 100% { transform: translate3d(0, 0, 0) rotateY(0deg) scale(1); }
          50% { transform: translate3d(0, -10px, 40px) rotateY(5deg) scale(1.02); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}} />
    </div>
  );
}
