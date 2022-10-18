import { memo } from 'react'

import {
  CollectionIcon,
  HelpIcon,
  InfoIcon,
  SalesIcon,
  ScheduleIcon,
  SettingsIcon,
  ShowcaseIcon,
} from 'client/common/components/icons'
import { Divider } from 'client/common/components/surfaces/Divider'
import { PageRoutes } from 'client/common/constants'
import { cn } from 'client/common/helpers/classNames'
import * as a from 'client/common/styles/atomic.css'
import { StyledProps } from 'client/common/typings'
import { NavigationItemProps } from './components/NavigationItem'
import { NavigationList } from './components/NavigationList'

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
      <NavigationList title="OVERVIEW" routes={OVERVIEW_ROUTES} />
      <Divider className={cn(a.mx2, a.mt3, a.mb5)} />
      <NavigationList title="OTHER" routes={OTHER_ROUTES} />
    </div>
  )
}

export default memo(Sidebar)
