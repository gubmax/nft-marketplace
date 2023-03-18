import { ElementType, memo } from 'react'

import { Size, StyledProps, Variant } from '../../common.js'
import { cn } from '../../helpers/class-names.js'
import './with-icon.css'

export type IconVariant = 'inherit' | Extract<Variant, 'primary' | 'outline'>
export type IconSize = Extract<Size, 'sm' | 'md' | 'lg' | 'xl' | 'xxl'>

export interface IconProps extends StyledProps {
	variant?: IconVariant
	size?: IconSize
}

export function withIcon(Component: ElementType<IconProps>): ElementType<IconProps> {
	function Icon({ variant = 'inherit', size = 'md', className, ...rest }: IconProps) {
		return <Component className={cn(`ui-icon variant--${variant} size--${size}`, className)} {...rest} />
	}

	return memo(Icon)
}
