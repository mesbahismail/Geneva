import {
  AtomIcon,
  BoxIcon,
  CircleDotIcon,
  HexagonIcon,
  OrbitIcon,
  SnowflakeIcon,
  SunIcon,
  TriangleIcon,
  WavesIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"

// Placeholder brands. Swap these for your customers' logos.
const partners = [
  { name: "Northwind", icon: WavesIcon },
  { name: "Lumen", icon: SunIcon },
  { name: "Vertex", icon: TriangleIcon },
  { name: "Orbit", icon: OrbitIcon },
  { name: "Quanta", icon: AtomIcon },
  { name: "Helix", icon: HexagonIcon },
  { name: "Polar", icon: SnowflakeIcon },
  { name: "Cubic", icon: BoxIcon },
  { name: "Focal", icon: CircleDotIcon },
]

export function Partners({ className }: { className?: string }) {
  return (
    <section
      id="partners"
      className={cn("scroll-mt-20 border-t border-border py-20", className)}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-normal tracking-tight text-balance sm:text-3xl">
          Meet partners who are happily using our app
        </h2>
        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {partners.map((partner) => (
            <li
              key={partner.name}
              className="flex items-center gap-2 text-xl font-semibold tracking-tight text-muted-foreground/80 transition-colors hover:text-foreground"
            >
              <partner.icon className="size-6" strokeWidth={2} aria-hidden="true" />
              {partner.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
