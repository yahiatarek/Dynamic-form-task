import { useFormStore } from "@/stores/useFormStore";
import { FormStep } from "@/types/form";
import dynamic from 'next/dynamic';
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const Editor = dynamic(
    () => import('react-monaco-editor'),
    {
        ssr: false,
        loading: () => (
            <div className="editor-loading">
                <div className="spinner" />
                <p>Loading editor...</p>
            </div>
        ),
    }
)

export const KYCFormSetup = () => {
    const { formSteps, setFormSteps } = useFormStore()
    const [setupFormSteps, setSetupFormSteps] = useState<FormStep[]>(formSteps)
    const router = useRouter()

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const jsonEditor = useMemo(() => (
        <Editor
            className={'kyc-form__setup__form-steps__data'}
            height="100%"
            width="100%"
            language="json"
            value={JSON.stringify(setupFormSteps, null, 2)}
            onChange={(value) => {
                const parsed = JSON.parse(value || "[]")
                setSetupFormSteps(parsed)
            }}
            options={{
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                fontSize: 14,
                wordWrap: "on",
                automaticLayout: false,
                tabSize: 2,
            }}
        />
    ), [setupFormSteps])

    return (
        <div className="kyc-form__setup">
            <h2>Form Setup</h2>
            <p>Create your KYC form by completing the following JSON</p>

            <div className="kyc-form__setup__form-steps">
                <div className="kyc-form__setup__form-steps__title">Form Steps</div>
                {isClient && jsonEditor}
            </div>
            <button
                className="btn btn--primary"
                onClick={() => {
                    setFormSteps(setupFormSteps)
                    router.push("/form")
                }}
            >
                Create Form
            </button>
        </div>
    )
}
