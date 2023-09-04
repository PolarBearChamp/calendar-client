import { FC, TextareaHTMLAttributes } from 'react'
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'
import { clsx } from 'clsx'
import cls from './Area.module.scss'

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  register: UseFormRegister<FieldValues>
  options?: RegisterOptions
  height?: number
}

export const Area: FC<IProps> = ({ register, options, height, ...rest }) => (
  <textarea
    className={clsx(cls.Area)}
    {...register(rest.name!, options)}
    {...rest}
    style={{ height: `${height}px` }}
  />
)
