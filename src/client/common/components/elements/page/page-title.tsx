import { cn } from 'client/common/helpers/class-names.js'
import e from 'client/common/styles/elements.module.css'
import { ChildrenProp } from 'client/common/typings/children-prop.js'

function PageTitle({ children }: ChildrenProp<string>) {
  return <h1 className={cn(e.typographyH1, 'mb-4')}>{children}</h1>
}

export default PageTitle
