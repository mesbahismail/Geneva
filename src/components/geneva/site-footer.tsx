import Link from "next/link"

import { Logo } from "@/components/geneva/logo"

const footerLinks = [
  { label: "About us", href: "/about" },
  { label: "Contact us", href: "/contact" },
  { label: "Terms of use", href: "/terms" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-12 sm:px-6">
        <Logo className="text-3xl" />
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex w-full flex-col items-center justify-between gap-3 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>Designed with care by Ismail Mesbah</p>
          <p>© 2026 Geneva. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
