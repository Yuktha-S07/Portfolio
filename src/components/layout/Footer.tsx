"use client"

import { Mail, Github, Linkedin, Check, ArrowUp } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/Button"

const EMAIL = "yuktha4416@gmail.com"

const contactLinks = [
  {
    label: "Email",
    href: EMAIL,
    icon: <Mail size={18} />,
  },
  {
    label: "GitHub",
    href: "https://github.com/Yuktha-S07",
    icon: <Github size={18} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yuktha-s07/",
    icon: <Linkedin size={18} />,
  },
]

export function Footer() {
  const year = new Date().getFullYear()
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-neutral-200/60 bg-white dark:border-neutral-800/60 dark:bg-neutral-950">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-400">
            I&apos;m currently open to internship opportunities. Feel free to reach out!
          </p>
          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400" />
            <div className="h-1 w-3 rounded-full bg-emerald-300 dark:bg-emerald-700" />
          </div>
        </div>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          {contactLinks.map((link) =>
            link.label === "Email" ? (
              <button
                key={link.label}
                onClick={handleCopyEmail}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:from-emerald-700 hover:to-teal-600 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900"
              >
                <span className="shrink-0">{copied ? <Check size={18} /> : link.icon}</span>
                {copied ? "Copied!" : link.label}
              </button>
            ) : (
              <Button
                key={link.label}
                as="a"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
                icon={link.icon}
              >
                {link.label}
              </Button>
            )
          )}
        </div>

        <div className="flex flex-col items-center gap-6 border-t border-neutral-200/60 pt-8 dark:border-neutral-800/60">
          <button
            onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-all hover:border-emerald-400 hover:text-emerald-600 hover:shadow-sm dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-emerald-600 dark:hover:text-emerald-400"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
          <p className="text-sm text-neutral-500">
            &copy; {year} All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  )
}
