import { memo } from 'react'

import Button from 'client/common/components/inputs/buttons/button/button.js'
import { PageRoutes } from 'client/common/constants.js'
import { cn } from 'client/common/helpers/class-names.js'
import { useLink } from 'client/common/hooks/use-link.js'
import e from 'client/common/styles/elements.module.css'
import { StyledProps } from 'client/common/typings/styled-props.js'
import s from './auth-banner.module.css'

const TEXT_SIGN_IN = 'Sign In'
const TEXT_SIGN_UP = 'Sign Up'

function AuthBanner({ className, style }: StyledProps) {
	const navigateToSignInPage = useLink(PageRoutes.SIGN_IN)
	const navigateToSignUpPage = useLink(PageRoutes.SIGN_UP)

	return (
		<div className={cn(s.wrapper, className)} style={style}>
			<div className="flex">
				<div className={cn(s.content, 'flex flex-col flex-grow')}>
					<h1 className={cn(s.title, 'mb-3')}>Discover the exciting world of&nbsp;crypto&nbsp;art!</h1>
					<h2 className={cn(e.typographyH1, 'mb-5')}>Start collect digital artwork now.</h2>
					<div className="flex mt-auto gap-4">
						<Button
							className={s.button}
							variant="outlineLight"
							onClick={navigateToSignInPage}
							onKeyPress={navigateToSignInPage}
						>
							{TEXT_SIGN_IN}
						</Button>
						<Button
							className={s.button}
							variant="containedLight"
							onClick={navigateToSignUpPage}
							onKeyPress={navigateToSignUpPage}
						>
							{TEXT_SIGN_UP}
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default memo(AuthBanner)
