import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/common/helpers/pxToRem'
import { dt } from 'client/common/styles/designTokens'

export const wrapper = style({
  backgroundColor: '#7f53ac',
  backgroundImage: 'linear-gradient(315deg, #7f53ac 0%, #647dee 74%)',
  padding: `${dt.sys.space.s4} ${dt.sys.space.s5}`,
  borderRadius: dt.sys.border.radius.s2,
})

export const content = style({
  '@media': {
    [dt.sys.media.minWidth.mobile]: { paddingRight: dt.sys.space.s3 },
  },
})

export const title = style({
  fontSize: pxToRem(40),
  color: dt.sys.color.dark.primary,
})

export const subtitle = style([
  dt.comp.typography.h1,
  {
    color: dt.sys.color.dark.primary,
  },
])

export const diamond = style({
  position: 'relative',
})

export const button = style({
  minWidth: 'unset',

  ':last-child': { marginRight: 0 },

  '@media': {
    [dt.sys.media.minWidth.mobile]: {
      width: 'unset',
      minWidth: pxToRem(140),
    },
  },
})
