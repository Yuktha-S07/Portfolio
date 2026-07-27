export interface NavLink {
  href: string
  label: string
}

export interface Project {
  title: string
  description: string
  githubUrl?: string
  liveUrl?: string
  readMoreUrl?: string
  deployed?: boolean
  image?: string
}

export interface Skill {
  name: string
  icon: string
}

export interface SkillCategory {
  category: string
  skills: Skill[]
}

export interface Achievement {
  title: string
  description: string
  certificate?: string
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  duration?: string
  description: string
  isPlaceholder?: boolean
  joiningLetter?: string
}
