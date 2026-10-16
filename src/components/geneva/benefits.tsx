import {
  BellRingIcon,
  GlobeIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { SectionHeading } from "@/components/geneva/section-heading"

const benefits = [
  {
    icon: SparklesIcon,
    title: "AI that works for you",
    description:
      "Smart categorisation and insights spot patterns in your spending before you do, so every decision is backed by data.",
  },
  {
    icon: WalletIcon,
    title: "All accounts, one place",
    description:
      "Connect banks, cards and wallets in minutes and see your complete financial picture in a single dashboard.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Bank-grade security",
    description:
      "End-to-end encryption, biometric login and read-only connections keep your money and data safe at all times.",
  },
  {
    icon: TrendingUpIcon,
    title: "Goals that stick",
    description:
      "Set savings goals, track progress automatically and get nudges that help you reach them faster.",
  },
  {
    icon: BellRingIcon,
    title: "Real-time alerts",
    description:
      "Know instantly when bills are due, subscriptions renew or something looks unusual on your account.",
  },
  {
    icon: GlobeIcon,
    title: "Borderless payments",
    description:
      "Send money to anyone, anywhere, in more than 40 currencies with transparent, low fees.",
  },
]

export function Benefits({ className }: { className?: string }) {
  return (
    <section
      id="benefits"
      className={cn("scroll-mt-20 border-t border-border py-20", className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading title="Benefits" />
        <div className="mt-12 grid gap-px overflow-hidden bg-border sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-background p-8">
              <benefit.icon className="size-8 text-primary" strokeWidth={1.5} />
              <h3 className="mt-5 mb-2 text-lg font-medium">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
