import Link from "next/link"

import { cn } from "@/lib/utils"

export function Logo({
  className,
  href = "/",
}: {
  className?: string
  href?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 text-2xl font-semibold tracking-tight text-foreground transition-opacity hover:opacity-90",
        className
      )}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="size-7 text-primary"
        fill="none"
      >
        <rect width="24" height="24" rx="7" fill="currentColor" opacity="0.16" />
        <path
          d="M16.5 8.25A5.25 5.25 0 1 0 17.25 12h-4.5"
          stroke="currentColor"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Geneva
    </Link>
  )
}
