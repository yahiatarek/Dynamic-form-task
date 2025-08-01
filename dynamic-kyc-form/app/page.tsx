"use client"

import { ThemeProvider } from "../contexts/ThemeContext"
import { KYCForm } from "../components/KYCForm"
import "../styles/form.css"

export default function Home() {
  return (
    <ThemeProvider>
      <KYCForm />
    </ThemeProvider>
  )
}
