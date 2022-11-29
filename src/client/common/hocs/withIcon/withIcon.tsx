import { ElementType } from 'react'

import { cn } from 'client/common/helpers/classNames'
import { pxToRem } from 'client/common/styles/helpers'
import { StyledProps } from 'client/common/typings'
import s from './withIcon.module.css'

const DEFAULT_SIZE = pxToRem(24)

export type IconVariant = 'primary' | 'background' | 'outline'
export type IconSize = 'sm' | 'md' | 'xl'

const classNameByVariant: Record<IconVariant, string> = {
  primary: s.variantPrimary,
  background: s.variantBackground,
  outline: s.variantOutline,
}

const classNameBySize: Record<IconSize, string> = {
  sm: s.sizeSm,
  md: s.sizeMd,
  xl: s.sizeXl,
}

export interface IconProps extends StyledProps {
  variant?: IconVariant
  size?: IconSize
}

export function withIcon(Component: ElementType<IconProps>): ElementType<IconProps> {
  function Icon({ variant = 'outline', size = 'sm', className, ...rest }: IconProps) {
    const classNames = cn(classNameByVariant[variant], classNameBySize[size], className)

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
