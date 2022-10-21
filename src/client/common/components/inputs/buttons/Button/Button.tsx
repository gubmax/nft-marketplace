import { MouseEvent } from 'react'

import { Loader, LoaderVariant } from 'client/common/components/elements/Loader'
import { cn } from 'client/common/helpers/classNames'
import { noop } from 'client/common/helpers/noop'
import { BaseButton, BaseButtonProps, ButtonVariant } from '../BaseButton'
import * as s from './Button.css'

const loaderVariantByButtonVariant: Record<ButtonVariant, LoaderVariant> = {
  primary: 'light',
  primaryLight: 'primary',
  outline: 'primary',
  outlineLight: 'primary',
}

export type ButtonSize = 'sm' | 'md'
export type ButtonProps<T extends keyof JSX.IntrinsicElements> = {
  loading?: boolean
  size?: ButtonSize
} & BaseButtonProps<T>

function Button<T extends 'button' | 'a'>({
  children,
  className,
  loading,
  size = 'md',
  onClick = noop,
  variant = 'primary',
  ...rest
}: ButtonProps<T>) {
  function handleClick<T extends MouseEvent>(event: T) {
    if (loading) return
    onClick(event)
  }

  return (
    <BaseButton
      className={cn(s.wrapper, className)}
      innerClassName={cn(s.inner, s.loaderSizes[size])}
      variant={variant}
      onClick={handleClick}
      {...rest}
    >
      {loading ? <Loader variant={loaderVariantByButtonVariant[variant]} size="sm" /> : children}
    </BaseButton>
  )
}

export default Button
