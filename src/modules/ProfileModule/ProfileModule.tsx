import { FC } from "react"
import { clsx } from "clsx"
import cls from "./ProfileModule.module.scss"
import { ProfileForm } from "@/src/components/Profile/ProfileForm"
import { CoverForm } from "@/src/components/Profile/CoverForm"

interface ProfileModuleProps {
    className?: string
}

export const ProfileModule: FC<ProfileModuleProps> = ({ className }) => {
    return (
        <div className={clsx(cls.ProfileModule, {}, [className])}>
            <ProfileForm />
            <CoverForm />
        </div>
    )
}
