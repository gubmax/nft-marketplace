import { AnchorProps } from 'client/common/components/typography/anchor/anchor.js'
import { PageRoutes } from 'client/common/constants.js'
import { useLink } from 'client/common/hooks/use-link.js'
import { RefProp } from 'client/common/typings/ref-prop.js'

interface LinkProps extends RefProp<HTMLAnchorElement>, Omit<AnchorProps, 'href'> {
	to: PageRoutes
	background?: boolean
}

function Link({ to, children, ...rest }: LinkProps) {
	const navigate = useLink(to)

	return (
		<a href={to} onClick={navigate} {...rest}>
			{children}
		</a>
	)
}

export default Link
