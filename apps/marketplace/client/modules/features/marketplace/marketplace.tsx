import { memo } from 'react'

import { cn } from 'client/common/helpers/class-names.js'
import { ChildrenProp } from 'client/common/typings/children-prop.js'
import Sidebar from './sidebar/sidebar.js'
import s from './marketplace.module.css'

function Marketplace({ children }: ChildrenProp) {
	return (
		<div className={cn(s.wrapper, 'flex m-auto')}>
			<div className={s.aside}>
				<Sidebar className={cn(s.sidebar, 'flex-shrink-0')} />
			</div>
			<div className={cn(s.content, 'w-full')}>{children}</div>
		</div>
	)
}

export default memo(Marketplace)
