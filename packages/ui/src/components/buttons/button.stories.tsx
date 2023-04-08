import type { Meta, StoryObj } from '@storybook/react'

import Button from './button.js'

const meta: Meta<typeof Button> = {
	title: 'Components/Buttons/Button',
	component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Basic: Story = {
	render: () => <Button />,
}
