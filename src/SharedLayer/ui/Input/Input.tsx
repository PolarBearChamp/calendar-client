import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react'
import { UseControllerProps } from 'react-hook-form'
import { clsx } from 'clsx'
import cls from './Input.module.scss'

export const enum InputSize {
  S = 's',
  M = 'm',
}

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  textSize: InputSize
}

const Input: ForwardRefRenderFunction<
  HTMLInputElement,
  UseControllerProps<any> & IProps
> = ({ textSize, ...rest }, ref) => (
  <input
    className={clsx(cls.primary, textSize && cls[textSize])}
    ref={ref}
    {...rest}
  />
)

export default forwardRef(Input)
