import { memo } from 'react'

import { cn } from 'client/common/helpers/classNames'
import * as a from 'client/common/styles/atomic.css'
import { dt } from 'client/common/styles/designTokens'

interface StatisticCardProps {
  title: string
  text: string
}

function StatisticCard({ title, text }: StatisticCardProps) {
  return (
    <div className={cn(a.flex, a.flexCol, a.itemsCenter)}>
      <span className={cn(dt.comp.typography.h1, a.mb2)}>{title}</span>
      <span className={dt.comp.typography.subtitle1}>{text}</span>
    </div>
  )
}

export default memo(StatisticCard)
