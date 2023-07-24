import React from "react"

import FriendsHover from "@/public/icons/FriendsHover.svg"
import CompassHover from "@/public/icons/DiscoveryHover.svg"
import Discovery from "@/public/icons/DiscoveryDefault.svg"
import Friends from "@/public/icons/FriendsDefault.svg"
import Legasov from "@/public/icons/legasov.png"
import styles from "./UserControls.module.scss"
import { CustomLink, LinkStatus, LinkTheme } from "@/src/ui/Links/CustomLink"
import Image from "next/image"

const UserControls: React.FC = () => (
    <div className={styles.container}>
        <CustomLink href="/friends" theme={LinkTheme.FRIENDS} status={LinkStatus.DEFAULT} />
        <CustomLink href="/discovery" theme={LinkTheme.DISCOVERY} status={LinkStatus.DEFAULT} />
        <CustomLink href="/profile" theme={LinkTheme.PROFILE} status={LinkStatus.DEFAULT}>
            <Image
                src="/icons/legasov.png"
                alt="profile image"
                height={40}
                width={40}
                quality={100}
            />
        </CustomLink>
    </div>
)

export default UserControls
