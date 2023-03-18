import { CSSProperties } from 'react'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
export type Variant = 'primary' | 'secondary' | 'tertiary' | 'outline'

export interface StyledProps {
	className?: string
	style?: CSSProperties
}
