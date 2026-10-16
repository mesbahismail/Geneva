"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { EmailSent } from "@/components/geneva/email-sent"
import { SocialButtons } from "@/components/geneva/social-buttons"

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Errors = Partial<Record<"name" | "email" | "password", string>>

export function SignupForm({ className }: { className?: string }) {
  const [email, setEmail] = React.useState("")
  const [errors, setErrors] = React.useState<Errors>({})
  const [submitted, setSubmitted] = React.useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") ?? "").trim()
    const password = String(data.get("password") ?? "")

    const next: Errors = {}
    if (!name) next.name = "Name is required"
    if (!EMAIL_PATTERN.test(email)) next.email = "Please enter a valid email address"
    if (password.length < 8) next.password = "Use at least 8 characters"
    setErrors(next)
    if (Object.keys(next).length > 0) return

    // Replace with your auth provider's sign-up call.
    setSubmitted(true)
  }

  return (
    <div
      className={cn(
        "w-full max-w-lg rounded-2xl border border-input bg-card p-6 text-card-foreground sm:p-10",
        className
      )}
    >
      {submitted ? (
        <EmailSent
          email={email}
          message="a verification link"
          onResend={() => setSubmitted(false)}
        />
      ) : (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-medium tracking-tight">
              Create your account
            </h1>
            <p className="text-muted-foreground">
              Start your 14-day free trial. No credit card required.
            </p>
          </div>

          <Field id="signup-name" label="Full name" error={errors.name}>
            <Input
              id="signup-name"
              name="name"
              autoComplete="name"
              placeholder="Jane Doe"
              className="h-11"
              aria-invalid={!!errors.name}
            />
          </Field>

          <Field id="signup-email" label="Email address" error={errors.email}>
            <Input
              id="signup-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="h-11"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              aria-invalid={!!errors.email}
            />
          </Field>

          <Field id="signup-password" label="Password" error={errors.password}>
            <Input
              id="signup-password"
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder="At least 8 characters"
              className="h-11"
              aria-invalid={!!errors.password}
            />
          </Field>

          <Label className="flex items-start gap-2 leading-snug font-normal text-muted-foreground">
            <Checkbox className="mt-0.5" />
            <span>
              Send me product updates and tips. You can unsubscribe at any time.
            </span>
          </Label>

          <Button type="submit" size="lg" className="h-11 w-full text-base">
            Create account
          </Button>

          <SocialButtons action="Sign up" />

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Login
            </Link>
          </p>
          <p className="text-center text-xs text-muted-foreground">
            By creating an account you agree to our{" "}
            <Link href="/terms" className="underline underline-offset-4 hover:text-foreground">
              Terms of use
            </Link>
            .
          </p>
        </form>
      )}
    </div>
  )
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  )
}
