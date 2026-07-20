import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function GlowEffect() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for cursor follow
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150); // Offset by half the glow width (300px / 2)
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-[#020617]" id="ambient-glow-wrapper">
      {/* Dynamic Cursor Glow (Fades in, moves smoothly) */}
      <motion.div
        className="hidden md:block fixed w-[300px] h-[300px] rounded-full radial-glow-primary opacity-65 blur-[60px]"
        style={{
          x: glowX,
          y: glowY,
        }}
      />

      {/* Static Atmospheric Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full radial-glow-primary opacity-25 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full radial-glow-secondary opacity-20 blur-[140px]" />
      <div className="absolute top-[40%] right-[20%] w-[40vw] h-[40vw] rounded-full radial-glow-purple opacity-15 blur-[100px]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30" />

      {/* Fine-grain noise or particles representation */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none noise-overlay" />

      {/* Floating Abstract Vector Shapes */}
      <div className="absolute top-[20%] left-[15%] w-72 h-72 rounded-full border border-blue-500/10 border-dashed animate-spin-slow pointer-events-none" />
      <div className="absolute bottom-[30%] right-[10%] w-96 h-96 rounded-full border border-cyan-500/5 pointer-events-none animate-float-slow" />
      <div className="absolute top-[60%] right-[8%] w-16 h-16 rounded-xl bg-violet-500/5 rotate-12 animate-float-fast pointer-events-none" />
      <div className="absolute bottom-[15%] left-[8%] w-24 h-24 rounded-2xl bg-blue-500/5 -rotate-12 animate-float-slow pointer-events-none" />
    </div>
  );
}
