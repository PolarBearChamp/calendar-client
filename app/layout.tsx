"use client"
import { Metadata } from "next"

import "@/styles/index.scss"
import { clsx } from "clsx"
export const metadata: Metadata = {
    title: "Home",
    description: "Welcome to Next.js",
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={clsx("app")}>
                {/* <Logo /> */}
                {children}
            </body>
        </html>
    )
}
