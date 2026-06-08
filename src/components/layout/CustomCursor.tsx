"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery } from "@/hooks";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = () => setIsHovering(true);
    const handleElementLeave = () => setIsHovering(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Track hover on interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleElementHover);
      el.addEventListener("mouseleave", handleElementLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleElementHover);
        el.removeEventListener("mouseleave", handleElementLeave);
      });
    };
  }, [isMobile, cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[100] mix-blend-difference"
      style={{ x, y }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.2 } }}
      aria-hidden="true"
    >
      <div className="h-6 w-6 rounded-full border-2 border-white/50" />
    </motion.div>
  );
}
