import { style } from '@vanilla-extract/css'

import { dt } from 'client/common/styles/designTokens'
import { pxToRem } from 'client/common/styles/helpers'

export const wrapper = style({
  padding: dt.sys.space.s3,
  textAlign: 'center',
  overflow: 'hidden',
})

export const title = style({
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  backgroundImage: dt.ref.gradients.primary,
  display: 'block',
  fontSize: pxToRem(168),
  fontWeight: 700,
})
