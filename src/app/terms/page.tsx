import type { Metadata } from "next"

import { SiteFooter } from "@/components/geneva/site-footer"
import { SiteHeader } from "@/components/geneva/site-header"

export const metadata: Metadata = { title: "Terms of use" }

const sections = [
  {
    title: "1. Accepting these terms",
    body: "By creating an account or using Geneva you agree to these terms. If you use Geneva on behalf of a company, you confirm you are authorised to accept them on its behalf.",
  },
  {
    title: "2. Your account",
    body: "You are responsible for keeping your login details secure and for all activity under your account. Tell us immediately if you suspect unauthorised access.",
  },
  {
    title: "3. Acceptable use",
    body: "Do not use Geneva for anything unlawful, to harm others, or to interfere with the service. We may suspend accounts that break these rules.",
  },
  {
    title: "4. Plans and payments",
    body: "Paid plans are billed in advance and renew automatically until cancelled. You can change or cancel your plan at any time from your account settings.",
  },
  {
    title: "5. Your data",
    body: "You own your data. We process it only to provide the service, as described in our privacy policy, and you can export or delete it at any time.",
  },
  {
    title: "6. Liability",
    body: "Geneva is provided “as is”. To the extent permitted by law, we are not liable for indirect or consequential losses arising from your use of the service.",
  },
  {
    title: "7. Changes",
    body: "We may update these terms from time to time. If changes are significant, we will notify you by email before they take effect.",
  },
]

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <span className="rounded-full border border-primary/60 px-3 py-1 text-sm font-medium text-primary">
          Legal
        </span>
        <h1 className="mt-6 text-4xl font-normal tracking-tight sm:text-5xl">
          Terms of use
        </h1>
        <p className="mt-4 text-muted-foreground">
          Last updated: January 1, 2026. This is sample text for the template;
          replace it with terms reviewed by your legal counsel.
        </p>
        <div className="mt-12 flex flex-col gap-10">
          {sections.map((section) => (
            <section key={section.title} className="flex flex-col gap-3">
              <h2 className="text-xl font-medium">{section.title}</h2>
              <p className="leading-relaxed text-muted-foreground">{section.body}</p>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
