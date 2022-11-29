import { memo } from 'react'

import { InfoIcon } from 'client/common/components/icons'
import { A } from 'client/common/components/typography/Anchor'
import { PageRoutes } from 'client/common/constants'
import { cn } from 'client/common/helpers/classNames'
import e from 'client/common/styles/elements.module.css'
import { Diamond } from '../../../Diamond'
import { HelpBlock } from '../HelpBlock'
import { SectionTitle } from '../SectionTitle'
import { StatisticCard } from '../StatisticCard'
import s from './Discover.module.css'

function Discover() {
  return (
    <>
      <h1 className={cn(s.header, 'mb-5')}>Buy, sell, and discover exclusive digital items.</h1>
      <span className={cn(s.subtitle, e.typographyH2)}>
        The largest trading platform for crypto collectibles and{' '}
        <span className={e.typographyTextHighlight}>non-fungible tokens (NFTs)</span>.
      </span>
      <div className={cn(s.statistics, 'flex justify-around gap-5')}>
        <StatisticCard title="$70 billion" text="24h trading volume" />
        <StatisticCard title="250+" text="Cryptocurrencies listed" />
        <StatisticCard title="90 million" text="Registered users" />
        <StatisticCard title="<0.10%" text="Lowest transaction fees" />
      </div>
      <Diamond className={cn(s.diamond, 'mx-auto')} />
      <SectionTitle>
        Explore all possibilities of <span className={e.typographyTextHighlight}>NFT Platform</span>
      </SectionTitle>
      <p className={cn(e.typographyP, 'mb-5')}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum placerat tortor, eget
        volutpat tortor imperdiet sed. Aliquam non vehicula mi. Integer et purus viverra magna
        fringilla malesuada. Aenean cursus nisl arcu, ac commodo neque vulputate ut. Nam luctus
        lorem at tincidunt lobortis. Phasellus non eleifend elit. Nunc eleifend venenatis aliquam.
        Ut libero tellus, viverra a ligula et, ultrices ultricies sem. Phasellus commodo nunc non
        augue pharetra, vel interdum dolor sagittis. Phasellus ac elit leo. Etiam nec est id quam
        elementum consequat. Mauris et justo auctor, scelerisque turpis viverra, egestas nunc. Nam
        sit amet lorem volutpat, ullamcorper libero at, iaculis diam. Fusce ultrices est nulla, vel
        pulvinar ex rhoncus vehicula. Aliquam enim sapien, pellentesque nec nisi eu, semper gravida
        nibh. Duis tellus justo, rutrum nec augue eget, dignissim condimentum nunc.
      </p>
      <SectionTitle>Your trusted crypto exchange</SectionTitle>
      <p className={cn(e.typographyP, 'mb-5')}>
        Sed fermentum sem in est maximus, vel fringilla erat convallis. Curabitur eu hendrerit
        augue. Aenean pulvinar sem eget purus rhoncus pellentesque. Cras convallis leo ligula, quis
        auctor orci semper sit amet. Donec mauris magna, pharetra sit amet feugiat ut, eleifend non
        lectus. Nullam iaculis suscipit scelerisque. Quisque vehicula arcu mi, a blandit nisl
        egestas id. Pellentesque dapibus lacinia nisi, nec maximus orci convallis eu. Cras elementum
        quam varius sem tincidunt ultricies. Maecenas finibus aliquam ante, sit amet mattis orci
        bibendum non. Donec vel felis in dui accumsan fringilla vel sit amet eros. Pellentesque
        nulla odio, consectetur eget commodo eget, condimentum sed elit. Sed mauris tellus,
        ultricies placerat semper quis, semper non mauris. Vestibulum malesuada justo sapien, et
        ullamcorper augue facilisis tincidunt. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Donec fringilla pretium purus id scelerisque.
      </p>
      <SectionTitle>Need help?</SectionTitle>
      <div className="flex justify-around gap-5">
        <HelpBlock
          icon={<InfoIcon size="md" />}
          title="24/7 Chat Support"
          text="Get 24/7 chat support with our friendly customer service agents at your service."
          link={<A href={PageRoutes.HOME}>Chat now</A>}
        />
        <HelpBlock
          icon={<InfoIcon size="md" />}
          title="FAQs"
          text="View FAQs for detailed instructions on specific features."
          link={<A href={PageRoutes.HOME}>Learn more</A>}
        />
        <HelpBlock
          icon={<InfoIcon size="md" />}
          title="Blog"
          text="Stay up to date with the latest stories and commentary."
          link={<A href={PageRoutes.HOME}>Learn more</A>}
        />
      </div>
    </>
  )
}

export default memo(Discover)
