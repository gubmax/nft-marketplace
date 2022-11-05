import { memo } from 'react'

import { cn } from 'client/common/helpers/classNames'
import * as a from 'client/common/styles/atomic.css'
import { ChildrenProp, StyledProps } from 'client/common/typings'
import * as s from './BasePageWrapper.css'

type BasePageWrapperProps = ChildrenProp & StyledProps

function BasePageWrapper({ className, style, children }: BasePageWrapperProps) {
  return (
    <div className={cn(s.wrapper, a.mxAuto, className)} style={style}>
      {children}
    </div>
  )
}

export default memo(BasePageWrapper)