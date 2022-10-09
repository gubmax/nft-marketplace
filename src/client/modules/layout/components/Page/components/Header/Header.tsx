import { memo } from 'react'

import { Button } from 'client/common/components/inputs/buttons/Button'
import { A } from 'client/common/components/typography/Anchor'
import { PageRoutes } from 'client/common/constants'
import { cn } from 'client/common/helpers/classNames'
import * as a from 'client/common/styles/atomic.css'
import { StyledProps } from 'client/common/typings'
import { Logo } from '../Logo'
import * as s from './Header.css'

const TEXT_SIGN_IN = 'Sign In'
const TEXT_SIGN_UP = 'Sign Up'

function Header({ className, style }: StyledProps) {
  return (
    <header className={cn(s.header, className)} style={style}>
      <nav className={cn(s.wrapper, a.flex, a.itemsCenter, a.gap3, a.mxAuto)}>
        <Logo />
        <A className={a.mlAuto} href={PageRoutes.HOME}>
          Discover
        </A>
        <A href={PageRoutes.MARKETPLACE}>Marketplace</A>
        <A href={PageRoutes.GAMING}>Gaming</A>
        <Button as="a" size="sm" variant="outline" className={a.mlAuto} href={PageRoutes.HOME}>
          {TEXT_SIGN_IN}
        </Button>
        <Button as="a" size="sm" href={PageRoutes.HOME}>
          {TEXT_SIGN_UP}
        </Button>
      </nav>
    </header>
  )
}

export default memo(Header)
