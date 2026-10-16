import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-2xl flex-col items-center gap-4 text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="rounded-full border border-primary/60 px-3 py-1 text-sm font-medium text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-normal tracking-tight text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-base text-pretty text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
