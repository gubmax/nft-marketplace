import { memo } from 'react'

import { cn } from 'client/common/helpers/classNames'
import { StyledProps } from 'client/common/typings'
import * as s from './Divider.css'

function Divider({ className, style }: StyledProps) {
  return <hr className={cn(s.divider, className)} style={style} />
}

export default memo(Divider)
