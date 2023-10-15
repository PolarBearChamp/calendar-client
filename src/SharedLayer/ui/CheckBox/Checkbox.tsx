import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react'
import { RegisterOptions, UseControllerProps } from 'react-hook-form'
import cls from './Checkbox.module.scss'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  options?: RegisterOptions
}

const Checkbox: ForwardRefRenderFunction<
  HTMLInputElement,
  UseControllerProps<any> & IProps
> = ({ options, ...rest }, ref) => {
  return <input type="checkbox" className={cls.primary} ref={ref} {...rest} />
}
export default forwardRef(Checkbox)
