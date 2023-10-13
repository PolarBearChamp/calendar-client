import { FC, InputHTMLAttributes } from 'react'
import { RegisterOptions, UseControllerProps } from 'react-hook-form'
import cls from './Checkbox.module.scss'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  options?: RegisterOptions
}

export const Checkbox: FC<UseControllerProps<any> & IProps> = ({
  options,
  ...rest
}) => {
  return <input type="checkbox" className={cls.primary} {...rest} />
}
