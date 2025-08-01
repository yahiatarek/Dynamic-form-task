"use client"

import type React from "react"
import type { FormField } from "../../types/form"

interface DropdownFieldProps {
  field: FormField
  value: string
  onChange: (value: string) => void
  error?: string
}

export const DropdownField: React.FC<DropdownFieldProps> = ({ field, value, onChange, error }) => {
  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={field.id}>
        {field.label}
        {field.required && <span className="form-field__required">*</span>}
      </label>
      <select
        id={field.id}
        className={`form-field__select ${error ? "form-field__select--error" : ""}`}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select an option</option>
        {field.options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <span className="form-field__error">{error}</span>}
    </div>
  )
}
