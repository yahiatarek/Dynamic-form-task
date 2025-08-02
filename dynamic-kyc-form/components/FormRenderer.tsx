"use client"

import type React from "react"
import type { FormField, FormResponse } from "../types/form"
import { DateField } from "./FormFields/DateField"
import { DropdownField } from "./FormFields/DropdownField"
import { MultiChoiceField } from "./FormFields/MultiChoiceField"
import { RadioField } from "./FormFields/RadioField"
import { TextAreaField } from "./FormFields/TextAreaField"
import { TextField } from "./FormFields/TextField"

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
