import { dark, light } from './themes'

import '../src/styles/globals.css'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	backgrounds: { disable: true },
	darkMode: {
		current: 'dark',
		dark,
		light,
		stylePreview: true,
	},
	docs: { theme: dark },
	layout: 'centered',
}
