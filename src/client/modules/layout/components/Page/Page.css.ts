import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/common/helpers/pxToRem'

const ASIDE_WIDTH = pxToRem(232)

export const header = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1,
})

export const wrapper = style({
  minHeight: '100vh',
})

export const aside = style({
  zIndex: 0,
})

export const sidebar = style({
  position: 'sticky',
  flexShrink: 0,
  top: 0,
  width: ASIDE_WIDTH,
})
