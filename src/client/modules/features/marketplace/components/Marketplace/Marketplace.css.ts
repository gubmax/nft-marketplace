import { style } from '@vanilla-extract/css'

import { dt } from 'client/common/styles/designTokens'
import { join, pxToRem } from 'client/common/styles/helpers'

const PADDINT_TOP = pxToRem(112)

export const wrapper = style({
  position: 'relative',
  minHeight: '100vh',
  maxWidth: dt.sys.screen.desktop,
  padding: join(0, dt.sys.space.s5, pxToRem(64)),
})

export const aside = style({
  paddingTop: PADDINT_TOP,
  paddingRight: dt.sys.space.s5,
  zIndex: 0,
})

export const sidebar = style({
  position: 'sticky',
  top: PADDINT_TOP,
  width: pxToRem(232),
})

export const content = style({
  paddingTop: PADDINT_TOP,
})
