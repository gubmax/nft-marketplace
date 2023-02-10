import { ElementType, memo } from 'react'
import { pxToRem } from '@nft-marketplace/ui'

import { cn } from 'client/common/helpers/class-names.js'
import { StyledProps } from 'client/common/typings/styled-props.js'
import s from './with-icon.module.css'

const DEFAULT_SIZE = pxToRem(24)

export type IconVariant = 'inherit' | 'primary' | 'outline'
export type IconSize = 'sm' | 'md' | 'xl' | 'xxl'

const classNameByVariant: Record<IconVariant, string> = {
	inherit: s.variantInherit,
	primary: s.variantPrimary,
	outline: s.variantOutline,
}

const classNameBySize: Record<IconSize, string> = {
	sm: s.sizeSm,
	md: s.sizeMd,
	xl: s.sizeXl,
	xxl: s.sizeXXl,
}

export interface IconProps extends StyledProps {
	variant?: IconVariant
	size?: IconSize
	rotate?: number
}

export function withIcon(Component: ElementType<IconProps>): ElementType<IconProps> {
	function Icon({ variant = 'inherit', size = 'md', rotate, className, style }: IconProps) {
		const rotateStyle = rotate ? { transform: `rotate(${rotate}deg)` } : {}

		return (
			<Component
				width={DEFAULT_SIZE}
				height={DEFAULT_SIZE}
				viewBox="0 0 24 24"
				className={cn(classNameByVariant[variant], classNameBySize[size], className)}
				style={{ ...style, ...rotateStyle }}
			/>
		)
	}

	return memo(Icon)
}
