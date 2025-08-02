// stores/useFormStore.ts
import type { FormResponse, FormStep } from '@/types/form'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface FormStore {
    // Form steps
    formSteps: FormStep[]
    setFormSteps: (steps: FormStep[]) => void
    clearFormSteps: () => void
    removeStep: (stepId: string) => void

    // Form responses
    formResponses: FormResponse | null
    setFormResponses: (responses: FormResponse) => void
    clearFormResponses: () => void
}

// Sample form configuration
const initFormSteps: FormStep[] = [
    {
        id: "personal-info",
        title: "Personal Information",
        fields: [
            {
                id: "full_name",
                label: "Full Name",
                type: "text",
                required: true,
                placeholder: "Enter your full name",
            },
            {
                id: "date_of_birth",
                label: "Date of Birth",
                type: "date",
                required: true,
            },
            {
                id: "gender",
                label: "Gender",
                type: "radio_buttons",
                options: ["Male", "Female"],
                required: true,
            },
        ],
    },
    {
        id: "contact-preferences",
        title: "Contact & Preferences",
        fields: [
            {
                id: "email",
                label: "Email Address",
                type: "text",
                required: true,
                placeholder: "your.email@example.com",
                validation: {
                    pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
                    message: "Please enter a valid email address",
                },
            },
            {
                id: "country",
                label: "Country of Residence",
                type: "drop_down",
                options: ["Egypt", "USA", "Germany", "Canada", "UK", "Other"],
                required: true,
            },
            {
                id: "hobbies",
                label: "Hobbies",
                type: "multi_choice",
                options: ["Reading", "Traveling", "Sports", "Gaming", "Music", "Cooking"],
                min: 1,
                max: 3,
            },
        ],
    },
    {
        id: "additional-info",
        title: "Additional Information",
        fields: [
            {
                id: "bio",
                label: "Tell us about yourself",
                type: "textarea",
                placeholder: "Share a brief description about yourself...",
            }
        ],
    },
]

export const useFormStore = create<FormStore>()(
    persist(
        (set) => ({
            // Initial state
            formSteps: initFormSteps,
            formResponses: null,

            // Actions
            setFormSteps: (steps) => set({ formSteps: steps }),
            clearFormSteps: () => set({ formSteps: [] }),
            removeStep: (stepId) => set((state) => ({ formSteps: state.formSteps.filter((step) => step.id !== stepId) })),

            setFormResponses: (responses) => set({ formResponses: responses }),
            clearFormResponses: () => set({ formResponses: null }),
        }),
        {
            name: 'form-storage',
        }
    )
)