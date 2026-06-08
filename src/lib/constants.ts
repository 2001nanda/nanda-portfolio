export const siteConfig = {
  name: "Nanda Kumar",
  title: "Nanda Kumar | .NET Full Stack Developer",
  description:
    "Portfolio of Nanda Kumar — .NET Full Stack Developer specializing in scalable backend systems, REST APIs, and enterprise applications with C# and ASP.NET.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nandakumar.dev",
  ogImage: "/og-image.png",
  links: {
    github: "https://github.com/2001nanda",
    linkedin: "https://www.linkedin.com/in/nanda-kumar-m-b7b372267/",
    email: "mailto:kumarnanda7733@gmail.com",
    naukri: "https://www.naukri.com/mnjuser/profile?id=&altresid",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
] as const;

export const SECTION_IDS = {
  HOME: "home",
  ABOUT: "about",
  SKILLS: "skills",
  EXPERIENCE: "experience",
  PROJECTS: "projects",
  GITHUB: "github",
  CONTACT: "contact",
} as const;
