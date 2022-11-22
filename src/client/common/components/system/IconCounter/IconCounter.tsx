import { memo } from 'react'

import { cn } from 'client/common/helpers/classNames'
import s from './IconCounter.module.css'

interface IconCounterProps {
  amount: number
}

function IconCounter({ amount }: IconCounterProps) {
  return <span className={cn(s.counter, 'flex justify-center items-center')}>{amount}</span>
}

export default memo(IconCounter)
