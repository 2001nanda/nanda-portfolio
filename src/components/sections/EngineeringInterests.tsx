"use client";

import { motion } from "framer-motion";
import { Zap, Cpu, Database, Layers, Cloud, Radio } from "lucide-react";
import { Section } from "@/components/ui";
import { staggerContainer, staggerItem } from "@/lib/animations";

const interests = [
  { icon: Zap, label: "Scalable APIs" },
  { icon: Cpu, label: "System Design" },
  { icon: Database, label: "Database Optimization" },
  { icon: Layers, label: "Caching Strategies" },
  { icon: Cloud, label: "Cloud-Native Applications" },
  { icon: Radio, label: "Event-Driven Systems" },
];

export default function EngineeringInterests() {
  return (
    <Section id="engineering-interests" className="py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
          Engineering Interests
        </h2>
        <p className="mt-3 text-sm md:text-base text-white/50">
          Areas I&apos;m passionate about and actively exploring
        </p>
        <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto" />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-3xl mx-auto"
      >
        {interests.map(({ icon: Icon, label }) => (
          <motion.div
            key={label}
            variants={staggerItem}
            whileHover={{ y: -3, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-center gap-2.5 px-4 py-2.5 md:px-5 md:py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-primary-500/25 hover:bg-white/[0.06] transition-all duration-300 cursor-default"
          >
            <Icon size={16} className="text-primary-400 flex-shrink-0" />
            <span className="text-sm font-medium text-white/70">{label}</span>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
