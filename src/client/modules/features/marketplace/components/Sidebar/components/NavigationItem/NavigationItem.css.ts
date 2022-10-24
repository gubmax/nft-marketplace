import { style } from '@vanilla-extract/css'

import { dt } from 'client/common/styles/designTokens'
import { join, pxToRem } from 'client/common/styles/helpers'

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  height: pxToRem(40),
  padding: join(0, dt.sys.space.s2),
  whiteSpace: 'nowrap',
  color: dt.ref.palette.secondary,
  fontWeight: 500,
})

export const wrapperActive = style({
  background: dt.ref.palette.surface,
  color: dt.ref.palette.primary,
})
