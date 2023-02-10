import { create } from '@storybook/theming'

/**
 * @link https://storybook.js.org/docs/react/configure/theming
 */
export const theme = create({
  base: 'dark',

  colorPrimary: '#7f53ac',
  colorSecondary: '#647dee',

  // UI
  appBg: '#1c1b1f',
  appContentBg: '#24232a',
  appBorderColor: '#33313a',
  appBorderRadius: 3,

  // Typography
  fontBase:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
  // fontCode: 'monospace',

  // Text colors
  textColor: '#f2f2f3',
  textInverseColor: '#1c1b1f',

  // Toolbar default and active colors
  barTextColor: '#f2f2f3',
  barSelectedColor: '#647dee',
  barBg: '#24232a',

  // Form colors
  inputBg: '#24232a',
  inputBorder: '#33313a',
  inputTextColor: '#858585',
  inputBorderRadius: 6,

  brandTitle: 'Acme UI',
  // brandUrl: 'http://localhost:3000',
  // brandTarget: '_self',
})
