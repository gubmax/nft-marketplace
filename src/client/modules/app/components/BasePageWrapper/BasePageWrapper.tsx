import { cn } from 'client/common/helpers/classNames'
import { ChildrenProp, StyledProps } from 'client/common/typings'
import s from './BasePageWrapper.module.css'

type BasePageWrapperProps = ChildrenProp & StyledProps

function BasePageWrapper({ className, style, children }: BasePageWrapperProps) {
  return (
    <div className={cn(s.wrapper, 'mx-auto', className)} style={style}>
      {children}
    </div>
  )
}

export default BasePageWrapper
