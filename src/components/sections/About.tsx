import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Card } from "@/components/ui/Card"
import { FileDown, GraduationCap, FileText } from "lucide-react"

export function About() {
  return (
    <AnimatedSection id="about" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="About Me"
          subtitle="A brief introduction about myself and my journey in tech."
          className="mb-6 mt-0"
        />

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
          <div className="space-y-6 text-lg leading-[1.95] text-neutral-600 dark:text-neutral-400 lg:flex-1">
            <p>
              I&apos;m a Web Developer passionate about creating modern,
              responsive, and accessible web applications. I enjoy solving
              problems through clean code and thoughtful design, with a focus
              on delivering intuitive user experiences.
            </p>
            <p>
              I&apos;m continuously improving my skills in React, Next.js,
              TypeScript, and UI/UX while building projects that strengthen my
              development expertise.
            </p>
            <a
              href="/Resume.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-100 px-7 py-3 text-base font-medium text-emerald-800 transition-all hover:bg-emerald-200 hover:text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200 dark:hover:bg-emerald-950/60 dark:hover:text-emerald-100"
            >
              <FileText size={15} />
              Resume
            </a>
          </div>

          <div className="w-full max-w-sm lg:shrink-0">
            <Card className="pl-6 pr-4 py-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-950/30">
                  <GraduationCap
                    className="text-emerald-600 dark:text-emerald-400"
                    size={20}
                  />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-neutral-700 dark:text-neutral-300 sm:text-3xl">
                  Education
                </h3>
              </div>
              <div className="border-l-2 border-emerald-200 pl-5 dark:border-emerald-900">
                <p className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
                  BTECH in Computer Science
                </p>
                <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400">
                  Software Engineering
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-base font-medium text-neutral-600 dark:text-neutral-400">
                    S-VYASA Deemed to be University
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    2024-2028
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
