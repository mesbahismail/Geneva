import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRightIcon } from "lucide-react"

import registry from "../../../registry.json"
import { CopyCommand } from "@/components/site/copy-command"
import { SiteFooter } from "@/components/geneva/site-footer"
import { SiteHeader } from "@/components/geneva/site-header"

export const metadata: Metadata = {
  title: "Blocks",
  description: "Install the Geneva template or any of its blocks with the shadcn CLI.",
}

const previews: Record<string, string> = {
  template: "/",
  header: "/",
  hero: "/",
  benefits: "/#benefits",
  features: "/#features",
  reviews: "/#reviews",
  integrations: "/#integrations",
  "how-it-works": "/#how-it-works",
  pricing: "/#pricing",
  partners: "/#partners",
  faq: "/#faq",
  footer: "/",
  login: "/login",
  signup: "/signup",
  about: "/about",
  contact: "/contact",
}

export default function BlocksPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex max-w-2xl flex-col gap-4">
          <span className="w-fit rounded-full border border-primary/60 px-3 py-1 text-sm font-medium text-primary">
            shadcn registry
          </span>
          <h1 className="text-4xl font-normal tracking-tight sm:text-5xl">
            Geneva blocks
          </h1>
          <p className="text-muted-foreground sm:text-lg">
            A free, open-source landing page template for shadcn/ui. Install the
            whole template or pick individual blocks. They use your project&apos;s
            own shadcn components and theme tokens, with Radix or Base UI.
          </p>
          <div className="mt-2 flex flex-col gap-2 text-sm text-muted-foreground">
            <p>Get the full template with the Geneva theme and font:</p>
            <CopyCommand command="npx shadcn@latest add @geneva/template @geneva/theme @geneva/font" />
          </div>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {registry.items.map((item) => (
            <li
              key={item.name}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg font-medium">{item.title}</h2>
                  <p className="font-mono text-xs text-muted-foreground">
                    {item.type.replace("registry:", "")}
                  </p>
                </div>
                {previews[item.name] && (
                  <Link
                    href={previews[item.name]}
                    className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Preview
                    <ArrowUpRightIcon className="size-4" />
                  </Link>
                )}
              </div>
              <p className="flex-1 text-sm text-muted-foreground">
                {item.description}
              </p>
              <CopyCommand command={`npx shadcn@latest add @geneva/${item.name}`} />
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </>
  )
}
