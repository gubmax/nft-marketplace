import { assignVars, createThemeContract } from '@vanilla-extract/css'

export const palette = createThemeContract({
  primary: null,
  secondary: null,
  accent: null,
  bg: null,
  surface: null,
})

export const lightPalette = assignVars(palette, {
  primary: '#1a1a1a',
  secondary: '#919191',
  accent: '#3f51b5',
  bg: '#e9e9e9',
  surface: '#ffffff',
})

export const darkPalette = assignVars(palette, {
  primary: '#e8e8e9',
  secondary: '#919191',
  accent: '#647dee',
  bg: '#171819',
  surface: '#202123',
})
