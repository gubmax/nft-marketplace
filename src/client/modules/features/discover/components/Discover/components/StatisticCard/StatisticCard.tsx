import { memo } from 'react'

import { cn } from 'client/common/helpers/classNames'
import e from 'client/common/styles/elements.module.css'

interface StatisticCardProps {
  title: string
  text: string
}

function StatisticCard({ title, text }: StatisticCardProps) {
  return (
    <div className="flex flex-col items-center">
      <span className={cn(e.typography_h1, 'mb-2')}>{title}</span>
      <span className={e.typography_subtitle}>{text}</span>
    </div>
  )
}

export default memo(StatisticCard)
