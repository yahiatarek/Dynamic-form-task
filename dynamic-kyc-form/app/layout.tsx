import type { Metadata } from "next"
import type React from "react"
import "../styles/form.css"

export const metadata: Metadata = {
  title: "Dynamic KYC Form",
  description: "A comprehensive dynamic KYC form built with React and Next.js"
}

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
