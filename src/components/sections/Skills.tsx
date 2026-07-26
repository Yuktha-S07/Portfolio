import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { SkillCard } from "@/components/ui/SkillCard"
import { skillCategories } from "@/data/skills"

export function Skills() {
  return (
    <AnimatedSection id="skills" className="bg-neutral-50/50 px-4 py-20 dark:bg-neutral-950/50 sm:px-6 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Skills"
          subtitle="Tools I work with."
          className="mb-12"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <SkillCard key={category.category} category={category} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
