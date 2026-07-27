import { Card } from "@/components/ui/Card"
import { IconRenderer } from "@/components/ui/IconRenderer"
import { SkillCategory } from "@/types"

interface SkillCardProps {
  category: SkillCategory
}

export function SkillCard({ category }: SkillCardProps) {
  return (
    <Card className="relative overflow-hidden p-7">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-400" />
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-emerald-500/5 to-teal-500/5 dark:from-emerald-500/10 dark:to-teal-500/10" />
      <h3 className="relative mb-7 text-xl font-semibold text-neutral-900 dark:text-white">
        {category.category}
      </h3>
      <div className="relative grid grid-cols-2 gap-3">
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 rounded-xl bg-neutral-50 px-4 py-2.5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-md dark:bg-neutral-800/50 dark:hover:bg-emerald-950/30"
          >
            <IconRenderer
              name={skill.icon}
              className="shrink-0 text-emerald-600 dark:text-emerald-400"
              size={16}
            />
            <span className="break-words text-sm font-medium leading-tight text-neutral-700 dark:text-neutral-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </Card>
  )
}
