import { theme } from './theme'

import '../styles/globals.css'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	docs: { theme },
	layout: 'centered',
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	backgrounds: {
		default: 'dark',
		values: [
			{ name: 'dark', value: '#1c1b1f' },
			{ name: 'light', value: '#ffffff' },
		],
	},
}
