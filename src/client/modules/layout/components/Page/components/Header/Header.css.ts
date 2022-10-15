import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/common/helpers/pxToRem'
import { SCREEN_SIZES } from 'client/common/styles/constants/screen'
import { dt } from 'client/common/styles/designTokens'

export const header = style({
  background: dt.ref.palette.surface,
  borderBottom: `${dt.sys.border.width.s1} solid ${dt.ref.palette.borderLight}`,
})

export const wrapper = style({
  minWidth: SCREEN_SIZES.tablet,
  maxWidth: SCREEN_SIZES.desktop,
  height: pxToRem(56),
  padding: `0 ${dt.sys.space.s5}`,
})

export const link = style([
  dt.comp.typography.subtitle1,
  {
    padding: `${dt.sys.space.s2} ${dt.sys.space.s3}`,

    ':focus': { color: dt.ref.palette.accent },
  },
])
