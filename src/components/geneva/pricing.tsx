import Link from "next/link"
import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { SectionHeading } from "@/components/geneva/section-heading"

const plans = [
  {
    name: "Basic",
    price: "€0",
    period: "/ month",
    description: "Everything you need to get your finances in order.",
    features: [
      "2 connected accounts",
      "1 virtual card",
      "Basic analytics",
      "Monthly reports",
      "Email support",
    ],
    cta: "Start for free",
  },
  {
    name: "Professional",
    price: "€9.90",
    period: "/ month",
    description: "For people who want AI on their side, every day.",
    features: [
      "Unlimited accounts",
      "10 virtual cards",
      "Advanced analytics",
      "AI assistant",
      "Savings goals & automations",
      "Priority support",
    ],
    cta: "Start free trial",
    featured: true,
  },
  {
    name: "Business",
    price: "€29.90",
    period: "/ month",
    description: "Shared spending, approvals and exports for small teams.",
    features: [
      "Everything in Professional",
      "Unlimited team cards",
      "Spend approvals",
      "Accounting integrations",
      "Dedicated manager",
    ],
    cta: "Contact sales",
  },
]

export function Pricing({ className }: { className?: string }) {
  return (
    <section
      id="pricing"
      className={cn("scroll-mt-20 border-t border-border py-20", className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          title="Pricing"
          description="Simple plans that grow with you. Cancel anytime."
        />
        <div className="mx-auto mt-12 grid max-w-md gap-6 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "flex flex-col gap-6 rounded-2xl border-2 border-border bg-background p-8",
                plan.featured &&
                  "border-primary shadow-[0_0_64px_color-mix(in_oklab,var(--primary)_16%,transparent)]"
              )}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-medium">{plan.name}</h3>
                {plan.featured && (
                  <span className="rounded-full border border-primary/60 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Best value
                  </span>
                )}
              </div>
              <p className="text-muted-foreground">{plan.description}</p>
              <p className="flex items-baseline gap-1">
                <span className="text-4xl font-medium tracking-tight">
                  {plan.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  {plan.period}
                </span>
              </p>
              <ul className="flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckIcon className="size-5 shrink-0 text-muted-foreground" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.name === "Business" ? "/contact" : "/signup"}
                className={cn(
                  buttonVariants({
                    variant: plan.featured ? "default" : "outline",
                    size: "lg",
                  }),
                  "h-11 w-full text-base"
                )}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
