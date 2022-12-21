import { memo } from 'react'
import { useOutlet } from 'react-router-dom'

import { cn } from 'client/common/helpers/class-names.js'
import Sidebar from './sidebar/sidebar.js'
import s from './marketplace.module.css'

function Marketplace() {
  const element = useOutlet()

  return (
    <div className={cn(s.wrapper, 'flex m-auto')}>
      <div className={s.aside}>
        <Sidebar className={cn(s.sidebar, 'flex-shrink-0')} />
      </div>
      <div className={cn(s.content, 'w-full')}>{element}</div>
    </div>
  )
}

export default memo(Marketplace)
