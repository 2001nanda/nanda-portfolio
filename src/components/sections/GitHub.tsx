"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { GitFork, Star, Users, Code2 } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { Section, SectionHeading } from "@/components/ui";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  borderColor: string;
}

const stats: StatItem[] = [
  {
    label: "Contributions",
    value: 500,
    suffix: "+",
    icon: Code2,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
  },
  {
    label: "Repositories",
    value: 20,
    suffix: "+",
    icon: GitFork,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    label: "Stars Earned",
    value: 5,
    suffix: "",
    icon: Star,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
  },
  {
    label: "Followers",
    value: 3,
    suffix: "",
    icon: Users,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
];

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const startTime = Date.now();

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * value);
            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

// Pre-generated contribution data (seeded pattern for consistent renders)
const CONTRIBUTION_DATA = [
  0.1, 0.3, 0.8, 0.2, 0.5, 0.9, 0.0,
  0.4, 0.7, 0.1, 0.6, 0.3, 0.8, 0.2,
  0.9, 0.5, 0.3, 0.7, 0.1, 0.4, 0.6,
  0.2, 0.8, 0.5, 0.3, 0.9, 0.1, 0.7,
  0.6, 0.4, 0.2, 0.8, 0.5, 0.1, 0.3,
  0.7, 0.9, 0.4, 0.6, 0.2, 0.8, 0.1,
  0.3, 0.5, 0.7, 0.9, 0.4, 0.2, 0.6,
  0.8, 0.1, 0.5, 0.3, 0.7, 0.9, 0.4,
  0.2, 0.6, 0.8, 0.1, 0.5, 0.3, 0.7,
  0.9, 0.4, 0.6, 0.2, 0.8, 0.5, 0.1,
  0.3, 0.7, 0.9, 0.4, 0.2, 0.6, 0.8,
  0.1, 0.5, 0.3, 0.7, 0.9, 0.4, 0.6,
  0.2, 0.8, 0.1, 0.5, 0.3, 0.7, 0.9,
  0.4, 0.6, 0.2, 0.8, 0.5, 0.1, 0.3,
  0.7, 0.9, 0.4, 0.6, 0.2, 0.8, 0.1,
  0.5, 0.3, 0.7, 0.9, 0.4, 0.2, 0.6,
  0.8, 0.1, 0.5, 0.3, 0.7, 0.9, 0.4,
  0.2, 0.6, 0.8, 0.5, 0.1, 0.3, 0.7,
  0.9, 0.4, 0.6, 0.2, 0.8, 0.1, 0.5,
  0.3, 0.7, 0.9, 0.4, 0.6, 0.2, 0.8,
];

function ContributionGrid() {
  const weeks = 20;
  const days = 7;

  const getOpacity = (value: number) => {
    if (value < 0.2) return "opacity-[0.08]";
    if (value < 0.4) return "opacity-20";
    if (value < 0.6) return "opacity-40";
    if (value < 0.8) return "opacity-60";
    return "opacity-90";
  };

  return (
    <div className="flex gap-[3px] overflow-hidden">
      {Array.from({ length: weeks }, (_, weekIdx) => (
        <div key={weekIdx} className="flex flex-col gap-[3px]">
          {Array.from({ length: days }, (_, dayIdx) => {
            const idx = weekIdx * days + dayIdx;
            const value = CONTRIBUTION_DATA[idx % CONTRIBUTION_DATA.length];
            return (
              <motion.div
                key={dayIdx}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: (weekIdx * 0.02) + (dayIdx * 0.01),
                  duration: 0.2,
                }}
                className={`w-[10px] h-[10px] rounded-[2px] bg-primary-500 ${getOpacity(
                  value
                )}`}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default function GitHub() {
  return (
    <Section id="github">
      <SectionHeading
        title="GitHub Activity"
        subtitle="My open source contributions and coding activity"
      />

      {/* Stats Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12"
      >
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <motion.div key={stat.label} variants={staggerItem}>
              <div className="group relative rounded-2xl bg-white/[0.03] border border-white/[0.08] p-5 md:p-6 text-center transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.15]">
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-primary-500/5 to-transparent pointer-events-none" />

                {/* Icon */}
                <div
                  className={`w-10 h-10 mx-auto rounded-xl ${stat.bgColor} border ${stat.borderColor} flex items-center justify-center mb-3`}
                >
                  <Icon size={18} className={stat.color} />
                </div>

                {/* Value */}
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <p className="text-xs md:text-sm text-white/40">{stat.label}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Contribution Graph */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6 md:p-8 overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center">
              <GitHubIcon size={16} className="text-white/60" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-white">
                Contribution Activity
              </h3>
              <p className="text-xs text-white/40">Last 20 weeks</p>
            </div>
          </div>
          <a
            href="https://github.com/2001nanda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary-400 hover:text-primary-300 transition-colors"
          >
            View Profile →
          </a>
        </div>

        {/* Grid */}
        <div className="flex justify-center">
          <ContributionGrid />
        </div>

        {/* Legend */}
        <div className="flex items-center justify-end gap-2 mt-4">
          <span className="text-[10px] text-white/30">Less</span>
          <div className="flex gap-[2px]">
            {[0.08, 0.2, 0.4, 0.6, 0.9].map((opacity, i) => (
              <div
                key={i}
                className="w-[10px] h-[10px] rounded-[2px] bg-primary-500"
                style={{ opacity }}
              />
            ))}
          </div>
          <span className="text-[10px] text-white/30">More</span>
        </div>
      </motion.div>
    </Section>
  );
}
