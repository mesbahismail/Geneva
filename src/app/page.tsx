import { Benefits } from "@/components/geneva/benefits"
import { Faq } from "@/components/geneva/faq"
import { Features } from "@/components/geneva/features"
import { Hero } from "@/components/geneva/hero"
import { HowItWorks } from "@/components/geneva/how-it-works"
import { Integrations } from "@/components/geneva/integrations"
import { Partners } from "@/components/geneva/partners"
import { Pricing } from "@/components/geneva/pricing"
import { Reviews } from "@/components/geneva/reviews"
import { SiteFooter } from "@/components/geneva/site-footer"
import { SiteHeader } from "@/components/geneva/site-header"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Benefits />
        <Features />
        <Reviews />
        <Integrations />
        <HowItWorks />
        <Pricing />
        <Partners />
        <Faq />
      </main>
      <SiteFooter />
    </>
  )
}
