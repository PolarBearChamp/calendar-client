import { Button, ButtonTheme } from "../Buttons/Button"
import { clsx } from "clsx"
import cls from "./ThemeSwitcher.module.scss"

import Image from "next/image"
import { useEffect, useState } from "react"

interface ThemeSwitcherProps {
    className?: string
}

export const enum Theme {
    LIGHT = "light",
    DARK = "dark",
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const [currentTheme, setCurrentTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme")
        return savedTheme || Theme.LIGHT
    })

    const toggleTheme = () => {
        setCurrentTheme((prevTheme) => (prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT))
    }

    useEffect(() => {
        localStorage.setItem("theme", currentTheme)
        document.body.classList.remove(Theme.LIGHT, Theme.DARK)
        document.body.classList.add(currentTheme)
    }, [currentTheme])

    const srcThemeIcon = currentTheme === Theme.LIGHT ? "/icons/Moon.svg" : "/icons/Sun.svg"

    return (
        <Button theme={ButtonTheme.DEFAULT} className={clsx(className)} onClick={toggleTheme}>
            <Image
                src={srcThemeIcon}
                alt="theme"
                width={40}
                height={40}
                className={cls.ThemeSwitcher}
            />
        </Button>
    )
}
