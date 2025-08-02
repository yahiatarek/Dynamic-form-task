import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import "../styles/form.css"

const inter = Inter({ subsets: ["latin"] })

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
