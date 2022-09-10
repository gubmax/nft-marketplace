import { memo } from 'react'

import { dt } from 'client/common/styles/designTokens'

function About() {
  return <p className={dt.comp.surface}>The quick brown fox jumps over the lazy dog.</p>
}

export default memo(About)
