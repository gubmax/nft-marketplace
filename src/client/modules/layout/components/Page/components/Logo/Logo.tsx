import { memo } from 'react'

import { Link } from 'client/common/components/system/Link'
import { PageRoutes } from 'client/common/constants'
import { cn } from 'client/common/helpers/classNames'
import * as a from 'client/common/styles/atomic.css'
import { StyledProps } from 'client/common/typings'
import * as s from './Logo.css'

function Logo({ className, style }: StyledProps) {
  return (
    <Link
      className={cn(s.link, a.flex, a.itemsCenter, a.gap1, className)}
      to={PageRoutes.HOME}
      style={style}
    >
      <span className={s.highlight}>NFT</span>
      <span>PLATFORM</span>
    </Link>
  )
}

export default memo(Logo)
