"use client"

import { CorbadoProvider } from "@corbado/react"

export default function Provider({ children, }: { children: React.ReactNode }) {
    return (
        <CorbadoProvider
            projectId={process.env.NEXT_PUBLIC_CORBADO_PROJECT_ID!}
            darkMode='on'
            setShortSessionCookie={true}
        >
            {children}
        </CorbadoProvider>
    )
}