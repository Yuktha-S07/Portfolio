import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "next-themes"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Portfolio | Frontend Developer & UI/UX Designer",
  description:
    "A passionate frontend developer specializing in React, Next.js, TypeScript, and modern UI/UX design. Open to internship opportunities.",
  keywords: [
    "frontend developer",
    "UI/UX designer",
    "React",
    "Next.js",
    "TypeScript",
    "portfolio",
    "web developer",
    "internship",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Portfolio | Frontend Developer & UI/UX Designer",
    description:
      "A passionate frontend developer specializing in React, Next.js, TypeScript, and modern UI/UX design.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Frontend Developer & UI/UX Designer",
    description:
      "A passionate frontend developer specializing in React, Next.js, TypeScript, and modern UI/UX design.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a href="#main-content" className="skip-to-content">
            Skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
