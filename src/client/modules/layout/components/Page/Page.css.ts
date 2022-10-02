import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/common/helpers/pxToRem'
import { dt } from 'client/common/styles/designTokens'

const HEADER_HEIGHT = pxToRem(60)
const ASIDE_WIDTH = pxToRem(240)
const PADDING_BOTTOM = pxToRem(64)

export const header = style({
  position: 'fixed',
  top: 0,
  left: ASIDE_WIDTH,
  width: '100%',
  height: HEADER_HEIGHT,
  padding: `0 ${dt.sys.space.s5}`,
  background: dt.ref.palette.surface,
  borderBottom: `${dt.sys.border.width.s1} solid ${dt.ref.palette.border}`,
  zIndex: 2,
})

export const wrapper = style({
  position: 'relative',
  display: 'flex',
})

export const main = style({
  width: '100%',
  minHeight: '100vh',
  padding: `${pxToRem(80)} ${dt.sys.space.s5} ${PADDING_BOTTOM} ${dt.sys.space.s5}`,
  zIndex: 0,
  overflow: 'hidden',
})

export const aside = style({
  position: 'sticky',
  flexShrink: 0,
  top: 0,
  width: ASIDE_WIDTH,
  padding: `${HEADER_HEIGHT} 0 ${PADDING_BOTTOM}`,
  background: dt.ref.palette.surface,
  borderRight: `${dt.sys.border.width.s1} solid ${dt.ref.palette.border}`,
  zIndex: 1,
})

export const footer = style({
  padding: dt.sys.space.s5,
  background: dt.ref.palette.surface,
  borderTop: `${dt.sys.border.width.s1} solid ${dt.ref.palette.border}`,
})
