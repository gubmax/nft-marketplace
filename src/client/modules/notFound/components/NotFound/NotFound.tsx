import { memo } from 'react'

import { cn } from 'client/common/helpers/classNames'
import * as a from 'client/common/styles/atomic.css'
import { dt } from 'client/common/styles/designTokens'
import { StyledProps } from 'client/common/typings'
import * as s from './NotFound.css'

function NotFound({ className, style }: StyledProps) {
  return (
    <section
      className={cn(
        s.wrapper,
        a.flex,
        a.flexCol,
        a.mAuto,
        a.justifyCenter,
        a.itemsCenter,
        className,
      )}
      style={style}
    >
      <span className={cn(s.title, a.mb3)}>404</span>
      <h1 className={dt.comp.typography.h1}>Page Not Found</h1>
    </section>
  )
}

export default memo(NotFound)
