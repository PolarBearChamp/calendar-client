import Image from "next/image"

import { NAVIGATION_ACTION } from "@/src/types"
import cls from "./CustomLink.module.scss"

interface IProps {
    icon: string
    action: NAVIGATION_ACTION
    onClick: () => void
}

const NavigationButton: React.FC<IProps> = ({ icon, action, onClick }) => (
    <div className={cls.navigateButton} onClick={onClick}>
        <Image
            src={`/icons/${icon}`}
            alt={`${action}`}
            width={35}
            height={30}
            className={cls.arrow}
        />
    </div>
)

export default NavigationButton
