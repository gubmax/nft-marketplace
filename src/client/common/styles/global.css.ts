import { assignVars, globalStyle, keyframes } from '@vanilla-extract/css'

import { FONT_SIZE_DEFAULT } from './constants'
import { dt } from './designTokens'
import { join, pxToRem } from './helpers'
import {
  darkGradients,
  darkPalette,
  gradients,
  lightGradients,
  lightPalette,
  palette,
} from './designTokens/reference.css'

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

globalStyle('html', {
  fontSize: FONT_SIZE_DEFAULT,
  WebkitTextSizeAdjust: '100%',
})

globalStyle('body, root', {
  width: '100%',
  minHeight: '100vh',
})

globalStyle('body', {
  color: dt.ref.palette.primary,
  background: dt.ref.palette.bg,
  fontFamily: dt.sys.fontFamily,
  overscrollBehavior: 'none',

  MozOsxFontSmoothing: 'grayscale',
  WebkitFontSmoothing: 'antialiased',
  WebkitTapHighlightColor: 'transparent',
})

globalStyle('a', {
  color: 'unset',
  cursor: 'pointer',
  textDecoration: 'none',
})

globalStyle(':root', {
  colorScheme: 'light',
  vars: {
    ...assignVars(palette, lightPalette),
    ...assignVars(gradients, lightGradients),
  },
  '@media': {
    [dt.sys.media.prefersColorScheme.dark]: {
      colorScheme: 'dark',
      vars: {
        ...assignVars(palette, darkPalette),
        ...assignVars(gradients, darkGradients),
      },
    },
  },
})

globalStyle(':focus', {
  outline: 0,
})

globalStyle(':focus-visible', {
  outline: join(pxToRem(3), 'solid', dt.ref.palette.accent),
  outlineOffset: pxToRem(3),
})

const autofill = keyframes({
  to: {
    color: 'inherit',
    background: 'inherit',
  },
})

globalStyle('input:-webkit-autofill', {
  animationName: autofill,
  animationFillMode: 'both',
})
