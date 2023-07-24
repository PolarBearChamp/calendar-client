import React from "react"

import NavigationButton from "../../ui/Links/NavigationButton"
import { NAVIGATION_ACTION } from "@/src/types"
import styles from "./Navigation.module.scss"
import { CustomLink } from "@/src/ui/Links/CustomLink"
import Image from "next/image"
import { Button, ButtonTheme } from "@/src/ui/Buttons/Button"

interface IProps {
    nextMonth: () => void
    prevMonth: () => void
}

const Navigation: React.FC<IProps> = ({ nextMonth, prevMonth }) => (
    <div className={styles.container}>
        <Button theme={ButtonTheme.NAVIGATION}>
            <Image src="/icons/ArrowRight.svg" alt="next" width={35} height={35} />
        </Button>
        <Button theme={ButtonTheme.NAVIGATION}>
            <Image src="/icons/ArrowLeft.svg" alt="prev" width={35} height={35} />
        </Button>
    </div>
)

export default Navigation
