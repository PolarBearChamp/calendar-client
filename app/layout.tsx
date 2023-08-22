"use client"

import "@/styles/index.scss"
import { clsx } from "clsx"
import { ReactNode } from "react"

export default function RootLayout({ children }: { children: ReactNode }) {
    const theme = localStorage.getItem("theme") || "light"

    return (
        <html lang="en">
            <body className={clsx(`app ${theme}`)}>{children}</body>
        </html>
    )
}
