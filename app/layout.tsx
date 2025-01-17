import "./globals.css"
import type {Metadata} from "next"
import {Inter} from "next/font/google"
import CorbadoProvider from "./_utils/Provider"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
    title: " Corbado User Example",
    description: "Go passwordless with Corbado and Next.js",
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
        <CorbadoProvider>
            <body className={inter.className}>{children}</body>
        </CorbadoProvider>
        </html>
    )
}
