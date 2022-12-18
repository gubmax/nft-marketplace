import { memo } from 'react'

import { HelpIcon, InfoIcon, SupportIcon } from 'client/common/components/icons'
import { A } from 'client/common/components/typography/Anchor'
import { PageRoutes } from 'client/common/constants'
import { cn } from 'client/common/helpers/classNames'
import e from 'client/common/styles/elements.module.css'
import { HelpBlock } from '../HelpBlock'
import { SectionTitle } from '../SectionTitle'

function HelpSection() {
  return (
    <>
      <SectionTitle>Need help?</SectionTitle>
      <div className="flex justify-around gap-5">
        <HelpBlock icon={<SupportIcon size="xl" variant="outline" />}>
          <span className={cn(e.typographyH2, 'mb-2')}>Chat Support</span>
          <span className={cn(e.typographySubtitle, 'mb-2')}>
            Get 24/7 chat support with our customer service agents at your service.
          </span>
          <A href={PageRoutes.HOME}>Chat now</A>
        </HelpBlock>
        <HelpBlock icon={<HelpIcon size="xl" variant="outline" />}>
          <span className={cn(e.typographyH2, 'mb-2')}>FAQs</span>
          <span className={cn(e.typographySubtitle, 'mb-2')}>
            View FAQs for detailed instructions on specific features.
          </span>
          <A href={PageRoutes.HOME}>Learn more</A>
        </HelpBlock>
        <HelpBlock icon={<InfoIcon size="xl" variant="outline" />}>
          <span className={cn(e.typographyH2, 'mb-2')}>Blog</span>
          <span className={cn(e.typographySubtitle, 'mb-2')}>
            Stay up to date with the latest stories and commentary.
          </span>
          <A href={PageRoutes.HOME}>Learn more</A>
        </HelpBlock>
      </div>
    </>
  )
}

export default memo(HelpSection)
