"use client";

import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export default function PageWithFlickeringBackground() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background Grid */}
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={2000} // large enough to cover tall pages
        width={2000}
      />

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="p-8 rounded-2xl bg-white/80 shadow-lg">
          <h1 className="text-3xl font-bold text-center">Your Content Here</h1>
          <p className="mt-4 text-center text-gray-600">
            This is on top of the flickering background
          </p>
        </div>
      </div>
    </div>
  );
}
