export interface FormField {
  id: string
  label: string
  type: "text" | "textarea" | "radio_buttons" | "multi_choice" | "drop_down" | "date"
  required?: boolean
  options?: string[]
  min?: number
  max?: number
  placeholder?: string
  validation?: {
    pattern?: string
    message?: string
  }
}

export interface FormResponse {
  [key: string]: string | string[] | null
}

export interface ValidationError {
  field: string
  message: string
}

export interface FormStep {
  title: string
  fields: FormField[]
}
