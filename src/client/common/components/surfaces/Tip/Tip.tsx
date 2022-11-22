import { TipIcon } from 'client/common/components/icons'
import { cn } from 'client/common/helpers/classNames'
import { ChildrenProp, StyledProps } from 'client/common/typings'
import s from './Tip.module.css'

type TipProps = ChildrenProp & StyledProps

function Tip({ className, style, children }: TipProps) {
  return (
    <div className={cn(s.wrapper, 'flex items-center', className)} style={style}>
      <TipIcon className="self-start flex-shrink-0 mr-4" variant="primary" />
      <div>{children}</div>
    </div>
  )
}

export default Tip
