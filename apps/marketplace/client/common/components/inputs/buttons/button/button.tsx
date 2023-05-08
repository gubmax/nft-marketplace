import { MouseEvent } from 'react'
import { cn } from '@nft-marketplace/ui/helpers/class-names.js'
import { noop } from 'rxjs'

import Loader, { LoaderVariant } from 'client/common/components/elements/loader/loader.js'
import { useEvent } from 'client/common/hooks/use-event.js'
import ButtonBase, { ButtonBaseProps, ButtonVariant } from '../button-base/button-base.js'
import s from './button.module.css'

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
	sm: s.loaderSizesSm,
	md: s.loaderSizesMd,
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
	const handleClick = useEvent((event: MouseEvent) => {
		if (loading) return
		onClick(event)
	})

	return (
		<ButtonBase
			className={cn(s.wrapper, className)}
			innerClassName={cn(s.inner, classNameBySize[size])}
			variant={variant}
			onClick={handleClick}
			{...rest}
		>
			{loading ? <Loader variant={variant && loaderVariantByButtonVariant[variant]} size="sm" /> : children}
		</ButtonBase>
	)
}

export default Button
