import { memo, useMemo } from 'react'

import { cn } from 'client/common/helpers/classNames'
import { StyledProps } from 'client/common/typings'
import { NavigationItem, NavigationItemProps } from '../NavigationItem'
import s from './NavigationList.module.css'

interface NavigationListProps extends StyledProps {
  title: string
  routes: NavigationItemProps[]
}

function NavigationList({ className, style, title, routes }: NavigationListProps) {
  const routesTemplate = useMemo(
    () => routes.map((route, i) => <NavigationItem key={i} {...route} />),
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
