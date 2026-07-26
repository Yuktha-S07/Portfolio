import { Mail, Github, Linkedin } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { SectionHeading } from "@/components/ui/SectionHeading"

const contactMethods = [
  {
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
    icon: <Mail size={20} />,
  },
  {
    label: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com/yourusername",
    icon: <Github size={20} />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    href: "https://linkedin.com/in/yourusername",
    icon: <Linkedin size={20} />,
  },
]

export function Contact() {
  return (
    <AnimatedSection
      id="contact"
      className="px-4 py-20 sm:px-6 lg:px-8 lg:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Contact"
          subtitle="Let&apos;s connect! Reach out to me through any of the platforms below."
        />

        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
          {contactMethods.map((method) => (
            <Card key={method.label} hover={false}>
              <a
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400">
                  {method.icon}
                </div>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-white">
                    {method.label}
                  </p>
                  <p className="mt-0.5 text-sm text-neutral-500">
                    {method.value}
                  </p>
                </div>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
