import Link from "next/link"
import { ChevronRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScreenFrame } from "@/components/geneva/screen-frame"
import { SectionHeading } from "@/components/geneva/section-heading"

const integrations = [
  {
    value: "banking",
    label: "Banking",
    title: "Connect 12,000+ banks",
    description:
      "Securely link your current, savings and credit accounts from banks around the world. Balances and transactions sync automatically, in real time.",
    image: "/geneva/wallet.jpg",
  },
  {
    value: "payments",
    label: "Payments",
    title: "Send and request money",
    description:
      "Pay friends, split bills or request payments with a link. Recipients don't need a Geneva account, and transfers land in seconds.",
    image: "/geneva/send-1.jpg",
  },
  {
    value: "accounting",
    label: "Accounting",
    title: "Sync with your accounting tools",
    description:
      "Push categorised transactions and receipts to your accounting software and close the books in minutes instead of days.",
    image: "/geneva/transactions.jpg",
  },
  {
    value: "documents",
    label: "Documents",
    title: "Every receipt, filed for you",
    description:
      "Upload invoices and receipts or forward them by email. Geneva reads them, matches them to transactions and keeps them searchable.",
    image: "/geneva/documents-grid.jpg",
  },
]

export function Integrations({ className }: { className?: string }) {
  return (
    <section
      id="integrations"
      className={cn("scroll-mt-20 border-t border-border py-20", className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading title="Integrations" />
        <Tabs defaultValue={integrations[0].value} className="mt-10 items-center gap-12">
          <TabsList className="mx-auto h-auto flex-wrap justify-center gap-2 bg-transparent p-0">
            {integrations.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className="h-9 flex-none rounded-lg border border-border px-4 text-sm text-muted-foreground hover:bg-accent data-[state=active]:border-foreground/40 data-[state=active]:bg-accent data-[state=active]:text-foreground data-active:border-foreground/40 data-active:bg-accent data-active:text-foreground"
              >
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {integrations.map((item) => (
            <TabsContent key={item.value} value={item.value} className="w-full">
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
                <div className="flex flex-col items-start gap-5">
                  <h3 className="text-2xl font-medium sm:text-3xl">{item.title}</h3>
                  <p className="text-base text-muted-foreground sm:text-lg">
                    {item.description}
                  </p>
                  <Link href="/signup" className={cn(buttonVariants({ size: "lg" }), "h-10 px-4")}>
                    Get started
                    <ChevronRightIcon className="size-4" />
                  </Link>
                </div>
                <ScreenFrame src={item.image} alt={item.title} />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
