"use client"

import { Mail, Github, Linkedin, Check } from "lucide-react"
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
      // Clipboard API not available
    }
  }

  return (
    <footer id="contact" className="border-t border-neutral-200/60 bg-white dark:border-neutral-800/60 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-36">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-400">
            I&apos;m currently open to internship opportunities. Feel free to reach out!
          </p>
          <div className="mt-4 h-1 w-16 rounded-full bg-emerald-500 mx-auto" />
        </div>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          {contactLinks.map((link) =>
            link.label === "Email" ? (
              <button
                key={link.label}
                onClick={handleCopyEmail}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-emerald-600 px-6 py-2.5 text-sm font-medium text-emerald-600 transition-all duration-200 hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:border-emerald-500 dark:text-emerald-400 dark:hover:bg-emerald-950/30 dark:focus-visible:ring-offset-neutral-900"
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

        <div className="border-t border-neutral-200/60 pt-8 text-center dark:border-neutral-800/60">
          <p className="text-sm text-neutral-500">
            &copy; {year} All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  )
}
