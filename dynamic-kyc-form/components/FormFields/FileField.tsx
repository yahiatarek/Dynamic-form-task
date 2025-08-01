"use client"

import type React from "react"
import type { FormField } from "../../types/form"

interface FileFieldProps {
  field: FormField
  value: File | null
  onChange: (value: File | null) => void
  error?: string
}

export const FileField: React.FC<FileFieldProps> = ({ field, value, onChange, error }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    onChange(file)
  }

  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={field.id}>
        {field.label}
        {field.required && <span className="form-field__required">*</span>}
      </label>
      <input
        id={field.id}
        type="file"
        className={`form-field__file ${error ? "form-field__file--error" : ""}`}
        onChange={handleFileChange}
        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
      />
      {value && (
        <div className="form-field__file-info">
          Selected: {value.name} ({(value.size / 1024).toFixed(1)} KB)
        </div>
      )}
      {error && <span className="form-field__error">{error}</span>}
    </div>
  )
}
