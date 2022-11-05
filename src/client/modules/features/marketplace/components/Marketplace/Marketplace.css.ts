import { style } from '@vanilla-extract/css'

import { dt } from 'client/common/styles/designTokens'
import { join, pxToRem } from 'client/common/styles/helpers'

const PADDINT_TOP = pxToRem(112)
const PADDINT_BOTTOM = pxToRem(64)

export const wrapper = style({
  position: 'relative',
  minHeight: '100vh',
  maxWidth: dt.sys.screen.desktop,
  padding: join(0, dt.sys.space.s5),
})

export const aside = style({
  padding: join(PADDINT_TOP, dt.sys.space.s3, PADDINT_BOTTOM, 0),
  marginRight: pxToRem(40),
  borderRight: join(dt.sys.border.width.s1, 'solid', dt.ref.palette.borderLight),
  zIndex: 0,
})

export const sidebar = style({
  position: 'sticky',
  top: PADDINT_TOP,
  width: pxToRem(232),
})

export const content = style({
  paddingTop: PADDINT_TOP,
  paddingBottom: PADDINT_BOTTOM,
})
