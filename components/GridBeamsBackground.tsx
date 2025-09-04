// components/shared/GridBeamsBackground.tsx
"use client";

import { GridBeams } from "@/components/magicui/grid-beams";

export default function GridBeamsBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background effect */}
      <GridBeams
        gridSize={0}
        gridColor="rgba(255, 255, 255, 0.2)"
        rayCount={20}
        rayOpacity={0.55}
        raySpeed={1.5}
        rayLength="40vh"
        gridFadeStart={5}
        gridFadeEnd={90}
        className="absolute inset-0 h-full w-full z-0"
      />

      {/* Page content (above background) */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
