import { memo } from 'react'

import { PageRoutes } from 'client/common/constants'
import { cn } from 'client/common/helpers/classNames'
import * as a from 'client/common/styles/atomic.css'
import { dt } from 'client/common/styles/designTokens'
import * as s from './Logo.css'

function Logo() {
  return (
    <a className={cn(dt.comp.typography.h3, a.flex, a.itemsCenter, a.gap1)} href={PageRoutes.HOME}>
      <span className={s.highlight}>NFT</span>
      <span>PLATFORM</span>
    </a>
  )
}

export default memo(Logo)
