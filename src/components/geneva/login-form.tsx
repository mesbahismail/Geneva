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

export function LoginForm({ className }: { className?: string }) {
  const [email, setEmail] = React.useState("")
  const [error, setError] = React.useState("")
  const [submitted, setSubmitted] = React.useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email) return setError("Email is required")
    if (!EMAIL_PATTERN.test(email)) {
      return setError("Please enter a valid email address")
    }
    // Replace with your auth provider's magic-link call.
    setError("")
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
          message="a login link"
          onResend={() => setSubmitted(false)}
        />
      ) : (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-medium tracking-tight">
              Login to your account
            </h1>
            <p className="text-muted-foreground">
              We&apos;ll email you a magic link for a password-free sign in.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="login-email">Email address</Label>
            <Input
              id="login-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="h-11"
              value={email}
              aria-invalid={!!error}
              aria-describedby={error ? "login-email-error" : undefined}
              onChange={(event) => {
                setEmail(event.target.value)
                setError("")
              }}
            />
            {error && (
              <p id="login-email-error" className="text-sm text-destructive">
                {error}
              </p>
            )}
          </div>

          <Label className="flex items-center gap-2 font-normal">
            <Checkbox defaultChecked />
            Keep me logged in
          </Label>

          <Button type="submit" size="lg" className="h-11 w-full text-base">
            Login
          </Button>

          <SocialButtons action="Login" />

          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      )}
    </div>
  )
}
