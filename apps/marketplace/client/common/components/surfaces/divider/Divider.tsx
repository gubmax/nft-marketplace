import { memo } from 'react'

import { cn } from 'client/common/helpers/class-names.js'
import { StyledProps } from 'client/common/typings/styled-props.js'
import s from './divider.module.css'

function Divider({ className, style }: StyledProps) {
	return <hr className={cn(s.divider, className)} style={style} />
}

export default memo(Divider)
