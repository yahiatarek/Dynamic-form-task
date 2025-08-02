"use client"

import { KYCForm } from "@/components/KYCForm"
import { ThemeProvider } from "@/contexts/ThemeContext"

export default function Form() {
  return (
    <ThemeProvider>
      <KYCForm />
    </ThemeProvider>
  )
}
