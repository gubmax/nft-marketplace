import { memo, useMemo } from 'react'
import { cn } from '@nft-marketplace/ui'

import { StyledProps } from 'client/common/typings/styled-props.js'
import NavigationItem, { NavigationItemProps } from './navigation-item/navigation-item.js'
import s from './navigation-list.module.css'

interface NavigationListProps extends StyledProps {
	title: string
	routes: NavigationItemProps[]
}

function NavigationList({ className, style, title, routes }: NavigationListProps) {
	const routesTemplate = useMemo(
		() => routes.map((route, i) => <NavigationItem key={i} className="mb-1" {...route} />),
		[routes],
	)

	return (
		<div className={className} style={style}>
			<span className={cn(s.title, 'mb-2 ml-2')}>{title}</span>
			{routesTemplate}
		</div>
	)
}

export default memo(NavigationList)
