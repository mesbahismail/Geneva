import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { ScreenFrame } from "@/components/geneva/screen-frame"
import { SectionHeading } from "@/components/geneva/section-heading"

const features = [
  {
    title: "Analytics that explain themselves",
    description:
      "Income, spending and savings broken down by week, month or year. Geneva highlights what changed and why, so you never have to dig through spreadsheets again.",
    points: ["Cash-flow forecasts", "Category trends", "Exportable reports"],
    image: "/geneva/analytics.jpg",
  },
  {
    title: "Virtual and physical cards",
    description:
      "Issue cards in seconds, set spending limits per card and freeze them with one tap. Perfect for subscriptions, travel or your whole team.",
    points: ["Instant virtual cards", "Per-card limits", "One-tap freeze"],
    image: "/geneva/my-cards.jpg",
  },
  {
    title: "An assistant that knows your money",
    description:
      "Ask questions in plain language — “How much did I spend on travel this year?” — and get answers, charts and suggestions instantly.",
    points: ["Natural-language search", "Smart suggestions", "Private by design"],
    image: "/geneva/ai-chat-1.jpg",
  },
]

export function Features({ className }: { className?: string }) {
  return (
    <section
      id="features"
      className={cn("scroll-mt-20 border-t border-border py-20", className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading title="Features" />
        <div className="mt-16 flex flex-col gap-20 lg:gap-28">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
            >
              <div className={cn("flex flex-col gap-4", index % 2 === 1 && "lg:order-last")}>
                <h3 className="text-2xl font-medium sm:text-3xl">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground sm:text-lg">
                  {feature.description}
                </p>
                <ul className="mt-2 flex flex-col gap-3">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-center gap-3">
                      <CheckIcon className="size-5 text-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <ScreenFrame src={feature.image} alt={feature.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
