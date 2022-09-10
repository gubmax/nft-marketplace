import { style } from '@vanilla-extract/css'

import { dt } from 'client/common/styles/designTokens'

export const wrapper = style({
  padding: dt.sys.space.lg,
})

export const links = style({
  display: 'flex',
  gap: dt.sys.space.md,
  marginBottom: dt.sys.space.lg,
})
