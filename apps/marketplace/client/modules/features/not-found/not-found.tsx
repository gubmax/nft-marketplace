import { memo } from 'react'
import { cn } from '@nft-marketplace/ui'

import Button from 'client/common/components/inputs/buttons/button/button.js'
import { PageRoutes } from 'client/common/constants.js'
import { useLink } from 'client/common/hooks/use-link.js'
import s from './not-found.module.css'
import e from '@nft-marketplace/ui/elements.module.css'

function NotFound() {
	const navigateToHome = useLink(PageRoutes.HOME)

	return (
		<section className={cn(s.wrapper, 'flex flex-col justify-center items-center')}>
			<div className={cn(s.bgText, 'flex justify-center items-center')}>404</div>
			<h1 className={cn(e.typographyH1, 'mb-4')}>Whoops! Page Not Found.</h1>
			<span className={cn(s.description, e.typographyH3, 'mb-5')}>
				The link you followed may be broken, or the page may have been removed.
			</span>
			<Button as="a" variant="contained" href={PageRoutes.HOME} onClick={navigateToHome}>
				Go home
			</Button>
		</section>
	)
}

export default memo(NotFound)
