import { memo } from 'react'

import { cn } from 'client/common/helpers/classNames'
import e from 'client/common/styles/elements.module.css'
import s from './Error.module.css'

function Error() {
  return (
    <section className={cn(s.wrapper, 'flex flex-col justify-center items-center')}>
      <div className={cn(s.bgText, e.typographyTextHighlight, 'flex justify-center items-center')}>
        <div className={s.highlight} />
        <span>ERROR</span>
      </div>
      <h1 className={cn(e.typographyH1, 'mb-4')}>Whoops! Something goes wrong...</h1>
      <span className={cn(s.description, e.typographyH3, 'mb-5')}>We are already fixing it.</span>
    </section>
  )
}

export default memo(Error)
