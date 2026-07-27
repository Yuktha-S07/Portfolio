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
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "Node.js" },
      { name: "Express.js", icon: "Express.js" },
      { name: "MongoDB", icon: "MongoDB" },
      { name: "Firebase", icon: "Firebase" },
      { name: "Rest APIs", icon: "Rest APIs" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: "Git" },
      { name: "GitHub", icon: "GitHub" },
      { name: "VS Code", icon: "VS Code" },
      { name: "Vercel", icon: "Vercel" },
      { name: "Render", icon: "Render" },
    ],
  },
]
