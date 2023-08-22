"use client"
import { Metadata } from "next"

import "@/styles/index.scss"
import { clsx } from "clsx"
export const metadata: Metadata = {
    title: "Home",
    description: "Welcome to Next.js",
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
    const theme = localStorage.getItem("theme") || "light"

    return (
        <html lang="en">
            <body className={clsx(`app ${theme}`)}>{children}</body>
        </html>
    )
}
