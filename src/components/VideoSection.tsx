import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  
  const trustItems = [
    "UPF 50+ PROTECTION", "DUAL-LAYER COMFORT", "FULL COVERAGE DESIGN",
    "BREATHABLE IN HEAT", "LIGHTWEIGHT DAILY WEAR", "NO SMUDGING", "NO MORE MESSY HAIR",
  ];
  const loop = [...trustItems, ...trustItems];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (videoContainerRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=200%", 
            scrub: 1.5,
            pin: true,
            pinSpacing: false, // Switching to manual spacer for better background control
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Scaling logic remains untouched
        tl.fromTo(videoContainerRef.current,
          { scale: 0.65, borderRadius: "4rem", border: "6px solid #F5820D", boxShadow: "0 40px 100px rgba(0,0,0,0.3)" },
          { scale: 1, borderRadius: "0rem", border: "0px solid #F5820D", boxShadow: "0 0 0 rgba(0,0,0,0)", duration: 1, ease: "power2.inOut" }
        );

        if (textContentRef.current) {
          tl.to(textContentRef.current, { autoAlpha: 0, y: -80, scale: 0.95, duration: 0.8, ease: "power2.inOut" }, 0);
        }

        tl.to({}, { duration: 0.5 }); 
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-[#F9F6F0] z-0">
        <div ref={textContentRef} className="absolute top-24 left-1/2 -translate-x-1/2 z-20 text-center w-full max-w-2xl px-6 pointer-events-none">
          <span className="text-[10px] tracking-[0.6em] text-[#3A2A1F]/40 uppercase font-medium">— SYSTEM CORE 01</span>
          <h2 className="heading-luxury text-sculpted font-display mt-4 text-4xl md:text-5xl lg:text-7xl text-[#3A2A1F] leading-tight">Built For Real <span className="italic">Daily Protection.</span></h2>
        </div>

        <div ref={videoContainerRef} className="absolute inset-0 z-10 w-full h-full overflow-hidden bg-black" style={{ willChange: "transform, border-radius" }}>
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/soliva-logo-anim.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
        </div>

        <div className="absolute bottom-0 inset-x-0 z-30 border-t border-[#3A2A1F]/5 bg-white/10 backdrop-blur-md py-4 overflow-hidden">
          <div className="marquee flex w-max gap-16 whitespace-nowrap">
            {loop.map((t, i) => (
              <span key={i} className="flex items-center gap-16 text-[9px] tracking-[0.3em] text-[#3A2A1F]/40 font-medium">{t}<span className="h-1.5 w-1.5 rounded-full bg-[#8B5E3C]/20" /></span>
            ))}
          </div>
        </div>
      </section>
      
      {/* Manual Spacer for VideoSection to ensure background continuity */}
      <div className="h-[200vh] w-full pointer-events-none bg-[#F9F6F0]" />
    </>
  );
}
