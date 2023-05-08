import { memo } from 'react'
import { cn } from '@nft-marketplace/ui/helpers/class-names.js'

import s from './icon-counter.module.css'

interface IconCounterProps {
	amount: number
}

function IconCounter({ amount }: IconCounterProps) {
	return <span className={cn(s.counter, 'flex justify-center items-center')}>{amount}</span>
}

export default memo(IconCounter)
