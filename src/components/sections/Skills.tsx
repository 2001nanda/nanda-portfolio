"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Database, Wrench } from "lucide-react";
import { Section, SectionHeading, Card, Badge } from "@/components/ui";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  color: string;
  borderColor: string;
  bgColor: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    icon: Code2,
    color: "text-blue-400",
    borderColor: "border-blue-500/20",
    bgColor: "bg-blue-500/10",
    skills: ["C#", ".NET", "ASP.NET MVC", "REST API"],
  },
  {
    title: "Frontend",
    icon: Layout,
    color: "text-emerald-400",
    borderColor: "border-emerald-500/20",
    bgColor: "bg-emerald-500/10",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Database",
    icon: Database,
    color: "text-purple-400",
    borderColor: "border-purple-500/20",
    bgColor: "bg-purple-500/10",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "text-amber-400",
    borderColor: "border-amber-500/20",
    bgColor: "bg-amber-500/10",
    skills: ["Git", "Postman", "Jenkins", "Visual Studio", "FileZilla"],
  },
];

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        title="Skills & Technologies"
        subtitle="Tools and technologies I use to bring ideas to life"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <motion.div key={category.title} variants={staggerItem}>
              <Card glow className="h-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-xl ${category.bgColor} border ${category.borderColor} flex items-center justify-center`}
                  >
                    <Icon size={20} className={category.color} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Badge
                        variant="outline"
                        size="md"
                        className="bg-white/[0.03] hover:bg-white/[0.08] hover:border-primary-500/30 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
