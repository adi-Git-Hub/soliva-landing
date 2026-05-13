export function SolivaLogo({
  size = 32,
  height,
  className = "",
}: {
  size?: number;
  height?: number | string;
  className?: string;
}) {
  const finalHeight = height || size;
  const finalWidth = height ? "auto" : size;

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{
        width: finalWidth,
        height: finalHeight,
      }}
    >
      <img
        src="/logo-new.png"
        alt="Soliva Logo"
        className="h-full w-full object-contain"
        style={{
          filter: "drop-shadow(0 4px 10px rgba(180,120,40,0.15))",
        }}
      />
    </div>
  );
}
