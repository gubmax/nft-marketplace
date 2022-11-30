import { Meta, StoryFn } from '@storybook/react'

import Button from './Button'

export default {
  title: 'Inputs/Button',
  component: Button,
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />

export const Contained = Template.bind({})
Contained.args = {
  variant: 'contained',
  children: 'Label',
}

export const Outline = Template.bind({})
Outline.args = {
  variant: 'outline',
  children: 'Label',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'md',
  children: 'Label',
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  children: 'Label',
}
