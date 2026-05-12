import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { IntroLoader } from "@/components/IntroLoader";
import { Hero } from "@/components/Hero";
import { VideoSection } from "@/components/VideoSection";
import { ProblemSection } from "@/components/ProblemSection";
import { TechSection } from "@/components/TechSection";
import { CollectionSection } from "@/components/CollectionSection";
import { CompareSection } from "@/components/CompareSection";
import { FinalCTA } from "@/components/FinalCTA";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SOLIVA SUNWRAP — Protection Designed For Daily Urban Exposure" },
      {
        name: "description",
        content:
          "A pre-launch experience for SOLIVA SUNWRAP — UPF 50+ dual-layer sun protection engineered for real Indian commutes. Coming soon.",
      },
      { property: "og:title", content: "SOLIVA SUNWRAP — Coming Soon" },
      {
        property: "og:description",
        content: "Thoughtfully layered. Effortlessly worn. Join the launch.",
      },
    ],
  }),
});

function Index() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative">
      {loading && <IntroLoader onComplete={() => setLoading(false)} />}
      <Hero />
      <VideoSection />
      <ProblemSection />
      <TechSection />
      <CollectionSection />
      <CompareSection />
      <FinalCTA />
    </main>
  );
}
