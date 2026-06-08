"use client";

import { cn } from "@/lib/utils";

interface GradientBackgroundProps {
  variant?: "hero" | "section" | "subtle";
  className?: string;
}

export default function GradientBackground({
  variant = "subtle",
  className,
}: GradientBackgroundProps) {
  const variants = {
    hero: (
      <>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.1),transparent_50%)]" />
      </>
    ),
    section: (
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_70%)]" />
    ),
    subtle: (
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.05),transparent_60%)]" />
    ),
  };

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      {variants[variant]}
    </div>
  );
}
