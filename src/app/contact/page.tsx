import type { Metadata } from "next"

import { Contact } from "@/components/geneva/contact"
import { SiteFooter } from "@/components/geneva/site-footer"
import { SiteHeader } from "@/components/geneva/site-header"

export const metadata: Metadata = { title: "Contact us" }

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
