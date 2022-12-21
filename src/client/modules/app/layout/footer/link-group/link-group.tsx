import { memo } from 'react'

import A from 'client/common/components/typography/anchor/anchor.js'
import { cn } from 'client/common/helpers/class-names.js'
import { links } from './domain/links.js'
import s from './link-group.module.css'

function LinkGroup() {
  return (
    <div className="flex justify-around flex-wrap gap-5 w-full">
      {links.map(({ title, items }, i) => (
        <ul key={i} className={cn(s.column, 'flex flex-col gap-5')}>
          <span className={s.title}>{title}</span>
          {items.map(({ text, link }, j) => (
            <li key={j} className={s.link}>
              <A href={link}>{text}</A>
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}

export default memo(LinkGroup)
