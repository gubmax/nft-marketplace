import { ReactNode } from 'react'
import { cn } from '@nft-marketplace/ui'

import { ChildrenProp } from 'client/common/typings/children-prop.js'
import e from '@nft-marketplace/ui/elements.module.css'

interface HelpBlockProps extends ChildrenProp {
	icon: ReactNode
}

function HelpBlock({ icon, children }: HelpBlockProps) {
	return (
		<div className={cn(e.surface, 'flex w-full')}>
			<div className="flex-shrink-0">{icon}</div>
			<div className="ml-4">{children}</div>
		</div>
	)
}

export default HelpBlock
