import { cn } from 'client/common/helpers/classNames'
import e from 'client/common/styles/elements.module.css'
import { ChildrenProp } from 'client/common/typings'

function SectionTitle({ children }: ChildrenProp) {
  return <h2 className={cn(e.typography_h1, 'mb-5')}>{children}</h2>
}

export default SectionTitle
