import { memo } from 'react'

import { Link } from 'client/common/components/system/Link'
import { PageRoutes } from 'client/common/constants'
import { cn } from 'client/common/helpers/classNames'
import * as a from 'client/common/styles/atomic.css'
import { dt } from 'client/common/styles/designTokens'
import * as s from './Logo.css'

function Logo() {
  return (
    <Link className={cn(dt.comp.typography.h3, a.flex, a.itemsCenter, a.gap1)} to={PageRoutes.HOME}>
      <span className={s.highlight}>NFT</span>
      <span>PLATFORM</span>
    </Link>
  )
}

export default memo(Logo)
