import { style } from '@vanilla-extract/css'

import { dt } from 'client/common/styles/designTokens'

export const column = style({
  ':last-of-type': { marginRight: 'unset' },

  '@media': {
    [dt.sys.media.maxWidth.mobile]: {
      width: '50%',
      marginRight: 'unset',
      alignItems: 'center',
    },
  },
})

export const title = style([
  dt.comp.typography.subtitle1,
  {
    fontWeight: 500,
  },
])

export const link = style({
  color: dt.ref.palette.secondary,

  ':last-of-type': { marginBottom: 'unset' },
})
