import Link from "next/link"
import { ChevronRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import { ScreenFrame } from "@/components/geneva/screen-frame"

const avatars = [
  { src: "/geneva/avatar-1.jpg", fallback: "AL" },
  { src: "/geneva/avatar-2.jpg", fallback: "MR" },
  { src: "/geneva/avatar-3.jpg", fallback: "JS" },
  { src: "/geneva/avatar-4.jpg", fallback: "KT" },
]

export function Hero({
  imageSrc = "/geneva/dashboard.jpg",
  className,
}: {
  imageSrc?: string
  className?: string
}) {
  return (
    <section
      className={cn("relative isolate overflow-x-clip pt-10 pb-20", className)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-56 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/15 blur-[160px]"
      />

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <span className="rounded-full border border-primary/60 px-3 py-1 text-sm font-medium text-primary">
          Organize your money like a professional
        </span>

        <h1 className="max-w-3xl text-4xl font-normal tracking-tight text-balance sm:text-5xl md:text-6xl">
          Take control of your finances{" "}
          <span className="block text-primary">with the power of AI</span>
        </h1>

        <ScreenFrame
          src={imageSrc}
          alt="Geneva dashboard"
          priority
          className="mt-6 w-full max-w-4xl"
        />

        <p className="pt-6 text-xl font-medium sm:text-2xl">
          Take control of your money today.
        </p>

        <Link href="/signup" className={cn(buttonVariants({ size: "lg" }), "h-11 px-5 text-base")}>
          Start your free trial
          <ChevronRightIcon className="size-5" />
        </Link>

        <div className="flex flex-col items-center gap-3 pt-4">
          <div className="flex -space-x-3">
            {avatars.map((avatar) => (
              <Avatar
                key={avatar.src}
                className="size-10 ring-2 ring-background"
              >
                <AvatarImage src={avatar.src} alt="" />
                <AvatarFallback>{avatar.fallback}</AvatarFallback>
              </Avatar>
            ))}
            <Avatar className="size-10 ring-2 ring-background">
              <AvatarFallback className="bg-secondary text-xs font-medium text-secondary-foreground">
                +3k
              </AvatarFallback>
            </Avatar>
          </div>
          <p className="text-sm text-muted-foreground">
            Loved by 1,000+ creatives
          </p>
        </div>
      </div>
    </section>
  )
}
