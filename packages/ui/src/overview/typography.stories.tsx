import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
	title: 'Overview/Typography',
}

export default meta

export const Typography: StoryObj = {
	render: () => (
		<div className="flex flex-col gap-4">
			<span className="text-headline">Headline — Semibold</span>
			<span className="text-subhead">Subhead — Semibold</span>
			<span className="text-body">Body — Regular</span>
			<span className="text-caption">Caption — Regular</span>
			<span className="text-detail">Detail — Bold</span>
		</div>
	),
}
