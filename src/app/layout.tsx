import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"

import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: "Geneva — AI finance landing page template",
    template: "%s · Geneva",
  },
  description:
    "A free, open-source SaaS landing page template built with Next.js, Tailwind CSS and shadcn/ui.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark scroll-smooth ${spaceGrotesk.variable}`}>
      <body className="min-h-svh antialiased">{children}</body>
    </html>
  )
}
