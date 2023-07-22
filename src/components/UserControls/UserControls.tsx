import React from "react"

import UserControlButton from "../../ui/Buttons/UserControlButton"
import FriendsHover from "@/public/icons/friends2.svg"
import CompassHover from "@/public/icons/compass2.svg"
import Compass from "@/public/icons/compass.svg"
import Friends from "@/public/icons/friends.svg"
import Legasov from "@/public/icons/legasov.png"
import styles from "./UserControls.module.scss"

const UserControls: React.FC = () => (
    <div className={styles.container}>
        <UserControlButton image={Friends} imageOnHover={FriendsHover} route="friends" />
        <UserControlButton image={Compass} imageOnHover={CompassHover} route="discovery" />
        <UserControlButton image={Legasov} route="profile" />
    </div>
)

export default UserControls
