import React, { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { clsx } from "clsx"

import styles from "./Button.module.scss"

interface IProps {
    image: string
    imageOnHover?: string
    route: string
    icon?: string
}

const UserControlButton: React.FC<IProps> = ({ route, icon, image, imageOnHover }) => {
    const router = useRouter()

    const [hovered, setHovered] = useState(false)

    const handleMouseEnter = () => {
        setHovered(true)
    }

    const handleMouseLeave = () => {
        setHovered(false)
    }

    let totalImage = hovered && imageOnHover ? imageOnHover : image
    let totalStyles = hovered && !imageOnHover ? styles.controlsHover : ""
    return (
        <Image
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={clsx(styles.cursor, styles.controls, totalStyles)}
            src={totalImage}
            alt=""
            onClick={() => {
                router.push(`/${route}`)
            }}
        />
        // <Image
        //   className={styles.cursor}
        //   src={`/icons/${icon}`}
        //   alt=""
        //   width={40}
        //   height={40}
        //   onClick={() => {
        //     router.push(`/${route}`);
        //   }}
        // />
    )
}

export default UserControlButton
