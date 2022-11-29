import { cn } from 'client/common/helpers/classNames'
import e from 'client/common/styles/elements.module.css'
import { ChildrenProp } from 'client/common/typings'

function PageTitle({ children }: ChildrenProp<string>) {
  return <h1 className={cn(e.typographyH1, 'mb-4')}>{children}</h1>
}

export default PageTitle
