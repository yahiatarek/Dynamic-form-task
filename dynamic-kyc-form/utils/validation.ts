import type { FormField, FormResponse, ValidationError } from "../types/form"

export const validateField = (field: FormField, value: any): string | null => {
  // Required field validation
  if (field.required) {
    if (!value || (Array.isArray(value) && value.length === 0)) {
      return `${field.label} is required`
    }
  }

  // Skip further validation if field is empty and not required
  if (!value || (Array.isArray(value) && value.length === 0)) {
    return null
  }

  // Type-specific validation
  switch (field.type) {
    case "text":
      if (typeof value !== "string" || value.trim().length === 0) {
        return `${field.label} must be a valid text`
      }
      // Custom pattern validation
      if (field.validation?.pattern) {
        const regex = new RegExp(field.validation.pattern)
        if (!regex.test(value)) {
          return field.validation.message || `${field.label} format is invalid`
        }
      }
      break

    case "multi_choice":
      if (Array.isArray(value)) {
        if (field.min && value.length < field.min) {
          return `Please select at least ${field.min} option(s)`
        }
        if (field.max && value.length > field.max) {
          return `Please select no more than ${field.max} option(s)`
        }
      }
      break

    default:
      break
  }

  return null
}

export const validateForm = (fields: FormField[], responses: FormResponse): ValidationError[] => {
  const errors: ValidationError[] = []

  fields.forEach((field) => {
    const error = validateField(field, responses[field.id])
    if (error) {
      errors.push({ field: field.id, message: error })
    }
  })

  return errors
}
