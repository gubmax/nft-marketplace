import { memo } from 'react'

import { cn } from 'client/common/helpers/classNames'
import * as a from 'client/common/styles/atomic.css'
import { dt } from 'client/common/styles/designTokens'
import { Diamond } from '../../../Diamond'
import { SectionTitle } from '../SectionTitle'
import { StatisticCard } from '../StatisticCard'
import * as s from './Discover.css'

function Discover() {
  return (
    <>
      <h1 className={cn(s.header, a.mb5)}>Buy, sell, and discover exclusive digital items.</h1>
      <span className={cn(s.subtitle, a.mb5)}>
        The largest trading platform for crypto collectibles and{' '}
        <span className={dt.comp.typography.highlight}>non-fungible tokens (NFTs)</span>.
      </span>
      <div className={cn(s.statistics, a.flex, a.justifyAround, a.mx5)}>
        <StatisticCard title="$70 billion" text="24h trading volume" />
        <StatisticCard title="250+" text="Cryptocurrencies listed" />
        <StatisticCard title="90 million" text="Registered users" />
        <StatisticCard title="<0.10%" text="Lowest transaction fees" />
      </div>
      <Diamond className={cn(s.diamond, a.mxAuto)} />
      <SectionTitle>
        Explore all possibilities of{' '}
        <span className={dt.comp.typography.highlight}>NFT Platform</span>
      </SectionTitle>
      <p className={cn(dt.comp.typography.p, a.mb5)}>
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
      <p className={cn(dt.comp.typography.p, a.mb5)}>
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
      <p className={cn(dt.comp.typography.p, a.mb5)}>
        Etiam ut dignissim lorem, nec accumsan eros. Donec id nulla libero. Vestibulum quam diam,
        faucibus quis rutrum ut, eleifend ut ante. Quisque ut velit et nunc tempus interdum. Sed
        eget nisl eu augue condimentum consectetur. Ut porttitor, urna efficitur tempor molestie,
        eros enim mattis augue, eget sagittis sapien ipsum a nisl. Nullam tempor dui eros. Sed sit
        amet ante id elit aliquet congue. Aliquam magna sapien, semper id mollis ac, scelerisque a
        nisi. Vestibulum ut felis maximus, dapibus metus eget, molestie diam.
      </p>
    </>
  )
}

export default memo(Discover)
