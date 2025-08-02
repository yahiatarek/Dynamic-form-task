"use client"

import { useFormStore } from "@/stores/useFormStore"
import type React from "react"
import { useEffect, useState } from "react"
import { useTheme } from "../contexts/ThemeContext"
import type { FormResponse, FormStep } from "../types/form"
import { validateForm } from "../utils/validation"
import { FormRenderer } from "./FormRenderer"

interface MultiStepFormProps {
  steps: FormStep[]
  onSubmit: (responses: FormResponse) => void
}

export const MultiStepForm: React.FC<MultiStepFormProps> = ({ steps, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [responses, setResponses] = useState<FormResponse>({})
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { formResponses, clearFormResponses, setFormResponses, clearFormSteps } = useFormStore()

  useEffect(() => {
    const savedResponses = JSON.stringify(formResponses)
    if (savedResponses) {
      try {
        setResponses(JSON.parse(savedResponses))
      } catch (error) {
        console.error("Failed to load saved responses:", error)
      }
    }
  }, [])

  useEffect(() => {
    setFormResponses(responses)
  }, [responses])

  const handleFieldChange = (fieldId: string, value: any) => {
    setResponses((prev) => ({ ...prev, [fieldId]: value }))
  }

  const validateCurrentStep = (): boolean => {
    const currentFields = steps[currentStep].fields
    const stepErrors = validateForm(currentFields, responses)

    const errorMap: { [key: string]: string } = {}
    stepErrors.forEach((error) => {
      errorMap[error.field] = error.message
    })

    setErrors(errorMap)
    return stepErrors.length === 0
  }

  const handleNext = () => {
    if (validateCurrentStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
    }
  }

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const handleSubmit = async () => {
    if (!validateCurrentStep()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      onSubmit(responses)
    } catch (error) {
      console.error("Submission failed:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const currentStepData = steps[currentStep]
  const isLastStep = currentStep === steps.length - 1
  const isFirstStep = currentStep === 0

  return (
    <div className="multi-step-form">
      <div className="multi-step-form__header">
        <div className="multi-step-form__theme-toggle">
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>

        <div className="multi-step-form__progress">
          <div className="progress-bar">
            <div className="progress-bar__fill" style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }} />
          </div>
          <span className="progress-text">
            Step {currentStep + 1} of {steps.length}
          </span>
        </div>
      </div>

      <div className="multi-step-form__content">
        <h2 className="multi-step-form__title">{currentStepData.title}</h2>

        <FormRenderer
          fields={currentStepData.fields}
          responses={responses}
          errors={errors}
          onChange={handleFieldChange}
        />
      </div>

      <div className="multi-step-form__actions">
        <button type="button" onClick={handlePrevious} disabled={isFirstStep} className="btn btn--secondary">
          Previous
        </button>

        {isLastStep ? (
          <button type="button" onClick={handleSubmit} disabled={isSubmitting} className="btn btn--primary">
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        ) : (
          <button type="button" onClick={handleNext} className="btn btn--primary">
            Next
          </button>
        )}
      </div>
    </div>
  )
}
