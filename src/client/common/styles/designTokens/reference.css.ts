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
  primary: '#1c1b1f',
  secondary: '#666666',
  accent: '#646cff',
  accentLight: '#454ce1',
  accentDimm: '#646cff26',
  bg: '#ffffff',
  glass: '#ffffffd9',
  surface: '#f3f2f8',
  border: '#e4e1ef',
  borderLight: '#f0eef6',
}

export const darkPalette = {
  primary: '#f2f2f3',
  secondary: '#858585',
  accent: '#646cff',
  accentLight: '#bcc0ff',
  accentDimm: '#646cff26',
  bg: '#1c1b1f',
  glass: '#1c1b1fd9',
  surface: '#24232a',
  border: '#33313a',
  borderLight: '#27252c',
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
