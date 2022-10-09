import { memo } from 'react'

import { A } from 'client/common/components/typography/Anchor'
import { cn } from 'client/common/helpers/classNames'
import * as a from 'client/common/styles/atomic.css'
import { links } from './links'
import * as s from './LinkGroup.css'

function LinkGroup() {
  return (
    <div className={cn(a.flex, a.justifyAround, a.flexWrap, a.wFull)}>
      {links.map(({ title, items }, i) => (
        <ul key={i} className={cn(s.column, a.flex, a.flexCol, a.gap5, a.mr5, a.mb5)}>
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
