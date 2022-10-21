import { memo } from 'react'

import { Button } from 'client/common/components/inputs/buttons/Button'
import { PageRoutes } from 'client/common/constants'
import { cn } from 'client/common/helpers/classNames'
import { useLink } from 'client/common/hooks/useLink'
import { useMediaQuery } from 'client/common/hooks/useMediaQuery'
import * as a from 'client/common/styles/atomic.css'
import { dt } from 'client/common/styles/designTokens'
import { StyledProps } from 'client/common/typings'
import { Diamond } from '../Diamond'
import * as s from './AuthBanner.css'

const TEXT_SIGN_IN = 'Sign In'
const TEXT_SIGN_UP = 'Sign Up'

function AuthBanner({ className, style }: StyledProps) {
  const isMobile = useMediaQuery(dt.sys.media.maxWidth.mobile)
  const navigateToSignInPage = useLink(PageRoutes.SIGN_IN)
  const navigateToSignUpPage = useLink(PageRoutes.SIGN_UP)

  return (
    <div className={cn(s.wrapper, className)} style={style}>
      <div className={a.flex}>
        <div className={cn(s.content, a.flex, a.flexCol, a.flexGrow)}>
          <h1 className={cn(s.title, a.mb3)}>
            Discover the exciting world of&nbsp;crypto&nbsp;art!
          </h1>
          <h2 className={cn(s.subtitle, a.mb3)}>Start collect digital artwork now.</h2>
          <div className={cn(a.flex, a.mtAuto, a.gap4)}>
            <Button
              className={cn(s.button, a.wFull)}
              variant="outlineLight"
              onClick={navigateToSignInPage}
              onKeyPress={navigateToSignInPage}
            >
              {TEXT_SIGN_IN}
            </Button>
            <Button
              className={cn(s.button, a.wFull)}
              variant="primaryLight"
              onClick={navigateToSignUpPage}
              onKeyPress={navigateToSignUpPage}
            >
              {TEXT_SIGN_UP}
            </Button>
          </div>
        </div>
        {!isMobile && <Diamond className={cn(s.diamond, a.flexShrink0)} />}
      </div>
    </div>
  )
}

export default memo(AuthBanner)
