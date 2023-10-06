import { FC, memo, SVGProps } from 'react'

import cls from './Icon.module.scss'
import { clsx } from 'clsx'

interface IconProps {
  className?: string
  Svg: FC<SVGProps<SVGSVGElement>>
}

export const Icon: FC<IconProps> = memo(({ className, Svg }) => {
  return <Svg className={clsx(cls.Icon, className)} />
})
