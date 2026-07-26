import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { TimelineItem } from "@/components/ui/TimelineItem"
import { experiences } from "@/data/experience"


export function Experience() {
  return (
    <AnimatedSection id="experience" className="bg-neutral-50/50 px-4 py-20 dark:bg-neutral-950/50 sm:px-6 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey so far."
          className="mb-12"
        />

        <div className="space-y-6">
            {experiences.map((item, index) => (
              <TimelineItem
                key={item.role}
                item={item}
                isLast={index === experiences.length - 1}
              />
            ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
