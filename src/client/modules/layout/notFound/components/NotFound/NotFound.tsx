import { memo } from 'react'

import { Button } from 'client/common/components/inputs/buttons/Button'
import { PageRoutes } from 'client/common/constants'
import { cn } from 'client/common/helpers/classNames'
import { useLink } from 'client/common/hooks/useLink'
import e from 'client/common/styles/elements.module.css'
import s from './NotFound.module.css'

function NotFound() {
  const navigateToHome = useLink(PageRoutes.HOME)

  return (
    <section className={cn(s.wrapper, 'flex flex-col justify-center items-center')}>
      <div className={cn(s.bgText, e.typography_textHighlight, 'flex justify-center items-center')}>
        <div className={s.highlight} />
        <span>404</span>
      </div>
      <h1 className={cn(e.typography_h1, 'mb-4')}>Whoops! Page Not Found.</h1>
      <span className={cn(s.description, e.typography_h3, 'mb-5')}>
        The link you followed may be broken, or the page may have been removed.
      </span>
      <Button as="a" variant="contained" href={PageRoutes.HOME} onClick={navigateToHome}>
        Go home
      </Button>
    </section>
  )
}

export default memo(NotFound)
