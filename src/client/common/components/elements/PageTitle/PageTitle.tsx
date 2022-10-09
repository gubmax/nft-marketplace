import { cn } from 'client/common/helpers/classNames'
import * as a from 'client/common/styles/atomic.css'
import { dt } from 'client/common/styles/designTokens'
import { ChildrenProp } from 'client/common/typings'

function PageTitle({ children }: ChildrenProp<string>) {
  return <h1 className={cn(dt.comp.typography.h1, a.mb4)}>{children}</h1>
}

export default PageTitle
