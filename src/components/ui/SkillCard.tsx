import { Card } from "@/components/ui/Card"
import { IconRenderer } from "@/components/ui/IconRenderer"
import { SkillCategory } from "@/types"

interface SkillCardProps {
  category: SkillCategory
}

export function SkillCard({ category }: SkillCardProps) {
  return (
    <Card>
      <h3 className="mb-5 text-lg font-semibold text-neutral-900 dark:text-white">
        {category.category}
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2.5 rounded-xl bg-neutral-50 px-3.5 py-2.5 transition-colors hover:bg-emerald-50 dark:bg-neutral-800/50 dark:hover:bg-emerald-950/30"
          >
            <IconRenderer
              name={skill.icon}
              className="text-emerald-600 dark:text-emerald-400"
              size={18}
            />
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </Card>
  )
}
