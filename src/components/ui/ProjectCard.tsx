import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Project } from "@/types"
import { Github, ExternalLink, ArrowRight } from "lucide-react"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col">
      <div className="relative mb-5 flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <Code2Placeholder />
        )}
      </div>

      <h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-white">
        {project.title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-3">
        {project.githubUrl && (
          <Button
            as="a"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="sm"
            icon={<Github size={16} />}
          >
            GitHub
          </Button>
        )}
        {project.liveUrl && (
          <Button
            as="a"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="sm"
            icon={<ExternalLink size={16} />}
          >
            Live Demo
          </Button>
        )}
        {project.readMoreUrl && (
          <Button
            as="a"
            href={project.readMoreUrl}
            variant="ghost"
            size="sm"
            icon={<ArrowRight size={16} />}
          >
            Read More
          </Button>
        )}
      </div>
    </Card>
  )
}

function Code2Placeholder() {
  return (
    <div className="flex items-center gap-1 text-neutral-400 dark:text-neutral-600">
      <Code2Icon />
      <span className="text-sm font-medium">Project Screenshot</span>
      <Code2Icon />
    </div>
  )
}

function Code2Icon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}
