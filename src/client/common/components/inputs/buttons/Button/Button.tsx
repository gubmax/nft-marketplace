import { MouseEvent } from 'react'

import { Loader, LoaderVariant } from 'client/common/components/elements/Loader'
import { cn } from 'client/common/helpers/classNames'
import { noop } from 'client/common/helpers/noop'
import { ButtonBase, ButtonBaseProps, ButtonVariant } from '../ButtonBase'
import s from './Button.module.css'

const loaderVariantByButtonVariant: Record<ButtonVariant, LoaderVariant> = {
  contained: 'body',
  containedLight: 'primary',
  outline: 'primary',
  outlineLight: 'primary',
}

export type ButtonSize = 'sm' | 'md'
export type ButtonProps<T extends keyof JSX.IntrinsicElements> = {
  loading?: boolean
  size?: ButtonSize
} & ButtonBaseProps<T>

const classNameBySize: Record<ButtonSize, string> = {
  sm: s.loaderSizes_sm,
  md: s.loaderSizes_md,
}

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
      innerClassName={cn(s.inner, classNameBySize[size])}
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
