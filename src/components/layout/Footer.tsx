"use client";

import { motion } from "framer-motion";
import { Mail, Heart, ArrowUp } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { siteConfig } from "@/lib/constants";
import Container from "@/components/ui/Container";

const socialLinks = [
  { icon: GitHubIcon, href: siteConfig.links.github, label: "GitHub" },
  { icon: LinkedInIcon, href: siteConfig.links.linkedin, label: "LinkedIn" },
  { icon: () => <Mail size={18} />, href: siteConfig.links.email, label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5" role="contentinfo">
      <Container>
        <div className="py-12">
          {/* Top row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <p className="text-lg font-bold gradient-text mb-1">{siteConfig.name}</p>
              <p className="text-sm text-white/40">
                .NET Full Stack Developer — Building scalable solutions.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3" aria-label="Social links">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-white/40 hover:text-primary-400 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-primary-500/20 hover:bg-primary-500/5 transition-all duration-200"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-white/[0.06] mb-6" />

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30 flex items-center gap-1">
              © {currentYear} {siteConfig.name}. Crafted with{" "}
              <Heart size={12} className="text-red-400" aria-hidden="true" /> using Next.js &
              Tailwind CSS.
            </p>

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs text-white/40 hover:text-white rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-200 cursor-pointer"
              aria-label="Back to top"
            >
              Back to top
              <ArrowUp size={12} />
            </motion.button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
