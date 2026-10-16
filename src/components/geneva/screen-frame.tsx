"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Product screenshot inside an animated gradient border.
 * Falls back to a skeleton dashboard when `src` is missing or fails to load,
 * so the block still looks right before you add your own screenshots.
 */
export function ScreenFrame({
  src,
  alt,
  width = 1512,
  height = 982,
  priority = false,
  tilt = true,
  className,
}: {
  src?: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  tilt?: boolean
  className?: string
}) {
  const [failed, setFailed] = React.useState(false)

  return (
    <div
      className={cn(
        "relative rounded-[1.75rem] bg-linear-45 from-primary/70 via-background to-primary/70 bg-[length:300%_300%] p-0.5 shadow-[0_0_96px_color-mix(in_oklab,var(--primary)_16%,transparent)] transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] animate-geneva-gradient motion-reduce:animate-none",
        tilt &&
          "hover:shadow-[0_0_128px_color-mix(in_oklab,var(--primary)_32%,transparent)] hover:[transform:perspective(900px)_rotateX(3deg)_rotateY(2deg)] motion-reduce:hover:transform-none",
        className
      )}
    >
      <div className="overflow-hidden rounded-[1.625rem] border-4 border-background bg-card sm:border-8">
        {src && !failed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            onError={() => setFailed(true)}
            className="block h-auto w-full"
          />
        ) : (
          <ScreenPlaceholder label={alt} ratio={width / height} />
        )}
      </div>
    </div>
  )
}

function ScreenPlaceholder({ label, ratio }: { label: string; ratio: number }) {
  return (
    <div
      role="img"
      aria-label={label}
      style={{ aspectRatio: ratio }}
      className="grid w-full grid-cols-[18%_1fr] gap-3 bg-card p-3 sm:gap-4 sm:p-5"
    >
      <div className="flex flex-col gap-2 rounded-xl bg-muted/60 p-3">
        <div className="mb-2 h-3 w-2/3 rounded-full bg-primary/40" />
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-2.5 w-full rounded-full bg-muted" />
        ))}
      </div>
      <div className="grid grid-rows-[auto_1fr_1fr] gap-3 sm:gap-4">
        <div className="h-4 w-1/3 rounded-full bg-muted" />
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          <div className="rounded-xl bg-muted/60" />
          <div className="col-span-2 flex items-end gap-1.5 rounded-xl bg-muted/60 p-3">
            {[40, 70, 55, 85, 45, 75, 60, 90, 50].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className="flex-1 rounded-sm bg-primary/50"
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="rounded-xl bg-muted/60" />
          <div className="rounded-xl bg-muted/60" />
        </div>
      </div>
    </div>
  )
}
