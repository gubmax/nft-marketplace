import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/common/helpers/pxToRem'
import { dt } from 'client/common/styles/designTokens'

export const counter = style({
  background: dt.ref.gradients.accent,
  borderRadius: '50%',
  color: dt.sys.color.dark.primary,
  fontSize: dt.sys.fontSize.body2,
  height: pxToRem(20),
  minWidth: pxToRem(20),
  padding: dt.sys.space.s1,
  position: 'absolute',
  right: pxToRem(-5),
  textAlign: 'center',
  top: pxToRem(-5),
})
