import { memo } from 'react'

import Button from 'client/common/components/inputs/buttons/button/button.js'
import IconButton from 'client/common/components/inputs/buttons/icon-button/icon-button.js'
import { PageRoutes } from 'client/common/constants.js'
import e from '@nft-marketplace/ui/elements.module.css'

function About() {
	return (
		<div className={e.surface}>
			<p className="mb-4">The quick brown fox jumps over the lazy dog.</p>
			<div className="mb-3 flex gap-3">
				<Button>Base</Button>
				<Button loading>Loading</Button>
				<IconButton>B</IconButton>
				<Button className="w-full">Base</Button>
			</div>
			<div className="mb-3 flex gap-3">
				<Button variant="contained">Contained</Button>
				<Button variant="contained" loading>
					Loading
				</Button>
				<IconButton variant="contained">C</IconButton>
				<Button className="w-full" variant="contained">
					Contained
				</Button>
			</div>
			<div className="mb-4 flex gap-3">
				<Button variant="outline">Outline</Button>
				<Button variant="outline" loading>
					Loading
				</Button>
				<IconButton variant="outline">O</IconButton>
				<Button className="w-full" variant="outline">
					Outline
				</Button>
			</div>
			<Button as="a" variant="outline" href={PageRoutes.HOME} target="_blank">
				Link
			</Button>
		</div>
	)
}

export default memo(About)
