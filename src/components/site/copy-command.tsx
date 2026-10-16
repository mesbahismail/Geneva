"use client"

import * as React from "react"
import { CheckIcon, CopyIcon } from "lucide-react"

export function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = React.useState(false)

  async function copy() {
    await navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="flex items-center gap-2 rounded-lg border border-border bg-background py-1.5 pr-1.5 pl-3 font-mono text-xs">
      <code className="flex-1 truncate text-muted-foreground">{command}</code>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Copied" : "Copy command"}
        className="flex size-7 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
      >
        {copied ? <CheckIcon className="size-3.5" /> : <CopyIcon className="size-3.5" />}
      </button>
    </div>
  )
}
