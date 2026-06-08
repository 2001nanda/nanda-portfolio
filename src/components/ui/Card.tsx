"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  variant?: "glass" | "solid" | "outline";
  hover?: boolean;
  glow?: boolean;
  padding?: "sm" | "md" | "lg" | "none";
}

const variantStyles = {
  glass:
    "bg-white/5 backdrop-blur-xl border border-white/10",
  solid:
    "bg-white/[0.03] border border-white/[0.06]",
  outline:
    "bg-transparent border border-white/10",
};

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  variant = "glass",
  hover = true,
  glow = false,
  padding = "md",
  className,
  ...props
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -2, scale: 1.01 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "rounded-2xl transition-all duration-300",
        variantStyles[variant],
        paddingStyles[padding],
        hover && "hover:border-primary-500/30 hover:bg-white/[0.08]",
        glow && "hover:shadow-lg hover:shadow-primary-500/10",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
