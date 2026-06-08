"use client";

import { motion } from "framer-motion";
import { Briefcase, Globe, Zap, Users, Code2, Layers } from "lucide-react";
import { Section, SectionHeading, Card } from "@/components/ui";
import { staggerContainer, staggerItem } from "@/lib/animations";

const highlights = [
  {
    icon: Briefcase,
    title: "3+ Years Experience",
    description: "Professional software development experience building production-grade applications.",
  },
  {
    icon: Globe,
    title: "Travel & Hospitality",
    description: "Domain expertise in travel tech, building booking engines and integration platforms.",
  },
  {
    icon: Code2,
    title: "Backend API Development",
    description: "Designing and developing robust REST APIs with ASP.NET MVC and C#.",
  },
  {
    icon: Layers,
    title: "Third-Party Integrations",
    description: "Integrated 15+ external travel APIs including GDS, hotel, and flight systems.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Improving response times and optimizing database queries for high-traffic systems.",
  },
  {
    icon: Users,
    title: "Agile Collaboration",
    description: "Working in cross-functional Agile teams with daily standups and sprint planning.",
  },
];

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        title="About Me"
        subtitle="A passionate developer who loves building things that make a difference"
      />

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <p className="text-body-lg text-white/60 leading-relaxed">
          I&apos;m a <span className="text-white font-medium">.NET Full Stack Developer</span> with
          over 3 years of experience in the{" "}
          <span className="text-primary-400">Travel and Hospitality</span> domain. I specialize in
          building scalable backend systems, integrating third-party APIs, and delivering
          high-performance enterprise applications. I thrive in Agile environments and am passionate
          about writing clean, maintainable code that solves real-world problems.
        </p>
      </motion.div>

      {/* Highlight Cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {highlights.map(({ icon: Icon, title, description }) => (
          <motion.div key={title} variants={staggerItem}>
            <Card glow className="h-full">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                  <Icon size={20} className="text-primary-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">
                    {title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
