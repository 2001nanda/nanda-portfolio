"use client";

import { motion } from "framer-motion";
import { Briefcase, Plug, FlaskConical, Globe2, Server } from "lucide-react";
import { Section } from "@/components/ui";
import { staggerContainer, staggerItem } from "@/lib/animations";

const facts = [
  {
    icon: Briefcase,
    value: "3+",
    label: "Years Experience",
    color: "from-blue-500/20 to-blue-600/5",
    borderColor: "border-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Plug,
    value: "15+",
    label: "API Integrations",
    color: "from-purple-500/20 to-purple-600/5",
    borderColor: "border-purple-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: FlaskConical,
    value: "64+",
    label: "Automated Tests",
    color: "from-emerald-500/20 to-emerald-600/5",
    borderColor: "border-emerald-500/20",
    iconColor: "text-emerald-400",
  },
  {
    icon: Globe2,
    value: "Travel",
    label: "Domain Expertise",
    color: "from-amber-500/20 to-amber-600/5",
    borderColor: "border-amber-500/20",
    iconColor: "text-amber-400",
  },
  {
    icon: Server,
    value: ".NET",
    label: "Backend Developer",
    color: "from-cyan-500/20 to-cyan-600/5",
    borderColor: "border-cyan-500/20",
    iconColor: "text-cyan-400",
  },
];

export default function QuickFacts() {
  return (
    <Section id="quick-facts" className="py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
          Quick Facts
        </h2>
        <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto" />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto"
      >
        {facts.map(({ icon: Icon, value, label, color, borderColor, iconColor }) => (
          <motion.div
            key={label}
            variants={staggerItem}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`relative group rounded-2xl border ${borderColor} bg-gradient-to-br ${color} p-5 md:p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/5`}
          >
            <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] mb-3 ${iconColor}`}>
              <Icon size={20} />
            </div>
            <p className="text-2xl md:text-3xl font-bold text-white mb-1">
              {value}
            </p>
            <p className="text-xs md:text-sm text-white/50 font-medium">
              {label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
