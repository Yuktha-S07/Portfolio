import { cn } from "@/lib/utils"
import { ExperienceItem } from "@/types"
import { FileText, Briefcase } from "lucide-react"

interface TimelineItemProps {
  item: ExperienceItem
  isLast?: boolean
}

export function TimelineItem({ item, isLast }: TimelineItemProps) {
  return (
    <div className="relative pl-8">
      {!isLast && (
        <div className="absolute left-[7px] top-3 h-full w-px bg-neutral-200 dark:bg-neutral-800" />
      )}
      <div
        className={cn(
          "absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2",
          item.isPlaceholder
            ? "border-neutral-300 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800"
            : "border-emerald-500 bg-emerald-100 dark:bg-emerald-950",
        )}
      />
      <div className="rounded-2xl border border-neutral-200/60 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/5 dark:border-neutral-800/60 dark:bg-neutral-900 dark:hover:shadow-emerald-500/10">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950/30">
            <Briefcase size={18} className="text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
              {item.role}
            </h3>
            <p className="text-base font-medium text-emerald-600 dark:text-emerald-400">
              {item.company}
            </p>
          </div>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-500">
          {item.period}
        </p>
        <p className="mt-3 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          {item.description}
        </p>
        {item.joiningLetter && (
          <div className="mt-6">
            <p className="mb-3 text-sm text-neutral-500 dark:text-neutral-400">
              Attached Joining Letter
            </p>
            <a
              href={item.joiningLetter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
            >
              <FileText size={16} />
              Joining Letter
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
