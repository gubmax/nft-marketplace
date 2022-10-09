import { ElementType, memo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { IW } from 'client/common/components/inputs/InteractiveWrapper'
import { PageRoutes } from 'client/common/constants'
import { cn } from 'client/common/helpers/classNames'
import { IconProps } from 'client/common/hocs/withIcon'
import { useEvent } from 'client/common/hooks/useEvent'
import * as a from 'client/common/styles/atomic.css'
import * as s from './NavigationItem.css'

export interface NavigationItemProps {
  icon: ElementType<IconProps>
  text: string
  to: PageRoutes
}

function NavigationItem({ icon: Icon, text, to }: NavigationItemProps) {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleClick = useEvent(() => navigate(to))

  const isActive = to === pathname
  const iconVariant = isActive ? 'active' : 'secondary'

  return (
    <IW
      className={cn(s.wrapper, isActive && s.wrapperActive)}
      onClick={handleClick}
      onKeyPress={handleClick}
    >
      <Icon className={a.flexShrink} variant={iconVariant} />
      <span className={a.ml2}>{text}</span>
    </IW>
  )
}

export default memo(NavigationItem)
