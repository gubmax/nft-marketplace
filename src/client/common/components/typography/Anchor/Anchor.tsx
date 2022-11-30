import { AnchorHTMLAttributes } from 'react'

import { cn } from 'client/common/helpers/classNames'
import { RefProp } from 'client/common/typings/refProp'
import { StyledProps } from 'client/common/typings/styledProps'
import { OpenInNewIcon } from '../../icons'
import s from './Anchor.module.css'

export type AnchorProps = StyledProps &
  RefProp<HTMLAnchorElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>

function Anchor({ className, innerRef, children, ...rest }: AnchorProps) {
  return (
    <a className={cn(s.link, 'inline-flex items-center', className)} ref={innerRef} {...rest}>
      {children}
      <OpenInNewIcon className="ml-1" size="sm" />
    </a>
  )
}

export default Anchor
