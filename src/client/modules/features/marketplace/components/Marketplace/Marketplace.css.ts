import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/common/helpers/pxToRem'
import { SCREEN_SIZES } from 'client/common/styles/constants/screen'
import { dt } from 'client/common/styles/designTokens'

const PADDINT_TOP = pxToRem(100)

export const wrapper = style({
  position: 'relative',
  minHeight: '100vh',
  maxWidth: SCREEN_SIZES.desktop,
  padding: `0 ${dt.sys.space.s5} ${pxToRem(64)}`,
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
