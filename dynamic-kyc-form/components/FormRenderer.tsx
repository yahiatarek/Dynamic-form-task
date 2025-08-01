"use client"

import type React from "react"
import type { FormField, FormResponse } from "../types/form"
import { TextField } from "./FormFields/TextField"
import { TextAreaField } from "./FormFields/TextAreaField"
import { RadioField } from "./FormFields/RadioField"
import { MultiChoiceField } from "./FormFields/MultiChoiceField"
import { DropdownField } from "./FormFields/DropdownField"
import { DateField } from "./FormFields/DateField"
import { FileField } from "./FormFields/FileField"

interface FormRendererProps {
  fields: FormField[]
  responses: FormResponse
  errors: { [key: string]: string }
  onChange: (fieldId: string, value: any) => void
}

export const FormRenderer: React.FC<FormRendererProps> = ({ fields, responses, errors, onChange }) => {
  const renderField = (field: FormField) => {
    const commonProps = {
      field,
      error: errors[field.id],
      onChange: (value: any) => onChange(field.id, value),
    }

    switch (field.type) {
      case "text":
        return <TextField {...commonProps} value={responses[field.id] as string} />

      case "textarea":
        return <TextAreaField {...commonProps} value={responses[field.id] as string} />

      case "radio_buttons":
        return <RadioField {...commonProps} value={responses[field.id] as string} />

      case "multi_choice":
        return <MultiChoiceField {...commonProps} value={(responses[field.id] as string[]) || []} />

      case "drop_down":
        return <DropdownField {...commonProps} value={responses[field.id] as string} />

      case "date":
        return <DateField {...commonProps} value={responses[field.id] as string} />

      case "file":
        return <FileField {...commonProps} value={responses[field.id] as File} />

      default:
        return null
    }
  }

  return (
    <div className="form-renderer">
      {fields.map((field) => (
        <div key={field.id} className="form-renderer__field">
          {renderField(field)}
        </div>
      ))}
    </div>
  )
}
