import type { Metadata } from "next"

import { SignupForm } from "@/components/geneva/signup-form"
import { SiteFooter } from "@/components/geneva/site-footer"
import { SiteHeader } from "@/components/geneva/site-header"

export const metadata: Metadata = { title: "Sign up" }

export default function SignupPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex justify-center px-4 py-16 sm:py-24">
        <SignupForm />
      </main>
      <SiteFooter />
    </>
  )
}
