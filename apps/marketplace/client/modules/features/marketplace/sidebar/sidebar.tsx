import { memo } from 'react'

import {
	CollectionIcon,
	HelpIcon,
	InfoIcon,
	SalesIcon,
	ScheduleIcon,
	SettingsIcon,
	ShowcaseIcon,
} from 'client/common/components/icons.js'
import { PageRoutes } from 'client/common/constants.js'
import { StyledProps } from 'client/common/typings/styled-props.js'
import type { NavigationItemProps } from './navigation-list/navigation-item/navigation-item.js'
import NavigationList from './navigation-list/navigation-list.js'

export const OVERVIEW_ROUTES: NavigationItemProps[] = [
	{ to: PageRoutes.MARKETPLACE, icon: ShowcaseIcon, text: 'Showcase' },
	{ to: PageRoutes.COLLECTION, icon: CollectionIcon, text: 'My Collection' },
	{ to: PageRoutes.SALES, icon: SalesIcon, text: 'Sales' },
	{ to: PageRoutes.SCHEDULE, icon: ScheduleIcon, text: 'Schedule' },
]

export const OTHER_ROUTES: NavigationItemProps[] = [
	{ to: PageRoutes.SETTINGS, icon: SettingsIcon, text: 'Settings' },
	{ to: PageRoutes.HELP, icon: HelpIcon, text: 'Help' },
	{ to: PageRoutes.ABOUT, icon: InfoIcon, text: 'About' },
]

function Sidebar({ className, style }: StyledProps) {
	return (
		<div className={className} style={style}>
			<NavigationList className="mb-5" title="OVERVIEW" routes={OVERVIEW_ROUTES} />
			<NavigationList title="OTHER" routes={OTHER_ROUTES} />
		</div>
	)
}

export default memo(Sidebar)
