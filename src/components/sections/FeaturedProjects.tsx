"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Code2,
  Server,
  ArrowUpRight,
} from "lucide-react";
import { Section } from "@/components/ui";
import { staggerContainer, staggerItem } from "@/lib/animations";

/* ═══════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════ */

const sectionMetrics = [
  { value: "8+", label: "Projects Built" },
  { value: "3+", label: "Years Experience" },
  { value: "15+", label: "API Integrations" },
  { value: "64+", label: "Automated Tests" },
];

const flagshipProject = {
  title: "Enterprise Product Management API",
  description:
    "Production-ready REST API built with .NET 8 following Clean Architecture. Features secure JWT authentication, role-based authorization, comprehensive testing, structured logging, and containerized deployment — designed for scalability and maintainability.",
  metrics: [
    { value: "64+", label: "Tests" },
    { value: "JWT", label: "Security" },
    { value: "Docker", label: "Deployed" },
    { value: "Clean", label: "Architecture" },
  ],
  stack: [".NET 8", "ASP.NET Core", "EF Core", "SQL Server", "Docker"],
  githubUrl: "https://github.com/NKumarCoder/product-api-assessment",
};

interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  category: string;
  color: string;
}

const projects: Project[] = [
  {
    id: "leave-attendance",
    title: "Leave & Attendance Tracker",
    description:
      "Employee management system with leave tracking, attendance reporting, and multi-level approval workflows for HR teams.",
    stack: ["React", "TypeScript", "REST API"],
    liveUrl: "https://leave-attendance-tracker.vercel.app/",
    category: "Business",
    color: "cyan",
  },
  {
    id: "invoice-management",
    title: "Invoice Management System",
    description:
      "Full-stack invoicing application for creating, managing, and monitoring business invoices with PostgreSQL persistence.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    liveUrl: "https://invoice-taupe-delta.vercel.app/",
    category: "Business",
    color: "violet",
  },
  {
    id: "scrap-invoice",
    title: "Scrap Invoice Processor",
    description:
      "AI-powered document processor that extracts invoice data using OCR, automates categorization, and streamlines accounting workflows.",
    stack: ["Next.js", "AI/OCR", "React"],
    liveUrl: "https://scrap-invoice.vercel.app/",
    category: "AI-Assisted",
    color: "rose",
  },
  {
    id: "mit-travel",
    title: "MIT Travel Platform",
    description:
      "Travel booking platform with real-time transportation search, booking management, and multi-modal journey planning.",
    stack: ["React", "TypeScript", "API Integration"],
    liveUrl: "https://mit-phi.vercel.app/home/bus",
    category: "Travel",
    color: "blue",
  },
  {
    id: "bus-booking",
    title: "Bus Booking Platform",
    description:
      "Modern reservation system with route search, seat selection, booking confirmation, and responsive mobile-first design.",
    stack: ["Next.js", "Tailwind CSS", "REST API"],
    liveUrl: "https://bus-booking-platform.vercel.app/",
    category: "Travel",
    color: "orange",
  },
  {
    id: "badminton-tracker",
    title: "Badminton Tracker",
    description:
      "Sports performance app for recording matches, tracking player statistics, and visualizing improvement trends over time.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://badminton-tracker-alpha.vercel.app/",
    category: "Personal",
    color: "emerald",
  },
];

/* ═══════════════════════════════════════════════════════════════
   SECTION HEADER
   ═══════════════════════════════════════════════════════════════ */

function SectionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
        Featured Projects
      </h2>
      <p className="mt-4 text-lg text-white/50 max-w-2xl leading-relaxed">
        Production-ready applications, backend systems, and business solutions — built to solve
        real problems with modern technologies.
      </p>

      {/* Metrics */}
      <div className="mt-8 flex flex-wrap gap-8">
        {sectionMetrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
            className="flex items-baseline gap-2"
          >
            <span className="text-2xl font-bold text-white">{m.value}</span>
            <span className="text-sm text-white/35">{m.label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FLAGSHIP PROJECT
   ═══════════════════════════════════════════════════════════════ */

function FlagshipCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group relative mb-16"
    >
      {/* Blue glow behind card */}
      <div className="absolute -inset-4 rounded-3xl bg-primary-500/[0.07] blur-2xl transition-all duration-500 group-hover:bg-primary-500/[0.12]" />

      {/* Card */}
      <div className="relative rounded-2xl bg-[#111111] border border-white/[0.08] overflow-hidden transition-all duration-300 group-hover:border-primary-500/25">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr]">
          {/* Left — .NET visual + metrics */}
          <div className="relative p-8 flex flex-col items-center justify-center bg-gradient-to-br from-primary-500/[0.06] to-transparent border-b lg:border-b-0 lg:border-r border-white/[0.06]">
            {/* .NET icon */}
            <div className="w-20 h-20 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mb-6">
              <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none">
                <rect width="64" height="64" rx="8" fill="none" />
                <text x="8" y="44" fontSize="28" fontWeight="bold" fill="#3B82F6" fontFamily="system-ui">
                  .NET
                </text>
              </svg>
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 gap-2 w-full max-w-[240px]">
              {flagshipProject.metrics.map((m) => (
                <div
                  key={m.label}
                  className="px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center"
                >
                  <p className="text-sm font-bold text-white">{m.value}</p>
                  <p className="text-[11px] text-white/35 mt-0.5">{m.label}</p>
                </div>
              ))}
            </div>

            {/* Featured label */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-400 bg-primary-500/10 border border-primary-500/20 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
                Featured
              </span>
            </div>
          </div>

          {/* Right — Content */}
          <div className="p-8 lg:p-10 flex flex-col justify-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-primary-300 transition-colors duration-300 mb-4">
              {flagshipProject.title}
            </h3>

            <p className="text-base text-white/50 leading-relaxed mb-6 max-w-xl">
              {flagshipProject.description}
            </p>

            {/* Stack — minimal */}
            <div className="flex flex-wrap gap-2 mb-8">
              {flagshipProject.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium text-white/50 bg-white/[0.04] border border-white/[0.07] rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href={flagshipProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-primary-600 hover:bg-primary-500 rounded-xl border border-primary-500/50 transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/20"
              >
                <Code2 size={15} />
                View Source Code
              </a>
              <a
                href={flagshipProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white/60 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] rounded-xl border border-white/[0.08] hover:border-white/[0.15] transition-all duration-200"
              >
                <Server size={15} />
                Architecture Overview
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PROJECT CARD
   ═══════════════════════════════════════════════════════════════ */

const colorMap: Record<string, string> = {
  cyan: "group-hover:border-cyan-500/30 group-hover:shadow-cyan-500/[0.05]",
  violet: "group-hover:border-violet-500/30 group-hover:shadow-violet-500/[0.05]",
  rose: "group-hover:border-rose-500/30 group-hover:shadow-rose-500/[0.05]",
  blue: "group-hover:border-blue-500/30 group-hover:shadow-blue-500/[0.05]",
  orange: "group-hover:border-orange-500/30 group-hover:shadow-orange-500/[0.05]",
  emerald: "group-hover:border-emerald-500/30 group-hover:shadow-emerald-500/[0.05]",
};

function ProjectCardComponent({ project }: { project: Project }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`group relative h-full`}
    >
      <div
        className={`relative h-full flex flex-col rounded-2xl bg-[#111111] border border-white/[0.07] overflow-hidden transition-all duration-300 group-hover:shadow-xl ${colorMap[project.color] || "group-hover:border-white/[0.15]"}`}
      >
        {/* Content */}
        <div className="flex-1 flex flex-col p-6">
          {/* Category */}
          <span className="inline-block self-start text-[11px] font-medium uppercase tracking-wider text-white/30 mb-3">
            {project.category}
          </span>

          {/* Title — 40% larger */}
          <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300 mb-3 leading-tight">
            {project.title}
          </h3>

          {/* Description — readable */}
          <p className="text-[15px] text-white/45 leading-relaxed mb-6 flex-1">
            {project.description}
          </p>

          {/* Stack — only top 3 */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 text-[11px] font-medium text-white/40 bg-white/[0.03] border border-white/[0.06] rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-primary-400 transition-colors duration-200"
              aria-label={`View ${project.title} live`}
            >
              <ExternalLink size={14} />
              Live Demo
              <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN EXPORT
   ═══════════════════════════════════════════════════════════════ */

export default function FeaturedProjects() {
  return (
    <Section id="featured-projects">
      <SectionHeader />

      {/* Flagship */}
      <FlagshipCard />

      {/* All other projects */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {projects.map((project) => (
          <ProjectCardComponent key={project.id} project={project} />
        ))}
      </motion.div>
    </Section>
  );
}
