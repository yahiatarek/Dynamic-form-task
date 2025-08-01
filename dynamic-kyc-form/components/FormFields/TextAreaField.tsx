"use client"

import type React from "react"
import type { FormField } from "../../types/form"

interface TextAreaFieldProps {
  field: FormField
  value: string
  onChange: (value: string) => void
  error?: string
}

export const TextAreaField: React.FC<TextAreaFieldProps> = ({ field, value, onChange, error }) => {
  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={field.id}>
        {field.label}
        {field.required && <span className="form-field__required">*</span>}
      </label>
      <textarea
        id={field.id}
        className={`form-field__textarea ${error ? "form-field__textarea--error" : ""}`}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={field.placeholder}
        rows={4}
      />
      {error && <span className="form-field__error">{error}</span>}
    </div>
  )
}
