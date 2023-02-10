import type { Meta, StoryFn } from '@storybook/react'

import Button from './button.js'

export default {
	title: 'Components/Button',
	component: Button,
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = () => <Button />

export const Basic = Template.bind({})
