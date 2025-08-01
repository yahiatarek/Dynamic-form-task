"use client"

import type React from "react"
import type { FormField } from "../../types/form"

interface TextFieldProps {
  field: FormField
  value: string
  onChange: (value: string) => void
  error?: string
}

export const TextField: React.FC<TextFieldProps> = ({ field, value, onChange, error }) => {
  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={field.id}>
        {field.label}
        {field.required && <span className="form-field__required">*</span>}
      </label>
      <input
        id={field.id}
        type="text"
        className={`form-field__input ${error ? "form-field__input--error" : ""}`}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={field.placeholder}
      />
      {error && <span className="form-field__error">{error}</span>}
    </div>
  )
}
