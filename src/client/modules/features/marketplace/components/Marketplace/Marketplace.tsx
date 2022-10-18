import { memo } from 'react'

import { Sidebar } from '../Sidebar'
import * as s from './Marketplace.css'

function Marketplace() {
  return (
    <>
      <div className={s.aside}>
        <Sidebar className={s.sidebar} />
      </div>
      <div>CONTENT</div>
    </>
  )
}

export default memo(Marketplace)
