"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Section, SectionHeading, Badge } from "@/components/ui";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  gradient: string;
  icon: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: "badminton-tracker",
    title: "Badminton Tracker",
    description:
      "A badminton match and performance tracking application designed to record games, monitor player statistics, and analyze performance trends.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://badminton-tracker-alpha.vercel.app/",
    gradient: "from-emerald-500/20 via-emerald-600/5 to-transparent",
    icon: "🏸",
  },
  {
    id: "mit-travel",
    title: "MIT Travel Platform",
    description:
      "A travel booking platform prototype supporting transportation workflows, booking management, and travel-related operations.",
    technologies: ["React", "TypeScript", "API Integration"],
    liveUrl: "https://mit-phi.vercel.app/home/bus",
    gradient: "from-blue-500/20 via-blue-600/5 to-transparent",
    icon: "🌍",
  },
  {
    id: "bus-booking",
    title: "Bus Booking Platform",
    description:
      "A modern bus reservation system with route management, booking workflows, and responsive user experience.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "https://bus-booking-platform.vercel.app/",
    gradient: "from-orange-500/20 via-orange-600/5 to-transparent",
    icon: "🚌",
  },
  {
    id: "leave-attendance",
    title: "Leave & Attendance Tracker",
    description:
      "An employee leave and attendance management solution featuring tracking, reporting, and approval workflows.",
    technologies: ["React", "TypeScript", "Dashboard UI"],
    liveUrl: "https://leave-attendance-tracker.vercel.app/",
    gradient: "from-cyan-500/20 via-cyan-600/5 to-transparent",
    icon: "📋",
  },
  {
    id: "invoice-management",
    title: "Invoice Management System",
    description:
      "A business application for creating, managing, and monitoring invoices with a clean and efficient workflow.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    liveUrl: "https://invoice-taupe-delta.vercel.app/",
    gradient: "from-violet-500/20 via-violet-600/5 to-transparent",
    icon: "📄",
  },
  {
    id: "scrap-invoice",
    title: "Scrap Invoice Processor",
    description:
      "An experimental invoice processing application focused on automation, document handling, and workflow optimization.",
    technologies: ["AI Integration", "OCR", "React", "Next.js"],
    liveUrl: "https://scrap-invoice.vercel.app/",
    gradient: "from-rose-500/20 via-rose-600/5 to-transparent",
    icon: "🤖",
  },
];

function FeaturedProjectCard({ project }: { project: FeaturedProject }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={staggerItem}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full"
    >
      {/* Hover glow */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary-500/0 via-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/20 group-hover:via-primary-500/10 group-hover:to-secondary-500/20 transition-all duration-500 opacity-0 group-hover:opacity-100 blur-sm" />

      {/* Card */}
      <div className="relative h-full flex flex-col rounded-2xl bg-white/[0.03] border border-white/[0.08] overflow-hidden transition-all duration-500 group-hover:border-primary-500/20 group-hover:bg-white/[0.05] group-hover:shadow-lg group-hover:shadow-primary-500/[0.05]">
        {/* Top gradient area */}
        <div className={`relative h-36 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
          {/* Dot pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:16px_16px]" />

          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              animate={isHovered ? { scale: 1.15, y: -3 } : { scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-4xl"
            >
              {project.icon}
            </motion.span>
          </div>

          {/* External link indicator */}
          <motion.div
            animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-3 right-3"
          >
            <div className="w-7 h-7 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <ArrowUpRight size={14} className="text-white/80" />
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-5">
          {/* Title */}
          <h3 className="text-base font-semibold text-white group-hover:text-primary-400 transition-colors duration-300 mb-2">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-white/45 leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" size="sm" className="text-[11px] bg-white/[0.02]">
                {tech}
              </Badge>
            ))}
          </div>

          {/* CTA */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 text-sm font-medium text-white/70 hover:text-white rounded-xl bg-white/[0.04] hover:bg-primary-500/10 border border-white/[0.08] hover:border-primary-500/25 transition-all duration-300 group/btn"
            aria-label={`View ${project.title} live project`}
          >
            <ExternalLink size={14} className="group-hover/btn:text-primary-400 transition-colors" />
            <span>View Live Project</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedProjects() {
  return (
    <Section id="featured-projects">
      <SectionHeading
        title="Featured Projects"
        subtitle="In my free time, I explore new technologies and AI-assisted development tools to build practical web applications, automation solutions, and business-focused prototypes."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {featuredProjects.map((project) => (
          <FeaturedProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </Section>
  );
}
