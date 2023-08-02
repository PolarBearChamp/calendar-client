import { FC } from "react"
import { clsx } from "clsx"
import cls from "./Profile.module.scss"
import Input, { InputSize } from "@/src/ui/inputs/Input"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { Button, ButtonTheme, ButtonSize } from "@/src/ui/Buttons/Button"
import Image from "next/image"

interface CoverFormProps {
    className?: string
}

export const CoverForm: FC<CoverFormProps> = ({ className }) => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = handleSubmit((data) => {
        console.log(data)
        router.push("/home")
    })
    return (
        <div className={clsx(cls.CoverForm, className && cls[className])}>
            <div className={cls.coverArea}>
                <Image src="/icons/Photo.svg" alt="cover" width={51} height={47} />
            </div>
            <div className={cls.controls}>
                <form onSubmit={onSubmit} className={clsx(cls.generateForm, cls.controlBlock)}>
                    <Input
                        id="request"
                        name="request"
                        type="text"
                        placeholder="request"
                        register={register}
                        options={{ required: true }}
                        textSize={InputSize.S}
                    />
                    <Button theme={ButtonTheme.PRIMARY} size={ButtonSize.S}>
                        generate
                    </Button>
                </form>
                <div className={clsx(cls.controlBlock, cls.text)}>
                    <span>Write what&apos;s on your mind</span> and you&apos;ll see{" "}
                    <span>your cover</span> in the mood
                </div>
                <div className={clsx(cls.text)}>
                    or just <span>upload it</span> yourself, focusing on your preferences
                </div>
                <div className={cls.controlBlock}>
                    <Button theme={ButtonTheme.CANCEL} size={ButtonSize.S}>
                        delete
                    </Button>
                    <Button theme={ButtonTheme.PRIMARY} size={ButtonSize.S}>
                        upload
                    </Button>
                </div>
            </div>
        </div>
    )
}