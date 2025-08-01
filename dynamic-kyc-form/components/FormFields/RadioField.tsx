"use client"

import type React from "react"
import type { FormField } from "../../types/form"

interface RadioFieldProps {
  field: FormField
  value: string
  onChange: (value: string) => void
  error?: string
}

export const RadioField: React.FC<RadioFieldProps> = ({ field, value, onChange, error }) => {
  return (
    <div className="form-field">
      <fieldset className="form-field__fieldset">
        <legend className="form-field__legend">
          {field.label}
          {field.required && <span className="form-field__required">*</span>}
        </legend>
        <div className="form-field__radio-group">
          {field.options?.map((option) => (
            <label key={option} className="form-field__radio-label">
              <input
                type="radio"
                name={field.id}
                value={option}
                checked={value === option}
                onChange={(e) => onChange(e.target.value)}
                className="form-field__radio-input"
              />
              <span className="form-field__radio-text">{option}</span>
            </label>
          ))}
        </div>
      </fieldset>
      {error && <span className="form-field__error">{error}</span>}
    </div>
  )
}
