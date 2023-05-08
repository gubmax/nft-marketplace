import { ElementType, memo } from 'react'
import { useLocation } from 'react-router-dom'
import { cn } from '@nft-marketplace/ui/helpers/class-names.js'
import { IconProps } from '@nft-marketplace/ui/hocs/with-icon/with-icon.js'

import IW from 'client/common/components/inputs/interactive-wrapper/interactive-wrapper.js'
import { PageRoutes } from 'client/common/constants.js'
import { useLink } from 'client/common/hooks/use-link.js'
import { StyledProps } from 'client/common/typings/styled-props.js'
import s from './navigation-item.module.css'

export interface NavigationItemProps extends StyledProps {
	icon: ElementType<IconProps>
	text: string
	to: PageRoutes
}

function NavigationItem({ icon: Icon, text, to, className, style }: NavigationItemProps) {
	const { pathname } = useLocation()
	const navigate = useLink(to)

	const isActive = to === pathname
	const iconVariant = isActive ? 'primary' : 'inherit'

	return (
		<IW
			as="a"
			href={to}
			className={cn(s.wrapper, isActive && s.wrapperActive, className)}
			style={style}
			onClick={navigate}
		>
			<Icon className="flex-shrink" variant={iconVariant} />
			<span className="ml-2">{text}</span>
		</IW>
	)
}

export default memo(NavigationItem)
