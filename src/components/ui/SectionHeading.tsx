"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <h2
        className={cn(
          "text-heading-lg md:text-display-sm font-bold tracking-tight",
          "bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-body-lg text-white/60 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500",
          align === "center" && "mx-auto"
        )}
      />
    </motion.div>
  );
}
