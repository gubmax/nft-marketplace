import { memo } from 'react'

import { cn } from 'client/common/helpers/classNames'
import { StyledProps } from 'client/common/typings'
import * as s from './Diamond.css'

function Diamond({ className, style }: StyledProps) {
  return (
    <div className={cn(s.container, className)} style={style}>
      <div className={s.pyramid}>
        <div className={s.front} />
        <div className={s.back} />
        <div className={s.left} />
        <div className={s.right} />
        <div className={s.bottom} />
      </div>
      <div className={s.pyramidBottom}>
        <div className={s.front} />
        <div className={s.back} />
        <div className={s.left} />
        <div className={s.right} />
      </div>
    </div>
  )
}

export default memo(Diamond)
