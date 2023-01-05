import { cn } from 'client/common/helpers/class-names.js'
import ButtonBase, { ButtonBaseProps } from '../button-base/button-base.js'
import s from './icon-button.module.css'

function IconButton<T extends 'button' | 'a' | 'i'>({ className, children, ...rest }: ButtonBaseProps<T>) {
	return (
		<ButtonBase className={cn(s.rounded, className)} innerClassName={s.inner} {...rest}>
			{children}
		</ButtonBase>
	)
}

export default IconButton
