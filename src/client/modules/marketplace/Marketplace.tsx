import { memo } from 'react'

import { Sidebar } from './components/Sidebar'
import * as s from './Marketplace.css'

function Marketplace() {
  return (
    <>
      <div className={s.aside}>
        <Sidebar className={s.sidebar} />
      </div>
      <div></div>
    </>
  )
}

export default memo(Marketplace)
