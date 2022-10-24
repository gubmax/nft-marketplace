import { ElementType } from 'react'

import { cn } from 'client/common/helpers/classNames'
import { pxToRem } from 'client/common/styles/helpers'
import { StyledProps } from 'client/common/typings'
import { iconSizeStyles, iconStateStyles } from './withIcon.css'

const DEFAULT_SIZE = pxToRem(24)

export type IconVariant = 'primary' | 'accent' | 'active' | 'secondary' | 'white'
export type IconSize = 'sm' | 'xl'

export interface IconProps extends StyledProps {
  variant?: IconVariant
  size?: IconSize
}

export function withIcon(Component: ElementType<IconProps>): ElementType<IconProps> {
  function Icon({ variant = 'primary', size, className, ...rest }: IconProps) {
    const classNames = cn(iconStateStyles[variant], iconSizeStyles[size ?? 'sm'], className)

    return (
      <Component
        width={DEFAULT_SIZE}
        height={DEFAULT_SIZE}
        viewBox="0 0 24 24"
        className={classNames}
        {...rest}
      />
    )
  }

  return Icon
}
