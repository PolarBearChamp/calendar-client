import { FC } from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'
import cls from './Logo.module.scss'

interface IProps {
  classname?: string
}
export const Logo: FC<IProps> = ({ classname }) => {
  return (
    <Link href="/" className={clsx(cls.Logo, classname)}>
      calendar
    </Link>
  )
}
