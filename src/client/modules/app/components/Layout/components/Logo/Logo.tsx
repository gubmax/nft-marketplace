import { memo } from 'react'

import { BoltIcon } from 'client/common/components/icons'
import { cn } from 'client/common/helpers/classNames'
import e from 'client/common/styles/elements.module.css'
import { StyledProps } from 'client/common/typings'
import s from './Logo.module.css'

function Logo({ className, style }: StyledProps) {
  return (
    <div className={cn(s.wrapper, e.typographyH3, 'flex items-center', className)} style={style}>
      <BoltIcon />
      Acme
    </div>
  )
}

export default memo(Logo)
