import { memo } from 'react'

import { Link } from 'client/common/components/system/Link'
import { PageRoutes } from 'client/common/constants'
import { cn } from 'client/common/helpers/classNames'
import e from 'client/common/styles/elements.module.css'
import { StyledProps } from 'client/common/typings'
import s from './Logo.module.css'

function Logo({ className, style }: StyledProps) {
  return (
    <Link
      className={cn(
        s.link,
        e.typography_h3,
        e.typography_textHighlight,
        'flex items-center gap-1',
        className,
      )}
      to={PageRoutes.HOME}
      style={style}
    >
      NFT PLATFORM
    </Link>
  )
}

export default memo(Logo)
