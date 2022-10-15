import { memo } from 'react'
import { Link } from 'react-router-dom'

import { Button } from 'client/common/components/inputs/buttons/Button'
import { PageRoutes } from 'client/common/constants'
import { cn } from 'client/common/helpers/classNames'
import { useLink } from 'client/common/hooks/useLink'
import * as a from 'client/common/styles/atomic.css'
import { StyledProps } from 'client/common/typings'
import { Logo } from '../Logo'
import * as s from './Header.css'

const TEXT_SIGN_IN = 'Sign In'
const TEXT_SIGN_UP = 'Sign Up'

function Header({ className, style }: StyledProps) {
  const navigateToSignIn = useLink(PageRoutes.SIGN_IN)
  const navigateToSignUp = useLink(PageRoutes.SIGN_UP)

  return (
    <header className={cn(s.header, className)} style={style}>
      <nav className={cn(s.wrapper, a.flex, a.itemsCenter, a.gap4, a.mxAuto)}>
        <Logo />
        <div className={cn(a.flex, a.mlAuto)}>
          <Link className={s.link} to={PageRoutes.HOME}>
            Discover
          </Link>
          <Link className={s.link} to={PageRoutes.MARKETPLACE}>
            Marketplace
          </Link>
          <Link className={s.link} to={PageRoutes.GAMING}>
            Gaming
          </Link>
        </div>
        <Button
          as="a"
          size="sm"
          variant="outline"
          className={a.mlAuto}
          href={PageRoutes.SIGN_IN}
          onClick={navigateToSignIn}
        >
          {TEXT_SIGN_IN}
        </Button>
        <Button as="a" size="sm" href={PageRoutes.SIGN_UP} onClick={navigateToSignUp}>
          {TEXT_SIGN_UP}
        </Button>
      </nav>
    </header>
  )
}

export default memo(Header)
