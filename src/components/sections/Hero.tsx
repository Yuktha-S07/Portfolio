import { Button } from "@/components/ui/Button"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { ArrowDown, ExternalLink } from "lucide-react"

export function Hero() {
  return (
    <AnimatedSection
      id="home"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-4 pt-16"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute right-1/4 top-1/4 h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl dark:bg-emerald-950/20" />
        <div className="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full bg-teal-100/30 blur-3xl dark:bg-teal-950/15" />
      </div>

      <div className="flex flex-col items-center text-center">
        <p className="mb-4 tracking-[0.3em] uppercase text-emerald-600 dark:text-emerald-400">
          Hello, I am
        </p>

        <h1 className="mb-3 text-6xl font-bold md:text-7xl">
          Yuktha S
        </h1>

        <h2 className="mb-6 text-2xl font-medium text-gray-700 dark:text-gray-300 md:text-3xl">
          Web Developer
        </h2>

        <p className="mb-10 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
          I build modern, responsive, and user-friendly web applications focused
          on clean design and performance. Driven to create simple and engaging
          web experiences.
        </p>

        <div className="flex gap-5">
          <Button
            as="a"
            href="#projects"
            size="lg"
            icon={<ExternalLink size={18} />}
          >
            View Projects
          </Button>
          <Button
            as="a"
            href="#contact"
            variant="outline"
            size="lg"
            icon={<ArrowDown size={18} />}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </AnimatedSection>
  )
}
