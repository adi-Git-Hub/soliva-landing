import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { UrbanStorytelling } from "@/components/UrbanStorytelling";
import { CollectionSection } from "@/components/CollectionSection";
import { CompareSection } from "@/components/CompareSection";
import { VideoSection } from "@/components/VideoSection";
import { FinalCTA } from "@/components/FinalCTA";
import { LoadingPage } from "@/components/LoadingPage";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {loading && <LoadingPage onComplete={() => setLoading(false)} />}
      <main
        className={`flex min-h-screen flex-col bg-white transition-opacity duration-1000 ${loading ? "opacity-0" : "opacity-100"}`}
      >
        <Hero />
        <VideoSection />
        <UrbanStorytelling />
        <CollectionSection />
        <CompareSection />
        <FinalCTA />
      </main>
    </>
  );
}
