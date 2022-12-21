import { ElementType, memo } from 'react'
import { useLocation } from 'react-router-dom'

import IW from 'client/common/components/inputs/interactive-wrapper/interactive-wrapper.js'
import { PageRoutes } from 'client/common/constants.js'
import { cn } from 'client/common/helpers/class-names.js'
import { IconProps } from 'client/common/hocs/with-icon/with-icon.js'
import { useLink } from 'client/common/hooks/use-link.js'
import s from './navigation-item.module.css'

export interface NavigationItemProps {
  icon: ElementType<IconProps>
  text: string
  to: PageRoutes
}

function NavigationItem({ icon: Icon, text, to }: NavigationItemProps) {
  const { pathname } = useLocation()
  const navigate = useLink(to)

  const isActive = to === pathname
  const iconVariant = isActive ? 'primary' : 'inherit'

  return (
    <IW as="a" href={to} className={cn(s.wrapper, isActive && s.wrapperActive)} onClick={navigate}>
      <Icon className="flex-shrink" variant={iconVariant} />
      <span className="ml-2">{text}</span>
    </IW>
  )
}

export default memo(NavigationItem)
