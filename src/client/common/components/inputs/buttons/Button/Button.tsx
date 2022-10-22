import { MouseEvent } from 'react'

import { Loader, LoaderVariant } from 'client/common/components/elements/Loader'
import { cn } from 'client/common/helpers/classNames'
import { noop } from 'client/common/helpers/noop'
import { ButtonBase, ButtonBaseProps, ButtonVariant } from '../ButtonBase'
import * as s from './Button.css'

const loaderVariantByButtonVariant: Record<ButtonVariant, LoaderVariant> = {
  contained: 'light',
  containedLight: 'accent',
  outline: 'accent',
  outlineLight: 'accent',
}

export type ButtonSize = 'sm' | 'md'
export type ButtonProps<T extends keyof JSX.IntrinsicElements> = {
  loading?: boolean
  size?: ButtonSize
} & ButtonBaseProps<T>

function Button<T extends 'button' | 'a'>({
  children,
  className,
  loading,
  size = 'md',
  variant,
  onClick = noop,
  ...rest
}: ButtonProps<T>) {
  function handleClick<T extends MouseEvent>(event: T) {
    if (loading) return
    onClick(event)
  }

  return (
    <ButtonBase
      className={cn(s.wrapper, className)}
      innerClassName={cn(s.inner, s.loaderSizes[size])}
      variant={variant}
      onClick={handleClick}
      {...rest}
    >
      {loading ? (
        <Loader variant={variant && loaderVariantByButtonVariant[variant]} size="sm" />
      ) : (
        children
      )}
    </ButtonBase>
  )
}

export default Button
