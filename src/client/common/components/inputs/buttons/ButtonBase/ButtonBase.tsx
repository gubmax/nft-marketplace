import { ElementType, KeyboardEventHandler, MouseEventHandler } from 'react'

import { cn } from 'client/common/helpers/classNames'
import { AsProp, ChildrenProp, StyledProps } from 'client/common/typings'
import * as s from './ButtonBase.css'

export type ButtonVariant = 'contained' | 'containedLight' | 'outline' | 'outlineLight'

export type ButtonBaseProps<T extends keyof JSX.IntrinsicElements> = {
  innerClassName?: string
  variant?: ButtonVariant
  onClick?: MouseEventHandler
  onKeyPress?: KeyboardEventHandler
} & ChildrenProp &
  StyledProps &
  AsProp<T>

function ButtonBase<T extends keyof JSX.IntrinsicElements>({
  as: asProp,
  children,
  className,
  innerClassName,
  style,
  variant,
  ...rest
}: ButtonBaseProps<T>) {
  const Tag = (asProp as ElementType | undefined) ?? 'button'
  const tagClassName = cn(s.tag, variant ? s.buttonVariants[variant] : s.base, innerClassName)

  return (
    <div className={cn(s.wrapper, className)} style={style}>
      <Tag className={tagClassName} {...rest}>
        {children}
      </Tag>
    </div>
  )
}

export default ButtonBase