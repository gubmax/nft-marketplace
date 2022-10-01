import { ElementType, KeyboardEventHandler, MouseEventHandler } from 'react'

import { cn } from 'client/common/helpers/classNames'
import { AsProp, ChildrenProp, StyledProps } from 'client/common/typings'
import * as s from './BaseButton.css'

export type ButtonVariant = 'primary' | 'outline'

export type BaseButtonProps<T extends keyof JSX.IntrinsicElements> = {
  innerClassName?: string
  variant?: ButtonVariant
  onClick?: MouseEventHandler
  onKeyPress?: KeyboardEventHandler
} & ChildrenProp &
  StyledProps &
  AsProp<T>

function BaseButton<T extends keyof JSX.IntrinsicElements>({
  as: asProp,
  children,
  className,
  innerClassName,
  style,
  variant = 'primary',
  ...rest
}: BaseButtonProps<T>) {
  const Tag = (asProp as ElementType | undefined) ?? 'button'

  return (
    <div className={cn(s.wrapper, className)} style={style}>
      <Tag
        className={cn(s.tag, s.buttonVariants[variant], innerClassName)}
        tabIndex={asProp === 'a' ? 0 : undefined}
        {...rest}
      >
        {children}
      </Tag>
    </div>
  )
}

export default BaseButton
