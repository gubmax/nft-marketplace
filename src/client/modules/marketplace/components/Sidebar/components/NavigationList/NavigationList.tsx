import { memo, useMemo } from 'react'

import { cn } from 'client/common/helpers/classNames'
import * as a from 'client/common/styles/atomic.css'
import { StyledProps } from 'client/common/typings'
import { NavigationItem, NavigationItemProps } from '../NavigationItem'
import * as s from './NavigationList.css'

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
      <span className={cn(s.title, a.mb2, a.ml2)}>{title}</span>
      {routesTemplate}
    </div>
  )
}

export default memo(NavigationList)
