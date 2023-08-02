import Image from "next/image"

import { CustomLink, LinkStatus, LinkTheme } from "@/src/ui/Links/CustomLink"
import { ThemeSwitcher } from "@/src/ui/ThemeSwitcher/ThemeSwitcher"
import cls from "./UserControls.module.scss"

const UserControls: React.FC = () => (
    <div className={cls.container}>
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
        <ThemeSwitcher />
    </div>
)

export default UserControls
