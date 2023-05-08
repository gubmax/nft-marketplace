import { ElementType, KeyboardEventHandler, MouseEventHandler } from 'react'
import { cn } from '@nft-marketplace/ui/helpers/class-names.js'

import { AsProp } from 'client/common/typings/as-prop.js'
import { ChildrenProp } from 'client/common/typings/children-prop.js'
import { StyledProps } from 'client/common/typings/styled-props.js'
import s from './button-base.module.css'

export type ButtonVariant = 'contained' | 'containedLight' | 'outline' | 'outlineLight'

export type ButtonBaseProps<T extends keyof JSX.IntrinsicElements> = {
	innerClassName?: string
	variant?: ButtonVariant
	onClick?: MouseEventHandler
	onKeyPress?: KeyboardEventHandler
} & ChildrenProp &
	StyledProps &
	AsProp<T>

const classNameByVariant: Record<ButtonVariant, string> = {
	contained: s.variantContained,
	containedLight: s.variantContainedLight,
	outline: s.variantOutline,
	outlineLight: s.variantOutlineLight,
}

function ButtonBase<T extends keyof JSX.IntrinsicElements>({
	as: asProp,
	children,
	className,
	innerClassName,
	style,
	variant,
	...rest
}: ButtonBaseProps<T>) {
	const Tag = (asProp as ElementType | undefined) ?? 'button'
	const tagClassName = cn(s.tag, variant ? classNameByVariant[variant] : s.base, innerClassName)

	return (
		<div className={cn(s.wrapper, className)} style={style}>
			<Tag className={tagClassName} {...rest}>
				{children}
			</Tag>
		</div>
	)
}

export default ButtonBase
