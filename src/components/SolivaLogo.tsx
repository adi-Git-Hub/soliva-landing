export function SolivaLogo({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <div 
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size * 0.4 }}
    >
      <svg
        viewBox="0 0 300 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <defs>
          <filter id="premium-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        
        <g filter="url(#premium-glow)" style={{ fill: "url(#logo-grad)" }}>
          {/* S */}
          <path d="M45 25.5C45 21.5 41.5 18 35 18C28.5 18 25 21.5 25 25.5C25 29.5 28.5 32.5 35 34.5C41.5 36.5 45 39.5 45 44.5C45 50.5 40 54 35 54C29 54 25 50.5 25 44.5H29C29 48.5 31.5 50.5 35 50.5C38.5 50.5 41 48.5 41 44.5C41 41 37.5 38.5 31 36.5C24.5 34.5 21 31.5 21 25.5C21 19.5 26 14.5 35 14.5C43 14.5 49 19 49 25.5H45Z" fill="currentColor"/>
          
          {/* O */}
          <path d="M85 34.5C85 45.5 76.5 54.5 65 54.5C53.5 54.5 45 45.5 45 34.5C45 23.5 53.5 14.5 65 14.5C76.5 14.5 85 23.5 85 34.5ZM49 34.5C49 43.5 56 50.5 65 50.5C74 50.5 81 43.5 81 34.5C81 25.5 74 18.5 65 18.5C56 18.5 49 25.5 49 34.5Z" fill="currentColor"/>
          
          {/* L */}
          <path d="M92 15H96V50H115V54H92V15Z" fill="currentColor"/>
          
          {/* I */}
          <path d="M125 15H129V54H125V15Z" fill="currentColor"/>
          
          {/* V */}
          <path d="M138 15H142.5L154 46L165.5 15H170L156.5 54H151.5L138 15Z" fill="currentColor"/>
          
          {/* A */}
          <path d="M195 15H200L216 54H211.5L208 45H187L183.5 54H179L195 15ZM206.5 41L197.5 18.5L188.5 41H206.5Z" fill="currentColor"/>

          {/* Sun Accent Mark - Minimal & Cinematic */}
          <circle cx="235" cy="34.5" r="4" fill="currentColor">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
          </circle>
          <path d="M235 15V22M235 47V54M215.5 34.5H222.5M247.5 34.5H254.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        </g>
      </svg>
      
      {/* Light sweep effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full animate-[sweep_4s_ease-in-out_infinite]" />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes sweep {
          0% { transform: translateX(-100%) skewX(-20deg); }
          50% { transform: translateX(100%) skewX(-20deg); }
          100% { transform: translateX(100%) skewX(-20deg); }
        }
      `}} />
    </div>
  );
}
