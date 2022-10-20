import { memo } from 'react'
import { useOutlet } from 'react-router-dom'

import { cn } from 'client/common/helpers/classNames'
import * as a from 'client/common/styles/atomic.css'
import { Sidebar } from '../Sidebar'
import * as s from './Marketplace.css'

function Marketplace() {
  const element = useOutlet()

  return (
    <div className={cn(s.wrapper, a.flex, a.mAuto)}>
      <div className={s.aside}>
        <Sidebar className={cn(s.sidebar, a.flexShrink0)} />
      </div>
      <div className={a.wFull}>{element}</div>
    </div>
  )
}

export default memo(Marketplace)
