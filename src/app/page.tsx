"use client";

import dynamic from "next/dynamic";
import {
  Navbar,
  Footer,
  ScrollProgress,
  CustomCursor,
  LoadingScreen,
} from "@/components/layout";
import { Hero } from "@/components/sections";

// Lazy load sections below the fold for performance
const About = dynamic(() => import("@/components/sections/About"), {
  loading: () => <SectionSkeleton />,
});
const Skills = dynamic(() => import("@/components/sections/Skills"), {
  loading: () => <SectionSkeleton />,
});
const Experience = dynamic(() => import("@/components/sections/Experience"), {
  loading: () => <SectionSkeleton />,
});
const Projects = dynamic(() => import("@/components/sections/Projects"), {
  loading: () => <SectionSkeleton />,
});
const GitHub = dynamic(() => import("@/components/sections/GitHub"), {
  loading: () => <SectionSkeleton />,
});
const Contact = dynamic(() => import("@/components/sections/Contact"), {
  loading: () => <SectionSkeleton />,
});

function SectionSkeleton() {
  return (
    <div className="w-full py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-48 bg-white/[0.03] rounded-lg mx-auto" />
          <div className="h-4 w-72 bg-white/[0.02] rounded mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main role="main" className="relative w-full">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GitHub />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
