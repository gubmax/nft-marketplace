import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/common/helpers/pxToRem'
import { SCREEN_SIZES } from 'client/common/styles/constants/screen'
import { dt } from 'client/common/styles/designTokens'

const PADDING_HEIGHT = pxToRem(40)

export const footer = style({
  background: dt.ref.palette.surface,
  borderTop: `${dt.sys.border.width.s1} solid ${dt.ref.palette.borderLight}`,

  '@media': {
    [dt.sys.media.maxWidth.mobile]: {
      padding: `${PADDING_HEIGHT} ${dt.sys.space.s5}`,
    },
  },
})

export const wrapper = style({
  minWidth: SCREEN_SIZES.tablet,
  maxWidth: SCREEN_SIZES.desktop,
  padding: `${PADDING_HEIGHT} ${dt.sys.space.s5} 0`,
})

export const topSection = style({
  '@media': {
    [dt.sys.media.maxWidth.tablet]: {
      flexDirection: 'column',
    },
  },
})

export const description = style({
  width: pxToRem(480),
  paddingRight: dt.sys.space.s4,

  '@media': {
    [dt.sys.media.maxWidth.tablet]: {
      width: '100%',
      marginBottom: dt.sys.space.s4,
      paddingRight: 'unset',
      textAlign: 'center',
    },
  },
})

export const bottomSection = style({
  marginTop: PADDING_HEIGHT,
  paddingTop: dt.sys.space.s4,
  borderTop: `${dt.sys.border.width.s1} solid ${dt.ref.palette.border}`,

  '@media': {
    [dt.sys.media.maxWidth.mobile]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
})

export const bottomLinks = style({
  color: dt.ref.palette.secondary,
})
