import { memo } from 'react'

import A from 'client/common/components/typography/anchor/anchor.js'
import { PageRoutes } from 'client/common/constants.js'
import { cn } from 'client/common/helpers/class-names.js'
import e from 'client/common/styles/elements.module.css'
import Logo from '../logo/logo.js'
import LinkGroup from './link-group/link-group.js'
import s from './footer.module.css'

const TEXT_DESCRIPTION =
	'The largest trading platform for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.'

const TEXT_COPYRIGHT = `Site design / logo © ${new Date().getFullYear()} Acme Corporation`
const TEXT_PRIVACY_POLICY = 'Privacy Policy'
const TEXT_TERMS_OF_SERVICE = 'Terms of Service'

function Footer() {
	return (
		<footer className={cn(s.footer, 'w-full')}>
			<div className={cn(s.wrapper, 'mx-auto')}>
				<div className={cn(s.topSection, 'flex')}>
					<div className={s.description}>
						<Logo className="mb-3" />
						<p className={e.typographySubtitle}>{TEXT_DESCRIPTION}</p>
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
