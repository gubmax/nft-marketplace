import { memo } from 'react'

import { ChevronIcon } from 'client/common/components/icons'
import { Button } from 'client/common/components/inputs/buttons/Button'
import { PageRoutes } from 'client/common/constants'
import { cn } from 'client/common/helpers/classNames'
import { useLink } from 'client/common/hooks/useLink'
import e from 'client/common/styles/elements.module.css'
import { StyledProps } from 'client/common/typings'
import { StatisticCard } from '../StatisticCard'
import nft1URL from './assets/nft1.webp'
import nft2URL from './assets/nft2.jpg'
import nft3URL from './assets/nft3.png'
import nft4URL from './assets/nft4.jpg'
import s from './PresentSection.module.css'

function PresentSection({ className, style }: StyledProps) {
  const navigateToSignIn = useLink(PageRoutes.SIGN_IN)

  return (
    <div className={cn(s.firstScreen, 'flexflex-col', className)} style={style}>
      <div className="flex mb-10 gap-5">
        <div className="flex-shrink-0">
          <h1 className={cn(s.header, 'mb-5')}>
            Buy, sell, and discover
            <br />
            exclusive digital items.
          </h1>
          <span className={cn(s.subtitle, e.typographyH2, 'mb-10')}>
            The largest trading platform for crypto collectibles and
            <br />
            <span className={e.typographyTextHighlight}>non-fungible tokens (NFTs)</span>.
          </span>
          <Button
            as="a"
            href={PageRoutes.SIGN_IN}
            variant="contained"
            className="gap-1"
            onClick={navigateToSignIn}
          >
            Get started
            <ChevronIcon rotate={90} />
          </Button>
        </div>
        <div className="flex flex-grow justify-center">
          <div className={s.rightPresentSection}>
            <div className="ml-auto mt-auto">
              <img className={s.imgPresent1} src={nft1URL} alt="NFT present 1" />
            </div>
            <div className="mr-auto mt-auto">
              <img className={s.imgPresent2} src={nft2URL} alt="NFT present 2" />
            </div>
            <div className="ml-auto mb-auto">
              <img className={s.imgPresent3} src={nft3URL} alt="NFT present 3" />
            </div>
            <div className="mr-auto mb-auto">
              <img className={s.imgPresent4} src={nft4URL} alt="NFT present 4" />
            </div>
            <div className={s.rightPresentCircle} />
          </div>
        </div>
      </div>
      <div className="flex justify-around gap-5">
        <StatisticCard title="$70 billion" text="24h trading volume" />
        <StatisticCard title="250+" text="Cryptocurrencies listed" />
        <StatisticCard title="90 million" text="Registered users" />
        <StatisticCard title="<0.10%" text="Lowest transaction fees" />
      </div>
      <div className={s.highlight} />
    </div>
  )
}

export default memo(PresentSection)
