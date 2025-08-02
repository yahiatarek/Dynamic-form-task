"use client"

import { useFormStore } from "@/stores/useFormStore"
import { useRouter } from "next/navigation"
import type React from "react"
import { useState } from "react"
import type { FormResponse } from "../types/form"
import { MultiStepForm } from "./MultiStepForm"

export const KYCForm: React.FC = () => {
  const formSteps = useFormStore((state) => state.formSteps)
  const { clearFormResponses, setFormResponses, clearFormSteps, formResponses } = useFormStore()
  const router = useRouter()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (responses: FormResponse) => {
    console.log("responses", responses)
    setFormResponses(responses)
    setIsSubmitted(true)
  }

  const handleStartOver = () => {
    setIsSubmitted(false)
    clearFormResponses()
    clearFormSteps()
    router.push("/")
  }

  if (isSubmitted) {
    return (
      <div className="kyc-form__success">
        <div className="success-message">
          <h2 className="success-message__title">✅ Form Submitted Successfully!</h2>
          <p className="success-message__text">
            Thank you for completing the KYC form. Your information has been received and will be processed shortly.
          </p>

          <div className="success-message__details">
            <div>Submitted Data</div>
            <pre className="success-message__data">{JSON.stringify(formResponses, null, 2)}</pre>
          </div>

          <button onClick={handleStartOver} className="btn btn--secondary">
            Start Over
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="kyc-form">
      <div className="kyc-form__container">
        <header className="kyc-form__header">
          <h1 className="kyc-form__title">KYC Verification</h1>
          <p className="kyc-form__description">Please complete all required fields to verify your identity.</p>
        </header>

        <MultiStepForm steps={formSteps} onSubmit={handleSubmit} />
      </div>
    </div>
  )
}
