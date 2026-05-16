import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { UrbanStorytelling } from "@/components/UrbanStorytelling";
import { CollectionSection } from "@/components/CollectionSection";
import { CompareSection } from "@/components/CompareSection";
import { VideoSection } from "@/components/VideoSection";
import { FinalCTA } from "@/components/FinalCTA";
import { LoadingPage } from "@/components/LoadingPage";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SOLIVA SUNWRAP — Luxury Sun Protection" },
      {
        name: "description",
        content: "SOLIVA SUNWRAP — A new era of luxury sun protection.",
      },
    ],
  }),
});

function Index() {
  const [loading, setLoading] = useState(true);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Global Lenis Smooth Scroll on Body (Natural Scroll)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Ensure scroll locking is completely disabled
    ScrollTrigger.normalizeScroll(false);
    
    gsap.config({
      force3D: true,
      nullTargetWarn: false,
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  useEffect(() => {
    if (!loading && mainRef.current) {
      ScrollTrigger.refresh();

      // Simple Reveal Animation for Content
      gsap.to(mainRef.current, {
        opacity: 1,
        visibility: "visible",
        duration: 1.5,
        ease: "power2.out"
      });
    }
  }, [loading]);

  return (
    <>
      {loading && <LoadingPage onComplete={() => setLoading(false)} />}
      
      {/* Cinematic Ambient Background - Standardized to Luxury Editorial Canvas */}
      <div className="fixed inset-0 bg-luxury-editorial mesh-gradient ambient-glow z-[-1]">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none grain" />
      </div>

      <main
        ref={mainRef}
        className="relative min-h-screen bg-transparent w-full"
        style={{ opacity: 0, visibility: 'hidden' }}
      >
        <Hero isRevealed={!loading} />
        <VideoSection />
        <UrbanStorytelling />
        <CollectionSection />
        <CompareSection />
        <FinalCTA />
      </main>
    </>
  );
}
