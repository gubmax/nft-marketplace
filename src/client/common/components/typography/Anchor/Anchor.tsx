import { AnchorHTMLAttributes } from 'react'

import { cn } from 'client/common/helpers/classNames'
import { RefProp } from 'client/common/typings/refProp'
import { StyledProps } from 'client/common/typings/styledProps'
import { link } from './Anchor.css'

export type AnchorProps = StyledProps &
  RefProp<HTMLAnchorElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>

function Anchor({ className, innerRef, children, ...rest }: AnchorProps) {
  return (
    <a className={cn(link, className)} ref={innerRef} {...rest}>
      {children}
    </a>
  )
}

export default Anchor
