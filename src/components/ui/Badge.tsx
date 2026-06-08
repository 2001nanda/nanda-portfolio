"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md";
  className?: string;
}

const variantStyles = {
  primary: "bg-primary-500/10 text-primary-400 border-primary-500/20",
  secondary: "bg-secondary-500/10 text-secondary-400 border-secondary-500/20",
  outline: "bg-transparent text-white/70 border-white/20",
};

const sizeStyles = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
};

export default function Badge({
  children,
  variant = "primary",
  size = "sm",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border font-medium",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
