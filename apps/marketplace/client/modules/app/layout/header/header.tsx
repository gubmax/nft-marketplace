import { memo } from 'react'
import { Link } from 'react-router-dom'

import { LanguageIcon, NotificationIcon } from 'client/common/components/icons.js'
import Button from 'client/common/components/inputs/buttons/button/button.js'
import IconButton from 'client/common/components/inputs/buttons/icon-button/icon-button.js'
import IconCounter from 'client/common/components/system/icon-counter/icon-counter.js'
import Tooltip from 'client/common/components/system/tooltip/tooltip.js'
import { PageRoutes } from 'client/common/constants.js'
import { cn } from 'client/common/helpers/class-names.js'
import { useLink } from 'client/common/hooks/use-link.js'
import e from 'client/common/styles/elements.module.css'
import { StyledProps } from 'client/common/typings/styled-props.js'
import Logo from '../logo/logo.js'
import s from './header.module.css'

const TEXT_SIGN_IN = 'Sign In'
const TEXT_DISCOVER = 'Discover'
const TEXT_MARKETPLACE = 'Marketplace'
const TEXT_GAMING = 'Gaming'
const TEXT_NOTIFICATIONS = 'Notifications'
const TEXT_LOCALE = 'Locale'

function Header({ className, style }: StyledProps) {
	const navigateToSignIn = useLink(PageRoutes.SIGN_IN)

	return (
		<header className={cn(s.header, e.glass, className)} style={style}>
			<nav className={cn(s.wrapper, 'flex items-center m-auto gap-4')}>
				<Link className={s.logoLink} to={PageRoutes.HOME}>
					<Logo className={s.logo} />
				</Link>
				<div className="flex">
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
				<Tooltip className="ml-auto" position="bottom" content={TEXT_NOTIFICATIONS}>
					{(activator) => (
						<IconButton className={activator}>
							<IconCounter amount={9} />
							<NotificationIcon variant="outline" />
						</IconButton>
					)}
				</Tooltip>
				<Tooltip position="bottom" content={TEXT_LOCALE}>
					{(activator) => (
						<IconButton className={activator}>
							<LanguageIcon variant="outline" />
						</IconButton>
					)}
				</Tooltip>
				<Button as="a" size="sm" variant="outline" href={PageRoutes.SIGN_IN} onClick={navigateToSignIn}>
					{TEXT_SIGN_IN}
				</Button>
			</nav>
		</header>
	)
}

const ExoticComponent = memo(Header)
export { ExoticComponent as Header }
