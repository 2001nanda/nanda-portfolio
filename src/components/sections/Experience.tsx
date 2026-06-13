"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, CheckCircle2 } from "lucide-react";
import { Section, SectionHeading, Card, Badge } from "@/components/ui";
import { fadeInUp } from "@/lib/animations";

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "i2space",
    company: "i2Space",
    role: "Software Developer",
    period: "April 2023 – Present",
    description:
      "Developed and maintained backend services for travel booking platforms supporting real-time hotel, bus, and flight reservation workflows.",
    achievements: [
      "Integrated 15+ third-party travel APIs including bus, hotel, and flight providers to enhance platform capabilities and supplier connectivity",
      "Designed and implemented scalable REST APIs and backend services using ASP.NET MVC and C#, handling high-concurrency booking traffic",
      "Optimized database queries and backend workflows, reducing API response times by 30% and improving performance under high booking loads",
      "Diagnosed and resolved production issues across distributed services, improving platform stability and reducing downtime",
      "Collaborated with cross-functional teams in Agile environments to deliver new features, system improvements, and sprint commitments on time",
      "Authored comprehensive unit and integration tests to maintain code quality across critical booking and payment pathways",
    ],
    technologies: ["C#", "ASP.NET MVC", ".NET", "REST API", "PostgreSQL", "SQL Server", "Git", "Docker"],
  },
];

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        title="Experience"
        subtitle="Building enterprise software with measurable impact"
      />

      <div className="max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-secondary-500/30 to-transparent"
            aria-hidden="true"
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-20 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-0 md:left-8 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-black shadow-lg shadow-primary-500/30"
                aria-hidden="true"
              />

              {/* Experience Card */}
              <Card glow padding="lg">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                      <Building2 size={20} className="text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-primary-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/40">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-emerald-400 mt-0.5 flex-shrink-0"
                      />
                      <p className="text-sm text-white/60">{achievement}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="primary" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
