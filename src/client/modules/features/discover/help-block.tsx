import { ReactNode } from 'react'

import { cn } from 'client/common/helpers/class-names.js'
import e from 'client/common/styles/elements.module.css'
import { ChildrenProp } from 'client/common/typings/children-prop.js'

interface HelpBlockProps extends ChildrenProp {
  icon: ReactNode
}

function HelpBlock({ icon, children }: HelpBlockProps) {
  return (
    <div className={cn(e.surface, 'flex w-full')}>
      <div className="flex-shrink-0">{icon}</div>
      <div className="ml-4">{children}</div>
    </div>
  )
}

export default HelpBlock
