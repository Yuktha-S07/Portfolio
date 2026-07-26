import { SkillCategory } from "@/types"

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: "HTML5" },
      { name: "CSS", icon: "CSS3" },
      { name: "JavaScript", icon: "JavaScript" },
      { name: "TypeScript", icon: "TypeScript" },
      { name: "React", icon: "React" },
      { name: "Next.js", icon: "Next.js" },
      { name: "Tailwind CSS", icon: "Tailwind CSS" },
    ],
  },
  {
    category: "Backend Knowledge",
    skills: [
      { name: "Firebase Auth", icon: "Firebase" },
      { name: "Firestore", icon: "Firestore" },
      { name: "REST APIs", icon: "REST APIs" },
      { name: "CRUD Operations", icon: "CRUD Operations" },
    ],
  },
  {
    category: "UI/UX",
    skills: [
      { name: "Figma", icon: "Figma" },
      { name: "Responsive Design", icon: "Responsive Design" },
      { name: "Wireframing", icon: "Wireframing" },
      { name: "Prototyping", icon: "Prototyping" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: "Git" },
      { name: "GitHub", icon: "GitHub" },
      { name: "VS Code", icon: "VS Code" },
      { name: "Vercel", icon: "Vercel" },
    ],
  },
]
