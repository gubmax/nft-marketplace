import { memo } from 'react'

import { A } from 'client/common/components/typography/Anchor'
import { PageRoutes } from 'client/common/constants'
import { cn } from 'client/common/helpers/classNames'
import * as a from 'client/common/styles/atomic.css'
import { dt } from 'client/common/styles/designTokens'
import { LinkGroup } from './components/LinkGroup'
import * as s from './Footer.css'

export const TEXT_TITLE = 'NFT PLATFORM'
export const TEXT_DESCRIPTION =
  'The largest trading platform for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.'

export const TEXT_COPYRIGHT = `Site design / logo © ${new Date().getFullYear()} NFT PLATFORM`
export const TEXT_PRIVACY_POLICY = 'Privacy Policy'
export const TEXT_TERMS_OF_SERVICE = 'Terms of Service'

function Footer() {
  return (
    <footer className={cn(s.footer, a.wFull)}>
      <div className={cn(s.wrapper, a.mxAuto)}>
        <div className={cn(s.topSection, a.flex)}>
          <div className={s.description}>
            <span className={cn(dt.comp.typography.h3, a.mb5)}>{TEXT_TITLE}</span>
            <p className={dt.comp.typography.subtitle1}>{TEXT_DESCRIPTION}</p>
          </div>
          <LinkGroup />
        </div>
        <div className={cn(s.bottomSection, a.flex, a.justifyBetween, a.flexShrink0)}>
          <span className={a.mb4}>{TEXT_COPYRIGHT}</span>
          <div className={cn(s.bottomLinks, a.mb4)}>
            <A href={PageRoutes.HOME} className={a.mr5}>
              {TEXT_PRIVACY_POLICY}
            </A>
            <A href={PageRoutes.HOME}>{TEXT_TERMS_OF_SERVICE}</A>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)
