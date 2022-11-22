import { cn } from 'client/common/helpers/classNames'
import { ButtonBase, ButtonBaseProps } from '../ButtonBase'
import s from './IconButton.module.css'

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
