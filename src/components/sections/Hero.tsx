"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Button, Badge, Container } from "@/components/ui";

const techBadges = [
  "C#",
  ".NET",
  "ASP.NET MVC",
  "REST API",
  "PostgreSQL",
  "Git",
  "JavaScript",
];

const floatingPositions = [
  { x: "12%", y: "20%", delay: 0 },
  { x: "72%", y: "15%", delay: 0.5 },
  { x: "82%", y: "55%", delay: 1.0 },
  { x: "8%", y: "65%", delay: 1.5 },
  { x: "58%", y: "78%", delay: 2.0 },
  { x: "28%", y: "82%", delay: 0.8 },
  { x: "48%", y: "12%", delay: 1.2 },
];

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    const createParticles = () => {
      const count = Math.floor((canvas.width * canvas.height) / 18000);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    createParticles();
    draw();

    const handleResize = () => {
      resize();
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

export default function Hero() {
  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      aria-label="home"
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Background effects - contained within section, no layout impact */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <Particles />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.08),transparent_50%)]" />
      </div>

      {/* Floating tech badges - absolute within section, pointer-events-none */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block" aria-hidden="true">
        {techBadges.map((tech, i) => (
          <motion.div
            key={tech}
            className="absolute"
            style={{ left: floatingPositions[i].x, top: floatingPositions[i].y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: floatingPositions[i].delay + 1, duration: 0.5 }}
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Badge
                variant="outline"
                size="md"
                className="bg-white/[0.03] backdrop-blur-sm border-white/10 text-white/50 text-xs"
              >
                {tech}
              </Badge>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Main content - properly centered */}
      <Container className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-20 pb-16">
        <div className="w-full max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Badge variant="primary" size="md" className="mb-6">
              Available for opportunities
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Nanda Kumar</span>.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-4 text-xl sm:text-2xl md:text-3xl font-medium text-white/70"
          >
            .NET Full Stack Developer
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 text-base sm:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed"
          >
            Building scalable backend systems, REST APIs, and enterprise applications
            with C# and ASP.NET.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowDown size={18} />}
              iconPosition="right"
              onClick={handleScrollToProjects}
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              icon={<Download size={18} />}
              iconPosition="left"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/resume.pdf";
                link.download = "Nanda_Kumar_Resume.pdf";
                link.click();
              }}
            >
              Download Resume
            </Button>
            <Button
              variant="ghost"
              size="lg"
              icon={<Mail size={18} />}
              iconPosition="left"
              onClick={handleScrollToContact}
            >
              Contact Me
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-white/30">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-primary-500"
              />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
