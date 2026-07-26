import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Card } from "@/components/ui/Card"
import { FileText } from "lucide-react"
import { achievements } from "@/data/achievements"

export function Achievements() {
  return (
    <AnimatedSection id="achievements" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Achievements"
          subtitle="Certifications, workshops, and recognition."
          className="mb-12"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement) => (
            <Card key={achievement.description}>
              <h3 className="mb-2 font-semibold text-neutral-900 dark:text-white">
                {achievement.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {achievement.description}
              </p>
              {achievement.certificate ? (
                <a
                  href={achievement.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                >
                  <FileText size={16} />
                  Certificate
                </a>
              ) : (
                <p className="mt-3 text-xs text-neutral-400 dark:text-neutral-500">
                  No certificate attached
                </p>
              )}
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
