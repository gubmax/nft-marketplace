import { memo } from 'react'

import { cn } from 'client/common/helpers/classNames'
import * as a from 'client/common/styles/atomic.css'
import * as s from './IconCounter.css'

interface IconCounterProps {
  amount: number
}

function IconCounter({ amount }: IconCounterProps) {
  return <span className={cn(s.counter, a.flex, a.justifyCenter, a.itemsCenter)}>{amount}</span>
}

export default memo(IconCounter)
