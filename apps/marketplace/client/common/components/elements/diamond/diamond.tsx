import { memo } from 'react'
import { cn } from '@nft-marketplace/ui/helpers/class-names.js'

import { StyledProps } from 'client/common/typings/styled-props.js'
import s from './diamond.module.css'

function Diamond({ className, style }: StyledProps) {
	return (
		<div className={cn(s.container, className)} style={style}>
			<div className={s.highlight} />
			<div className={s.pyramid}>
				<div className={cn(s.sideTop, s.left)} />
				<div className={s.sideTop} />
				<div className={cn(s.sideTop, s.right)} />
				<div className={cn(s.sideTop, s.back)} />
				<div className={cn(s.sideBottom, s.left)} />
				<div className={cn(s.sideBottom)} />
				<div className={cn(s.sideBottom, s.right)} />
				<div className={cn(s.sideBottom, s.back)} />
			</div>
		</div>
	)
}

export default memo(Diamond)
