import { memo } from 'react'
import { Link } from 'react-router-dom'

import { LanguageIcon, NotificationIcon } from 'client/common/components/icons'
import { Button } from 'client/common/components/inputs/buttons/Button'
import { IconButton } from 'client/common/components/inputs/buttons/IconButton'
import { IconCounter } from 'client/common/components/system/IconCounter'
import { Tooltip } from 'client/common/components/system/Tooltip'
import { PageRoutes } from 'client/common/constants'
import { cn } from 'client/common/helpers/classNames'
import { useLink } from 'client/common/hooks/useLink'
import * as a from 'client/common/styles/atomic.css'
import { dt } from 'client/common/styles/designTokens'
import { StyledProps } from 'client/common/typings'
import { Logo } from '../Logo'
import * as s from './Header.css'

const TEXT_SIGN_IN = 'Sign In'
const TEXT_DISCOVER = 'Discover'
const TEXT_MARKETPLACE = 'Marketplace'
const TEXT_GAMING = 'Gaming'
const TEXT_NOTIFICATIONS = 'Notifications'
const TEXT_LOCALE = 'Locale'

function Header({ className, style }: StyledProps) {
  const navigateToSignIn = useLink(PageRoutes.SIGN_IN)

  return (
    <header className={cn(dt.comp.glass, className)} style={style}>
      <div className={cn(s.wrapper, a.mxAuto)}>
        <nav className={cn(s.nav, a.flex, a.itemsCenter, a.gap4)}>
          <Logo className={s.logo} />
          <div className={cn(a.flex, a.mlAuto)}>
            <Link className={s.link} to={PageRoutes.HOME}>
              {TEXT_DISCOVER}
            </Link>
            <Link className={s.link} to={PageRoutes.MARKETPLACE}>
              {TEXT_MARKETPLACE}
            </Link>
            <Link className={s.link} to={PageRoutes.GAMING}>
              {TEXT_GAMING}
            </Link>
          </div>
          <Tooltip className={a.mlAuto} position="bottom" content={TEXT_NOTIFICATIONS}>
            {(activator) => (
              <IconButton className={activator}>
                <IconCounter amount={9} />
                <NotificationIcon variant="secondary" />
              </IconButton>
            )}
          </Tooltip>
          <Tooltip position="bottom" content={TEXT_LOCALE}>
            {(activator) => (
              <IconButton className={activator}>
                <LanguageIcon variant="secondary" />
              </IconButton>
            )}
          </Tooltip>
          <Button
            as="a"
            size="sm"
            variant="outline"
            href={PageRoutes.SIGN_IN}
            onClick={navigateToSignIn}
          >
            {TEXT_SIGN_IN}
          </Button>
        </nav>
      </div>
    </header>
  )
}

export default memo(Header)
