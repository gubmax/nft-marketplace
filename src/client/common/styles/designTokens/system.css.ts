import { createGlobalTheme } from '@vanilla-extract/css'

import { pxToRem } from '../../helpers/pxToRem'
import { darkPalette, lightPalette } from './palette.css'

export const system = createGlobalTheme(':root', {
  border: {
    width: {
      md: pxToRem(1.25),
    },
    radius: {
      sm: pxToRem(4),
      md: pxToRem(8),
    },
  },
  color: {
    light: lightPalette,
    dark: darkPalette,
  },
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  space: {
    xs: pxToRem(4),
    sm: pxToRem(8),
    md: pxToRem(12),
    lg: pxToRem(16),
  },
})
