"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { useActiveSection } from "@/hooks";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const activeSection = useActiveSection();
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastScrollY.current;

    // Show navbar when scrolling up or at top
    if (latest < 50) {
      setIsHidden(false);
      setIsScrolled(false);
    } else {
      setIsScrolled(true);
      if (diff > 5 && latest > 100) {
        setIsHidden(true);
      } else if (diff < -5) {
        setIsHidden(false);
      }
    }

    lastScrollY.current = latest;
  });

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isHidden ? -100 : 0, opacity: isHidden ? 0 : 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="text-xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Go to home section"
          >
            NK
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-200",
                    activeSection === link.href.slice(1)
                      ? "text-primary-400"
                      : "text-white/60 hover:text-white"
                  )}
                  aria-current={
                    activeSection === link.href.slice(1) ? "page" : undefined
                  }
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute inset-0 rounded-xl bg-primary-500/10 border border-primary-500/20"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white rounded-xl hover:bg-white/5 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-white/5 bg-black/95 backdrop-blur-xl"
          >
            <ul className="px-6 py-4 space-y-1" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                      activeSection === link.href.slice(1)
                        ? "text-primary-400 bg-primary-500/10"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
