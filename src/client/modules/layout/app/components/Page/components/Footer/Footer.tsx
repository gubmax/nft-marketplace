import { memo } from 'react'

import { A } from 'client/common/components/typography/Anchor'
import { PageRoutes } from 'client/common/constants'
import { cn } from 'client/common/helpers/classNames'
import e from 'client/common/styles/elements.module.css'
import { LinkGroup } from './components/LinkGroup'
import s from './Footer.module.css'

export const TEXT_TITLE = 'NFT PLATFORM'
export const TEXT_DESCRIPTION =
  'The largest trading platform for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.'

export const TEXT_COPYRIGHT = `Site design / logo © ${new Date().getFullYear()} NFT PLATFORM`
export const TEXT_PRIVACY_POLICY = 'Privacy Policy'
export const TEXT_TERMS_OF_SERVICE = 'Terms of Service'

function Footer() {
  return (
    <footer className={cn(s.footer, 'w-full')}>
      <div className={cn(s.wrapper, 'mx-auto')}>
        <div className={cn(s.topSection, 'flex')}>
          <div className={s.description}>
            <span className={cn(e.typography_h3, 'mb-5')}>{TEXT_TITLE}</span>
            <p className={e.typography_subtitle}>{TEXT_DESCRIPTION}</p>
          </div>
          <LinkGroup />
        </div>
        <div className={cn(s.bottomSection, 'flex justify-between flex-shrink-0')}>
          <span className="mb-4">{TEXT_COPYRIGHT}</span>
          <div className={cn(s.bottomLinks, 'mb-4')}>
            <A href={PageRoutes.HOME} className="mr-5">
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
