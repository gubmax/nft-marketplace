import { AnchorProps } from 'client/common/components/typography/Anchor'
import { PageRoutes } from 'client/common/constants'
import { useLink } from 'client/common/hooks/useLink'
import { RefProp } from 'client/common/typings'

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
