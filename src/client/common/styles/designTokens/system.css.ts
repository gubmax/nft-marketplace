import { createGlobalTheme } from '@vanilla-extract/css'

import { pxToRem } from '../../helpers/pxToRem'
import { darkGradients, darkPalette, lightGradients, lightPalette } from './reference.css'

export const system = createGlobalTheme(':root', {
  border: {
    width: {
      s1: pxToRem(1.2),
    },
    radius: {
      s1: pxToRem(4),
      s2: pxToRem(8),
    },
  },
  color: {
    light: lightPalette,
    dark: darkPalette,
  },
  fontSize: {
    h1: pxToRem(32),
    h2: pxToRem(24),
    h3: pxToRem(20),
    subtitle1: pxToRem(16),
    body1: pxToRem(14),
    body2: pxToRem(13),
  },
  gradients: {
    light: lightGradients,
    dark: darkGradients,
  },
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  space: {
    s1: pxToRem(4),
    s2: pxToRem(8),
    s3: pxToRem(12),
    s4: pxToRem(16),
    s5: pxToRem(20),
  },
})
