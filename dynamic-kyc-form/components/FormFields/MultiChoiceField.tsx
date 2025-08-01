"use client"

import type React from "react"
import type { FormField } from "../../types/form"

interface MultiChoiceFieldProps {
  field: FormField
  value: string[]
  onChange: (value: string[]) => void
  error?: string
}

export const MultiChoiceField: React.FC<MultiChoiceFieldProps> = ({ field, value, onChange, error }) => {
  const handleChange = (option: string, checked: boolean) => {
    if (checked) {
      onChange([...value, option])
    } else {
      onChange(value.filter((v) => v !== option))
    }
  }

  return (
    <div className="form-field">
      <fieldset className="form-field__fieldset">
        <legend className="form-field__legend">
          {field.label}
          {field.required && <span className="form-field__required">*</span>}
          {field.min && field.max && (
            <span className="form-field__hint">
              (Select {field.min}-{field.max} options)
            </span>
          )}
        </legend>
        <div className="form-field__checkbox-group">
          {field.options?.map((option) => (
            <label key={option} className="form-field__checkbox-label">
              <input
                type="checkbox"
                value={option}
                checked={value.includes(option)}
                onChange={(e) => handleChange(option, e.target.checked)}
                className="form-field__checkbox-input"
              />
              <span className="form-field__checkbox-text">{option}</span>
            </label>
          ))}
        </div>
      </fieldset>
      {error && <span className="form-field__error">{error}</span>}
    </div>
  )
}
