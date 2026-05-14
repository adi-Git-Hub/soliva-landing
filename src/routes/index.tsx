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
  const [mounted, setMounted] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.config({
      ignoreMobileResize: true,
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize",
      limitCallbacks: true,
    });

    gsap.ticker.lagSmoothing(1000 / 60, 16);
    
    gsap.config({
      force3D: true,
      nullTargetWarn: false,
    });

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!loading && mounted && mainRef.current) {
      // Cinematic Reveal Timeline
      const tl = gsap.timeline({
        defaults: { ease: "expo.out" }
      });

      // 1. Initial State - main is already hidden via style
      gsap.set(mainRef.current, { 
        visibility: "visible",
        autoAlpha: 1 
      });

      // Target Hero elements specifically
      const hero = mainRef.current.querySelector('section');
      if (!hero) return;

      const heroBg = hero.querySelector('.pointer-events-none');
      const heroLogo = hero.querySelector('.animate-float > div:first-child');
      const heroTitle = hero.querySelector('h1');
      const heroSubtitle = hero.querySelector('p'); // Status Label
      const heroMission = hero.querySelector('.hero-mission');
      const heroNav = hero.querySelector('nav');

      const revealTargets = [heroLogo, heroTitle, heroSubtitle, heroMission, heroNav].filter(Boolean);

      tl.set(revealTargets, { opacity: 0, y: 40 });

      if (heroBg) {
        tl.set(heroBg, { opacity: 0, scale: 1.1 });
      }

      // 2. Reveal Background from beneath
      tl.fromTo(hero, 
        { y: "10vh", autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 2.5, ease: "power4.out" }
      );

      if (heroBg) {
        tl.to(heroBg, {
          opacity: 1,
          scale: 1,
          duration: 3,
          ease: "power2.out"
        }, "-=2");
      }

      // 3. Staggered content reveal
      tl.to(revealTargets, {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.2,
        ease: "expo.out"
      }, "-=1.8");
    }
  }, [loading, mounted]);

  if (!mounted) return null;

  return (
    <>
      {loading && <LoadingPage onComplete={() => setLoading(false)} />}
      <main
        ref={mainRef}
        className="flex min-h-screen flex-col bg-[#F9F6F0] overflow-x-hidden w-full"
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
