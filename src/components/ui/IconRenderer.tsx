import {
  Code2,
  Palette,
  FileCode,
  Atom,
  Globe,
  Wind,
  Flame,
  Database,
  Network,
  FileEdit,
  PenTool,
  Smartphone,
  Layout,
  Layers,
  GitBranch,
  Github,
  Terminal,
  Triangle,
  Award,
  Users,
  Trophy,
  Star,
  GitPullRequest,
  type LucideIcon,
} from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  html5: Code2,
  css3: Palette,
  javascript: FileCode,
  typescript: FileCode,
  react: Atom,
  nextjs: Globe,
  tailwindcss: Wind,
  firebase: Flame,
  database: Database,
  api: Network,
  crud: FileEdit,
  figma: PenTool,
  responsive: Smartphone,
  wireframe: Layout,
  prototype: Layers,
  git: GitBranch,
  github: Github,
  vscode: Terminal,
  vercel: Triangle,
  certificate: Award,
  workshop: Users,
  hackathon: Trophy,
  award: Star,
  opensource: GitPullRequest,
}

interface IconRendererProps {
  name: string
  className?: string
  size?: number
}

export function IconRenderer({ name, className, size = 20 }: IconRendererProps) {
  const Icon = iconMap[name.toLowerCase()] || Code2

  return <Icon className={className} size={size} aria-hidden="true" />
}
