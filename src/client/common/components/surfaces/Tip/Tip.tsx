import { cn } from 'client/common/helpers/class-names.js'
import { ChildrenProp } from 'client/common/typings/children-prop.js'
import { StyledProps } from 'client/common/typings/styled-props.js'
import s from './tip.module.css'

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
