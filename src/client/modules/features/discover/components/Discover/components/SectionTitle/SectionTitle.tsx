import { cn } from 'client/common/helpers/classNames'
import * as a from 'client/common/styles/atomic.css'
import { dt } from 'client/common/styles/designTokens'
import { ChildrenProp } from 'client/common/typings'

function SectionTitle({ children }: ChildrenProp) {
  return <h2 className={cn(dt.comp.typography.h1, a.mb5)}>{children}</h2>
}

export default SectionTitle
