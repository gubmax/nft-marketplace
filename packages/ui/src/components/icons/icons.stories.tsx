import { ElementType } from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { IconProps, IconSize } from '../../hocs/with-icon/with-icon'
import * as icons from './icons'

const ExampleIcon = icons.SettingsIcon

const meta: Meta<typeof ExampleIcon> = {
	title: 'Components/Icon',
	component: ExampleIcon,
}

export default meta
type Story = StoryObj<typeof ExampleIcon>

// Basic

export const Basic: Story = {
	render: (args: IconProps) => <ExampleIcon {...args} />,
	args: { size: 'md' },
}

// Sizes

const SizeItem = ({ label, size }: { label: string; size: IconSize }) => (
	<div className="flex flex-col items-center">
		<h2 className="mb-4 text-on-outline">{label}</h2>
		<ExampleIcon size={size} />
	</div>
)

export const Sizes: Story = {
	render: () => (
		<div className="flex gap-5">
			<SizeItem label="SMALL" size="sm" />
			<SizeItem label="MEDIUM" size="md" />
			<SizeItem label="LARGE" size="lg" />
			<SizeItem label="EXTRA LARGE" size="xl" />
			<SizeItem label="XXLARGE" size="xxl" />
		</div>
	),
}

// Components

const ComponentItem = ({ name, el: Icon }: { name: string; el: ElementType }) => (
	<div className="flex flex-col items-center">
		<span className="mb-2" style={{ color: 'var(--color-on-outline)' }}>
			{name}
		</span>
		<Icon size="lg" />
	</div>
)

export const Components: Story = {
	render: () => (
		<div className="grid grid-cols-5 gap-6 max-w-[80rem]">
			{Object.entries(icons).map(([name, el]) => (
				<ComponentItem key={name} name={name} el={el} />
			))}
		</div>
	),
}
