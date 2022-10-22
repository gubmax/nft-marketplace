import { cn } from 'client/common/helpers/classNames'
import { ButtonBase, ButtonBaseProps } from '../ButtonBase'
import * as s from './IconButton.css'

function IconButton<T extends 'button' | 'a' | 'i'>({
  className,
  children,
  ...rest
}: ButtonBaseProps<T>) {
  return (
    <ButtonBase className={cn(s.rounded, className)} innerClassName={s.inner} {...rest}>
      {children}
    </ButtonBase>
  )
}

export default IconButton
