import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  titleClassName?: string
}

export function SectionHeading({ title, subtitle, className, titleClassName }: SectionHeadingProps) {
  return (
    <div className={cn(className)}>
      <h2 className={cn("text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl", titleClassName)}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
          {subtitle}
        </p>
      )}
      <div className="mt-3 h-1 w-16 rounded-full bg-emerald-500" />
    </div>
  )
}
