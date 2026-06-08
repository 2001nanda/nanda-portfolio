"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Folder, ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { Section, SectionHeading, Badge } from "@/components/ui";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  gradient: string;
  icon: string;
}

const projects: Project[] = [
  {
    id: "travel-booking-api",
    title: "Travel Booking API Platform",
    description:
      "Integrated 15+ Bus, Hotel and Flight APIs to enable real-time booking functionality for a comprehensive travel platform.",
    features: [
      "Real-time API integration",
      "Secure authentication",
      "Error handling",
      "Response optimization",
      "Vendor synchronization",
    ],
    technologies: ["C#", "ASP.NET MVC", "REST API", "PostgreSQL"],
    githubUrl: "https://github.com/2001nanda",
    gradient: "from-blue-500/20 via-blue-600/10 to-transparent",
    icon: "✈️",
  },
  {
    id: "dotnet-web-app",
    title: ".NET Web Application Building & Maintenance",
    description:
      "Developed and maintained enterprise-grade .NET web applications, ensuring high availability, clean architecture, and seamless production deployments.",
    features: [
      "End-to-end MVC application development",
      "Database design & query optimization",
      "Production deployment & server maintenance",
      "Bug fixing & performance tuning",
      "New feature development & enhancements",
    ],
    technologies: ["C#", ".NET", "ASP.NET MVC", "SQL", "JavaScript", "Git"],
    githubUrl: "https://github.com/2001nanda",
    gradient: "from-purple-500/20 via-purple-600/10 to-transparent",
    icon: "🖥️",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={staggerItem}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Animated border glow */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary-500/0 via-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/30 group-hover:via-secondary-500/20 group-hover:to-primary-500/30 transition-all duration-500 opacity-0 group-hover:opacity-100 blur-[1px]" />

      {/* Card */}
      <div className="relative rounded-2xl bg-white/[0.03] border border-white/[0.08] overflow-hidden transition-all duration-500 group-hover:border-white/[0.15] group-hover:bg-white/[0.05]">
        {/* Project image placeholder */}
        <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
          {/* Pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:20px_20px]" />

          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              animate={isHovered ? { scale: 1.1, y: -4 } : { scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-5xl"
            >
              {project.icon}
            </motion.span>
          </div>

          {/* Hover glow overlay */}
          <motion.div
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
              {project.title}
            </h3>
            <Folder size={18} className="text-white/30 flex-shrink-0 mt-1" />
          </div>

          {/* Description */}
          <p className="text-sm text-white/50 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Features */}
          <div className="mb-5">
            <ul className="space-y-1.5">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-xs text-white/40"
                >
                  <span className="w-1 h-1 rounded-full bg-primary-500/60 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="primary" size="sm">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-white/60 hover:text-white rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-200"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GitHubIcon size={14} />
              Code
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-white/60 hover:text-primary-400 rounded-lg bg-white/[0.03] hover:bg-primary-500/10 border border-white/[0.08] hover:border-primary-500/20 transition-all duration-200"
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
            <motion.div
              animate={isHovered ? { x: 0, opacity: 1 } : { x: -8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="ml-auto"
            >
              <ArrowUpRight size={16} className="text-primary-400" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        title="Projects"
        subtitle="A selection of things I've designed and built"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </Section>
  );
}
