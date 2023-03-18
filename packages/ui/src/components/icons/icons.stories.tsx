import { ElementType } from 'react'
import { StoryFn } from '@storybook/react'

import { IconProps, IconSize } from '../../hocs/with-icon/with-icon'
import * as icons from './icons'

export default {
	title: 'Components/Icon',
}

const ExampleIcon = icons.SettingsIcon
const Template: StoryFn<IconProps> = (args) => <ExampleIcon {...args} />

// Basic

export const Basic = Template.bind({})

// Sizes

const SizeItem = ({ label, size }: { label: string; size: IconSize }) => (
	<div className="flex flex-col items-center">
		<h2 className="mb-4" style={{ color: 'var(--color-on-outline)' }}>
			{label}
		</h2>
		<ExampleIcon size={size} />
	</div>
)

export const Sizes: StoryFn = () => (
	<div className="flex gap-5">
		<SizeItem label="SMALL" size="sm" />
		<SizeItem label="MEDIUM" size="md" />
		<SizeItem label="LARGE" size="lg" />
		<SizeItem label="EXTRA LARGE" size="xl" />
		<SizeItem label="XXLARGE" size="xxl" />
	</div>
)

// Components

const ComponentItem = ({ name, el: Icon }: { name: string; el: ElementType }) => (
	<div className="flex flex-col items-center">
		<span className="mb-2" style={{ color: 'var(--color-on-outline)' }}>
			{name}
		</span>
		<Icon size="lg" />
	</div>
)

export const Components: StoryFn = () => (
	<div
		className="gap-6"
		style={{ display: 'grid', maxWidth: '80rem', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' }}
	>
		{Object.entries(icons).map(([name, el]) => (
			<ComponentItem key={name} name={name} el={el} />
		))}
	</div>
)
