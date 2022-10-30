import { createThemeContract } from '@vanilla-extract/css'

// Palette

export const palette = createThemeContract({
  primary: null,
  secondary: null,
  accent: null,
  accentLight: null,
  accentDimm: null,
  bg: null,
  glass: null,
  surface: null,
  border: null,
  borderLight: null,
})

export const lightPalette = {
  primary: '#0c0c0d',
  secondary: '#666666',
  accent: '#646cff',
  accentLight: '#454ce1',
  accentDimm: '#646cff26',
  bg: '#f7f7f7',
  glass: '#ffffffd9',
  surface: '#ffffff',
  border: '#ededed',
  borderLight: '#f0f0f0',
}

export const darkPalette = {
  primary: '#f2f2f3',
  secondary: '#858585',
  accent: '#646cff',
  accentLight: '#bcc0ff',
  accentDimm: '#646cff26',
  bg: '#171819',
  glass: '#202123d9',
  surface: '#202123',
  border: '#2c2e30',
  borderLight: '#252628',
}

// Gradients

export const gradients = createThemeContract({
  primary: null,
  accent: null,
})

export const lightGradients = {
  primary: 'linear-gradient(315deg, #7f53ac 0%, #647dee 74%)',
  accent: 'linear-gradient(0deg, #4d55ff 0%, #646cff 100%)',
}

export const darkGradients = {
  primary: 'linear-gradient(315deg, #7f53ac 0%, #647dee 74%)',
  accent: 'linear-gradient(0deg, #4d55ff 0%, #646cff 100%)',
}
