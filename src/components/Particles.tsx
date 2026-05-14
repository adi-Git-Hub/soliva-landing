import { useMemo } from "react";

interface ParticlesProps {
  count?: number;
  className?: string;
}

export function Particles({ count = 20, className = "" }: ParticlesProps) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1, // Slightly smaller
        duration: Math.random() * 15 + 10, // Faster duration for less simultaneous particles on screen
        delay: Math.random() * 10,
        opacity: Math.random() * 0.4 + 0.1,
      })),
    [count],
  );

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            bottom: `-10px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}
