import { Metadata } from "next"

import "@/styles/globals.scss"
import { Logo } from "@/src/components/Logo/Logo"

export const metadata: Metadata = {
    title: "Home",
    description: "Welcome to Next.js",
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Logo />
                {children}
            </body>
        </html>
    )
}
