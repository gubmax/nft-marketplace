import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/common/helpers/pxToRem'

export const aside = style({
  zIndex: 0,
})

export const sidebar = style({
  position: 'sticky',
  flexShrink: 0,
  top: 0,
  width: pxToRem(232),
})
