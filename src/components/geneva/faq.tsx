import { PlusIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { SectionHeading } from "@/components/geneva/section-heading"

const faqs = [
  {
    question: "How does the AI integration work?",
    answer:
      "Geneva analyses your transactions to categorise spending, forecast cash flow and surface insights. It runs on encrypted data and never sells or shares your information.",
  },
  {
    question: "Is my money and data safe?",
    answer:
      "Yes. Bank connections are read-only, all data is encrypted in transit and at rest, and sign-in is protected with biometrics and two-factor authentication.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards and bank transfers. All payments are processed through a PCI-compliant provider.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes, you can upgrade or downgrade at any time from your account settings. Changes take effect immediately with prorated billing.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "The Basic plan is free forever, and Professional comes with a 14-day free trial. No credit card is required to start.",
  },
]

export function Faq({ className }: { className?: string }) {
  return (
    <section
      id="faq"
      className={cn("scroll-mt-20 border-t border-border py-20", className)}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading title="Frequently asked questions" />
        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((faq) => (
            <details key={faq.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-medium outline-none focus-visible:text-primary [&::-webkit-details-marker]:hidden">
                {faq.question}
                <PlusIcon
                  aria-hidden="true"
                  className="size-5 shrink-0 transition-transform duration-200 group-open:rotate-45"
                />
              </summary>
              <p className="pb-6 text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
