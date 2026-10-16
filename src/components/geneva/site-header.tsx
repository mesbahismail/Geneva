"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { MenuIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "@/components/geneva/logo"

const navItems = [
  { label: "Benefits", href: "/#benefits" },
  { label: "Features", href: "/#features" },
  { label: "Integrations", href: "/#integrations" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const [pendingHref, setPendingHref] = React.useState<string | null>(null)
  const router = useRouter()

  // Navigate only after the sheet has closed: its scroll lock would
  // otherwise swallow the jump to the anchor.
  React.useEffect(() => {
    if (open || !pendingHref) return
    const timeout = setTimeout(() => {
      router.push(pendingHref)
      setPendingHref(null)
    }, 300)
    return () => clearTimeout(timeout)
  }, [open, pendingHref, router])

  function navigateFromMenu(event: React.MouseEvent, href: string) {
    event.preventDefault()
    setPendingHref(href)
    setOpen(false)
  }

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent transition-colors duration-300",
        scrolled && "border-border/60 bg-background/70 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/login"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Login
          </Link>
          <Link href="/signup" className={buttonVariants({ size: "lg" })}>
            Get started
          </Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            aria-label="Open menu"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "lg:hidden"
            )}
          >
            <MenuIcon className="size-5" />
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(event) => navigateFromMenu(event, item.href)}
                  className="rounded-lg px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-2 p-4">
              <Link
                href="/login"
                onClick={(event) => navigateFromMenu(event, "/login")}
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Login
              </Link>
              <Link
                href="/signup"
                onClick={(event) => navigateFromMenu(event, "/signup")}
                className={buttonVariants({ size: "lg" })}
              >
                Get started
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
