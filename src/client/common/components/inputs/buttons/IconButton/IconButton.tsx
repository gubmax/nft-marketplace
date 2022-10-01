import { cn } from 'client/common/helpers/classNames'
import { BaseButton, BaseButtonProps } from '../BaseButton'
import * as s from './IconButton.css'

function IconButton<T extends 'button' | 'a' | 'i'>({
  className,
  children,
  ...rest
}: BaseButtonProps<T>) {
  return (
    <BaseButton className={cn(s.rounded, className)} innerClassName={s.inner} {...rest}>
      {children}
    </BaseButton>
  )
}

export default IconButton
