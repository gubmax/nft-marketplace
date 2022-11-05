import { style } from '@vanilla-extract/css'

import { dt } from 'client/common/styles/designTokens'
import { join, pxToRem } from 'client/common/styles/helpers'

export const counter = style({
  background: dt.ref.gradients.accent,
  borderRadius: '50%',
  boxShadow: join('inset', 0, 0, 0, dt.sys.border.width.s1, dt.ref.palette.accent),
  color: dt.sys.color.dark.primary,
  fontSize: dt.sys.fontSize.body2,
  height: pxToRem(18),
  minWidth: pxToRem(18),
  lineHeight: pxToRem(18),
  padding: dt.sys.space.s1,
  position: 'absolute',
  right: pxToRem(-4),
  textAlign: 'center',
  top: pxToRem(-4),
})
