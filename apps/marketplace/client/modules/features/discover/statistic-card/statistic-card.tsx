import { memo } from 'react'
import { cn } from '@nft-marketplace/ui/helpers/class-names.js'

import s from './statistic-card.module.css'
import e from '@nft-marketplace/ui/elements.module.css'

interface StatisticCardProps {
	title: string
	text: string
}

function StatisticCard({ title, text }: StatisticCardProps) {
	return (
		<div className={cn(s.wrapper, e.surface, 'w-full flex flex-col items-center')}>
			<span className={cn(e.typographyH1, 'mb-2')}>{title}</span>
			<span className={e.typographySubtitle}>{text}</span>
		</div>
	)
}

export default memo(StatisticCard)
