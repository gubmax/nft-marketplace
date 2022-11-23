import { theme } from './theme'

import '../src/client/common/styles/global.css'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	},
	backgrounds: {
		default: 'dark',
		values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#1c1b1f' }
    ]
	},
	docs: { theme },
}
