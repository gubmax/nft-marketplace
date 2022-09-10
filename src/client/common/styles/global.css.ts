import { globalStyle, keyframes } from '@vanilla-extract/css'

import { FONT_SIZE_DEFAULT } from './constants'
import { dt } from './designTokens'
import { darkPalette, lightPalette } from './designTokens/palette.css'

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
  vars: lightPalette,
  '@media': {
    '(prefers-color-scheme: dark)': {
      colorScheme: 'dark',
      vars: darkPalette,
    },
  },
})

globalStyle(':focus', {
  outline: 0,
})

globalStyle(':focus-visible', {
  outlineWidth: 0,
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
