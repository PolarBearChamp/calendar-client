"use client"
import { FC } from "react"
import { clsx } from "clsx"
import cls from "./Logo.module.scss"
import Image from "next/image"
import Link from "next/link"

export const Logo: FC = () => (
    <div className={clsx(cls.Logo)}>
        <Link href="/">
            <Image src="/icons/Logo.svg" alt="logo" width={200} height={30} />
        </Link>
    </div>
)
