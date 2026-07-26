import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"

type ButtonVariants = "primary" | "outline" | "ghost"
type ButtonSizes = "sm" | "md" | "lg"

interface ButtonProps<T extends ElementType = "button"> {
  as?: T
  variant?: ButtonVariants
  size?: ButtonSizes
  children: ReactNode
  className?: string
  icon?: ReactNode
}

type Props<T extends ElementType = "button"> = ButtonProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>

export function Button<T extends ElementType = "button">({
  as,
  variant = "primary",
  size = "md",
  children,
  className,
  icon,
  ...props
}: Props<T>) {
  const Component = as || "button"

  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900"

  const variants = {
    primary:
      "bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800 shadow-sm",
    outline:
      "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-500 dark:text-emerald-400 dark:hover:bg-emerald-950/30",
    ghost:
      "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  }

  return (
    <Component
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </Component>
  )
}
