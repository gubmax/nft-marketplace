import { Meta, StoryFn } from '@storybook/react'

import Anchor from './anchor.js'

export default {
	title: 'Typography/Anchor',
	component: Anchor,
} as Meta<typeof Anchor>

export const Basic: StoryFn<typeof Anchor> = (args) => <Anchor {...args} />
Basic.args = {
	children: 'Label',
}
