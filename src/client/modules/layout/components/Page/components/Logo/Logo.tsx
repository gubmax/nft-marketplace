import { memo } from 'react'

import { cn } from 'client/common/helpers/classNames'
import * as a from 'client/common/styles/atomic.css'
import { dt } from 'client/common/styles/designTokens'
import * as s from './Logo.css'

function Logo() {
  return (
    <a className={cn(dt.comp.typography.h3, a.flex, a.itemsCenter, a.gap1)} href="/">
      <span className={s.highlight}>NFT</span>
      <span>MARKETPLACE</span>
    </a>
  )
}

export default memo(Logo)
