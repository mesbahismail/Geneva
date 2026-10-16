"use client"

import * as React from "react"
import { CheckCircle2Icon, MailIcon, MapPinIcon, MessageCircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const channels = [
  { icon: MailIcon, label: "Email", value: "hello@example.com" },
  { icon: MessageCircleIcon, label: "Live chat", value: "Mon–Fri, 9:00–18:00 CET" },
  { icon: MapPinIcon, label: "Office", value: "Geneva, Switzerland" },
]

export function Contact({ className }: { className?: string }) {
  const [sent, setSent] = React.useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // Replace with a call to your API or form service.
    setSent(true)
  }

  return (
    <section className={cn("relative isolate overflow-x-clip py-16", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-56 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/10 blur-[160px]"
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col items-start gap-6">
          <span className="rounded-full border border-primary/60 px-3 py-1 text-sm font-medium text-primary">
            Contact us
          </span>
          <h1 className="text-4xl font-normal tracking-tight text-balance sm:text-5xl">
            Let&apos;s talk about your money.
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            Questions about plans, security or getting your team on board? Send
            us a message and we&apos;ll get back to you within one business day.
          </p>
          <ul className="mt-4 flex flex-col gap-5">
            {channels.map((channel) => (
              <li key={channel.label} className="flex items-center gap-4">
                <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-card text-primary">
                  <channel.icon className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground">{channel.label}</span>
                  <span className="font-medium">{channel.value}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-input bg-card p-6 text-card-foreground sm:p-10">
          {sent ? (
            <div role="status" className="flex h-full flex-col items-center justify-center gap-4 py-10 text-center">
              <CheckCircle2Icon className="size-12 text-primary" strokeWidth={1.5} />
              <h2 className="text-2xl font-medium">Message sent</h2>
              <p className="max-w-sm text-muted-foreground">
                Thanks for reaching out. We&apos;ll reply to your email shortly.
              </p>
              <Button variant="outline" size="lg" className="mt-2" onClick={() => setSent(false)}>
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="contact-name">Name</Label>
                  <Input id="contact-name" name="name" autoComplete="name" required className="h-11" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="h-11"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-subject">Subject</Label>
                <Input id="contact-subject" name="subject" className="h-11" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  placeholder="How can we help?"
                  className="min-h-36"
                />
              </div>
              <Button type="submit" size="lg" className="h-11 w-full text-base">
                Send message
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
