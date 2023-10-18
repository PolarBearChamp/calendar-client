import {
  forwardRef,
  ForwardRefRenderFunction,
  TextareaHTMLAttributes,
} from 'react'
import { UseControllerProps } from 'react-hook-form'
import { clsx } from 'clsx'
import cls from './Area.module.scss'

export const enum AreaSize {
  S = 's',
  M = 'm',
}

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  height?: number
  textSize?: AreaSize
}

const Area: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  UseControllerProps<any> & IProps
> = ({ textSize, height, ...rest }, ref) => (
  <textarea
    className={clsx(cls.Area, textSize && cls[textSize])}
    ref={ref}
    style={{ height: `${height}px` }}
    {...rest}
  />
)
export default forwardRef(Area)
