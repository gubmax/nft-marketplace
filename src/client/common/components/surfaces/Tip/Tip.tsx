import { cn } from 'client/common/helpers/classNames'
import { ChildrenProp, StyledProps } from 'client/common/typings'
import s from './Tip.module.css'

type TipProps = ChildrenProp & StyledProps

function Tip({ className, style, children }: TipProps) {
  return (
    <div className={cn(s.wrapper, className)} style={style}>
      <span className={cn(s.title, 'mb-4')}>TIP</span>
      <div>{children}</div>
    </div>
  )
}

export default Tip
