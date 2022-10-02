import { memo } from 'react'

import { Button } from 'client/common/components/inputs/buttons/Button'
import { IconButton } from 'client/common/components/inputs/buttons/IconButton'
import { cn } from 'client/common/helpers/classNames'
import * as a from 'client/common/styles/atomic.css'
import { dt } from 'client/common/styles/designTokens'

function About() {
  return (
    <div className={dt.comp.surface}>
      <p className={a.mb4}>The quick brown fox jumps over the lazy dog.</p>
      <div className={cn(a.flex, a.gap3, a.mb3)}>
        <Button variant="primary">Primary</Button>
        <Button variant="primary" loading>
          Loading
        </Button>
        <IconButton variant="primary">P</IconButton>
        <Button className={a.wFull} variant="primary">
          Primary
        </Button>
      </div>
      <div className={cn(a.flex, a.gap3, a.mb4)}>
        <Button variant="outline">Outline</Button>
        <Button variant="outline" loading>
          Loading
        </Button>
        <IconButton variant="outline">O</IconButton>
        <Button className={a.wFull} variant="outline">
          Outline
        </Button>
      </div>
      <Button as="a" variant="outline" href="/" target="_blank">
        Link
      </Button>
    </div>
  )
}

export default memo(About)
