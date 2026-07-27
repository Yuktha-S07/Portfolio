import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Card } from "@/components/ui/Card"
import { FileText, Award, Trophy, Star, Users } from "lucide-react"
import { achievements } from "@/data/achievements"

const achievementIcons = [
  <Award key="award" size={22} />,
  <Trophy key="trophy" size={22} />,
  <Star key="star" size={22} />,
  <Users key="users" size={22} />,
]

export function Achievements() {
  return (
    <AnimatedSection id="achievements" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-0 top-1/3 h-56 w-56 rounded-full bg-emerald-100/20 blur-3xl dark:bg-emerald-950/10" />
      </div>

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Achievements"
          subtitle="Certifications, workshops, and recognition."
          className="mb-12"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <Card key={achievement.description} className="relative overflow-hidden">
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/5 dark:to-teal-500/5" />

              <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 shadow-sm dark:from-emerald-950/30 dark:to-emerald-950/20">
                <span className="text-emerald-600 dark:text-emerald-400">
                  {achievementIcons[index % achievementIcons.length]}
                </span>
              </div>

              <h3 className="relative mb-2 text-lg font-semibold text-neutral-900 dark:text-white">
                {achievement.title}
              </h3>
              <p className="relative mb-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {achievement.description}
              </p>
              {achievement.certificate ? (
                <a
                  href={achievement.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 transition-all hover:bg-emerald-100 hover:text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-300 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-200"
                >
                  <FileText size={15} />
                  View Certificate
                </a>
              ) : (
                <p className="relative mt-3 text-xs text-neutral-400 dark:text-neutral-500">
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
