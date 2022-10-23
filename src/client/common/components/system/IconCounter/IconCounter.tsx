import { memo } from 'react'

import * as s from './IconCounter.css'

interface IconCounterProps {
  amount: number
}

function IconCounter({ amount }: IconCounterProps) {
  return <span className={s.counter}>{amount}</span>
}

export default memo(IconCounter)
