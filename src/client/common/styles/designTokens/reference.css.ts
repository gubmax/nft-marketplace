import { createThemeContract } from '@vanilla-extract/css'

// Palette

export const palette = createThemeContract({
  primary: null,
  secondary: null,
  accent: null,
  bg: null,
  surface: null,
  border: null,
})

export const lightPalette = {
  primary: '#0c0c0d',
  secondary: '#666666',
  accent: '#543bdc',
  bg: '#ededed',
  surface: '#ffffff',
  border: '#ebebeb',
}

export const darkPalette = {
  primary: '#f2f2f3',
  secondary: '#919191',
  accent: '#7a67e4',
  bg: '#171819',
  surface: '#202123',
  border: '#252628',
}

// Gradients

export const gradients = createThemeContract({
  primary: null,
  accent: null,
})

export const lightGradients = {
  primary: 'linear-gradient(315deg, #7f53ac 0%, #647dee 74%)',
  accent: 'linear-gradient(0deg, #543bdc 0%, #6752e0 100%)',
}

export const darkGradients = {
  primary: 'linear-gradient(315deg, #7f53ac 0%, #647dee 74%)',
  accent: 'linear-gradient(0deg, #543bdc 0%, #6752e0 100%)',
}
