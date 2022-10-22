import { memo } from 'react'

import { PageTitle } from 'client/common/components/elements/PageTitle'
import { Button } from 'client/common/components/inputs/buttons/Button'
import { IconButton } from 'client/common/components/inputs/buttons/IconButton'
import { PageRoutes } from 'client/common/constants'
import { cn } from 'client/common/helpers/classNames'
import { useDocumentTitle } from 'client/common/hooks/useDocumentTitle'
import * as a from 'client/common/styles/atomic.css'
import { dt } from 'client/common/styles/designTokens'
import { BasePageWrapper } from 'client/modules/layout/components/BasePageWrapper'

const PAGE_TITLE = 'About'

function About() {
  useDocumentTitle(PAGE_TITLE)

  return (
    <BasePageWrapper>
      <PageTitle>{PAGE_TITLE}</PageTitle>
      <div className={dt.comp.surface}>
        <p className={a.mb4}>The quick brown fox jumps over the lazy dog.</p>
        <div className={cn(a.flex, a.gap3, a.mb3)}>
          <Button>Base</Button>
          <Button loading>Loading</Button>
          <IconButton>B</IconButton>
          <Button className={a.wFull}>Base</Button>
        </div>
        <div className={cn(a.flex, a.gap3, a.mb3)}>
          <Button variant="contained">Contained</Button>
          <Button variant="contained" loading>
            Loading
          </Button>
          <IconButton variant="contained">C</IconButton>
          <Button className={a.wFull} variant="contained">
            Contained
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
        <Button as="a" variant="outline" href={PageRoutes.HOME} target="_blank">
          Link
        </Button>
      </div>
    </BasePageWrapper>
  )
}

export default memo(About)
