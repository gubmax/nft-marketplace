import { ReactNode } from 'react'
import { cn } from '@nft-marketplace/ui/helpers/class-names.js'

import { StyledProps } from 'client/common/typings/styled-props.js'
import s from './tooltip.module.css'
import e from '@nft-marketplace/ui/elements.module.css'

export type TooltipPositions = 'top' | 'right' | 'bottom' | 'left'

export interface TooltipProps extends StyledProps {
	position?: TooltipPositions
	children(activationClassName: string): ReactNode
	content: ReactNode
}

const classNameVariantByPosition: Record<TooltipPositions, string> = {
	top: s.variantTop,
	right: s.variantRight,
	bottom: s.variantBottom,
	left: s.variantLeft,
}

const Tooltip = ({ children, className, content, position = 'top', style }: TooltipProps) => {
	return (
		<div className={cn(s.wrapper, className)} style={style}>
			{children(s.activator)}
			<div className={cn(s.tooltip, classNameVariantByPosition[position], e.typographySubtitle)}>{content}</div>
		</div>
	)
}

export default Tooltip
