import Link from "next/link"
import { MailIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const stats = [
  { value: "2019", label: "Founded in Geneva" },
  { value: "120k+", label: "People using Geneva" },
  { value: "40+", label: "Supported currencies" },
  { value: "4.9", label: "Average app rating" },
]

export function About({
  imageSrc = "/geneva/about.jpg",
  className,
}: {
  imageSrc?: string
  className?: string
}) {
  return (
    <section className={cn("relative isolate overflow-x-clip py-16", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-56 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/10 blur-[160px]"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col items-start gap-6">
            <span className="rounded-full border border-primary/60 px-3 py-1 text-sm font-medium text-primary">
              About us
            </span>
            <h1 className="text-4xl font-normal tracking-tight text-balance sm:text-5xl">
              We control our world one line at a time.
            </h1>
            <p className="text-base text-muted-foreground sm:text-lg">
              Geneva started with a simple idea: managing money should feel as
              calm and clear as a walk along the lake. We are a small team of
              designers, engineers and finance nerds building tools that give
              people real control over their finances, with AI that works for
              them rather than against them.
            </p>
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "h-11 px-5 text-base")}
            >
              <MailIcon className="size-5" />
              Contact us
            </Link>
          </div>
          <div
            role="img"
            aria-label="The Geneva team at work"
            style={{ backgroundImage: `url("${imageSrc}")` }}
            className="aspect-[8/7] w-full rounded-3xl bg-linear-135 from-primary/30 via-muted to-card bg-cover bg-center"
          />
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1 bg-background p-6 sm:p-8">
              <dt className="text-sm text-muted-foreground">{stat.label}</dt>
              <dd className="order-first text-3xl font-medium tracking-tight sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
