import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { ProjectCard } from "@/components/ui/ProjectCard"
import { projects } from "@/data/projects"

export function Projects() {
  return (
    <AnimatedSection id="projects" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Projects"
          subtitle="A selection of projects I&apos;ve built."
          className="mb-12"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
