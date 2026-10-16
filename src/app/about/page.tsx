import type { Metadata } from "next"

import { About } from "@/components/geneva/about"
import { SiteFooter } from "@/components/geneva/site-footer"
import { SiteHeader } from "@/components/geneva/site-header"

export const metadata: Metadata = { title: "About us" }

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <About />
      </main>
      <SiteFooter />
    </>
  )
}
