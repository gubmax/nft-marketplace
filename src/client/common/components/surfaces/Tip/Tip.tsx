import { TipIcon } from 'client/common/components/icons'
import { cn } from 'client/common/helpers/classNames'
import * as a from 'client/common/styles/atomic.css'
import { ChildrenProp, StyledProps } from 'client/common/typings'
import * as s from './Tip.css'

type TipProps = ChildrenProp & StyledProps

function Tip({ className, style, children }: TipProps) {
  return (
    <div className={cn(s.wrapper, a.flex, a.itemsCenter, className)} style={style}>
      <TipIcon className={cn(a.selfStart, a.flexShrink0, a.mr4)} variant="accent" />
      <div>{children}</div>
    </div>
  )
}

export default Tip
