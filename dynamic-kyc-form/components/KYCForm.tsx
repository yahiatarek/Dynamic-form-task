"use client"

import type React from "react"
import { useState } from "react"
import type { FormResponse, FormStep } from "../types/form"
import { MultiStepForm } from "./MultiStepForm"

// Sample form configuration
const formSteps: FormStep[] = [
  {
    title: "Personal Information",
    fields: [
      {
        id: "full_name",
        label: "Full Name",
        type: "text",
        required: true,
        placeholder: "Enter your full name",
      },
      {
        id: "date_of_birth",
        label: "Date of Birth",
        type: "date",
        required: true,
      },
      {
        id: "gender",
        label: "Gender",
        type: "radio_buttons",
        options: ["Male", "Female"],
        required: true,
      },
    ],
  },
  {
    title: "Contact & Preferences",
    fields: [
      {
        id: "email",
        label: "Email Address",
        type: "text",
        required: true,
        placeholder: "your.email@example.com",
        validation: {
          pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
          message: "Please enter a valid email address",
        },
      },
      {
        id: "country",
        label: "Country of Residence",
        type: "drop_down",
        options: ["Egypt", "USA", "Germany", "Canada", "UK", "Other"],
        required: true,
      },
      {
        id: "hobbies",
        label: "Hobbies",
        type: "multi_choice",
        options: ["Reading", "Traveling", "Sports", "Gaming", "Music", "Cooking"],
        min: 1,
        max: 3,
      },
    ],
  },
  {
    title: "Additional Information",
    fields: [
      {
        id: "bio",
        label: "Tell us about yourself",
        type: "textarea",
        placeholder: "Share a brief description about yourself...",
      }
    ],
  },
]

export const KYCForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submittedData, setSubmittedData] = useState<FormResponse | null>(null)

  const handleSubmit = (responses: FormResponse) => {
    console.log("responses", responses)
    setSubmittedData(responses)
    setIsSubmitted(true)
  }

  const handleStartOver = () => {
    setIsSubmitted(false)
    setSubmittedData(null)
    localStorage.removeItem("kyc-form-responses")
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
            <pre className="success-message__data">{JSON.stringify(submittedData, null, 2)}</pre>
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
          <h1 className="kyc-form__main-title">KYC Verification Form</h1>
          <p className="kyc-form__description">Please complete all required fields to verify your identity.</p>
        </header>

        <MultiStepForm steps={formSteps} onSubmit={handleSubmit} />
      </div>
    </div>
  )
}
