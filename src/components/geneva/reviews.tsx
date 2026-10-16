"use client"

import * as React from "react"
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/geneva/section-heading"

const reviews = [
  {
    quote:
      "Geneva replaced three apps and a spreadsheet. I finally know where every euro goes each month.",
    name: "Sarah Adams",
    role: "Product Designer",
    avatar: "/geneva/avatar-1.jpg",
  },
  {
    quote:
      "The AI insights are genuinely useful. It flagged two subscriptions I had forgotten about in the first week.",
    name: "Marcus Reed",
    role: "Freelance Developer",
    avatar: "/geneva/avatar-2.jpg",
  },
  {
    quote:
      "Virtual cards with per-card limits made managing our team's software spend painless.",
    name: "Julia Santos",
    role: "Studio Founder",
    avatar: "/geneva/avatar-3.jpg",
  },
  {
    quote:
      "Clean, fast and beautiful. It's the first finance app I actually enjoy opening.",
    name: "Kenji Tanaka",
    role: "Photographer",
    avatar: "/geneva/avatar-4.jpg",
  },
  {
    quote:
      "Setting goals and watching them fill up automatically has completely changed how I save.",
    name: "Amira Haddad",
    role: "Marketing Lead",
  },
  {
    quote:
      "Sending money abroad used to be a headache. With Geneva it takes seconds and the fees are clear.",
    name: "Lukas Weber",
    role: "Architect",
  },
]

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
}

export function Reviews({ className }: { className?: string }) {
  const scrollerRef = React.useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = React.useState(true)
  const [atEnd, setAtEnd] = React.useState(false)

  const update = React.useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const tolerance = 5
    setAtStart(el.scrollLeft <= tolerance)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - tolerance)
  }, [])

  React.useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    update()
    el.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      el.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [update])

  const scrollBy = (direction: 1 | -1) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" })
  }

  return (
    <section
      id="reviews"
      className={cn("scroll-mt-20 border-t border-border py-20", className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading title="Reviews" className="sm:mx-0 sm:items-start sm:text-left" />
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="size-10"
              aria-label="Previous reviews"
              disabled={atStart}
              onClick={() => scrollBy(-1)}
            >
              <ChevronLeftIcon />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-10"
              aria-label="Next reviews"
              disabled={atEnd}
              onClick={() => scrollBy(1)}
            >
              <ChevronRightIcon />
            </Button>
          </div>
        </div>

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-background to-transparent transition-opacity",
              atStart ? "opacity-0" : "opacity-100"
            )}
          />
          <div
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-background to-transparent transition-opacity",
              atEnd ? "opacity-0" : "opacity-100"
            )}
          />
          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((review) => (
              <figure
                key={review.name}
                className="flex w-[85%] shrink-0 snap-start flex-col justify-between gap-6 rounded-2xl border border-border bg-card p-6 sm:w-[calc(50%-0.5rem)] lg:w-[calc((100%-2rem)/3)]"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex gap-0.5 text-primary" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="size-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-base font-medium text-card-foreground">
                    “{review.quote}”
                  </blockquote>
                </div>
                <figcaption className="flex items-center gap-3">
                  <Avatar className="size-10">
                    {review.avatar && <AvatarImage src={review.avatar} alt="" />}
                    <AvatarFallback>{initials(review.name)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
