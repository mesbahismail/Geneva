import type { Metadata } from "next"

import { LoginForm } from "@/components/geneva/login-form"
import { SiteFooter } from "@/components/geneva/site-footer"
import { SiteHeader } from "@/components/geneva/site-header"

export const metadata: Metadata = { title: "Login" }

export default function LoginPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex justify-center px-4 py-16 sm:py-24">
        <LoginForm />
      </main>
      <SiteFooter />
    </>
  )
}
