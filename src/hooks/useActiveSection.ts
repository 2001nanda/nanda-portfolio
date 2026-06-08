"use client";

import { useState, useEffect } from "react";
import { SECTION_IDS } from "@/lib/constants";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>(SECTION_IDS.HOME);

  useEffect(() => {
    const sections = Object.values(SECTION_IDS);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
