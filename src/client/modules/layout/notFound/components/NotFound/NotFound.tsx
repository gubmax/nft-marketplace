import { memo } from 'react'

import { Button } from 'client/common/components/inputs/buttons/Button'
import { PageRoutes } from 'client/common/constants'
import { cn } from 'client/common/helpers/classNames'
import { useLink } from 'client/common/hooks/useLink'
import * as a from 'client/common/styles/atomic.css'
import { dt } from 'client/common/styles/designTokens'
import * as s from './NotFound.css'

function NotFound() {
  const navigateToHome = useLink(PageRoutes.HOME)

  return (
    <section className={cn(s.wrapper, a.flex, a.flexCol, a.justifyCenter, a.itemsCenter)}>
      <span className={s.bgText}>404</span>
      <span className={cn(s.title, a.mb2)}>Ooops...</span>
      <h1 className={cn(dt.comp.typography.h1, a.mb5)}>Page Not Found</h1>
      <Button as="a" variant="contained" href={PageRoutes.HOME} onClick={navigateToHome}>
        Go home
      </Button>
    </section>
  )
}

export default memo(NotFound)
