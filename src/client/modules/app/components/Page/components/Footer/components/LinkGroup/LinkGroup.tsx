import { memo } from 'react'

import { A } from 'client/common/components/typography/Anchor'
import { cn } from 'client/common/helpers/classNames'
import { links } from './links'
import s from './LinkGroup.module.css'

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
