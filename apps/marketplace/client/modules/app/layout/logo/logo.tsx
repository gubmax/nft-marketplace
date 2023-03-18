import { memo } from 'react'
import { BoltIcon, cn } from '@nft-marketplace/ui'

import { StyledProps } from 'client/common/typings/styled-props.js'
import s from './logo.module.css'
import e from '@nft-marketplace/ui/src/styles/elements.module.css'

function Logo({ className, style }: StyledProps) {
	return (
		<div className={cn(s.wrapper, e.typographyH3, 'flex items-center', className)} style={style}>
			<BoltIcon />
			Acme
		</div>
	)
}

export default memo(Logo)
