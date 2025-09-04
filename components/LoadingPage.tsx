"use client";

import { useEffect, useState } from "react";
import GridBeamsBackground from "@/components/GridBeamsBackground";
import { TypingAnimation } from "@/components/magicui/typing-animation";

export default function LoadingPage() {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (seconds >= 15) return; // stop after 12 seconds

    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <GridBeamsBackground>
      <div className=" text-white font-bold flex flex-col items-center justify-center min-h-screen text-center space-y-6">
        <TypingAnimation startOnView={true}>
          Loading your experience... ⏳
        </TypingAnimation>
        {/* <p className="text-white text-lg font-medium drop-shadow-md">
          {seconds} / 12 sec
        </p> */}
      </div>
    </GridBeamsBackground>
  );
}
