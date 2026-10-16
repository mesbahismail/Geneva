import { cn } from "@/lib/utils"
import { SectionHeading } from "@/components/geneva/section-heading"

const steps = [
  {
    title: "Sign up",
    description:
      "Create your free account in under a minute. No credit card, no paperwork.",
  },
  {
    title: "Connect",
    description:
      "Link your banks and cards securely. Geneva imports and categorises everything for you.",
  },
  {
    title: "Grow",
    description:
      "Follow AI insights, automate savings and watch your goals come within reach.",
  },
]

export function HowItWorks({ className }: { className?: string }) {
  return (
    <section
      id="how-it-works"
      className={cn("scroll-mt-20 border-t border-border py-20", className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading title="How it works" />
        <ol className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <li key={step.title} className="flex flex-col items-center gap-4 text-center">
              <span
                aria-hidden="true"
                className="bg-linear-to-t from-background from-10% to-primary to-90% bg-clip-text text-[7.5rem] leading-[0.8] font-medium text-transparent"
              >
                {index + 1}
              </span>
              <h3 className="text-2xl font-medium">
                <span className="sr-only">Step {index + 1}: </span>
                {step.title}
              </h3>
              <p className="max-w-xs text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
