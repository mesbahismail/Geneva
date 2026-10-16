import { MailCheckIcon } from "lucide-react"

export function EmailSent({
  email,
  message,
  onResend,
}: {
  email: string
  message: string
  onResend: () => void
}) {
  return (
    <div className="flex flex-col items-center gap-6 text-center" role="status">
      <span className="flex size-20 items-center justify-center rounded-full border-2 border-primary text-primary">
        <MailCheckIcon className="size-9" strokeWidth={1.5} />
      </span>
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-medium tracking-tight">Check your email!</h1>
        <p className="text-muted-foreground">
          We&apos;ve sent {message} to{" "}
          <strong className="font-medium text-primary">{email}</strong>. Open
          it and click the link to continue.
        </p>
      </div>
      <p className="text-sm text-muted-foreground">
        Didn&apos;t receive the email?{" "}
        <button
          type="button"
          onClick={onResend}
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          Click to resend
        </button>
      </p>
    </div>
  )
}
