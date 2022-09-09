import { memo } from 'react'

import * as s from './About.css'

function About() {
  return <h1 className={s.title}>About</h1>
}

export default memo(About)
