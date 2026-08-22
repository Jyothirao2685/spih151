"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function AnimatedBackground() {
  const orb1 = useRef<HTMLDivElement>(null);
  const orb2 = useRef<HTMLDivElement>(null);
  const orb3 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Orb 1: Moves top right
    gsap.to(orb1.current, {
      x: 350,
      y: -180,
      scale: 1.2,
      duration: 9,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Orb 2: Moves bottom left
    gsap.to(orb2.current, {
      x: -300,
      y: 220,
      scale: 0.85,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Orb 3: Moves bottom right
    gsap.to(orb3.current, {
      x: 180,
      y: 300,
      scale: 1.3,
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Orb 1: Cyan/Blue */}
      <div
        ref={orb1}
        className="
          absolute
          left-1/3
          top-1/4
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-300/30
          blur-[150px]
        "
      />
      
      {/* Orb 2: Deep Blue */}
      <div
        ref={orb2}
        className="
          absolute
          left-2/3
          top-1/3
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-300/20
          blur-[150px]
        "
      />

      {/* Orb 3: Light Teal/Cyan */}
      <div
        ref={orb3}
        className="
          absolute
          left-1/2
          top-2/3
          h-[400px]
          w-[400px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#007b8f]/10
          blur-[120px]
        "
      />
    </div>
  );
}
